import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const providers = [
  Providers.GitHub({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  }),
  Providers.Google({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    authorizationUrl:
      "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
  }),
  Providers.Facebook({
    clientId: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
  }),
];

const callbacks = {
  /**
   * @param  {object} session      Session object
   * @param  {object} token        User object    (if using database sessions)
   *                               JSON Web Token (if not using database sessions)
   * @return {object}              Session that will be returned to the client
   */
  async session(session, token) {
    if (token?.accessToken) {
      // Add property to session, like an access_token from a provider
      session.accessToken = token.accessToken;
    }
    return session;
  },

  /**
   * @param  {object}  token     Decrypted JSON Web Token
   * @param  {object}  user      User object      (only available on sign in)
   * @param  {object}  account   Provider account (only available on sign in)
   * @param  {object}  profile   Provider profile (only available on sign in)
   * @param  {boolean} isNewUser True if new user (only available on sign in)
   * @return {object}            JSON Web Token that will be saved
   */
  async jwt(token, user, account, profile, isNewUser) {
    // Add access_token to the token right after signin
    if (account?.accessToken) {
      token.accessToken = account.accessToken;
    }
    return token;
  },
};

const options = {
  site: process.env.NEXTAUTH_URL,
  pages: {
    signIn: "/signin",
  },
  providers,
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks,

  debug: false,
};

export default (req, res) => NextAuth(req, res, options);
