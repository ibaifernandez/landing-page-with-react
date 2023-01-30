import React from "react";

const Card = (props) => {
    console.log(props);
    return (
        <div className="card mt-md-3 my-card">
            <img
                className="card-img-top"
                src={props.imageURL}
                alt={props.title}
            />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.buttonURL} className="btn btn-primary">
                    {props.buttonLabel}
                </a>
            </div>
        </div>
    );
};

export default Card;
