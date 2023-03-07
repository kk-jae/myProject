import { useRouter } from "next/router";
import LayoutBannerUI from "./carousel";
import HeaderPage from "./header";
import LoginHeaderPage from "./loginHeader";

// 특정페이지에 Layout 숨기기
const OPEN_LOGIN_HEADERS = ["/sighUp", "/logIn"];

const HIDDEN_MAIN_HEADER = ["/sighUp", "/logIn"];

export default function Layout(props) {
  const router = useRouter();

  const isHiddenMainHeader = HIDDEN_MAIN_HEADER.includes(router.asPath);
  const isOpenLoginHeader = HIDDEN_MAIN_HEADER.includes(router.asPath);

  return (
    <>
      {!isHiddenMainHeader && <HeaderPage />}
      {isOpenLoginHeader && <LoginHeaderPage />}
      {/* <LayoutBannerUI /> */}
      <div>{props.children} </div>
    </>
  );
}
