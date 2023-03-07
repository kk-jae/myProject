import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      picture
    }
  }
`;

export default function useMutationCreateUser() {
  const mutation = useMutation(CREATE_USER);

  return mutation;
}
