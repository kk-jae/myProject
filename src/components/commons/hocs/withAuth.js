import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/stores";

export const withAuth = (컴포넌트) => (프롭스) => {
  const router = useRouter();
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

  useEffect(() => {
    void aaa.toPromise().then((newAccessToken) => {
      // console.log(newAccessToken);
      if (newAccessToken === undefined) {
        Modal.error({
          content: "로그인이 필요합니다.",
        });

        void router.push("/logIn");
      }
    });
  }, []);

  return <컴포넌트 {...프롭스} />;
};
