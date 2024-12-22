import Image from "next/image";
import styles from "./header-noauth.module.css";
import Link from "next/link";

export default function HeaderNoAuth() {
  return (
    <header className={`header_section header_boxed ${styles.header_boxed}`}>
      <div className="container">
        <div
          className={`box_wrap d-flex align-items-center justify-content-between ${styles.box_wrap}`}
        >
          <div className="site_logo">
            <a href="index">
              <Image
                className="logo_before"
                src="/images/logo/petdaylogo.jpg"
                alt="Petday Logo"
                width={150}
                height={100}
              />
            </a>
          </div>
          <nav className="main_menu navbar navbar-expand-lg">
            <div
              className="main_menu_inner navbar-collapse collapse show"
              id="main_menu_dropdown"
            >
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    className={`form-control ${styles.searchInput}`}
                    placeholder="Search"
                  />
                  <div
                    className={`input-group-btn ${styles.searchButtonWrapper}`}
                  >
                    <button
                      className={`btn btn-warning ${styles.searchButton}`}
                      type="submit"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </nav>
          <ul className="header_btns_group unorder_list_right">
            <li>
              <button
                className="mobile_menu_btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main_menu_dropdown"
                aria-controls="main_menu_dropdown"
                aria-expanded="true"
                aria-label="Toggle navigation"
              >
                <i className="far fa-bars"></i>
              </button>
            </li>
            <li className="dropdown">
              <Link href="signup" className="cart_btn" type="button">
                <i className="fas fa-paw"></i>
                <small className="cart_counter">Signup</small>
              </Link>
            </li>
            <li className="dropdown">
              <a href="login" className="cart_btn" type="button">
                <i className="fas fa-paw"></i>
                <small className="cart_counter">Login</small>
              </a>
            </li>
            <li className="dropdown">
              <a href="logout" className="cart_btn" type="button">
                <i className="fas fa-paw"></i>
                <small className="cart_counter">Partners</small>
              </a>
            </li>
            <li className="dropdown">
              <a href="logout" className="cart_btn" type="button">
                <i className="fas fa-paw"></i>
                <small className="cart_counter">Contact Us</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
