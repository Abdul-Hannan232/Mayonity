import Header from "../components/header/Header";
import BreadcrumbTwo from "../components/breadcrumb/BreadcrumbTwo";
import Footer from "../components/footer/Footer";
import CtaThree from "../components/cta/CtaThree";
import VideoCard from "../components/video/VideoCard";
import SEO from "../components/common/SEO";
import Services from "../components/services/Services";
import SingleService from "../components/services/SingleService";
import { useContext, useEffect, useState } from "react";
import { BackEndUrlContext } from '../BackEndUrlContext'

export default function ServiceStandard() {


    const BackEndUrl = useContext(BackEndUrlContext);

    const [homeBanner, setHomeBanner] = useState('');
    const [homeCTA, sethomeCTA] = useState('');
    useEffect(() => {
        async function fetchMyAPI() {
            
 
            try{let response =await (await fetch(BackEndUrl+"/api/home-banner?_format=json")).json();
            setHomeBanner(response);
            const homeCTAresp = await (await fetch(BackEndUrl+"/api/all-cta?_format=json")).json();
            sethomeCTA(homeCTAresp[0])
        }catch(e)
        {
            console.log("Internet Problem",e)
        }
        }
        fetchMyAPI()
    }, [])

    return (
        <>
            <SEO title="Service Standard" />

            <Header
                brandLogo="assets/img/core-img/logo-white.png"
                headerStyle="header-2"
                buttonColor="btn-warning"
            />

            <BreadcrumbTwo
                breadcrumbTitle="Service Standard"
                homePageUrl="/"
                homePageText="Home"
                currentPageText="Service" 
            />
<br /><br /><br />
           
            <div className="container">
                <div className="row justify-content-center g-4 g-xl-5"> 

                       {/* Single Service */}

                    <SingleService 
                        iconBgColor="" 
                        iconName="bi-app-indicator" 
                        heading="Apps Developement" 
                        para="It's crafted with the latest trend of design." 
                        url="/" 
                        btnText="Learn more" 
                    />

                    {/* Single Service */}
                    <SingleService 
                        iconBgColor="bg-warning" 
                        iconName="bi-columns" 
                        heading="Website Developement" 
                        para="It's crafted with the latest trend of design." 
                        url="/" 
                        btnText="Learn more" 
                    />

                    {/* Single Service */}
                    <SingleService 
                        iconBgColor="bg-info" 
                        iconName="bi-pie-chart" 
                        heading="Content &amp; SEO Marketing" 
                        para="It's crafted with the latest trend of design." 
                        url="/" 
                        btnText="Learn more" 
                    />

                    {/* Single Service */}
                    <SingleService 
                        iconBgColor="bg-danger" 
                        iconName="bi-sun" 
                        heading="Business Creative Leads" 
                        para="It's crafted with the latest trend of design." 
                        url="/" 
                        btnText="Learn more" 
                    />

                    {/* Single Service */}
                    <SingleService 
                        iconBgColor="bg-success" 
                        iconName="bi-tools" 
                        heading="Ultimate Solution" 
                        para="It's crafted with the latest trend of design." 
                        url="/" 
                        btnText="Learn more" 
                    />

                    {/* Single Service */}
                    <SingleService 
                        iconBgColor="" 
                        iconName="bi-play" 
                        heading="Learning for future" 
                        para="It's crafted with the latest trend of design." 
                        url="/" 
                        btnText="Learn more" 
                    />
                
                </div>
            </div>
            <br /><br /><br />
            <VideoCard
                bgImage="assets/img/bg-img/15.jpg"
                videoId="3qyhgV0Zew0"
            />

            <CtaThree
                title="Let's start with the simple way to create a website."
                btnUrl=""
                btnText="Buy Now"
            />

            <Footer
                footerLogo="assets/img/core-img/logo.png"

            />
        </>
    )
}