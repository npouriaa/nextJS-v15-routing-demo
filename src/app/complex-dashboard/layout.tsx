import { ReactNode } from "react";

type ComplexDashboardLayoutProps = {
  children: ReactNode;
  users: ReactNode;
  revenue: ReactNode;
  notifications: ReactNode;
  login: ReactNode;
};

const ComplexDashboardLayout = ({
  children,
  users,
  revenue,
  notifications,
  login,
}: ComplexDashboardLayoutProps) => {
  const isLoggedIn = false;

  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div className="flex">
        <div className="flex flex-col">
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div className="flex flex-1">{notifications}</div>
      </div>
    </div>
  ) : (
    login
  );
};

export default ComplexDashboardLayout;
