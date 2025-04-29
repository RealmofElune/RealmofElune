/* ==================================================================== */
/* Charadex
=======================================================================  /

  The charadex namespace. You can use it if you like, but this should
  prevent charadex from messing with any other imported code.
    
======================================================================= */
let charadex = {};

/* ==================================================================== */
/* Site
/* If you don't want to hard code your site information, you
/* can fill this out instead
/* Any preview links will still show Charadex's information
/* ==================================================================== */
charadex.site = {
  title: "Realm of Elune",
  url: "https://realmofelune.github.io/RealmofElune/",
  description: `The Realm of Elune is an ARPG (Art Role Playing Game), where creativity knows no bounds!`
}

/* ==================================================================== */
/* Sheet Config
/* Your sheet configuration
/* ==================================================================== */
charadex.sheet = {

  id: "1MhAv9KfLfJu0aoxnJxQ4Qo6GkXaRemkGIxChcdS6Me0",

  pages: {
    masterlist:    "masterlist",
    masterlistLog: "masterlist log",
    eggs:          "eggs",
    inventory:     "inventory",
    inventoryLog:  "inventory log",
    items:         "items",
    traits:        "traits",
    prompts:       "prompts",
    faq:           "faq",
    staff:         "mods",
  },

  options: {

    designTypes: ['All', 'Official Design', 'Guest Design', 'MYO Design', 'Egg Design'],
    statuses: ['All', 'Can Resell', 'Can Trade', 'Unsold Adopt', 'Voided', 'NPC', 'Staff Mascot'],
    rarity: ['All', 'Common', 'Uncommon', 'Rare', 'Legendary'],
    species: ['All', 'Kulpera', 'Fenera', 'Faeling', 'Drakotaur', 'Espyre'],
    itemTypes: ['All', 'Currency', 'MYO Ticket', 'Trait Potion', 'Breeding', 'Mutation Item', 'Corruption Potion', 'Account Bound', 'Miscellaneous'],
    traitTypes: ['All', 'Body Trait', 'Placement Trait', 'Head Trait', 'Mutation', 'Corruption', 'Info / Lore', 'Anatomy'],
    talent: ['All', 'Garden Dweller', 'Animal Whisperer', 'Crystal Keeper', 'Aqua Searcher', 'Volcano Explorer', 'Hyperborean', 'Alchemist', 'Dragon Tamer', 'Kulptober', 'Forest Protector', 'Star Seeker', 'Exiled', 'Hybrid', 'N/A', 'Wiragon', 'Aquarian', 'Rapterian', 'Kulian', 'Universal'],
    talentsForTraits: ['All', 'Garden Dweller', 'Animal Whisperer', 'Crystal Keeper', 'Aqua Searcher', 'Volcano Explorer', 'Hyperborean', 'Alchemist', 'Dragon Tamer', 'Kulptober', 'Forest Protector', 'Star Seeker', 'Exiled', 'Faeling', 'Fenera', 'Drakotaur', 'Espyre', 'Event'],
    eggTalent: ['All', 'Garden Dweller', 'Animal Whisperer', 'Crystal Keeper', 'Aqua Searcher', 'Volcano Explorer', 'Hyperborean', 'Alchemist', 'Dragon Tamer', 'Kulptober', 'Forest Protector', 'Star Seeker', 'Hybrid'],

  }

}


/* ==================================================================== */
/* Page configuration
/* ==================================================================== */
charadex.page = {};


/* Item Catalogue
/* --------------------------------------------------------------- */
charadex.page.items = {

  sheetPage: charadex.sheet.pages.items,
  sitePage: 'items',
  dexSelector: 'charadex',
  profileProperty: 'item',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: true,
    parameters: {
      'Type': charadex.sheet.options.itemTypes,
      'Rarity': charadex.sheet.options.rarity,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.itemTypes,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Item', 'Rarity']
  },

  prevNext: {
    toggle: false,
  },

};


