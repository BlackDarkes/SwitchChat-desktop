import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { messageApi } from "./messageApi";

export const useMessages = ({ id }: { id: string }): UseQueryResult => {
	return useQuery({
		queryKey: ["messages"],
		queryFn: async () => messageApi.getHistory(id),
	});
};
