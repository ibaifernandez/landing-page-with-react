import React from "react";
// import cardDataObject from "../data/cardDataObject";
import data from "../data/myData.json";
import Card from "../small-chunks/Card.jsx";
import Jumbotron from "../small-chunks/Jumbotron.jsx";

const Main = () => {
    return (
        <main>
            <Jumbotron />
            <section className="m-5 d-flex flex-wrap justify-content-between">
                <Card
                    imageURL={data.card1.cardImage}
                    title={data.card1.cardTitle}
                    description={data.card1.cardDescription}
                    buttonURL={data.card1.cardButton.buttonURL}
                    buttonLabel={data.card1.cardButton.buttonLabel}
                />
                <Card
                    imageURL={data.card2.cardImage}
                    title={data.card2.cardTitle}
                    description={data.card2.cardDescription}
                    buttonURL={data.card2.cardButton.buttonURL}
                    buttonLabel={data.card2.cardButton.buttonLabel}
                />
                <Card
                    imageURL={data.card3.cardImage}
                    title={data.card3.cardTitle}
                    description={data.card3.cardDescription}
                    buttonURL={data.card3.cardButton.buttonURL}
                    buttonLabel={data.card3.cardButton.buttonLabel}
                />
                <Card
                    imageURL={data.card4.cardImage}
                    title={data.card4.cardTitle}
                    description={data.card4.cardDescription}
                    buttonURL={data.card4.cardButton.buttonURL}
                    buttonLabel={data.card4.cardButton.buttonLabel}
                />
            </section>
        </main>
    );
};

export default Main;
