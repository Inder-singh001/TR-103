'use client'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../../public/scss/pages/footer.scss'
import Link from "next/link";
import Image from "next/image";
import Map from '../../../public/images/map.png'

export const Footer = () => {
    const footerLinks = [
        {
            title: "Pages",
            links: [
                { link: "Home" },
                { link: "Program" },
                { link: "Accreditations" },
                { link: "Study with Big Academy" },
                { link: "Partner with Big Academy" },
            ],
        },
        {
            title: "Useful Links",
            links: [
                { link: "Intellectual Property Rights" },
                { link: "Privacy Policy" },
                { link: "Terms & Condition" },
                { link: "Disclaimer" },
                { link: "About Us " },
            ],
        },
        {
            title: "Location & Timing",
            links: [
                { link: "Careers" },
                { link: "Our Partners" },
                { link: "Media" },
                { link: "Blogs" },
                { link: "Whitepapers" },

            ],
        },
    ];

    const social = [
        {
            icon: faInstagram,
            brand: "Instagram"
        },
        {
            icon: faLinkedinIn,
            brand: "LinkedIn"
        },
        {
            icon: faFacebookF,
            brand: "Facebook"
        },
        {
            icon: faXTwitter,
            brand: "Twitter"
        },
    ];

    return (
        <div className="footer_section">
            <div className="shape1" ></div>
            <div className="shape2" ></div>
            <Container>
                <Row>
                    <Col xxl={6}>
                        <Row>
                            {footerLinks.map((section, sectionindex) => (
                                <Col xxl={4} key={sectionindex}>
                                    <div className="link_area" >
                                        <div className="link_title">{section.title}</div>
                                        <ul>
                                            {section.links.map((item, itemindex) => (
                                                <li key={itemindex}>{item.link}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </Col>
                            ))}
                        </Row>

                    </Col>
                    <Col xxl={6}>
                        <Row>
                            <Col xxl={3}>
                                <div className="link_area" >
                                    <div className="link_title">Social</div>
                                    {social.map((list, index) => (
                                        <ul key={index}>
                                            <li>
                                                <div className="social_icon">
                                                    <Link href="#">
                                                        <FontAwesomeIcon icon={list.icon} className="brand_icon" />
                                                        {list.brand}
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    ))}
                                </div>
                            </Col>
                            <Col xxl={3}>
                                <div className="link_area" >
                                    <div className="link_title">Get In Touch</div>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            Partner Contact
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            Enquiry Contact
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            Present Student
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Col>
                            <Col xxl={6}>
                                <div>
                                    <Image src={Map} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container >
        </div >
    )
}
