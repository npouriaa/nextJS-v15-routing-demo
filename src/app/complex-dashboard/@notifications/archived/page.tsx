import { Card } from "@/components/Card";

import Link from "next/link";

const ArchivedNotifications = () => {
  return (
    <Card>
      <div className="flex flex-col">
        <div>Archived Notifications</div>
        <div>
          <Link className="text-blue-500" href="/complex-dashboard">Default</Link>
        </div>
      </div>
    </Card>
  );
};

export default ArchivedNotifications;
