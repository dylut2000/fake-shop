import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { Header } from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';


function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/product/:productId" component={ProductDetail} />
            <Route>404 Not found</Route>
        </Switch>
    
      </Router>
    </div>
  );
}


export default App;
