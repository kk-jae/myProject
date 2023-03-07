import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 143px 360px 142px 360px;
`;
export const Wrapper = styled.form`
  width: 1200px;
  height: 903px;
  background-color: white;
  padding: 80px;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.07);
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding-bottom: 33px;
  border-bottom: 1px solid #c9c9c9;
  margin-bottom: 97px;
`;

export const Top_main = styled.div`
  font-weight: 700;
  font-size: 50px;
  padding-right: 19px;
`;
export const Top_sub = styled.div`
  font-weight: 400;
  font-size: 32px;
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Middle_wrapper = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const Middle_left = styled.div`
  font-weight: 400;
  font-size: 24px;
`;

export const Middle_right_input_wrapper = styled.div`
  width: 78%;
  height: 100%;
`;
export const Middle_right = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 37px;
  background-color: #f6f6f6;
  border: 1px solid #cccccc;
  border-radius: 5px;
  font-size: 15px;
`;
export const Error = styled.div`
  padding-left: 37px;
  color: red;
  font-size: 14px;
`;

export const Bottom = styled.div`
  margin-top: 57px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Bottom_top = styled.div``;

export const Bottom_top_sighup_btn = styled.button`
  width: 330px;
  height: 70px;
  background-color: #ffe004;
  font-weight: 500;
  font-size: 20px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;
export const Bottom_top_cancel_btn = styled.button`
  width: 330px;
  height: 70px;
  background-color: #000000;
  color: white;
  font-weight: 500;
  font-size: 20px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`;

export const Bottom_bottom = styled.div`
  display: flex;
  flex-direction: row;
  padding: 47px;
`;

export const Bottom_bottom_left = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #888888;
`;
export const Bottom_bottom_right = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #000000;
  padding-left: 21px;
  text-decoration-line: underline;
  cursor: pointer;
`;
