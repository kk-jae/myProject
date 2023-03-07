import { withAuth } from "../../../../src/components/commons/hocs/withAuth";
import NewUserItemUI from "../../../../src/components/units/write";

function usedItemEditPage() {
  return (
    <>
      <NewUserItemUI isEdit={true} />
    </>
  );
}

export default withAuth(usedItemEditPage);
