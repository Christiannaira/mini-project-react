import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";


const SignIn = () => {
    const [authuser, setAuthUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        });
        return () => {
            listen();
        };
    }, []);

    const userSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            alert(`Signed In as ${email}`);
            console.log(userCredential);
        })
            .catch((error) => {
                alert(`Sign In Failed ${error.message}`);
            });
    };

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('sign out successful');
        }).catch((error) => console.log(error));
    }


    return (
        <>
            <div>
                {authuser ? (
                    <>
                        <p>{`Signed In as ${authuser.email}`}</p>
                        <button onClick={userSignOut}>Sign Out</button>
                    </>
                ) : (
                    <form onSubmit={userSignIn}>
                        <input type="email"
                            placeholder="Email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input type="password"
                            placeholder="Password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <div className="account-btn">
                            <button className="btn btn-success" type="submit">
                                Sign In
                            </button>
                        </div>

                    </form>
                )}
            </div>
        </>
    );

};

export default SignIn;

