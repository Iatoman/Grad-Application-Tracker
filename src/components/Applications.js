import Application from "./Application"


const Applications = ({applications, onDelete, toggleApplied}) => {
  return (
    <>
      {applications.map(a => (
         <Application application={a} key={a.id} onRemoveApp = {onDelete}
         applied = {toggleApplied} />
      ))}

    </>
  )
}

export default Applications
