/* ==================================================================== */
/* Import Charadex
======================================================================= */
import { charadex } from '../charadex.js';


/* ==================================================================== */
/* Load
======================================================================= */
document.addEventListener("DOMContentLoaded", async () => {

  let dex = await charadex.initialize.page(
    null,
    charadex.page.items,
    (arr) => {

      // Custom for Elune
      // Removes empty allowances info
      for (let entry of arr) {
        if (!entry.allowances) entry.allowances = "Unsold Adopt";
        entry.talents = entry.talent ? entry.talent.split(',').map(t => t.trim()) : [];
      }
  charadex.tools.loadPage('.softload', 500);
});
