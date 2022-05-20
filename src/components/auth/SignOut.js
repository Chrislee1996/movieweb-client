import { useNavigate } from 'react-router-dom'
import {Button, ButtonGroup} from 'react-bootstrap'
import {BoxArrowRight, XOctagon, EmojiFrown} from "react-bootstrap-icons"
import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
		signOut(user)
			.finally(() =>
				msgAlert({
					heading: 'Signed Out Successfully',
					message: messages.signOutSuccess,
					variant: 'success',
				})
			)
			.finally(() => navigate('/'))
			.finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

	return (
    <div className='bg-dark text-info'>
        <div className='signoutBox'>
            <div className='row'>
                <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                    <h2>Are you sure you want to sign out?</h2>
                    <small>We hate to see you go... <EmojiFrown></EmojiFrown></small><br/>
                        <Button variant='outline-danger' onClick={onSignOut}>
                            Sign Out <BoxArrowRight></BoxArrowRight>
                        </Button><br/>
                        <Button variant='outline-warning' onClick={onCancel}>
                            Cancel <XOctagon></XOctagon>
                        </Button>
                </div>
            </div>
        </div>
    </div>
	)
}

export default SignOut