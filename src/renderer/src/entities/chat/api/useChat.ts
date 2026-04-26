"use client";

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { chatApi } from "./chatApi";
import { IChat } from "@/shared/types";

export const useChats = (): UseQueryResult<IChat[]> => {
	return useQuery({
		queryKey: ["chats"],
		queryFn: async () => {
			const response = await chatApi.getUserChats();
			return response.chats ?? [];
		},
		placeholderData: (prevData) => prevData, // placeholder что бы не моргало
	});
};

export const useChatById = (id: string): UseQueryResult<IChat> => {
	return useQuery({
		queryKey: ["chatById", id],
		queryFn: async () => {
			return chatApi.getChatById(id);
		},
	});
};

export const useSelfChat = (): UseQueryResult<IChat> => {
	return useQuery({
		queryKey: ["selfChat"],
		queryFn: () => chatApi.getSelfChat() as Promise<IChat>,
		placeholderData: (prevData) => prevData, // placeholder что бы не моргало
	});
};

export const useDirectChats = (): UseQueryResult<IChat[]> => {
	return useQuery({
		queryKey: ["directChats"],
		queryFn: () => chatApi.getDirectChats() as Promise<IChat[]>,
		placeholderData: (prevData) => prevData, // placeholder что бы не моргало
	});
};

export const useGroupChats = (): UseQueryResult<IChat[]> => {
	return useQuery({
		queryKey: ["groupChats"],
		queryFn: () => chatApi.getGroupChats() as Promise<IChat[]>,
		placeholderData: (prevData) => prevData, // placeholder что бы не моргало
	});
};

export const useChatFavorites = (): UseQueryResult<IChat[]> => {
	return useQuery({
		queryKey: ["chatFavorite"],
		queryFn: async () => {
			const response = await chatApi.getFavoriteChats();

			const data: IChat[] = Array.isArray(response)
				? response
				: (response as { chats: IChat[] }).chats;

			return data ?? [];
		},
	});
};
