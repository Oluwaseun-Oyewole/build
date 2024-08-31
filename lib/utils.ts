import { clsx, type ClassValue } from "clsx";
import { type ReadonlyURLSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length > 0 ? "?" : ""}${paramsString}`;
  return `${pathname}${queryString}`;
  // replace(`${pathname}?${params.toString()}`);
};
