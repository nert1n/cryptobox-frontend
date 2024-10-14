import { lazy } from "react";

export const ProfilePage = lazy(() =>
	import("./ui/profile.tsx").then(module => ({ default: module.Profile }))
);
