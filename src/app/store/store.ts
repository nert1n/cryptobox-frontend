import { configureStore, EnhancedStore } from "@reduxjs/toolkit";

import authReducer, { IAuthState } from "./slices/auth-slice.ts";

export const store: EnhancedStore<{ auth: IAuthState }> = configureStore({
	reducer: {
		auth: authReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
