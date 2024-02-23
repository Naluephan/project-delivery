import http from "../http-common"

const getAll = () =>{
    return http.get("/user");
}
const get = (id) =>{
    return http.get("/user/"+ id);
}
const create = (user) =>{
    return http.post("/user",user);
}
const update =(id,user) =>{
    return http.put("/user/"+id,user);
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