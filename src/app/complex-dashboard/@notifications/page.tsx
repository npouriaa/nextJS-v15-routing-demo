import { Card } from "@/components/Card";

import Link from "next/link";

const Notifications = () => {
  return (
    <Card>
      <div className="flex flex-col">
        <div>Notifications</div>
        <div>
          <Link className="text-blue-500" href="/complex-dashboard/archived">Archived</Link>
        </div>
      </div>
    </Card>
  );
};

export default Notifications;
