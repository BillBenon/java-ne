import { MdProductionQuantityLimits } from "react-icons/md";

export default function Hero() {
  const styles = {
    container: "flex flex-col items-center justify-center gap-5 md:gap-20",
    logoContainer: "text-[6em] font-bold text-[color:var(--frontColor)]",
    logoText: "text-3xl font-bold text-[color:var(--primaryColor)] text-center",
    appDesc: "flex flex-col items-center justify-center gap-4",
    desc: "text-lg text-center text-[color:var(--secondaryFrontColor)]",
  };
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <MdProductionQuantityLimits />
      </div>
      <div className={styles.appDesc}>
        <p className={styles.logoText}>Binary Supermarket</p>
        <p className={styles.desc}>
          Welcome to Kalim's Binary Supermarket, <br /> the best place to buy
          and sell
        </p>
      </div>
    </div>
  );
}
