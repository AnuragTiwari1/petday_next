import Hero from "@/features/login/component/hero";
import styles from "./page.module.css";
import HeaderNoAuth from "@/components/header-noauth";
import LoginForm from "@/features/login/component/form";
import { login } from "@/features/login/actions";
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
        <Hero />
        <LoginForm doLogin={login} />
        <InfoSection />
        <Footer />
      </main>
    </div>
  );
}
