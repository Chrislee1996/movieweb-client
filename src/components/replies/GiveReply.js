import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import ReplyForm from '../shared/ReplyForm'
import {addReply} from '../../api/replies.js'

const GiveReplyModal = (props) => {
    const { user, topic, show, handleClose, msgAlert, triggerRefresh, comment } = props
    const [reply, setReply] = useState({})
    const [updated, setUpdated] = useState(false)



    const handleChange = (e) => {
        // e === event
        e.persist()
        addUsertoReply()

        setReply(prevReply => {
            const name = e.target.name
            let value = e.target.value
    

            const updatedValue = { [name]: value }

            return {...prevReply, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addReply(user, topic._id, reply, comment._id, reply._id)
            .then(() => triggerRefresh())
            .then(() => handleClose())
            // if there is an error, we'll send an error message
            .catch(() => {
                msgAlert({
                    heading: 'Something Went Wrong',
                    message: 'Unable to add comment',
                    variant: 'danger',
                })
            })
            // .catch(console.error)

    }



    const addUsertoReply = () => {
        setReply(prevReply => {
            const updatedValue = {'owner': user._id}
            return {...prevReply , ...updatedValue}
        })
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <ReplyForm
                    reply={ReplyForm}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Leave a Reply"
                    topic={topic}
                    comment={comment}
                    triggerRefresh={() => setUpdated(prev => !prev)}
                />
            </Modal.Body>
        </Modal>
    )
}

export default GiveReplyModal