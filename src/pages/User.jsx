import React ,{useState, useEffect}from 'react'
import MainLayout from '../layouts/MainLayout';
import { NavLink } from "react-router-dom";
import UserService from "../services/UserService";
const User = () => {
  const [user, setUser] = useState([]);
  const fetchUser = ()=>{
    FoodMenuService.getAll()
    .then((res)=>{
      console.log(res.data.data)
      setUser(res.data.data)
    })
    .catch((e)=>{
      console.log(e)
    });
  }
  useEffect(()=>{
    fetchUser()
  },[]);
  return (
    <MainLayout>
      <h1 className="mt-3">Edit Profile</h1>
      <hr />
      <div className="row">
        <div className="col d-flex justify-content-end">
          <NavLink to="/product/new" className="btn btn-success">
            Add a new User
          </NavLink>
        </div>
      </div>
      <div className="row mt-2 row-cols-lg-4 row-cols-3 g-2">
        {
          user.map((menu)=>(
          <FoodMenuCard menu={menu}/>
          ))
        };
      </div>
    </MainLayout>
  )
}
const FoodMenuCard = (props) => {
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-body">
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
export default User