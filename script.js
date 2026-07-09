const abilities = [
  ["strength", "Strength", "Lifting, hauling, breaking, climbing fences."],
  ["dexterity", "Dexterity", "Sneaking, reflexes, balance, quick hands."],
  ["constitution", "Constitution", "Cold nights, bad food, blood still inside you."],
  ["intelligence", "Intelligence", "Books, maps, craft lore, village histories."],
  ["wisdom", "Wisdom", "Tracks, weather, lies, things felt before seen."],
  ["charisma", "Charisma", "Gossip, bargaining, courage in your voice."]
];

const skills = [
  "Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History",
  "Insight", "Intimidation", "Investigation", "Medicine", "Nature", "Perception",
  "Performance", "Persuasion", "Religion", "Sleight of Hand", "Stealth", "Survival"
];

const speciesOptions = [
  { name: "Dragonborn", source: "2014 Player's Handbook", note: "Core 2014 species. Breath weapon is an obvious supernatural trait, so confirm whether Ashwick treats it as active or dormant." },
  { name: "Dwarf", source: "2014 Player's Handbook", note: "Core 2014 species. Usually straightforward for low magic; note subrace and tool/language choices from your source." },
  { name: "Elf", source: "2014 Player's Handbook", note: "Core 2014 species. Confirm any overtly magical ancestry traits or cantrip access with the DM." },
  { name: "Gnome", source: "2014 Player's Handbook", note: "Core 2014 species. Confirm any supernatural or innate magical traits before play." },
  { name: "Half-Elf", source: "2014 Player's Handbook", note: "Core 2014 species. Good fit for relationship/reputation play; confirm any variant traits with the DM." },
  { name: "Half-Orc", source: "2014 Player's Handbook", note: "Core 2014 species. Usually straightforward for low magic." },
  { name: "Halfling", source: "2014 Player's Handbook", note: "Core 2014 species. Usually straightforward for low magic; note subrace from your source." },
  { name: "Human", source: "2014 Player's Handbook", note: "Core 2014 species. Standard or variant human should be confirmed with the DM." },
  { name: "Tiefling", source: "2014 Player's Handbook", note: "Core 2014 species. Innate spellcasting and infernal traits are socially dangerous in Ashwick; confirm what begins dormant." },
  { name: "Custom Lineage", source: "Tasha's Cauldron of Everything", note: "Tasha option. Use only with DM approval, and define how the lineage fits Ashwick's refugee village tone." },
  { name: "No added species options", source: "Xanathar's Guide to Everything", note: "Xanathar's is allowed for other character material, but it does not add a major player species list." },
  { name: "Changeling", source: "Eberron content", note: "Eberron species. Shapeshifting is overtly supernatural and socially risky; confirm whether it begins active, limited, or dormant." },
  { name: "Kalashtar", source: "Eberron content", note: "Eberron species. Psychic/spiritual traits may be subtle but supernatural; confirm how they appear in Ashwick." },
  { name: "Shifter", source: "Eberron content", note: "Eberron species. Shifting is an obvious transformation; confirm how visible, reliable, and feared it is." },
  { name: "Warforged", source: "Eberron content", note: "Eberron species. Needs strong DM/world fit in a village-centered low-magic campaign." },
  { name: "Dragonmarked ancestry or variant", source: "Eberron content", note: "Eberron option. Dragonmarks are magical and should almost certainly begin dormant or story-locked unless the DM says otherwise." }
];

