import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './componants/Header/Header';
import Inventory from './componants/Inventroy/Inventory';
import OrderReview from './componants/OrderReview/OrderReview';
import Shop from './componants/Shop/Shop';
import NotFound from './componants/NotFound/NotFound';
import PlaceOrder from './componants/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
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
          <Route path="/inventroy">
            <Inventory></Inventory>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
