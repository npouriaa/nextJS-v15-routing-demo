import { Card } from "@/components/Card";

import Link from "next/link";

const NotificationsDefault = () => {
  return (
    <Card>
      <div className="flex flex-col">
        <div>Notifications Default</div>
        <div>
          <Link className="text-blue-500" href="/complex-dashboard/archived">Archived</Link>
        </div>
      </div>
    </Card>
  );
};

export default NotificationsDefault;
