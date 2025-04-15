import { defineConfig } from "vite";
import unocss from "unocss/vite";
import solid from "vite-plugin-solid";

export default defineConfig({
	plugins: [unocss(), solid()],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
	},
});
