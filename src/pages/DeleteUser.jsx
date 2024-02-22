import React, { useState, useEffect} from "react";
import { useParams, NavLink, useNavigate  } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import UserService from "../services/UserService";
import swal from "sweetalert";

const DeleteUser = () => {
    let navigate = useNavigate();
  let params = useParams();
  let id = params.id;
  let [User, setUser] = useState([]);

  const fetchFoodMenu = (id) => {
    UserService.remove(id)
    .then((res)=>{
      swal({
        title: 'ยืนยัน!! ลบข้อมูล',
        text: "ต้องการดำเนินการใช่หรือไม่!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#e83e3e',
        cancelButtonColor: '#bb93ab',
        confirmButtonText: 'ยืนยัน',
        cancelButtonText: 'ปิด'
      });
      navigate("/user");
    })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    fetchFoodMenu(id);
  }, [id]);

  const handleDelete = async (id) => {
    try {
      await UserService.remove(id);
      history.push("/user");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <MainLayout>
      <h1 className="mt-3">Delete User</h1>
      <div className="row mt-2 row-cols-lg-4 row-cols-3 g-2">
        {User.map((user) => (
          <UserCard key={user.id} user={user} onDelete={handleDelete} />
        ))}
      </div>
      <hr />
    </MainLayout>
  );
};

const UserCard = (props) => {
  const handleDeleteClick = () => {
    props.onDelete(props.user.id);
  };

  return (
    <>
      <div className="col">
        <div className="card">
          <div className="card-body">
            {/* ... */}
            <NavLink
              to={"/user/delete/" + props.user.id}
              className="btn btn-danger"
              onClick={handleDeleteClick}
            >
              Delete
            </NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeleteUser