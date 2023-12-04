
function Review() {
  return (
    <section className="review" id="review">
      <h1 className="heading">Opiniones <span>Lo que Dicen los Clientes</span></h1>

      <div className="swiper review-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide box">
           
            <img src="image/pic-1.png" alt="" />
            <div className="stars">
              
            </div>
            <p>sit amet, consectetur adipisicing elit. Quo, earum quis dolorem quaerat tenetur illum.</p>
            <h3>John Doe</h3>
            <span>Satisfied Client</span>
          </div>

          <div className="swiper-slide box">
            
            <img src="image/pic-2.png" alt="" />
            
            <p>sit amet consectetur adipisicing elit. Rerum optio quasi ut, illo ipsam assumenda.</p>
            <h3>John Doe</h3>
            <span>Satisfied Client</span>
          </div>

          <div className="swiper-slide box">
           
            <img src="image/pic-3.png" alt="" />
           
            <p>sit amet consectetur adipisicing elit. Eius asperiores aliquam hic quis! Eligendi, aliquam.</p>
            <h3>John Doe</h3>
            <span>Satisfied Client</span>
          </div>

          <div className="swiper-slide box">
            
            <img src="image/pic-4.png" alt="" />
            <p>sit amet consectetur adipisicing elit. Eligendi modi perspiciatis distinctio velit aliquid a.</p>
            <h3>John Doe</h3>
            <span>Satisfied Client</span>
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Review;
