import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddCourse from '../components/CourseComponents/AddCourse';
// import ProductList from '../../components/ProductComponents/ProductList';
// import UpdateProduct from '../../components/ProductComponents/UpdateProduct';
// import ShowProduct from '../../components/ProductComponents/ShowProduct';
// import Product from '../../components/ProductComponents/Product';
const CourseRouter = () => (
    <BrowserRouter>
        <div className='container'>
            <Switch>
            <Route path="/addcourse" component={AddCourse} exact/>
            {/* <Route path="/product/update/:id" component={UpdateProduct} exact/>
            <Route path="/product/show-all" component={ProductList}/>
            <Route path="/product/show-by-id/:id" exact component={ShowProduct} />
            <Route path="/product" component={Product} exact/> */}
            </Switch>
        </div>
    </BrowserRouter>
);

export default CourseRouter;