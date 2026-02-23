import React from 'react'
import ProductForm from './ProductForm'
import { useDispatch } from 'react-redux'
import { createProductAction } from '../../../tools/actions/productAction';

const ProductAdd = () => {
    const dispatch = useDispatch();
    return (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <h1 className='my-5'>Add Product</h1>
            <ProductForm formData={(fd) => { dispatch(createProductAction(fd)) }} />
        </div>
    )
}

export default ProductAdd