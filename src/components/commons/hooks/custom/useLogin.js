import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/stores";
import useMutationLoginUser from "../mutation/useMutationLoginUser";

export default function useLogin() {
  const router = useRouter();

  const [logIn] = useMutationLoginUser();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onClickLogIn = async (data) => {
    try {
      const result = await logIn({
        variables: {
          email: data.email,
          password: data.pw1,
        },
      });
      const accessToken = result.data?.loginUser.accessToken;
      setAccessToken(accessToken);
      localStorage.setItem("accessToken", accessToken);
      Modal.success({
        content: "로그인에 성공하였습니다.",
      });
      window.location.replace("/usedItem/list");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  return {
    onClickLogIn,
  };
}
