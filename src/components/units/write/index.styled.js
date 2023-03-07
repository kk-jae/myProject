import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1920px;
  display: flex;
  flex-direction: row;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0px 13% 0px 13%;
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  border-bottom: 3px solid #555555;
  padding-bottom: 42px;
  margin-bottom: 39px;
`;
export const Top_Text = styled.div`
  font-weight: 700;
  font-size: 40px;
`;
export const Middle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Middle_Top = styled.div``;

export const Middle_top_wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 56px;
  margin-bottom: 39px;
`;
export const Middle_top_wrapper_left = styled.div`
  width: 17%;
  font-weight: 500;
  font-size: 24px;
`;
export const Middle_top_wrapper_right = styled.input`
  width: 83%;
  height: 100%;
  /* color: #a9a9a9; */
  font-weight: 400;
  font-size: 15px;
  background-color: #e9e9e9;
  border: none;
  padding-left: 19px;
`;
export const ReactQuill_wrapper = styled.div`
  width: 83%;
  height: 431px;
  margin-top: 400px;
`;

export const Middle_Middle = styled.div`
  width: 100%;
`;
export const Middle_middle_wrapper = styled.div`
  width: 100%;
  border-bottom: 3px solid #555555;
  margin-top: 45px;
  padding-bottom: 47px;
`;

export const Middle_middle_wrapper_box = styled.div``;

export const Middle_middle_text = styled.div`
  font-weight: 500;
  font-size: 24px;
`;
export const Middle_middle_address_detail = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  margin-bottom: 39px;
`;
export const Address_kakao = styled.div`
  width: 364px;
  height: 252px;
  margin-right: 26px;
`;

export const Address_search_wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 83%;
`;
export const Address_search = styled.div`
  margin-bottom: 26px;
`;
export const AdrTop = styled.div`
  display: flex;
`;

export const AdrTopInput = styled.input`
  width: 77px;
  height: 52px;
  text-align: center;
  margin-right: 10px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  font-weight: 400;

  /* ::placeholder {
    color: ${(props) => (!props.readOnly ? "black" : "gray")};
  } */
`;

export const AdrTopBtn = styled.button`
  background-color: black;
  color: white;
  width: 124px;
  height: 52px;
  border: 1px solid black;
  cursor: pointer;
`;

export const AdrInput = styled.input`
  width: 100%;
  height: 56px;
  background-color: #e9e9e9;
  border: none;
  margin-bottom: 24px;
  padding-left: 19px;
`;

export const imgbox_container = styled.div`
  display: flex;
  margin-top: 36px;
`;
export const Middle_middle_imgbox = styled.div`
  width: 180px;
  height: 180px;
  background-color: #bdbdbd;
  margin-right: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #4f4f4f;
  cursor: pointer;
`;

export const ImgboxInput = styled.input`
  display: none;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const Middle_Bottom = styled.div``;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 73px 0px 73px 0px;
`;

export const Bottom_left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffe004;
  width: 195px;
  height: 77px;
  font-weight: 700;
  font-size: 20px;
  margin-right: 8px;
  cursor: pointer;
`;
export const Bottom_right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  width: 195px;
  height: 77px;
  font-weight: 700;
  font-size: 20px;
  margin-left: 8px;
  cursor: pointer;
`;
