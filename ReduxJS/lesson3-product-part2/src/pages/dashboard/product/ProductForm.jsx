import { useState } from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const ProductForm = ({ formData, editdata }) => {
    const [title, setTitle] = useState(editdata ? editdata.title : "");
    const [price, setPrice] = useState(editdata ? editdata.price : "");
    const [category, setCategory] = useState(editdata ? editdata.category : "");
    const navigate = useNavigate();
    const createProduct = e => {
        e.preventDefault();
        formData({
            title, price, category
        })


        Swal.fire({
            icon: "success",
            title: editdata ? "Product edit successfull" : "Product add successfull",
            confirmButton: true
        }).then(result => {
            if (result) {
                navigate('/dashboard')
            }
        })

    }
    return (

        <div className='col-6'>
            <form onSubmit={createProduct}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input value={price} onChange={e => setPrice(e.target.value)} type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                    <input value={category} onChange={e => setCategory(e.target.value)} type="text" className="form-control" />
                </div>
                <button type="submit" className="btn btn-warning">{editdata ? "Edit" : "Add"}</button>
            </form>

        </div>
    )
}

export default ProductForm