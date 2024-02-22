import http from "../http-common"

const getAll = () =>{
    return http.get("/user");
}
const get = (id) =>{
    return http.get("/user/"+ id);
}
const create = (User) =>{
    return http.post("/user",User);
}
const update =(id,User) =>{
    return http.put("/user/"+id,User);
}
const remove = (id) =>{
    return http.delete("/user/"+ id);
}
const UserService = {
    getAll,
    get,
    create,
    update,
    remove
}
export default UserService;