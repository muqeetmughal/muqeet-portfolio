import styled from "styled-components";

export const Card = styled.div`
  background: linear-gradient(159deg, var(--cardbg1) 0%, var(--cardbg2) 100%);
  box-shadow: 0 3px 8px 0 rgb(15 15 20 / 20%);
  padding: 30px;
  margin-bottom: 30px;
  transition: 0.55s ease-in-out;
`;

export const FormField = styled.div`
  position: relative;
  margin-bottom: 30px;

  .form-control-wrap {
    position: relative;

    input,
    textarea {
      height: 50px;
      width: 100%;
      background: linear-gradient(159deg, var(--bg1) 0%, var(--bg2) 100%);
      border: none;
      color: var(--dark-white);
      padding-left: 65px;
      padding-right: 15px;
      box-shadow: inset 0 1px 4px 0 rgb(15 15 20 / 10%);
      margin-bottom: 0;
      transition: 0.4s ease-in-out;
    }
    textarea {
      padding-left: 15px;
      padding-top: 15px;
      height: 150px;
      border-left: solid 50px var(--dark-black-background2);
    }
  }
  label {
    text-align: center;
    color: var(--dark-global-text);
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--dark-black-background2);
    top: 0;
    left: 0;
    padding: 0 15px;
    text-transform: uppercase;
    font-size: 13px;
    line-height: 50px;
    letter-spacing: 1px;
    font-weight: 500;
    transition: 0.4s ease-in-out;
    cursor: text;
  }
`;

export const SubmitFrame = styled.div`
  position: relative;
  height: auto;
  .submit {
    margin: 0;
    overflow: hidden;
    position: relative;
    z-index: 999;
    cursor: pointer;
    span {
      align-self: center;
      transition: 0.2s ease-in-out;
    }
  }
`;

export const ResponseOutput = styled.div`
  border: none !important;
  color: green;
  display: block !important;
  margin: 2em 0.5em 1em;
  padding: 0.2em 1em;
`;
