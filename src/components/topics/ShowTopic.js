import React, {useState, useEffect } from 'react'
import {showCurrentTopic, removeTopic, updateTopic} from '../../api/topic'
import { Spinner,Container,Card, Button} from 'react-bootstrap'
import {useParams, useNavigate} from 'react-router-dom'
import topics from '../images/topics.png'
import EditTopic from './EditTopic'
import ShowComment from '../comments/ShowComment'
import GiveComment from '../comments/GiveComment'

const ShowTopic = (props) => {
    const [updated, setUpdated] = useState(false)
    const [topic, setTopic] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()
    const {user,msgAlert, triggerRefresh} = props
    const [modalOpen, setModalOpen] = useState(false)
    const [commentModalOpen, setCommentModalOpen] = useState(false)

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

    let replies
    let comments    

    if(topic){
        if(topic.comments.length>0){
            comments = topic.comments.map(comment=> (
                <ShowComment key={comment._id} updated={updated} comment={comment} topic={topic} user={user}
                triggerRefresh={()=> setUpdated(prev=> !prev)}
                />
            ))
        }
    }  

    console.log(comments,'comments')
    // {{ backgroundRepeat:'no-repeat', backgroundSize:'cover',height:'100vh', backgroundColor: 'black' }}
    return (
        <div style={{ backgroundRepeat:'no-repeat', backgroundSize:'cover',height:'100vh',backgroundImage: `url(${topics})`}}>
            <Container >
                <Card.Body  >                 
                    <Card.Title>
                <small className='text-info'>Posted By: {!topic.owner ? null : topic.owner.email}</small>

                    <h3 className='text-info'><b>{topic.header}</b></h3>
                    </Card.Title>
                    <Card.Text>
                    <h4 className='text-info'>{topic.body}</h4>
                    </Card.Text>
                    {
                    user && (topic.owner._id == user._id)
                    ?
                    <>
                        <Button onClick={() => setModalOpen(true)}   className="m-2" variant="outline-warning" size='sm'>
                            Edit Topic
                        </Button>
                        <Button onClick={() => deleteTopic()} className="m-2" variant="outline-danger" size="sm">
                            Delete Topic
                        </Button>
                    </>
                    :
                    null
                    }   



                        <Button className="commentB" onClick={()=> setCommentModalOpen(true)} variant="outline-primary"> Comment Below</Button>
                        <h3 className class='text-primary'>Comments:</h3> 
                        <p>{comments}</p>

                        <GiveComment
                            user={user}
                            show= {commentModalOpen}
                            topic={topic}
                            triggerRefresh={() => setUpdated(prev => !prev)}
                            handleClose={()=> setCommentModalOpen(false)}
                        />

                </Card.Body>
            </Container>
            <EditTopic 
                topic={topic}
                show={modalOpen}
                user={user}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updateTopic={updateTopic}
                handleClose={() => setModalOpen(false)}
            />
        </div>
    )

}

export default ShowTopic