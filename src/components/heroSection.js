import "../index.css";
function HeroSection() {
  return (
    <div className="heroSection">
      <section>
        <div className="left">
          <h1>TXT2WEB</h1>
          <p>
            Remagine generates beautiful, editable web designs from a simple
            text description.
          </p>
          <div className="inputContainer">
            <input type="email" placeholder="Email address"></input>
            <div> Get early access</div>
          </div>
        </div>
        <div className="right">
          <div className="imgContainer">
            <img src="./images/img1.png" alt="heroImage" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default HeroSection;
