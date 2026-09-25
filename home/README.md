# IT Mission Alappuzha - Official Government Portal Gateway

A modern, fast, responsive, and accessible web page designed to serve as a unified gateway for **District IT Mission Alappuzha**.

The web page provides direct access to major Kerala State Government portals and features an animated news ticker driven dynamically by a `data/updates.json` file.

---

## 🚀 Key Portal Links Included
1. **eDistrict Kerala**: `https://edistrict.kerala.gov.in/edportalsignin.jsp?lang=en`
2. **eOffice Alappuzha**: `https://ealappuzha.kerala.gov.in/`
3. **ReLIS (Revenue Land Information System)**: `https://revenue.kerala.gov.in/`
4. **CMO / CMDRF**: `https://app.cmo.kerala.gov.in/cmocmdrf/login.do`
5. **RR Online (Revenue Recovery)**: `https://rr.kerala.gov.in/`
6. **LRD Portal (Land Revenue Department)**: `https://landrevenue.kerala.gov.in/`

---

## ⚡ Features
- **JSON News Scroller**: Announcements marquee ticker dynamically loaded from `data/updates.json`.
- **Search & Category Filtering**: Live instant search and tab filters (`Certificates`, `Official & eOffice`, `Land & Revenue`, `Relief & Aid`).
- **Dark / Light Mode**: Theme toggle with system preference detection and `localStorage` state persistence.
- **Copy Link Utility**: Quick copy action button for all portal URLs with instant toast notifications.
- **100% Static & Zero Build Step**: Pure Vanilla HTML, CSS, and JS — optimized for direct hosting on **GitHub Pages**.

---

## 🌐 How to Host on GitHub Pages (Step-by-Step Guide)

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com/) and click **New Repository**.
2. Name your repository (e.g. `it-mission-alappuzha` or `alappuzha-it-mission`).
3. Set visibility to **Public** (required for free GitHub Pages).
4. Click **Create repository**.

### Step 2: Push Files to GitHub
Open your terminal in this project folder and run:
```bash
git init
git add .
git commit -m "Initial commit - IT Mission Alappuzha Portal"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. In your GitHub repository, click on **Settings** ⚙️ (Top Menu).
2. On the left sidebar, click **Pages** (under Code and automation).
3. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`.
   - **Branch**: Select `main` and folder `/ (root)`.
4. Click **Save**.
5. After 1 to 2 minutes, GitHub will give you your live URL:
   `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/`

---

## 📝 How to Update News & Announcements

No coding or rebuilding is required to update announcements! Anyone with edit access to the GitHub repository can edit `data/updates.json` directly:

1. In your GitHub repository, click on the folder `data` -> `updates.json`.
2. Click the **Pencil ✏️ (Edit file)** button in the top right.
3. Add or update items under the `"updates"` array following this template:

```json
{
  "id": "up-007",
  "date": "2026-10-01",
  "badge": "NEW",
  "badgeType": "danger",
  "title": "Your New Official Notification Title Here",
  "category": "eDistrict",
  "link": "https://edistrict.kerala.gov.in/",
  "summary": "Detailed summary description of the circular or notification."
}
```

4. Click **Commit changes...**
5. GitHub Pages will automatically publish the updated announcements within 60 seconds!

---

## 🛠️ Local Development & Testing
To view the site locally on your computer:

```bash
# Start a simple HTTP server using Python:
python3 -m http.server 8000
```
Then open your browser to `http://localhost:8000`.

---

## 🏢 Contact
**District IT Mission Alappuzha**  
First Floor, Civil Station, Collectorate, Alappuzha - 688001  
**Phone**: 0477-2251210  
**Email**: `ditm.alp@kerala.gov.in`
