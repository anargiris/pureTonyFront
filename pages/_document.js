import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap"
            rel="stylesheet"
          ></link>
          <script src="https://www.paypal.com/sdk/js?client-id=AZwibABPB9iIzF5Os51Ky8MfzHSZhzgm2XCb63DDTsVBA2Zfqe5FfJHCqT1y1PHRqnfL2T8pbTgzNr27&disable-funding=credit,card"></script>
          <script src="https://www.paypalobjects.com/api/checkout.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
