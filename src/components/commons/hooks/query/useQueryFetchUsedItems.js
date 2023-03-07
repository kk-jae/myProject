import { gql, useQuery } from "@apollo/client";

const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
      _id
      name
      remarks
      contents
      price
      images
      createdAt
      seller {
        name
      }
    }
  }
`;

export const useQueryFetchUseditems = () => {
  const query = useQuery(FETCH_USED_ITEMS);

  return query;
};
