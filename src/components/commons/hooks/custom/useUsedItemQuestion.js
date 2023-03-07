import { Modal } from "antd";
import { useMutationCreateUseditemQuestion } from "../mutation/useMutationCreateUseditemQuestion";
import useMutationDeleteUseditemQuestion from "../mutation/useMutationDeleteUseditemQuestion";
import useMutationUpdateUseditemQuestion from "../mutation/useMutationUpdateUseditemQuestion";
import { FETCH_USED_ITEM_QUESTIONS } from "../query/useQueryFetchUsedItemQuestions";
import { useQueryIdChecker } from "./useQueryIdChecker";

export default function UsedItemQuestion() {
  const [createUseditemQuestion] = useMutationCreateUseditemQuestion();
  const [deleteUseditemQuestion] = useMutationDeleteUseditemQuestion();
  const [updateUseditemQuestion] = useMutationUpdateUseditemQuestion();
  const { id } = useQueryIdChecker("usedItemId");

  const onClickCreateUsedItemQuestion = async (data) => {
    try {
      await createUseditemQuestion({
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemId: id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: id },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  const onClickDeleteUsedItemQuestion = (useditemQuestionId) => async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: id },
          },
        ],
      });
      Modal.success({
        content: "댓글이 삭제되었습니다.",
      });
    } catch (error) {
      if (error instanceof Error) {
        Modal.error({
          content: error.message,
        });
      }
    }
  };

  const onClickUpdateUsedItemQuestion =
    (el, editContents, setMyIndex) => async () => {
      try {
        const updateUseditemQuestionInput = {};
        if (!editContents === true) {
          updateUseditemQuestionInput.contents = el.contents;
        } else {
          updateUseditemQuestionInput.contents = editContents;
        }
        await updateUseditemQuestion({
          variables: {
            updateUseditemQuestionInput: updateUseditemQuestionInput,
            useditemQuestionId: el._id,
          },
          refetchQueries: [
            {
              query: FETCH_USED_ITEM_QUESTIONS,
              variables: {
                useditemId: id,
              },
            },
          ],
        });
        setMyIndex(-1);
        Modal.success({
          content: "댓글이 수정되었습니다.",
        });
      } catch (error) {
        if (error instanceof Error) {
          Modal.error({
            content: error.message,
          });
        }
      }
    };

  return {
    onClickUpdateUsedItemQuestion,
    onClickCreateUsedItemQuestion,
    onClickDeleteUsedItemQuestion,
  };
}
