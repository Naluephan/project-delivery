import React ,{useState, useEffect}from 'react'
import MainLayout from '../layouts/MainLayout';
import { NavLink } from "react-router-dom";
import UserService from "../services/UserService";
const User = () => {
  const [User, setUser] = useState([]);
  const fetchUser = ()=>{
    UserService.getAll()
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
      <h1 className="mt-3">All User</h1>
      <hr />
      <div className="row">
        <div className="col d-flex justify-content-end">
          <NavLink to="/user/new" className="btn btn-success">
            Add a new User
          </NavLink>
        </div>
      </div>
      <div className="row">
        {
          User.map((user)=>(
          <UserCard key={user._id} user={user}/>
          ))
        }
      </div>
    </MainLayout>
  )
}
const UserCard = (props) => {
  
  return (
    <>
    <div className="row">
      <div className="col-12">
        <div className="card mt-3">
          <div className="card-body">
            <div className="card-text">
              <h2> {props.user.full_name}  {props.user.full_name}</h2>
              <h5>{props.user.tel}</h5>
              <h6>{props.user.username}</h6>
              <h6>{props.user.password}</h6>
              <div className="col-12 d-flex justify-content-end">
              <NavLink
                to={"/user/" + props.user._id}
                className="btn btn-primary"
              >
               ดูเพิ่มเติม
              </NavLink>{" "}
              {/* <NavLink
                to={"/product/" + props.user._id}
                className="btn btn-success"
              >
                Buy Now
              </NavLink>{" "} */}
              <NavLink
                to={"/user/edit/" + props.user._id}
                className="btn btn-warning"
              >
                แก้ไข
              </NavLink>{" "}
              <NavLink
                to={"/user/delete/" + props.user._id}
                className="btn btn-danger"
              >
                ลบ
              </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
};
export default User