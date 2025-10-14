# Sanity CMS Setup Guide

## Quick Start

### 1. Create a Sanity Project

Visit [sanity.io/manage](https://sanity.io/manage) and:
1. Click **Create project**
2. Name it "Vorca Studio Portfolio"
3. Choose **"Company & personal use"** (or your preferred plan)
4. Create the project

### 2. Get Your Project Credentials

After creating the project:
1. Copy your **Project ID** (you'll see it on the project dashboard)
2. The default dataset is **"production"**

### 3. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
```

**Replace** `your-project-id-here` with your actual Project ID from step 2.

### 4. Initialize & Deploy Sanity Studio

Run these commands:

```bash
# Deploy the schema to Sanity
npx sanity deploy

# Or deploy with the CLI
npm install -g @sanity/cli
sanity login
sanity deploy
```

### 5. Access Your Studio

You have two options:

#### Option A: Local Studio (Embedded in Next.js)
```bash
npm run dev
```
Then visit: **http://localhost:3000/studio**

#### Option B: Hosted Studio (Sanity Cloud)
```bash
npx sanity deploy
```
Then access via: **https://your-studio.sanity.studio**

### 6. Add Your First Project

1. Go to your studio (local or hosted)
2. Click **"Portfolio Project"** in the sidebar
3. Click **"Create new"**
4. Fill in:
   - **Title**: e.g., "Tide Journal"
   - **Slug**: Click "Generate" button
   - **Description**: Brief project description
   - **Main Image**: Upload a project screenshot
   - **Link**: External URL (optional)
   - **Tags**: e.g., "Next.js", "Tailwind CSS"
   - **Display Order**: Lower numbers appear first (0, 1, 2, etc.)
5. Click **"Publish"**

### 7. Configure CORS (Required for Studio)

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to **Settings** → **API**
4. Under **CORS Origins**, add:
   - `http://localhost:3000` (for local development)
   - `https://portfolio.vorcastudio.com` (for production)
   - Check **"Allow credentials"**

## Schema Overview

Your portfolio project schema includes:

- **Title** (required): Project name
- **Slug** (required): URL-friendly identifier
- **Description** (required): Brief project summary
- **Main Image**: Project screenshot/thumbnail
- **Link**: External URL to live project
- **Tags**: Keywords (Next.js, React, etc.)
- **Featured**: Highlight important projects
- **Display Order**: Sort priority (lower = first)
- **Published At**: Publication date

## Useful Commands

```bash
# Deploy studio changes
npx sanity deploy

# Deploy specific dataset
npx sanity deploy --dataset production

# Check Sanity status
npx sanity status

# Manage project
npx sanity manage
```

## Troubleshooting

### "Project ID is required"
- Make sure `.env.local` exists and has `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Restart your dev server after adding env variables

### "CORS origin not allowed"
- Add your domain to CORS Origins in Sanity project settings

### Images not loading
- Check that `cdn.sanity.io` is in `next.config.ts` remotePatterns
- Verify image URLs in the Sanity CDN

### Studio not loading at /studio
- Make sure you have `src/app/studio/[[...tool]]/page.tsx`
- Check that `sanity.config.ts` exists

## Next Steps

1. ✅ Create your Sanity project
2. ✅ Add environment variables
3. ✅ Deploy studio
4. ✅ Configure CORS
5. ✅ Add 3-5 portfolio projects
6. 🚀 Deploy to production

---

**Need help?** Check the [Sanity docs](https://www.sanity.io/docs) or [Next.js integration guide](https://www.sanity.io/plugins/next-sanity).
