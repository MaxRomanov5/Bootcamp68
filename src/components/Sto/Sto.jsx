import { useState } from "react"
import Worker from "../Worker/Worker"

function Sto() {
    const [income, setIncome] = useState(0)
    
    function hendleIncome() {
        setIncome(income +10)
        
    }
    return (
        <>
            <div>Total income:{income}</div>
            <Worker name={"Bob"} hendleIncome={hendleIncome} />
            <Worker name={"Bob"} hendleIncome={hendleIncome} />
            <Worker name={"Bob"} hendleIncome={hendleIncome} />
            
        </>
     
  )
}

export default Sto