import React from "react";
import { Link } from 'react-router-dom';

// Création de la barre de menu.
function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">SOGI - Employee App</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarColor02" 
                    aria-controls="navbarColor02" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Accueil                                  {/*L'utilisation du composant LINK du React-router-dom*/}     
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/enregistrer">Inscription</Link>         {/*L'utilisation du composant LINK du React-router-dom*/}     
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aide">Aide</Link>         {/*L'utilisation du composant LINK du React-router-dom*/}     
                        </li>                
                    </ul>                
                </div>
            </div>
        </nav>
    )
}

export default Navbar;