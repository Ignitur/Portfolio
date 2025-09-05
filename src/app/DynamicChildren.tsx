"use client";

import { ReactNode } from "react";

interface DynamicChildrenProps {
  children: ReactNode;
}

export default function DynamicChildren({ children }: DynamicChildrenProps) {
  return <div className="flex-1 col6">{children}</div>;
}
