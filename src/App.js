import Header from "./components/Header";
import Applications from "./components/Applications";
import { useState, useEffect } from "react"
import AddTask from "./components/AddTask";
import Button from "./components/Button";
import Footer from "./components/Footer";

const defaultApps = [
  
]


function App() {

  const [applications, setApplications] = useState(defaultApps);
  const [add, setAddStatus] = useState(false);

  //Used to set the applications from the server
  useEffect(()=> {
    const getApps = async() => {
      const appsFromServer = await fetchApplications()
      setApplications(appsFromServer)

    }
    getApps()
  }, [])

  //Used to fetch applications from the server
  const fetchApplications = async() => {
    const res = await fetch('https://grad-tracker-data-knw1.onrender.com/applications');
    const data = await res.json();
    return data;
  }

  // Used to fetch a SINGLE application
  const fetchApplication = async(id) => {
    const res = await fetch(`https://grad-tracker-data-knw1.onrender.com/applications/${id}`);
    const data = await res.json();
    return data;
  }

  //Used to remove a job deadline from the list and server
  const deleteApplication = async(id) => {
    await fetch(`https://grad-tracker-data-knw1.onrender.com/applications/${id}`,{
      method: 'DELETE',
    })
    setApplications(applications.filter( a => a.id !== id));
  }

  //Used to show if a job has been applied for or not
  const toggleApplied = async (id) => {

    const appToToggle = await fetchApplication(id);
    const updatedApp = {...appToToggle,
      applied: !(appToToggle.applied),
    }
    const response = await fetch(`https://grad-tracker-data-knw1.onrender.com/applications/${id}`,
    {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedApp)
    })

    const data = await response.json();

      setApplications(
        applications.map((app) => 
          app.id === id ? { ...app, 
            applied: data.applied,
          } : app 
        )
        )
  }
  //Function is used to create a new grad job application
  const addDeadline = async(company, role, deadline, applied ) => {

    const response = await fetch('https://grad-tracker-data-knw1.onrender.com/applications', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({company, role, deadline, applied})
    })

    const data = await response.json()

    setApplications([
      data,
      ...applications,
    ]);

  } 
  
  return (
    <div className="container">
      <Header />

      <Button color={add? 'red': 'green'} text={add? 'Close': 'Add'} onClick= {()=> setAddStatus(!add)}/>
      {add && <AddTask onSubmitAppl= {addDeadline} />}
      
      {applications.length > 0 ?  
      <Applications applications={applications} onDelete={deleteApplication} 
      toggleApplied={toggleApplied}/> :
      (<>
      <br></br>
         <h4>Lets Start Planning Ahead, Start Job Hunting Now!</h4>
      </>
      ) }
     <Footer />
    </div>
  );
}

export default App;
