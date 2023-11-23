import React from "react";
import "./Headerestilos.css";
import logoicono from "./shared-imagenes/logo-icono.png"
import searchIcono from "./shared-imagenes/search-icono.png"
import { Link, useNavigate } from 'react-router-dom';

 const Box = () => {
    return (
        <header className="header">
        <div className="logo-section">
            <img className="logo-image" alt="Vector" src={logoicono} />
            <div className="logo-text">Animes Online.</div>
        </div>
        <nav className="navigation">
            <div className="nav-item">Inicio</div>
            <div className="nav-item">Lista animes</div>
            <div className="nav-item">Categorias</div>
        </nav>
        <div className="search-section">
            <input type="text" className="search-input" placeholder="Buscar" />
            <img className="search-icon" alt="Search Icon" src={searchIcono} />
        </div>
        <div className="auth-section">
            
        <Link to="/login">
            <button className="login-button">Iniciar sesión</button>
            </Link>

            <Link to="/registro">
            <button className="register-button">Registrarse</button>
            </Link>
        </div>
    </header>
    );
};


export default Box;
