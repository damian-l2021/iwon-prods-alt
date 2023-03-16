import React, { useEffect, useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Menu from "./Menu";

export default function BurgerMenu({ isActive }: any) {
  const [isMenuVisible, setIsMenuVisible] = useState(isActive);

  const handleClick = () => {
    isMenuVisible ? setIsMenuVisible(false) : setIsMenuVisible(true);
  };

  return (
    <div className="">
      <button onClick={handleClick}>
        {isMenuVisible ? (
          <IoMdClose
            className="transition-all"
            style={{ color: "#f7f7f7", fontSize: "30px" }}
          />
        ) : (
          <IoMdMenu style={{ color: "#f7f7f7", fontSize: "30px" }} />
        )}
      </button>
    </div>
  );
}
