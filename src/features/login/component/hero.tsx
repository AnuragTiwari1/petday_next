import Link from "next/link";

export default function Hero() {
  return (
    <section className="breadcrumb_section">
      <div className="container">
        <div className="row">
          <div className="col col-lg-4 col-md-7 col-sm-9">
            <ul className="breadcrumb_nav">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Login</li>
            </ul>
            <h1 className="page_title">Login</h1>
            <p className="page_description mb-0">
              Tristique nulla aliquet enim tortor at auctor urna nunc. Massa
              enim nec dui nunc mattis enim ut tellus
            </p>
          </div>
        </div>
      </div>
      <div className="breadcrumb_img">
        <img
          src="/images/breadcrumb/breadcrumb_img_10.png"
          alt="Pet Care Service"
        />
      </div>
    </section>
  );
}
