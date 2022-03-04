import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { Link } from 'react-router-dom';
import TestimonialData from '../../data/testimonial/testimonial-two.json';
import SectionHeading from "../heading/HeadingOne";

export default function TestimonialTwo() {
    
    const testimonialArr = TestimonialData;
    const testimonialPopover = testimonialArr.map((ele, index) => (
        <div key={index} className={`cir-testimonial tes${ele.id}`} >
            <OverlayTrigger   placement="bottom" overlay={
                <Popover id={`testimonialPopover${ele.id}`} className="testimonial-popover">
                    <Popover.Header as="h3">
                        {ele.name}
                    </Popover.Header>
                    <Popover.Body>
                        {ele.testimonial}
                    </Popover.Body>
                </Popover>
            }>
                <img src={`${process.env.PUBLIC_URL}/${ele.thumbnail}`} alt={ele.name} />
            </OverlayTrigger>
        </div>
    ))

    return(
        <div className="client-feedback-area feedback-2 pt-120 pb-120">
            {/* Section Heading */}
            <SectionHeading 
                subtitle="Testimonialssssss" 
                heading="Read some reviews from our beloved clients about our work." 
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template." 
            />

            <div className="container">
                {/* Testimonial Wrapper */}
                <div className="circle-testimonial-wrapper rounded-circle" >
                    <div className="circle-tes-sub-wrap1 position-absolute rounded-circle" />
                    <div className="circle-tes-sub-wrap2 position-absolute rounded-circle" />
                    <div className="circle-tes-sub-wrap3 position-absolute rounded-circle" />
                    <div className="circle-tes-sub-wrap4 position-absolute rounded-circle" />

                    {testimonialPopover}
                </div>
            </div>

            <div className="container">
                <div className="text-center">
                    <Link className="btn btn-warning mt-70" to="/reviews">
                        View All Reviews
                    </Link>
                </div>
            </div>
        </div>
    )
}