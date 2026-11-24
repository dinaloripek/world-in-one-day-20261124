// "The Great Rebound" — @dinaloripek's entry to make.fun's "Sum up 24 November's world news in one image"
// bounty ($100 in USDC). The image beside this file, entry.png, is the entry: a trading-terminal front page
// for Tuesday 24 November 2026. Its hero is the market story of the day — Jensen Huang returned to Nvidia
// eleven days after resigning, Nvidia jumped 31%, and the Nasdaq's 6.5% leap erased the AI rout that had
// regulators across Asia scrambling all weekend — drawn as one chart that falls in red and rockets back in
// green, with the day's index moves as a stats rail and a green ticker strip. Around the chart, six panels
// carry the rest of the day: Ukraine rejecting a peace plan that rewards theft, two Russian ships hit in
// two far seas, Washington turning on Maduro, the World Court's genocide ruling on Myanmar, the
// EU–Indonesia trade pact signed as Europe shivers into a cold snap, and BepiColombo reaching Mercury.
// The program copies entry.png to /output/entry.png, byte for byte the same on every run.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(out, 'entry.png'));
