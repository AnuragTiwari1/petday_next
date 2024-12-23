import styles from "./page.module.css";
import HeaderNoAuth from "@/components/header-noauth";
import InfoSection from "@/components/info-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="body_wrap">
      <div className={`backtotop ${styles.backToTop}`}>
        <a href="#" className="scroll">
          <i className="far fa-arrow-up"></i>
        </a>
      </div>
      <HeaderNoAuth />
      <main className={`${styles.main}`}>
        <h1>Customer Profile</h1>
        {/* <LoginForm doLogin={login} /> */}
        <InfoSection />
        <Footer />
      </main>
    </div>
  );
}
