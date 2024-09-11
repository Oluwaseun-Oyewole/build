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

export function formatCurrency(
  amount: number | string,
  currencySymbol: string = "$",
): string {
  const roundedAmount = Math.round(Number(amount) * 100) / 100;
  const [integerPart] = roundedAmount.toFixed(2).split(".");
  const integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formattedCurrency = `${currencySymbol}${integerWithCommas}`;
  return formattedCurrency;
}
