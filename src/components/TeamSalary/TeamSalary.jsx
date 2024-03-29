function TeamSalary({ name, salary, updateSalary, raiseTeamBonus, teamBonus }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Salary: {salary}</p>
      <button onClick={updateSalary}>Raise: {name}</button>
      <button
        disabled={teamBonus >= 100 ? true : false}
        onClick={raiseTeamBonus}
      >
        Pay bonus
      </button>
    </>
  );
}

export default TeamSalary;
