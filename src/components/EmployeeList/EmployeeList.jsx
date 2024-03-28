import { useEffect, useState } from "react";
import Employee from "../Employee/Employee";
import TeamSalary from "../TeamSalary/TeamSalary";
import TotalTeamSalary from "../TotalTeamSalary/TotalTeamSalary";
import localStorage from "../../helpers/localStorage";

function EmployeeList() {
  const [bonus, setBonus] = useState(50);
  const [firstTeamSalary, setFirstTeamSalary] = useState(() => {
    const data = localStorage.load("firstTeamSalary");
    if (data) {
      return data;
    } else {
      return 0;
    }
  });
  const dataSecondTeam = localStorage.load("secondTeamSalary");
  const [secondTeamSalary, setSecondTeamSalary] = useState(
    dataSecondTeam ? dataSecondTeam : 0
  );

  function handleRaiseBonus() {
    setBonus(bonus + 50);
  }

  function handleFirstTeamSalary() {
    setFirstTeamSalary(firstTeamSalary + 10);
  }

  function handleSecondTeamSalary() {
    setSecondTeamSalary(secondTeamSalary + 10);
  }

  function salaryReset() {
    setFirstTeamSalary(0);
    setSecondTeamSalary(0);
  }

  useEffect(() => {
    localStorage.save("firstTeamSalary", firstTeamSalary);
    localStorage.save("secondTeamSalary", secondTeamSalary);
  }, [firstTeamSalary, secondTeamSalary]);

  const totalSalary = firstTeamSalary + secondTeamSalary;
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
        updateSalary={handleFirstTeamSalary}
      />
      <TeamSalary
        name={"secondTeam"}
        salary={secondTeamSalary}
        updateSalary={handleSecondTeamSalary}
      />
      {totalSalary > 0 ? (
        <>
          <TotalTeamSalary totalSalary={totalSalary} />
          <button onClick={salaryReset}>Salary reset</button>
        </>
      ) : (
        "Not salary yet"
      )}
    </div>
  );
}

export default EmployeeList;
