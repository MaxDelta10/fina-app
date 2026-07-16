"use client";

import { getBalanceSummary } from "@/features/transaction/action";
import { useQuery } from "@tanstack/react-query";
import { BalanceCards } from "./balance-card";
import WizardInput from "./wizard-input";

export default function DashboardContent() {
  const { data, error, refetch } = useQuery({
    queryKey: ["balance"],
    queryFn: () => getBalanceSummary(),
  });

  return (
    <section id="content" className="space-y-4">
      <WizardInput refetch={refetch} />
      <BalanceCards data={data} error={error} />
    </section>
  );
}
