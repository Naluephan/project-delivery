import React, { useState, useEffect } from "react";
import MainLayout from '../layouts/MainLayout';
import FoodMenuService from "../services/FoodMenuService";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [foodMenu, setFoodMenu] = useState({
    name: "",
    price: "",
    category: ""
  });

  useEffect(() => {
    FoodMenuService.get(id)
      .then((res) => {
        setFoodMenu(res.data.data); 
      })
      .catch((e) => console.log(e));
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFoodMenu({ ...foodMenu, [name]: value });
  };

  const saveFoodMenu = (e) => {
    e.preventDefault();
    FoodMenuService.update(id, foodMenu)
      .then(() => {
        swal({
          icon: "success",
          title: "แก้ไขสำเร็จ",
          showConfirmButton: true,
          timer: 1500
        });
        navigate("/product");
      })
      .catch((e) => console.log(e));
  };

  return (
    <MainLayout>
      <h1 className="mt-3">Edit Product</h1>
      <hr />
      <div className="row">
        <div className="col-md-8 offset-md-2"> 
          <form onSubmit={saveFoodMenu}>
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
                  value={foodMenu.name}
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
                  value={foodMenu.price}
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
                  value={foodMenu.category}
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

export default EditProduct;
