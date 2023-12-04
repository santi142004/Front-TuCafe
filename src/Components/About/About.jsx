

const About = () => {
  return (
    <section className="home" id="home">
      <div className="row">
        <div className="content">
          <h3 className="letra">tu guía definitiva para descubrir los mejores lugares de café y cafeterías en el encantador Quindío.</h3>
          <a href="#menu" className="btn-about">cafeterías en el <br /> encantador Quindío</a>
        </div>

        <div className="image">
          <img src="image/home-img-1.png" className="main-home-image" alt="" />
        </div>
      </div>

      <div className="image-slider">
        <img src="image/home-img-1.png" alt="" />
        <img src="image/home-img-2.png" alt="" />
        <img src="image/home-img-3.png" alt="" />
      </div>
    </section>
  );
};

export default About;
