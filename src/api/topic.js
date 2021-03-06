
import apiUrl from '../apiConfig'
import axios from 'axios'



export const getAllTopics = (all) => {
    return axios(`${apiUrl}/topics/all`)
}

export const showCurrentTopic = (topicId) => {
    return axios(`${apiUrl}/topics/${topicId}`)
}


export const createTopic = (user, newTopic) => {
    return axios({
        url:`${apiUrl}/topics`,
        method:'POST',
        headers:{
            Authorization: `Token token=${user.token}`
        },
        data:{topic: newTopic}
    })
}


//PATCH -> update function
export const updateTopic = (user, updatedTopic) => {
    console.log(updatedTopic,'topic')
    return axios({
        url:`${apiUrl}/topics/${updatedTopic._id}`,
        method:'PATCH',
        headers:{
            Authorization: `Token token=${user.token}`
        },
        data:{topic: updatedTopic}
    })
}

//DELETE -> Delete function
export const removeTopic = (user, topicId) => {
    return axios({
        url:`${apiUrl}/topics/${topicId}`,
        method:'DELETE',
        headers:{
            Authorization: `Token token=${user.token}`
        }
    })
}