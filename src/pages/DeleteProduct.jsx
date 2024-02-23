import React, { useState, useEffect} from "react";
import { useParams, NavLink, useNavigate  } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import FoodMenuService from "../services/FoodMenuService";
import Swal from "sweetalert2";

const DeleteProduct = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;
  let [foodMenu, setFoodMenu] = useState([]);

  const fetchFoodMenu = (id) => {
    FoodMenuService.remove(id)
    .then((res)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          }).then(() => {
            navigate("/product");
          });
        }
      });
    })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchFoodMenu(id);
  }, [id]);

  const handleDelete = async (id) => {
    try {
      await FoodMenuService.remove(id);
      history.push("/product");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <MainLayout>
      <h1 className="mt-3">Delete Product</h1>
      <div className="row mt-2 row-cols-lg-4 row-cols-3 g-2">
        {foodMenu.map((menu) => (
          <FoodMenuCard key={menu.id} menu={menu} onDelete={handleDelete} />
        ))}
      </div>
      <hr />
    </MainLayout>
  );
};

const FoodMenuCard = (props) => {
  const handleDeleteClick = () => {
    props.onDelete(props.menu.id);
  };

  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-body">
            {/* ... */}
            <NavLink
              to={"/product/delete/" + props.menu.id}
              className="btn btn-danger"
              onClick={handleDeleteClick}
            >
              Delete
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteProduct;
