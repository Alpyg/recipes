import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-1 rounded-xl border bg-card text-card-foreground shadow p-4 space-y-1">
      {children}
    </div>
  );
};
