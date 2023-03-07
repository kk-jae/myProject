const { gql, useMutation } = require("@apollo/client");

const UPDATE_USEDITEM_QUESTION = gql`
  mutation updateUseditemQuestionInput(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;

export default function useMutationUpdateUseditemQuestion() {
  const mutation = useMutation(UPDATE_USEDITEM_QUESTION);

  return mutation;
}
