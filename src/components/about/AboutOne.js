import AboutText from "./AboutText";
import SingleAbout from "./SingleAbout";
import AboutData from '../../data/about/about.json';

export default function AboutOne() {

    const aboutItems = AboutData.slice(0, 4);
    const abouts = aboutItems.map((about, index) =>
        <SingleAbout 
            key={index} 
            bgColor={about.bgColor} 
            icon={about.icon} 
            iconBgColor={about.iconBgColor} 
            title={about.title} 
            titleColor={about.titleColor} 
            subtitle={about.subtitle} 
            subtitleColor={about.subtitleColor}
        />
    )

    return(
        <div className="about-area">
            <div className="container">
                <div className="row align-items-center justify-content-between g-5">                
                    <div className="col-12 col-lg-7">
                        <div className="about-content">
                            <div className="row g-4 g-xl-5">
                                {abouts}
                            </div>
                        </div>
                    </div>

                    {/* About Text */}
                    <AboutText
                        subtitle="Our key features"
                        title="We focus on growth of your business."
                        para="It's crafted with the latest trend of design &amp; coded with all modern approaches. It's a robust &amp; multi-dimensional usable template."
                        btnOneText="Discover More"
                        btnOneUrl="/about-standard"
                        btnTwoText="Talk with us"
                        btnTwoUrl="/contact"
                    />
                </div>
            </div>
        </div>
    )
}