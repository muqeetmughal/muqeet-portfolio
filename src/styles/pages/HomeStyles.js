import styled from "styled-components";
import { Link } from "wouter";
import codeWall from "../../assets/images/codeWall.jpg";

export const Banner = styled.div`
  transition: 0.55s ease-in-out;
  background-size: cover;
  background-position: center;
  position: relative;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  z-index: 99;
  margin-bottom: 30px;
  background-image: url(${codeWall});
`;

export const BannerBack = styled.div`
  content: "";
  position: absolute;
  z-index: 0;
  top: -30px;
  width: 90%;
  height: 30px;
  margin-left: 5%;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background: var(--curtainBg);

  @media (max-width: 1400px) {
    display: none;
  }
`;

export const BannerOverlay = styled.div`
  position: relative;
  display: flex;
  padding: 60px;
  width: 100%;
  background-image: linear-gradient(
    90deg,
    rgba(45, 45, 58, 0.9) 15%,
    rgba(45, 45, 58, 0.7) 50%,
    rgba(43, 43, 53, 0.7) 100%
  );

  @media (max-width: 1032px) {
    padding: 60px 30px;
  }
`;

export const BannerTitle = styled.div`
  width: 100%;
  align-self: center;

  .white {
    color: #fff;
  }

  h1 {
    color: #fff;
  }
  @media (max-width: 1032px) {
    text-align: center;
    h1 {
      font-size: 22px;
    }
  }
  @media (max-width: 500px) {
    text-align: center;
    h1 {
      font-size: 17px;
    }
  }
`;
export const BannerPhoto = styled.img`
  width: 390px;
  position: absolute;
  right: 30px;
  bottom: 0;
  @media (max-width: 1600px) {
    width: 310px;
  }
  @media (min-width: 1600px) {
    width: 310px;
  }
  @media (max-width: 990px) {
    display: none;
  }
`;

export const CounterFrame = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  position: relative;

  .counter-box {
    padding: 0 10px;
    @media (max-width: 990px) {
      min-width: 50px;
      padding: 0;
    }
    span {
      color: var(--main);
      font-weight: 600;
      font-family: "Poppins", sans-serif;
      font-size: 22px;
    }
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  .title-frame {
    align-self: center;
    position: relative;
    margin-bottom: 30px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
  @media (max-width: 768px) {
    .art-title-frame {
      margin-bottom: 20px;
      max-width: 100%;
    }
  }
`;
export const Row = styled.div`
  display: grid;
  column-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(190px, 288px));
  place-content: space-around;
`;

export const ServiceBox = styled.div`
  margin-bottom: 30px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  background: linear-gradient(159deg, var(--cardbg1) 0%, var(--cardbg2) 100%);
  .service-ib-content {
    padding: 30px;
  }
`;

export const OrderNow = styled(Link)`
  color: var(--main) !important;
  padding-right: 10px;
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
  i {
    font-weight: 900;
    transform: scale(0.8) translateY(-1px);
    transition: 0.4s ease-in-out;
  }
  :hover i {
    transform: scale(0.8) translateX(5px) translateY(-1px);
    transition: 0.4s ease-in-out;
  }
`;
export const H6 = styled.h1`
  all: reset;
  font-size: 13px;
  font-weight: 400;
`;

export const H4 = styled.h2`
  all: reset;
  font-size: 17px;
  font-weight: 600;
`;

export const H5 = styled.h3`
  all: reset;
  font-size: 14px;
  font-weight: 600;
`;
