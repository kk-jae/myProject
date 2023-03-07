import { gql, useQuery } from "@apollo/client";

const FETCH_USED_ITEM_I_PICKED = gql`
  query {
    fetchUseditemsIPicked {
      _id
      pickedCount
    }
  }
`;

export const useQueryfetchUseditemsIPicked = () => {
  const query = useQuery(FETCH_USED_ITEM_I_PICKED);

  return query;
};
