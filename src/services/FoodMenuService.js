import http from "../http-common"

const getAll = () =>{
    return http.get("/foodmenu");
}
const get = (id) =>{
    return http.get("/foodmenu/"+ id);
}
const create = (foodMenu) =>{
    return http.post("/foodmenu", foodMenu);
}
const remove = (id) =>{
    return http.delete("/foodmenu/"+ id);
}
const update =(id) =>{
    return http.put("/foodmenu/"+id);
}
const FoodMenuService = {
    getAll,
    get,
    create,
    remove,
    update
}
export default FoodMenuService;