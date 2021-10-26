import React from "react";

// Rendu du composant Card.
// L'exportation est déclarée dans la déclaration de fonction.
export default (props) => (
    <div className="card">
        <div className="card-header">
            { props.header }
        </div>
        <div className="card-body">
            { props.children }
        </div>
    </div>
)