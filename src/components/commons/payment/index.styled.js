import styled from "@emotion/styled";

export const Container = styled.div`
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  text-decoration: underline;
  padding-left: 10px;

  :hover {
    font-weight: 700;
  }
`;

export const Modal_Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Cancel_wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Close = styled.div`
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
`;

export const Top = styled.div`
  margin-top: 43px;
  font-weight: 700;
  font-size: 20px;
`;
export const Middle = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Middle_top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 14px 8px 14px 8px;
  margin: 40px 0px 0px 0px;
  width: 384px;
  border-bottom: 2px solid black;
  cursor: pointer;
`;
export const Middle_top_left = styled.div`
  color: #828282;
`;
export const Middle_top_right = styled.div`
  font-size: 18px;
`;

export const Middle_bottom = styled.div`
  width: 384px;
  height: 212px;
  border-radius: 10px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin-top: 17px;
`;
export const Middle_price_item = styled.div`
  width: 100%;
  height: 25%;
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
`;

export const Middle_off = styled.div``;

export const Bottom = styled.div`
  width: 384px;
  height: 51px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  background-color: black;
  margin: 30px 0px 30px 0px;
`;

// export const Middle_select = styled.select`
//   width: 90%;
//   height: 40px;
//   border: none;
//   border-bottom: 2px solid black;

//   background-color: white;
//   margin: 40px 0px 40px 0px;
// `;
// export const Select_option = styled.option``;
