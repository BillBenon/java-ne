import Hero from "../components/Hero";
import Input from "../components/Input";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { PrimaryButton } from "../components/buttons";

import { useEffect } from "react";
import { post } from "../utils/api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { getItem, storeItem } from "../utils/storage";

export default function Login() {
  const navigate = useNavigate();
  const [formValues, setformValues] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (getItem("token")) {
      navigate("/dashboard/");
    }
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const resp = await post("/auth/login", formValues);
      storeItem("token", resp.data.data.accessToken);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleInput = (e) => {
    setformValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleLogin();
  };

  const form = [
    {
      type: "text",
      placeholder: "Username",
      id: "email",
      icon: <FaUser />,
      required: true,
    },
    {
      type: "password",
      placeholder: "Password",
      id: "password",
      icon: <FaLock />,
      required: true,
    },
  ];
  const styles = {
    container:
      "flex flex-col md:flex-row items-center justify-center h-screen gap-10 md:gap-0 flex-wrap w-full",
    hero: "w-full md:w-1/2 min-w-[30%]",
    form: "text-center w-full md:w-1/2 min-w-[30%] flex flex-col items-center justify-center gap-20 md:border-l border-[rgba(255,255,255,0.2)] py-20",
    formTitle: "text-3xl font-bold text-[color:var(--primaryColor)] mb-2",
    signupOrLogin: "opacity-70",
    formGroups:
      "flex flex-col items-center justify-center gap-7 w-full md:w-[45%]",
  };
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <Hero />
      </div>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <div>
          <p className={styles.formTitle}>Login</p>
          <Link to="/signup" className={styles.signupOrLogin}>
            New Customer? Register
          </Link>
        </div>
        <div className={styles.formGroups}>
          {form.map((item) => (
            <Input
              key={item.id}
              type={item.type}
              placeholder={item.placeholder}
              id={item.id}
              icon={item.icon}
              onInput={handleInput}
              required={item.required}
            />
          ))}
          <PrimaryButton>Login</PrimaryButton>
        </div>
      </form>
    </div>
  );
}
