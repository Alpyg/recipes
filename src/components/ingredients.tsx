import { ReactNode } from "react";

export const Ingredients = ({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadhow p-4 space-y-2">
      {name.length > 0 && <h1 className="font-semibold">{name}</h1>}

      {children}
    </div>
  );
};
