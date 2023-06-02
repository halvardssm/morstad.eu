import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { sentryVitePlugin } from "@sentry/vite-plugin";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";
import svgr from "vite-plugin-svgr";

const getContentData = async (
  publicFolderPath: string,
  contentPath = "content"
) => {
  const result: Record<string, any> = {};

  const path = join(publicFolderPath, contentPath);

  const folders = await readdir(path, { withFileTypes: true });

  for (const folder of folders) {
    result[folder.name] = [];
    if (folder.isDirectory()) {
      const folderPath = join(path, folder.name);
      const files = await readdir(folderPath, { withFileTypes: true });

      for (const item of files) {
        if (item.isFile() && item.name.endsWith(".md")) {
          const filePath = join(folderPath, item.name);
          const fileContent = await readFile(filePath, { encoding: "utf-8" });
          const content = matter(fileContent);
          result[folder.name].push({
            ...content.data,
            filePath: join("/", contentPath, folder.name, item.name),
            slug: item.name.replace(".md", ""),
          });
        }
      }
    }
  }

  return result;
};

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");

  const contentData = await getContentData("./public");

  return {
    cacheDir: resolve(__dirname, ".vite"),
    publicDir: resolve(__dirname, "public"),
    envDir: resolve(__dirname),
    define: {
      // Makes the version available in the app.
      __APP_VERSION__: JSON.stringify(env.npm_package_version),
      __CONTENT_DATA__: JSON.stringify(contentData),
      global: {
        window: {},
      },
    },
    build: {
      sourcemap: true,
    },
    plugins: [
      react(),
      svgr(),
      // Put the Sentry vite plugin after all other plugins
      sentryVitePlugin({
        org: env.SENTRY_ORG,
        project: env.SENTRY_PROJECT,
        sourcemaps: {
          assets: "./dist",
        },

        // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
        // and needs the `project:releases` and `org:read` scopes
        authToken: env.SENTRY_AUTH_TOKEN,
        // Optionally uncomment the line below to override automatic release name detection
        // release: env.RELEASE,
      }),
    ],
  };
});
