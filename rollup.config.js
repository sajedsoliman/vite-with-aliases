import alias from "@rollup/plugin-alias";

export default {
	input: "src/main.tsx",
	output: {
		dir: "output",
		format: "cjs",
	},
	plugins: [
		alias({
			entries: [{ find: "styles", replacement: "./src/styles" }],
		}),
	],
};
