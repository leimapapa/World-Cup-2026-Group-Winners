// ─────────────────────────────────────────────────────────────────────────────
//  2026 FIFA World Cup – All 12 Groups
// ─────────────────────────────────────────────────────────────────────────────
const ALL_GROUPS = [
  // ── GROUP A  ──
  {
    groupName: "Group A",
    teams: [
      { id: 1, name: "Mexico",        flagCode: "mx", GP: 2, W: 2, D: 0, L: 0, GD:  3 },
      { id: 2, name: "South Africa", flagCode: "za", GP: 2, W: 0, D: 1, L: 1, GD: -1 },
      { id: 3, name: "South Korea",   flagCode: "kr", GP: 2, W: 1, D: 0, L: 1, GD:  0 },
      { id: 4, name: "Czechia",       flagCode: "cz", GP: 2, W: 0, D: 1, L: 1, GD: -2 },
    ]
  },
  // ── GROUP B ──
  {
    groupName: "Group B",
    teams: [
      { id: 1, name: "Canada",         flagCode: "ca", GP: 2, W: 1, D: 1, L: 0, GD:  6 },
      { id: 2, name: "Qatar",          flagCode: "qa", GP: 2, W: 0, D: 1, L: 1, GD: -6 },
      { id: 3, name: "Bosnia & Herz.", flagCode: "ba", GP: 2, W: 0, D: 1, L: 1, GD: -3 },
      { id: 4, name: "Switzerland",    flagCode: "ch", GP: 2, W: 1, D: 1, L: 0, GD:  3 },
    ]
  },
  // ── GROUP C ──
  {
    groupName: "Group C",
    teams: [
      { id: 1, name: "Brazil",   flagCode: "br",     GP: 2, W: 1, D: 1, L: 0, GD:  3 },
      { id: 2, name: "Morocco",  flagCode: "ma",     GP: 2, W: 1, D: 1, L: 0, GD:  1 },
      { id: 3, name: "Haiti",    flagCode: "ht",     GP: 2, W: 0, D: 0, L: 2, GD: -4 },
      { id: 4, name: "Scotland", flagCode: "gb-sct", GP: 2, W: 1, D: 0, L: 1, GD:  0 },
    ]
  },
  // ── GROUP D ──
  {
    groupName: "Group D",
    teams: [
      { id: 1, name: "USA",       flagCode: "us", GP: 2, W: 2, D: 0, L: 0, GD:  5 },
      { id: 2, name: "Paraguay",  flagCode: "py", GP: 2, W: 1, D: 0, L: 1, GD: -2 },
      { id: 3, name: "Australia", flagCode: "au", GP: 2, W: 1, D: 0, L: 1, GD:  0 },
      { id: 4, name: "Turkey",    flagCode: "tr", GP: 2, W: 0, D: 0, L: 2, GD: -3 },
    ]
  },
  // ── GROUP E (MD1 only, MD2 on June 20) ──
  {
    groupName: "Group E",
    teams: [
      { id: 1, name: "Germany",     flagCode: "de", GP: 2, W: 2, D: 0, L: 0, GD:  7 },
      { id: 2, name: "Curacao",     flagCode: "cw", GP: 2, W: 0, D: 1, L: 1, GD: -6 },
      { id: 3, name: "Ivory Coast", flagCode: "ci", GP: 2, W: 1, D: 0, L: 1, GD:  0 },
      { id: 4, name: "Ecuador",     flagCode: "ec", GP: 2, W: 0, D: 1, L: 1, GD: -1 },
    ]
  },
  // ── GROUP F (MD1 only, MD2 on June 20) ──
  {
    groupName: "Group F",
    teams: [
      { id: 1, name: "Netherlands", flagCode: "nl", GP: 2, W: 0, D: 1, L: 0, GD:  4 },
      { id: 2, name: "Japan",       flagCode: "jp", GP: 1, W: 0, D: 1, L: 0, GD:  0 },
      { id: 3, name: "Sweden",      flagCode: "se", GP: 2, W: 1, D: 0, L: 0, GD:  0 },
      { id: 4, name: "Tunisia",     flagCode: "tn", GP: 1, W: 0, D: 0, L: 1, GD: -4 },
    ]
  },
  // ── GROUP G (MD1 only, MD2 on June 21) ──
  {
    groupName: "Group G",
    teams: [
      { id: 1, name: "Belgium",     flagCode: "be", GP: 1, W: 0, D: 1, L: 0, GD:  0 },
      { id: 2, name: "Egypt",       flagCode: "eg", GP: 1, W: 0, D: 1, L: 0, GD:  0 },
      { id: 3, name: "Iran",        flagCode: "ir", GP: 1, W: 0, D: 1, L: 0, GD:  0 },
      { id: 4, name: "New Zealand", flagCode: "nz", GP: 1, W: 0, D: 1, L: 0, GD:  0 },
    ]
  },
  // ── GROUP H (MD1 only, MD2 on June 21) ──
  {
    groupName: "Group H",
    teams: [
      { id: 1, name: "Spain",        flagCode: "es", GP: 1, W: 0, D: 1, L: 0, GD:  0 },
      { id: 2, name: "Cape Verde",   flagCode: "cv", GP: 1, W: 0, D: 1, L: 0, GD:  0 },
      { id: 3, name: "Saudi Arabia", flagCode: "sa", GP: 1, W: 0, D: 1, L: 0, GD:  0 },
      { id: 4, name: "Uruguay",      flagCode: "uy", GP: 1, W: 0, D: 1, L: 0, GD:  0 },
    ]
  },
  // ── GROUP I (MD1 only, MD2 on June 22-23) ──
  {
    groupName: "Group I",
    teams: [
      { id: 1, name: "France",  flagCode: "fr", GP: 1, W: 1, D: 0, L: 0, GD:  2 },
      { id: 2, name: "Senegal", flagCode: "sn", GP: 1, W: 0, D: 0, L: 1, GD: -2 },
      { id: 3, name: "Iraq",    flagCode: "iq", GP: 1, W: 0, D: 0, L: 1, GD: -3 },
      { id: 4, name: "Norway",  flagCode: "no", GP: 1, W: 1, D: 0, L: 0, GD:  3 },
    ]
  },
  // ── GROUP J (MD1 only, MD2 on June 22) ──
  {
    groupName: "Group J",
    teams: [
      { id: 1, name: "Argentina", flagCode: "ar", GP: 1, W: 1, D: 0, L: 0, GD:  3 },
      { id: 2, name: "Algeria",   flagCode: "dz", GP: 1, W: 0, D: 0, L: 1, GD: -3 },
      { id: 3, name: "Austria",   flagCode: "at", GP: 1, W: 1, D: 0, L: 0, GD:  2 },
      { id: 4, name: "Jordan",    flagCode: "jo", GP: 1, W: 0, D: 0, L: 1, GD: -2 },
    ]
  },
  // ── GROUP K (MD1 only, MD2 on June 23) ──
  {
    groupName: "Group K",
    teams: [
      { id: 1, name: "Portugal",  flagCode: "pt", GP: 1, W: 0, D: 1, L: 0, GD:  0 },
      { id: 2, name: "DR Congo",  flagCode: "cd", GP: 1, W: 0, D: 1, L: 0, GD:  0 },
      { id: 3, name: "Uzbekistan", flagCode: "uz", GP: 1, W: 0, D: 0, L: 1, GD: -2 },
      { id: 4, name: "Colombia",  flagCode: "co", GP: 1, W: 1, D: 0, L: 0, GD:  2 },
    ]
  },
  // ── GROUP L (MD1 only, MD2 on June 23) ──
  {
    groupName: "Group L",
    teams: [
      { id: 1, name: "England", flagCode: "gb-eng", GP: 1, W: 1, D: 0, L: 0, GD:  2 },
      { id: 2, name: "Croatia", flagCode: "hr",     GP: 1, W: 0, D: 0, L: 1, GD: -2 },
      { id: 3, name: "Ghana",   flagCode: "gh",     GP: 1, W: 1, D: 0, L: 0, GD:  1 },
      { id: 4, name: "Panama",  flagCode: "pa",     GP: 1, W: 0, D: 0, L: 1, GD: -1 },
    ]
  },
];

