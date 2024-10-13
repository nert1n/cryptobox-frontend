import { lazy } from "react";

export const FaqPage = lazy(() =>
	import("./ui/faq.tsx").then(module => ({ default: module.Faq }))
);
