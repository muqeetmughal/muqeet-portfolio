import { SVG } from "../styles/components/SidebarStyles";

const SVGProgressHR = ({ offset }) => {
  return (
    <SVG data-value={offset} preserveAspectRatio="none" viewBox="0 0 100 1.72">
      <path
        fillOpacity="0"
        stroke="#eee"
        strokeWidth="1.72"
        d="M0 .86h100"
      ></path>
      <path
        fillOpacity="0"
        stroke="#555"
        strokeDasharray="100, 100"
        strokeWidth="1.72"
        d="M0 .86h100"
        className="meter"
        strokeDashoffset="100"
      ></path>
    </SVG>
  );
};
export default SVGProgressHR;
