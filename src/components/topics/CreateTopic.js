import React, {useState, useEffect } from 'react'
import background from '../images/background.png'
import {createTopic} from '../../api/topic'
import { useNavigate } from 'react-router-dom'
import TopicForm from '../shared/TopicForm'
import { Form, Container, Button } from 'react-bootstrap'

const CreateTopic = (props) => {
    const navigate = useNavigate()
    const[topic, setTopic] = useState({header:'', body:''})
    const {user, msgAlert} = props


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
        createTopic(user,topic)
            .then(res=> 
                {   console.log(res.data,'test')
                    navigate(`/topics/${res.data.topic._id}`)})
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
        <div className="text-info bg-dark" style= {{backgroundRepeat:'no-repeat', backgroundSize:'cover',height:'100vh'}}>
            <TopicForm
            topic={topic}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading='Post a Topic'
        />
        </div>
        )

}


export default CreateTopic