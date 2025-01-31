import React from "react";
import "./header.css";
import { Link } from "react-router";

const Header = () => {
  // Les objets utilisateurs et panier
  const user = {
    name: "John",
  };

  const cart = {
    totalCount: 10,
  };

  const logout = () => {};

  return (
    <header>
      <div className="container">
        <Link to="/" className="lien1">
          <span className="logo">RESTIVO</span>
        </Link>
        <nav>
          <ul>
            {user ? (
              <li className="menu-container">
                <Link to="/Profile" className="L1">{user.name}</Link>
                <div className="menu">
                  <Link to="/Profile" className="L2">Profil</Link>
                  <Link to="/Order" className="L3">Commandes</Link>
                  <a onClick={logout}>Déconnexion</a>
                </div>
              </li>
            ) : (
              <Link to="/Login" className="L4">Connexion</Link>
            )}

            <li>
              <Link to="/Cart" className="L5">
                Cart
                {cart.totalCount > 0 && <span>{cart.totalCount}</span>}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
