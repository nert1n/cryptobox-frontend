import { lazy } from "react";

export const CasePage = lazy(() =>
	import("./ui/case.tsx").then(module => ({ default: module.Case }))
);
