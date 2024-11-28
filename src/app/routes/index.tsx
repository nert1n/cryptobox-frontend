import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { socket } from "@app/socket.ts";

import { routes } from "./router.tsx";

const router = createBrowserRouter(routes);

export const AppRouter = () => {
	const [isConnected, setIsConnected] = useState<boolean>(socket.connected);
	const [fooEvents, setFooEvents] = useState<string[]>([]);

	console.log("AppRouter connected:", isConnected);
	console.log("fooEvents:", fooEvents);

	useEffect(() => {
		const handleConnect = () => setIsConnected(true);
		const handleDisconnect = () => setIsConnected(false);
		const handleFooEvent = (value: string) => {
			setFooEvents(prev => [...prev, value]);
		};

		socket.on("connect", handleConnect);
		socket.on("disconnect", handleDisconnect);
		socket.on("foo", handleFooEvent);

		return () => {
			socket.off("connect", handleConnect);
			socket.off("disconnect", handleDisconnect);
			socket.off("foo", handleFooEvent);
		};
	}, []);

	return (
		<RouterProvider
			fallbackElement={<div>Loading...</div>}
			future={{ v7_startTransition: true }}
			router={router}
		/>
	);
};
