/// <reference path="../.astro/types.d.ts" />

declare namespace App {}

declare interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
  readonly SUPABASE_SERVICE_ROLE_KEY: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
