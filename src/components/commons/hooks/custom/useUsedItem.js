import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { useMutationCreateUseditem } from "../mutation/useMutationCreateUseditem";
import useMutationDeleteUsedItem from "../mutation/useMutationDeleteUseditem";
import { useMutationUpdateUsedItem } from "../mutation/useMutationUpdateUseditem";
import { useMutationUploadFile } from "../mutation/useMutationUploadFile";
import { realBasketCount } from "../../../../commons/stores";
import { useQueryIdChecker } from "./useQueryIdChecker";
import { useMutationCreatePointTransactionOfBuyingAndSelling } from "../mutation/useMutationCreatePointTransactionOfBuyingAndSelling";
import {
  FETCH_USER_LOGGEDIN,
  useQueryFetchUserLoggedIn,
} from "../query/useQueryFetchUserLoggedIn";

export default function UsedItem() {
  const router = useRouter();
  const [imgUrl1, setImgUrl1] = useState("");
  const [imgUrl2, setImgUrl2] = useState("");
  const [uploadFile] = useMutationUploadFile();
  const [createUseditem] = useMutationCreateUseditem();
  const [updateUseditem] = useMutationUpdateUsedItem();
  const [deleteUseditem] = useMutationDeleteUsedItem();
  const { id } = useQueryIdChecker("usedItemId");
  const [buyUsedItem] = useMutationCreatePointTransactionOfBuyingAndSelling();
  const { data: userData } = useQueryFetchUserLoggedIn();

  const onChangeUploadFile1 = async (event) => {
    const result = await uploadFile({
      variables: {
        file: event.target.files?.[0],
      },
    });
    setImgUrl1(result.data.uploadFile.url ?? "");
  };
  const onChangeUploadFile2 = async (event) => {
    const result = await uploadFile({
      variables: {
        file: event.target.files?.[0],
      },
    });
    setImgUrl2(result.data.uploadFile.url ?? "");
  };

  const onClickCreateUsedItem = (zipcode) => (address) => async (data) => {
    if (
      !data.name ||
      !data.remarks ||
      !data.contents ||
      !data.price ||
      !imgUrl1 ||
      // !data.useditemAddress ||
      !data.tags
    ) {
      Modal.error({
        content: "내용을 모두 입력해주세요",
      });
      return;
    }

    try {
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            images: [imgUrl1, imgUrl2],
            useditemAddress: {
              zipcode,
              address,
              addressDetail: data.addressDetail,
            },
            tags: data.tags,
          },
        },
      });
      Modal.success({
        content: "중고 상품 등록에 성공하였습니다.",
      });
      window.location.replace("/usedItem/list");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  const onClickUpdateUsedItem =
    (addressZipCode) => (address) => (isEditData) => async (data) => {
      const updateUseditemInput = {};
      updateUseditemInput.images = [];
      updateUseditemInput.useditemAddress = {};

      updateUseditemInput.name = data.name;
      updateUseditemInput.remarks = data.remarks;
      updateUseditemInput.price = Number(data.price);
      updateUseditemInput.tags = data.tags;
      updateUseditemInput.useditemAddress.addressDetail = data.addressDetail;

      if (!imgUrl1) {
        updateUseditemInput.images.push(isEditData.fetchUseditem.images[0]);
      } else {
        updateUseditemInput.images.push(imgUrl1);
      }

      if (!imgUrl2) {
        updateUseditemInput.images.push(isEditData.fetchUseditem.images[1]);
      } else {
        updateUseditemInput.images.push(imgUrl2);
      }

      if (isEditData.fetchUseditem.contents === data.contents) {
        updateUseditemInput.contents = isEditData.fetchUseditem.contents; // 같을 때는 아무거나 상관 없음
      } else {
        updateUseditemInput.contents = data.contents; // 두개가 같지 않다면 data의 contents가 나가야함
      }

      if (!address) {
        // 아무것도 수정 되지 않으면 기존 값 가져오기
        updateUseditemInput.useditemAddress.address =
          isEditData.fetchUseditem.useditemAddress.address;
      } else {
        // 수정되면 수정된 address 가져오기 (write에서 받아옴)
        updateUseditemInput.useditemAddress.address = address;
      }

      if (!addressZipCode) {
        // 아무것도 수정 되지 않으면 기존 값 가져오기
        updateUseditemInput.useditemAddress.zipcode =
          isEditData.fetchUseditem.useditemAddress.zipcode;
      } else {
        // 수정되면 수정된 address 가져오기 (write에서 받아옴)
        updateUseditemInput.useditemAddress.zipcode = addressZipCode;
      }

      // 주소 수정 : data는 안봐도됨 (register 안씀)
      try {
        await updateUseditem({
          variables: {
            updateUseditemInput: updateUseditemInput,
            useditemId: id,
          },
        });
        Modal.success({
          content: "게시물이 수정되었습니다.",
        });
        window.location.replace(`/usedItem/${id}`);
      } catch (error) {
        if (error instanceof Error)
          Modal.error({
            content: error.message,
          });
      }
    };

  const onClickDeleteUsedItem = (id) => async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: id,
        },
      });
      Modal.success({ content: "중고 상품이 삭제되었습니다." });
      router.push("/usedItem/list");
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  const [realBasketNum, setRealBasketNum] = useRecoilState(realBasketCount);

  const onClickAddRealBasket = (realBasket) => () => {
    try {
      const realBaskets = JSON.parse(
        localStorage.getItem("realBaskets") ?? "[]"
      );

      const temp = realBaskets.filter((el) => el._id === realBasket._id);
      if (temp.length >= 1) {
        Modal.error({
          content: "이미 담으신 물품입니다.",
        });
        return;
      }
      realBaskets.push(realBasket);
      localStorage.setItem("realBaskets", JSON.stringify(realBaskets));
      setRealBasketNum(JSON.parse(localStorage.realBaskets).length);
      Modal.success({
        content: "상품을 저장하였습니다.",
      });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: message.error,
        });
      }
    }
  };

  const onClickBuyUsedItem = async () => {
    try {
      const result = await buyUsedItem({
        variables: {
          useritemId: id,
        },
        refetchQueries: [
          {
            query: FETCH_USER_LOGGEDIN,
          },
        ],
      });
      Modal.success({
        content: "상품이 구매되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({
          content: error.message,
        });
    }
  };

  return {
    onClickCreateUsedItem,
    onClickDeleteUsedItem,
    onChangeUploadFile1,
    onChangeUploadFile2,
    onClickUpdateUsedItem,
    imgUrl1,
    imgUrl2,
    onClickAddRealBasket,
    onClickBuyUsedItem,
  };
}
