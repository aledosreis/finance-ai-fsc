import { auth, clerkClient } from "@clerk/nextjs/server";
import Navbar from "../../components/navbar";
import { redirect } from "next/navigation";
import { getCurrentMonthTransactions } from "../../data/get-current-month-transactions";
import PlanCard, { Plan } from "../../components/plan-card";

const subscriptionPlans: Plan[] = [
  {
    slug: "basic",
    name: "Plano Básico",
    price: 0,
    benefits: [
      { description: "Apenas 10 transações por mês (%s/10)", include: true },
      { description: "Relatórios IA", include: false },
    ],
  },
  {
    slug: "premium",
    name: "Plano Premium",
    price: 19,
    benefits: [
      { description: "Transações Ilimitadas", include: true },
      { description: "Relatórios IA", include: true },
    ],
  },
];

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const user = await clerkClient.users.getUser(userId);
  const currentMonthTransactions = await getCurrentMonthTransactions();
  const hasPremiumPlan = user.publicMetadata.subscriptionPlan === "premium";
  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-bold">Assinatura</h1>

        <div className="flex gap-6">
          {subscriptionPlans.map((plan) => (
            <PlanCard
              key={plan.slug}
              plan={plan}
              isActive={
                (hasPremiumPlan && plan.slug === "premium") ||
                (!hasPremiumPlan && plan.slug === "basic")
              }
              currentMonthTransactions={currentMonthTransactions}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SubscriptionPage;
