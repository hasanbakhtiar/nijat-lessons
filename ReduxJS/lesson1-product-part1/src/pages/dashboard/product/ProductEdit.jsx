import React from 'react'
import ProductForm from './ProductForm'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction } from '../../../tools/actions/productAction';

const ProductEdit = () => {
    const { id } = useParams();
    const product = useSelector(p => p);
    const findData = product.find(p => p.id == id);
    const dispatch = useDispatch();
    return (
        <div className='d-flex align-items-center justify-content-center flex-column'>
            <h1 className='my-5'>Edit Product</h1>
            <ProductForm editdata={findData} formData={(fd) => {
                dispatch(editProductAction({ id: fd.id, update: fd }));
            }} />
        </div>
    )
}

export default ProductEdit