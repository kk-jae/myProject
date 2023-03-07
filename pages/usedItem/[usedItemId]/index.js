import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import UsedItemDetailUI from "../../../src/components/units/detail";

function usedItemDetailPage() {
  return (
    <>
      <UsedItemDetailUI />
    </>
  );
}

export default withAuth(usedItemDetailPage);
