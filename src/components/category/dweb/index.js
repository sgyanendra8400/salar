import Footer from "../../../layout/footer/dweb";

const CardData = [
  {
    productTile: "Air Pod",
    discount: "70%",
    mrp: 20000,
    crossPrice: 25000,
  },
  {
    productTile: "Air Pod",
    discount: "70%",
    mrp: 20000,
    crossPrice: 25000,
  },
  {
    productTile: "Air Pod",
    discount: "70%",
    mrp: 20000,
    crossPrice: 25000,
  },
  {
    productTile: "Air Pod",
    discount: "70%",
    mrp: 20000,
    crossPrice: 25000,
  },
  {
    productTile: "Air Pod",
    discount: "70%",
    mrp: 20000,
    crossPrice: 25000,
  },
  {
    productTile: "Air Pod",
    discount: "70%",
    mrp: 20000,
    crossPrice: 25000,
  },
];
const CATEGORIES = [
  {
    title: "NEW ARRIVALS",
  },
  {
    title: "FLASH SALES",
  },
  {
    title: "Mobiles",
  },
  {
    title: "MOBILES",
  },
  {
    title: "GROCERY",
  },
  {
    title: "CLOTHING",
  },
  {
    title: "FREQUENTLY PURCHASED",
  },
  {
    title: "YOUR BROWSING",
  },
];
const CategoryContainer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-2 ">
            <p>
              Department<br/>
              {"< Electronics"}<br/>
              Mobiles & Accessories
              <div style={{fontSize:"13px"}}>
                Mobile Accessories
              </div>
              <div style={{fontSize:"13px"}}>
                Sim Cards & Basics
              </div>
              <div style={{fontSize:"13px"}}>
                Mobiles 
              </div>
            </p>
          </div>
          <div className="col-md-10">
            <div
              className="page-header min-vh-50 relative"
              style={{
                backgroundImage:
                  "url(http://localhost:3000/img/main_banner.jpg)",
              }}
            >
              <span className="mask"></span>
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 text-center mx-auto">
                    <h1 className="text-white pt-3 mt-n5"></h1>
                    <p className="lead text-white mt-3">
                      {" "}
                      <br />{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="position-absolute w-100 z-index-1 bottom-0"></div>
            </div>
            <section className="pt-3 pb-4" id="count-stats">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9 z-index-2 border-radius-xl mt-n10 mx-auto py-3 blur shadow-blur">
                    <div className="row">
                      <div className="col-md-3 position-relative">
                        <img
                          src="./img/grocery.jpg"
                          className="category-image"
                        />

                        <hr className="vertical dark" />
                      </div>
                      <div className="col-md-3 position-relative">
                        <img
                          src="./img/grocery.jpg"
                          className="category-image"
                        />

                        <hr className="vertical dark" />
                      </div>
                      <div className="col-md-3">
                        <img
                          src="./img/grocery.jpg"
                          className="category-image"
                        />
                      </div>
                      <div className="col-md-3">
                        <img
                          src="./img/grocery.jpg"
                          className="category-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {CATEGORIES?.map((category, index) => (
              <>
                <section className="py-4">
                  <div className="container-fluid">
                    <h4>{category?.title}</h4>
                    <div className="row justify-space-between py-2">
                      {CardData?.map((product, index) => (
                        <div className="col-sm-2">
                          <div className="card">
                            <img
                              className="card-img-top"
                              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/chat.jpg"
                            />
                            <div
                              className="position-relative overflow-hidden"
                              style={{ height: "50px;margin-top:-50px;" }}
                            ></div>
                            <div className="card-body">
                              <h6>{product?.productTile}</h6>
                              <p>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span> 1520
                                <p className="mt-1">
                                  <div>&#8377; {product?.mrp}</div>
                                  <div>
                                    M.R.P:{" "}
                                    <del>&#8377;{product?.crossPrice}</del>
                                  </div>
                                  <div className="mt-2">
                                    <button
                                      type="button"
                                      class="btn bg-gradient-dark w-100 me-2"
                                    >
                                      Add TO Cart
                                    </button>
                                    <button
                                      type="button"
                                      class="btn bg-gradient-dark w-100 me-2"
                                    >
                                      Buy Now
                                    </button>
                                  </div>
                                </p>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                {index === 3 ? (
                  <section class="mt-lg-10 pb-4 bg-gray-900 m-3 border-radius-xl">
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-4 my-auto">
                          <h2 class="text-gradient text-primary mb-0 mt-6">
                            Account Pages
                          </h2>
                          <h2 class="mb-4 text-white">For beautiful webapps</h2>
                          <p class="text-white opacity-8">
                            We created many examples for pages like Signup,
                            Signin, Forgot Password, 2FA Authentification and so
                            on. Just choose between a Basic Design, an
                            illustration or a cover and you are good to go!
                          </p>
                          <div class="buttons">
                            <a
                              href="./pages/sign-in/sign-in-cover.html"
                              target="_blank"
                              class="btn bg-gradient-primary mt-4"
                            >
                              View Pages
                            </a>
                            <a
                              href="./pages/sign-up/sign-up-basic.html"
                              target="_blank"
                              class="btn text-white shadow-none mt-4"
                            >
                              View Signup Pages
                            </a>
                          </div>
                        </div>
                        <div class="col-lg-8 ps-5 pe-0">
                          <div class="row mt-lg-n7">
                            <div class="col-lg-4 col-6 mt-5">
                              <div class="card move-on-hover">
                                <a href="./pages/sign-up/sign-up-basic.html">
                                  <img
                                    class="w-100 border-radius-xl"
                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/section-account/sign-up-cover.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div class="card move-on-hover mt-4">
                                <a href="./pages/reset/reset-cover.html">
                                  <img
                                    class="w-100 border-radius-xl"
                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/section-account/reset-password-1.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div class="card move-on-hover mt-4 p-1">
                                <a href="./pages/sign-up/sign-up-illustration.html">
                                  <img
                                    class="w-100 border-radius-xl"
                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/section-account/signup-1.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                            <div class="col-lg-4 col-6">
                              <div class="card move-on-hover">
                                <a href="./pages/2fa-security.html">
                                  <img
                                    class="w-100 border-radius-xl"
                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/section-account/2fa.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div class="card move-on-hover mt-4">
                                <a href="./pages/coming-soon.html">
                                  <img
                                    class="w-100 border-radius-xl"
                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/section-account/coming-soon.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div class="card move-on-hover mt-4">
                                <a href="./pages/reset/reset-basic.html">
                                  <img
                                    class="w-100 border-radius-xl"
                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/section-account/reset-password-3.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div class="card move-on-hover mt-4">
                                <a href="./pages/error-500.html">
                                  <img
                                    class="w-100 border-radius-xl"
                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/section-account/500-error.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                            <div class="col-lg-4 col-6 mt-5 d-lg-block d-none">
                              <div class="card move-on-hover">
                                <a href="./pages/error-404.html">
                                  <img
                                    class="w-100 border-radius-xl"
                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/section-account/404-error.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div class="card move-on-hover p-1 mt-4">
                                <a href="./pages/sign-in/sign-in-illustration.html">
                                  <img
                                    class="w-100 border-radius-xl"
                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/section-account/sign-in.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div class="card move-on-hover p-1 mt-4">
                                <a href="./pages/sign-up/sign-up-cover.html">
                                  <img
                                    class="w-100 border-radius-xl"
                                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/presentation/section-account/signup-21.jpg"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                ) : (
                  ""
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};
export default CategoryContainer;
