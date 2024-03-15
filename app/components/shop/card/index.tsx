'use client';
import { Card } from "react-bootstrap";

export default function ShopCard(props: any) {
    return (
        <Card style={{ width: '22rem', margin: "auto"}}>
            <Card.Img variant="top" src={props.children.imageUrl} 
                width={180} height={100}/>
            <Card.Body>
                <Card.Title>{ props.children.title}</Card.Title>
                <Card.Text>
                    { props.children.description}
                </Card.Text>
            </Card.Body>
        </Card>

    )
}