import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import BreadcrumbOne from "../components/breadcrumb/BreadcrumbOne";
import Divider from "../components/divider/Divider";
import CtaThree from "../components/cta/CtaThree";
import Footer from "../components/footer/Footer";
import TeamData from "../data/team/team-member.json";
import SEO from "../components/common/SEO";

export default function AllTeamMembers() {
    const TeamMembersData = TeamData.map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-4">
            <div className="card team-card shadow">
                <div className="card-body p-4 py-md-5 text-center">
                    <div className="member-img mb-4 rounded-circle">
                        <img src={item.memberImage} alt={item.memberName} />
                    </div>
                    <h6>{item.memberName}</h6>
                    <p className="fz-14">{item.designation}</p>
                    <div className="border" />
                    <Link className="mt-3 btn btn-dark btn-minimal fz-14" to={item.contactUrl} >
                        {item.contactText} {item.memberName} <i className="bi bi-caret-right-fill" />
                    </Link>
                </div>
            </div>
        </div>
    ))

    return(
        <div>
            <SEO title="Team Member" />

            <Header 
                brandLogo="assets/img/core-img/logo-white.png" 
                headerStyle="" 
                buttonText="Log In" 
                buttonColor="btn-warning" 
            />

            <BreadcrumbOne 
                breadcrumbImage="assets/img/bg-img/7.jpg" 
                breadcrumbTitle="Team Members" 
                homePageUrl="/" 
                homePageText="Home" 
                currentPageText="Team"
            />

            <Divider />

            <div className="container">
                <div className="row g-4 g-md-5 justify-content-center">
                    {TeamMembersData}
                </div>
            </div>

            <Divider />

            <CtaThree 
                title="Let's start with the simple way to create a website." 
                btnUrl="#" 
                btnText="Get Now" 
            />

            <Footer 
                footerStyle="" 
                footerLogo="assets/img/core-img/logo.png" 
            />
        </div>
    )
}