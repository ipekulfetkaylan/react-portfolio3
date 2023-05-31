import Product from "../product/Product";
import "./productList.css";
import { product } from "../../data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Lorem ipsum dolor sit amet.</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste rerum
          est quidem molestiae animi dolorem, illo odit facere, voluptates, nisi
          similique. Odio nobis sapiente odit.
        </p>
      </div>
      <div className="pl-list">
        {
            product.map((item)=>{
                return <Product key={item.id} img={item.img} link={item.link}/>
            })
        }
      </div>
    </div>
  );
}

export default ProductList;
