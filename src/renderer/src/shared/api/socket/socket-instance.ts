"use client";

import { io, Socket } from "socket.io-client";
import {
	IClientToServerEvents,
	IServerToClientEvents,
} from "./socket.interface";

let socket: Socket<IServerToClientEvents, IClientToServerEvents> | null = null;

export const initSocket = (apiUrl: string): Socket => {
	if (typeof window === "undefined") {
		throw new Error("Socket is not available on the server.");
	}
	if (socket?.connected) return socket;

	socket = io(`${apiUrl}/chats`, {
		withCredentials: true,
		transports: ["websocket"],
		reconnection: true,
		reconnectionAttempts: 5,
		reconnectionDelay: 1000,
		timeout: 20000,
	});

	socket.on("connect", () => {
		console.log("✅ Socket connected:", socket?.id);
	});

	socket.on("connect_error", (err) => {
		console.error("❌ Socket error:", err.message);
	});

	socket.on("disconnect", (reason) => {
		console.log("🔌 Socket disconnected:", reason);
	});

	return socket;
};

export const getSocket = (): Socket => {
	if (!socket) {
		throw new Error("Socket not initialized. Call initSocket() first.");
	}
	return socket;
};

export const disconnectSocket = (): void => {
	if (socket) {
		socket.disconnect();
		socket = null;
	}
};
