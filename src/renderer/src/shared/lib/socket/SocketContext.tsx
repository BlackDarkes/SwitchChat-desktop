/* eslint-disable react-hooks/set-state-in-effect */
import { getSocket, initSocket } from "@/shared/api/socket";
import {
	createContext,
	JSX,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

interface ISocketContextType {
	isConnected: boolean;
	reconnect: () => void;
}

interface SocketContextProps {
	children: ReactNode;
	apiUrl: string;
}

const SocketContext = createContext<ISocketContextType | undefined>(undefined);

export const SocketContextProvider = ({
	children,
	apiUrl,
}: SocketContextProps): JSX.Element => {
	const [isConnected, setIsConnected] = useState<boolean>(false);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const socket = initSocket(apiUrl);
		if (!socket) return;

		const onConnect = (): void => setIsConnected(true);
		const onDisconnect = (): void => setIsConnected(false);

		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);

		setIsConnected(socket.connected);

		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
		};
	}, [apiUrl]);

	const reconnect = (): void => {
		try {
			const socket = getSocket();

			if (!socket.connected) socket.connect();
		} catch {
			/* */
		}
	};

	const value = {
		isConnected,
		reconnect,
	};

	return (
		<SocketContext.Provider value={value}>{children}</SocketContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = (): ISocketContextType => {
	const context = useContext(SocketContext);
	if (!context)
		throw new Error(
			"useSocketContext must be used within a SocketContextProvider",
		);
	return context;
};
