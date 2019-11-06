import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

class LessonsList extends Component{
    render() {
        return(
            <Container>
                <CardGroup>
                    <Card bg="primary" text="white" style={{ width: '18rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Primary Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk
                                of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        )
    }
}
export default LessonsList;