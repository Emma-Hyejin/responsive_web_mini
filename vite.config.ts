import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import sass from "sass";
import path from "path";

// https://vitejs.dev/config/
//[sass in react,vite]-https://harbiola.hashnode.dev/setting-up-vite-with-react-sass-and-typescript
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
	},
	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass,
				additionalData: `@import "@/variable.scss";\n`
			}
		}
	}
});
