import css from "./Nav.module.css";
import clsx from "clsx";

function Nav({ data }) {
  return (
    <div>
      <ul>
        {data.map((menuItem) => {
          return (
            <li key={menuItem.id} className={ css.item}>
              {menuItem.icon}
              <p className={"text " + clsx(menuItem.isActive ? css.active : css.inactive)}>{menuItem.name}</p>
              <p>{ menuItem.isActive ? "active" : "inactive"}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Nav;
