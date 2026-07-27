# Google Search Console API — hands-free nightly setup

Your PC stays on, so this runs **locally at 8pm Pacific** via cron/systemd. The Cursor cloud automation can still do code SEO; this script handles Google-side sitemap + index **inspection**.

## What automation can and cannot do

| Action | Automated? |
|---|---|
| Resubmit / refresh sitemaps in GSC | **Yes** (API) |
| Inspect whether a URL is indexed | **Yes** (URL Inspection API) |
| Ping Bing sitemaps | **Yes** (existing `npm run sitemaps:ping`) |
| Click **Request indexing** in GSC UI for normal pages | **No** — Google only allows Indexing API for JobPosting / livestream schema |

So “hands-free indexing” here means: **keep sitemaps fresh + know which P0 URLs are still not indexed**, and only manually request indexing for the short “Needs request” list when something important is missing.

## One-time Google setup (~15–20 min)

### 1. Google Cloud project
1. Open [Google Cloud Console](https://console.cloud.google.com/)
2. Create or select a project (e.g. `bolt-gsc-automation`)
3. Enable billing if prompted (API usage for GSC inspection is typically within free tier at our volume)

### 2. Enable APIs
Enable both:
- [Google Search Console API](https://console.cloud.google.com/apis/library/searchconsole.googleapis.com)
- (Optional) Webmasters API is the same Search Console API surface used for sitemaps

### 3. Service account + JSON key
1. **IAM & Admin → Service Accounts → Create**
2. Name: `gsc-nightly`
3. Role: none required in Cloud IAM for GSC (access is granted inside Search Console)
4. **Keys → Add key → JSON** → download the file
5. Save it on this PC as:

```text
/home/tiny/Downloads/project-bolt-update/secrets/gsc-service-account.json
```

(`secrets/` is gitignored — never commit this file.)

### 4. Add the service account to every GSC property
1. Open the JSON and copy `client_email` (ends in `.iam.gserviceaccount.com`)
2. For **each** of the 8 domains in [Search Console](https://search.google.com/search-console):
   - Settings → Users and permissions → Add user
   - Email: the `client_email`
   - Permission: **Owner** (needed for URL Inspection) or at least **Full** if Owner is not offered
3. Prefer **Domain** properties (`sc-domain:example.com`) — matches this script

Domains:
- metaboliclowcarb.com
- satoshi-calc.com
- paint-calculator.ca
- hvaccalculators.net
- mulch-calculators.com
- flooringboxcalculator.com
- drywall-calculator.com
- landscapetoolsguide.com

### 5. Install dependency + dry run
From the repo root:

```bash
cd /home/tiny/Downloads/project-bolt-update
npm install
export GOOGLE_APPLICATION_CREDENTIALS="$PWD/secrets/gsc-service-account.json"
npm run gsc:nightly -- --dry-run
```

Then a real GSC-only run:

```bash
npm run gsc:nightly
```

Report writes to `reports/gsc-nightly-latest.json` (gitignored).

## Full nightly portfolio audit

The scheduled job runs more than the GSC API. It now:

- typechecks and production-builds every site, including prerendering;
- crawls every URL in every live sitemap;
- validates HTTP status, real 404 behavior, canonical URLs, titles, descriptions, robots directives, AdSense ownership, JSON-LD, article dates, and referenced images;
- checks legal pages, ads.txt, robots.txt, generated-route/sitemap parity, broken internal links, thin pages, exact duplicate content, and site-specific calculator contracts;
- compares with the previous run to report new, persistent, and resolved issues;
- writes readable Markdown and JSON reports and sends a desktop notification;
- submits sitemaps and inspects P0 URLs through GSC after the health checks finish.

Run the complete job manually:

```bash
npm run portfolio:nightly
```

Fast dry-run without rebuilding or changing GSC:

```bash
npm run portfolio:nightly:dry
```

Primary reports:

- `reports/nightly-latest.md` — plain-language outcome and actions performed
- `reports/portfolio-health-latest.md` — detailed site defects
- `reports/gsc-nightly-latest.json` — Google inspection details
- `reports/nightly-portfolio.log` — scheduled-run console log

Set `NIGHTLY_REPORT_WEBHOOK_URL` in `.env` to send the same summary to a Slack- or Discord-compatible incoming webhook. Without a webhook, the job still writes reports and attempts a desktop notification.

## Schedule on this always-on PC (8pm Pacific)

### Option A — cron
```bash
crontab -e
```

Add (adjust path if needed):

```cron
0 20 * * * cd /home/tiny/Downloads/project-bolt-update && GOOGLE_APPLICATION_CREDENTIALS=/home/tiny/Downloads/project-bolt-update/secrets/gsc-service-account.json /usr/bin/npm run portfolio:nightly >> /home/tiny/Downloads/project-bolt-update/reports/nightly-portfolio.log 2>&1
```

### Option B — systemd user timer
See `scripts/gsc-nightly.service` and `scripts/gsc-nightly.timer` in this folder; enable with:

```bash
mkdir -p ~/.config/systemd/user
cp scripts/gsc-nightly.service scripts/gsc-nightly.timer ~/.config/systemd/user/
systemctl --user daemon-reload
systemctl --user enable --now gsc-nightly.timer
```

## Pairing with the Cursor nightly SEO automation
1. **This PC script (8pm PT):** build, crawl, SEO/contracts audit, readable report, sitemap submission, and P0 inspection.
2. **Same-day follow-up:** fix any item marked `ACTION NEEDED` in `reports/nightly-latest.md`.
3. **You (weekly):** for URLs listed as needing manual indexing, open GSC → URL Inspection → Request indexing.

After credentials are in place, tell the agent “GSC API is connected” so future cloud runs can assume `npm run gsc:nightly` works on this machine or via secrets in Cloud Agents.
