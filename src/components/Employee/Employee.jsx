import { useState } from "react"


const Employee = ({ name, baseSalary }) => {
    
    const [salary, setSalary] = useState(baseSalary)
    const onRaiseClick = () => {
        return setSalary(salary+100)
    }
    const onDownClick = () => {
        return setSalary(salary-100)
    }
  return (
      <div>
          <h2>Name: {name}</h2>
          <p>Base salary: {baseSalary}</p>
          <p>Total salary: {salary}</p>

          <button onClick={onRaiseClick}>Raise salary</button>
          <button onClick={onDownClick}>Down salary</button>
    </div>
  )
}

export default Employee