import * as yup from "yup";

const regexSpacing = /^[^\s]+$/;
const regexPassword = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;

export const schema = yup.object({
  email: yup.string().required("이메일 아이디를 @까지 정확하게 입력해주세요."),
  pw1: yup
    .string()
    .matches(
      regexPassword,
      "영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."
    )
    .matches(regexSpacing, "비밀번호에는 띄어쓰기를 사용할 수 없어요")
    .min(8, "비밀번호는 최소 8글자입니다.")
    .max(16, "비밀번호는 최대 16글자입니다.")
    .required("비밀번호를 입력해주세요"),
});
