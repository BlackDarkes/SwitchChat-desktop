import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { contactApi } from "./contactApi";
import { IContact } from "@/shared/types";

export const useContact = (): UseQueryResult<IContact[]> => {
	return useQuery<IContact[]>({
		queryKey: ["contacts"],
		queryFn: () => contactApi.getContacts(),
	});
};
