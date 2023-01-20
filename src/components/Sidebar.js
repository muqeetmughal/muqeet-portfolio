import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Icon } from "react-icons-kit";
import { ellipsisV } from "react-icons-kit/fa/ellipsisV";
import { download } from "react-icons-kit/fa/download";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { github } from "react-icons-kit/fa/github";
import { instagram } from "react-icons-kit/fa/instagram";
import { twitter } from "react-icons-kit/fa/twitter";
import { stackOverflow } from "react-icons-kit/fa/stackOverflow";
import Confetti from "react-confetti";
import Preloader from "./Preloader";
import SVGProgressHR from "./SVGProgressHR";
import SVGProgressCircle from "./SVGProgressCircle";
import {
  Infobar,
  InfobarFrame,
  InfobarHeader,
  InfobarBtn,
  Header,
  Avatar,
  AvatarCurtain,
  AvatarCurtainImg,
  LampLight,
  AvailableLamp,
  Name,
  NameA,
  SmText,
  Scrollbar2,
  TableUl,
  TableLi,
  LsDivider,
  LangSkills,
  LangSkillsItem,
  CircleProgress,
  ProgressbarText,
  HardSkillsItem,
  SkillHeading,
  LineProgress,
  SkillsProgressText,
  KnowledgeList,
  LinksFrame,
  Socials,
} from "../styles/components/SidebarStyles";
import AvatarImgSrc from "../assets/images/avatar.jpg";
import swal from "sweetalert";

