import { useMoveToPage } from "../../hooks/custom/useMoveToPage";
import * as S from "./index.styled";

export default function LoginHeaderPage() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <S.Container>
      <S.Text onClick={onClickMoveToPage("/usedItem/list")}>
        권현재의 중고마켓
      </S.Text>
    </S.Container>
  );
}
