'use client'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import '../../../public/scss/pages/career.scss'
import Carousel from 'react-bootstrap/Carousel';
import { Title } from "./Title"
import { SlideCard } from "./SlideCard"



export const Career = () => {

    const items = [
        { id: 1, content: <SlideCard /> },
        { id: 2, content: <SlideCard /> },
        // { id: 3, content: <SlideCard /> },
        // { id: 4, content: <SlideCard /> },
    ];

    const groupedItems = [];
    for (let i = 0; i < items.length; i += 2) {
        groupedItems.push(items.slice(i, i + 2));
    }


    return (
        <div className="career_section">
            <Title />
            <Container>
                <Row>
                    <Col>
                        <div className="intro_section">
                            <h3 className="title_text">Life at Big Academy</h3>
                            <p className="text_area"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged It has survived not only five centuries, but also the leap into electronic typesetting, </p>
                            <Carousel>
                                {groupedItems.map((group, idx) => (
                                    <Carousel.Item key={idx}>
                                        <div className="d-flex justify-content-around">
                                            {group.map((item) => (
                                                <div key={item.id} style={{ flex: '0 0 48%' }}>
                                                    {item.content}
                                                </div>
                                            ))}
                                        </div>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};