const occupations = [
  {
    name: "Blacksmith's Apprentice",
    summary: "You work at the village forge, helping repair tools, shoe animals, sharpen blades, and maintain basic militia gear.",
    skill: "Athletics or Investigation",
    tool: "Smith's Tools",
    gear: "Smith's hammer, leather apron, work gloves, whetstone, tongs, 3 iron spikes",
    perk: "When you have access to a forge, you can repair one damaged mundane item during downtime.",
    npc: "Brenna Hollis, the village blacksmith",
    paths: "Fighter, Barbarian, Paladin, Artificer-style crafter, Forge-themed Cleric if magic awakens"
  },
  {
    name: "Herbalist's Apprentice",
    summary: "You assist the village healer with herbs, bandages, fevers, poultices, childbirth, wound care, and ordinary medicine.",
    skill: "Medicine or Nature",
    tool: "Herbalism Kit",
    gear: "Herb knife, mortar and pestle, bandage roll, drying pouch, 2 soothing salves",
    perk: "During a short rest, you can treat one creature's wounds. If they spend a Hit Die, they regain +1 additional HP.",
    npc: "Mira Anlow, the village herbalist",
    paths: "Ranger, Rogue, Druid, Cleric, Monk"
  },
  {
    name: "Hunter's Apprentice",
    summary: "You help track game, set snares, maintain trails, and keep watch for predators near Ashwick.",
    skill: "Survival or Perception",
    tool: "Leatherworker's Tools or Woodcarver's Tools",
    gear: "Hunting knife, snare wire, 50 feet of cord, animal call, small hatchet",
    perk: "You can identify common local tracks and signs without a roll unless conditions are poor.",
    npc: "A village hunter, trapper, or retired scout",
    paths: "Ranger, Rogue, Fighter, Barbarian, Druid"
  },
  {
    name: "Miller's Assistant",
    summary: "You work at Riverwatch Mill, moving grain, loading carts, repairing machinery, and hearing more gossip than most adults realize.",
    skill: "Athletics or Insight",
    tool: "Carpenter's Tools or Vehicles, land",
    gear: "Grain sack, access to a handcart, measuring scoop, work gloves, lantern",
    perk: "Once per session in Ashwick, you may ask: Who has been buying, hoarding, or moving unusual goods lately?",
    npc: "The miller or one of the village's farming families",
    paths: "Fighter, Rogue, Bard, Cleric, Paladin"
  },
  {
    name: "Carpenter's Apprentice",
    summary: "You help build homes, repair fences, fix carts, make doors, and eventually help with village fortifications.",
    skill: "Investigation or Athletics",
    tool: "Carpenter's Tools",
    gear: "Hammer, saw, chisel, nails, measuring cord, wood glue",
    perk: "Given time and materials, you can build or repair simple wooden structures such as barricades, ladders, doors, crates, or fences.",
    npc: "The village carpenter or builder",
    paths: "Fighter, Rogue, Ranger, Monk, Artificer-style crafter"
  },
  {
    name: "Fisher / Riverhand",
    summary: "You work the river, fishing, ferrying, checking nets, reading currents, and repairing boats.",
    skill: "Athletics or Perception",
    tool: "Vehicles, water or Navigator's Tools",
    gear: "Fishing net, fish knife, hook line, cork floats, waterproof pouch",
    perk: "You know the local river crossings, hidden shallows, and dangerous currents.",
    npc: "A fisher family, ferryman, or river trader",
    paths: "Rogue, Ranger, Fighter, Druid, Barbarian"
  },
  {
    name: "Shrine Attendant",
    summary: "You help at the village shrine, cleaning, lighting candles, assisting with funerals, copying names into ledgers, and comforting grieving families. This does not mean you can cast divine magic.",
    skill: "Religion or Insight",
    tool: "Calligrapher's Supplies or Herbalism Kit",
    gear: "Prayer cord, candle box, ink and quill, funeral cloth, small holy symbol",
    perk: "Villagers are more likely to confide fears, omens, guilt, or family troubles to you.",
    npc: "Sister Cael, the shrine keeper",
    paths: "Cleric, Paladin, Bard, Monk, Rogue"
  },
  {
    name: "Shepherd / Goatherd",
    summary: "You spend long days outside the village watching animals, learning weather, terrain, patience, and danger signs.",
    skill: "Animal Handling or Survival",
    tool: "Weaver's Tools or Woodcarver's Tools",
    gear: "Shepherd's crook, sling, pouch of stones, wool cloak, animal bell",
    perk: "You can calm ordinary livestock and can usually tell when animals are frightened by something unusual or unnatural.",
    npc: "A farming family or elderly shepherd",
    paths: "Ranger, Druid, Barbarian, Fighter, Cleric"
  },
  {
    name: "Quarry Hand",
    summary: "You work with stonecutters, miners, haulers, and masons near the village quarry.",
    skill: "Athletics or History",
    tool: "Mason's Tools or Miner's Tools",
    gear: "Pick, chalk line, work gloves, stone chisel, dust mask or scarf",
    perk: "You can identify unstable stonework, hidden seams, old cuts, and unsafe tunnels.",
    npc: "Durnik Stonebelly, quarry boss, or a quarry family elder",
    paths: "Fighter, Barbarian, Rogue, Paladin"
  },
  {
    name: "Farmhand",
    summary: "You help with planting, harvesting, animal care, fence repair, irrigation, and hard seasonal labor.",
    skill: "Animal Handling or Athletics",
    tool: "Cook's Utensils or Vehicles, land",
    gear: "Sickle, pitchfork or hoe, seed pouch, work gloves, lunch tin",
    perk: "You know the farmsteads, field paths, barns, ditches, and back trails around Ashwick.",
    npc: "A farming family, landholder, or field boss",
    paths: "Fighter, Ranger, Barbarian, Cleric, Monk"
  },
  {
    name: "Stablehand / Messenger",
    summary: "You care for horses, run messages, guide travelers, and know who enters or leaves Ashwick.",
    skill: "Animal Handling or Acrobatics",
    tool: "Vehicles, land",
    gear: "Riding gloves, feed pouch, brush, message tube, small knife",
    perk: "You usually know about travelers, caravans, and strangers before most villagers do.",
    npc: "The stable owner, innkeeper, or local courier",
    paths: "Rogue, Ranger, Fighter, Bard, Paladin"
  },
  {
    name: "Inn Worker",
    summary: "You work at the Broken Tankard serving food, cleaning rooms, carrying barrels, and overhearing travelers.",
    skill: "Persuasion or Insight",
    tool: "Brewer's Supplies or Cook's Utensils",
    gear: "Apron, serving knife, bottle opener, rag, small ledger, mug token",
    perk: "Once per session in Ashwick, you may ask what rumor is currently spreading through the village.",
    npc: "The innkeeper or a frequent traveler",
    paths: "Bard, Rogue, Fighter, Cleric, Warlock if later exposed to forbidden bargains"
  },
  {
    name: "Tanner / Leatherworker's Apprentice",
    summary: "You work with hides, furs, straps, boots, harnesses, armor padding, and water-resistant gear.",
    skill: "Nature or Sleight of Hand",
    tool: "Leatherworker's Tools",
    gear: "Awl, hide scraper, waxed thread, leather scraps, thick gloves",
    perk: "You can maintain leather gear and repair straps, pouches, slings, sheaths, and harnesses.",
    npc: "The village tanner or leatherworker",
    paths: "Rogue, Ranger, Fighter, Barbarian"
  },
  {
    name: "Weaver / Seamstress Apprentice",
    summary: "You make clothes, tents, blankets, rope, bandages, and padded armor components.",
    skill: "Sleight of Hand or Insight",
    tool: "Weaver's Tools",
    gear: "Sewing kit, measuring cord, cloth scraps, needles, heavy cloak",
    perk: "Given time and cloth, you can repair clothing, tents, packs, and padded gear.",
    npc: "A tailor, weaver, or family elder who knows everyone's business",
    paths: "Rogue, Bard, Monk, Cleric"
  },
  {
    name: "Scribe's Assistant",
    summary: "You help the village elder, shrine, merchant, or reeve with records, letters, contracts, maps, and ledgers.",
    skill: "History or Investigation",
    tool: "Calligrapher's Supplies or Cartographer's Tools",
    gear: "Ink, quill, parchment, sealing wax, small ledger, charcoal pencil",
    perk: "You can access village records and notice when names, debts, maps, dates, or stories do not line up.",
    npc: "The village elder, shrine keeper, reeve, or merchant",
    paths: "Wizard, Bard, Rogue, Cleric, Warlock"
  },
  {
    name: "Charcoal Burner / Woodcutter",
    summary: "You work in the woods cutting timber, making charcoal, stacking fuel, and maintaining forest paths.",
    skill: "Survival or Athletics",
    tool: "Woodcarver's Tools",
    gear: "Handaxe, charcoal sack, tinderbox, saw, heavy gloves",
    perk: "You know the safest woodcutting paths and can identify useful woods for fuel, construction, arrows, or crafting.",
    npc: "A woodcutter family or charcoal camp supervisor",
    paths: "Ranger, Barbarian, Fighter, Druid"
  },
  {
    name: "Beekeeper / Orchard Hand",
    summary: "You tend bees, fruit trees, wax, honey, cider, and seasonal harvests.",
    skill: "Nature or Animal Handling",
    tool: "Cook's Utensils or Brewer's Supplies",
    gear: "Smoker, veil, pruning knife, wax block, honey jar",
    perk: "When in Ashwick, you can produce small useful goods such as wax, honey, or soothing balm when time and supplies allow.",
    npc: "Orchard keeper, brewer, or elderly farmer",
    paths: "Druid, Ranger, Bard, Cleric, Rogue"
  },
  {
    name: "Ratcatcher / Cellar Runner",
    summary: "You handle pests, cellars, drains, crawlspaces, storehouses, and unpleasant jobs most villagers avoid.",
    skill: "Stealth or Perception",
    tool: "Thieves' Tools or Poisoner's Kit, if allowed by the DM as mundane pest-control tools",
    gear: "Short club, cage trap, gloves, sack, hooded lantern, chalk",
    perk: "You know hidden ways through barns, cellars, storehouses, drainage ditches, and crawlspaces.",
    npc: "The innkeeper, miller, warehouse keeper, or unpopular village official",
    paths: "Rogue, Ranger, Fighter, Warlock"
  },
  {
    name: "Militia Runner",
    summary: "You are too young to be a full guard, but you help clean weapons, carry messages, maintain alarms, and train with spears.",
    skill: "Athletics or Perception",
    tool: "Vehicles, land or Smith's Tools",
    gear: "Training spear, wooden shield, signal whistle, oil rag, simple helmet if allowed",
    perk: "You know village alarm procedures and can quickly rally local youths or militia members in an emergency.",
    npc: "Captain Rusk Vale or a retired soldier",
    paths: "Fighter, Paladin, Ranger, Barbarian"
  },
  {
    name: "Gravekeeper's Helper",
    summary: "You tend the cemetery, dig graves, maintain markers, and assist with funerals. In a world afraid of magic, the dead matter.",
    skill: "Religion or Medicine",
    tool: "Mason's Tools or Carpenter's Tools",
    gear: "Shovel, grave lantern, chalk, prayer cord, worn cloak",
    perk: "You know burial customs, old family plots, forgotten names, and which graves are older than the village claims.",
    npc: "Sister Cael, an undertaker, or an elderly record keeper",
    paths: "Cleric, Paladin, Rogue, Fighter, Warlock"
  }
];

