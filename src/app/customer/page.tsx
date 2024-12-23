import styles from "./page.module.css";
import HeaderNoAuth from "@/components/header-noauth";
import InfoSection from "@/components/info-section";
import Footer from "@/components/footer";
import { getSession } from "@/lib/auth";
import { fetchCustomerDetails } from "@/features/home/data";

export default async function Home() {
  const userDetails = await fetchCustomerDetails();

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
        <code>
          <pre>{JSON.stringify(userDetails, null, 2)}</pre>
        </code>
        <InfoSection />
        <Footer />
      </main>
    </div>
  );
}
