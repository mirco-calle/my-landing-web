"use client";
import { ShoppingCart } from "lucide-react";

interface HotmartBuyButtonProps {
  productUrl: string;
  productName: string;
  price: number;
  className?: string;
}

export const HotmartBuyButton = ({
  productUrl,
  productName,
  price,
  className = "btn-primary",
}: HotmartBuyButtonProps) => {
  const handleCheckout = () => {
    // Tracking (opcional - integrar con Google Analytics)
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "begin_checkout", {
        items: [
          {
            item_name: productName,
            price: price,
          },
        ],
      });
    }

    // Redirigir a Hotmart
    if (productUrl && productUrl !== "") {
      window.open(productUrl, "_blank");
    }
  };

  const isDisabled = !productUrl || productUrl === "";

  return (
    <button
      onClick={handleCheckout}
      className={`${className} inline-flex items-center gap-2 justify-center ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={isDisabled}
    >
      <ShoppingCart size={20} />
      {isDisabled ? "Próximamente" : `Comprar Ahora - $${price}`}
    </button>
  );
};
