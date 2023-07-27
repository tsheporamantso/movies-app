const Person = ({Name,Last_Name, Age}) => {
  return (
    <div style={{marginTop:"20px"}}>
        <h1>Name: {Name}</h1>
        <h1>Last_Name: {Last_Name}</h1>
        <h1>Age: {Age}</h1>
    </div>
  )
}

export default Person