# invite

A luxury, print-ready 3-page Hindu wedding invitation crafted with pure HTML5, CSS3, and JavaScript, designed to export seamlessly to high-resolution A4 PDF for print or digital distribution.

---

## 💍 The Couple

- **Groom:** Daksh Sharma  
  *(Parents: Mr. Hemant Sharma & Mrs. Shweta Sharma | Brother: Mr. Bhavya Sharma)*
- **Bride:** Aadrika Goswami  
  *(Mother: Mrs. Swasti Goswami)*

---

## 🌸 Visual Identity & Design Highlights

- **Authentic Sacred Imagery:** Preserves original sacred miniature-style artwork without AI generation or distortion:
  - **Page 1:** Lord Shreenathji with traditional cows (*kamdhenu*), dancing peacocks, lotus pond, and palace arches.
  - **Page 2:** Golden floral archway and classical Rajasthani palace motifs for Haldi & pre-wedding festivities.
  - **Page 3:** Lord Shiva & Goddess Parvati together under a sacred temple archway blessed by Lord Ganesha.
- **Pure Letterpress Typography:** Clean typographic hierarchy rendered directly onto textured ivory parchment—completely free of modern UI cards, boxes, or pill containers:
  - Royal headings in *Cinzel* & *Noto Serif Display*
  - Elegant ceremony titles in *Marcellus*
  - Flourished couple connectors in *Great Vibes*
  - Sacred Sanskrit mantras in *Noto Serif Devanagari*
- **Strict A4 Print Geometry:**
  - Exact 210mm × 297mm dimensions per page
  - Zero cross-page bleed or overflow (`break-after: page`)
  - Antique gold borders (`#C5A059`) and corner filigree accents

---

## 🗓️ Wedding Ceremonies & Schedule

### Page 1: Pre-Wedding Celebrations (24th January 2027 • Sunday)
- **Mehndi Ceremony** — 11:30 AM onwards *(Followed by Lunch)*
- **Ladies Sangeet Ceremony** — 6:30 PM onwards *(Followed by Dinner)*

### Page 2: Auspicious Celebrations (25th January 2027 • Monday)
- **Haldi Ceremony** — 10:00 AM – 11:30 AM *(Followed by Traditional Sajjan Bhog)*
- **Chooda Ceremony** — 3:30 PM onwards *(Auspicious Bridal Bangle Rituals)*
- **Groom's Departure (Var Nikasi)** — 5:00 PM onwards *(Traditional Ghudchadhi & Royal Departure)*
- **Baraat Welcome & Toran Ceremony** — 6:30 PM onwards *(Grand Reception of the Groom's Procession)*
- **Jaimala (Varmala Ceremony)** — 7:00 PM onwards *(Exchange of Sacred Garland Blessings)*
- **Wedding Reception** — 8:00 PM onwards *(Followed by Dinner)*

### Page 3: The Sacred Union (26th January 2027 • Tuesday)
- **Auspicious Wedding Muhurat** — 6:20 AM onwards *(Sacred Vedic Rituals & Seven Sacred Vows / Saat Phere)*
- **Vidai Ceremony** — 11:30 AM *(With Warm Blessings and Heartfelt Prayers)*

---

## 🖨️ How to View & Export to PDF

### Option 1: In the Browser
1. Open `wedding-invitation/index.html` in Chrome, Edge, or Brave.
2. Use the top toolbar to adjust zoom or jump directly to any page.
3. Click **Print / Save as PDF** (or press `Ctrl + P`).
4. In the print dialog:
   - **Destination:** Save as PDF
   - **Paper Size:** A4
   - **Margins:** None (or Default)
   - **Options:** Enable **Background Graphics**

### Option 2: Automated Headless PDF Generation
Run the bundled Playwright script to re-generate the PDF and visual proofs:
```bash
node wedding-invitation/verify_invitation.js
```
The print-ready PDF is generated at `wedding-invitation/wedding_invitation.pdf`.

---

## 📂 Project Structure

```
.
├── README.md
├── .gitignore
├── package.json
├── wedding-invitation/
│   ├── index.html                  # Semantic 3-page invitation markup
│   ├── styles.css                  # Print-optimized styles & typography
│   ├── script.js                   # Interactive zoom and navigation toolbar
│   ├── verify_invitation.js        # Playwright headless PDF & proof generator
│   ├── wedding_invitation.pdf      # Exported 3-page A4 PDF ready for print
│   ├── page_proof-[1-3].png        # High-res visual verification proofs
│   └── assets/
│       ├── page1_shreenathji_bg.png
│       ├── page2_haldi_bg.png
│       ├── page3_shiv_parvati_bg.png
│       ├── shreenathji-reference.jpg
│       ├── shiv-parvati-reference.png
│       └── fonts/
│           ├── NotoSerifDisplay-*.ttf
│           └── NotoSerifDevanagari-*.ttf
```
