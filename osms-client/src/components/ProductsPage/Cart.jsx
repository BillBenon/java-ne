import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import Input from "../Input";
import { PrimaryButton } from "../buttons";
import { FaCross, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { post } from "../../utils/api";
import { toast } from "react-toastify";

const Cart = ({ isOpen, onClose, onSubmit, cart }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(
      cart.map((item) => {
        return {
          code: item.code,
          quantity: 1,
          name: item.name,
        };
      })
    );
  }, [cart]);

  const incrementItem = (code) => {
    const newItems = items.map((item) => {
      if (item.code === code) {
        item.quantity++;
      }
      return item;
    });
    setItems(newItems);
  };

  const decrementItem = (code) => {
    const newItems = items.map((item) => {
      if (item.code === code) {
        if (item.quantity > 0) {
          item.quantity--;
        }
      }
      return item;
    });
    setItems(newItems);
  };

  const purchase = () => {
    items.map((item) => {
      post(
        "/product-purchased/",
        {
          code: item.code,
          quantity: item.quantity,
        },
        {},
        true
      )
        .then(() => toast.success(item.name + " purchased successfully"))
        .catch((err) =>
          toast.error(`${err.response.data.message} (${item.name})`)
        );
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Cart"
      className="modal absolute top-0 left-0 w-full flex items-center justify-center h-full bg-[rgba(0,0,0,0.3)]"
      overlayClassName="overlay"
    >
      <div className="p-5 bg-[color:var(--componentBg)] rounded-lg relative w-full md:w-3/12">
        <button
          onClick={onClose}
          className="absolute -right-5 -top-5 text-xl h-10 w-10 bg-red-500 flex items-center justify-center rounded-full"
        >
          <FaTimes />
        </button>
        <h2 className="font-semibold text-lg">Cart</h2>
        <div className="flex flex-col item-center w-full mt-5">
          {items.map((item) => (
            <div
              key={item.code}
              className="flex flex-row justify-between items-center px-5 py-3 w-full font-bold bg-blue-500 rounded-lg shadow-md"
            >
              <h3>{item.name}</h3>
              <h3>{item.quantity}</h3>
              <div className="flex flex-row justify-end gap-3 items-center">
                <button
                  className="flex items-center justify-center h-8 w-8 text-sm bg-blue-700 rounded-full"
                  onClick={() => decrementItem(item.code)}
                >
                  <FaMinus />
                </button>
                <button
                  className="flex items-center justify-center h-8 w-8 text-sm bg-blue-700 rounded-full"
                  onClick={() => incrementItem(item.code)}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}
          <button
            className="py-5 w-full mt-5 bg-[color:var(--primaryColor)] rounded-md font-bold"
            onClick={() => purchase()}
          >
            Purchase
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
