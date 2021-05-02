const OpenerVideo = () => {
  return (
    <div className="max-w-full">
      {" "}
      <video
        src="/videos/video2.mp4"
        style={{ maxHeight: "200px" }}
        className="mx-auto rounded-full object-contain"
        autoPlay={true}
        loop={Infinity}
        muted={true}
      />
    </div>
  );
};

export default OpenerVideo;
