import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { TodayUsedItemDefault } from "../../../commons/stores";
import * as S from "./index.styled";

export default function TodayUI() {
  // const [TodayUsedItem, setTodayUsedItem] = useState();
  const [TodayUsedItem, setTodayUsedItem] =
    useRecoilState(TodayUsedItemDefault);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const getDataLocalS = (basket) => {
        let localData = localStorage.getItem(basket);
        if (localData === null || localData === undefined) {
          return []; // or some other default value
        }
        return JSON.parse(localData);
      };
      let localData = getDataLocalS("baskets");
      setTodayUsedItem(localData);
    }
  }, [router]);

  return (
    <S.Container>
      <S.Text>최근 본 상품</S.Text>
      {TodayUsedItem.length === 0 ? (
        <S.NonProduct></S.NonProduct>
      ) : (
        <S.Product
          src={`https://storage.googleapis.com/${TodayUsedItem?.[0]?.images[0]}`}
          alt={`상품명 : ${TodayUsedItem?.[0]?.name}`}
        />
      )}
      {TodayUsedItem.length < 2 ? (
        <S.NonProduct></S.NonProduct>
      ) : (
        <S.Product
          src={`https://storage.googleapis.com/${TodayUsedItem?.[1]?.images[0]}`}
          alt={`상품명 : ${TodayUsedItem?.[0]?.name}`}
        />
      )}
      {TodayUsedItem.length < 3 ? (
        <S.NonProduct></S.NonProduct>
      ) : (
        <S.Product
          src={`https://storage.googleapis.com/${TodayUsedItem?.[2]?.images[0]}`}
          alt={`상품명 : ${TodayUsedItem?.[0]?.name}`}
        />
      )}
      {/* <S.Product
        src={`https://storage.googleapis.com/${TodayUsedItem?.[0].images[0]}`}
        alt={TodayUsedItem?.[0].name}
      /> */}
      {/* <S.Product
        src={`https://storage.googleapis.com/${TodayUsedItem?.[1].images[0]}`}
        alt={TodayUsedItem?.[1].name}
      />

      <S.Product
        src={`https://storage.googleapis.com/${TodayUsedItem?.[2].images[0]}`}
        alt={TodayUsedItem?.[2].name}
      /> */}
    </S.Container>
  );
}
