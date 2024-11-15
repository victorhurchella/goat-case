import { useQuery } from "@tanstack/react-query";
import { getCase } from "./api";
import { Case } from "./types";

// mocked get
export function useGetCase() {
  return useQuery<Case, Error>({
    queryKey: ["case-000"],
    queryFn: () => getCase(),
    refetchOnWindowFocus: false,
  });
}
