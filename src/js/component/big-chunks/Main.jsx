import React from "react";
import cardDataObject from "../data/cardDataObject";
import Card from "../small-chunks/Card.jsx";
import Jumbotron from "../small-chunks/Jumbotron.jsx";

const Main = () => {
    return (
        <main>
            <Jumbotron />
            <section className="m-5 d-flex flex-wrap justify-content-between">
                <Card
                    imageURL={cardDataObject.card1.cardImage}
                    title={cardDataObject.card1.cardTitle}
                    description={cardDataObject.card1.cardDescription}
                    buttonURL={cardDataObject.card1.cardButton.buttonURL}
                    buttonLabel={cardDataObject.card1.cardButton.buttonLabel}
                />
                <Card
                    imageURL={cardDataObject.card2.cardImage}
                    title={cardDataObject.card2.cardTitle}
                    description={cardDataObject.card2.cardDescription}
                    buttonURL={cardDataObject.card2.cardButton.buttonURL}
                    buttonLabel={cardDataObject.card2.cardButton.buttonLabel}
                />
                <Card
                    imageURL={cardDataObject.card3.cardImage}
                    title={cardDataObject.card3.cardTitle}
                    description={cardDataObject.card3.cardDescription}
                    buttonURL={cardDataObject.card3.cardButton.buttonURL}
                    buttonLabel={cardDataObject.card3.cardButton.buttonLabel}
                />
                <Card
                    imageURL={cardDataObject.card4.cardImage}
                    title={cardDataObject.card4.cardTitle}
                    description={cardDataObject.card4.cardDescription}
                    buttonURL={cardDataObject.card4.cardButton.buttonURL}
                    buttonLabel={cardDataObject.card4.cardButton.buttonLabel}
                />
            </section>
        </main>
    );
};

export default Main;
