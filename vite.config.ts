import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import compression from "vite-plugin-compression";
import sitemap from "vite-plugin-sitemap";

export default defineConfig({
	plugins: [
		react(),
		sitemap({ hostname: "https://www.crypto-drop.com" }),
		compression({ algorithm: "gzip" }),
		legacy({ targets: ["defaults", "not IE 11"] }),
	],
	css: {
		preprocessorOptions: {
			scss: {
				sassOptions: {
					api: "modern-compiler",
				},
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@app": path.resolve(__dirname, "./src/app"),
			"@pages": path.resolve(__dirname, "./src/pages"),
			"@widgets": path.resolve(__dirname, "./src/widgets"),
			"@features": path.resolve(__dirname, "./src/features"),
			"@entities": path.resolve(__dirname, "./src/entities"),
			"@shared": path.resolve(__dirname, "./src/shared"),
		},
	},
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target:
					"https://6c81-2a02-8071-6282-a220-fd6e-edf8-caec-40a2.ngrok-free.app",
				changeOrigin: true,
				secure: true,
				cookieDomainRewrite: "localhost",
				rewrite: path => path.replace(/^\/api/, ""),
			},
		},
		hmr: { overlay: true },
	},
	optimizeDeps: { include: ["react", "react-dom"] },
	build: {
		target: "esnext",
		outDir: "dist",
		rollupOptions: {
			input: path.resolve(__dirname, "index.html"),
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						return id.split("node_modules/")[1].split("/")[0];
					}
				},
				chunkFileNames: "assets/[name]-[hash].js",
				assetFileNames: "assets/[name]-[hash][extname]",
			},
		},
		sourcemap: false,
	},
});