// ─── State ────────────────────────────────────────────────────────────────────
let currentGroupIndex = 0;
let groupData         = null;   // active group (deep copy)
let initialTeamData   = null;
let teams12 = false;
let teams34 = false;
let handleRefs = {};            // { h1, h2, h3, h4 }

// ─── DOM Refs ─────────────────────────────────────────────────────────────────
const teamTableBody = document.getElementById("teamTableBody");
const groupTitle    = document.querySelector(".groupName");
const groupNav      = document.getElementById("groupNav");
const matchLabel1   = document.getElementById("matchLabel1");
const matchLabel2   = document.getElementById("matchLabel2");

// ─── Helpers ──────────────────────────────────────────────────────────────────
function calculatePoints(team) {
  return team.W * 3 + team.D;
}

// Evaluates pairing indices based on group's standing GP: 0 -> MD1, 1 -> MD2, 2 -> MD3
function getPairingIndices() {
  if (!initialTeamData) return [[0, 1], [2, 3]];
  const gp = initialTeamData[0].GP;
  if (gp === 0) return [[0, 1], [2, 3]]; // MD1
  if (gp === 1) return [[0, 2], [1, 3]]; // MD2
  return [[0, 3], [1, 2]];               // MD3
}

// ─── Build group nav ──────────────────────────────────────────────────────
function buildGroupNav() {
  groupNav.innerHTML = "";
  ALL_GROUPS.forEach((g, i) => {
    const letter = g.groupName.split(" ")[1]; // "A"–"L"
    const btn = document.createElement("button");
    btn.className  = "group-btn" + (i === currentGroupIndex ? " active" : "");
    btn.textContent = letter;
    btn.title       = g.groupName;
    btn.addEventListener("click", () => switchGroup(i));
    groupNav.appendChild(btn);
  });
}

