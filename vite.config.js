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
			"@": path.resolve(__dirname, "src"),
			"@styles": path.resolve(__dirname, "src/styles"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@components": path.resolve(__dirname, "/src/components"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@services": path.resolve(__dirname, "src/services"),
			"@store": path.resolve(__dirname, "src/store"),
			"@views": path.resolve(__dirname, "src/views"),
		},
	},
});
