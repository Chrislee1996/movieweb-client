import apiUrl from '../apiConfig'
import axios from 'axios'


// POST -> create function
export const addComment = (user, topicId, newComment) => {
    // console.log('user in review axios', user)
    // console.log(courseId,'course id in review')
    // console.log('review in review axios', newReview)
    return axios({
        url: `${apiUrl}/comments/${topicId}`,
        method: 'POST',
        header: {
            Authorization:`Token token=${user.token}`
        },
        data: { comment: newComment }
    })
}

// PATCH -> update function
export const updateComment = (user, topicId, commentId, updatedComment) => {

    return axios({
        url: `${apiUrl}/comments/${topicId}/${commentId}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { comment: updatedComment }
    })
}

// DELETE -> remove function
export const removeComment = (user, topicId, commentId) => {
    return axios({
        url: `${apiUrl}/comments/${topicId}/${commentId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}