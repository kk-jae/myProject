import { gql, useMutation } from "@apollo/client";

const DELETE_USED_ITEM = gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

export default function useMutationDeleteUsedItem() {
  const mutation = useMutation(DELETE_USED_ITEM);
  return mutation;
}
