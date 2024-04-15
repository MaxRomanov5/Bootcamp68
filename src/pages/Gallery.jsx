import { useSelector, useDispatch } from "react-redux";
import { selectGoods, selectLoading } from "../components/redux/gallerySlice";
import { useEffect } from "react";
import { fetchGoods } from "../components/redux/operations";

function Gallery() {
    const goods = useSelector(selectGoods);
    const loading = useSelector(selectLoading);
    console.log(goods);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGoods());
    }, [dispatch]);

    return (
        <>
            {loading && <h3>Loading...</h3>}
            <ul>
                {goods.map((item) => {
                    return (
                        <li key={item.id}>
                            <h3>{item.title}:</h3>
                            <p>{item.description}</p>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default Gallery;