// ─── Switch active group ──────────────────────────────────────────────────────
function switchGroup(index) {
  currentGroupIndex = index;

  // Reset state
  teams12 = false;
  teams34 = false;

  // Deep copy the chosen group
  const source = ALL_GROUPS[index];
  groupData       = JSON.parse(JSON.stringify(source));
  initialTeamData = JSON.parse(JSON.stringify(source.teams));

  // Reset handles to center (draw)
  Object.values(handleRefs).forEach(h => h && h.setPos(2));

  // Clear row highlight
  document.querySelectorAll("#teamTableBody tr").forEach(r => r.style.background = "");

  // Re-render
  renderTable();
  initFlags();
  updateMatchLabels();
  updateNavActive();
}

function updateNavActive() {
  document.querySelectorAll(".group-btn").forEach((btn, i) => {
    btn.classList.toggle("active", i === currentGroupIndex);
  });
}

// ─── Match labels ─────────────────────────────────────────────────────────────
function updateMatchLabels() {
  if (!groupData) return;
  const [[a1, b1], [a2, b2]] = getPairingIndices();
  matchLabel1.textContent = `${groupData.teams[a1].name} vs ${groupData.teams[b1].name}`;
  matchLabel2.textContent = `${groupData.teams[a2].name} vs ${groupData.teams[b2].name}`;
}