/* Traits
/* --------------------------------------------------------------- */
charadex.page.traits = {

  sheetPage: charadex.sheet.pages.traits,
  sitePage: 'traits',
  dexSelector: 'charadex',
  profileProperty: 'trait',

  sort: {
    toggle: true,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: true,
    parameters: {
      'Type': charadex.sheet.options.traitTypes,
      'Rarity': charadex.sheet.options.rarity,
      'Talent': charadex.sheet.options.talentsForTraits,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'Type',
    parameters: charadex.sheet.options.traitTypes,
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Trait', 'Rarity', 'Talent']
  },

  prevNext: {
    toggle: false,
  },

  // Custom for Elune
  similarTraits: {
    sheetPage: charadex.sheet.pages.traits,
    sitePage: 'traits',
    dexSelector: 'similar',
    profileProperty: 'trait',
    profileToggle: false,
  }

};


/* Prompts
/* --------------------------------------------------------------- */
charadex.page.prompts = {

  sheetPage: charadex.sheet.pages.prompts,
  sitePage: 'prompts',
  dexSelector: 'charadex',
  profileProperty: 'title',

  sort: {
    toggle: true,
    key: "enddate",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Title']
  },

  prevNext: {
    toggle: true,
  },

};


/* Staff
/* --------------------------------------------------------------- */
charadex.page.staff = {

  sheetPage: charadex.sheet.pages.staff,
  sitePage: 'inventories',
  dexSelector: 'charadex',
  profileProperty: 'username',

  sort: {
    toggle: false,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: false,
    bottomToggle: false,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username']
  },

  prevNext: {
    toggle: false,
  },

};


/* FAQ
/* --------------------------------------------------------------- */
charadex.page.faq = {

  sheetPage: charadex.sheet.pages.faq,
  sitePage: 'faq',
  dexSelector: 'charadex',
  profileProperty: 'id',

  sort: {
    toggle: false,
    key: "id",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: false,
    parameters: {
      'TBA': [],
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Question', 'Answer', 'Tags']
  },

  prevNext: {
    toggle: false,
  },

}


/* Eggs Catalogue
/* --------------------------------------------------------------- */
charadex.page.eggs = {

  sheetPage: charadex.sheet.pages.eggs,
  sitePage: 'eggs',
  dexSelector: 'charadex',
  profileProperty: 'eggname',

  sort: {
    toggle: true,
    key: "id",
    order: "desc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: true,
    parameters: {
      'Talent': charadex.sheet.options.talent,
    }
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'Egg Name', 'Owner', 'Talent', 'Traits']
  },

  prevNext: {
    toggle: true,
  },

};


/* Masterlist
/* --------------------------------------------------------------- */
charadex.page.masterlist = {

  sheetPage: charadex.sheet.pages.masterlist,
  sitePage: 'masterlist',
  dexSelector: 'charadex',
  profileProperty: 'design',

  sort: {
    toggle: true,
    key: "id",
    order: "desc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 12,
  },

  filters: {
    toggle: true,
    parameters: {
      'Design Type': charadex.sheet.options.designTypes,
      'Status': charadex.sheet.options.statuses,
      'Rarity': charadex.sheet.options.rarity,
      'Talent': charadex.sheet.options.talent,
    }
  },

  fauxFolder: {
    toggle: true,
    folderProperty: 'species',
    parameters: [... charadex.sheet.options.species],
  },

  search: {
    toggle: true,
    filterToggle: true,
    parameters: ['All', 'ID', 'Design', 'Owner', 'Designer', 'Artist', 'Traits']
  },

  prevNext: {
    toggle: true,
  },

  relatedData: {

    [charadex.sheet.pages.masterlistLog]: {

      sheetPage: charadex.sheet.pages.masterlistLog,
      primaryProperty: 'id',
      relatedProperty: 'id',
      dexSelector: 'log',
      profileProperty: 'design',

      sort: {
        toggle: true,
        key: "timestamp",
        order: "desc",
        parameters: []
      },

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    },

  },

  // Custom for elune
  parents: {
    sheetPage: charadex.sheet.pages.masterlist,
    sitePage: 'masterlist',
    dexSelector: 'parent',
    profileProperty: 'design',
    profileToggle: false,
  },

  // Custom for elune
  children: {
    sheetPage: charadex.sheet.pages.masterlist,
    sitePage: 'masterlist',
    dexSelector: 'children',
    profileProperty: 'design',
    profileToggle: false,
  }

};

/* Inventory
/* --------------------------------------------------------------- */
charadex.page.inventory = {

  // Dex Set Up
  sheetPage: charadex.sheet.pages.inventory,
  sitePage: 'inventories',
  dexSelector: 'charadex',
  profileProperty: 'username',

  // Dex Options
  sort: {
    toggle: true,
    key: "username",
    order: "asc",
    parameters: []
  },

  pagination: {
    toggle: true,
    bottomToggle: true,
    amount: 24,
  },

  filters: {
    toggle: false,
    parameters: {}
  },

  fauxFolder: {
    toggle: false,
    folderProperty: '',
    parameters: [],
  },

  search: {
    toggle: true,
    filterToggle: false,
    parameters: ['Username']
  },

  prevNext: {
    toggle: false,
  },


  // Related Data
  relatedData: {

    [charadex.sheet.pages.inventoryLog]: {

      sheetPage: charadex.sheet.pages.inventoryLog,
      sitePage: 'inventories',
      primaryProperty: 'username',
      relatedProperty: 'username',
      dexSelector: 'log',
      profileProperty: 'id',

      pagination: {
        toggle: true,
        bottomToggle: false,
        amount: 12,
      },

    },

  },

  masterlistConfig: {

    // This imports the config from the masterlist
    // So you dont have to repeat yourself
    ...charadex.page.masterlist, 

    sheetPage: charadex.sheet.pages.masterlist,
    sitePage: 'masterlist',
    dexSelector: 'designs',
    profileProperty: 'design',

  },

  
  // This is a special config for their inventory
  inventoryConfig: {

    sheetPage: charadex.sheet.pages.items,
    sitePage: 'items',
    dexSelector: 'inventory',
    profileProperty: 'item',

    sort: {
      toggle: true,
      sortProperty: "item",
      order: "asc",
      parametersKey: 'type', 
      parameters: charadex.sheet.options.itemTypes
    },

    search: {
      toggle: true,
      filterToggle: false,
      parameters: ['Item']
    },

    filters: {
      toggle: true,
      parameters: {
        'Type': charadex.sheet.options.itemTypes,
        'Rarity': charadex.sheet.options.rarity,
      }
    },

  }

};


/* Index
/* --------------------------------------------------------------- */
charadex.page.index = {

  prompts: {
    ... charadex.page.prompts,
    dexSelector: 'prompt',
    amount: 2,
  },

  staff: {
    ... charadex.page.staff,
    dexSelector: 'staff',
    amount: 6,
  },

  designs: {
    ... charadex.page.masterlist,
    dexSelector: 'design',
    amount: 4,
  }

};


export { charadex };
