import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Header from './layout/Header'
import { Container } from 'react-bootstrap'
import Home from './pages/Home'
import Dashboard from './pages/dashboard/Dashboard'
import ProductAdd from './pages/dashboard/product/ProductAdd'
import ProductEdit from './pages/dashboard/product/ProductEdit'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/product' element={<Product />}></Route>
                    <Route path='/dashboard' element={<Dashboard />}></Route>
                    <Route path='/dashboard/product/add' element={<ProductAdd />}></Route>
                    <Route path='/dashboard/product/edit/:id' element={<ProductEdit />}></Route>

                </Routes>
            </Container>
        </BrowserRouter>
    )
}

export default Router