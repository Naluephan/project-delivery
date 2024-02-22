import React, { useState, useEffect } from "react";
import MainLayout from '../layouts/MainLayout';
import { NavLink } from "react-router-dom";
import FoodMenuService from "../services/FoodMenuService";
import logo from "../assets/react.svg"


const Product = () => {
  const [foodmenus, setFoodMenus] = useState([]);
  const fetchFoodMenus = ()=>{
    FoodMenuService.getAll()
    .then((res)=>{
      console.log(res.data.data)
      setFoodMenus(res.data.data)
    })
    .catch((e)=>{
      console.log(e)
    });
  }
  useEffect(()=>{
    fetchFoodMenus()
  },[]);
  
  return (
    <MainLayout>
      <h1 className="mt-3">Delivery Menu</h1>
      <hr />
      <div className="row">
        <div className="col d-flex justify-content-end">
          <NavLink to="/product/new" className="btn btn-success">
            Add a Product
          </NavLink>
        </div>
      </div>
      <div className="row mt-2 row-cols-lg-3 row-cols-2 g-2">
        {
          foodmenus.map((menu)=>(
          <FoodMenuCard key={menu._id} menu={menu}/>
          ))
        }
      </div>
    </MainLayout>
  );
};

const FoodMenuCard = (props) => {
  return (
    <>
      <div className="col-12">
        <div className="card">
          <div className="card-body" style={{'padding-left':45 }} >
            <img src={logo} alt="" />
            <div className="card-text">
              <h5>{props.menu.name}</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Fugiat, saepe!
              </p>
              <h5>${props.menu.price}</h5>
              <h6>{props.menu.category}</h6>
              <NavLink
                to={"/product/" + props.menu._id}
                className="btn btn-primary"
              >
                Learn More
              </NavLink>{" "}
              <NavLink
                to={"/product/" + props.menu._id}
                className="btn btn-success"
              >
                Buy Now
              </NavLink>{" "}
              <NavLink
                to={"/product/edit/" + props.menu._id}
                className="btn btn-warning"
              >
                Edit
              </NavLink>{" "}
              <NavLink
                to={"/product/delete/" + props.menu._id}
                className="btn btn-danger"
              >
                Delete
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
