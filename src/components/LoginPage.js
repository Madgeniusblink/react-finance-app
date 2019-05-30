import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({ startLogin }) => (
    <div>
        <Link to="/dashboard">
            <button onClick={startLogin}>
                Login!
            </button>
        </Link>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)