/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NG_APP_CONTENTSTACK_API_KEY: string;
  readonly NG_APP_CONTENTSTACK_DELIVERY_TOKEN: string;
  readonly NG_APP_CONTENTSTACK_PREVIEW_TOKEN: string;
  readonly NG_APP_CONTENTSTACK_ENVIRONMENT: string;
  readonly NG_APP_CONTENTSTACK_REGION: string;
  readonly NG_APP_CONTENTSTACK_PREVIEW: string;
  readonly NG_APP_CONTENTSTACK_CONTENT_DELIVERY: string;
  readonly NG_APP_CONTENTSTACK_CONTENT_APPLICATION: string;
  readonly NG_APP_CONTENTSTACK_PREVIEW_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
