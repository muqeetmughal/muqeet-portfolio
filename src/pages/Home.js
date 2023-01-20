import { Link } from "wouter";
import { Helmet } from "react-helmet";
import CountUp from "react-countup";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Typed from "../components/Typewriter";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import {
  Banner,
  //BannerBack,
  BannerOverlay,
  BannerPhoto,
  BannerTitle,
  CounterFrame,
  Row,
  H6,
} from "../styles/pages/HomeStyles";
import {
  Header,
  Avatar,
  AvatarCurtain,
  AvatarCurtainImg,
  LampLight,
  AvailableLamp,
  Name,
  NameA,
  SmText,
} from "../styles/components/SidebarStyles";
import AvatarImgSrc from "../assets/images/avatar.jpg";
import MeImgSrc from "../assets/images/me.webp";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>imsamimalik - it&apos;s not just a name</title>
      </Helmet>

      <Container>
        <div className="row p-30-0 p-lg-30-0 p-md-15-0">
          <div className="col-lg-12">
            <Header className="mobile">
              <Avatar>
                <AvatarCurtain>
                  <AvatarCurtainImg src={AvatarImgSrc} alt="avatar" />
                </AvatarCurtain>
                <LampLight>
                  <AvailableLamp />
                </LampLight>
              </Avatar>
              <Name className="mb-10">
                <NameA rel="noreferrer" href="https://github.com/imsamimalik">
                  Muqeet Mughal
                </NameA>
              </Name>
              <SmText>
                Full Stack Web Developer <br />
                Freelancer
              </SmText>
            </Header>
            <Banner className="banner">
              {
                //<BannerBack className="banner-back" />
              }
              <BannerOverlay className="banner-overlay">
                <BannerTitle className="banner-title">
                  <h1 className="mb-15">
                    <span>Hi Universe, I&apos;m alive!</span>
                  </h1>
                  <div className="lg-text code mb-25">
                    <span className="white">
                      &lt;<i>code</i>&gt;
                    </span>
                    <span className="white">
                      I build <Typed />
                    </span>
                    <span className="white">
                      &lt;/<i>code</i>&gt;
                    </span>
                  </div>
                  <div className="buttons-frame">
                    <Link
                      style={{
                        alignSelf: "center",
                        transition: ".2s ease-in-out",
                        display: "flex",
                      }}
                      href="/portfolio"
                    >
                      <span className="btn btn-md">Explore now</span>
                    </Link>
                  </div>
                </BannerTitle>
                <BannerPhoto
                  loading="lazy"
                  src={MeImgSrc}
                  className="banner-photo"
                  alt="Profile Pic"
                />
              </BannerOverlay>
            </Banner>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-6">
            <CounterFrame className="counter-frame">
              <div className="counter-box">
                <CountUp
                  redraw
                  duration={1}
                  delay={2}
                  end={5}
                  suffix="+"
                ></CountUp>
              </div>
              <H6>
                <span> Years Experience </span>
              </H6>
            </CounterFrame>
          </div>
          <div className="col-md-3 col-6">
            <CounterFrame className="counter-frame">
              <div className="counter-box">
                <CountUp
                  redraw
                  duration={1}
                  delay={2}
                  end={30}
                  suffix="+"
                ></CountUp>
              </div>
              <H6>
                <span> Completed Projects </span>
              </H6>
            </CounterFrame>
          </div>
          <div className="col-md-3 col-6">
            <CounterFrame className="counter-frame">
              <div className="counter-box">
                <CountUp
                  redraw
                  duration={1}
                  delay={2}
                  end={20}
                  suffix="+"
                ></CountUp>
              </div>
              <H6>
                <span> Happy Customers </span>
              </H6>
            </CounterFrame>
          </div>
          <div className="col-md-3 col-6">
            <CounterFrame className="counter-frame">
              <div className="counter-box">
                <CountUp redraw duration={1} delay={2} end={1}></CountUp>
              </div>
              <H6>
                <span> Level Seller </span>
              </H6>
            </CounterFrame>
          </div>
        </div>
      </Container>
      <Container>
        <SectionTitle text="My Services" />
        <Row className="gridRow">
          <Services />
        </Row>
      </Container>
      <Slider />
      <Footer />
    </>
  );
};

export default Home;