const pointBuyCosts = {
  8: 0,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 7,
  15: 9
};

const storageKey = "ashwick-level-zero-sheet";
const mapStorageKey = "ashwick-map-state";
const statGrid = document.querySelector("#statGrid");
const skillList = document.querySelector("#skillList");
const checklistProgress = document.querySelector("#checklistProgress");
const speciesSelect = document.querySelector("#species");
const sourceBookSelect = document.querySelector("#sourceBook");
const occupationSelect = document.querySelector("#occupation");
const speciesDetails = document.querySelector("#speciesDetails");
const occupationDetails = document.querySelector("#occupationDetails");
const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));
const portraitInput = document.querySelector("#portraitInput");
const portraitDrop = document.querySelector("#portraitDrop");
const portraitPreview = document.querySelector("#portraitPreview");
const mapTokenName = document.querySelector("#mapTokenName");
const mapStage = document.querySelector("#mapStage");
const mapCanvas = document.querySelector("#mapCanvas");
const tokenLayer = document.querySelector("#tokenLayer");
const tokenList = document.querySelector("#tokenList");
const clearPortraitButton = document.querySelector("#clearPortrait");
const clearTokensButton = document.querySelector("#clearTokens");

let mapState = {
  portrait: "",
  tokens: []
};
let draggedToken = null;

