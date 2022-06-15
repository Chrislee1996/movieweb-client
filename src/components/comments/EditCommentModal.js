import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import CommentForm from '../shared/CommentForm'
import {updateComment} from '../../api/comments.js'

const EditCommentModal = (props) => {
    const { user, topic, show, handleClose, msgAlert, triggerRefresh } = props
    const [comment, setComment] = useState(props.comment)

    const handleChange = (e) => {

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
        // e === event
        e.preventDefault()

        updateComment(user, topic._id, comment._id, comment)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            // then we send a success message
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .then(() => handleClose())
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
                    heading="Comment"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditCommentModal