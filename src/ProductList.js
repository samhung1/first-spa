import React, { useState } from "react";

function ProductList() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div style={{ position: "absolute", top: "80px", left: "20px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px", background: "#f2f2f2", padding: "8px" }}>
        收藏表 "阿姨要"
      </h1>

      <div style={{ marginBottom: "16px" }}>
        <div
          style={{
            marginBottom: "8px",
            position: "relative",
            width: "320px",
            height: "161px",
            background: "#FFFFFF",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src="../img/naturesown-fish-oil.png" alt="Item Photo" style={{ width: "120px", height: "120px" }} />
          <div style={{ marginLeft: "16px" }}>
            <h1 style={{ color: "#525764", marginBottom: "4px", fontFamily: "Muli", fontSize: "11px", lineHeight: "14px", letterSpacing: "normal", textAlign: "left" }}>
              Nature’s Way Odourless Fish Oil 2000mg 200
            </h1>
            <h1 style={{ color: "#37383D", fontFamily: "Muli", fontSize: "13px", lineHeight: "19px", letterSpacing: "normal", textAlign: "left" }}>
              AU$11.00 - $13.75
            </h1>
            <div>
              <button onClick={handleDecrement}>-</button>
              <span style={{ margin: "0 8px" }}>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
          </div>
          <div style={{ position: "absolute", left: "20px", top: "250px", width: "10px", height: "10px", borderRadius: "50%" }}></div>
          <button style={{ position: "absolute", marginLeft: "20px", marginTop: "247px", width: "100px", height: "14px", fontFamily: "Muli", fontSize: "11px", lineHeight: "14px", letterSpacing: "normal", textAlign: "left", color: "#5EAFD3", background: "none", border: "none", cursor: "pointer" }}>
            x
          </button>
          <button style={{ position: "absolute", marginLeft: "35px", marginTop: "247px", width: "100px", height: "14px", fontFamily: "Muli", fontSize: "11px", lineHeight: "14px", letterSpacing: "normal", textAlign: "left", color: "#5EAFD3", background: "none", border: "none", cursor: "pointer" }}>
            取消收藏
          </button>
        </div>
      </div>

    </div>

    
  );
}

export default ProductList;
