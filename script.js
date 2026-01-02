'use strict';

const fallbackDataset = [
  {
    date: '2024-10-31',
    values: {
      mecalex: 0,
      dewminic: 0,
      dgale: 0,
      migwynkriid: 0,
      cheesus0712: 0,
      rudolfzzz117: 0,
      gyuki: 0,
      kaewein: 0,
      kelemen: 0,
      t8mz: 0,
      pravipero: 0,
      modil: 0,
      bicaro: 0,
      gale4047: 0,
      marinasmiljan1010: 0,
      lovidex: 0,
      'b.b.johnny': 0,
    },
  },
  {
    date: '2024-11-01',
    values: {
      mecalex: 1003,
      dewminic: 537,
      dgale: 882,
      migwynkriid: 308,
      cheesus0712: 5,
      rudolfzzz117: 0,
      gyuki: 198,
      kaewein: 0,
      kelemen: 0,
      t8mz: 0,
      pravipero: 0,
      modil: 0,
      bicaro: 0,
      gale4047: 0,
      marinasmiljan1010: 0,
      lovidex: 0,
      'b.b.johnny': 0,
    },
  },
  {
    date: '2024-12-01',
    values: {
      mecalex: 6638,
      dewminic: 5155,
      dgale: 4402,
      migwynkriid: 3827,
      cheesus0712: 1945,
      rudolfzzz117: 643,
      gyuki: 1466,
      kaewein: 0,
      kelemen: 0,
      t8mz: 0,
      pravipero: 0,
      modil: 192,
      bicaro: 228,
      gale4047: 0,
      marinasmiljan1010: 0,
      lovidex: 0,
      'b.b.johnny': 0,
    },
  },
  {
    date: '2025-01-01',
    values: {
      mecalex: 15096,
      dewminic: 12386,
      dgale: 10933,
      migwynkriid: 8335,
      cheesus0712: 5305,
      rudolfzzz117: 2083,
      gyuki: 3127,
      kaewein: 0,
      kelemen: 0,
      t8mz: 682,
      pravipero: 0,
      modil: 192,
      bicaro: 228,
      gale4047: 0,
      marinasmiljan1010: 0,
      lovidex: 0,
      'b.b.johnny': 0,
    },
  },
  {
    date: '2025-02-01',
    values: {
      mecalex: 20927,
      dewminic: 17235,
      dgale: 13677,
      migwynkriid: 13567,
      cheesus0712: 6673,
      rudolfzzz117: 2083,
      gyuki: 4861,
      kaewein: 95,
      kelemen: 0,
      t8mz: 747,
      pravipero: 0,
      modil: 192,
      bicaro: 228,
      gale4047: 0,
      marinasmiljan1010: 0,
      lovidex: 0,
      'b.b.johnny': 10,
    },
  },
  {
    date: '2025-03-01',
    values: {
      mecalex: 30751,
      dewminic: 26709,
      dgale: 18515,
      migwynkriid: 17170,
      cheesus0712: 10272,
      rudolfzzz117: 2337,
      gyuki: 7216,
      kaewein: 110,
      kelemen: 0,
      t8mz: 747,
      pravipero: 96,
      modil: 192,
      bicaro: 294,
      gale4047: 0,
      marinasmiljan1010: 0,
      lovidex: 0,
      'b.b.johnny': 10,
    },
  },
  {
    date: '2025-04-01',
    values: {
      mecalex: 35226,
      dewminic: 30983,
      dgale: 21195,
      migwynkriid: 18089,
      cheesus0712: 13019,
      rudolfzzz117: 3994,
      gyuki: 7216,
      kaewein: 110,
      kelemen: 0,
      t8mz: 747,
      pravipero: 967,
      modil: 423,
      bicaro: 294,
      gale4047: 0,
      marinasmiljan1010: 0,
      lovidex: 0,
      'b.b.johnny': 10,
    },
  },
  {
    date: '2025-05-01',
    values: {
      mecalex: 41260,
      dewminic: 36944,
      dgale: 25549,
      migwynkriid: 22149,
      cheesus0712: 13745,
      rudolfzzz117: 5653,
      gyuki: 8745,
      kaewein: 127,
      kelemen: 0,
      t8mz: 747,
      pravipero: 1019,
      modil: 650,
      bicaro: 294,
      gale4047: 99,
      marinasmiljan1010: 0,
      lovidex: 0,
      'b.b.johnny': 10,
    },
  },
  {
    date: '2025-06-01',
    values: {
      mecalex: 42877,
      dewminic: 38557,
      dgale: 26579,
      migwynkriid: 23407,
      cheesus0712: 15220,
      rudolfzzz117: 6506,
      gyuki: 9177,
      kaewein: 127,
      kelemen: 0,
      t8mz: 747,
      pravipero: 1019,
      modil: 650,
      bicaro: 294,
      gale4047: 99,
      marinasmiljan1010: 75,
      lovidex: 74,
      'b.b.johnny': 10,
    },
  },
  {
    date: '2025-07-01',
    values: {
      mecalex: 47296,
      dewminic: 40970,
      dgale: 29774,
      migwynkriid: 27260,
      cheesus0712: 16528,
      rudolfzzz117: 8120,
      gyuki: 10049,
      kaewein: 133,
      kelemen: 0,
      t8mz: 983,
      pravipero: 1019,
      modil: 652,
      bicaro: 294,
      gale4047: 99,
      marinasmiljan1010: 75,
      lovidex: 74,
      'b.b.johnny': 10,
    },
  },
  {
    date: '2025-08-01',
    values: {
      mecalex: 49202,
      dewminic: 41794,
      dgale: 30293,
      migwynkriid: 29498,
      cheesus0712: 17178,
      rudolfzzz117: 8426,
      gyuki: 10162,
      kaewein: 133,
      kelemen: 1334,
      t8mz: 1023,
      pravipero: 1019,
      modil: 652,
      bicaro: 294,
      gale4047: 99,
      marinasmiljan1010: 75,
      lovidex: 74,
      'b.b.johnny': 10,
    },
  },
  {
    date: '2025-09-01',
    values: {
      mecalex: 52781,
      dewminic: 44884,
      dgale: 33357,
      migwynkriid: 33341,
      cheesus0712: 18859,
      rudolfzzz117: 9662,
      gyuki: 10238,
      kaewein: 655,
      kelemen: 3058,
      t8mz: 1132,
      pravipero: 1019,
      modil: 652,
      bicaro: 294,
      gale4047: 99,
      marinasmiljan1010: 75,
      lovidex: 74,
      'b.b.johnny': 10,
    },
  },
  {
    date: '2025-10-01',
    values: {
      mecalex: 57300,
      dewminic: 50280,
      dgale: 37323,
      migwynkriid: 37830,
      cheesus0712: 20311,
      rudolfzzz117: 12523,
      gyuki: 10239,
      kaewein: 3291,
      kelemen: 3691,
      t8mz: 1132,
      pravipero: 1019,
      modil: 727,
      bicaro: 294,
      gale4047: 99,
      marinasmiljan1010: 75,
      lovidex: 74,
      'b.b.johnny': 10,
    },
  },
  {
    date: '2025-11-01',
    values: {
      mecalex: 60158,
      dewminic: 54001,
      dgale: 41269,
      migwynkriid: 40009,
      cheesus0712: 22427,
      rudolfzzz117: 13812,
      gyuki: 10431,
      kaewein: 5108,
      kelemen: 3895,
      t8mz: 1132,
      pravipero: 1019,
      modil: 727,
      bicaro: 294,
      gale4047: 99,
      marinasmiljan1010: 75,
      lovidex: 74,
      'b.b.johnny': 10,
    },
  },
  {
    date: '2025-12-01',
    values: {
      mecalex: 61408,
      dewminic: 57638,
      dgale: 45014,
      migwynkriid: 41298,
      cheesus0712: 23575,
      rudolfzzz117: 14021,
      gyuki: 12280,
      kaewein: 5747,
      kelemen: 4234,
      t8mz: 1352,
      pravipero: 1019,
      modil: 727,
      bicaro: 294,
      gale4047: 99,
      marinasmiljan1010: 75,
      lovidex: 74,
      'b.b.johnny': 10,
    },
  },
];

