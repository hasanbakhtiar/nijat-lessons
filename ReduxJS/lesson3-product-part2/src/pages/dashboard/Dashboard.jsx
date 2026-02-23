import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteProductAction } from '../../tools/actions/productAction'

const Dashboard = () => {
    const product = useSelector(p => p);
    const dispatch = useDispatch();
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center flex-column'>
                <h1 className='my-5'>Dashboard</h1>
                <div className="col-9">
                    <Link className='btn btn-dark' to={"/dashboard/product/add"}>Add</Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...product].reverse().map((item, c) => (
                                <tr key={c}>
                                    <th scope="row">{c + 1}</th>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td><Link className='btn btn-warning' to={`/dashboard/product/edit/${item.id}`}>Edit</Link></td>
                                    <td><Button variant='danger' onClick={() => { dispatch(deleteProductAction(item.id)) }}>X</Button></td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard