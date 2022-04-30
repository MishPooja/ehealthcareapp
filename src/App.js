import './App.css';

import{Home} from './Home';
import{About} from './About';
import{Contact} from './Contact';
import Navigation from './Navigation';

import{BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Medicine from './Medicine';
import User from './User';
import AdminRights from './AdminRights';
import Signup from './Signup';
import AddMedicine from './AddMedicine';
import EditMedicine from './EditMedicine';
import UserMedicine from './UserMedicine';
import Cart from './Cart';
import Viewuser from './Viewuser';
import Edituser from './Edituser';
import Addfunds from './Addfunds';
import {Vieworders} from './Vieworders';
import Checkout from './Checkout';
import {Order} from './Order';
import Viewordersbyuser from './Viewordersbyuser';


function App() {
  return (    
    <div className="container">
    <BrowserRouter>
     <h3 className="m-3 d-flex justify-content-center">Get Your Medicines Home ...</h3>
     <Navigation/>
    <Routes>
      <Route exact path ='/' element ={<Home/>} />
      <Route exact path ='/About' element={<About/>}/>      
      <Route exact path ='/Contact' element={<Contact/>}/>        
      <Route exact path ='/Login' element={<Login/>}/>
      <Route exact path ='/Medicine' element={<Medicine/>}/>
      <Route exact path ='/AdminRights' element={<AdminRights/>}/>
      <Route exact path ='/User' element={<User/>}/>
      <Route exact path ='/Signup' element={<Signup/>}/>
      <Route exact path ='/AddMedicine' element={<AddMedicine/>}/>
      <Route exact path ='/EditMedicine' element={<EditMedicine/>}/>
      <Route exact path ='/UserMedicine' element={<UserMedicine/>}/>
      <Route exact path ='/Cart' element={<Cart/>}/>
      <Route exact path ='/Viewuser' element={<Viewuser/>}/>
      <Route exact path ='/Edituser' element={<Edituser/>}/>
      <Route exact path ='/Addfunds' element={<Addfunds/>}/>
      <Route exact path ='/Vieworders' element={<Vieworders/>}/>
      <Route exact path ='/Order' element={<Order/>}/>
      <Route exact path ='/Checkout' element={<Checkout/>}/>
      <Route exact path ='/Viewordersbyuser' element={<Viewordersbyuser/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
