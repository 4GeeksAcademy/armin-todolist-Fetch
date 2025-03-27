import React from "react";

export const Card = ({ title, description, cta, imgSource }) => {
    return (

        <div className="card" style={{ minWidth: "18rem" }}>
            <img src={imgSource} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">{cta} </a>
            </div>
        </div>
    )
}

