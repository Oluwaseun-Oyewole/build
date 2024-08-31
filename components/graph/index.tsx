import { cn } from "@/lib/utils";
import { ImageResponse } from "next/og";

export interface Props {
  title?: string;
}

export default async function OpengraphImage(
  props?: Props,
): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME,
    },
    ...props,
  };

  return new ImageResponse(
    (
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center bg-black",
        )}>
        <div
          className={cn(
            "flex h-[160px] w-[160px] flex-none items-center justify-center rounded-3xl border border-neutral-700",
          )}>
          {/* icon here */}
          {/* <LogoIcon width="64" height="58" fill="white" /> */}
        </div>
        <p className={cn("mt-12 text-6xl font-bold text-white")}>{title}</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
