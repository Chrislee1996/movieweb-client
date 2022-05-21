import React, { useEffect, useState } from 'react'
import { Form, Container, Button, Row, Col, FloatingLabel } from 'react-bootstrap'


const TopicForm = (props) => {
    const {topic, handleChange, handleSubmit, heading, handleTagSelect} = props

    return (
        <Container className="justify-content-center" style={{padding:'50px'}}>
            <h3>{heading}</h3>

                <Form onSubmit={handleSubmit}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        placeholder="Title"
                        value={topic.header}
                        name='header'
                        onChange={handleChange}
                />

                <Form.Label>Text</Form.Label>
                <Form.Control as='textarea'
                    placeholder="Text"
                    value={topic.body}
                    name='body'
                    onChange={handleChange}
                />

                   

                    <Button type='submit'>Submit</Button>
                </Form>

            </Container>
    )
}


export default TopicForm