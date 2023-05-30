import React from "react";

function Search() {
  return (
    <div style={{ position: "absolute", top: "10px", left: "105px"}}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input type="text" placeholder="產品/商店 搜尋" style={{ width: "175px", height: "40px", padding: "8px", border: "1px solid #ccc", borderRadius: "4px 0 0 4px", fontSize: "16px" }}/>
        <img src='../img/search.png' alt="Search" style={{ width: "20px", height: "20px", marginLeft: "-30px" }} />
      </div>
    </div>
  );
}

export default Search;
