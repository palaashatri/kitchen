---
name: kitchen-sync
description: Automates the process of adding new cake images to Pallav's Kitchen website. Use when new images (e.g., WhatsApp exports) are added to the images/ folder to rename them, generate metadata, and update the gallery.
---

# Kitchen Sync Workflow

This skill ensures that every new cake added to the `images/` folder is professionally named, described, and categorized in the website's portfolio.

## 1. Detection
Identify images in the `images/` directory that are NOT yet recorded in `cakes.json`. These are typically files with names like `WhatsApp Image...` or random UUIDs.

## 2. Analysis & Renaming
For each new image:
- **Analyze:** Use Gemini to understand the cake's design (ignore personal names).
- **Rename:** Move the file to a descriptive, SEO-friendly name (e.g., `images/chocolate-rosette-cake.jpg`).
- **Metadata:** Generate a JSON object with:
    - `title`: Catchy name.
    - `description`: Appetizing 1-sentence blurb.
    - `category`: One of [Birthday, Anniversary, Festive, Specialty, Cake Bowls].
    - `fileName`: The new filename.

### 2.5 Cake Bowls Identification
"Cake Bowls" are typically served in transparent, circular or square plastic containers. They often feature visible layers of sponge, cream, and toppings. Identify these and categorize them as "Cake Bowls".

## 3. Image Polishing (NEW)
Ensure every image looks professional and loads fast:
- **Vibrancy:** Boost saturation and contrast for an appetizing look.
- **Optimization:** Convert to **WebP** format with high compression.
- **Resizing:** Scale down large images (max 1200px) to ensure fast page loads.
- **Preservation:** Maintain the original aspect ratio (no cropping).
- **Cleanup:** Automatically remove the original large image (e.g., `.jpg`, `.png`) after the optimized `.webp` version is created to keep the repository size small.

## 4. Database Update
- Append the new metadata objects to `cakes.json`.
- Update `fileName` to point to the enhanced `.webp` versions.

## 4. Website Sync
Update `script.js` to reflect the new state of `cakes.json`.
- Locate the `const cakeCatalog = [...];` block.
- Replace it with the full contents of `cakes.json`.
- Update the `const images = [...];` and `const imageToCakeTitle = {...};` blocks accordingly.

## Offline Mode (No AI Credits Needed)
If you run out of Gemini credits or want to process images locally:
1.  **Install Ollama:** [ollama.com](https://ollama.com)
2.  **Download Moondream:** Run `ollama pull moondream` in your terminal.
3.  **Run Sync:**
    *   **MacOS/Linux:** `./sync_offline.sh`
    *   **Windows:** `sync_offline.bat`

This uses a local Vision model to analyze your cakes and performs the same enhancement and cleanup as the online version.

## Resources
- **Script:** `scripts/sync_cakes.py` - Standard Gemini-powered sync.
- **Script:** `scripts/sync_offline.py` - Local VLM-powered sync.
- **Script:** `scripts/enhance_images.py` - Handles WebP, vibrancy, and site sync.
