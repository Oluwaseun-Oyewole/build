import { useGlobalStore } from "@/stores/global";

export const useGlobal = () => {
  const { toggle, open } = useGlobalStore();
  return { open, toggle };
};
