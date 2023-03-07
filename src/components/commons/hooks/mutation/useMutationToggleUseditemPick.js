import { gql, useMutation } from "@apollo/client";

const TOGGLE_USED_ITEM_PICK = gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;

export const useMutationToggleUseditemPick = () => {
  const mutation = useMutation(TOGGLE_USED_ITEM_PICK);

  return mutation;
};
