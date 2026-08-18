# Loop Billing Experience v2

An interactive product mock for two customer journeys:

- New-customer billing onboarding, including contract review, billing entity formation, independent payment coverage, and bulk mapping.
- Existing-customer billing administration, including products, invoices, statements, entity edits, and guarded payment-method replacement.

The original `billing-portal-mock` repository and GitHub Pages site are unchanged. This version is intentionally self-contained and uses only static HTML, CSS, and JavaScript.

## Run locally

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Safety represented in the mock

- Customers can add and edit billing entities, but no entity delete action is exposed.
- Payment methods are replaced by adding a new method first, moving coverage, and only then retiring the old method.
- Bulk mapping files contain payment method aliases only; card and bank details remain outside CSV files.
