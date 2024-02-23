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
const update =(id,foodMenu) =>{
    return http.put("/foodmenu/"+id,foodMenu);
}
const search =(name) =>{
    return http.get("/foodmenu/name/"+name);
}
const FoodMenuService = {
    getAll,
    get,
    create,
    remove,
    update,
    search
}
export default FoodMenuService;