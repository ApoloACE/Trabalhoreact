import React from "react";
import { Link } from "react-router-dom"; 
import perfilIcon from "../icons/perfil.png"; 
import carrinhoIcon from "../icons/carrinhos-de-compras.png"; 

import { useStore } from "../store"; 

function NavBar({ isAuthenticated }) {
  const totalItems = useStore((state) => state.totalItems());

  return (
    <header className="top-bar">
      <div className="left">
        <h1>E-commerce</h1>
      </div>

      <div className="center">
        <div className="filter-dropdown">
          <div className="dropdown-content">
          </div>
        </div>
      </div>

      <div className="right">
        {!isAuthenticated ? (
          <Link to="/login" className="login-button">Login</Link>
        ) : (
          <div className="profile-cart">
            <Link to="/configuracao">
              <img src={perfilIcon} alt="Ícone de Perfil" className="icon" />
            </Link>
            <Link to="/carrinho">
              <div className="cart-icon-wrapper">
                <img src={carrinhoIcon} alt="Carrinho" className="icon" />
                {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
              </div>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
