# Prompt: keyword intent clustering

Act as an SEO analyst. Group the keyword list by likely search intent and topic similarity.

## Inputs
- Website/business:
- Target market:
- Seed keywords:
- Known products/services:

## Output
Return a table with: cluster, keyword, likely intent (informational/commercial/transactional/navigational/local), suggested page type, priority rationale and uncertainty.

Rules:
- Do not invent search volume, keyword difficulty or CPC.
- Do not force unrelated terms into one cluster.
- Flag ambiguous terms for manual SERP review.
- Distinguish a new page opportunity from a section that belongs on an existing page.
