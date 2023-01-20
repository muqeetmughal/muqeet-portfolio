import { SectionTitle, H4 } from "../../styles/pages/HomeStyles";
const Sectiontitle = ({ text }) => {
  return (
    <div className="col-lg-12">
      <SectionTitle className="section-title">
        <div className="title-frame">
          <H4 className="title-h">
            <span>{text}</span>
          </H4>
        </div>
      </SectionTitle>
    </div>
  );
};

export default Sectiontitle;
