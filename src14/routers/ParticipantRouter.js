import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddParticipant from '../components/ParticipantComponents/ParticipantComponents/AddParticipant';
// import ProductList from '../../components/ProductComponents/ProductList';
// import UpdateProduct from '../../components/ProductComponents/UpdateProduct';
// import ShowProduct from '../../components/ProductComponents/ShowProduct';
// import Product from '../../components/ProductComponents/Product';
const ParticipantRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Switch>
            <Route path="/addparticipant" component={AddParticipant} exact/>
            {/* <Route path="/product/update/:id" component={UpdateProduct} exact/>
            <Route path="/product/show-all" component={ProductList}/>
            <Route path="/product/show-by-id/:id" exact component={ShowProduct} />
            <Route path="/product" component={Product} exact/> */}
            </Switch>
        </div>
    </BrowserRouter>
);

export default ParticipantRouter;