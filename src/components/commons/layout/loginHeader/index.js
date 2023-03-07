import { useMoveToPage } from "../../hooks/custom/useMoveToPage";
import * as S from "./index.styled";

export default function LoginHeaderPage() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Container>
      <S.Logo
        src="/header/whitelogo 1.png"
        onClick={onClickMoveToPage("/usedItem/list")}
      />
    </S.Container>
  );
}
