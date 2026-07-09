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
const statGrid = document.querySelector("#statGrid");
const skillList = document.querySelector("#skillList");
const checklistProgress = document.querySelector("#checklistProgress");

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

renderStats();
renderSkills();
loadSheet();

document.querySelectorAll("[data-save]").forEach((field) => {
  field.addEventListener("input", saveSheet);
  field.addEventListener("change", saveSheet);
});

document.querySelectorAll("[data-fill]").forEach((button) => {
  button.addEventListener("click", () => fillScores(button.dataset.fill));
});

document.querySelector("#printSheet").addEventListener("click", () => window.print());
document.querySelector("#exportJson").addEventListener("click", exportJson);
document.querySelector("#clearSheet").addEventListener("click", clearSheet);
