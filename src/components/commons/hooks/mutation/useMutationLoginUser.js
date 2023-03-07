import { gql, useMutation } from "@apollo/client";

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function useMutationLoginUser() {
  const mutation = useMutation(LOGIN_USER);

  return mutation;
}
