import { io } from "socket.io-client";

import { BACKEND_URL } from "@shared/const/originUrl/backend-url.ts";

export const socket = io(BACKEND_URL);
