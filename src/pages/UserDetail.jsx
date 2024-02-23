import React,{ useState, useEffect } from "react";
import MainLayout from '../layouts/MainLayout';
import { useParams ,NavLink } from "react-router-dom";
import UserService from "../services/UserService";
import logo from "../assets/react.svg"
const UserDetail = () => {
    let params = useParams();


  let id = params.id;
  let [user, setUser] = useState({});
  const fetchUser= (id)=>{
    UserService.get(id)
    .then((res)=>{
        setUser(res.data.data);
    })
    .catch((e)=>console.log(e));
  }
  useEffect(()=>{
    fetchUser(id)
  },[]);
  return (
    <MainLayout>
    <h1 className="mt-3">รายละเอียดข้อมูล</h1>
    <hr />
    <div className="row mt-3">
      <div className="col-12 border p-4">
      <p>
          <label htmlFor="" className="lblStyle">
            ชื่อ-นามสกุล:{" "} 
          </label>{" "}
          {user.full_name} {user.full_name}
        </p>
        <p>
          <label htmlFor="" className="lblStyle">
            เบอร์โทรศัพท์:{" "}
          </label>{" "}
         {user.tel}
        </p>
        <p>
          <label htmlFor="" className="lblStyle">
            ที่อยู่:{" "}
          </label>{" "}
          
        </p>
        <p>
          <label htmlFor="" className="lblStyle">
            Username:{" "}
          </label>{" "}
          {user.username}
        </p>
        <p>
          <label htmlFor="" className="lblStyle">
            Password:{" "}
          </label>{" "}
          {user.password}
        </p>
        <p className="text-center">
        <NavLink
                to={"/user"}
                className="btn btn-primary"
              >
                Back
              </NavLink>
        </p>
      </div>
    </div>
  </MainLayout>
  
);
};


export default UserDetail


