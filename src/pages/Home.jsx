import React from 'react'
import MainLayout from '../layouts/MainLayout';
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";
import "../styles/hero-section.css";
import delivey from "../assets/delivery-man.png";


const Home = () => {
  return (
    <MainLayout>
       <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Easy order & fast delivery</h5>
                <h1 className="mb-4 hero__title">
                  <span>Enjoy</span> your favorite Order
                </h1>

                <button className="order__btn d-flex align-items-center justify-content-between ">
                  <Link to="/product">
                    Menu <i className="ri-arrow-right-s-line"></i>
                  </Link>
                </button>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={delivey} alt="delivery-guy" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </MainLayout>
  )
}

export default Home