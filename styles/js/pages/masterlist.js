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
      // Removes empty owner info
      for (let entry of arr) {
        if (!entry.owner) entry.owner = "Unsold Adopt";
        entry.talents = entry.talent ? entry.talent.split(',').map(t => t.trim()) : [];
      }

    }, async (listData) => {

      if (listData.type == 'profile') {

        let profile = listData.profileArray[0];

        // Custom for Elune
        // Check for children and creates a list/gallery
        let children = listData.array.filter(i =>
          charadex.tools.scrub(i.parent1) === charadex.tools.scrub(profile.design) ||
          charadex.tools.scrub(i.parent2) === charadex.tools.scrub(profile.design)
        );

        if (charadex.tools.checkArray(children)) {
          let childrenList = await charadex.initialize.page(children, charadex.page.masterlist.children);
          $('#children-gallery').show();
          $('#genealogy-tab').parents('.nav-item').show();
        }

        // Custom for Elune
        // Check for parents and creates a list/gallery
        if (profile.parent1 || profile.parent2) {

          let parents = [
            listData.array.find(i => charadex.tools.scrub(i.design) === charadex.tools.scrub(profile.parent1)),
            listData.array.find(i => charadex.tools.scrub(i.design) === charadex.tools.scrub(profile.parent2))
          ];

          if (charadex.tools.checkArray(parents)) {
            let parentList = await charadex.initialize.page(parents, charadex.page.masterlist.parents);
            $('#parent-gallery').show();
            $('#genealogy-tab').parents('.nav-item').show();
          }

        }

        // Create the log dex
        if (charadex.tools.checkArray(profile.masterlistlog)) {
          let logs = await charadex.initialize.page(
            profile.masterlistlog,
            charadex.page.masterlist.relatedData['masterlist log']
          );
        }

      }

    }
  );
  
  charadex.tools.loadPage('.softload', 500);
  
});