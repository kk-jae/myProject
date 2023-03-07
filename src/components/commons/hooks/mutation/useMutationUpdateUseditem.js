import { gql, useMutation } from "@apollo/client";

const UPDATE_USED_ITEM = gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;

export const useMutationUpdateUsedItem = () => {
  const query = useMutation(UPDATE_USED_ITEM);

  return query;
};
