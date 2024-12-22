import Hero from "@/features/signup/component/hero";
import styles from "./page.module.css";
import HeaderNoAuth from "@/components/header-noauth";
import SignupForm from "@/features/signup/component/signup-form";

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
        <SignupForm />
      </main>
    </div>
  );
}
