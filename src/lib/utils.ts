import { formatDistanceToNowStrict } from "date-fns";
import { ClassNameValue, twJoin, twMerge } from "tailwind-merge";

export function cn(...inputs: ClassNameValue[]) {
  return twMerge(twJoin(inputs));
}

export function dateNow() {
  return new Date(Date.now());
}

export function distanceToNow(date: Date | string) {
  return formatDistanceToNowStrict(new Date(date), {
    addSuffix: true,
  });
}
