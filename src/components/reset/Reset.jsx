import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth, sendPaswordReset} from "../../services/AuthServices"

const Reset = () =>{
    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    const submitHandler = (e) =>{
        e.preventDefault();
        sendPaswordReset(email);
        navigate("/");
    }

    return(
        <div className="container">
        <h2 className="mt-3 text-center">Atstatykite slaptazodi</h2>
        <form className="form" onSubmit={submitHandler}>
            <div className="mb-3">
                <input type="email"className="form-control" placeholder="Jusu emailas" id="email" name="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" type="submit">Siusti</button>
            </div>
        </form>
        </div>
    )
}
export default Reset