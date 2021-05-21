import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";

const HomePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  let keyword = history.location.search;

  const { error, loading, products, page, pages } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [keyword, dispatch, history.location]);

  return (
    <React.Fragment>
      {!keyword && <ProductCarousel />}

      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>

          <Paginate pages={pages} page={page} keyword={keyword} />
        </div>
      )}
    </React.Fragment>
  );
};

export default HomePage;