function modifier(score) {
  return Math.floor((score - 10) / 2);
}

function signed(value) {
  return value >= 0 ? `+${value}` : `${value}`;
}

function clampScore(value) {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) return 10;
  return Math.min(20, Math.max(3, parsed));
}

function renderStats() {
  const template = document.querySelector("#statTemplate");

  abilities.forEach(([id, label, note]) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const input = node.querySelector("input");
    node.dataset.stat = id;
    node.querySelector("h3").textContent = label;
    node.querySelector(".stat-note").textContent = note;
    input.id = id;
    input.dataset.save = "";
    input.dataset.statInput = id;

    node.querySelector(".decrement").addEventListener("click", () => {
      input.value = clampScore(Number(input.value) - 1);
      updateStats();
      saveSheet();
    });

    node.querySelector(".increment").addEventListener("click", () => {
      input.value = clampScore(Number(input.value) + 1);
      updateStats();
      saveSheet();
    });

    input.addEventListener("input", () => {
      input.value = clampScore(input.value);
      updateStats();
      saveSheet();
    });

    statGrid.append(node);
  });
}

function renderSkills() {
  skills.forEach((skill) => {
    const id = `skill-${skill.toLowerCase().replace(/[^a-z]+/g, "-")}`;
    const label = document.createElement("label");
    label.innerHTML = `<input data-save id="${id}" type="checkbox"> ${skill}`;
    skillList.append(label);
  });
}

