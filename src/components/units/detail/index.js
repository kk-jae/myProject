import { EnvironmentOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import DOMPurify from "dompurify";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { useQueryIdChecker } from "../../commons/hooks/custom/useQueryIdChecker";
import UsedItem from "../../commons/hooks/custom/useUsedItem";
import UsedItemQuestion from "../../commons/hooks/custom/useUsedItemQuestion";
import { useMutationToggleUseditemPick } from "../../commons/hooks/mutation/useMutationToggleUseditemPick";
import {
  FETCH_USED_ITEM,
  useQueryFetchUsedItem,
} from "../../commons/hooks/query/useQueryFetchUsedItem";
import { useQueryFetchUsedItemQuestions } from "../../commons/hooks/query/useQueryFetchUsedItemQuestions";
import KakaoMapPage from "../../commons/kakaoMap";
import * as S from "./index.styled";
import QuestionListUI from "./questionList";

export default function UsedItemDetailUI() {
  const { id } = useQueryIdChecker("usedItemId");
  const { data: questionsData } = useQueryFetchUsedItemQuestions(id);
  const { data } = useQueryFetchUsedItem(id);
  const { onClickCreateUsedItemQuestion } = UsedItemQuestion();
  const { onClickDeleteUsedItem, onClickAddRealBasket, onClickBuyUsedItem } =
    UsedItem();
  const { onClickMoveToPage } = useMoveToPage();
  const [toggleUseditemPick] = useMutationToggleUseditemPick();
  const [myPick, setMyPick] = useState(0);

  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onClickToggleUseditemPick = async () => {
    try {
      const result = await toggleUseditemPick({
        variables: {
          useditemId: id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: id },
          },
        ],
      });
      setMyPick(result.data?.toggleUseditemPick);
    } catch (error) {
      Modal.error({
        content: "로그인 먼저 해주세요",
      });
      router.push("/logIn");
    }
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Top>
          {data?.fetchUseditem.images.length >= 1 ? (
            <S.Top_left_img
              src={`https://storage.googleapis.com/${data.fetchUseditem.images[0]}`}
            />
          ) : (
            <S.Top_left></S.Top_left>
          )}
          <S.Top_right>
            <S.Top_right_top>
              <S.Top_right_top_title>
                {data?.fetchUseditem.name}
              </S.Top_right_top_title>
              <S.Top_right_top_btn>
                <S.Top_right_top_btn_img
                  src="/detail/edit.png"
                  onClick={onClickMoveToPage(`/usedItem/${id}/edit`)}
                />
                <S.Top_right_top_btn_img
                  src="/detail/delete.png"
                  onClick={onClickDeleteUsedItem(id)}
                />
              </S.Top_right_top_btn>
            </S.Top_right_top>
            <S.Top_right_middle>
              <S.Top_right_middle_price>
                {data?.fetchUseditem.price}{" "}
                <span style={{ fontSize: "20px", fontWeight: "400" }}>원</span>
              </S.Top_right_middle_price>
              <S.Top_right_middle_remarks>
                {data?.fetchUseditem.remarks}
              </S.Top_right_middle_remarks>
            </S.Top_right_middle>
            <S.Top_right_bottom>
              <S.Top_right_bottom_like
                onClick={onClickToggleUseditemPick}
                style={{
                  backgroundColor:
                    myPick === 1 || data?.fetchUseditem.pickedCount >= 1
                      ? "black"
                      : "#c9c9c9",
                }}
              >
                {myPick === 1 || data?.fetchUseditem.pickedCount >= 1 ? (
                  <img src="/detail/Pick.png" style={{ marginRight: "8px" }} />
                ) : (
                  <img
                    src="/detail/noPick.png"
                    style={{ marginRight: "8px" }}
                  />
                )}
                {"  "} 찜 {data?.fetchUseditem.pickedCount}
              </S.Top_right_bottom_like>
              <S.Top_right_bottom_basket
                // onClick={onClickAddRealBasket(data?.fetchUseditem)}
                onClick={onClickAddRealBasket(data?.fetchUseditem)}
              >
                장바구니
              </S.Top_right_bottom_basket>
              <S.Top_right_bottom_buy onClick={onClickBuyUsedItem}>
                바로구매
              </S.Top_right_bottom_buy>
            </S.Top_right_bottom>
          </S.Top_right>
        </S.Top>
        <S.Bottom>
          <S.Bottom_left>
            <S.Bottom_left_title>상품정보</S.Bottom_left_title>
            {data?.fetchUseditem.images[1] !== "" &&
            data?.fetchUseditem.images.length > 1 ? (
              <S.Bottom_left_img
                src={`https://storage.googleapis.com/${data?.fetchUseditem.images[1]}`}
              />
            ) : (
              <span></span>
            )}
            <S.Bottom_left_top>
              {typeof window !== "undefined" && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(data?.fetchUseditem.contents),
                  }}
                />
              )}
            </S.Bottom_left_top>
            {/* {data?.fetchUseditem?.useditemAddress || */}

            {!data?.fetchUseditem?.useditemAddress?.address !== true ? (
              <S.Bottom_left_bottom>
                <S.Bottom_left_bottom_text>
                  <EnvironmentOutlined
                    style={{ color: "rgba(0, 0, 0, 0.4)" }}
                  />{" "}
                  거래지역
                </S.Bottom_left_bottom_text>
                <S.Bottom_left_bottom_map>
                  <KakaoMapPage
                    address={data.fetchUseditem.useditemAddress.address}
                  />
                </S.Bottom_left_bottom_map>
              </S.Bottom_left_bottom>
            ) : (
              <S.Bottom_left_bottom>
                저장된 거래 지역이 없습니다.
              </S.Bottom_left_bottom>
            )}
          </S.Bottom_left>
          <S.Bottom_right_wrapper>
            <S.Bottom_right>
              <S.Bottom_right_title>판매자 정보</S.Bottom_right_title>
              <S.Bottom_right_title_top>
                <S.Bottom_right_tilte_top_img src="/detail/nonUser.png" />
                <S.Bottom_right_tilte_top_userName>
                  {data?.fetchUseditem.seller.name}
                </S.Bottom_right_tilte_top_userName>
              </S.Bottom_right_title_top>
              <S.Bottom_right_title_bottom>
                <S.Bottom_right_title_bottom_top>
                  댓글
                </S.Bottom_right_title_bottom_top>
              </S.Bottom_right_title_bottom>
              <S.Bottom_right_question_input {...register("contents")} />
              <S.Bottom_right_question_btn
                onClick={handleSubmit(onClickCreateUsedItemQuestion)}
              >
                작성하기
              </S.Bottom_right_question_btn>
              <QuestionListUI data={questionsData?.fetchUseditemQuestions} />
            </S.Bottom_right>
          </S.Bottom_right_wrapper>
        </S.Bottom>
      </S.Wrapper>
    </S.Container>
  );
}
