import React, { useEffect, useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { removeComment } from '../../api/comments'
import GiveReply from '../replies/GiveReply'
import ShowReply from '../replies/ShowReply'
import EditCommentModal from './EditCommentModal'



const ShowComment = (props) => {
    // most of these are simply to pass to edit modal
    const {comment, user, triggerRefresh, msgAlert, topic, handleClose, reply} = props //add reply
    const [replyModalOpen, setReplyModalOpen] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [hidden, setHidden] = useState(false)

    
    const destroyComment = () => {
        removeComment(user, topic._id, comment._id)
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(() => {
                msgAlert({
                    heading: 'Something Went Wrong',
                    message: 'Unable to Delete',
                    variant: 'danger',
                })
            })
    }




    let replies    

    console.log(comment,'asd')
    if(comment){
        if(comment.reply.length > 0){
            replies = comment.reply.map(reply => (
                <ShowReply key={reply._id} updated={updated} reply={reply} comment={comment} user={user} topic={topic}
                triggerRefresh={triggerRefresh}
                />  
            ))
        }
    }  


    return (
        <>
            <Card className="m-2 bg-dark text-info">
                <Card.Body >
                        <small> Posted By: {!topic.owner ? null : topic.owner.email} </small>
                        <h4> {comment.note}<br/></h4>

                        {
                            user && (user._id === comment.owner)
                            ?
                            <>
                                <Button onClick={()=> destroyComment()}variant="outline-danger" size='sm'>
                                    Delete comment
                                </Button>
                                <Button variant="outline-warning" size='sm' onClick={() => setShowEditModal(true)}>
                                    Edit comment
                                </Button>
                            </>
                            :
                            null
                        }<br/>

                        {
                            hidden?<p>{replies}</p>: null
                        } 
                        <Button onClick ={()=>setHidden(!hidden)} variant="outline-light" size='sm'> Show {comment.reply.length} Reply </Button>


                        <Button className="reply" onClick={()=> setReplyModalOpen(true)} variant="outline-primary" size='sm'>Reply Above</Button>
        </Card.Body>
    </Card>
    <EditCommentModal 
                user={user}
                topic={topic}
                comment={comment}
                show={showEditModal}
                handleClose={() => setShowEditModal(false)}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
    />
    {<GiveReply
        user={user}
        comment={comment}
        show = {replyModalOpen}
        topic={topic}
        reply={reply}
        handleClose={()=> setReplyModalOpen(false)}
        triggerRefresh={triggerRefresh}
    /> }

    </>
    )
}

export default ShowComment