import { DownOutlined } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useQueryFetchUserLoggedIn } from "../hooks/query/useQueryFetchUserLoggedIn";
import * as S from "./index.styled";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;

export default function PaymentUI() {
  const { data } = useQueryFetchUserLoggedIn();
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const router = useRouter();

  const [showModal, setShowModal] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const [choicePrice, setChoicePrice] = useState("포인트 선택");

  const handleClose = () => {
    setShowModal(false);
    setChoicePrice("포인트 선택");
  };
  const handleShow = () => {
    setShowModal(true);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "464px",
      // height: "316px",
      borderRadius: "20px",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    },
  };

  // const [addPrice, setAddPrice] = useState(0);

  // const onChangeClickPrice = (event) => {
  //   setAddPrice(Number(event.target.value));
  // };

  const onClickPayment = () => {
    setChoicePrice("포인트 선택");
    const IMP = window.IMP;
    IMP.init("imp49910675");
    setShowModal(false);
    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 겹치면 안됩니다. 주석하면 자동으로 생성됨
        name: "중고마켓 마일리지 충전",
        amount: Number(choicePrice),
        buyer_email: "gildong@gmail.com",
        buyer_name: data?.fetchUserLoggedIn.name,
        // buyer_tel: "010-2030-1309",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
      },

      async (rsp) => {
        if (rsp.success === true) {
          await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          alert("결제가 완료되었습니다.");
          window.location.replace("/usedItem/list");
        } else {
          alert("결제 실패");
        }
      }
    );
  };
  const onClickIsActive = () => {
    setIsActive((prev) => !prev);
  };

  const onClickChoicePrice = (event) => {
    setChoicePrice(event.currentTarget.id);
    setIsActive((prev) => !prev);
  };

  return (
    <>
      <Script src="https://cdn.iamport.kr/v1/iamport.js"></Script>
      <S.Container onClick={handleShow}>충전</S.Container>
      <Modal
        isOpen={showModal}
        onRequestClose={handleClose}
        style={customStyles}
      >
        <S.Modal_Container>
          <S.Cancel_wrapper>
            <S.Close onClick={handleClose}>X</S.Close>
          </S.Cancel_wrapper>
          <S.Top>충전하실 금액을 선택해주세요!</S.Top>
          <S.Middle>
            <S.Middle_top onClick={onClickIsActive}>
              <S.Middle_top_left
                style={{
                  color: choicePrice === "포인트 선택" ? "#828282" : "black",
                  fontWeight: choicePrice === "포인트 선택" ? "400" : "700",
                }}
              >
                {choicePrice}
              </S.Middle_top_left>
              <S.Middle_top_right>
                <DownOutlined />
              </S.Middle_top_right>
            </S.Middle_top>
            {isActive ? (
              <S.Middle_bottom>
                <S.Middle_price_item id={100} onClick={onClickChoicePrice}>
                  100
                </S.Middle_price_item>
                <S.Middle_price_item id={500} onClick={onClickChoicePrice}>
                  500
                </S.Middle_price_item>
                <S.Middle_price_item id={2000} onClick={onClickChoicePrice}>
                  2,000
                </S.Middle_price_item>
                <S.Middle_price_item id={5000} onClick={onClickChoicePrice}>
                  5,000
                </S.Middle_price_item>
              </S.Middle_bottom>
            ) : (
              <S.Middle_off></S.Middle_off>
            )}
          </S.Middle>
          <S.Bottom onClick={onClickPayment}>충전하기</S.Bottom>
        </S.Modal_Container>
      </Modal>
    </>
  );
}
