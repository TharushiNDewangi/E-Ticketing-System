import { Route, Switch} from  'react-router-dom';
import React, { useEffect } from 'react';
import './index.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn,getAllCategory} from './actions';
import routeAdd from './components/routes/Routes';
import routeView from './components/routes/ViewRoutes'
import AddBuses from './components/buses/bus';
import Buses from './components/buses/ViewBuses';
import booking from './components/booking/addbooking';
import bookingList from './components/booking/bookingList';
import payment from './components/payments/Payment';
import paymentList from './components/payments/paymentList';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
     dispatch(isUserLoggedIn());
    }
    
   
},[]);
  return (
    <div className="App">
      <Switch>
         {/* <PrivateRoute path = "/" exact component ={ Home }/> */}
         
         {/* <PrivateRoute path = "/adminreseach" exact component = {ReaseachPaper}/>
         <PrivateRoute path = "/adminworkshop" exact component = {Workshop}/>
         <PrivateRoute path = "/adminconference" exact component = {AdminConference}/>
         <PrivateRoute path = "/adminhome" exact component ={ AdminHome }/> */}
         <Route path = "/" exact component ={ Home }/>
         <Route path = "/signin" component ={ Signin }/>
         <Route path = "/signup" component ={ Signup }/>
         <Route path= "/addroute" exact component ={routeAdd}/>
         <Route path= "/addbus" exact component ={AddBuses}/>
         <Route path= "/viewbuses" exact component ={Buses}/>
        <Route path= "/viewroute"  component ={ routeView }/>
        <Route path= "/booking"  component ={ booking }/>
        <Route path= "/bookingList"  component ={ bookingList }/>
         <Route path= "/payment"  component ={ payment }/>
         <Route path= "/paymentList"  component ={ paymentList }/>
       
        
        
       </Switch>
    </div>
  );
}

export default App;
