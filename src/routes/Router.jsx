import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/frontend/Home'
import Details from '../pages/frontend/Details'
import Cart from '../pages/frontend/Cart'
import Checkout from '../pages/frontend/Checkout'
import Profile from '../pages/backend/dashboard/Profile'
import ProfileEdit from '../pages/backend/dashboard/ProfileEdit'
import Categories from '../pages/backend/categories/Categories'
import AddOrEditCategory from '../pages/backend/categories/AddOrEditCategory'
import Products from '../pages/backend/products/Products'
import AddOrEditProduct from '../pages/backend/products/AddOrEditProduct'
import Users from '../pages/backend/users/Users'
import AddOrEditUser from '../pages/backend/users/AddOrEditUser'
import Orders from '../pages/backend/orders/Orders'
import OrderView from '../pages/backend/orders/OrderView'

export default function Router() {
    return (
        <Routes>
            {/* home page */}
            <Route path='/' element={<Home />} />

            {/* product details page */}
            <Route path='/product-details' element={<Details />} />

            {/* cart page */}
            <Route path='/cart' element={<Cart />} />

            {/* checkout page */}
            <Route path='/checkout' element={<Checkout />} />

            {/* admin routes */}
            <Route path='/admin'>
                {/* dashboard routes */}
                <Route path='dashboard' element={<Profile />} />

                {/* profile edit */}
                <Route path='profile/edit' element={<ProfileEdit />} />

                {/* orders */}
                <Route path='order'>
                    <Route path='' element={<Orders />} />
                    <Route path='view' element={<OrderView />} />
                </Route>

                {/* categories */}
                <Route path='category'>
                    <Route path='' element={<Categories />} />
                    <Route path='create' element={<AddOrEditCategory />} />
                    <Route path='edit' element={<AddOrEditCategory />} />
                </Route>

                {/* products */}
                <Route path='product'>
                    <Route path='' element={<Products />} />
                    <Route path='create' element={<AddOrEditProduct />} />
                    <Route path='edit' element={<AddOrEditProduct />} />
                </Route>

                {/* users */}
                <Route path='user'>
                    <Route path='' element={<Users />} />
                    <Route path='create' element={<AddOrEditUser />} />
                    <Route path='edit' element={<AddOrEditUser />} />
                </Route>

            </Route>
        </Routes>
    )
}
