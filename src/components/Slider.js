import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SectionTitle from "./ui/SectionTitle";
import Container from "./ui/Container";
import { Slides } from "../styles/components/SliderStyles";
import TestimonialImgSrc from "../assets/images/testimonial.jpg";
import PaulharringtonImgSrc from "../assets/images/paulharrington.jpg";
import AddyPolaniImgSrc from "../assets/images/addypolani.jpg";
import DragoImgSrc from "../assets/images/drago_1.jpg";
import Slide from "./ui/Slide";
const Slider = () => {
  return (
    <Slides>
      <Container>
        <div className="row">
          <SectionTitle text="Recommendations" />
          <Swiper
            className="col-lg-12 no-transform"
            spaceBetween={25}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            <SwiperSlide>
              <Slide
                img={TestimonialImgSrc}
                name="Alice gallagher"
                review="Absolutely brilliant. Very communicative, professional
                        and fast. Did what was asked with no problems at all.
                        Many thanks."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                img={PaulharringtonImgSrc}
                name="Paul Harrington"
                review="A very hard and diligent worker. Took the effort to make
                        sure i was happy with the work completed. I see repeat
                        collaborations in the future :) 5*"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                img={AddyPolaniImgSrc}
                name="AddyPolani"
                review="Outstanding work and delivered the order before time,
                        highly recommended seller, i have more task's in
                        pending and definitely ill give him for sure."
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                img={DragoImgSrc}
                name="Drago"
                review="I really enjoyed working with Mr. Akhtar on this
                        website. he is very much kind and specially for the
                        amendments I have done.5* for him as services are
                        excellent with expert advices and solutions on Ecommerce
                        options"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </Slides>
  );
};

export default Slider;
