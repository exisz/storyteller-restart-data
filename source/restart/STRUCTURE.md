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

## Turn 14–17 packet: Act Two threshold / living-file arc

The false-exit audit now opens into a second-region threshold instead of stopping at the station gate:

- `restart-event-14-glass-gate-audit` makes the audit answer itself unstable: the player can follow the Seventh Sunrise's knock or exploit the radio's automated replies.
- `restart-rite-14-glass-behind-seventh-sun` converts the Seventh Sunrise from mystery into a usable witness card and creates the `假出口审计章` as both access and risk.
- `restart-rite-15-counterfeit-city-registry` turns the gate into a paperwork city and grants `伪城地图`, forcing a choice between hiding Linxi as a dead resident or registering the Seventh Sunrise as a living debt.
- `restart-event-15-broadcast-name-hunt` escalates the broadcast/radio pressure now that a missing name has entered the city.
- `restart-rite-16-broadcast-tower-debt-desk` confronts the radio/broadcast system as an active antagonist and opens the living-file route.
- `restart-rite-17-first-living-file` gives Act Two a concrete proof object: the first file that records a person as alive instead of pre-dead.

Branch memory added for later checks:

- `restart_followed_seventh_knock` vs `restart_radio_answered_exit_audit`
- `restart_seventh_sun_rescued_as_witness` vs `restart_seventh_sun_kept_behind_glass`
- `restart_linxi_registered_as_dead_resident` vs `restart_seventh_sun_registered_as_living_debt`
- `restart_seventh_name_hidden_in_static` vs `restart_baited_tower_operator`
- `restart_exposed_radio_operator` vs `restart_bargained_for_living_file`
- `restart_living_file_given_to_seventh_sun` vs `restart_living_file_copied_for_linxi`

This packet advances the Seventh Sunrise, Broadcast/radio, Linxi identity, and Paperwork threads beyond Act One while keeping the current hand relevant through radio, ticket, death certificate, audit stamp, and witness cards.

## Turn 18–20 packet: Living-file recheck / operator-room arc

The first living-file reveal now has consequences instead of ending as a static proof object:

- `restart-event-18-living-file-recheck` forces the Player to decide whether the living-file protection belongs first to the Seventh Sunrise or to Linxi's next-loop self via the radio.
- `restart-rite-18-living-file-recheck-hearing` turns that decision into a formal recheck and grants `复查反签针` plus `播音员坐标`, making paperwork and broadcast pressure playable tools.
- `restart-event-19-counterfeit-city-blackout` charges a route cost and asks whether the Player shields the night exit or baits the operator.
- `restart-rite-19-operator-room` reveals the tower operator as another living-person pressure, not a faceless system.
- `restart-rite-20-night-exit-ledger` converts the packet into a stable next-region branch: protected living witness route vs operator-debt route.

Branch memory added for later checks:

- `restart_protected_seventh_sun_living_status` vs `restart_copied_living_algorithm_to_radio`
- `restart_seventh_sun_public_living_witness` vs `restart_linxi_counter_signed_living_exception`
- `restart_night_exit_route_shielded` vs `restart_operator_room_baited`
- `restart_operator_exposed_as_living_voice` vs `restart_operator_bargained_for_night_exit`
- `restart_seventh_sun_registered_for_night_exit` vs `restart_operator_registered_as_broadcast_debt`
- `restart_next_region_alive_witness_route` vs `restart_next_region_operator_debt_route`

This packet advances the Broadcast/radio, Seventh Sunrise, Linxi identity, and Paperwork threads while preserving the current turn-13 path through existing Act Two threshold content.

## Turn 21–23 packet: Paper-factory supply-chain arc

The night-exit ledger now leads into the paper factory named by the previous packet instead of ending at a loose station name:

