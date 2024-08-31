import { useState } from "react";
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { createUrl } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function decodeParams(query: string | null | undefined) {
  return query ? decodeURIComponent(query) : "";
}

export function useSearchQuery() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const [search, setSearch] = useState(decodeParams(params.get("q") ?? ""));
  const router = useRouter();
  const pathname = usePathname();

  function updateURLSearchParams(search: string) {
    if (search.length > 0) {
      params.set("q", search);
    } else {
      params.delete("q");
    }
    router.push(createUrl(pathname, params));
  }
  return { search, updateURLSearchParams, setSearch };
}
