import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import CommentForm from '../shared/CommentForm'
import {addComment} from '../../api/comments.js'

const GiveCommentModal = (props) => {
    const { user, topic, show, handleClose, msgAlert, triggerRefresh } = props
    const [comment, setComment] = useState({})

    const handleChange = (e) => {
        // e === event
        e.persist()

        addUsertoComment()
        
        setComment(prevComment => {
            const name = e.target.name
            let value = e.target.value
    

            const updatedValue = { [name]: value }

            return {...prevComment, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        addComment(user, topic._id, comment)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(console.error) 
    }

    const addUsertoComment = () => {
        setComment(prevComment => {
            const updatedValue = {'owner': user._id}
            return {...prevComment , ...updatedValue}
        })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <CommentForm
                    comment={comment}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Leave a Comment"
                />
            </Modal.Body>
        </Modal>
    )
}

export default GiveCommentModal