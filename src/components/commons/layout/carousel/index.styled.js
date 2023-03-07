import styled from "@emotion/styled";

export const BannerCarousel = styled.div`
  width: 1920px;
  padding: 0px 10% 0px 10%;
  height: 400px;

  ul {
    bottom: 30px;
  }
`;

export const SliderParents = styled.div`
  width: 100%;
  position: relative;
`;

export const SliderChild = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;

export const SliderItem = styled.span`
  width: 700px;
  position: absolute;
  z-index: 999;
  top: 85px;
  left: 280px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SliderItem1 = styled.span``;
export const SliderItem2 = styled.span``;