function renderSpeciesOptions() {
  speciesOptions.forEach((species) => {
    const option = document.createElement("option");
    option.value = species.name;
    option.textContent = `${species.name} - ${species.source}`;
    speciesSelect.append(option);
  });
}

function renderOccupationOptions() {
  occupations.forEach((occupation) => {
    const option = document.createElement("option");
    option.value = occupation.name;
    option.textContent = occupation.name;
    occupationSelect.append(option);
  });
}

function detailRow(label, value) {
  return `<div><b>${label}</b><span>${value}</span></div>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[char]));
}

function updateSpeciesDetails() {
  const selected = speciesOptions.find((species) => species.name === speciesSelect.value);
  if (!selected) {
    speciesDetails.innerHTML = "<strong>Choose a species to see source notes.</strong><p>Use traits normally unless the DM says active magic or supernatural powers begin dormant.</p>";
    return;
  }

  sourceBookSelect.value = selected.source;
  speciesDetails.innerHTML = `
    <strong>${selected.name}</strong>
    <p>${selected.note}</p>
    <div class="detail-list">
      ${detailRow("Source", selected.source)}
      ${detailRow("Ashwick note", "Check with the DM if this choice gives active magic, innate spellcasting, shapeshifting, or other obvious supernatural power.")}
    </div>
  `;
}

function updateOccupationDetails() {
  const selected = occupations.find((occupation) => occupation.name === occupationSelect.value);
  if (!selected) {
    occupationDetails.innerHTML = "<strong>Choose an occupation to see what it grants.</strong><p>Each Ashwick background gives 1 skill proficiency, 1 tool proficiency, starting gear, 1 practical perk, an NPC connection, and possible future class directions.</p>";
    return;
  }

  occupationDetails.innerHTML = `
    <strong>${selected.name}</strong>
    <p>${selected.summary}</p>
    <div class="detail-list">
      ${detailRow("Skill", selected.skill)}
      ${detailRow("Tool", selected.tool)}
      ${detailRow("Gear", selected.gear)}
      ${detailRow("Perk", selected.perk)}
      ${detailRow("NPC", selected.npc)}
      ${detailRow("Future paths", selected.paths)}
    </div>
  `;
}

function switchTab(targetId) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tabTarget === targetId);
  });
  tabPanels.forEach((panel) => {
    panel.hidden = panel.id !== targetId;
    panel.classList.toggle("active", panel.id === targetId);
  });
}

function getScores() {
  return Object.fromEntries(
    abilities.map(([id]) => [id, clampScore(document.querySelector(`#${id}`).value)])
  );
}

