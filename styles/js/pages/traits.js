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
    charadex.page.traits,
    (arr) => {
      for (let entry of arr) entry.traitlink = entry.image;
    },
    async (listData) => {
      if (listData.type == 'profile') {

        let profile = listData.profileArray[0];

        let similarTraits = listData.array.filter(i => i.talent === profile.talent);
        if (charadex.tools.checkArray(similarTraits)) {
          let similar = await charadex.initialize.page(
            similarTraits,
            charadex.page.traits.similarTraits
          );
        }

      }
    }
  );
  charadex.tools.loadPage('.softload', 500);
});