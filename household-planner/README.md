# Household budget & debt planner

Private worksheet for mapping income, living costs, and a rollover debt schedule. **Not a public site** — it is not in `sites.registry.json` and should not be attached to a calculator domain.

## Open it

From the repo root:

```bash
npm run planner
```

Then open http://127.0.0.1:4177/

Or open `household-planner/index.html` directly in a browser (some browsers restrict ES modules on `file://`; the local server is the reliable path).

## How numbers update

- **Auto-update** (default) recalculates 450ms after you stop typing.
- **Update now** recalculates immediately.
- Values persist in `localStorage` on that browser.
- **Export JSON** / **Import JSON** is how you share a snapshot with the agent or another household computer.

## Conservative paycheques

With that checkbox on, **only paycheques** are counted as two pays per 4-week month. The two extra pays per year are applied as snowflakes in months 6 and 12 so lean months are not over-committed. **Bills stay as you typed them** — $1,500 rent is $1,500, not scaled to a 4-week month (~$1,385).

## Spending tracker

One table: type the category name, **Budget**, **Spent**, and cadence. **Left** and the used bar update as you type. **Add spend** is a shortcut for a receipt. Leftover-for-debt still uses Budget, not Spent. Debts are unchanged.

Reloading after this update **keeps existing amounts and debts** and fills in any missing usual categories (groceries, sundries, hardware, entertainment, dining, clothing, and so on).
