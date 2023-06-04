import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";



const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        })
            .catch((error) => {
                console.log(error);
            });
    };

    return(
        <>
        
           
               

            
                            
                            <form onSubmit={signIn}>
                            <input type="email" placeholder="Email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                                <input type="password" placeholder='Password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)}/>
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
                        
        
        </>
    )
}

export default SignIn;