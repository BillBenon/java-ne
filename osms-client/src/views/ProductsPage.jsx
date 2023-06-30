import PageHeader from "../components/ProductsPage/PageHeader";
import ProductsList from "../components/ProductsPage/ProductsList";
import React, { useState, useEffect } from "react";
import { get } from "../utils/api";
import Cart from "../components/ProductsPage/Cart";

export default function ProductsPage() {
  const styles = {
    container: "h-full w-full items-start relative py-5 px-5 md:px-20",
    addBtn: "p-5 text-xl bg-[color:var(--primaryColor)] rounded-lg",
    theader: "flex justify-between items-center w-full",
  };

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const [cart, addToCart] = useState([]);

  const handleAddToCart = (item) => {
    addToCart([...cart, item]);
    // filter products
    const newProducts = products.filter(
      (product) => product.code !== item.code
    );
    setProducts(newProducts);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await get("/products/", {}, true);
        setProducts(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <PageHeader cart={cart} openCart={() => setIsOpen(true)} />
      <ProductsList products={products} addToCart={handleAddToCart} />
      <Cart cart={cart} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
