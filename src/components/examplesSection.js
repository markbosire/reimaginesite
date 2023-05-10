import "../index.css";
function ExamplesSection() {
  return (
    <div className="ExamplesSection">
      <section>
        <span>Examples</span>
        <div className="imagesContainer">
          <div className="imgContainer">
            <img src="./images/example1.png" alt=""></img>
          </div>
          <div className="imgContainer">
            <img src="./images/example2.png" alt=""></img>
          </div>
        </div>
        <div className="h1Container">
          <h1>
            “Remagine is a great place to start my design process. All I need to
            do is press a button and I have a bunch of designs I can build
            upon."
          </h1>
          <span>Johnnie Gomez</span>
        </div>
      </section>
    </div>
  );
}

export default ExamplesSection;
