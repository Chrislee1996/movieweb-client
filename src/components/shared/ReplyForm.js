import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const ReplyForm = (props) => {
    
    const {reply, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Reply</Form.Label>
                <Form.Control as='textarea'
                    placeholder="Reply to Comment"
                    value={reply.note}
                    name='note'
                    onChange={handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default ReplyForm