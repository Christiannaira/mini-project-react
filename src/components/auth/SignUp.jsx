import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";



const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential)
        })
            .catch((error) => {
                console.log(error);
            });
    };

    return(
        <>
        
           
               
          

        
            <form onSubmit={signUp}>
                    <input type="email" placeholder="Email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input type="password" placeholder="Password"  className='form-control' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <input type="password" placeholder="Confrim Password"  className='form-control' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        <label className='acceptTC' htmlFor="accept">
                                <input type="checkbox" id="accept" /> <span>Accept <a >Terms & Conditions</a></span>
                        </label>
                        <button type="submit" className='btn btn-success'>Sign Up</button>
                                
            </form>
            
        </>
    )
}

export default SignUp;