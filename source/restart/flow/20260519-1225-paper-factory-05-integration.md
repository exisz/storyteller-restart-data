# Integration — Paper Factory Packet

Commands run:

- `gameplay design rollup --source restart`
- `node scripts/sync_restart_data_repo.mjs --push`
- `gameplay load restart-main`
- `gameplay check-playable`

Result: rollup regenerated `public/data/restartCards.json5`, `public/data/restartEvent+nodes.json5`, and `public/data/restartRite+nodes.json5`. Data repo sync command completed successfully.

Expected graph disconnects: none; depth check reports one connected component and zero isolated nodes.
