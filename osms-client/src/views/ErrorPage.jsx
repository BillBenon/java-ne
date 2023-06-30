import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  const styles = {
    container: "flex flex-col items-center justify-center h-screen gap-10",
    head: "text-4xl font-bold text-[color:var(--primaryColor)]",
    body: "text-lg text-center",
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <p>Oops!</p>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
      <p className={`${styles.head}`}>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
