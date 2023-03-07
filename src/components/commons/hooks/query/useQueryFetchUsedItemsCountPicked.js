import { gql, useQuery } from "@apollo/client";

export const FETCH_USED_ITEMS_COUNT_I_PICKED = gql`
  query {
    fetchUseditemsCountIPicked
  }
`;

export const useQueryFetchUsedItemsCountPicked = () => {
  const query = useQuery(FETCH_USED_ITEMS_COUNT_I_PICKED);

  return query;
};
