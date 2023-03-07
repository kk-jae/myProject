import { useForm } from "react-hook-form";
import * as S from "./index.styled";
import { schema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMoveToPage } from "../../../commons/hooks/custom/useMoveToPage";
import useLogin from "../../../commons/hooks/custom/useLogin";

export default function LogInUI() {
  const { onClickMoveToPage } = useMoveToPage();
  const { onClickLogIn } = useLogin();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <S.Container>
      <S.Wrapper onSubmit={handleSubmit(onClickLogIn)}>
        <S.Top>
          <S.Top_main>로그인</S.Top_main>
          <S.Top_sub>Login</S.Top_sub>
        </S.Top>
        <S.Middle>
          <S.Middle_wrapper>
            <S.Middle_right_input_wrapper>
              <S.Middle_right
                placeholder="아이디"
                {...register("email")}
                type="email"
                value="kwon@inca.com"
              />
              <S.Error>{formState.errors.email?.message}</S.Error>
            </S.Middle_right_input_wrapper>
          </S.Middle_wrapper>
          <S.Middle_wrapper>
            <S.Middle_right_input_wrapper>
              <S.Middle_right
                placeholder="비밀번호"
                {...register("pw1")}
                type="password"
                value="khj0929sa"
              />
              <S.Error>{formState.errors.pw1?.message}</S.Error>
            </S.Middle_right_input_wrapper>
          </S.Middle_wrapper>
        </S.Middle>
        <S.Bottom>
          <S.Bottom_top>
            <S.Bottom_top_sighup_btn>로그인</S.Bottom_top_sighup_btn>
          </S.Bottom_top>
          <S.Bottom_bottom>
            <S.Bottom_bottom_left>
              아직 계정이 없으신가요?{" "}
            </S.Bottom_bottom_left>
            <S.Bottom_bottom_right onClick={onClickMoveToPage("/sighUp")}>
              회원가입{" "}
            </S.Bottom_bottom_right>
          </S.Bottom_bottom>
        </S.Bottom>
      </S.Wrapper>
    </S.Container>
  );
}
