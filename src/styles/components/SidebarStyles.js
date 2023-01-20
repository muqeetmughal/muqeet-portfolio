import styled from "styled-components";

export const Infobar = styled.div`
  position: fixed !important;
  background: var(--dark-black-background2);
  border: var(--transBorder);
  width: 290px;
  min-width: 290px;
  height: calc(100vh - 30px);
  position: relative;
  z-index: 999;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  transition: 0.55s all ease-in-out, background-color 0s;
  padding: 0 15px;

  @media (max-width: 1032px) {
    height: 100vh !important;
    backdrop-filter: var(--bgBlur);
    position: absolute;
    left: -290px;
    transform: ${(props) =>
      props.open ? "translateX(290px)" : "translateX(0px)"};
    width: 290px;
  }
`;

export const InfobarFrame = styled.div`
  padding: 0 15px;
`;

export const InfobarHeader = styled.div`
  width: 100%;
  height: 70px;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999999999999;
  display: none;

  @media (max-width: 1032px) {
    display: flex;
  }
`;

export const InfobarBtn = styled.span`
  margin-left: auto;
  pointer-events: all;
  font-size: 14px;
  padding: 30px;
  i {
    cursor: pointer;
    :hover {
      color: var(--white);
    }
  }

  @media (max-width: 1032px) {
    transform: ${(props) =>
      props.open ? "translateX(0px)" : "translateX(70px)"};
    transition: 0.4s ease-in-out;
  }
`;

export const Header = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99999;
  width: 100%;
  padding: 30px;
  height: 235px;
  background: linear-gradient(159deg, var(--bg1) 0%, var(--bg1) 100%);
  text-align: center;
  box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
`;

export const Avatar = styled.div`
  width: 90px;
  height: 90px;
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
  margin-bottom: 15px;
`;

export const AvatarCurtain = styled.span`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  outline: inherit;
  transition: 0.2s ease-in-out;
  z-index: 0;
  user-select: none;
  :hover i {
    opacity: 0.7;
  }
`;

export const AvatarCurtainImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  z-index: 0;
`;

export const LampLight = styled.div`
  z-index: 2;

  :before {
    content: "";
    position: absolute;
    bottom: -1px;
    right: 1px;
    background: var(--dark-white);
    height: 23px;
    width: 23px;
    border-radius: 50%;
    animation: pulse 1s infinite;
  }
`;

export const AvailableLamp = styled.div`
  background-color: var(--main);
  position: absolute;
  bottom: 3px;
  right: 5px;
  height: 15px;
  width: 15px;
  background: var(--main);
  border-radius: 50%;
  z-index: 0;
  transition: 0.4s ease-in-out;

  :hover {
    transform: scale(1);
    background: var(--dark-lamp-green);
    cursor: pointer;
  }

  :before {
    content: "";
    position: absolute;
    height: 5px;
    width: 5px;
    right: -15px;
    top: 5px;
    opacity: 0;
    background: #191923;
    pointer-events: none;
    transform: translateX(20px) rotate(45deg);
    transition: 0.4s ease-in-out;
    z-index: 99;
  }

  :hover:before {
    opacity: 1;
    transform: translateX(0) rotate(45deg);
  }

  :after {
    position: relative;
    content: "I am available for freelance hire";
    width: 115px;
    display: block;
    padding: 5px 10px;
    top: -10px;
    left: 28px;
    font-size: 10px;
    font-weight: 200;
    color: #cacace;
    box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
    background: #191923;
    opacity: 0;
    pointer-events: none;
    transform: translateX(20px);
    transition: 0.4s ease-in-out;
    text-align: left;
  }

  :hover:after {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Name = styled.h5`
  color: var(--dark-white);
  transition: 0.4s ease-in-out;
`;

export const NameA = styled.a`
  color: var(--dark-white);
  transition: 0.4s ease-in-out;
  text-decoration: none;

  :hover {
    color: var(--main);
  }
`;

export const SmText = styled.div`
  font-size: 13px;
`;

export const Scrollbar2 = styled.div`
  padding: 240px 0 50px;
  overflow: auto;
  transform: translate3d(0, 0, 0);
  width: 100%;
  height: calc(100vh - 30px);

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  @media (max-width: 1032px) {
    height: 100vh;
  }
`;

export const TableUl = styled.ul`
  padding: 0;
  margin: 0;
`;

export const TableLi = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  :last-child {
    margin-bottom: 0;
  }
`;

export const LsDivider = styled.div`
  background: var(--dark-global-text);
  width: 100%;
  height: 1px;
  opacity: 0.3;
`;

export const LangSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const LangSkillsItem = styled.div`
  width: 33.33333%;
  text-align: center;
  margin-bottom: 15px;
  div.percentText span {
    padding-right: 3px;
  }
`;

export const CircleProgress = styled.div`
  position: relative;
  width: 65%;
  margin: 0 auto 15px;
`;

export const ProgressbarText = styled.div`
  font-size: 13px;
  color: var(--gray) !important;
  position: absolute;
  left: 45%;
  top: 50%;
  padding: 0px;
  margin: 0px;
  transform: translate(-50%, -50%);
  color: rgb(85, 85, 85);

  :after {
    content: "%";
    position: absolute;
    right: -7px;
  }
`;

export const SVG = styled.svg`
  width: 100%;
  height: 100%;
  display: block;

  path:first-child {
    stroke: var(--stroke);
  }
  path:last-child {
    stroke: var(--main);
  }
`;

export const HardSkillsItem = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

export const SkillHeading = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LineProgress = styled.div`
  width: 100%;
`;

export const SkillsProgressText = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: right;
  top: 50%;
  font-size: 13px;
  color: var(--gray) !important;
`;

export const KnowledgeList = styled.ul`
  padding-left: 0;
  margin-bottom: 1rem;
  li {
    list-style-type: none;
    margin-bottom: 5px;
    color: var(--dark-global-text);
    :before {
      content: "✓";
      font-weight: 900;
      margin-right: 5px;
      font-size: 9px;
      color: var(--main);
      margin-right: 10px;
    }
  }
`;

export const LinksFrame = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
  height: 50px;
  background: linear-gradient(159deg, var(--bg1) 0%, var(--bg1) 100%);
  backdrop-filter: var(--bgBlur);
  border: var(--transBorder);
  position: absolute;
  bottom: 0;
  box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
  left: 0;
  width: 100%;
  z-index: 999;
  i {
    transition: 0.3s ease-in-out;
  }
  i:hover {
    color: var(--main);
    transition: 0.3s ease-in-out;
  }
  a {
    transition: 0.2s ease-in-out;
  }
`;
