import { useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const PageHeader = ({ cart, openCart }) => {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const styles = {
    container: "flex justify-between items-center py-10",
    header: "text-3xl font-bold flex gap-4 items-center",
    btn: "px-4 py-2 text-white rounded-md text-xl",
    btnUser:
      "text-white h-12 w-12 rounded-full flex items-center justify-center text-md bg-[color:var(--primaryColor)]",
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Binary Supermarket</h1>
      <div className="flex items-center justify-center gap-7">
        <button className="text-xl relative" onClick={() => openCart()}>
          <BsFillCartFill />
          <div className="absolute h-6 w-6 flex items-center justify-center -top-4 font-bold -right-4 rounded-full text-xs bg-red-600">
            {cart.length}
          </div>
        </button>
        <button className={styles.btnUser} onClick={onLogout} title="Logout">
          <FaUser />
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
