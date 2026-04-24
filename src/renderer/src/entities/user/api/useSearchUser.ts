import { IContact } from "@/shared/types/contact/contact.interface";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { userApi } from "./userApi";

export const useSearchUser = (search: string): UseQueryResult => {
	return useQuery<IContact[]>({
		queryKey: ["search", search],
		queryFn: async () => {
			if (!search.trim()) {
				return [];
			}

			return userApi.search(search);
		},
	});
};
