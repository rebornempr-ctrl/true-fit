import { createActor } from "@/backend";
import type { ContactSubmission } from "@/types";
import { useActor, useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";

export function useIsAdmin() {
  const { isAuthenticated } = useInternetIdentity();
  return isAuthenticated;
}

export function useContactSubmissions() {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  return useQuery<ContactSubmission[]>({
    queryKey: ["contacts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContactSubmissions();
    },
    enabled: !!actor && !isFetching && isAuthenticated,
  });
}
