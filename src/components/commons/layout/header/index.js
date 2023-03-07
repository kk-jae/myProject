import { useRecoilState } from "recoil";
import { useMoveToPage } from "../../hooks/custom/useMoveToPage";
import * as S from "./index.styled";
import { accessTokenState } from "../../../../commons/stores/index";
import useLogOut from "../../hooks/custom/useLogOut";
import { useQueryFetchUserLoggedIn } from "../../hooks/query/useQueryFetchUserLoggedIn";
import TodayUI from "../../today";
import PaymentUI from "../../payment/index.js";

import { realBasketCount } from "../../../../commons/stores/index";

export default function HeaderPage() {
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickLogOut } = useLogOut();
  const { data } = useQueryFetchUserLoggedIn(); // 로그인 유저 정보
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [realBasketNum, setRealBasketNum] = useRecoilState(realBasketCount);

  return (
    <S.Container>
      <S.Wrapper_top>
        {accessToken ? (
          <S.Top_text>
            <S.Top_text_detail
              // onClick={onClickMoveToPage("/logIn")}
              style={{ fontWeight: "500" }}
            >
              {data?.fetchUserLoggedIn.name}님 포인트{" "}
              {data?.fetchUserLoggedIn.userPoint.amount}P{" "}
            </S.Top_text_detail>
            <PaymentUI />
            <S.Top_text_detail onClick={onClickLogOut}>
              로그아웃
            </S.Top_text_detail>
            <S.Top_text_detail>
              <S.Top_text_detail_basket>장바구니 </S.Top_text_detail_basket>
              <S.Top_text_detail_basketNum>
                {realBasketNum}{" "}
              </S.Top_text_detail_basketNum>
            </S.Top_text_detail>
          </S.Top_text>
        ) : (
          <S.Top_text>
            <S.Top_text_detail onClick={onClickMoveToPage("/logIn")}>
              로그인
            </S.Top_text_detail>
            <S.Top_text_detail onClick={onClickMoveToPage("/sighUp")}>
              회원가입
            </S.Top_text_detail>
            <S.Top_text_detail>
              <S.Top_text_detail_basket>장바구니</S.Top_text_detail_basket>
              <S.Top_text_detail_basketNum>
                {realBasketNum}{" "}
              </S.Top_text_detail_basketNum>
            </S.Top_text_detail>
          </S.Top_text>
        )}
      </S.Wrapper_top>
      <S.Wrapper_bottom>
        <S.Wrapper_bottom_left onClick={onClickMoveToPage("/usedItem/list")}>
          권현재의 중고 마켓
          {/* <img src="/header/logo 1.png" /> */}
        </S.Wrapper_bottom_left>
        <S.Wrapper_bottom_right onClick={onClickMoveToPage("/usedItem/new")}>
          <img src="/header/sell 1.png" style={{ paddingRight: "10px" }} />
          상품 등록하기
        </S.Wrapper_bottom_right>
      </S.Wrapper_bottom>
      <S.Today>
        <TodayUI />
      </S.Today>
    </S.Container>
  );
}
