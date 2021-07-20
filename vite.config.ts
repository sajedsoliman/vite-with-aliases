import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import legacy from "@vitejs/plugin-legacy";

import path from "path";

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
	plugins: [
		reactRefresh(),
		legacy({
			targets: ["defaults", "not IE 11"],
		}),
	],
	json: {
		stringify: true,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "/src"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@assets": path.resolve(__dirname, "src/assets"),
		},
	},
});
