import { Row } from "react-bootstrap"
import SingleProduct from "../components/SingleProduct"
import { useSelector } from "react-redux"

const Product = () => {
    const product = useSelector(p => p);
    console.log(product);

    return (
        <div>
            <h1 className="text-center my-5">Product List</h1>
            <Row className="g-4">
                {product.map(item => (
                    <SingleProduct key={item.id} items={item} />

                ))}

            </Row>
        </div>
    )
}

export default Product