const baseURL =
	import.meta.env.VITE_NODE_MOD === `dev` ? "/api" : import.meta.env.API_URL;

export const ENDPOINTS = {
	auth: {
		login: `${baseURL}/auth/login`,
		register: `${baseURL}/auth/register`,
		logout: `${baseURL}/auth/logout`,
		refresh: `${baseURL}/auth/refresh`,
	},
	user: {
		me: `${baseURL}/user/me`,
		search: `${baseURL}/user/search`,
		update: `${baseURL}/user`,
	},
	contact: {
		getContacts: `${baseURL}/contacts`,
		search: `${baseURL}/contacts/search`,
		addContact: `${baseURL}/contacts`,
		removeContact: `${baseURL}/contacts`,
	},
	chat: {
		getUserChat: `${baseURL}/chats`,
		getChatById: `${baseURL}/chats/:id`,
		getSelfChat: `${baseURL}/chats/self`,
		getDirectChats: `${baseURL}/chats/direct`,
		getGroupChats: `${baseURL}/chats/group`,
		getFavoriteChats: `${baseURL}/chats/favorite`,
		search: `${baseURL}/chats/search`,
		create: `${baseURL}/chats`,
		update: `${baseURL}/chats/:id`,
		join: `${baseURL}/chats/:id/join`,
		leave: `${baseURL}/chats/:id/leave`,
		addFavorite: `${baseURL}/chats/:id/add-favorite`,
		removeFavorite: `${baseURL}/chats/:id/remove-favorite`,
	},
	message: {
		getHistory: `${baseURL}/messages/:id`,
		send: `${baseURL}/messages/:id`,
		update: `${baseURL}/messages/:id`,
		delete: `${baseURL}/messages/:id`,
		react: `${baseURL}/messages/:id/emoji/:emoji`,
	},
};