const Sidebar = ({ loaded }) => {
  const [active, setActive] = useState(false);
  const [age, setAge] = useState(18);
  const [_HBD, set_HBD] = useState(false);
  const [isBday, setIsBday] = useState(false);
  const [isRunning, setIsRunning] = useState(true);

  const getAge = (dob) => {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const age = new Date(
      new Date(
        new Date(new Date(difference).setHours(0)).setMinutes(0)
      ).setSeconds(0)
    );
    return Math.abs(age.getFullYear() - 1970);
  };
  loaded &&
    setTimeout(() => {
      document.querySelectorAll("path.meter").forEach((path) => {
        let length = path.getTotalLength();
        let value = parseInt(path.parentNode.getAttribute("data-value"));
        let to = length * (value / 100);
        path.getBoundingClientRect();
        path.style.strokeDashoffset = Math.max(0, to);
      });
    }, 1200);
  useEffect(() => {
    setInterval(() => setAge(getAge(new Date(2002, 5, 3, 0, 0, 0))), 1000);
  }, []);
  useEffect(() => {
    let HBD = false;
    const cookie = "HBD=TRUE";
    let cookieArr = document.cookie.split(";");

    for (let i = 0; i < cookieArr.length; i++) {
      if (cookie === cookieArr[i].trim()) {
        HBD = true;
        set_HBD(true);
      }
    }
    const isAdmin =
      localStorage.getItem("imsamimalikSecurityId") ===
      process.env.REACT_APP_UID;
    const year = new Date(Date.now()).getFullYear() + 1;
    const month = new Date(Date.now()).getMonth();
    const date = new Date(Date.now()).getDate();
    let Bday = month === 5 && date === 3 && !HBD && age > 18;
    if (Bday) {
      setIsBday(true);
      swal({
        title: "Happy Birthday!",
        text: `${isAdmin ? "You" : "Sami"} turned ${age}.`,
        button: `${isAdmin ? "Thank You!" : "HBD"}`,
      }).then(() => {
        document.cookie = `HBD=TRUE; expires=3 Jun ${year} 19:58:00 UTC; Secure; SameSite=Lax`;
        setIsRunning(false);
      });
    }
  }, [age]);
  const handleClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <>
      {!_HBD && isBday && isRunning && (
        <Confetti
          className="confetti"
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ zIndex: 999999999 }}
        />
      )}
      <div className="sidebar">
        <Preloader loaded={loaded} />
        <Infobar
          open={active}
          className={`sidebarToggle ${active ? "sActive" : ""}`}
        >
          <InfobarFrame>
            <InfobarHeader>
              <InfobarBtn open={active}>
                <Icon icon={ellipsisV} onClick={handleClick} />
              </InfobarBtn>
            </InfobarHeader>
            <Header>
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
                  Sami Malik
                </NameA>
              </Name>
              <SmText>
                Full Stack Developer <br />
                Freelancer
              </SmText>
            </Header>
            <Scrollbar2>
              <div className="-table p-15-15">
                <TableUl>
                  <TableLi>
                    <h6>Residence:</h6>
                    <span>Mars</span>
                  </TableLi>
                  <TableLi>
                    <h6>City:</h6>
                    <span>Jezero Crater</span>
                  </TableLi>
                  <TableLi>
                    <h6>Age:</h6>
                    <span className="age">{age}++</span>
                  </TableLi>
                </TableUl>
              </div>
              <LsDivider />
              <LangSkills className="p-30-15">
                <LangSkillsItem>
                  <CircleProgress
                    id="circleprog1-1"
                    data-type="circles"
                    data-value="100"
                  >
                    <SVGProgressCircle offset={0} />
                    <ProgressbarText className="percentText">
                      {loaded && (
                        <CountUp
                          redraw={true}
                          delay={1.75}
                          duration={0.85}
                          end={100}
                        />
                      )}
                    </ProgressbarText>
                  </CircleProgress>
                  <h6>Urdu</h6>
                </LangSkillsItem>
                <LangSkillsItem>
                  <CircleProgress
                    id="circleprog1-2"
                    data-type="circles"
                    data-value="90"
                  >
                    <SVGProgressCircle offset={10} />
                    <ProgressbarText className="percentText">
                      {loaded && (
                        <CountUp
                          redraw={true}
                          delay={1.75}
                          duration={0.85}
                          end={90}
                        />
                      )}
                    </ProgressbarText>
                  </CircleProgress>
                  <h6>English</h6>
                </LangSkillsItem>
                <LangSkillsItem>
                  <CircleProgress
                    id="circleprog1-3"
                    data-type="circles"
                    data-value="75"
                  >
                    <SVGProgressCircle offset={25} />
                    <ProgressbarText className="percentText">
                      {loaded && (
                        <CountUp
                          redraw={true}
                          delay={1.75}
                          duration={0.85}
                          end={75}
                        />
                      )}
                    </ProgressbarText>
                  </CircleProgress>
                  <h6>German</h6>
                </LangSkillsItem>
              </LangSkills>
              <LsDivider />
              <div className="hard-skills p-30-15">
                <HardSkillsItem>
                  <SkillHeading>
                    <h6>JS</h6>
                  </SkillHeading>
                  <LineProgress>
                    <div
                      id="lineprog2"
                      data-type="progress"
                      data-value="95"
                      className="-skills-progress"
                      style={{ position: "reltative" }}
                    >
                      <SVGProgressHR offset={15} />
                      <SkillsProgressText>
                        {loaded && (
                          <CountUp
                            redraw={true}
                            delay={1.75}
                            duration={0.85}
                            end={85}
                          />
                        )}
                        %
                      </SkillsProgressText>
                    </div>
                  </LineProgress>
                </HardSkillsItem>
                <HardSkillsItem>
                  <SkillHeading>
                    <h6>HTML & CSS</h6>
                  </SkillHeading>
                  <LineProgress>
                    <div
                      id="lineprog2"
                      data-type="progress"
                      data-value="95"
                      className="-skills-progress"
                      style={{ position: "reltative" }}
                    >
                      <SVGProgressHR offset={5} />
                      <SkillsProgressText>
                        {loaded && (
                          <CountUp
                            redraw={true}
                            delay={1.75}
                            duration={0.85}
                            end={95}
                          />
                        )}
                        %
                      </SkillsProgressText>
                    </div>
                  </LineProgress>
                </HardSkillsItem>
                <HardSkillsItem>
                  <SkillHeading>
                    <h6>MERN Stack</h6>
                  </SkillHeading>
                  <LineProgress>
                    <div
                      id="lineprog2"
                      data-type="progress"
                      data-value="75"
                      className="-skills-progress"
                      style={{ position: "reltative" }}
                    >
                      <SVGProgressHR offset={25} />
                      <SkillsProgressText>
                        {loaded && (
                          <CountUp
                            redraw={true}
                            delay={1.75}
                            duration={0.85}
                            end={75}
                          />
                        )}
                        %
                      </SkillsProgressText>
                    </div>
                  </LineProgress>
                </HardSkillsItem>
                <HardSkillsItem>
                  <SkillHeading>
                    <h6>Python</h6>
                  </SkillHeading>
                  <LineProgress>
                    <div
                      id="lineprog2"
                      data-type="progress"
                      data-value="65"
                      className="-skills-progress"
                      style={{ position: "reltative" }}
                    >
                      <SVGProgressHR offset={35} />
                      <SkillsProgressText>
                        {loaded && (
                          <CountUp
                            redraw={true}
                            delay={1.75}
                            duration={0.85}
                            end={65}
                          />
                        )}
                        %
                      </SkillsProgressText>
                    </div>
                  </LineProgress>
                </HardSkillsItem>
                <HardSkillsItem>
                  <SkillHeading>
                    <h6>WordPress</h6>
                  </SkillHeading>
                  <LineProgress>
                    <div
                      id="lineprog2"
                      data-type="progress"
                      data-value="85"
                      className="-skills-progress"
                      style={{ position: "reltative" }}
                    >
                      <SVGProgressHR offset={15} />
                      <SkillsProgressText>
                        {loaded && (
                          <CountUp
                            redraw={true}
                            delay={1.75}
                            duration={0.85}
                            end={85}
                          />
                        )}
                        %
                      </SkillsProgressText>
                    </div>
                  </LineProgress>
                </HardSkillsItem>
              </div>
              <LsDivider />
              <KnowledgeList className="p-15-0">
                <li>React, VueJs, Svelte, NextJS</li>
                <li>Firebase, AWS, Heroku</li>
                <li>Materialize, TailwindCSS</li>
                <li>DevOps</li>
              </KnowledgeList>
              <LsDivider />
              <LinksFrame className="p-15-15">
                <a
                  href="https://drive.google.com/file/d/1bQbyWxhxoNoD89edb7jAh_d1Kyr98sFT/view"
                  className="link"
                  target="__blank"
                  rel="noreferrer"
                >
                  Download cv <Icon icon={download} />
                </a>
              </LinksFrame>
            </Scrollbar2>
            <Socials>
              <a
                href="https://www.linkedin.com/in/imsamimalik/"
                target="__blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Icon icon={linkedin} />
              </a>
              <a
                href="https://github.com/imsamimalik/"
                target="__blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <Icon icon={github} />
              </a>
              <a
                href="https://www.instagram.com/imsamimalik/"
                target="__blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Icon icon={instagram} />
              </a>
              <a
                href="https://twitter.com/imsamimalik"
                target="__blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <Icon icon={twitter} />
              </a>
              <a
                href="https://stackoverflow.com/users/10177946/"
                target="__blank"
                rel="noreferrer"
                aria-label="StackOverflow"
              >
                <Icon icon={stackOverflow} />
              </a>
            </Socials>
          </InfobarFrame>
        </Infobar>
      </div>
    </>
  );
};
export default Sidebar;