- `restart-rite-21-paper-factory-tram` converts the night exit into a supply route for blank death-certificate paper and makes the previous witness/debt branch matter at the factory gate.
- `restart-event-22-night-shift-paper-tax` charges a route cost: hide the living-file route under the audit stamp or convert the tax into a broadcast voice debt.
- `restart-rite-22-watermark-mold-room` reveals that death certificates are pre-authorized by hidden watermarks and grants `死亡证明水印模` plus `未裁切证明纸` as concrete proof/tools.
- `restart-rite-23-foreman-witness-ledger` turns the factory from scenery into witness pressure, ending with either protected worker testimony or a bargain for the supply-ledger route.

Branch memory added for later checks:

- `restart_paper_factory_witness_route` vs `restart_paper_factory_operator_debt_route`
- `restart_paper_route_shielded_by_audit_stamp` vs `restart_paper_tax_converted_to_voice_debt`
- `restart_stole_death_watermark_mold` vs `restart_contaminated_certificate_paper_batch`
- `restart_protected_paper_workers_testimony` vs `restart_bargained_with_paper_foreman`
- `restart_next_region_supply_chain_witness_route` vs `restart_next_region_supply_ledger_route`

This packet advances the Paperwork, Broadcast/radio, Seventh Sunrise, and Linxi identity threads by shifting from individual false documents to the industrial source of death-proof authority.

Revision: `restart-rite-24-worker-testimony-caravan` and `restart-rite-25-foreman-supply-ledger-coordinate` now consume `纸厂工人证词` on two branch-specific routes, making the protected-worker vs foreman-bargain choice mechanically visible beyond rite 23.

## Turn 26–30 packet: Supply-ledger account-house arc

The paper-factory coordinate now opens a new administrative layer instead of ending on a named destination:

- `restart-rite-26-supply-ledger-account-house` turns worker testimony, uncut paper, and the stolen watermark mold into a direct confrontation with the ledger that allocates death-certificate paper quotas. It grants `供纸账本` and `配额账房员`.
- `restart-event-27-death-quota-bell` makes the cost immediate: old Sunrise Hospital is short one corpse, so the Player must protect worker names or mark the outgoing paper batch as not-yet-dead.
- `restart-rite-27-quota-clerk-confrontation` converts that pressure into a concrete `死亡配额欠条`, forcing quota-freeze vs quota-redirection pressure.
- `restart-rite-28-living-paper-lot` uses the living file and uncut proof paper to create `活纸批次`, a batch of death-certificate paper that can be shipped back to hospital but resists becoming a death record.
- `restart-event-29-return-shipment-alarm` charges the return route with either operator/broadcast debt or audit/recheck paperwork.
- `restart-rite-29-hospital-return-invoice` grants `回院供货单` and asks whether the return is public indictment or covert infiltration.
- `restart-rite-30-sealed-return-tram` stabilizes the next-region route back toward old Sunrise Hospital with controlled supply-chain evidence.

Branch memory added for later checks:

- `restart_worker_testimony_entered_as_account_evidence` vs `restart_watermark_mold_hidden_in_supply_ledger`
- `restart_quota_bell_protected_worker_names` vs `restart_quota_bell_marked_batch_alive`
- `restart_next_hospital_death_quota_frozen` vs `restart_death_quota_redirected_to_blank_lot`
- `restart_living_paper_bound_to_seventh_witness` vs `restart_living_paper_bound_to_linxi_decoy`
- `restart_living_lot_hidden_by_operator_voice` vs `restart_living_lot_hidden_by_recheck_seal`
- `restart_return_invoice_public_indictment_route` vs `restart_return_invoice_covert_hospital_route`
- `restart_return_tram_public_account_route` vs `restart_return_tram_covert_box_route`
- `restart_next_region_hospital_supply_reversal_route` vs `restart_next_region_hidden_living_paper_route`

This packet advances the Paperwork, Broadcast/radio, Seventh Sunrise, and Linxi identity threads by making the death-paper supply chain reversible: the Player can now return to old Sunrise Hospital not as a patient, but as the carrier of paper that can challenge the hospital's authority to pre-write death.
