import { useState } from "react";

const Employee = ({ name, baseSalary }) => {
  const [salary, setSalary] = useState({ baseSalary, bonus: 50 });
  const onRaiseClick = () => {
    return setSalary({ ...salary, baseSalary: salary.baseSalary + 100 });
  };
  const onDownClick = () => {
    return setSalary({ ...salary, baseSalary: salary.baseSalary - 100 });
  };
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Base salary: {baseSalary}</p>
      <p>Total salary: {salary.baseSalary + salary.bonus}</p>

      <button onClick={onRaiseClick}>Raise salary</button>
      <button onClick={onDownClick}>Down salary</button>
    </div>
  );
};

export default Employee;
