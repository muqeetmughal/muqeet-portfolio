import styled from "styled-components";

export const Slides = styled.div`
  .swiper-wrapper {
    @media (max-width: 550px) {
      flex-direction: column;
    }
    .swiper-slide {
      @media (max-width: 550px) {
        height: auto !important;
        margin-bottom: 40px;
      }
    }
  }
`;

export const Testimonial = styled.div`
  transition: 0.55s ease-in-out;
  position: relative;
  background-size: cover;
  padding: 30px;
  margin-bottom: 10px;
  background: linear-gradient(159deg, var(--cardbg1) 0%, var(--cardbg2) 100%);
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);

  .testimonial-body {
    width: 100%;
    height: 100%;
    z-index: 0;
    .testimonial-face {
      position: absolute;
      object-fit: cover;
      right: 30px;
      top: -15px;
      width: 65px;
      height: 65px;
      border-radius: 50%;
      box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
    }
    .suptitle {
      margin-top: 5px;
      color: #8c8c8e;
      font-style: italic;
      font-size: 12px;
    }
  }
  .testimonial-footer {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-content: center;
    .star-rate {
      padding: 0;
      margin: 0;
      box-shadow: inset 0 3px 8px 0 rgb(15 15 20 / 20%);
      padding: 5px 15px;
      font-size: 10px;
      margin-top: 5px;
      background: var(--dark-black-background2);
      border-radius: 30px;
      display: flex;
      color: var(--main);
      li {
        list-style: none;
      }
    }
  }
`;
