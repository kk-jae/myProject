import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import UsedItemQuestion from "../../../commons/hooks/custom/useUsedItemQuestion";
import * as S from "./index.styled";

export default function QuestionListUI(props) {
  const { onClickDeleteUsedItemQuestion, onClickUpdateUsedItemQuestion } =
    UsedItemQuestion();

  const [myIndex, setMyIndex] = useState(-1);
  const [editContents, setEditContents] = useState("");

  const onClickChangeInput = (event) => {
    setMyIndex(Number(event.currentTarget.id));
  };

  const onClickChangeCancel = () => {
    setMyIndex(-1);
  };

  const onChangeEditContents = (event) => {
    setEditContents(String(event.currentTarget.value));
  };

  return (
    <S.Container>
      <S.Wrapper>
        {props.data?.map((el, index) =>
          myIndex !== index ? (
            <div key={index}>
              <S.Top>
                {el.user.picture !== null ? (
                  <S.Top_img
                    // src={`https://storage.googleapis.com/${el.user.picture}`}
                    src="/detail/nonUser.png"
                  />
                ) : (
                  <S.Top_img_null src="/detail/nonUser.png" />
                )}
                <S.Top_text>
                  <S.Top_left>
                    <S.left_name>{el.user.name}</S.left_name>
                    <S.left_date>{getDate(el.createdAt)}</S.left_date>
                  </S.Top_left>
                  <S.Top_right>
                    <S.Top_right_edit_btn
                      src="/detail/edit.png"
                      onClick={onClickChangeInput}
                      id={String(index)}
                    />
                    <S.Top_right_delete_btn
                      src="/detail/delete.png"
                      onClick={onClickDeleteUsedItemQuestion(el._id)}
                    />
                  </S.Top_right>
                </S.Top_text>
              </S.Top>
              <S.Bottom>
                <div>{el.contents}</div>
              </S.Bottom>
            </div>
          ) : (
            // 수정 할 때
            <S.EditContainer key={index}>
              <S.EditInput
                defaultValue={el.contents}
                onChange={onChangeEditContents}
              />
              <S.EditBtn_wrapper>
                <S.Edit_cancel onClick={onClickChangeCancel}>
                  취소하기
                </S.Edit_cancel>
                <S.Edit_update
                  onClick={onClickUpdateUsedItemQuestion(
                    el,
                    editContents,
                    setMyIndex
                  )}
                >
                  수정하기
                </S.Edit_update>
              </S.EditBtn_wrapper>
            </S.EditContainer>
          )
        )}
      </S.Wrapper>
    </S.Container>
  );
}
