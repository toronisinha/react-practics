import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function ReactBootstrap() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>ReactBootstrap</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    in this section use ReactBootstrap
                </Card.Text>
                <Button variant="secondary">learn more</Button>
            </Card.Body>
        </Card>
    )
}
