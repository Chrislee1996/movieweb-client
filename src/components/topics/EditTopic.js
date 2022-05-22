import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import TopicForm from '../shared/TopicForm'

const EditTopic = (props) => {
    const { user, show, handleClose, updateTopic, triggerRefresh } = props
    const [topic, setTopic] = useState(props.topic)

    const handleChange = (e) => {
        e.persist()
        setTopic(prevTopic => {
            const name = e.target.name
            let value = e.target.value
    
    
            const updatedValue = { [name]: value }
    
            return {...prevTopic, ...updatedValue}
            })
        }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        updateTopic(user,topic)
            .then(() => handleClose())
            .then(()=> triggerRefresh())
            .catch(console.error)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className='bg-dark text-info'>
                <TopicForm 
                    topic={setTopic}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit discussion!"
                />
            </Modal.Body>
        </Modal>
    )
}


export default EditTopic
