# storyteller-restart-data

Public RESTART story data for Storyteller.

Stable manifest URL:

https://raw.githubusercontent.com/exisz/storyteller-restart-data/main/manifest.json

Generated from the main Storyteller repo via:

```bash
cd /Volumes/2t/agents/loremaster/storyteller
gameplay design rollup --source restart
python3 scripts/sync_restart_data_repo.mjs --push
```

Source JSON5 lives under `source/restart/`; runtime JSON lives under `data/`.
