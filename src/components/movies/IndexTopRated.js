import React, {useState, useEffect } from 'react'
import { getTopRated } from '../../api/movie'
import { Card,Col,Row, ListGroup} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import background from '../images/background.png'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}


const IndexToprated = (props) => {
    const [contents, setContent] = useState([])
    // const [numOfPages, setNumofPages] = useState()
    const [updated, setUpdated] = useState(false)


        useEffect(() => {
            const fetchData = async () => {
                getTopRated()
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
    console.log(contents,'upcoming content')

    if (contents.length > 0) {
        movieCards = contents.map((content) => (
            <ListGroup.Item key = {content._id} style={{ width: '20%', border:"solid 1px"}} className="m-2 bg-dark text-info "  >
                <Row style={{ alignItems:'center', color:'red'}}>
                    <Row>
                        <h4 className='text-info'> {content.title} </h4>
                        <img src={`https://image.tmdb.org/t/p/w500/${content.poster_path}`}/>
                        <small className='text-info'>{content.overview}</small>
                        <small> Rating: {content.vote_average}</small>
                    </Row>
                </Row>
            </ListGroup.Item>
        ))
    }



    return (
        <div>
        <div style={{ backgroundRepeat:'no-repeat', backgroundSize:'cover' ,backgroundImage: `url(${background})`}} className="text-info" >
            <h3 class='text-center text-info'>New and Upcoming Movies {contents.date}</h3>
            <div style={cardContainerLayout}>
                {movieCards}
            </div>  
        </div>
        </div>
    )
}

export default IndexToprated  