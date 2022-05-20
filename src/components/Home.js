import IndexMovies from "./movies/IndexMovies"

const Home = (props) => {

	const {user, msgAlert} = props

	return (
		<>
			<IndexMovies user={user} msgAlert={msgAlert}/>
		</>
	)
}

export default Home
