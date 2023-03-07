import { useQueryFetchUseditems } from "../../commons/hooks/query/useQueryFetchUsedItems";
import * as S from "./index.styled";
import InfiniteScroll from "react-infinite-scroller";
import { getDate } from "../../../commons/libraries/utils";
import { useMoveToPage } from "../../commons/hooks/custom/useMoveToPage";
import { useQueryIdChecker } from "../../commons/hooks/custom/useQueryIdChecker";

export default function ListUI() {
  const { data, fetchMore } = useQueryFetchUseditems();
  const { onClickMoveToPageAddBasket } = useMoveToPage();

  const loadFunc = () => {
    if (data === undefined) return;
    void fetchMore({
      variables: {
        page: Math.ceil((data?.fetchUseditems.length ?? 10) / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult.fetchUseditems === undefined) {
          return {
            fetchUseditems: [...prev.fetchUseditems],
          };
        }
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <S.Container>
      <InfiniteScroll pageStart={0} loadMore={loadFunc} hasMore={true}>
        <S.Wrapper>
          {data?.fetchUseditems.map((el, index) => (
            <S.Wrapper_Useditem
              key={index}
              onClick={onClickMoveToPageAddBasket(el)}
            >
              <S.Useditem_img
                src={
                  el.images?.[0]
                    ? `https://storage.googleapis.com/${el.images[0]}`
                    : "/list/nonimg.png"
                }
                alt=""
              />
              <S.Useditem_text_Wrapper>
                <S.Useditem_name>{el.name}</S.Useditem_name>
                <S.Useditem_price>{el.price} 원</S.Useditem_price>
                <S.Useditem_time>{getDate(el.createdAt)}</S.Useditem_time>
              </S.Useditem_text_Wrapper>
            </S.Wrapper_Useditem>
          ))}
        </S.Wrapper>
      </InfiniteScroll>
    </S.Container>
  );
}
