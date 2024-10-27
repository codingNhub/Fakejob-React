import React, { useState } from 'react';
import './ExploreOpportunities.css';
const ExploreOpportunities = () => {
   // const [currentSlide, setCurrentSlide] = useState(0); // State to track the current slide
    const totalSlides = 5; // Total number of slides

    const handlePrevClick = () => {
      //  setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
    };

    const handleNextClick = () => {
      //  setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
    };


  return (
    <section className="features_17 mbr-embla explore-opportunities" id="features-17-u84ruZSyyj">
      <div className="position-relative">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12 content-head">
              <div className="mbr-section-head mb-5">
                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                  <strong>Explore Exciting Opportunities</strong>
                </h4>
                <h5 className="mbr-section-subtitle mbr-fonts-style align-center mb-0 mt-4 display-7">Discover Your Dream Job Today</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="embla" data-skip-snaps="true" data-align="center" data-contain-scroll="trimSnaps" data-auto-play-interval="5" data-draggable="true">
          <div className="embla__viewport container-fluid">
            <div className="embla__container">
              <div className="embla__slide slider-image item active" style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                <div className="slide-content">
                  <div className="item-img">
                    <div className="item-wrapper">
                      <img src="/assets/images/discover job.jpg" alt= ""/>
                    </div>
                  </div>
                  <div className="item-content">
                    <h5 className="item-title mbr-fonts-style display-5">
                      <strong>Discover Real Opportunities</strong>
                    </h5>
                    <p className="mbr-text mbr-fonts-style mt-3 display-7">We help you find genuine job openings so you can make smart career choices</p>
                  </div>
                  <div className="mbr-section-btn item-footer mt-2"><a href="" className="btn item-btn btn-primary display-7" target="_blank" rel="noopener noreferrer">Explore Now</a></div>
                </div>
              </div>
              <div class="embla__slide slider-image item" style={{ marginLeft: '1rem', marginRight: '1rem' }}>
						<div class="slide-content">
							<div class="item-img">
								<div class="item-wrapper">
									<img src="/assets/images/realjob.jpg" alt="Description of the image"/>
								</div>
							</div>
							<div class="item-content">
								<h5 class="item-title mbr-fonts-style display-5">
									<strong>Find Hidden Job Treasures</strong>
								</h5>
								<p class="mbr-text mbr-fonts-style mt-3 display-7">Uncover valuable job listings that match your skills and interests, even if they’re not in the spotlight</p>
							</div>
							<div class="mbr-section-btn item-footer mt-2">
								<a href="" class="btn item-btn btn-primary display-7" target="_blank">Explore Now</a>
							</div>
						</div>
					</div>
					<div class="embla__slide slider-image item" style={{ marginLeft: '1rem', marginRight: '1rem' }}>
						<div class="slide-content">
							<div class="item-img">
								<div class="item-wrapper">
									<img src="/assets/images/carrer chart.jpg" data-slide-to="3" data-bs-slide-to="3" alt="Description of the image"/>
								</div>
							</div>
							<div class="item-content">
								<h5 class="item-title mbr-fonts-style display-5">
									<strong>Chart Your Career Path</strong>
								</h5>
								<p class="mbr-text mbr-fonts-style mt-3 display-7">Get tools and guidance to plan and advance in your career journey</p>
							</div>
							<div class="mbr-section-btn item-footer mt-2">
								<a href="" class="btn item-btn btn-primary display-7" target="_blank">Explore Now</a>
							</div>
						</div>
					</div>
					<div class="embla__slide slider-image item" style={{ marginLeft: '1rem', marginRight: '1rem' }}>
						<div class="slide-content">
							<div class="item-img">
								<div class="item-wrapper">
									<img src="/assets/images/jobinsight.jpg" alt="Description of the image" />
								</div>
							</div>
							<div class="item-content">
								<h5 class="item-title mbr-fonts-style display-5">
									<strong>Gain Exclusive Job Insights</strong>
								</h5>
								<p class="mbr-text mbr-fonts-style mt-3 display-7">Learn about job market trends, company cultures, and growth opportunities you won’t find elsewhere</p>
							</div>
							<div class="mbr-section-btn item-footer mt-2">
								<a href="" class="btn item-btn btn-primary display-7" target="_blank">Explore Now</a>
							</div>
						</div>
					</div>
					<div class="embla__slide slider-image item" style={{ marginLeft: '1rem', marginRight: '1rem' }}>
						<div class="slide-content">
							<div class="item-img">
								<div class="item-wrapper">
									<img src="/assets/images/real-job-blog.jpg" data-slide-to="5" data-bs-slide-to="5" alt="Description of the image"/>
								</div>
							</div>
							<div class="item-content">
								<h5 class="item-title mbr-fonts-style display-5">
									<strong>Take Charge of Your Job Search</strong>
								</h5>
								<p class="mbr-text mbr-fonts-style mt-3 display-7">Get the resources and knowledge you need to navigate your job hunt and boost your career</p>
							</div>
							<div class="mbr-section-btn item-footer mt-2">
								<a href="" class="btn item-btn btn-primary display-7" target="_blank">Explore Now</a>
							</div>
						</div>
					</div>
				</div>
			</div>
        
            <button className="embla__button embla__button--prev" onClick={handlePrevClick}>
                <span className="mobi-mbri mobi-mbri-arrow-prev mbr-iconfont" aria-hidden="true"></span>
                <span className="sr-only visually-hidden visually-hidden visually-hidden">Previous</span>
            </button>

            {/* Next button */}
            <button className="embla__button embla__button--next" onClick={handleNextClick}>
                <span className="mobi-mbri mobi-mbri-arrow-next mbr-iconfont" aria-hidden="true"></span>
                <span className="sr-only visually-hidden visually-hidden visually-hidden">Next</span>
            </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreOpportunities;
