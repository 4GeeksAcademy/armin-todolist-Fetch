import React from "react";

export const Card = ({ title, description, cta }) => {
    return (
        <div>
            <div className="card" style={{ minWidth: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">{cta} </a>
                </div>
            </div>
        </div>
    )
}

