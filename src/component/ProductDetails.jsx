import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/ProductSlice";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { addItemToCart } from '../store/slices/CartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.data.find(item => item.id === parseInt(id)));
  const loading = useSelector(state => state.products.loading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };


  const Loading = () => {
    return(
      <>
        <div className="col-md-6" style={{ lineHeight: 2}}>
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75}  />
          <Skeleton height={25}  width={125} />
          <Skeleton height={50}  />
          <Skeleton height={150}  />
          <Skeleton height={50}  width={100} />
          <Skeleton height={50}  width={100} style={{ marginLeft:6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    if (!product) return <div>Product not found</div>;

    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            className="card-img-top"
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h5 className="display-5">{product.title}</h5>
          <p className="lead">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star" aria-hidden="true"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2" onClick={handleAddToCart}>Add to Cart</button>
          <Link to="/cart" className="btn btn-outline-dark ms-2 px-3">
            Go to Cart
          </Link>
        </div>
      </>
    );
  };

  return (
    <div className="container py-5">
      <div className="row py-5">
        {loading ? <Loading /> : <ShowProduct />}
      </div>
    </div>
  );
};

export default ProductDetails;
