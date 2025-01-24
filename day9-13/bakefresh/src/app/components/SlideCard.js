'use client'
import Card from "react-bootstrap/Card"
import Image from "next/image"
import SlideImg from '../../../public/images/slideImg1.png'
import '../../../public/scss/pages/slideCard.scss'
export const SlideCard = () => {
    return (
        <Card>
            <Card.Body>
                <Image src={SlideImg} alt="slideImage"/>
                <h4>Migration-focused education</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown </p>
            </Card.Body>
        </Card >
    )
}