import React, {useState, useEffect } from 'react'
import { getMovies } from '../../api/movie'
import { Card,Col,Row, ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const IndexMovies = (props) => {
    const [contents, setContent] = useState([])
    // const [numOfPages, setNumofPages] = useState()
    const [updated, setUpdated] = useState(false)


        useEffect(() => {
            const fetchData = async () => {
                getMovies()
                .then((res) => {
                    setContent(res.data.results)
                    console.log(res.data.results)
                })
            }
            fetchData()
    },[updated])

    if (!contents) {
        return <span class ='loader'></span>
    }

    let movieCards

    if (contents.length > 0) {
        movieCards = contents.map((content) => (
            <ListGroup.Item key = {content._id} style={{ width: '30%', border:"solid 1px"}} className="m-2 bg-dark text-info"  >
                <Row style={{ alignItems:'center', color:'red'}}>
                    <Row>
                        <h4> {content.title} </h4>
                        <img src={`https://image.tmdb.org/t/p/w500/${content.poster_path}`}/>
                    </Row>
                </Row>
            </ListGroup.Item>
        ))
    }



    return (
        <>
            <h3 class='text-center text-info'>Movies</h3>
            <div style={cardContainerLayout}>
                {movieCards}
            </div>
        </>
    )
}

export default IndexMovies  