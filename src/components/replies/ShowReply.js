import React, { useEffect, useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { removeReply } from '../../api/replies'


const ShowReply = (props) => {
    // most of these are simply to pass to edit modal
    const {topic, reply, user, triggerRefresh, comment, msgAlert} = props
    const [updated, setUpdated] = useState(false)
    
    const destroyReply = () => {
        removeReply(user, topic._id , comment._id,  reply._id)
        .then(() => triggerRefresh())
        // if there is an error, we'll send an error message
        .catch(() => {
            msgAlert({
                heading: 'Something Went Wrong',
                message: 'Unable to remove comment',
                variant: 'danger',
            })
        })
        // .catch(console.error)

    }

 

    let replies    

    if(comment){
        if(comment.reply.length > 0){
            replies = comment.reply.map(reply=> (
                <ShowReply key={reply._id} updated={updated} reply={reply} comment={comment} user={user} topic={topic}
                triggerRefresh={()=> setUpdated(prev=> !prev)}
                />  
            ))
        }
    }  

    return (
        <>
            <Card className="m-2">
                <Card.Body className='bg-dark'>
                        <p>Reply:</p>
                        <p>{reply.note}<br/></p>
                        {
                            user && (user._id === reply.owner)
                            ?
                            <>
                            <Button onClick={()=> destroyReply()}variant="outline-danger" size='sm'>
                                Delete Reply 
                            </Button>
                            </>
                            :
                            null
                        }
                </Card.Body>
            </Card>
    </>
    )
}

export default ShowReply