/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CUSTOM_ENV_VAR: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
