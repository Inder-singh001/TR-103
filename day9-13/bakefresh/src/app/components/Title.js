'use client'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Image from "next/image"
import '../../../public/scss/pages/title.scss'
import Globe from "../../../public/images/globe.png"

export const Title = () => {
    return (
        <div className="title_section">
            <div className="shape1" ></div>
            <div className="shape2" ></div>
            <Container>
                <Row>
                    <Col>
                    <div className="globe_area
                    "></div>
                        <Image className="globe" src={Globe} alt="globe"/>
                        <h2>Career</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};