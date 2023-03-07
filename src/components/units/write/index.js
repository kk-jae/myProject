import { Modal } from "antd";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
import { useQueryIdChecker } from "../../commons/hooks/custom/useQueryIdChecker";
import UsedItem from "../../commons/hooks/custom/useUsedItem";
import { useQueryFetchUsedItem } from "../../commons/hooks/query/useQueryFetchUsedItem";
import KakaoMapPage from "../../commons/kakaoMap";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});
import {
  onClickMoveToPage,
  useMoveToPage,
} from "../../commons/hooks/custom/useMoveToPage";

import * as S from "./index.styled";

export default function NewUserItemUI(props) {
  const { register, handleSubmit, setValue, trigger } = useForm();
  const {
    onChangeUploadFile1,
    onChangeUploadFile2,
    imgUrl1,
    imgUrl2,
    onClickCreateUsedItem,
    onClickUpdateUsedItem,
  } = UsedItem();
  const { onClickMoveToPage } = useMoveToPage();
  const { id } = useQueryIdChecker("usedItemId");
  const { data: isEditData } = useQueryFetchUsedItem(id);

  const [editContents, setEditContents] = useState("");

  const onChangeContents = (value) => {
    setValue("contents", value === "<p><br></p>" ? "" : value);
    void trigger("contents");
  };

  const fileRef1 = useRef(null);
  const fileRef2 = useRef(null);

  const onClickRef1 = () => {
    fileRef1.current?.click();
  };
  const onClickRef2 = () => {
    fileRef2.current?.click();
  };

  const [addressIsModalOpen, setAddressIsModalOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [addressZipCode, setAddressZipCode] = useState("");
  // const [addressDetail, setAddressDetail] = useState("");

  const AddressHandleComplete = (data) => {
    setAddressIsModalOpen(false);
    setAddressZipCode(data?.zonecode);
    setAddress(data?.address);
  };

  const onChangeAddressDetail = (event) => {
    setAddressDetail(event.target.value);
  };

  const AddressShowModal = () => {
    setAddressIsModalOpen((prev) => !prev);
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.Top>
          <S.Top_Text>상품 {props.isEdit ? "수정" : "등록"}</S.Top_Text>
        </S.Top>
        <S.Middle>
          <S.Middle_Top>
            <S.Middle_top_wrapper>
              <S.Middle_top_wrapper_left>상품명</S.Middle_top_wrapper_left>
              <S.Middle_top_wrapper_right
                placeholder="상품명을 작성해주세요"
                {...register("name")}
                defaultValue={isEditData?.fetchUseditem.name}
              />
            </S.Middle_top_wrapper>
            <S.Middle_top_wrapper>
              <S.Middle_top_wrapper_left>상품 요약</S.Middle_top_wrapper_left>
              <S.Middle_top_wrapper_right
                placeholder="상품요약을 작성해주세요"
                {...register("remarks")}
                defaultValue={isEditData?.fetchUseditem.remarks}
              />
            </S.Middle_top_wrapper>
            <S.Middle_top_wrapper>
              <S.Middle_top_wrapper_left>상품 내용</S.Middle_top_wrapper_left>
              <S.ReactQuill_wrapper>
                <ReactQuill
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  onChange={onChangeContents}
                  placeholder="상품을 설명해주세요"
                  // defaultValue={isEditData?.fetchUseditem.contents}
                  defaultValue={isEditData?.fetchUseditem.contents}
                />
              </S.ReactQuill_wrapper>
              {/* <S.Middle_top_wrapper_right /> */}
            </S.Middle_top_wrapper>
            <S.Middle_top_wrapper
              style={{
                marginTop: "470px",
              }}
            >
              <S.Middle_top_wrapper_left>판매가격</S.Middle_top_wrapper_left>
              <S.Middle_top_wrapper_right
                placeholder="판매 가격을 입력해주세요"
                {...register("price")}
                defaultValue={isEditData?.fetchUseditem.price}
              />
            </S.Middle_top_wrapper>
          </S.Middle_Top>
          <S.Middle_Middle>
            <S.Middle_middle_wrapper>
              <S.Middle_middle_wrapper_box>
                <S.Middle_middle_text>거래 위치</S.Middle_middle_text>
                <S.Middle_middle_address_detail>
                  <S.AdrTop>
                    <S.Address_kakao>
                      <KakaoMapPage
                        address={address}
                        isEditData={
                          isEditData?.fetchUseditem.useditemAddress.address
                        }
                        AddressShowModal={AddressShowModal}
                      />
                    </S.Address_kakao>
                    <S.Address_search_wrapper>
                      <S.Address_search>
                        <S.AdrTopInput
                          placeholder="07250"
                          readOnly
                          // value={addressZipCode}
                          value={
                            addressZipCode
                              ? addressZipCode
                              : isEditData?.fetchUseditem.useditemAddress
                                  .zipcode ?? ""
                          }
                        />
                        <S.AdrTopBtn onClick={AddressShowModal}>
                          우편번호 검색
                        </S.AdrTopBtn>
                        {addressIsModalOpen && (
                          <Modal
                            open={true}
                            onOk={AddressShowModal}
                            onCancel={AddressShowModal}
                          >
                            <DaumPostcodeEmbed
                              onComplete={AddressHandleComplete}
                            />
                          </Modal>
                        )}
                      </S.Address_search>
                      <S.AdrInput
                        readOnly
                        value={
                          address
                            ? address
                            : isEditData?.fetchUseditem.useditemAddress
                                .address ?? ""
                        }
                        placeholder="주소를 검색하세요"
                      />

                      <S.AdrInput
                        onChange={onChangeAddressDetail}
                        placeholder="상세주소를 입력하세요"
                        defaultValue={
                          isEditData?.fetchUseditem.useditemAddress !== null &&
                          isEditData?.fetchUseditem.useditemAddress
                            .addressDetail
                            ? isEditData?.fetchUseditem.useditemAddress
                                .addressDetail
                            : ""
                        }
                        {...register("addressDetail")}
                      />
                    </S.Address_search_wrapper>
                  </S.AdrTop>
                </S.Middle_middle_address_detail>
              </S.Middle_middle_wrapper_box>
              <S.Middle_middle_wrapper_box>
                <S.Middle_middle_text>사진 첨부</S.Middle_middle_text>
                <S.imgbox_container>
                  {imgUrl1 ? (
                    <S.Middle_middle_imgbox onClick={onClickRef1}>
                      <S.Img
                        src={`https://storage.googleapis.com/${imgUrl1}`}
                      />
                      <S.ImgboxInput
                        type="file"
                        onChange={onChangeUploadFile1}
                        ref={fileRef1}
                      />
                    </S.Middle_middle_imgbox>
                  ) : (
                    (
                      <S.Middle_middle_imgbox onClick={onClickRef1}>
                        <S.Img
                          src={`https://storage.googleapis.com/${isEditData?.fetchUseditem.images[0]}`}
                        />
                        <S.ImgboxInput
                          type="file"
                          onChange={onChangeUploadFile1}
                          ref={fileRef1}
                        />
                      </S.Middle_middle_imgbox>
                    ) ?? (
                      <S.Middle_middle_imgbox onClick={onClickRef1}>
                        + <br /> Upload
                        <S.ImgboxInput
                          type="file"
                          onChange={onChangeUploadFile1}
                          ref={fileRef1}
                        />
                      </S.Middle_middle_imgbox>
                    )
                  )}{" "}
                  {imgUrl2 ? (
                    <S.Middle_middle_imgbox onClick={onClickRef2}>
                      <S.Img
                        src={`https://storage.googleapis.com/${imgUrl2}`}
                      />
                      <S.ImgboxInput
                        type="file"
                        onChange={onChangeUploadFile2}
                        ref={fileRef2}
                      />
                    </S.Middle_middle_imgbox>
                  ) : (
                    (
                      <S.Middle_middle_imgbox onClick={onClickRef2}>
                        <S.Img
                          src={`https://storage.googleapis.com/${isEditData?.fetchUseditem.images[1]}`}
                        />
                        <S.ImgboxInput
                          type="file"
                          onChange={onChangeUploadFile2}
                          ref={fileRef2}
                        />
                      </S.Middle_middle_imgbox>
                    ) ?? (
                      <S.Middle_middle_imgbox onClick={onClickRef2}>
                        + <br /> Upload
                        <S.ImgboxInput
                          type="file"
                          onChange={onChangeUploadFile2}
                          ref={fileRef2}
                        />
                      </S.Middle_middle_imgbox>
                    )
                  )}
                </S.imgbox_container>
              </S.Middle_middle_wrapper_box>
            </S.Middle_middle_wrapper>
          </S.Middle_Middle>
        </S.Middle>
        <S.Bottom>
          <S.Bottom_left
            onClick={
              props.isEdit
                ? onClickMoveToPage(`/usedItem/${id}`)
                : onClickMoveToPage("/usedItem/list")
            }
          >
            취소
          </S.Bottom_left>
          <S.Bottom_right
            onClick={
              props.isEdit
                ? handleSubmit(
                    onClickUpdateUsedItem(addressZipCode)(address)(isEditData)
                  )
                : handleSubmit(onClickCreateUsedItem(addressZipCode)(address))
            }
          >
            등록
          </S.Bottom_right>
        </S.Bottom>
      </S.Wrapper>
    </S.Container>
  );
}
