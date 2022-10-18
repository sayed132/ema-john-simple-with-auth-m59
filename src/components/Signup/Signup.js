import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Contexts';
import './Signup.css';

const Signup = () => {

    const [error, setError] = useState(null);
    const {createUser} = useContext(AuthContext)

    const handleSubmitSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);

        if(password.length < 6){
            setError('password must be 6 correctors')
            return;
        }
        if(password !== confirm){
            setError('password not match')
            return;
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div className='form-container'>
            <h2 className="form-title">SignUp</h2>
            <form onSubmit={handleSubmitSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" />
                    <p className='error-text'>{error}</p>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" />
                    <p className='error-text'>{error}</p>
                </div>
                <button className="btn-submit">SignUp</button>
            </form>
            <p className="info"><small>Already have an Account? <Link to={'/login'}>Please LogIn</Link> </small></p>
            
        </div>
    );
};

export default Signup;