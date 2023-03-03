import Header from "./Header";

const Hero = () => {
  return (
    <div className="hero__container">
      <Header />
      <div className="hero container">
        <section>
          <h1 className="text-align">More than just shoter links</h1>
          <p className="text-align hero-p">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <div className="center-flex">
          <button className="btn cyan-btn ">
            <a href="#">Get Started</a>
          </button>
          </div>
        </section>
        <div className="hero__img">
        </div>
      </div>
    </div>
  );
};

export default Hero;
