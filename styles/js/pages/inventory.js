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
    charadex.page.inventory,
    null, 
    async (listData) => {

      if (listData.type == 'profile') {

        let profile = listData.profileArray[0];

        // Inventory
        charadex.initialize.groupGallery(
          charadex.page.inventory.inventoryConfig,
          await charadex.manageData.inventoryFix(profile),
          'type',
          charadex.url.getPageUrl('items')
        )

        // designs
        let masterlist = await charadex.importSheet(charadex.sheet.pages.masterlist);
        let ownedDesigns = masterlist.filter(design => 
          [
            charadex.tools.scrub(design.owner),
            charadex.tools.scrub(design.coowner),
            charadex.tools.scrub(design.coowner2)
          ].includes(charadex.tools.scrub(profile.username))
        )

        if (charadex.tools.checkArray(ownedDesigns)) {
          let designs = await charadex.initialize.page(
            ownedDesigns,
            charadex.page.inventory.masterlistConfig,
          );
        }

        // Logs
        if (charadex.tools.checkArray(profile.inventorylog)) {
          let logs = await charadex.initialize.page(
            profile.inventorylog,
            charadex.page.inventory.relatedData['inventory log'],
          );
        }


      }
    }
  );
  
  charadex.tools.loadPage('.softload', 500);
  
});