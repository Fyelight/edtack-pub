import { S as consola } from '../nitro/nitro.mjs';
import { defineStore } from 'pinia';
import { L as useRuntimeConfig } from './server.mjs';

const useDataStore = defineStore(
  {
    id: "data",
    state: () => ({
      appVersion: useRuntimeConfig().public.APP_VERSION,
      products: []
    }),
    actions: {
      async initData() {
        if (this.products.length === 0) {
          consola.debug("fetching data ...");
          await fetch("/api/products").then((res) => res.json()).then((d) => {
            this.products = d.data;
          }).catch((error) => consola.error(error));
        }
      }
    }
  }
);

export { useDataStore as u };
