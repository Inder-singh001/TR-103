'use client'
import * as React from 'react';
// import "../../../public/scss/pages/base.scss"
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
export const CakesGrid = () => {
    const cardData = [
        {
            key: 1,
            imgSrc: "/Images/image4.png",
            text: "Pineapple Cream Cake",
            link: "Cake",
        },
        {
            key: 2,
            imgSrc: "/Images/image3.png",
            text: "Chocolate and Vanilla Cake",
            link: "Cake",
        },
        {
            key: 3,
            imgSrc: "/Images/image2.png",
            text: "Confetti Cake with Vanilla Cream ",
            link: "Cake",
        },
        {
            key: 4,
            imgSrc: "/Images/image1.png",
            text: "Pink Drip Cake",
            link: "Cake",
        },
    ];

    return (
        <Container >
            <Row>
                {Array.from({ length: 3 }).map((_, i) => (
                    cardData.map((card) => (
                        <Col xxl={3} xl={3} lg={4} md={6} sm={12} xs={12} key={`${card.key}-${i}`}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={card.imgSrc} height={237} />
                                <Card.Body>
                                    <Card.Title >{card.text}</Card.Title>
                                </Card.Body>
                                <Card.Link href="#">{card.link}</Card.Link>
                            </Card>
                        </Col>
                    ))
                ))}
            </Row>
        </Container>

    );
};