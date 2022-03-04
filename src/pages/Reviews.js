import { Link } from "react-router-dom";
import BreadcrumbOne from "../components/breadcrumb/BreadcrumbOne";
import Header from "../components/header/Header";
import ReviewsData from "../data/testimonial/testimonial-one.json";
import Footer from "../components/footer/Footer";
import SEO from "../components/common/SEO";

export default function Reviews() {
    const allReviews = ReviewsData.map((ele, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-4 portfolio-item">
            <div className="card feedback-card border-0 p-2 shadow-sm">
                <div className="card-body p-4 p-md-5">
                    <div className="client-info d-flex align-items-center">
                        <div className="client-thumb rounded-circle me-2 position-relative">
                            <img className="rounded-circle" src={ele.image} alt={ele.name} />
                            <span className="rounded-circle">
                                <i className="bi bi-check" />
                            </span>
                        </div>
                        <div className="client-name">
                            <h6 className="fz-14 mb-0">{ele.name}</h6>
                            <p className="mb-0 fz-12">{ele.designation}</p>
                        </div>
                    </div>
                    <div className="ratings text-warning mt-4 mb-3 fz-14">
                        <i className={`bi ${ele.ratingOne}`} />
                        <i className={`bi ${ele.ratingTwo}`} />
                        <i className={`bi ${ele.ratingThree}`} />
                        <i className={`bi ${ele.ratingFour}`} />
                        <i className={`bi ${ele.ratingFive}`} />
                    </div>
                    <p className="text-dark mb-0 fw-bold">{ele.testimonial}</p>
                </div>
            </div>
        </div>
    ))

    return(
        <div>
            <SEO title="Reviews" />

            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle=""
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbOne 
                breadcrumbImage="assets/img/bg-img/7.jpg" 
                breadcrumbTitle="Client Reviews" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Reviews"
            />

            <div className="bg-gray pt-120 pb-120">
                <div className="container">
                    <div className="row g-4 saasbox-portfolio-filter">
                        {allReviews}
                    </div>

                    <div className="text-center">
                        <Link className="btn btn-primary mt-5" to="#">
                            Load More Reviews
                        </Link>
                    </div>
                </div>
            </div>

            <Footer 
                footerLogo="assets/img/core-img/logo-white.png"
                footerStyle="footer-2"
            />
        </div>
    )
}