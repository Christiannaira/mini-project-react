import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";




const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
<<<<<<< HEAD
   
=======

>>>>>>> dc4a20430ee9ac89495da5f295a42a84aaee79d2

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
<<<<<<< HEAD
        .then((userCredential) => {
            console.log(userCredential);
        })

            .catch((error) => {
                if( password !== setPassword(e.target.value)) {
                    alert(`password is incorrect!`);
                } 
               
            })
    };

   
    

    return(
        <>
                            <form onSubmit={signIn}>
                               
                                <input type="email" placeholder="Email" className='form-control' 
                                value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                                <input type="password" placeholder='Password' className='form-control' 
                                value={password} onChange={(e) => setPassword(e.target.value)} required/>
                                <span>Forgot Password?</span>
                                <label className='rememberMe' htmlFor='rememberMe'>
                                    <input type="checkbox" id='rememberMe' /> <span>Remember me</span>
                                </label>
                                <div className="account-btn">
                                    <button type="submit" className='btn btn-success' >Sign In</button>
                                    
                                </div>
                                <div className='mt-2'>
                                    <p>Don't have an account? <a href="">Sign up</a></p>
                                </div>
                            </form>
=======
            .then((userCredential) => {
                console.log(userCredential)
            })
            .catch((error) => {
                if (password !== setPassword(e.target.value)) {
                    alert(`Password is incorrect!`);
                }
                else {
                    alert(`Email and Password not found!`)
                }
            });
    };

    return (
        <>
            <form onSubmit={signIn}>

                <input type="email" placeholder="Email" className='form-control'
                    value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                <input type="password" placeholder='Password' className='form-control'
                    value={password} onChange={(e) => setPassword(e.target.value)} required />
                <span>Forgot Password?</span>
                <label className='rememberMe' htmlFor='rememberMe'>
                    <input type="checkbox" id='rememberMe' /> <span>Remember me</span>
                </label>
                <div className="account-btn">
                    <button type="submit" className='btn btn-success'>Sign In</button>

                </div>
                <div className='mt-2'>
                    <p>Don't have an account? <a href="">Sign up</a></p>
                </div>
            </form>
>>>>>>> dc4a20430ee9ac89495da5f295a42a84aaee79d2
        </>
    )
}

export default SignIn;