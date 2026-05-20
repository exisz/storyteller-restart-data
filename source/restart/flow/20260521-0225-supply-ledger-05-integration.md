# Integration — Supply Ledger Account House

Commands run:

- `gameplay design rollup --source restart` → 25 cards, 30 rites, 15 events rolled into public data.
- `node scripts/sync_restart_data_repo.mjs --push` → public data repo pushed with updated restart data.
- `gameplay load restart-main` refreshed the canonical save catalog.

Expected graph state: connected packet from `restart-foreman-supply-ledger-coordinate-decoded` through turn 30, then intentionally stops at `restart-sealed-return-tram-departed` for the next content packet.
