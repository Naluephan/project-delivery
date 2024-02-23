import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import UserService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const CreateUser = () => {
let navigate = useNavigate();
  let [user,setUser] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const saveUser = (e)=>{
    e.preventDefault();
    UserService.create(user)
    .then((res)=>{
      Swal.fire({
        icon: "warning",
        title: "ต้องการเพิ่มสมาชิกหรือไม่",
        showCancelButton: true,
confirmButtonColor: "#3085d6",
cancelButtonColor: "#d33",
confirmButtonText: "ตกลง"})
.then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "เพิ่มสมาชิกสำเร็จ",
      icon: "success",
    }).then(() => {
      navigate("/user")
    });
  }
});
})
    .catch((e)=>console.log(e));
  }
  return (
    <MainLayout>
      <h1 className="mt-3">New User</h1>
      <hr />
      <div className="row">
        <div className="col-md-8 offset-md-2"> 
          <form onSubmit={saveUser}>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Name
              </label>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  id="first_name"
                  placeholder="ชื่อจริง"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  id="last_name"
                  placeholder="นามกสุล"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Tel
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="tel"
                  id="tel"
                  placeholder="เบอร์โทรศัพท์"
                  onChange={handleInputChange}

                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Address
              </label>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  name="district"
                  id="district"
                  placeholder="อำเภอ"
                  onChange={handleInputChange}

                />
                </div>
              <div className="col-4">
                <input
                  type="text"
                  className="form-control"
                  name="sub_district"
                  id="sub_district"
                  placeholder="เขต/ตำบล"
                  onChange={handleInputChange}

                />
              </div>
              </div>
              <div className="mb-3 row">
              <label htmlFor="inputName" className="col col-form-label">
                </label>
              <div className="col-2">
                <input
                  type="text"
                  className="form-control"
                  name="province"
                  id="province"
                  placeholder="จังหวัด"
                  onChange={handleInputChange}

                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  className="form-control"
                  name="country"
                  id="country"
                  placeholder="ประเทศ"
                  onChange={handleInputChange}

                />
              </div>
              <div className="col-3">
                <input
                  type="text"
                  className="form-control"
                  name="zipcode"
                  id="zipcode"
                  placeholder="รหัสไปรษณีย์"
                  onChange={handleInputChange}

                />
              </div>
              </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Username
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  id="username"
                  placeholder="Username"
                  onChange={handleInputChange}

                />
              </div>
              
              
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-4 col-form-label">
                Password
              </label>
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Password"
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
export default CreateUser