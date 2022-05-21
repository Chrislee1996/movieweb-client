import React, {useState, useEffect } from 'react'
import background from '../images/background.png'
import {showCurrentTopic} from '../../api/topic'
import { Spinner,Container,Card, Button} from 'react-bootstrap'
import {useParams, useNavigate} from 'react-router-dom'

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
        <div style={{backgroundImage: `url(${background})`}}>
            <Container>
                <Card.Body >
                    {/* {
                    user && (product.owner == user._id)
                    ?
                    <>
                        <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                            Edit Product
                        </Button>
                        <Button onClick={() => removeTheProduct()} className="m-2" variant="danger">
                            Delete Product
                        </Button>
                    </>
                    :
                    null
                    }                     */}
                </Card.Body>
                    <h3><b>{topic.header}</b></h3>
                    <p>{topic.body}</p>
            </Container>
        </div>
    )

}

export default ShowTopic