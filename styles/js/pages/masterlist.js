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
    charadex.page.masterlist,
    (arr) => {

      // Custom for Elune
      for (let entry of arr) {
        if (!entry.owner) entry.owner = "Unsold Adopt";
      }

    }, async (listData) => {

      if (listData.type == 'profile') {

        // Custom for Elune
        //listData.array.find(i => )

        // Create the log dex
        if (charadex.tools.checkArray(listData.profileArray[0].masterlistlog)) {
          let logs = await charadex.initialize.page(
            listData.profileArray[0].masterlistlog,
            charadex.page.masterlist.relatedData['masterlist log'],
            null, 
            null,
            null,
            'log'
          );
        }

      }

    }
  );
  
  charadex.tools.loadPage('.softload', 500);
  
});