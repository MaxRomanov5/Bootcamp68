import { useState } from "react";

const Employee = ({ name, baseSalary, bonus, handleRaiseBonus }) => {
    const [salary, setSalary] = useState({ baseSalary });
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
            <p>Bonus: {bonus}</p>
            <p>Total salary: {salary.baseSalary + bonus}</p>

            <button onClick={onRaiseClick}>Raise salary</button>
            <button onClick={onDownClick}>Down salary</button>

            <button onClick={handleRaiseBonus}>Raise Bonus</button>
        </div>
    );
};

export default Employee;
