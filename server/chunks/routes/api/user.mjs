import { d as defineEventHandler, u as useNitroApp } from '../../nitro/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import '@primevue/core/base/style';
import '@primeuix/styled';
import 'node:url';
import 'consola/core';
import 'ipx';

const user = defineEventHandler(async (event) => {
  const { db } = useNitroApp();
  const sql = "SELECT * FROM directory";
  return await new Promise((resolve, reject) => {
    db.query(sql, function(err, result) {
      if (err) throw err;
      resolve(result);
    });
  });
});

export { user as default };
