import styled from "styled-components";

export const RightFrame = styled.div`
  padding-bottom: 30px;
  .link.active {
    color: var(--dark-white);
  }
  @media (max-width: 768px) {
    .filter {
      text-align: center;
      display: block;
      flex-direction: column;
    }
  }
`;
export const Link = styled.a`
  position: relative;
  text-transform: uppercase;
  font-size: 12px;
  display: inline-block;
  letter-spacing: 1.5px;
  font-weight: 600;
  margin-right: 15px;
  margin-bottom: 10px;
  color: var(--gray);
  transition: 0.4s ease-in-out;
  cursor: pointer;
`;
export const Grid = styled.div`
  transition: 0.55s ease-in-out;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  margin-bottom: 30px;
  overflow: hidden;
  position: relative;
  padding: 20px;
  width: 450px;
  height: 250px;
  cursor: pointer;
  :hover {
    box-shadow: 0 15px 35px rgb(255 255 255 / 6%);
  }
  :hover .item-description {
    transform: translateY(0);
  }

  :hover img {
    transform: scale(1.1);
    filter: brightness(100%) blur(0px) !important;
  }
  @media (max-width: 990px) {
    height: 325px !important;

    .item-description {
      transform: translateY(0) !important;
      h5 {
        margin-bottom: 10px;
      }
    }
    img {
      transform: scale(1);
      filter: brightness(100%) blur(0px) !important;
      padding-bottom: 75px;
      object-fit: contain !important;
    }
  }
  .item-description {
    position: absolute;
    z-index: 9;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px;
    background: linear-gradient(159deg, var(--bg1) 0%, var(--bg2) 100%);
    box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    transform: translateY(100%);
    transition: 0.55s ease-in-out;
    h5 {
      color: var(--main);
    }
  }
  .portfolio-item-frame {
    padding-bottom: 66.7%;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      object-position: center;
      filter: brightness(85%) blur(0);
      transition: 0.4s ease-in-out;
    }
  }
`;
