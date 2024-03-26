function Nav({ data }) {
  return (
    <div>
      <ul>
        {data.map((menuItem) => {
          return (
            <li>
              {menuItem.icon}
              <p>{menuItem.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;