function updateStats() {
  const scores = getScores();

  abilities.forEach(([id]) => {
    const card = document.querySelector(`[data-stat="${id}"]`);
    card.querySelector(".modifier").textContent = signed(modifier(scores[id]));
  });

  const conModifier = modifier(scores.constitution);
  document.querySelector("#conMod").textContent = signed(conModifier);
  document.querySelector("#hpValue").textContent = Math.max(5, 8 + conModifier);

  let total = 0;
  let outOfRange = false;
  Object.values(scores).forEach((score) => {
    if (score < 8 || score > 15) {
      outOfRange = true;
      return;
    }
    total += pointBuyCosts[score];
  });

  document.querySelector("#pointBuyTotal").textContent = outOfRange ? "Manual range" : `${total} / 27`;
  document.querySelector("#temperament").textContent = getTemperament(scores);
}

function updateChecklistProgress() {
  const items = Array.from(document.querySelectorAll("#creationChecklist input[type='checkbox']"));
  const checked = items.filter((item) => item.checked).length;
  checklistProgress.textContent = `${checked} / ${items.length}`;
}

function getTemperament(scores) {
  const top = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const labels = {
    strength: "Sturdy",
    dexterity: "Quick",
    constitution: "Hardy",
    intelligence: "Studious",
    wisdom: "Watchful",
    charisma: "Bright"
  };
  return labels[top];
}

function fillScores(type) {
  const values = {
    standard: [15, 14, 13, 12, 10, 8],
    commoner: [10, 10, 10, 10, 10, 10],
    reset: [10, 10, 10, 10, 10, 10]
  }[type];

  abilities.forEach(([id], index) => {
    document.querySelector(`#${id}`).value = values[index];
  });

  updateStats();
  saveSheet();
}

function fieldKey(field, index) {
  if (field.type === "radio") return field.name;
  return field.id || `${field.tagName.toLowerCase()}-${index}`;
}

function allSaveFields() {
  return Array.from(document.querySelectorAll("[data-save]"));
}

function saveSheet() {
  const data = {};
  allSaveFields().forEach((field, index) => {
    if (field.type === "radio") {
      if (field.checked) data[fieldKey(field, index)] = field.value;
      return;
    }
    data[fieldKey(field, index)] = field.type === "checkbox" ? field.checked : field.value;
  });
  localStorage.setItem(storageKey, JSON.stringify(data));
  updateChecklistProgress();
}

function saveMapState() {
  localStorage.setItem(mapStorageKey, JSON.stringify(mapState));
}

