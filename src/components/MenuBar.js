import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
  MenubarContainer,
  Menubar,
  MenubarFrame,
  MenubarHeader,
  MenubarBtn,
  MenubarCurrent,
  Scrollframe,
  Nav,
  NavUl,
  NavLi,
} from "../styles/components/MenuBarStyles";

const MenuBar = () => {
  const [location] = useLocation();

  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState("Home");
  useEffect(() => {
    let links = document.querySelectorAll(".main-menu a");

    links.forEach((link) =>
      link.getAttribute("href") === location
        ? link.classList.add("selected")
        : link.classList.remove("selected")
    );
  }, [location]);

  useEffect(() => {
    if (active) {
      document.querySelector(".curtain").classList.add("mActive");
      document.querySelector(".app-content").classList.add("mActive");
    } else {
      document.querySelector(".curtain").classList.remove("mActive");
      document.querySelector(".app-content").classList.remove("mActive");
    }
  }, [active]);

  const handleBtnClick = () => {
    setActive((prev) => !prev);
  };
  useEffect(() => {
    if (location?.split("/")[1]) {
      setCurrent(location?.split("/")[1]);
      document.querySelector("body").classList.add(location?.split("/")[1]);
    } else {
      setCurrent("Home");
      document.querySelector("body").classList.add("Home");
    }
    return () => {
      if (location?.split("/")[1]) {
        document
          .querySelector("body")
          .classList.remove(location?.split("/")[1]);
      } else {
        document.querySelector("body").classList.remove("Home");
      }
    };
  }, [location]);
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target.matches(".curtain")) {
        setActive(false);
      }
    });
  }, [active]);

  return (
    <MenubarContainer active={active} className="menubar-container">
      <Menubar active={active} className={`menubar ${active ? "mActive" : ""}`}>
        <MenubarFrame className="menubar-frame">
          <MenubarHeader className="menubar-header">
            <MenubarBtn
              active={active}
              className={`menubar-btn ${active ? "mActive" : ""}`}
              onClick={handleBtnClick}
            >
              <span></span>
            </MenubarBtn>
          </MenubarHeader>
          <MenubarCurrent className="current-page">
            <span>{current}</span>
          </MenubarCurrent>
          <Scrollframe className="scrollframe">
            <Nav className="nav">
              <NavUl className="main-menu">
                <NavLi
                  delay={0.05}
                  active={active}
                  onClick={() => setActive((prev) => !prev)}
                >
                  <Link to="/">Home</Link>
                </NavLi>
                <NavLi
                  delay={0.1}
                  active={active}
                  onClick={() => setActive((prev) => !prev)}
                >
                  <Link to="/about">About</Link>
                </NavLi>
                <NavLi
                  delay={0.15}
                  active={active}
                  onClick={() => setActive((prev) => !prev)}
                >
                  <Link to="/portfolio">Portfolio</Link>
                </NavLi>

                <NavLi
                  delay={0.2}
                  active={active}
                  onClick={() => setActive((prev) => !prev)}
                >
                  <Link to="/contact">Contact</Link>
                </NavLi>

                {/* <NavLi
                  delay={0.25}
                  active={active}
                  onClick={() => setActive((prev) => !prev)}
                >
                  <Link to="/blog">Blog</Link>
                </NavLi> */}

                <NavLi
                  delay={0.3}
                  active={active}
                  onClick={() => setActive((prev) => !prev)}
                >
                  <Link to="/login">Login</Link>
                </NavLi>
              </NavUl>
            </Nav>
          </Scrollframe>
        </MenubarFrame>
      </Menubar>
    </MenubarContainer>
  );
};
export default MenuBar;
