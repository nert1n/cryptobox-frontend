import { lazy } from "react";

export const ReferralPage = lazy(() =>
	import("./ui/referral.tsx").then(module => ({ default: module.Referral }))
);
