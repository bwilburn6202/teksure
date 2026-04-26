# Build & Critique Loop

This loop gives you a repeatable **build → critique → fresh ideas** cycle so you can keep expanding TekSure without losing quality.

## Commands

- Run continuously (default interval = 180s):

```bash
npm run loop:critique
```

- Run one cycle only:

```bash
npm run loop:critique:once
```

- Custom settings:

```bash
node scripts/build-critique-loop.mjs --interval=120 --checks=full --out=docs/BUILD_CRITIQUE_LOOP_LOG.md
```

## Options

- `--interval=<seconds>`: delay between cycles (default: `180`).
- `--max-cycles=<n>`: stop after `n` loops (default: infinite).
- `--checks=<none|quick|full>`:
  - `none`: no commands.
  - `quick`: `lint` + `test`.
  - `full`: `lint` + `test` + `build`.
- `--out=<path>`: markdown log output file.

## Output

Each cycle appends to `docs/BUILD_CRITIQUE_LOOP_LOG.md` with:

1. Snapshot metrics (routes, lazy imports, tool count)
2. Critique bullets based on current code shape and command results
3. Fresh product ideas to test next
4. Pass/fail command summary

## Suggested workflow

1. Keep the loop running in one terminal.
2. In another terminal, implement 1-2 items from “Critique” or “Fresh Ideas”.
3. Let the next cycle validate and generate the next set of refinements.
4. Every day, prune/triage the log into actionable tickets.
