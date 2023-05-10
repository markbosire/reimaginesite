import "../index.css";
function SubscribeSection() {
  return (
    <div className="heroSection subscribe">
      <section>
        <div className="left">
          <h1>Sign up for early access</h1>
          <div className="inputContainer">
            <input type="email" placeholder="Email address"></input>
            <div>Subscribe</div>
          </div>
        </div>
        <div className="right">
          <div className="imgContainer">
            <img src="./images/img4.png" alt="heroImage" />
          </div>
        </div>
      </section>
    </div>
  );
}
export default SubscribeSection;
