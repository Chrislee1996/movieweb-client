import React, {useState, useEffect } from 'react'
import background from '../images/background.png'
import {getAllTopics} from '../../api/topic'
import { ListGroup, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'


const IndexTopic = (props) => {
    const [topics, setTopics] = useState(null)
    
    const cardContainerLayout = {
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'row wrap'
    }

    useEffect(() => {
        getAllTopics()
            .then(res=> {
                setTopics(res.data.topics)
            })
            .catch(console.error)
    },[])

    if (!topics) {
        return <p>loading...</p>
    } else if (topics.length === 0) {
        return <p>Seems like no one has anything to talk about....</p>
    }

console.log(topics)
    let topicCards

    if (topics.length > 0) {
        topicCards = topics.map(topic => (
            <ListGroup.Item key={topic.id} style={{ width: '30%', border:"solid 1px", zIndex:'5 !important'}} className="m-2 bg-dark text-info"  >
                <Row style={{ alignItems: 'center', color:'white' }}> 
                <Col> <Link to ={`/topics/${topic._id}`}> <h4>  {topic.header} </h4></Link> </Col>
                </Row>
                <small><Col>Posted By: {!topic.owner ? null : topic.owner.email}</Col> </small>
                <small>comments</small>
            </ListGroup.Item>
        ))
    }

    return (
        <div style={{ backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundImage: `url(${background})`}} >
            <h3 class='text-center text-info'>Discussion Fourm</h3>
                <div style={cardContainerLayout}>
                    {topicCards}
                </div>
        </div>
    )
}


export default IndexTopic