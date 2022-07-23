import Head from "next/head";
import { Col, Container, Row, Navbar, Card } from "react-bootstrap";

const Footer = () => {
  return (
    <>
    <footer class="footer py-9">
  <div class="container">
    <div class="row">
      <div class="col-lg-3 mb-5 mb-lg-0">
        <h6 class="text-uppercase mb-2">SALAR</h6>
        <p class="mb-4 pb-2">
            The next generation of Ecommerce.
        </p>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-3">
          <span class="text-lg fab fa-facebook"></span>
        </a>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-3">
          <span class="text-lg fab fa-twitter"></span>
        </a>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-3">
          <span class="text-lg fab fa-instagram"></span>
        </a>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-3">
          <span class="text-lg fab fa-pinterest"></span>
        </a>
        <a href="javascript:;" target="_blank" class="text-secondary me-xl-4 me-3">
          <span class="text-lg fab fa-github"></span>
        </a>
      </div>
      <div class="col-md-2 col-6 ms-lg-auto mb-md-0 mb-4">
        <h6 class="text-sm">Compant</h6>
        <ul class="flex-column ms-n3 nav">
          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              About Us
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Careers
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Press
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Blog
            </a>
          </li>
        </ul>
      </div>

      <div class="col-md-2 col-6 mb-md-0 mb-4">
        <h6 class="text-sm">Pages</h6>
        <ul class="flex-column ms-n3 nav">
          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Login
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Register
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Add list
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div class="col-md-2 col-6 mb-md-0 mb-4">
        <h6 class="text-sm">Legal</h6>
        <ul class="flex-column ms-n3 nav">
          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Terms
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              About Us
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Team
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Privacy
            </a>
          </li>
        </ul>
      </div>

      <div class="col-md-2 col-6 mb-md-0 mb-4">
        <h6 class="text-sm">Resources</h6>
        <ul class="flex-column ms-n3 nav">
          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Blog
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Service
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Product
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link text-secondary" href="https://www.creative-tim.com" target="_blank">
              Pricing
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr class="horizontal dark mt-lg-5 mt-4 mb-sm-4 mb-1"/>
    <div class="row">
      <div class="col-8 mx-lg-auto text-lg-center">
        <p class="text-sm text-secondary">
          Copyright © 2022 SALAR.
        </p>
      </div>
    </div>
  </div>
</footer>
      
    </>
  );
};
export default Footer;
