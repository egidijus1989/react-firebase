import { Link } from "react-router-dom";
import WorksTable from "../worksTable/WorksTable";
import { useState, useEffect } from "react";
import * as service from "../../services/TimeCrudServices";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from "../../services/AuthServices"

const Works = () => {
  const [works, setWorks] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if(loading) return;
    if(user){
      service.getAllWorks(works=>
        setWorks(works), user)
    }
  }, [user, loading])

  return (
    <div className="container">
      <button>
        <Link to="/addWork">Prideti darba</Link>
      </button>
      <h2>Works</h2>
      <WorksTable works={works}></WorksTable>
    </div>
  );
};
export default Works;
