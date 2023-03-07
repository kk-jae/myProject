import styled from "@emotion/styled";

export const Container = styled.div`
  width: 379px;
  margin-top: 55px;
`;

export const Wrapper = styled.div``;
export const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 17px;
`;
export const Top_img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #c4c4c4;
  object-fit: cover;
`;
export const Top_img_null = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #c4c4c4;
  object-fit: cover;
`;

export const Top_text = styled.div`
  width: 100%;
  padding-left: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Top_left = styled.div``;
export const left_name = styled.div`
  overflow: hidden;
  font-size: 24px;
`;
export const left_date = styled.div`
  font-size: 15px;
`;
export const Top_right = styled.div``;
export const Top_right_edit_btn = styled.img`
  cursor: pointer;
  width: 18px;
  height: 18px;
`;
export const Top_right_delete_btn = styled.img`
  cursor: pointer;
  margin-left: 16px;
  width: 18px;
  height: 18px;
`;

export const Bottom = styled.div`
  margin-bottom: 36px;
  font-weight: 400;
  font-size: 24px;
  overflow: hidden;
`;

export const EditContainer = styled.div`
  width: 379px;
  margin-top: 55px;
`;

export const EditInput = styled.textarea`
  width: 379px;
  height: 147px;
  background-color: #e9e9e9;
  border: none;
  padding: 19px 15px 15px 19px;
  font-weight: 400;
  font-size: 24px;
`;

export const EditBtn_wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 11px;
  margin-bottom: 20px;
`;
export const Edit_cancel = styled.button`
  font-weight: 700;
  font-size: 20px;
  width: 116px;
  height: 42px;
  color: white;
  background-color: black;
  cursor: pointer;
`;
export const Edit_update = styled.button`
  font-weight: 700;
  font-size: 20px;
  width: 116px;
  height: 42px;
  margin-left: 5px;
  background-color: #ffe004;
  border: none;
  cursor: pointer;
`;