const templateValues = fallbackDataset[0]?.values || {};
const people = Object.keys(templateValues);
let dataset = fallbackDataset.map((entry) => cloneEntry(entry));

const palette = people.map((_, index) => {
  const hue = (index * 360) / people.length + 160;
  return `hsl(${hue % 360}, 70%, 60%)`;
});

const DATASET_PATH = 'data/2025/daily-summary.json';

const canvas = document.getElementById('chartCanvas');
const ctx = canvas.getContext('2d');
const legendEl = document.getElementById('legend');
const timelineEl = document.getElementById('timeline');
const currentMonthEl = document.getElementById('currentMonth');
const currentLeaderEl = document.getElementById('currentLeader');
const replayButton = document.getElementById('replayButton');

const monthFormatter = new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' });
const shortFormatter = new Intl.DateTimeFormat('en', { month: 'short' });
const compactNumber = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 });
const wholeNumber = new Intl.NumberFormat('en');

let maxValue = computeMax(dataset);

const config = {
  monthDuration: 1500,
};

async function loadPreferredDataset() {
  try {
    const response = await fetch(DATASET_PATH, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`Failed to fetch dataset (${response.status})`);
    }
    const payload = await response.json();
    if (!Array.isArray(payload) || payload.length === 0) {
      throw new Error('Daily dataset is empty.');
    }

    const merged = new Map(
      fallbackDataset.map((entry) => [entry.date, cloneEntry(entry)])
    );

    payload.forEach((rawEntry) => {
      const prepared = normaliseEntry(rawEntry);
      if (prepared) {
        merged.set(prepared.date, prepared);
      }
    });

    return Array.from(merged.values()).sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
  } catch (error) {
    console.warn('Falling back to embedded dataset.', error);
    return fallbackDataset.map((entry) => cloneEntry(entry));
  }
}

