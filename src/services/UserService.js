import http from "../http-common"

const getAll = () =>{
    return http.get("/user");
}
const get = (id) =>{
    return http.get("/user/"+ id);
}
const create = (user) =>{
    return http.post("/user", user)
}

const UserService = {
    getAll,
    get,
    create
}
export default UserService;