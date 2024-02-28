import React, { useState, useEffect} from "react";
import { useParams, NavLink, useNavigate  } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import UserService from "../services/UserService";
import swal from "sweetalert";

const DeleteUser = () => {
    let navigate = useNavigate();
  let params = useParams();
  let id = params.id;

  const confirmDelete = () => {
    swal({
      icon: "warning",
      dangerMode: true,
      title: "Confirm",
      text: "ยืนยันการลบข้อมูลหรือไม่ ?",
      buttons: true,
  }).then((confirm) => {
    if (confirm) {
      UserService.remove(id)
      swal({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      }).then((res) => navigate("/user"))
      .catch((e) => console.log(e));
  } else {
    // กลับไปหน้า Product
    navigate("/user");
  }
});
}
  useEffect(() => {
    confirmDelete();
  }, []);

  return (
    <MainLayout>
      <h1 className="mt-3">Delete User</h1>
      <hr />
    </MainLayout>
  );
};

export default DeleteUser