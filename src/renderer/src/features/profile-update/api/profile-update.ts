import { TypeProfileUpdateSchema, userApi } from "@/entities/user";
import { queryClient } from "@/libs/query/query-client";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const useProfileUpdate = (): UseMutationResult<
	void,
	Error,
	TypeProfileUpdateSchema
> => {
	return useMutation({
		mutationKey: ["updateProfile"],
		mutationFn: async (data: TypeProfileUpdateSchema) => {
			await userApi.profileUpdate(data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["user"] });
		},
	});
};
