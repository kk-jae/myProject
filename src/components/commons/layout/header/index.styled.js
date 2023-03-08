import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1920px;
  height: 257px;
  margin-bottom: 79px;
`;

export const Wrapper_top = styled.div`
  width: 1920px;
  height: 100px;
  position: relative;
`;

export const Top_text = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 13.7%;
`;

export const Top_text_detail = styled.div`
  font-size: 14px;
  font-weight: 400;
  padding-left: 3%;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  :hover {
    font-weight: 700;
  }
`;

export const Payment = styled.span`
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  text-decoration: underline;
  padding-left: 10px;
`;

export const Top_text_detail_basket = styled.div`
  padding-right: 5px;
`;

export const Top_text_detail_basketNum = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20px;
  border-radius: 50%;
  background-color: #ffe004;
  color: white;
`;

export const Wrapper_bottom = styled.div`
  width: 1920px;
  height: 157px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 13%;
  padding-right: 13.7%;
`;

export const Wrapper_bottom_left = styled.div`
  cursor: pointer;
  font-size: 45px;
  font-weight: 700;
  font-family: "main";

  :hover {
    animation: logo 1.5s ease-in-out;
    @keyframes logo {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(-5deg);
      }
      50% {
        transform: rotate(5deg);
      }
      75% {
        transform: rotate(-5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;
export const Wrapper_bottom_right = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;
  font-family: "main";

  :hover {
    animation: logo 1.5s ease-in-out;
    @keyframes logo {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(-5deg);
      }
      50% {
        transform: rotate(5deg);
      }
      75% {
        transform: rotate(-5deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;

export const Today = styled.div`
  width: 155px;
  height: 373px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 1720px;
  /* top: 219px; */
  top: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.2);
`;
