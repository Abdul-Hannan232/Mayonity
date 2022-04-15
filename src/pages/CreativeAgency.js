import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import HeroOne from "../components/hero/HeroOne";
import Divider from "../components/divider/Divider";
import AboutOne from "../components/about/AboutOne";
import CoolFacts from "../components/cool-facts/CoolFacts";
import Features from "../components/features/Features";
import Services from "../components/services/Services";
import SaasboxTab from "../components/tab/Tab";
import PricingTableOne from "../components/pricing/PricingOne";
import Team from "../components/team/Team";
import PartnerOne from "../components/partner/PartnerOne";
import Cta1 from "../components/cta/CtaOne";
import PortfolioOne from "../components/portfolio/PortfolioOne";
import TestimonialTwo from "../components/testimonial/TestimonialTwo";

import BlogOne from "../components/blog/BlogOne";
import SEO from "../components/common/SEO";
import { useContext, useEffect, useState } from "react";
import { BackEndUrlContext } from '../BackEndUrlContext'

export default function CreativeAgency() {
    const BackEndUrl = useContext(BackEndUrlContext);

    const [homeBanner, setHomeBanner] = useState('');
    useEffect(() => {
        async function fetchMyAPI() {
            // let baseURL = "https://www.admin.mayonity.com/api/home-banner?_format=json"

            let response = await fetch('http://www.admin.mayonity.com/api/home-banner?_format=json')

            console.log(response);
            response = await response.json()
            console.log(response);

            setHomeBanner(response);

        }
        fetchMyAPI()
    }, [])

    if (homeBanner[0]) {
        var apiData = {
            category1: homeBanner[0].field_home_banner_category1,
            category2: homeBanner[0].field_home_banner_category2,
            category3: homeBanner[0].field_home_banner_category3,
            heading: homeBanner[0].field_home_banner_heading,
            para: homeBanner[0].field_home_banner_para,
            btnurl: homeBanner[0].field_home_banner_button,
            btntext: homeBanner[0].field_home_banner_button_text,
            heroThumb: homeBanner[0].field_home_banner_image
        }


    }



    return (
        <div className="creative-agency-wrap">
            <SEO title="Creative Agency" />

            <Header
                brandLogo="assets/img/core-img/logo-white.png"
                headerStyle=""
                buttonColor="btn-warning"
            />

            <HeroOne
                heroThumb="assets/img/illustrator/hero-3.png"
                catagory={[apiData ? apiData.category1 : '', apiData ? apiData.category2 : '', apiData ? apiData.category3 : '']}
                heading={apiData ? apiData.heading : ''}
                para={apiData ? apiData.para : ''}
                buttons={[
                    {
                        buttonColor: "btn-warning",
                        url: apiData ? apiData.btnurl : '',
                        text: apiData ? apiData.btntext : ''
                    },

                ]}
            />

            <Divider />

            <AboutOne />

            <Divider />

            <Divider />

            <CoolFacts />

            <Divider />

            <Divider />

            {/* <Services /> */}

            {/* <Divider /> */}

            {/* May we use it later */}
            {/* <Features /> */}

            {/* <Divider /> */}

            {/* <SaasboxTab /> */}

            {/* <Divider /> */}

            {/* <PricingTableOne /> */}

            {/* <Divider /> */}

            <PortfolioOne />

            <Divider />

            <Team
                subTitle="Creative Sailors"
                title="Our world class experienced team members."
                para="It's crafted with the latest trend of design &amp; coded with all modern approaches."
                btnLink="/team"
                btnText="View All Members"
            />

            {/* <TestimonialTwo /> */}

            {/* <Divider />

            <PartnerOne /> */}

            {/* <Divider />

            <BlogOne /> */}

            <Divider />

            <Cta1
                CtaThumb={'assets/img/bg-img/1.jpg'}
                title="Build a beautiful website very easily within few hours, not a day."
                btnUrl="/contact"
                btnText="Get started now"
            />

            <Footer
                footerLogo="assets/img/core-img/logo-white.png"
                footerStyle=""
            />

        </div>
    )
}