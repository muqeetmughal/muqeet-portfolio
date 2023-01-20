import { SVG } from "../styles/components/SidebarStyles";

const SVGProgressCircle = ({ offset }) => {
  return (
    <SVG data-value={offset} viewBox="0 0 100 100">
      <path
        fillOpacity="0"
        stroke="#eee"
        strokeWidth="7"
        d="M50 3.5a46.5 46.5 0 110 93 46.5 46.5 0 110-93"
      ></path>
      <path
        fillOpacity="0"
        stroke="#555"
        strokeDasharray="292.273, 292.273"
        strokeDashoffset="300"
        strokeWidth="7"
        d="M50 3.5a46.5 46.5 0 110 93 46.5 46.5 0 110-93"
        className="meter"
      ></path>
    </SVG>
  );
};
export default SVGProgressCircle;
