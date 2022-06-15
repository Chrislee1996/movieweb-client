import React, { useEffect, useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { removeComment } from '../../api/comments'
// import GiveReply from '../replys/GiveReply'
// import ShowReply from '../replys/GiveReply'
import EditCommentModal from './EditCommentModal'



const ShowComment = (props) => {
    // most of these are simply to pass to edit modal
    const {comment, user, triggerRefresh, msgAlert, topic, handleClose} = props //add reply
    const [commentModalOpen, setCommentModalOpen] = useState(false)
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




    // let comments    

    // if(review){
    //     if(review.comments.length > 0){
    //         comments = review.comments.map(comment=> (
    //             <ShowComment key={comment._id} updated={updated} comment={comment} review={review} user={user} course={course}
    //             triggerRefresh={triggerRefresh}
    //             />  
    //         ))
    //     }
    // }  


    return (
        <>
            <Card className="m-2">
                <Card.Body className='comments'>
                        <h4>Reply: {comment.note}<br/></h4>

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

                        {/* {
                            hidden?<p>{replys}</p>: null
                        } */}
                        {/* <Button onClick ={()=>setHidden(!hidden)} variant="outline-light" size='sm'> Show {review.comments.length} Comments<ArrowDown></ArrowDown> </Button> */}


                        {/* <Button className="comment" onClick={()=> setCommentModalOpen(true)} variant="outline-primary" size='sm'> Comment on Review Above <Reply></Reply></Button> */}
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
    {/* <GiveComment
        user={user}
        review={review}
        show = {commentModalOpen}
        course={course}
        comment={comment}
        handleClose={()=> setCommentModalOpen(false)}
        triggerRefresh={triggerRefresh}
    /> */}

    </>
    )
}

export default ShowComment