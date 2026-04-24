import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { chatApi } from "./chatApi";
import { IChat } from "@/shared/types";

export const useSearch = (search: string): UseQueryResult<IChat[]> => {
	return useQuery<IChat[]>({
		queryKey: ["search", search],
		queryFn: async () => {
			if (!search.trim()) {
				return [];
			}

			return chatApi.search(search);
		},
		enabled: !!search,
		staleTime: 5 * 60 * 1000, // 5 min
	});
};
