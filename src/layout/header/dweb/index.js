import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Navbar,
  Card,
  Offcanvas,
  Button,
  Modal,
} from "react-bootstrap";
import styles from "./header.module.scss";

const Header = () => {
  const [show, setShow] = useState(false);
  const closeSidebar = () => setShow(false);
  const showSidebar = () => setShow(true);
  const [showMOdal, setModalShow] = useState(false);

  return (
    <>
      <Container>
        <Offcanvas style={{width:"300px"}} show={show} onHide={closeSidebar}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>SALAR</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>

      <div class="container-fluid position-sticky z-index-sticky top-0">
        <div class="row">
          <div class="col-12">
            <nav className="navbar navbar-expand-lg bg-black top-0 z-index-fixed shadow position-absolute py-2 start-0 end-0">
              {/* <div className="container-fluid px-0"> */}
              <a
                className="navbar-brand font-weight-bolder ms-sm-3"
                href="/"
                rel="tooltip"
                title="Designed and Coded by Creative Tim"
                data-placement="bottom"
              >
                SALAR
              </a>
              <a
                className="navbar-brand"
                href="#"
                rel="tooltip"
                onClick={() => setModalShow(true)}
                style={{ fontSize: "15px" }}
              >
                Delivery to Dubai{" "}
              </a>

              <div className="col-lg-2">
                <input
                  type="text"
                  placeholder="What are you lookinf for?"
                  className="header-select"
                />
              </div>
              <div className="col-lg-2">
                <i className="fa fa-search header-search-icon"></i>
              </div>
              <button
                className="navbar-toggler shadow-none ms-md-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon mt-2">
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </span>
              </button>
              <div
                className="collapse navbar-collapse w-100 pt-3 py-lg-0"
                id="navigation"
              >
                <ul className="navbar-nav  mx-8">
                  <li className="nav-item dropdown  mx-4">
                    <a
                      role="button"
                      className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                      id="dropdownMenuPages"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Language
                    </a>
                  </li>
                  <li className="nav-item dropdown  mx-4">
                    <a
                      role="button"
                      className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                      id="dropdownMenuPages"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Currency
                    </a>
                  </li>
                  <li className="nav-item dropdown  mx-4">
                    <a
                      role="button"
                      className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                      id="dropdownMenuAccount"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sign In
                    </a>
                  </li>
                  <li className="nav-item dropdown  mx-4">
                    <a
                      role="button"
                      className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                      id="dropdownMenuBlocks"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sign Up
                    </a>
                  </li>
                  <li className="nav-item dropdown  mx-4">
                    <a
                      role="button"
                      className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                      id="dropdownMenuDocs"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="fas fa-shopping-cart"></i>{" "}
                    </a>
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </nav>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <div className="container-fluid">
          <div className="row" style={{ height: "40px" }}>
            <div className="col-lg-1 mt-2 ">
              <i onClick={showSidebar} class="fas fa-bars">
                {" "}
               
              </i>
             &nbsp; <a href={`/category`} style={{textDecoration:"none",color:"black"}}>
              All Category
              </a>
            </div>
            <div className="col-lg-1 mt-2">Game Products</div>
            <div className="col-lg-1 mt-2">Grocery</div>
            <div className="col-lg-1 mt-2">Vegetables&fruits</div>
            <div className="col-lg-1 mt-2">Mobiles</div>
            <div className="col-lg-1 mt-2">Clothing</div>
            <div className="col-lg-1 mt-2">Sarees</div>
            <div className="col-lg-1 mt-2">Ayurveda</div>
            <div className="col-lg-1 mt-2">Electronics</div>
            <div className="col-lg-1 mt-2">Beauty&Personal </div>
            <div className="col-lg-1 mt-2">Furnitures</div>
            <div className="col-lg-1 mt-2">SALAR MOVIES</div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <Modal
        show={showMOdal}
        size=""
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Choose Your Location
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>
            Select a delivery location to see product availability and delivery
            options
          </h6>
          <div className="border">
            <div className="p-2">
              Suraj - Lucknow 226001 <br />
              default Address
            </div>
          </div>
          <div className="p-1">
            <a href="#">Add an address or pick-up point</a>
          </div>
          <div>
            or enter an Indian pincode
            <br />{" "}
            <div className="row  mt-2">
              <div className="col-8">
                <input
                  style={{ width: "395px" }}
                  type={"text"}
                  className="form-control"
                  name="pincode"
                />
              </div>
              <div className="col-4 text-left">
                <Button>Apply</Button>
              </div>
            </div>
          </div>
          <div>or</div>
          <div>
            <select class="form-select mt-2">
              <option>Sri Lanka</option>
            </select>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Header;
