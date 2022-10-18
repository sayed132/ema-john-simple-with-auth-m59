import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Contexts';
import './Login.css';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmitSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        if(password.length < 6){
            setError('password must be 6 correctors')
            return;
        }

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from ,{replace: true})
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div className='form-container'>
            <h2 className="form-title">LogIn</h2>
            <form onSubmit={handleSubmitSignIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                    <p className='error-text'>{error}</p>
                </div>
                <button className="btn-submit">LogIn</button>
            </form>
            <p className="info"><small>New This Site? <Link to={'/signup'}>Create a Account</Link> </small></p>
            
        </div>
        
    );
};

export default Login;