function normaliseEntry(entry) {
  if (!entry || typeof entry !== 'object' || !entry.date || !entry.values) {
    return null;
  }
  const values = {};
  people.forEach((person) => {
    const rawValue = Number(entry.values[person]);
    values[person] = Number.isFinite(rawValue) ? Math.round(rawValue) : 0;
  });
  return { date: entry.date, values };
}

function cloneEntry(entry) {
  if (!entry) {
    return { date: '', values: {} };
  }
  return {
    date: entry.date,
    values: { ...entry.values },
  };
}

function computeMax(data) {
  const flattened = data.flatMap((item) => Object.values(item.values || {}));
  const candidate = Math.max(...flattened, 0);
  return candidate > 0 ? candidate : 1;
}

function buildTimelineMeta(data) {
  const months = [];
  const intervals = [];
  if (!data.length) {
    return { months, intervals };
  }

  let currentKey = null;
  let startIndex = 0;

  data.forEach((entry, index) => {
    const key = entry.date.slice(0, 7);
    if (key !== currentKey) {
      if (currentKey !== null) {
        intervals.push({ key: currentKey, start: startIndex, end: index - 1 });
      }
      currentKey = key;
      startIndex = index;
      months.push({ key, date: entry.date });
    }

    if (index === data.length - 1) {
      intervals.push({ key, start: startIndex, end: index });
    }
  });

  return { months, intervals };
}

const legendValueMap = new Map();
let timelineNodes = [];
let timelineMonths = [];
let timelineIntervals = [];
let chartBounds = { left: 80, top: 60, right: 0, bottom: 0 };
let startTime = null;
let rafId = null;
let playbackProgress = 0;
let resumeProgress = 0;
let isComplete = false;

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  const cssWidth = canvas.clientWidth || canvas.parentElement.clientWidth || 960;
  const cssHeight = canvas.clientHeight || Math.min(560, cssWidth * 0.6);

  canvas.width = cssWidth * ratio;
  canvas.height = cssHeight * ratio;
  canvas.style.width = `${cssWidth}px`;
  canvas.style.height = `${cssHeight}px`;

  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.scale(ratio, ratio);

  chartBounds = {
    left: 48,
    top: 40,
    right: cssWidth - 32,
    bottom: cssHeight - 48,
  };

  draw(playbackProgress);
}

function buildLegend() {
  legendEl.innerHTML = '';
  legendValueMap.clear();
  const fragment = document.createDocumentFragment();
  people.forEach((person, index) => {
    const card = document.createElement('article');
    card.className = 'legend-card';
    card.innerHTML = `
      <span class="swatch" style="--swatch:${palette[index]}"></span>
      <div class="legend-copy">
        <p class="label">${person}</p>
        <p class="value" data-person="${person}">0</p>
      </div>
    `;
    fragment.appendChild(card);
  });
  legendEl.appendChild(fragment);
  legendEl.querySelectorAll('[data-person]').forEach((node) => {
    legendValueMap.set(node.dataset.person, node);
  });
}

function buildTimeline() {
  timelineEl.innerHTML = '';
  const fragment = document.createDocumentFragment();
  timelineNodes = timelineMonths.map((month) => {
    const date = new Date(month.date);
    const node = document.createElement('div');
    node.className = 'timeline-node';
    node.innerHTML = `
      <span class="timeline-label">${shortFormatter.format(date)}</span>
      <span class="timeline-year">${String(date.getFullYear()).slice(-2)}</span>
    `;
    fragment.appendChild(node);
    return node;
  });
  timelineEl.appendChild(fragment);
}

