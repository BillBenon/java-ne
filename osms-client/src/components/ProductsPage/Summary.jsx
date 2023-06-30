import React from "react";
import { FaUsers } from "react-icons/fa";

export default function Summary({ data }) {
  const styles = {
    container: "flex flex-row items-center gap-5 md:gap-20 my-8",
    card: "w-1/6 min-w-[300px] flex flex-col md:flex-row items-center justify-start gap-6 p-5 bg-[color:var(--componentSecondaryBg)] rounded-[30px]",
    iconContainer:
      "text-[6em] p-5 bg-[color:var(--componentBg)] rounded-[30px] text-[color:var(--frontColor",
    summaryContainer: "",
    h2: "text-4xl font-bold text-[color:var(--primaryColor)]",
    p: "text-lg text-center text-[color:var(--secondaryFrontColor)]",
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconContainer}>
          <FaUsers />
        </div>
        <div className={styles.summaryContainer}>
          <h2 className={styles.h2}>{data.count}</h2>
          <p className={styles.p}> Employees</p>
        </div>
      </div>
    </div>
  );
}
