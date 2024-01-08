import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth"
import {auth, signInWithEmailAndPassword} from "../../services/AuthServices"


const Login = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    const[user, loading, error] = useAuthState(auth)

    const handleChange = (e) => {
        const value = e.target.value;
        setCredentials({
            ...credentials,
            [e.target.name]:value
        })
    }

    const submitHandle = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(credentials.email, credentials.password)
    }

    useEffect(()=>{
        if(loading) return;
        if(user) navigate("/works");
    }, [user, loading])
 return(
    <>
    <h2 className="mt-3 text-center">prisijungti</h2>
        <form className="form" onSubmit={submitHandle}>
            <div className="mb-3">
                <input type="email"className="form-control" placeholder="Jusu emailas" id="email" name="email" onChange={handleChange} value={credentials.email}/>
            </div>
            <div className="mb-3">
                <input type="password"className="form-control" placeholder="Jusu slaptazodis" id="password" name="password" onChange={handleChange} value={credentials.password}/>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" type="submit">Prisijungti</button>
            </div>
            <div className="mb-3">
                <p>Neturite paskyros? <Link to={"/register"}>Registruokites</Link></p>
            </div>
        </form>
    </>
    
 )   
}
export default Login