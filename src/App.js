import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './componants/Header/Header';
import Inventory from './componants/Inventroy/Inventory';
import OrderReview from './componants/OrderReview/OrderReview';
import Shop from './componants/Shop/Shop';
import NotFound from './componants/NotFound/NotFound';
import PlaceOrder from './componants/PlaceOrder/PlaceOrder';
import Login from './componants/Login/Login';
import Register from './componants/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './componants/PrivateRoute/PrivateRoute';
import Shipping from './componants/Shipping/Shipping';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>
            <PrivateRoute path="/inventroy">
              <Inventory></Inventory>
            </PrivateRoute>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
