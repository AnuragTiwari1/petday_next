import Hero from "@/features/home/component/hero";
import styles from "./page.module.css";
import HeaderNoAuth from "@/components/header-noauth";

export default function Home() {
  return (
    <div className="body_wrap">
      <div className={`backtotop ${styles.backToTop}`}>
        <a href="#" className="scroll">
          <i className="far fa-arrow-up"></i>
        </a>
      </div>
      <HeaderNoAuth />
      <main>
        <Hero />
      </main>
    </div>
  );
}
