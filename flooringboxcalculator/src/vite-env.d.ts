/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_BASE_PATH?: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_ADSENSE_ENABLED?: string;
  readonly VITE_ADSENSE_CLIENT?: string;
  readonly VITE_ADSENSE_SLOT_FOOTER?: string;
  readonly VITE_ADSENSE_SLOT_CONTENT?: string;
  readonly VITE_ADSENSE_SLOT_SIDEBAR?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
