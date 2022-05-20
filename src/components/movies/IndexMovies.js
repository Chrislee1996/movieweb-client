import React, {useState, useEffect } from 'react'
import { getMovies } from '../../api/movie'
import { Card} from 'react-bootstrap'

const IndexMovies = (props) => {
    const [content, setContent] = useState([])
    // const [numOfPages, setNumofPages] = useState()
    const [updated, setUpdated] = useState(false)


        useEffect(() => {
            const fetchData = async () => {
                getMovies()
                .then((res) => {
                    setContent(res.data)
                    console.log(res.data)
                })
            }
            fetchData()
    },[updated])


    let movieCards

    // if (content.length > 0) {
    //     movieCards = content.map(contents => (
    //     {contents}
    //     ))
    // }

    return (
        <div>

        </div>
    )
}

export default IndexMovies  