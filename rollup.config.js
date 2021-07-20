import alias from "@rollup/plugin-alias";

module.exports = {
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
