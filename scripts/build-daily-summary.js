const fs = require('fs');
const path = require('path');

const TARGET_USERS = [
  'mecalex',
  'dewminic',
  'dgale',
  'migwynkriid',
  'cheesus0712',
  'rudolfzzz117',
  'gyuki',
  'kaewein',
  'kelemen',
  't8mz',
  'pravipero',
  'modil',
  'bicaro',
  'gale4047',
  'marinasmiljan1010',
  'lovidex',
  'b.b.johnny',
];

const ALIAS_MAP = new Map([
  ['.gyuki', 'gyuki'],
  ['kelemen.', 'kelemen'],
]);

const TARGET_SET = new Set(TARGET_USERS);

function formatDate(month, day) {
  return `2025-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
}

async function getDirectories(dirPath) {
  const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
}

async function main() {
  const baseDir = path.join(__dirname, '..', 'data', '2025');
  if (!fs.existsSync(baseDir)) {
    throw new Error(`Missing directory: ${baseDir}`);
  }

  const months = await getDirectories(baseDir);
  const result = [];

  for (const month of months) {
    const monthDir = path.join(baseDir, month);
    const days = await getDirectories(monthDir);

    for (const day of days) {
      const dayDir = path.join(monthDir, day);
      const snapshots = (await fs.promises.readdir(dayDir))
        .filter((file) => file.endsWith('.json'))
        .sort();

      if (!snapshots.length) {
        continue;
      }

      const latestSnapshot = snapshots[snapshots.length - 1];
      const snapshotPath = path.join(dayDir, latestSnapshot);
      const raw = JSON.parse(await fs.promises.readFile(snapshotPath, 'utf-8'));

      const sampled = {};
      Object.values(raw).forEach((entry) => {
        if (!entry || typeof entry.username !== 'string') {
          return;
        }
        const canonical = ALIAS_MAP.get(entry.username) || entry.username;
        if (!TARGET_SET.has(canonical)) {
          return;
        }
        const seconds = Number.isFinite(entry.total_time)
          ? Math.round(entry.total_time)
          : 0;
        sampled[canonical] = seconds;
      });

      const values = {};
      TARGET_USERS.forEach((user) => {
        values[user] = sampled[user] || 0;
      });

      result.push({
        date: formatDate(month, day),
        values,
        unit: 'seconds',
        source: snapshotPath.replace(baseDir, 'data/2025'),
      });
    }
  }

  result.sort((a, b) => new Date(a.date) - new Date(b.date));

  const outputPath = path.join(baseDir, 'daily-summary.json');
  await fs.promises.writeFile(outputPath, JSON.stringify(result, null, 2));
  console.log(`Wrote ${result.length} daily entries to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
