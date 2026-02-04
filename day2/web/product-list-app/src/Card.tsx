import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode; // lowercase 'children' is the React convention
};

export function Card({ children }: CardProps) {
  return <div className="flex flex-col gap-4">{children}</div>;
}

export function CardHeader({ children }: CardProps) {
  return <div className="">{children}</div>;
}

export function CardBody({ children }: CardProps) {
  return <div className="">{children}</div>;
}

export function CardFooter({ children }: CardProps) {
  return <div className="">{children}</div>;
}
