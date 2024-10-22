import { lazy } from "react";

export const SuccessPage = lazy(() =>
	import("./ui/success").then(module => ({ default: module.Success }))
);
