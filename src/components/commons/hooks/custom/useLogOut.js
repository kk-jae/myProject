import { useMutationLogOutUser } from "../mutation/useMutationLogOutUser";

export default function useLogOut() {
  const [logoutUser] = useMutationLogOutUser();

  const onClickLogOut = async () => {
    await logoutUser();
    window.location.replace("/usedItem/list");
  };

  return { onClickLogOut };
}
