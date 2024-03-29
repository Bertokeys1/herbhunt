import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import goldenRec from "../assets/goldenRec.jpg";
import Docked from "../assets/Docked.jpeg";
import Far from "../assets/Argrosy-far.jpeg";
import Discovery from "../assets/Discovery-day.jpeg";
import { Container } from "react-bootstrap";

// style={{backgroundRepeat: "no-repeat", backgroundImage: `url(${goldenRec})`, backgroundSize: ""}}

export default function Main() {
  return (
    <section>
      {/* about me container */}
      <div id="About">
        <Container className="welcome  d-flex flex-column">
          <figure className="">
            <figcaption>WELCOME</figcaption>
            <img className="Gtriangle" alt="goldenRecImg" src={goldenRec} />
          </figure>
        </Container>

        {/* picture on about me picture and line break */}
        <div className="post-heading text-center justify-content-center">
          <h3 className="display-4 font-weight-bold">
            U.S. COAST GUARD LICENSED
          </h3>
          <hr className="w-50 mx-auto" />
        </div>

        <Container className="mainServicePics ">
          
          <Button variant="" className="mainPicButton" component={Link} to="/About" id="Home">
            <img src={Docked} height="400px" width="300px" alt="about me pic" />
            <figcaption className="mainServiceContent">
              <div>Information</div>
              <div>Trusted 100-ton Licensed Captain with a diverse portfolio.</div>
            </figcaption>
          </Button>

          <Button variant="" className="mainPicButton" component={Link} to="/Services" id="Home">
          <img src={Far} height="400px" width="300px" alt="about me pic" />
            <figcaption className="mainServiceContent">
              <div>SERVICES</div>
              <div>Captain for hire - Boat delivery - Relief captain.</div>
            </figcaption>
          </Button>
          <Button variant=""className="mainPicButton"  component={Link} to="/Contact" id="Home">
            <img
              src={Discovery}
              height="400px"
              width="300px"
              alt="about me pic"
            />
            <figcaption className="mainServiceContent">
              <div>CONTACT</div>
              <div>Message me directly for any questions or inqueries.</div>
            </figcaption>
          </Button>
        </Container>

        <div className=" text-center justify-content-center ">
          <div className="display-6 font-weight-bold">20 years experience </div>
          <hr className="w-50 mx-auto" />
          <div>
            Boating - Ownership - Boat Operations - Navigation - Systems -
            Maintainance
          </div>
          <div className="mainLink">
            <Button component={Link} to="/Services" id="Home">
              FIND OUT MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
