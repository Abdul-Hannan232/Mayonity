import FooterWidgetOne from "./FooterWidgetOne";
import FooterWidgetNav from "./FooterWidgetNav";
import FooterWidgetContact from "./FooterWidgetContact";
import FooterCopywrite from "./FooterCopywrite";

export default function Footer(props) {
    const {footerLogo, footerStyle} = props;

    return(
        <footer className={`footer-area ${footerStyle} pt-120 pb-120`}>
            <div className="container">
                <div className="row g-4 g-lg-5">
                    
                    {/* Footer Widget: src > components > footer > FooterWidgetOne */}
                    <FooterWidgetOne
                        footerLogo={footerLogo} 
                        footerText="It's crafted with the latest trend of design &amp; coded with all modern approaches." newsletterPlaceholderText="Enter email" 
                    />
                    
                    {/* Footer Widget: src > components > footer > FooterWidgetNav */}
                    <FooterWidgetNav
                        heading="Our Products" 
                        footerNav={[
                            {
                                title: "Suha Mobile", 
                                url: "#"
                            },
                            {
                                title: "Affan Mobile", 
                                url: "#"
                            },
                            {
                                title: "Newsten Blog", 
                                url: "#"
                            },
                            {
                                title: "Classy Multipurpose", 
                                url: "#"
                            },
                            {
                                title: "Educamp Education", 
                                url: "#"
                            }
                        ]}
                    />
                    
                    {/* Footer Widget: src > components > footer > FooterWidgetNav */}
                    <FooterWidgetNav
                        heading="Important Links" 
                        footerNav={[
                            {
                                title: "Community & Forum", 
                                url: "#"
                            },
                            {
                                title: "About Licences", 
                                url: "#"
                            },
                            {
                                title: "Careers", 
                                url: "#"
                            },
                            {
                                title: "Terms & Conditions", 
                                url: "#"
                            },
                            {
                                title: "Privacy Policy", 
                                url: "#"
                            }
                        ]}
                    />
                    
                    {/* Footer Widget: src > components > footer > FooterWidgetContact */}
                    <FooterWidgetContact
                        heading="Our Location" 
                        address="Designing World Inc. 1604 NSD, Dhaka, BD" 
                        phone="Call: +123 456 789" 
                        email="Email: help@example.com" 
                        social={[
                            {
                                url: "https://facebook.com", 
                                tootipPosition: "top", 
                                title: "Facebook", 
                                iconName: "bi-facebook"
                            },
                            {
                                url: "https://twitter.com", 
                                tootipPosition: "top", 
                                title: "Twitter", 
                                iconName: "bi-twitter"
                            },
                            {
                                url: "https://instagram.com", 
                                tootipPosition: "top", 
                                title: "Instagram", 
                                iconName: "bi-instagram"
                            },
                            {
                                url: "https://linkedin.com", 
                                tootipPosition: "top", 
                                title: "Linkedin", 
                                iconName: "bi-linkedin"
                            },
                            {
                                url: "https://youtube.com", 
                                tootipPosition: "top", 
                                title: "YouTube", 
                                iconName: "bi-youtube"
                            }
                        ]}
                    />

                </div>
            </div>

            {/* Footer Copywrite: src > components > footer > FooterCopywrite */}
            <FooterCopywrite 
                footerNavTwo={[
                    {
                        title: "Privacy Policy", 
                        url: "#"
                    },
                    {
                        title: "Terms & Conditions", 
                        url: "#"
                    },
                    {
                        title: "Get Support", 
                        url: "/contact"
                    }
                ]}
            />

        </footer>
    );
}