/* eslint-disable react/prop-types */
export default function Input({
  label,
  defaultValue,
  onInput,
  className,
  type,
  placeholder,
  id,
  icon,
  required,
}) {
  const styles = {
    container: "flex flex-col items-center justify-center gap-5 w-full",
    formGroup: "relative w-full",
    icon: "absolute top-[25px] left-5 text-lg",
    input: `w-full h-[70px] ${
      icon && "pl-14"
    } px-4 rounded-md text-lg rounded-xl font-semibold border-2 border-[rgba(255,255,255,0.1)] outline-none focus:outline-none focus:ring-2 focus:ring-[color:var(--primaryColor)] bg-transparent`,
  };
  return (
    <div className={styles.formGroup}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        defaultValue={defaultValue}
        onInput={onInput}
        placeholder={placeholder}
        className={`${styles.input} ${className}`}
        required={required}
        id={id}
      />
      {icon && <div className={styles.icon}>{icon}</div>}
    </div>
  );
}
