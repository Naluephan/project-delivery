
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import NewProduct from './pages/NewProduct';
import EditProduct from './pages/EditProduct';
import DeleteProduct from './pages/DeleteProduct';
import User from './pages/User';
import CreateUser from './pages/CreateUser';
import UserDetail from './pages/UserDetail';
import EditUser from './pages/EditUser';
import DeleteUser from './pages/DeleteUser';
function App() {
  return (
    <Routes>
      <Route path='/' exact={true} element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/new' element={<NewProduct/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
      <Route path='/product/edit/:id' element={<EditProduct/>}/>
      <Route path='/product/delete/:id' element={<DeleteProduct/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/user/new' element={<CreateUser/>}/>
      <Route path='/user/:id' element={<UserDetail/>}/>
      <Route path='/user/edit/:id' element={<EditUser/>}/>
      <Route path='/user/delete/:id' element={<DeleteUser/>}/>


    </Routes>
  );
}

export default App;