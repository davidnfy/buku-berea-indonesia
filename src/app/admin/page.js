"use client";

import dynamic from "next/dynamic";

const AdminDashboardClient = dynamic(
  () => import("@/app/admin/AdminDashboardClient"),
  { ssr: false }
);

export default function Page() {
  return <AdminDashboardClient />;
}
