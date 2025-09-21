import React from "react";

type Props = React.PropsWithChildren<{
  id?: string;
  className?: string;
}>;

export function Section({ id, className = "", children }: Props) {
  return (
    <section id={id} className={`section ${className}`}>
      {children}
    </section>
  );
}