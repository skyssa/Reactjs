import React from "react";
import './style.scss';
const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
            Home page
            <br/>
            React js practice
        </h1>
      </div>
      <div className="home__contact-me">
        <button>Hire me</button>
      </div>
    </section>
  );
};
export default Home;
