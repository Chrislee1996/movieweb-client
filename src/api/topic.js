
import apiUrl from '../apiConfig'
import axios from 'axios'



export const getAllTopics = (all) => {
    return axios(`${apiUrl}/topics/all`)
    console.log(all)
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
    return axios({
        url:`${apiUrl}/topics/${updatedTopic.id}`,
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