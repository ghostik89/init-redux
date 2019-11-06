import React, { Component } from 'react';
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import 'bootstrap/dist/css/bootstrap.min.css';
import { LessonCard } from "./LessonCard";
import Col from "react-bootstrap/Col";
import './Lessons.css'
import Row from "react-bootstrap/Row";

class LessonsList extends Component{
    render() {
        return(
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={"auto"}>
                        <CardGroup>
                            <LessonCard lessons={["math"]}/>
                        </CardGroup>
                    </Col>
                    <Col md={"auto"}>
                        <CardGroup>
                            <LessonCard lessons={["math","math","math"]}/>
                        </CardGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default LessonsList;