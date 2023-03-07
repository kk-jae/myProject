import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: row;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0px 12% 0px 12%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  flex-wrap: wrap;
`;

export const Wrapper_Useditem = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 320px;
  /* border: 1px solid #555555; */
  border-radius: 10px;
  margin: 0px 0px 32px 0px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.02);
  }
`;

export const Useditem_img = styled.img`
  border-radius: 10px;
  width: 100%;
  height: 221px;
  background-color: #eeeeee;
  object-fit: cover;
  overflow: hidden;
`;
export const Useditem_text_Wrapper = styled.div`
  height: 99px;
  padding: 16px;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  justify-content: space-between;
  position: relative;
`;

export const Useditem_name = styled.div`
  overflow: hidden;
`;

export const Useditem_price = styled.div`
  overflow: hidden;
`;
export const Useditem_time = styled.div`
  position: absolute;
  top: 65px;
  right: 20px;
  color: #a9a9a9;
  font-weight: 500;
  font-size: 12px;
`;
