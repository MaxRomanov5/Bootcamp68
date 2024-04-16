import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchGoods } from "../components/redux/operations";
import {
  filteredGoods,
  selectGoods,
  selectLoading,
} from "../components/redux/selectors";
import { useNavigate } from "react-router-dom";

function Gallery() {
  const goods = useSelector(selectGoods);
  const loading = useSelector(selectLoading);
  const filteredGoodsArr = useSelector(filteredGoods);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  function handleClick(id) {
    navigate(`/${id}`);
  }

  return (
    <>
      {loading && <h3>Loading...</h3>}
      {filteredGoodsArr.length > 0 && (
        <ul>
          {filteredGoodsArr?.map((item) => {
            return (
              <li onClick={() => handleClick(item.id)} key={item.id}>
                <h3>{item.title}:</h3>
                <p>{item.description}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Gallery;
