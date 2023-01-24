import React from "react";
import cardDataObject from "../component/cardDataObject";
import "../../styles/index.css";

export const Home = () => {
    return (
        <>
            {/* <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Landing page with React
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Link
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropdown
                                    </a>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link disabled"
                                        href="#"
                                        tabIndex="-1"
                                        aria-disabled="true"
                                    >
                                        Disabled
                                    </a>
                                </li>
                            </ul>

                            <form className="d-flex">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button
                                    className="btn btn-outline-success"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header> */}

            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            Landing page with React
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#my-navbar"
                            aria-controls="my-navbar"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="my-navbar"
                        >
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Services
                                    </a>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Service 1
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Service 2
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                See more services
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#"
                                        tabIndex="-1"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>

                            {/* <form className="d-flex">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button
                                    className="btn btn-outline-success"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form> */}
                        </div>
                    </div>
                </nav>
            </header>

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
                    {/* <hr className="my-4" />
                <p>
                    It uses utility classes for typography and spacing to space
                    content out within the larger container.
                </p> */}
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
                            src={cardDataObject.card1.card1Image}
                            alt={cardDataObject.card1.card1Title}
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {cardDataObject.card1.card1Title}
                            </h5>
                            <p className="card-text">
                                {cardDataObject.card1.card1Description}{" "}
                            </p>
                            <a
                                href={
                                    cardDataObject.card1.card1button.buttonURL
                                }
                                className="btn btn-primary"
                            >
                                {cardDataObject.card1.card1button.buttonLabel}
                            </a>
                        </div>
                    </div>

                    <div className="card mt-md-3 my-card">
                        <img
                            className="card-img-top"
                            src={cardDataObject.card1.card1Image}
                            alt={cardDataObject.card1.card1Title}
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {cardDataObject.card1.card1Title}
                            </h5>
                            <p className="card-text">
                                {cardDataObject.card1.card1Description}{" "}
                            </p>
                            <a
                                href={
                                    cardDataObject.card1.card1button.buttonURL
                                }
                                className="btn btn-primary"
                            >
                                {cardDataObject.card1.card1button.buttonLabel}
                            </a>
                        </div>
                    </div>

                    <div className="card mt-md-3 my-card">
                        <img
                            className="card-img-top"
                            src={cardDataObject.card1.card1Image}
                            alt={cardDataObject.card1.card1Title}
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {cardDataObject.card1.card1Title}
                            </h5>
                            <p className="card-text">
                                {cardDataObject.card1.card1Description}{" "}
                            </p>
                            <a
                                href={
                                    cardDataObject.card1.card1button.buttonURL
                                }
                                className="btn btn-primary"
                            >
                                {cardDataObject.card1.card1button.buttonLabel}
                            </a>
                        </div>
                    </div>

                    <div className="card mt-md-3 my-card">
                        <img
                            className="card-img-top"
                            src={cardDataObject.card1.card1Image}
                            alt={cardDataObject.card1.card1Title}
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {cardDataObject.card1.card1Title}
                            </h5>
                            <p className="card-text">
                                {cardDataObject.card1.card1Description}{" "}
                            </p>
                            <a
                                href={
                                    cardDataObject.card1.card1button.buttonURL
                                }
                                className="btn btn-primary"
                            >
                                {cardDataObject.card1.card1button.buttonLabel}
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="text-center text-white p-3 bg-dark">
                <div className="mb-3">All rights reserved © 2023</div>
                <span>
                    ~ Made with ❤️ in 🇪🇨 by{" "}
                    <a
                        className="text-white"
                        href="https://portfolio.ibaifernandez.com/"
                    >
                        Ibai Fernández
                    </a>{" "}
                    ~
                </span>
            </footer>
        </>
    );
};
