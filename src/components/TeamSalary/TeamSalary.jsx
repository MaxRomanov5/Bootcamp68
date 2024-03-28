function TeamSalary({ name, salary, updateSalary }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Salary: {salary}</p>
      <button onClick={updateSalary}>Raise: {name}</button>
    </>
  );
}

export default TeamSalary;