function startAnimation(offset = 0) {
  cancelAnimationFrame(rafId);
  resumeProgress = offset;
  playbackProgress = offset;
  startTime = null;
  isComplete = false;
  if (!dataset.length) {
    console.warn('Dataset is empty; nothing to animate.');
    return;
  }
  rafId = requestAnimationFrame(step);
}

function step(timestamp) {
  if (isComplete) {
    return;
  }
  if (!startTime) {
    startTime = timestamp - resumeProgress * config.monthDuration;
  }
  const totalMonths = dataset.length - 1;
  const elapsed = timestamp - startTime;
  const monthsFloat = Math.min(totalMonths, elapsed / config.monthDuration);
  draw(monthsFloat);

  if (monthsFloat >= totalMonths) {
    isComplete = true;
    cancelAnimationFrame(rafId);
    return;
  }

  rafId = requestAnimationFrame(step);
}

function restartAnimation() {
  startAnimation(0);
}

function draw(monthsFloat) {
  playbackProgress = monthsFloat;
  const width = canvas.width / (window.devicePixelRatio || 1);
  const height = canvas.height / (window.devicePixelRatio || 1);

  ctx.clearRect(0, 0, width, height);
  if (!dataset.length) {
    currentMonthEl.textContent = '—';
    currentLeaderEl.textContent = 'Awaiting data';
    return;
  }

  paintBackdrop();
  drawGrid();
  drawLines(monthsFloat);
  const isFinalFrame = monthsFloat >= dataset.length - 1 - 0.0001;
  updateMetadata(monthsFloat, isFinalFrame);
}

function paintBackdrop() {
  const { left, right, top, bottom } = chartBounds;
  const gradient = ctx.createLinearGradient(left, top, right, bottom);
  gradient.addColorStop(0, 'rgba(124, 92, 255, 0.08)');
  gradient.addColorStop(0.75, 'rgba(84, 244, 213, 0.03)');

  ctx.save();
  ctx.fillStyle = gradient;
  ctx.fillRect(left, top, right - left, bottom - top);
  ctx.restore();
}

function drawGrid() {
  const { left, right, top, bottom } = chartBounds;
  const width = right - left;
  const height = bottom - top;

  ctx.save();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.lineWidth = 1;
  ctx.setLineDash([6, 10]);

  const verticalSteps = Math.max(1, dataset.length - 1);
  for (let i = 0; i <= verticalSteps; i += 1) {
    const x = left + (i / verticalSteps) * width;
    ctx.beginPath();
    ctx.moveTo(x, top);
    ctx.lineTo(x, bottom);
    ctx.stroke();
  }

  ctx.setLineDash([]);
  const horizontalSteps = 5;
  for (let i = 0; i <= horizontalSteps; i += 1) {
    const y = bottom - (i / horizontalSteps) * height;
    ctx.beginPath();
    ctx.moveTo(left, y);
    ctx.lineTo(right, y);
    ctx.stroke();
  }

  ctx.restore();
}

function getPoint(person, index) {
  const dataIndex = Math.min(dataset.length - 1, Math.max(0, index));
  const value = dataset[dataIndex].values[person] ?? 0;
  const { left, right, top, bottom } = chartBounds;
  const width = right - left;
  const height = bottom - top;
  const denominator = Math.max(1, dataset.length - 1);
  const x = left + (dataIndex / denominator) * width;
  const safeMax = maxValue || 1;
  const normalised = value / safeMax;
  const y = bottom - normalised * height;
  return { x, y };
}

function drawLines(monthsFloat) {
  const visibleSegments = Math.floor(monthsFloat);
  const remainder = monthsFloat - visibleSegments;
  const labelTargets = [];

  people.forEach((person, index) => {
    ctx.save();
    ctx.lineWidth = 2.2;
    ctx.strokeStyle = palette[index];
    ctx.globalAlpha = 0.35 + (index / people.length) * 0.4;
    ctx.beginPath();

    let started = false;
    let lastPoint = null;
    for (let i = 0; i <= visibleSegments; i += 1) {
      const point = getPoint(person, i);
      if (!started) {
        ctx.moveTo(point.x, point.y);
        started = true;
      } else {
        ctx.lineTo(point.x, point.y);
      }
      lastPoint = point;
    }

    if (visibleSegments < dataset.length - 1) {
      const from = getPoint(person, visibleSegments);
      const to = getPoint(person, visibleSegments + 1);
      const interp = {
        x: from.x + (to.x - from.x) * remainder,
        y: from.y + (to.y - from.y) * remainder,
      };
      if (!started) {
        ctx.moveTo(from.x, from.y);
      }
      ctx.lineTo(interp.x, interp.y);
      lastPoint = interp;
    }

    ctx.stroke();
    ctx.restore();

    if (lastPoint) {
      labelTargets.push({ person, color: palette[index], point: lastPoint });
    }
  });

  drawLabels(labelTargets);
}

