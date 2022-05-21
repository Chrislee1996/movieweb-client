import React, {useState, useEffect } from 'react'
import background from '../images/background.png'
import {createTopic} from '../../api/topic'
import { useNavigate } from 'react-router-dom'
import { createCourse } from '../../api/courses'
import { Form, Container, Button } from 'react-bootstrap'

const CreateTopic = (props) => {
    const navigate = useNavigate()
    const[topic, setTopic] = useState({header:'', body:''})
    const {user, msgAlert} = props


    const handleChange = (e) => {
        e.persist()
        setCourse(prevCourse => {
            const name = e.target.name
            let value = e.target.value
    
            const updatedValue = { [name]: value }
    
            return {...prevCourse, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createCourse(user,course)
            .then(res=> 
                {navigate(`/topics/${res.data.topic.id}`)})
            .then(()=> {
                    msgAlert({
                        heading:'Post Created!',
                        message: 'Post Successfully Created',
                        variant:'success'
                    })
                })
                .catch(()=> {
                    msgAlert({
                        heading:'Unable to Create the Post',
                        message: 'Something went wrong',
                        variant:'danger'
                    })
                })
    }

    return (
        <div className="text-info bg-dark">
            <TopicForm
            topic={topic}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleTagSelect={handleTagSelect}
            heading='Add a new Topic'
        />
        </div>
        )

}


export default CreateTopic