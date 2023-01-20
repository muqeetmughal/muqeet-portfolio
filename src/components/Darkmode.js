import { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { sunO } from "react-icons-kit/fa/sunO";
import { moonO } from "react-icons-kit/fa/moonO";
import { circleO } from "react-icons-kit/fa/circleO";

const themes = ["dark", "transparent", "light"];
//const icons = [moonO, circleO, sunO];

const detectColorScheme = () => {
  let theme = "dark";
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "light") {
      theme = "light";
    }
  }
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "transparent") {
      theme = "transparent";
    }
  } else if (!window.matchMedia) {
    return false;
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    theme = "light";
  }

  if (theme === "light") {
    document.querySelector("html").classList.remove("transparent");
    document.querySelector("html").classList.add("light");
  } else if (theme === "transparent") {
    document.querySelector("html").classList.remove("light");
    document.querySelector("html").classList.add("transparent");
  } else if (theme === "dark") {
    document.querySelector("html").classList.remove("light");
    document.querySelector("html").classList.remove("transparent");
  }
};

const Darkmode = () => {
  const [theme, setTheme] = useState(1);
  const handleClick = () => {
    setTheme((prev) => (prev + 1) % 3);

    localStorage.setItem("theme", themes[theme]);
  };

  useEffect(() => {
    detectColorScheme();
    // if (localStorage.getItem("theme") === "dark") {
    //   setTheme(0);
    // } else if (localStorage.getItem("theme") === "transparent") {
    //   setTheme(1);
    // } else if (localStorage.getItem("theme") === "light") {
    //   setTheme(2);
    // }
  }, [theme]);

  return (
    <Dark onClick={handleClick}>
      {localStorage.getItem("theme") === "dark" && <Icon icon={circleO} />}
      {localStorage.getItem("theme") === "transparent" && <Icon icon={sunO} />}
      {localStorage.getItem("theme") === "light" && <Icon icon={moonO} />}
      {!localStorage.getItem("theme") && <Icon icon={circleO} />}
    </Dark>
  );
};

export default Darkmode;

const Dark = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--main);
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99999;
  display: grid;
  place-items: center;
  cursor: pointer;
  filter: brightness(75%);
  transition: 300ms all ease-in-out;
  :hover {
    filter: brightness(100%);
    transition: 300ms all ease-in-out;
  }
  i {
    color: #fff;
    transform: scale(1.6);
  }
  @media (max-width: 550px) {
    transform: scale(0.8);
    bottom: 10px;
    right: 10px;
  }
`;
