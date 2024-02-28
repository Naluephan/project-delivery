import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { NavLink } from "react-router-dom";
import FoodMenuService from "../services/FoodMenuService";
import { FaShoppingCart } from "react-icons/fa";

const Product = () => {
  const [foodmenus, setFoodMenus] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery.trim() !== "") {
        FoodMenuService.search(searchQuery)
          .then((res) => {
            console.log(res.data.data);
            setFoodMenus(res.data.data);
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        FoodMenuService.getAll()
          .then((res) => {
            console.log(res.data.data);
            setFoodMenus(res.data.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }, 500); // Adjust the debounce time as needed

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <MainLayout>
      <h1 className="mt-3">Delivery Menu</h1>
      <hr />
      <div className="row">
        <div className="col d-flex justify-content-end">
        <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <NavLink to="/product/new" className="btn btn-success">
            Add a Menu
          </NavLink>
        </div>
      </div>
      <div className="row mt-2 row-cols-lg-2 row-cols-2 g-2">
        {foodmenus.map((menu) => (
          <FoodMenuCard key={menu._id} menu={menu} />
        ))}
      </div>
    </MainLayout>
  );
};
const FoodMenuCard = (props) => {
  return (
    <>
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <center>
            <h4>{props.menu.res_name}</h4></center>
            <center><img src={`/images/${props.menu.img}`} alt="" style={{ width:'75%',height:'25%', borderRadius:'5%'}}/></center>
            <div className="card-text">
              <center><h5>{props.menu.name}</h5></center>
              <center><h5>${props.menu.price}</h5></center>
              <center><h6>{props.menu.category}</h6></center>
              <div className="col d-flex justify-content-center">
                <NavLink
                  to={"/product/" + props.menu._id}
                  className="btn btn-primary"
                >
                  ดูเพิ่มเติม
                </NavLink>{" "}
                <NavLink className="btn btn-success">
                  <FaShoppingCart />ใส่ตะกร้า
                </NavLink>
                <NavLink
                  to={"/product/edit/" + props.menu._id}
                  className="btn btn-warning"
                >
                  แก้ไข
                </NavLink>{" "}
                <NavLink
                  to={"/product/delete/" + props.menu._id}
                  className="btn btn-danger"
                >
                  ลบ
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
