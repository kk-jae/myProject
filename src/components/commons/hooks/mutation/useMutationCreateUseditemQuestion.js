import { gql, useMutation } from "@apollo/client";

const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      useditem {
        _id
        # λκΈμ id
      }
    }
  }
`;

export const useMutationCreateUseditemQuestion = () => {
  const mutation = useMutation(CREATE_USED_ITEM_QUESTION);

  return mutation;
};
