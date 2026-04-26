import { IContact } from "@/shared/types/contact/contact.interface";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { contactApi } from "./contactApi";

export const useSearchContact = (search: string): UseQueryResult => {
	return useQuery<IContact[]>({
		queryKey: ["searchContact", search],
		queryFn: async () => {
			if (!search.trim()) {
				return [];
			}

			return contactApi.search(search);
		},
	});
};
