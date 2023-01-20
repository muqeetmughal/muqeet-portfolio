import { Testimonial } from "../../styles/components/SliderStyles";
import { Icon } from "react-icons-kit/";
import { star } from "react-icons-kit/fa/star";
const Slide = ({ img, name, review }) => {
  return (
    <Testimonial className="testimonial">
      <div className="testimonial-body">
        <img loading="lazy" className="testimonial-face" src={img} alt={name} />
        <h5>
          <span>{name}</span>
        </h5>
        <div className="suptitle mb-15">
          <span> Customer </span>
        </div>
        <div className="mb-15 description">
          <div>
            <p>{review}</p>
          </div>
        </div>
      </div>
      <div className="testimonial-footer">
        <div className="left-side">
          <ul className="star-rate">
            <li>
              <Icon icon={star} />
            </li>
            <li>
              <Icon icon={star} />
            </li>
            <li>
              <Icon icon={star} />
            </li>
            <li>
              <Icon icon={star} />
            </li>
            <li>
              <Icon icon={star} />
            </li>
          </ul>
        </div>
      </div>
    </Testimonial>
  );
};

export default Slide;
