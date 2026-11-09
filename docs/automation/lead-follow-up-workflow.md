# Lead follow-up workflow blueprint

A tool-agnostic starter workflow for a small business. Adapt it to client consent, privacy requirements and the chosen CRM.

## Goal
Route new enquiries to the right person, acknowledge receipt and prevent leads from being forgotten.

## Suggested flow
1. Trigger: a lead is submitted through a website form or approved lead source.
2. Validate: check required fields and normalize phone/email formats.
3. Deduplicate: look for an existing contact using a stable identifier.
4. Create/update CRM record: store only information needed for follow-up.
5. Assign owner: route by service, location or availability.
6. Acknowledge: send a short confirmation through an approved channel.
7. Task: create a follow-up task with a due date.
8. Monitor: alert the owner if the lead remains untouched.
9. Outcome: record contacted, qualified, not interested, converted or invalid.

## Safeguards
- Obtain and respect appropriate consent for communications.
- Include opt-out handling where required.
- Do not send repeated messages after an opt-out.
- Restrict access to lead data.
- Keep credentials in the automation platform's secret manager, never in this repository.
- Test with dummy records before going live.

## Suggested metrics
Time to first response, contact rate, qualified lead rate, appointment rate, conversion rate, duplicate and failed-run rate.
