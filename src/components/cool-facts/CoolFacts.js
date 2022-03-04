import SectionHeading from '../heading/HeadingOne';
import SingleCoolFact from './SingleCoolFact';

export default function CoolFacts() {
    return(
        <div className="cool-facts-wrapper">
            {/* Circle Animation */}
            <div className="circle-animation">
                <div className="circle1" />
                <div className="circle2" />
                <div className="circle3" />
                <div className="circle4" />
            </div>

            {/* Background Image */}
            <div className="cta-background-image">
                <img src={`${process.env.PUBLIC_URL}/assets/img/core-img/wm.png`} alt="" />
            </div>

            {/* Heading: src > components > heading > Heading */}
            <SectionHeading
                subtitle="Some Milestone"
                heading="We already completed 470 projects successfully and more counting."
            />

            <div className="container">
                <div className="row g-4 justify-content-center">
                    {/* Single Cool Fact */}
                    <SingleCoolFact 
                        countUpValue="478" 
                        suffix="+" 
                        title="Total Projects"
                    />
                    
                    {/* Single Cool Fact */}
                    <SingleCoolFact 
                        countUpValue="21" 
                        suffix="+" 
                        title="Team Members"
                    />
                    
                    {/* Single Cool Fact */}
                    <SingleCoolFact 
                        countUpValue="3618" 
                        suffix="+" 
                        title="Coffee Served"
                    />
                </div>
            </div>
        </div>
    )
}