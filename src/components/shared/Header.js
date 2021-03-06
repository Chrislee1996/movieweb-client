import React, { Fragment } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const categoryLinks = {
    color: 'black',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Item className='m-2'>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className='m-2'>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link> 
        </Nav.Item>
        <Nav.Item className='m-2'>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>		
		<Nav.Link>
			{/* <Link to='/' style={linkStyle}>
				Home
			</Link> */}
		</Nav.Link>

		<DropdownButton  style={categoryLinks} id="dropdown-basic-button-2" title="Discussion Fourm" variant='outline-light'> 
			<Dropdown.Item><Link to='/topics/all'>All Posts </Link></Dropdown.Item>  
			<Dropdown.Item><Link to='addTopic'> Post </Link></Dropdown.Item>  
		</DropdownButton>
	</>
)

{/* <Link to='/topics/all' style={linkStyle}>
				Dicussion Fourm
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='addTopic' style={linkStyle}>
					Post  
			</Link>
		</Nav.Link> */}

const Header = ({ user }) => (
	<Navbar bg='secondary' variant='dark' expand='md'>
		<Navbar.Brand>
            <Link to='/upcoming' style={linkStyle}>
                Movie-Web
            </Link>
        </Navbar.Brand>
		<DropdownButton id="dropdown-basic-button-2" title="Explore" variant='outline-light'>
			<Dropdown.Item><Link to='' style={categoryLinks}> Currently Playing </Link></Dropdown.Item>  
			<Dropdown.Item><Link to='/popular' style={categoryLinks}> New and Upcoming Movies </Link></Dropdown.Item>
			<Dropdown.Item><Link to='/toprated' style={categoryLinks}> Top Rated Movies of All time </Link></Dropdown.Item>   
		</DropdownButton>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>	
		</Navbar.Collapse>
	</Navbar>
)

export default Header