// ─── Table ────────────────────────────────────────────────────────────────────
function renderTable() {
  groupTitle.textContent = groupData.groupName;
  teamTableBody.innerHTML = "";
  groupData.teams.forEach(team => {
    const pts = calculatePoints(team);
    const row = teamTableBody.insertRow();
    row.className = `teamTbl${team.id}`;
    row.innerHTML = `
      <td class="teamName"><span class="fi fi-${team.flagCode}"></span>${team.name}</td>
      <td class="gamesPlayed">${team.GP}</td>
      <td class="wins">${team.W}</td>
      <td class="draws">${team.D}</td>
      <td class="losses">${team.L}</td>
      <td class="goalDiff">${team.GD > 0 ? "+" : ""}${team.GD}</td>
      <td class="points">${pts}</td>
    `;
  });
}

// ─── Stat update ──────────────────────────────────────────────────────────────
function updateTeamStats(teamId, outcome) {
  const teamRow     = document.querySelector(`.teamTbl${teamId}`);
  const team        = groupData.teams.find(t => t.id === teamId);
  const initialTeam = initialTeamData.find(t => t.id === teamId);

  team.W = initialTeam.W;
  team.D = initialTeam.D;
  team.L = initialTeam.L;

  if (outcome === "W") team.W += 1;
  else if (outcome === "D") team.D += 1;
  else if (outcome === "L") team.L += 1;

  team.GP = initialTeam.GP + 1;
  const pts = calculatePoints(team);

  if (teamRow) {
    teamRow.querySelector(".points").textContent      = pts;
    teamRow.querySelector(".gamesPlayed").textContent = team.GP;
    teamRow.querySelector(".wins").textContent        = team.W;
    teamRow.querySelector(".draws").textContent       = team.D;
    teamRow.querySelector(".losses").textContent      = team.L;
  }
}

// ─── Standings highlight ─────────────────────────────────────────────────────
function whoThru() {
  if (!teams12 || !teams34) return;

  const standings = groupData.teams.map(team => {
    const row = document.querySelector(`.teamTbl${team.id}`);
    return {
      id:  team.id,
      PTS: parseInt(row.querySelector(".points").textContent),
      GD:  parseInt(row.querySelector(".goalDiff").textContent)
    };
  });

  standings.sort((a, b) => b.PTS !== a.PTS ? b.PTS - a.PTS : b.GD - a.GD);
  const advancing = [standings[0].id, standings[1].id];

  groupData.teams.forEach(team => {
    const row = document.querySelector(`.teamTbl${team.id}`);
    if (advancing.includes(team.id)) {
      row.style.background = "rgba(74,222,128,0.35)";
    } else {
      row.style.background = "rgba(248,113,113,0.35)";
    }
  });
}

// ─── Custom drag handle ───────────────────────────────────────────────────────
function setupHandle(handleId, trackId, onChangeCb) {
  const handle = document.getElementById(handleId);
  const track  = document.getElementById(trackId);
  let currentPos = 2;
  let dragging   = false;

  function snapToPosition(pos) {
    const offsets = { 1: 10, 2: 50, 3: 90 };
    handle.style.top = offsets[pos] + "%";
    currentPos = pos;
  }

  function posFromY(clientY) {
    const rect = track.getBoundingClientRect();
    const pct  = (clientY - rect.top) / rect.height;
    if (pct < 0.33) return 1;
    if (pct < 0.67) return 2;
    return 3;
  }

  handle.addEventListener("pointerdown", e => {
    dragging = true;
    handle.setPointerCapture(e.pointerId);
    handle.style.transition = "none";
    e.preventDefault();
  });

  handle.addEventListener("pointermove", e => {
    if (!dragging) return;
    const newPos = posFromY(e.clientY);
    if (newPos !== currentPos) {
      snapToPosition(newPos);
      onChangeCb(newPos);
    }
  });

  handle.addEventListener("pointerup", () => {
    dragging = false;
    handle.style.transition = "";
  });

  track.addEventListener("click", e => {
    if (e.target === handle || handle.contains(e.target)) return;
    const newPos = posFromY(e.clientY);
    if (newPos !== currentPos) {
      snapToPosition(newPos);
      onChangeCb(newPos);
    }
  });

  return {
    setPos(pos) { snapToPosition(pos); currentPos = pos; },
    getPos()    { return currentPos; }
  };
}

