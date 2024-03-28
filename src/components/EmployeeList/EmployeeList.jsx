import { useState } from "react";
import Employee from "../Employee/Employee";
import TeamSalary from "../TeamSalary/TeamSalary";

function EmployeeList() {
  const [bonus, setBonus] = useState(50);
  const [firstTeamSalary, setFirstTeamSalary] = useState(0);
  const [secondTeamSalary, setSecondTeamSalary] = useState(0);

  function handleRaiseBonus() {
    setBonus(bonus + 50);
  }

  return (
    <div>
      {/* <Employee
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
      /> */}
      <TeamSalary
        name={"firstTeam"}
        salary={firstTeamSalary}
        updateSalary={setFirstTeamSalary}
      />
    </div>
  );
}

export default EmployeeList;
