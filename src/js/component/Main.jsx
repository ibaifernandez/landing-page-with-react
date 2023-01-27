import React from "react";
import cardDataObject from "../component/cardDataObject";

const Main = () => {
    return (
        <>
            <main>
                <div className="jumbotron p-5 m-5 bg-light">
                    <h1 className="display-4">A Warm Welcome!</h1>
                    <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Inventore exercitationem maxime aspernatur, repudiandae
                        ullam praesentium deserunt architecto aut in quia
                        officia fuga ab quis cum dicta. Doloribus asperiores
                        maxime sit!{" "}
                    </p>

                    <p className="lead">
                        <a
                            className="btn btn-primary btn-lg"
                            href="#"
                            role="button"
                        >
                            Call to action!{" "}
                        </a>
                    </p>
                </div>

                <section className="m-5 d-flex flex-wrap justify-content-between">
                    <div className="card mt-md-3 my-card">
                        <img
                            className="card-img-top"
                            src={cardDataObject.card1.cardImage}
                            alt={cardDataObject.card1.cardTitle}
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {cardDataObject.card1.cardTitle}
                            </h5>
                            <p className="card-text">
                                {cardDataObject.card1.cardDescription}{" "}
                            </p>
                            <a
                                href={cardDataObject.card1.cardButton.buttonURL}
                                className="btn btn-primary"
                            >
                                {cardDataObject.card1.cardButton.buttonLabel}
                            </a>
                        </div>
                    </div>

                    <div className="card mt-md-3 my-card">
                        <img
                            className="card-img-top"
                            src={cardDataObject.card2.cardImage}
                            alt={cardDataObject.card2.cardTitle}
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {cardDataObject.card2.cardTitle}
                            </h5>
                            <p className="card-text">
                                {cardDataObject.card2.cardDescription}{" "}
                            </p>
                            <a
                                href={cardDataObject.card2.cardButton.buttonURL}
                                className="btn btn-primary"
                            >
                                {cardDataObject.card2.cardButton.buttonLabel}
                            </a>
                        </div>
                    </div>

                    <div className="card mt-md-3 my-card">
                        <img
                            className="card-img-top"
                            src={cardDataObject.card3.cardImage}
                            alt={cardDataObject.card3.cardTitle}
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {cardDataObject.card3.cardTitle}
                            </h5>
                            <p className="card-text">
                                {cardDataObject.card3.cardDescription}{" "}
                            </p>
                            <a
                                href={cardDataObject.card3.cardButton.buttonURL}
                                className="btn btn-primary"
                            >
                                {cardDataObject.card3.cardButton.buttonLabel}
                            </a>
                        </div>
                    </div>

                    <div className="card mt-md-3 my-card">
                        <img
                            className="card-img-top"
                            src={cardDataObject.card4.cardImage}
                            alt={cardDataObject.card4.cardTitle}
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {cardDataObject.card4.cardTitle}
                            </h5>
                            <p className="card-text">
                                {cardDataObject.card4.cardDescription}{" "}
                            </p>
                            <a
                                href={cardDataObject.card4.cardButton.buttonURL}
                                className="btn btn-primary"
                            >
                                {cardDataObject.card4.cardButton.buttonLabel}
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Main;
