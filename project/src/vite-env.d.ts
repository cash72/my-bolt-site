/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_BASE_PATH?: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_ADSENSE_CLIENT?: string;
  readonly VITE_ADSENSE_SLOT_FOOTER?: string;
  readonly VITE_ADSENSE_SLOT_CONTENT?: string;
  readonly VITE_AADS_UNIT_ID?: string;
  readonly VITE_AADS_SIZE?: string;
  readonly VITE_AFFILIATE_COLDCARD?: string;
  readonly VITE_AFFILIATE_JADE?: string;
  readonly VITE_AFFILIATE_BITBOX?: string;
  readonly VITE_AFFILIATE_START9?: string;
  readonly VITE_AFFILIATE_UMBREL?: string;
  readonly VITE_AFFILIATE_SEEDPLATE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
