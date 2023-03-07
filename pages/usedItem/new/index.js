import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import NewUserItemUI from "../../../src/components/units/write";

function NewUsedItemPage() {
  return (
    <>
      <NewUserItemUI isEdit={false} />
    </>
  );
}

export default withAuth(NewUsedItemPage);
