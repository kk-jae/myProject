import { message, Modal } from "antd";
import { useRouter } from "next/router";
import useMutationCreateUser from "../mutation/useMutationCreateUser";

export default function useSighUp() {
  const [createUser] = useMutationCreateUser();
  const router = useRouter();

  const onClickCreateUser = async (data) => {
    if (data.pw1 !== data.pw2) {
      Modal.error({
        content: "비밀번호가 다릅니다.",
      });
      return;
    }
    try {
      await createUser({
        variables: {
          createUserInput: {
            email: data.email,
            password: data.pw1,
            name: data.name,
          },
        },
      });
      Modal.success({
        content: "회원가입에 성공하였습니다.",
      });
      router.push("/logIn");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: message.error,
        });
      }
    }
  };

  return {
    onClickCreateUser,
  };
}
