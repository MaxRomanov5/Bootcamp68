import { useState } from "react";
import Employee from "../Employee/Employee";

function EmployeeList() {
    const [bonus, setBonus] = useState(50);

    function handleRaiseBonus() {
        setBonus(bonus + 50);
    }

    return (
        <div>
            <Employee
                name={"Antonio"}
                baseSalary={1500}
                bonus={Number((bonus / 3).toFixed(2))}
                handleRaiseBonus={handleRaiseBonus}
            />
            <Employee
                name={"Alex"}
                baseSalary={2000}
                bonus={Number((bonus / 3).toFixed(2))}
                handleRaiseBonus={handleRaiseBonus}
            />
            <Employee
                name={"Robin"}
                baseSalary={4000}
                bonus={Number((bonus / 3).toFixed(2))}
                handleRaiseBonus={handleRaiseBonus}
            />
        </div>
    );
}

export default EmployeeList;
