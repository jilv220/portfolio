import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <div className="relative flex min-h-screen flex-col">{children}</div>;
}
