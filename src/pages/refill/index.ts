import { lazy } from "react";

export const RefillPage = lazy(() =>
	import("./ui/refill").then(module => ({ default: module.Refill }))
);