// ─── Wire handles ─────────────────────────────────────────────────────────────
function wireHandles() {
  // Helper to extract the explicit dynamic teams live depending on the group matchday matrix
  const getTeamsForMatch = (matchIdx) => {
    const [[a1, b1], [a2, b2]] = getPairingIndices();
    return matchIdx === 0 
      ? [groupData.teams[a1], groupData.teams[b1]] 
      : [groupData.teams[a2], groupData.teams[b2]];
  };

  const h1 = setupHandle("handle1", "track1", pos => {
    teams12 = true;
    const [teamA, teamB] = getTeamsForMatch(0);
    if      (pos === 1) { updateTeamStats(teamA.id,"W"); updateTeamStats(teamB.id,"L"); handleRefs.h2.setPos(3); }
    else if (pos === 2) { updateTeamStats(teamA.id,"D"); updateTeamStats(teamB.id,"D"); handleRefs.h2.setPos(2); }
    else                { updateTeamStats(teamA.id,"L"); updateTeamStats(teamB.id,"W"); handleRefs.h2.setPos(1); }
    whoThru();
  });
  
  const h2 = setupHandle("handle2", "track2", pos => {
    teams12 = true;
    const [teamA, teamB] = getTeamsForMatch(0);
    if      (pos === 1) { updateTeamStats(teamB.id,"W"); updateTeamStats(teamA.id,"L"); handleRefs.h1.setPos(3); }
    else if (pos === 2) { updateTeamStats(teamB.id,"D"); updateTeamStats(teamA.id,"D"); handleRefs.h1.setPos(2); }
    else                { updateTeamStats(teamB.id,"L"); updateTeamStats(teamA.id,"W"); handleRefs.h1.setPos(1); }
    whoThru();
  });
  
  const h3 = setupHandle("handle3", "track3", pos => {
    teams34 = true;
    const [teamC, teamD] = getTeamsForMatch(1);
    if      (pos === 1) { updateTeamStats(teamC.id,"W"); updateTeamStats(teamD.id,"L"); handleRefs.h4.setPos(3); }
    else if (pos === 2) { updateTeamStats(teamC.id,"D"); updateTeamStats(teamD.id,"D"); handleRefs.h4.setPos(2); }
    else                { updateTeamStats(teamC.id,"L"); updateTeamStats(teamD.id,"W"); handleRefs.h4.setPos(1); }
    whoThru();
  });
  
  const h4 = setupHandle("handle4", "track4", pos => {
    teams34 = true;
    const [teamC, teamD] = getTeamsForMatch(1);
    if      (pos === 1) { updateTeamStats(teamD.id,"W"); updateTeamStats(teamC.id,"L"); handleRefs.h3.setPos(3); }
    else if (pos === 2) { updateTeamStats(teamD.id,"D"); updateTeamStats(teamC.id,"D"); handleRefs.h3.setPos(2); }
    else                { updateTeamStats(teamD.id,"L"); updateTeamStats(teamC.id,"W"); handleRefs.h3.setPos(1); }
    whoThru();
  });
  
  handleRefs = { h1, h2, h3, h4 };
}

// ─── Set flag classes ─────────────────────────────────────────────────────────
function initFlags() {
  if (!groupData) return;
  const [[a1, b1], [a2, b2]] = getPairingIndices();
  const visualOrder = [a1, b1, a2, b2];

  for (let i = 1; i <= 4; i++) {
    const team = groupData.teams[visualOrder[i - 1]];
    const span = document.getElementById(`flag${i}`);
    if (span && team) {
      span.className = "fi fi-" + team.flagCode;
    }
  }
}

// ─── Boot ─────────────────────────────────────────────────────────────────────
buildGroupNav();
wireHandles();
switchGroup(0); // load Group A
