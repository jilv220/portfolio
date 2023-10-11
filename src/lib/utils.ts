import { ClassNameValue, twJoin, twMerge } from "tailwind-merge";

export function cn(...inputs: ClassNameValue[]) {
  return twMerge(twJoin(inputs));
}

export function dateNow() {
  return new Date(Date.now());
}