function updateMetadata(monthsFloat, isFinalFrame = false) {
  if (!dataset.length) {
    currentMonthEl.textContent = '—';
    currentLeaderEl.textContent = 'Waiting for dataset';
    return;
  }
  const activeIndex = Math.min(dataset.length - 1, Math.max(0, Math.round(monthsFloat)));
  const activeMonth = dataset[activeIndex];
  currentMonthEl.textContent = monthFormatter.format(new Date(activeMonth.date));

  let leader = { person: '', value: -Infinity };
  people.forEach((person) => {
    const value = activeMonth.values[person];
    if (value > leader.value) {
      leader = { person, value };
    }
    const node = legendValueMap.get(person);
    if (node) {
      node.textContent = compactNumber.format(value);
    }
  });

  currentLeaderEl.textContent =
    leader.value > 0
      ? `Leading listener: ${leader.person} • ${wholeNumber.format(leader.value)} plays`
      : 'Leading listener: warming up';

  updateTimeline(monthsFloat, isFinalFrame);
}

function updateTimeline(monthsFloat, isFinalFrame = false) {
  if (!timelineNodes.length || !timelineIntervals.length) {
    return;
  }
  timelineNodes.forEach((node, index) => {
    const interval = timelineIntervals[index];
    if (!interval) {
      return;
    }
    let progress = 0;
    if (monthsFloat >= interval.end) {
      progress = 1;
    } else if (monthsFloat > interval.start) {
      const span = Math.max(interval.end - interval.start, 0.0001);
      progress = (monthsFloat - interval.start) / span;
    }

    if (isFinalFrame && index === timelineNodes.length - 1) {
      progress = 1;
    }

    node.style.setProperty('--progress', Math.max(0, Math.min(1, progress)));
    const isActive = monthsFloat >= interval.start && monthsFloat <= interval.end + 0.001;
    node.classList.toggle('is-active', isActive);
  });
}

function drawLabels(items) {
  if (!items.length) {
    return;
  }
  ctx.save();
  ctx.font = '600 12px "Space Grotesk", "Segoe UI", sans-serif';
  ctx.textBaseline = 'middle';
  ctx.lineWidth = 1;

  items.forEach(({ person, color, point }) => {
    if (!point) {
      return;
    }
    const label = person;
    const metrics = ctx.measureText(label);
    const paddingX = 8;
    const paddingY = 6;
    let x = point.x + 10;
    let y = point.y;

    const maxX = chartBounds.right - metrics.width - paddingX * 2 - 4;
    const minX = chartBounds.left + 4;
    const maxY = chartBounds.bottom - paddingY - 2;
    const minY = chartBounds.top + paddingY + 2;

    x = Math.min(Math.max(x, minX), maxX);
    y = Math.min(Math.max(y, minY), maxY);

    const boxX = x - paddingX;
    const boxY = y - paddingY;
    const boxWidth = metrics.width + paddingX * 2;
    const boxHeight = paddingY * 2;

    ctx.fillStyle = 'rgba(5, 6, 11, 0.82)';
    ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);

    ctx.fillStyle = color;
    ctx.fillText(label, x, y);
  });

  ctx.restore();
}

replayButton.addEventListener('click', restartAnimation);
window.addEventListener('resize', debounce(resizeCanvas, 150));
window.addEventListener('load', async () => {
  dataset = await loadPreferredDataset();
  maxValue = computeMax(dataset);
  const timelineMeta = buildTimelineMeta(dataset);
  timelineMonths = timelineMeta.months;
  timelineIntervals = timelineMeta.intervals;
  buildLegend();
  buildTimeline();
  resizeCanvas();
  startAnimation();
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    cancelAnimationFrame(rafId);
    resumeProgress = playbackProgress;
    startTime = null;
  } else {
    if (!isComplete) {
      startAnimation(resumeProgress);
    }
  }
});

function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(null, args), delay);
  };
}
