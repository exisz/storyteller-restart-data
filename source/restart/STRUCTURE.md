# RESTART Story Structure

This file is the durable design map for RESTART. Designer pods should update it when they add content. It is not a quota sheet; it records why the game is playable rather than merely longer.

## Premise

Linxi is trapped in a repeating route through station, train, and old Sunrise Hospital. The loop is not only a mystery to solve; it is a pressure system. Each turn should expose a choice between survival, truth, debt, trust, and complicity.

## Graph model

The visualizer has three kinds of structural edges:

1. Explicit consequence edges: node A declares node B as a consequence.
2. Causal requirement edges: node A sets a flag or grants a card that node B later requires.
3. Card-mediated causal edges: if one node grants/draws a card and another requires it, the graph links those story nodes directly. Cards themselves are not graph nodes.
4. Timeline edges: turn-triggered events attach to virtual `Turn N` nodes, and turn nodes connect sequentially.

This means time-driven events are no longer isolated islands in the graph. If a node is still isolated, either it is intentionally optional color, or the content is structurally incomplete.

## Story architecture

RESTART should not be a single line of content. It needs:

- a main spine: what the loop is, why Sunrise Hospital matters, what the Seventh Sunrise is;
- side threads: individual motives, debts, lies, tools, places, and clues that can be pursued or ignored;
- cross-pressure: choices in one thread should change costs, available cards, flags, or interpretation in another;
- memory and consequence: flags/cards from earlier turns must matter later, not merely record that prose happened.

## Current active threads

- Station/train origin thread: platform wake-up, broadcast, train, black box, first naming of the Seventh Sunrise.
- Hospital/Yue thread: old Sunrise Hospital, ward seven, Yue doctor, case record, death certificates.
- Broadcast/radio thread: the radio is both tool and suspect; it should not remain a passive item forever.
- Linxi identity thread: Linxi is not just a slot filler; her changing knowledge, risk, and agency should produce cards/locks/choices.

## Designer checklist

Before adding nodes, answer in the work log or final report:

- What existing unresolved promise or pressure is this packet paying off or escalating?
- Which thread(s) does it advance?
- Which new choice is actually available to the Player?
- Which cards/flags make the choice mechanically visible? Cards are resources/state, not graph nodes.
- What later node will remember this choice?
- Is any node isolated? If yes, is it deliberately optional, or is the graph missing an edge?

A packet is bad if it only appends the next rite after the previous rite. A packet is good when the Player can see several meaningful pressures and the graph shows why those pressures exist.

## Turn 9–12 packet: Eighth-loop signature arc

The current first-exit attempt now continues past the ambulance platform into a three-step pressure chain:

- `restart-rite-10-tunnel-transfer-register` turns the ambulance into a transfer machine and forces memory vs Yue-access pressure. It creates concrete state with the Eighth Loop Wristband and Memory Ampoule.
- `restart-event-11-bed-number-broadcast` and `restart-rite-11-bed-zero-signature-room` stabilize the real bed number B-07/0 and convert the Seventh Sunrise mystery into signature-room paperwork pressure.
- `restart-event-12-signature-pressure` and `restart-rite-12-fill-blank-certificate` open the next exit decision: falsify Linxi's death as a decoy or make Yue pay the death debt.

Branch memory added for later checks:

- `restart_saved_linxi_memory_route` vs `restart_preserved_yue_access_route`
- `restart_linxi_memorized_bed_zero` vs `restart_yue_stamped_bed_zero`
- `restart_yue_admitted_bed_zero` vs `restart_bed_number_hidden_in_radio`
- `restart_promised_rescue_seventh_sun` vs `restart_demanded_yue_debt_truth`
- `restart_signed_linxi_decoy_death` vs `restart_signed_yue_debt_death`

This packet advances the Hospital/Yue, Broadcast/radio, Linxi identity, and Paperwork threads while keeping the current turn-9 hand useful.
