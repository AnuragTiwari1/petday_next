export default function Footer() {
  return (
    <footer className="footer_section">
      <div className="footer_widget_area section_space_lg">
        <div className="container">
          <div className="row justify-content-lg-between">
            <div className="col col-lg-3 col-md-6 col-sm-6">
              <div className="footer_widget footer_about">
                <div className="site_logo">
                  <a href="index">
                    <img
                      className="logo_before"
                      src="/images/logo/petdaylogo.jpg"
                      alt="Petday Logo"
                    />
                  </a>
                </div>
                <p>
                  Tristique nulla aliquet enim tortor at auctor urna nunc. Massa
                  enim nec dui nunc mattis enim ut tellus. Sed ut perspiciatis
                  unde ...
                </p>
                <div className="footer_hotline iconbox_item iconbox_lefticon">
                  <div className="item_icon">
                    <i className="fas fa-phone" />
                  </div>
                  <div className="item_content">
                    <h3 className="item_title">
                      <a href="tel:(913)756-3126">(913) 756-3126</a>
                    </h3>
                    <p className="mb-0">Got Questions? Call us 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-lg-3 col-md-6 col-sm-6">
              <div className="footer_widget">
                <h3 className="footer_widget_title">Working Hours</h3>
                <div className="office_hour">
                  <ul className="unorder_list_block">
                    <li>
                      <span>Mon - Fri:</span> <span>7am – 6pm</span>
                    </li>
                    <li>
                      <span>Saturday:</span> <span>9am – 4pm</span>
                    </li>
                    <li>
                      <span>Sunday:</span>
                      <span>
                        <strong>Closed</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col-lg-2 col-md-6 col-sm-6">
              <div className="footer_widget">
                <h3 className="footer_widget_title">Useful Links</h3>
                <div className="page_list">
                  <ul className="unorder_list_block">
                    <li>
                      <a href="index">
                        <i className="fas fa-circle" />
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="about">
                        <i className="fas fa-circle" />
                        About
                      </a>
                    </li>
                    <li>
                      <a href="shop">
                        <i className="fas fa-circle" />
                        Shop
                      </a>
                    </li>
                  </ul>
                  <ul className="unorder_list_block">
                    <li>
                      <a href="faq">
                        <i className="fas fa-circle" />
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="shipping_info">
                        <i className="fas fa-circle" />
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="deals">
                        <i className="fas fa-circle" />
                        Terms &amp; Conditions
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <p className="copyrights_text text-center">
            <a target="_blank" href="">
              PetDay
            </a>
            All rights reserved Copyrights 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
