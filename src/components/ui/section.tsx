import { ReactNode } from "react";

export const Section = ({ children }: { children: ReactNode }) => {
  return (
    <section className="flex md:flex-row flex-col gap-2">{children}</section>
  );
};
