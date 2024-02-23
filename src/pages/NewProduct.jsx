import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import FoodMenuService from "../services/FoodMenuService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const NewProduct = () => {
  let navigate = useNavigate();
  let [foodMenu,setFoodMenu] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFoodMenu({ ...foodMenu, [name]: value });
  };
  const saveFoodMenu = (e)=>{
    e.preventDefault();
    FoodMenuService.create(foodMenu)
    .then((res)=>{
      Swal.fire({
        icon: "warning",
        title: "ต้องการเพิ่มเมนูหรือไม่",
        showCancelButton: true,
confirmButtonColor: "#3085d6",
cancelButtonColor: "#d33",
confirmButtonText: "ตกลง"})
.then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "เพิ่มเมนูสำเร็จ",
      icon: "success",
    }).then(() => {
      navigate("/product")
    });
  }
});
})
    .catch((e)=>console.log(e));
  }
  return (
    <MainLayout>
      <h1 className="mt-3">New Product</h1>
      <hr />
      <div className="row">
        <div className="col-md-8 offset-md-2"> 
          <form onSubmit={saveFoodMenu}>
          <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Restaurant Name
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="res_name"
                  id="res_name"
                  placeholder="Name"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                รูปภาพปลากรอบ
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="img"
                  id="img"
                  placeholder="img"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Name
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder="Name"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Price
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  id="price"
                  placeholder="Price"
                  onChange={handleInputChange}

                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Category
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  id="category"
                  placeholder="Category"
                  onChange={handleInputChange}

                />
              </div>
            </div>
            <div className="mb-3 row">
              <div className="offset-sm-4 col-sm-8">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};
export default NewProduct;
