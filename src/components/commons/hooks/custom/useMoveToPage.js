import { useRouter } from "next/router";

export const useMoveToPage = () => {
  const router = useRouter();

  const onClickMoveToPage = (url) => () => {
    router.push(url);
  };

  const onClickMoveToPageAddBasket = (el) => () => {
    router.push(`/usedItem/${el._id}`);
    const baskets = JSON.parse(localStorage.getItem("baskets") ?? "[]");
    if (baskets.length > 2) {
      baskets.shift();
    }
    baskets.push(el);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return {
    onClickMoveToPage,
    onClickMoveToPageAddBasket,
  };
};
