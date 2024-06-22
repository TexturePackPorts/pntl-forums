import SignupButton from "./components/SignupButton";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.titleDiv}>
          <h1 className={styles.title}>PNTL Forums</h1>
      </div>
      
      <div className={styles.authDiv}>
          <SignupButton />
      </div>
    </div>
  );
}