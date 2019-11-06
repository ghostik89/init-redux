import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Lessons.css';
import ListGroup from "react-bootstrap/ListGroup";

export function LessonCard(props) {
    const lessons = props.lessons;
    const listItems = lessons.map((lesson) =>
        <ListGroup.Item key={lesson.toString()} variant="primary">
            {lesson}
        </ListGroup.Item>
    );
    return (
        <Card bg="primary" text="white" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
                <Card.Title>Primary Card Title</Card.Title>
                <Card.Text>
                    <ListGroup>{listItems}</ListGroup>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}