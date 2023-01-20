import { OrderNow, ServiceBox, H5 } from "../../styles/pages/HomeStyles";
import { chevronRight } from "react-icons-kit/fa/chevronRight";
import { Icon } from "react-icons-kit";

const Servicebox = ({ title, description }) => {
  return (
    <>
      <ServiceBox className="service-icon-box">
        <div className="service-ib-content">
          <H5 className="mb-15">
            <span>{title}</span>
          </H5>
          <div className="mb-15">
            <div>
              <p>{description}</p>
            </div>
          </div>
          <div className="buttons-frame">
            <OrderNow to="/contact" className="link color-link w-chevron">
              <span> Order now </span>
              <Icon icon={chevronRight} />
            </OrderNow>
          </div>
        </div>
      </ServiceBox>
    </>
  );
};

export default Servicebox;
