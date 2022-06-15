import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const CommentForm = (props) => {
    
    const {comment, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Leave a Comment</Form.Label>
                <Form.Control as='textarea'
                    placeholder="Leave a Comment"
                    value={comment.note}
                    name='note'
                    onChange={handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default CommentForm