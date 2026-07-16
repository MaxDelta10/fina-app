import { Metadata } from "next";
import DashboardContent from "./_components/dashboard-content";

export const metadata: Metadata = {
  title: "Fina - Dashboard",
  description: "Your personal finance dashboard",
};

export default function DashboardPage() {
  return (
    <div className="p-2 space-y-4">
      <section id="header"></section>
      <h1 className="text-4xl font-bold text-primary">Dashboard</h1>
      <p>
        Get Insights into your spending, track your expenses, and manage your
        finances with ease.
      </p>
      <DashboardContent />
    </div>
  );
}
