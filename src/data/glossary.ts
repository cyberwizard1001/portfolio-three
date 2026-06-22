export const glossary = {
  excess: 'The fixed amount you pay yourself on a claim before the insurer pays the rest.',
  'co-payment': 'A share of each claim you keep paying, often a % on top of the excess.',
  'pre-existing condition':
    "Any illness or symptom your pet showed before cover started — even if no vet named it yet.",
  'lifetime cover': 'Cover that renews each year for ongoing conditions, as long as you keep the policy.',
  'benefit limit': 'The most the policy pays out — per condition, per year, or in total.',
  fca: 'Financial Conduct Authority — the UK regulator for insurance.',
} as const;

export type GlossaryTerm = keyof typeof glossary;
