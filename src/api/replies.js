import apiUrl from '../apiConfig'
import axios from 'axios'


export const addReply = (user, topicId, newReply, commentId) => {
console.log(commentId,'asdfcomment')
    return axios({
        url: `${apiUrl}/replies/${topicId}/${commentId}`,
        method: 'POST',
        header: {
            Authorization:`Token token=${user.token}`
        },
        data: { reply: newReply }
    })
}



// DELETE -> remove function
export const removeReply = (user, topicId, commentId, replyId) => {
    return axios({
        url: `${apiUrl}/replies/${topicId}/${commentId}/${replyId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}