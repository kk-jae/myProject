import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import * as S from "./index.styled";

export default function LayoutBannerUI() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <S.BannerCarousel>
        <Slider {...settings}>
          <S.SliderParents>
            <S.SliderChild src="/banner/book.jpg" />
            <S.SliderItem></S.SliderItem>
          </S.SliderParents>
          <S.SliderParents>
            <S.SliderChild src="/banner/analog.jpg" />
          </S.SliderParents>
        </Slider>
      </S.BannerCarousel>
    </>
  );
}
