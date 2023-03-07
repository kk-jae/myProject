import { gql, useQuery } from "@apollo/client";

export const FETCH_USER_LOGGEDIN = gql`
  query {
    fetchUserLoggedIn {
      _id
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;

export const useQueryFetchUserLoggedIn = () => {
  const query = useQuery(FETCH_USER_LOGGEDIN);

  return query;
};
