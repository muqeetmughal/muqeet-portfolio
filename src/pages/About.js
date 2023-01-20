import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import TimelineItem from "../components/ui/TimelineItem";
import { Timeline, Intro } from "../styles/pages/AboutStyles";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - imsamimalik</title>
      </Helmet>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          padding: "30px",
        }}
      >
        <div className="row">
          <SectionTitle text="About me" />
          <div className="col-lg-12">
            <Intro className="about">
              <p>
                Hey Folks, I am Sami malik ( aka
                <span className="highlight"> imsamimalik </span> ) and
                JavaScript is my native language. A simple guy with a productive
                mindset with the aim to help those around me. I have been in the
                web development industry and am surviving in this competitive
                era since 2013. Developing robust and pixel perfect solutions
                for my clients is what I call an achievement. I expertise in
                modern frameworkds like ReactJS, SvelteJS, and VueJS and MERN
                Stack. In addition to it, I have developed captivating websites
                with CMS like WordPress and Wix too. I work with a single thing
                in my mind, &quot;
                <span className="highlight">
                  The aim is to make a Customer, not a sale!
                </span>
                &quot; I am currently work as a freelancer on Upwork and doing
                bachelors in Computer Science from FAST NUCES, Lahore. You can
                contact me if you need any kind of help or you wanna take your
                project <span className="highlight">TO THE MOON</span>.
              </p>
              <ul className="socials">
                <li>
                  <a
                    rel="noreferrer"
                    target="__blank"
                    aria-label="upwork"
                    href="https://www.upwork.com/freelancers/~010b1c7699a7581cb9"
                  >
                    upwork
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="__blank"
                    aria-label="fiverr"
                    href="https://www.fiverr.com/akhtarnadeem"
                  >
                    fiverr
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="__blank"
                    aria-label="facebook"
                    href="https://www.facebook.com/imsamimalik"
                  >
                    facebook
                  </a>
                </li>

                <li>
                  <a
                    rel="noreferrer"
                    target="__blank"
                    aria-label="instagram"
                    href="https://www.instagram.com/imsamimalik"
                  >
                    instagram
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="__blank"
                    aria-label="github"
                    href="https://www.github.com/imsamimalik"
                  >
                    github
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    target="__blank"
                    aria-label="twitter"
                    href="https://www.twiter.com/imsamimalik"
                  >
                    twitter
                  </a>
                </li>
                <li>
                  <a
                    rel="noreferrer"
                    aria-label="codepen"
                    href="https://codepen.io/imsamimalik"
                  >
                    codepen
                  </a>
                </li>
              </ul>
            </Intro>
          </div>
        </div>
      </Container>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          padding: "30px",
        }}
      >
        <div className="row">
          <SectionTitle text="Career" />
        </div>
      </Container>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="row">
          <div className="col-lg-12">
            <Timeline className="timeline gallery">
              <TimelineItem
                company="imsamimalik"
                job="CEO"
                date="May 2021 -"
                position="Full stack web developer"
              />
              <TimelineItem
                company="Upwork"
                job="Freelancer"
                date="Jan 2021 - May 2021"
                position="Full stack web developer"
              />
              <TimelineItem
                company="Fiverr"
                job="Freelancer"
                date="May 2020 -Jan 2021"
                position="Full stack web developer"
              />
              <TimelineItem
                company="Internet"
                job="Student"
                date="2018 - 2020"
                position="JS libraries and Frameworks (React, VueJS, Svelte, MERN)"
              />
              <TimelineItem
                company="Internet"
                job="Student"
                date="2017 - 2018"
                position="WordPress and Other CMS"
              />
              <TimelineItem
                company="Internet"
                job="Student"
                date="2016 - 2017"
                position="Vanilla JS and JQuery"
              />
              <TimelineItem
                company="Internet"
                job="Student"
                date="2015 - 2016"
                position="Graphics Design (Photoshop, Lightroom, Illustrator)"
              />
              <TimelineItem
                company="Internet"
                job="Student"
                date="jan 2014 - jan 2015"
                position="Learned HTML and CSS"
              />
            </Timeline>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default About;
