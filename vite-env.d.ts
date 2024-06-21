/// <reference types="vite-env" />
interface ImportMetaEnv {
  readonly SOME_ENV_VAR_HERE: string | undefined
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
