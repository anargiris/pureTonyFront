const SecondVideo = () => {
  return (
    <video
      src="/videos/video1.mp4"
      className="absolute object-cover opacity-40 w-full"
      autoPlay={true}
      loop={Infinity}
      muted={true}
    />
  );
};

export default SecondVideo;
