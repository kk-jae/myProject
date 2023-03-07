import { useForm } from "react-hook-form";
import * as S from "./index.styled";
import { schema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import useSighUp from "../../../commons/hooks/custom/useSighUp";

export default function SighUpUI() {
  const { onClickCreateUser } = useSighUp();
  const { onClickMoveToPage } = useMoveToPage();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <S.Container>
      <S.Wrapper onSubmit={handleSubmit(onClickCreateUser)}>
        <S.Top>
          <S.Top_main>회원가입</S.Top_main>
          <S.Top_sub>Sigh up</S.Top_sub>
        </S.Top>
        <S.Middle>
          <S.Middle_wrapper>
            <S.Middle_left>아이디</S.Middle_left>
            <S.Middle_right_input_wrapper>
              <S.Middle_right
                placeholder="이메일 아이디를 @까지 정확하게 입력하세요"
                {...register("email")}
                type="email"
              />
              <S.Error>{formState.errors.email?.message}</S.Error>
            </S.Middle_right_input_wrapper>
          </S.Middle_wrapper>
          <S.Middle_wrapper>
            <S.Middle_left>비밀번호</S.Middle_left>
            <S.Middle_right_input_wrapper>
              <S.Middle_right
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                {...register("pw1")}
                type="password"
              />
              <S.Error>{formState.errors.pw1?.message}</S.Error>
            </S.Middle_right_input_wrapper>
          </S.Middle_wrapper>
          <S.Middle_wrapper>
            <S.Middle_left>비밀번호 확인</S.Middle_left>
            <S.Middle_right_input_wrapper>
              <S.Middle_right
                placeholder="영문+숫자 조합 8~16자리를 입력해주세요."
                {...register("pw2")}
                type="password"
              />
              <S.Error>{formState.errors.pw2?.message}</S.Error>
            </S.Middle_right_input_wrapper>
          </S.Middle_wrapper>
          <S.Middle_wrapper>
            <S.Middle_left>이름</S.Middle_left>
            <S.Middle_right_input_wrapper>
              <S.Middle_right placeholder="Ex) 홍길동" {...register("name")} />
              <S.Error>{formState.errors.name?.message}</S.Error>
            </S.Middle_right_input_wrapper>
          </S.Middle_wrapper>
        </S.Middle>
        <S.Bottom>
          <S.Bottom_top>
            <S.Bottom_top_sighup_btn>회원가입하기</S.Bottom_top_sighup_btn>
            <S.Bottom_top_cancel_btn
              onClick={onClickMoveToPage("/Useditem/list")}
            >
              취소
            </S.Bottom_top_cancel_btn>
          </S.Bottom_top>
          <S.Bottom_bottom>
            <S.Bottom_bottom_left>
              이미 아이디가 있으신가요?{" "}
            </S.Bottom_bottom_left>
            <S.Bottom_bottom_right onClick={onClickMoveToPage("/logIn")}>
              로그인{" "}
            </S.Bottom_bottom_right>
          </S.Bottom_bottom>
        </S.Bottom>
      </S.Wrapper>
    </S.Container>
  );
}
