import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav>
        <ul>
          <button onClick={() => navigate("/login")}>Login</button>
          <button>register</button> /*próximamente*/
        </ul>
      </nav>
    </div>
  );
};

export default HeaderC;
