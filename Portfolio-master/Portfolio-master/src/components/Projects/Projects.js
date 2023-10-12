import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import drums from "../../Assets/Projects/drums.png";
import dice from "../../Assets/Projects/dice.png";
import simon from "../../Assets/Projects/simon.png";
import Weather from "../../Assets/Projects/Weather.png";

import godzilla from "../../Assets/Projects/godzilla.png";
import imagesearch from "../../Assets/Projects/imagesearch.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather App"
              description="Introducing WeatherWise, the ultimate weather app  that keeps you ahead of the elements, powered by the OpenWeather API. With a sleek and user-friendly design, WeatherWise offers you an immersive weather experience, providing you with all the essential meteorological information you need to make informed decisions for your day.."
              ghLink="https://github.com/ashutoshpandey15/Weather-App"
              demoLink="https://weather-app-main-today.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagesearch}
              isBlog={false}
              title="Image Discover"
              description="This is an image search engine web application. Users can search for images using keywords, and the app fetches results from the Unsplash API. Discover a variety of images related to your search queries.ImageDiscover is your gateway to a vast world of visual exploration, allowing you to find and collect stunning images from a vast and diverse database, making it a perfect tool for designers, content creators, or anyone with an eye for aesthetics."
              ghLink="https://github.com/ashutoshpandey15/Image-Search-Engine"
              demoLink="https://image-search-engine-today.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={simon}
              isBlog={false}
              title="Simon: The Memory Challenge"
              description="Get ready to put your memory and reflexes to the test with the Simon Game app, a classic brain-teaser developed in JavaScript. The Simon Game is a timeless and addictive challenge that has been entertaining and challenging players for generations. Are you up for the challenge?"
              ghLink="https://github.com/ashutoshpandey15/Projects-/tree/main/Simon%2BGame%2BChallenge%2BCompleted"
              demoLink="https://simon-game-isready.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drums}
              isBlog={false}
              title="BeatMaster: Your Virtual Drumming Experience"
              description="Get ready to unleash your inner drummer with BeatMaster, a dynamic drum simulator app developed in JavaScript. Whether you're a seasoned percussionist or a complete beginner, BeatMaster offers an exciting and immersive way to create rhythmic beats, experiment with different drum kits, and express your musical creativity."
              ghLink="https://github.com/ashutoshpandey15/Projects-/tree/main/Drum%20Stimulator%20using%20JavaScript"
              demoLink="https://drum-stimulator.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={godzilla}
              isBlog={false}
              title="Ra Ta Ta "
              description="Welcome to Skyline Wheels, the ultimate car blog app developed in JavaScript, designed for car enthusiasts, petrolheads, and anyone with a passion for automobiles. Skyline Wheels is your one-stop destination for the latest news, reviews, and insights from the world of cars, where you can immerse yourself in a world of horsepower, innovation, and automotive culture."
              ghLink="https://github.com/ashutoshpandey15/Projects-/tree/main/skyline%20blog"
              demoLink="https://thegodzilla.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dice}
              isBlog={false}
              title="Roll the Dice"
              description="Get ready for a dose of pure luck and excitement with Roll the Dice a captivating game app developed in JavaScript. Whether you're a board game enthusiast or simply looking for a fun and casual way to pass the time, this app promises a thrilling experience of rolling virtual dice with just a tap."
              ghLink="https://github.com/ashutoshpandey15/Projects-/tree/main/Dice%20Game%20using%20JavaScript"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
