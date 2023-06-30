export const PrimaryButton = ({ children, onClick, className }) => {
  const styles = {
    button:
      "w-full h-[70px] px-4 rounded-md text-lg rounded-xl font-semibold border-2 border-[rgba(255,255,255,0.1)] outline-none focus:outline-none focus:ring-2 focus:ring-[color:var(--primaryColor)] bg-[color:var(--primaryColor)] text-[color:var(--frontColor)]",
  };
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
