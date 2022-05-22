import React, {useState, useEffect } from 'react'
import {showCurrentTopic, removeTopic} from '../../api/topic'
import { Spinner,Container,Card, Button} from 'react-bootstrap'
import {useParams, useNavigate} from 'react-router-dom'
import topic from '../images/topic.png'


const ShowTopic = (props) => {
    const [updated, setUpdated] = useState(false)
    const [topic, setTopic] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()
    const {user,msgAlert, triggerRefresh} = props

    useEffect(() => {
        showCurrentTopic(id)
            .then(res => {
                setTopic(res.data.topic)
            })
            .catch(console.error)
    },[updated])

    const deleteTopic = () => {
        removeTopic (user, topic._id)
        .then(() => {
            msgAlert({
                heading: 'Topic Removed!',
                message: 'Topic Successfully deleted',
                variant: 'success',
            })
        })
            .then(()=> {navigate('/topics/all')})
            .catch(() => {
                msgAlert({
                    heading: 'Something Went Wrong',
                    message: 'Unable to delete',
                    variant: 'danger',
                })
            })
    }
    

    if(!topic) {
        return (
            <Container>
                <Spinner animation="border" role='status'>
                <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>

        )
    }

    return (
        <div style={{ backgroundRepeat:'no-repeat', backgroundSize:'cover',height:'100vh', backgroundColor: 'black' }}>
            <Container >
                <Card.Body  >
                    {
                    user && (topic.owner._id == user._id)
                    ?
                    <>
                        {/* <Button onClick={() => setModalOpen(true)}   className="m-2" variant="warning">
                            Edit Product
                        </Button> */}
                        <Button onClick={() => deleteTopic()} className="m-2" variant="danger">
                            Delete Topic
                        </Button>
                    </>
                    :
                    null
                    }                    
                    <Card.Title>
                    <h3 className='text-info'><b>{topic.header}</b></h3>
                    </Card.Title>
                    <Card.Text>
                    <h4 className='text-info'>{topic.body}</h4>
                    </Card.Text>
                </Card.Body>
            </Container>
        </div>
    )

}

export default ShowTopic