import React, {useState, useEffect } from 'react'
import {showCurrentTopic} from '../../api/topic'
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
                    {/* {
                    user && (product.owner == user._id)
                    ?
                    <>
                        <Button onClick={() => setModalOpen(true)}   className="m-2" variant="warning">
                            Edit Product
                        </Button>
                        <Button onClick={() => removeTheProduct()} className="m-2" variant="danger">
                            Delete Product
                        </Button>
                    </>
                    :
                    null
                    }                     */}
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