import { gql, useMutation } from "@apollo/client";

const DELETE_USED_ITEM_QUESTION = gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;

export default function useMutationDeleteUseditemQuestion() {
  const mutation = useMutation(DELETE_USED_ITEM_QUESTION);

  return mutation;
}