function loadSheet() {
  const raw = localStorage.getItem(storageKey);
  if (!raw) {
    updateStats();
    return;
  }

  try {
    const data = JSON.parse(raw);
    allSaveFields().forEach((field, index) => {
      const key = fieldKey(field, index);
      if (!(key in data)) return;
      if (field.type === "checkbox") {
        field.checked = Boolean(data[key]);
      } else if (field.type === "radio") {
        field.checked = data[key] === field.value;
      } else {
        field.value = data[key];
      }
    });
  } catch {
    localStorage.removeItem(storageKey);
  }

  updateStats();
  updateChecklistProgress();
}

function exportJson() {
  saveSheet();
  const blob = new Blob([localStorage.getItem(storageKey) || "{}"], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const name = document.querySelector("#characterName").value.trim() || "ashwick-character";
  link.href = url;
  link.download = `${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function clearSheet() {
  if (!confirm("Clear this character sheet?")) return;
  localStorage.removeItem(storageKey);
  allSaveFields().forEach((field) => {
    if (field.type === "checkbox") {
      field.checked = false;
    } else if (field.type === "radio") {
      field.checked = false;
    } else if (field.dataset.statInput) {
      field.value = 10;
    } else {
      field.value = "";
    }
  });
  updateStats();
  updateChecklistProgress();
}

function loadMapState() {
  const raw = localStorage.getItem(mapStorageKey);
  if (!raw) {
    renderMapState();
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    mapState = {
      portrait: parsed.portrait || "",
      tokens: Array.isArray(parsed.tokens) ? parsed.tokens : []
    };
  } catch {
    localStorage.removeItem(mapStorageKey);
  }

  renderMapState();
}

function renderMapState() {
  renderPortraitPreview();
  renderTokens();
  renderTokenList();
}

function renderPortraitPreview() {
  if (mapState.portrait) {
    portraitPreview.innerHTML = `<img src="${mapState.portrait}" alt="Selected character thumbnail">`;
    return;
  }
  portraitPreview.innerHTML = "<span>No thumbnail selected</span>";
}

function tokenInitials(name) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "PC";
  return parts.slice(0, 2).map((part) => part[0]).join("").toUpperCase();
}

function tokenName() {
  return mapTokenName.value.trim() || document.querySelector("#characterName").value.trim() || "Ashwick Youth";
}

function renderTokens() {
  tokenLayer.innerHTML = "";
  mapState.tokens.forEach((token) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `map-token${token.image ? " has-image" : ""}`;
    button.dataset.tokenId = token.id;
    button.style.left = `${token.x}%`;
    button.style.top = `${token.y}%`;
    if (token.image) {
      button.style.backgroundImage = `url("${token.image}")`;
    }
    button.innerHTML = `<span>${escapeHtml(tokenInitials(token.name))}</span>`;
    button.title = `${token.name} - drag to move`;
    button.addEventListener("pointerdown", startTokenDrag);
    tokenLayer.append(button);
  });
}

function renderTokenList() {
  if (!mapState.tokens.length) {
    tokenList.innerHTML = '<div class="info-card"><strong>No one is on the map yet.</strong><p>Choose a thumbnail if you want, then click the map to place a character token.</p></div>';
    return;
  }

  tokenList.innerHTML = "";
  mapState.tokens.forEach((token) => {
    const row = document.createElement("div");
    row.className = "token-row";
    row.innerHTML = `<strong>${escapeHtml(token.name)}</strong><button type="button" data-remove-token="${token.id}">Remove</button>`;
    tokenList.append(row);
  });
}

function mapPointFromEvent(event) {
  const rect = mapCanvas.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  return {
    x: Math.max(0, Math.min(100, x)),
    y: Math.max(0, Math.min(100, y))
  };
}

function addToken(event) {
  if (event.target.closest(".map-token")) return;
  const point = mapPointFromEvent(event);
  const name = tokenName();
  mapState.tokens.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    name,
    x: point.x,
    y: point.y,
    image: mapState.portrait
  });
  saveMapState();
  renderMapState();
}

function startTokenDrag(event) {
  event.preventDefault();
  const tokenId = event.currentTarget.dataset.tokenId;
  draggedToken = mapState.tokens.find((token) => token.id === tokenId);
  event.currentTarget.setPointerCapture(event.pointerId);
}

function moveToken(event) {
  if (!draggedToken) return;
  const point = mapPointFromEvent(event);
  draggedToken.x = point.x;
  draggedToken.y = point.y;
  const tokenEl = tokenLayer.querySelector(`[data-token-id="${draggedToken.id}"]`);
  if (tokenEl) {
    tokenEl.style.left = `${draggedToken.x}%`;
    tokenEl.style.top = `${draggedToken.y}%`;
  }
  saveMapState();
}

function stopTokenDrag() {
  if (!draggedToken) return;
  draggedToken = null;
  saveMapState();
}

function removeToken(tokenId) {
  mapState.tokens = mapState.tokens.filter((token) => token.id !== tokenId);
  saveMapState();
  renderMapState();
}

function resizeImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const image = new Image();
      image.onerror = reject;
      image.onload = () => {
        const size = 180;
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = size;
        canvas.height = size;
        const scale = Math.max(size / image.width, size / image.height);
        const width = image.width * scale;
        const height = image.height * scale;
        const x = (size - width) / 2;
        const y = (size - height) / 2;
        ctx.drawImage(image, x, y, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.84));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

async function handlePortraitFile(file) {
  if (!file || !file.type.startsWith("image/")) return;
  mapState.portrait = await resizeImage(file);
  saveMapState();
  renderPortraitPreview();
}

renderStats();
renderSkills();
renderSpeciesOptions();
renderOccupationOptions();
loadSheet();
updateSpeciesDetails();
updateOccupationDetails();
loadMapState();

tabButtons.forEach((button) => {
  button.addEventListener("click", () => switchTab(button.dataset.tabTarget));
});

document.querySelectorAll("[data-save]").forEach((field) => {
  field.addEventListener("input", saveSheet);
  field.addEventListener("change", saveSheet);
});

speciesSelect.addEventListener("change", () => {
  updateSpeciesDetails();
  saveSheet();
});

occupationSelect.addEventListener("change", () => {
  updateOccupationDetails();
  saveSheet();
});

document.querySelectorAll("[data-fill]").forEach((button) => {
  button.addEventListener("click", () => fillScores(button.dataset.fill));
});

document.querySelector("#printSheet").addEventListener("click", () => window.print());
document.querySelector("#exportJson").addEventListener("click", exportJson);
document.querySelector("#clearSheet").addEventListener("click", clearSheet);
portraitInput.addEventListener("change", () => handlePortraitFile(portraitInput.files[0]));
portraitDrop.addEventListener("dragover", (event) => {
  event.preventDefault();
  portraitDrop.classList.add("is-dragging");
});
portraitDrop.addEventListener("dragleave", () => portraitDrop.classList.remove("is-dragging"));
portraitDrop.addEventListener("drop", (event) => {
  event.preventDefault();
  portraitDrop.classList.remove("is-dragging");
  handlePortraitFile(event.dataTransfer.files[0]);
});
clearPortraitButton.addEventListener("click", () => {
  mapState.portrait = "";
  portraitInput.value = "";
  saveMapState();
  renderPortraitPreview();
});
clearTokensButton.addEventListener("click", () => {
  if (!confirm("Clear all map tokens?")) return;
  mapState.tokens = [];
  saveMapState();
  renderMapState();
});
mapCanvas.addEventListener("click", addToken);
mapStage.addEventListener("pointermove", moveToken);
mapStage.addEventListener("pointerup", stopTokenDrag);
mapStage.addEventListener("pointercancel", stopTokenDrag);
window.addEventListener("pointerup", stopTokenDrag);
window.addEventListener("pointercancel", stopTokenDrag);
tokenList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-token]");
  if (!button) return;
  removeToken(button.dataset.removeToken);
});
