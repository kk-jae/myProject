import { gql, useQuery } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($useditemId: ID!) {
    fetchUseditemQuestions(useditemId: $useditemId) {
      _id
      contents
      user {
        name
        picture
      }
      useditem {
        _id
      }
      createdAt
    }
  }
`;

export const useQueryFetchUsedItemQuestions = (useditemId) => {
  const query = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId,
    },
  });

  return query;
};
