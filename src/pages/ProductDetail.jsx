import react,{ useState, useEffect } from "react";
import MainLayout from '../layouts/MainLayout';
import { useParams, NavLink } from "react-router-dom";
import FoodMenuService from "../services/FoodMenuService";
const ProductDetail = () => {
  let params = useParams();
  let id = params.id;
  let [foodMenu, setFoodMenu] = useState({});
  const fetchFoodMenu= (id)=>{
    FoodMenuService.get(id)
    .then((res)=>{
      setFoodMenu(res.data.data);
    })
    .catch((e)=>console.log(e));
  }
  useEffect(()=>{
    fetchFoodMenu(id)
  },[]);
  return (
    <MainLayout>
      <h1 className="mt-3">{foodMenu.name}</h1>
      <hr />
      <div className="row mt-3">
        <div className="col-md-4">
          <img src={`/images/${foodMenu.img}`} alt="" style={{ width:'100%', borderRadius:'10%'}}/>
        </div>
        <div className="col-md-8 border p-4">
        <p>
            <label htmlFor="" className="lblStyle">
              Restaurant Name:{" "}
            </label>{" "}
            {foodMenu.res_name}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Name:{" "}
            </label>{" "}
            {foodMenu.name}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Price:{" "}
            </label>{" "}
            {foodMenu.price}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Category:{" "}
            </label>{" "}
            {foodMenu.category}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Description:{" "}
            </label>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            expedita doloremque aliquid a hic est necessitatibus iusto mollitia,
            quasi quod modi quas ipsum repudiandae porro sint tempore totam nam
            blanditiis vel aut placeat similique, consectetur illum. Eius
            temporibus nam vero fuga illo officia reprehenderit eveniet, itaque
            enim expedita pariatur. Nulla?
          </p>
          <p className="text-center">
            <button className="btn btn-primary">Add to Cart</button>
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              ingredients:{" "}
            </label>{" "}
            {foodMenu.ingredients}
          </p>
        </div>
      </div>
      <div>
        <h2>Reviews</h2>
        <hr />
        {foodMenu.reviews &&
          foodMenu.reviews.map((r) => (
            <div className="alert alert-info">
              <p>Star: {"🐊".repeat(r.star)}</p>
              <p>{r.message}</p>
            </div>
          ))}
      </div>
    </MainLayout>
    
  );
};

export default ProductDetail;
