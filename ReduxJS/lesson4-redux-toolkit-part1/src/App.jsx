

import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from './tools/features/productSlice';
import { addCategory } from './tools/features/categorySlice';

const App = () => {
    const product = useSelector(p => p.product);
    const category = useSelector(p => p.category);
    const dispatch = useDispatch();

    return (
        <>
            <ul>
                <h1>Product</h1>
                {product.map(item => (
                    <li key={item.id}>{item.title} - {item.price}</li>
                ))}
                <button onClick={() => {
                    dispatch(addProduct({ title: "Asus", price: 4000 }))
                }}>add</button>
            </ul>
            <ul>
                <h1>category</h1>
                {category.map(item => (
                    <li key={item.id}>{item.title} - {item.price}</li>
                ))}
                <button onClick={() => {
                    dispatch(addCategory({ title: "category"}))
                }}>add</button>
            </ul>
        </>
    )
}

export default App