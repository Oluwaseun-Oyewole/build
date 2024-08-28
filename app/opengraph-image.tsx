import OpengraphImage from "@/components/graph";

export const runtime = "edge";

export default async function Image() {
  return await OpengraphImage();
}
