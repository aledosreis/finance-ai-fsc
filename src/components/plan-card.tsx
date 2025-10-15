import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";
import AcquirePlanButton from "./acquire-plan-button";

export type Plan = {
  slug: "basic" | "premium";
  name: string;
  price: number;
  benefits: { description: string; include: boolean }[];
};

interface PlanCardProps {
  isActive: boolean;
  currentMonthTransactions: number;
  plan: Plan;
}

const PlanCard = ({
  isActive,
  currentMonthTransactions,
  plan,
}: PlanCardProps) => {
  return (
    <Card className="w-[450px]">
      <CardHeader className="relative border-b border-solid py-8">
        {isActive && (
          <Badge className="absolute left-4 top-12 bg-primary/10 text-primary hover:bg-primary/10">
            Ativo
          </Badge>
        )}
        <h2 className="text-center text-2xl font-semibold">{plan.name}</h2>

        <div className="flex items-center justify-center gap-3">
          <span className="text-4xl">R$</span>
          <span className="text-6xl font-semibold">{plan.price}</span>
          <span className="text-2xl text-muted-foreground">/mês</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 py-8">
        {plan.benefits.map((benefit) => (
          <div key={benefit.description} className="flex items-center gap-2">
            {benefit.include ? (
              <CheckIcon className="text-primary" />
            ) : (
              <XIcon />
            )}
            <p>
              {benefit.description.replace(
                "%s",
                currentMonthTransactions.toString(),
              )}
            </p>
          </div>
        ))}

        {plan.slug !== "basic" && <AcquirePlanButton />}
      </CardContent>
    </Card>
  );
};

export default PlanCard;
