export function getThumbnailHtml(title: string) {
  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#FFF",
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <img
        height="80px"
        src="https://www.sigcoding.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsig.0881b458.png&w=828&q=75&dpl=dpl_HszpbeKCL5ubrcij3XuMrUCroSZz"
        alt="Sig Logo"
      />
      <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "4rem" }}>
        {title}
      </h1>
    </div>
  );
}
