import Head from "next/head";
import { Col, Container, Row, Navbar, Card } from "react-bootstrap";

const MobileHeader = () => {
  return (
    <>
      <div class="container-fluid position-sticky z-index-sticky top-0">
        <div class="row">
          <div class="col-12">
            <nav className="navbar navbar-expand-lg bg-black top-0 z-index-fixed shadow position-absolute py-2 start-0 end-0">
              <div className="container-fluid px-0">
                <a
                  className="navbar-brand font-weight-bolder ms-sm-3"
                  href="/"
                  rel="tooltip"
                  title="Designed and Coded by Creative Tim"
                  data-placement="bottom"
                  target="_blank"
                >
                  SALAR
                </a>

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
                  className="collapse navbar-collapse w-100  pb-2 py-lg-0"
                  id="navigation"
                >
                  <ul className="navbar-nav navbar-nav-hover mx-auto">
                    <li className="nav-item dropdown dropdown-hover mx-2">
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
                    <li className="nav-item dropdown dropdown-hover mx-2">
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
                    <li className="nav-item dropdown dropdown-hover mx-2">
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
                    <li className="nav-item dropdown dropdown-hover mx-2">
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
                    <li className="nav-item dropdown dropdown-hover mx-2">
                      <a
                        role="button"
                        className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center"
                        id="dropdownMenuDocs"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Cart
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileHeader;
