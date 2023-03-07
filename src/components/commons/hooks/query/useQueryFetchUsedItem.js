import { gql, useQuery } from "@apollo/client";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      images
      tags
      createdAt
      useditemAddress {
        address
        zipcode
        addressDetail
      }
      seller {
        name
      }
      pickedCount
    }
  }
`;

export const useQueryFetchUsedItem = (id) => {
  const query = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: id,
    },
  });
  return query;
};
