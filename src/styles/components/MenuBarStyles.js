import styled from "styled-components";

export const MenubarContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 99999;
  width: ${(props) => (props.active ? "150px" : "80px")};
  transition: 0.55s ease-in-out;
  height: calc(100vh - 30px);

  @media (max-width: 1032px) {
    right: -80px;
    transition: 0.55s ease-in-out;
  }
`;
export const Menubar = styled.div`
  background: var(--dark-black-background2);
  height: calc(100vh - 30px);
  z-index: 999;
  right: -150px;
  position: fixed;
  top: auto;
  bottom: auto;
  right: auto;
  width: ${(props) => (props.active ? "230px" : "80px")};
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  transition: 0.55s all ease-in-out, background 0ms ease;
  transform: ${(props) =>
    props.active ? "translateX(-80px)" : "translateX(0px)"};

  a:first-child {
    visibility: visible;
    opacity: 1;
    display: block;
  }

  @media (max-width: 1032px) {
    height: 100vh !important;
    transform: ${(props) =>
      props.active ? "translateX(-150px)" : "translateX(0px)"};
  }
`;

export const MenubarFrame = styled.div`
  position: relative;
  border: var(--transBorder);
  @media (max-width: 990px) {
    backdrop-filter: var(--bgBlur);
  }
`;

export const MenubarHeader = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  box-shadow: 0 1px 4px 0 rgb(15 15 20 / 10%);
  background: linear-gradient(159deg, var(--bg1) 0%, var(--bg1) 100%);
`;

export const MenubarBtn = styled.span`
  pointer-events: all;
  cursor: pointer;
  margin-top: -10px;
  display: inline-block;
  width: 15px;
  height: 12px;
  padding: 30px;

  @media (max-width: 1032px) {
    transform: ${(props) =>
      props.active ? "translateX(0px)" : "translateX(-80px)"};
    transition: 0.4s ease-in-out;
  }

  span {
    background: var(--dark-global-text);
    position: relative;
    margin: 5px 0 0;
    content: "";
    display: block;
    width: 15px;
    height: 3px;
    border-radius: 1px;
    transition: 0.4s ease-in-out;
    backface-visibility: hidden;

    :before {
      background: var(--dark-global-text);
      position: absolute;
      top: -5px;
      content: "";
      display: block;
      width: 15px;
      height: 3px;
      border-radius: 1px;
      transition: 0.4s ease-in-out;
      backface-visibility: hidden;
    }
    :after {
      background: var(--dark-global-text);
      position: absolute;
      top: 5px;
      content: "";
      display: block;
      width: 15px;
      height: 3px;
      border-radius: 1px;
      transition: 0.4s ease-in-out;
      backface-visibility: hidden;
    }
  }
`;

export const MenubarCurrent = styled.span`
  width: 200px;
  transform: rotate(90deg);
  color: var(--dark-white);
  position: absolute;
  overflow: hidden;
  top: 200px;
  opacity: 1;
  left: -62px;
  text-transform: uppercase;
  font-size: 13px;
  opacity: 1;
  letter-spacing: 1px;
  font-weight: 500;
  transition: 0.4s ease-in-out;
  transform: rotate(90deg);
  span {
    color: var(--dark-global-text);
  }
  @media (max-width: 550px) {
    opacity: 0;
  }
`;

export const Scrollframe = styled.div`
  overflow: auto;
  transform: translate3d(0, 0, 0);
  width: 100%;
  height: calc(100vh - 30px);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const NavUl = styled.ul`
  pointer-events: auto;
  color: var(--dark-global-text);
  min-width: 230px;
  width: 100%;
  padding: 0;
  margin: 0 0 60px;
`;

export const NavLi = styled.li`
  width: 100%;
  list-style-type: none;
  transition: 0.55s ease-in-out;
  opacity: ${(props) => (props.active ? "1" : "0")};
  transform: ${(props) =>
    props.active ? "translateX(0px)" : "translateX(60px)"};
  transition: 0.55s ease-in-out;
  transition-delay: ${(props) => props.delay + "s"};
  a {
    padding: 17px 30px;
    display: inline-block;
    width: 100%;
    text-transform: uppercase;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: ${(props) => (props.current ? "600" : "500")};
    color: ${(props) =>
      props.current ? "var(--main)" : "var(--dark-global-text)"};
    text-shadow: ${(props) =>
      props.current
        ? "0 0 3px rgb(250 250 252 / 40%)"
        : "0 0 0 rgb(250 250 252 / 40%)"};
    transition: 0.2s ease-in-out;
  }
`;
