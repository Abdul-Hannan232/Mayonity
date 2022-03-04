import { Link } from "react-router-dom";
import TinySlider from "tiny-slider-react";
import SectionHeadingTwo from "../heading/HeadingTwo";
import PortfolioData from '../../data/portfolio/portfolio-one.json';

export default function PortfolioOne() {
    const settings = {
        items: 4,
        gutter: 30,
        slideBy: 1,
        autoplay: false,
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 750,
        loop: false,
        nav: false,
        mouseDrag: true,
        controlsText: [('<i class="bi bi-arrow-left"></i>'), ('<i class="bi bi-arrow-right"></i>')],
        responsive: {
            320: {
                items: 1,
                gutter: 0
            },
            480: {
                items: 2,
                gutter: 30
            },
            992: {
                items: 3,
                gutter: 30
            },
            1380: {
                items: 4,
                gutter: 30
            }
        }
    };

    const portfolioSlides = PortfolioData.map((item, index) =>
        <div key={index}>
            <div className="single-portfolio-area" style={{ position: "relative" }}>
                <img src={`${process.env.PUBLIC_URL}/${item.image}`} alt={item.title} />                
                <div className="overlay-content">
                    <div className="portfolio-title">
                        <h6 className="mb-0">{item.title}</h6>
                    </div>
                    <div className="portfolio-links">
                        <button className="bg-transparent border-0" >
                            <i className={`bi ${item.firstIcon}`}></i>
                        </button>
                        <Link to={`${process.env.PUBLIC_URL}/portfolio-details/${item.id}`} >
                            <i className={`bi ${item.secondIcon}`}></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )

    return(
        <div className="saasbox-portfolio-area" >
             
            <SectionHeadingTwo 
                subtitle="Portfolio" 
                heading="Check our latest <br /> awesome creative works" 
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template." 
                btnColor="btn-primary" 
                btnUrl="/portfolio-standard" 
                btnText="View All Works"
              
            />

            <div className="container-fluid" >
                <div className="portfolio-wrapper px-3" >
                    <TinySlider settings={settings}   style={{display:"flex"}}>
                        {portfolioSlides}
                    </TinySlider>
                </div>
            </div>
        </div>
    )
}