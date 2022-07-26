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
        <Container className=" capImg  d-flex flex-column">
          <figure className="welcome">
            <img className="Gtriangle" alt="goldenRecImg" src={goldenRec} />
            <figcaption>WELCOME TO CAPTAIN HERB</figcaption>
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
          <figure>
            <img src={Docked} height="400px" width="300px" alt="about me pic" />
            <figcaption>
              <div>INFORMATION</div>
              <div>continued</div>
            </figcaption>
          </figure>

          <figure>
            <img src={Far} height="400px" width="300px" alt="about me pic" />
            <figcaption>
              <div>SERVICES</div>
              <div>continued</div>
            </figcaption>
          </figure>
          <figure>
            <img
              src={Discovery}
              height="400px"
              width="300px"
              alt="about me pic"
            />
            <figcaption>
              <div>CONTACT</div>
              <div>continued</div>
            </figcaption>
          </figure>
        </Container>

        <div className=" text-center justify-content-center ">
          <div className="display-6 font-weight-bold">20 years experience </div>
          <hr className="w-50 mx-auto" />
          <div>
            Boating - Ownership - Boat Operations - Navigation - Systems -
            Maintainance
          </div>
          <div>
            <Button component={Link} to="/Services" id="Services">
              FIND OUT MORE
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
