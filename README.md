# Shri Shyam Trans Logistics - Corporate Website

A professional corporate website for Shri Shyam Trans Logistics, a transportation and 3PL logistics company.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **UI Components**: Radix UI primitives

## Prerequisites

- Node.js 16+ 
- npm or pnpm (recommended)

## Quick Start

### 1. Install Dependencies

```bash
cd frontend
npm install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# or
pnpm dev
```

The app will open at **http://localhost:3000**

### 3. Build for Production

```bash
npm run build
# or
pnpm build
```

The production build will be in `frontend/dist/`

## Deployment Options

### Option 1: Static Hosting (Netlify, Vercel, GitHub Pages)

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting service

**Netlify**:
```bash
npm install -g netlify-cli
cd frontend
npm run build
netlify deploy --prod --dir=dist
```

**Vercel**:
```bash
npm install -g vercel
cd frontend
vercel --prod
```

### Option 2: Traditional Web Server (Apache, Nginx)

1. Build the project
2. Copy `frontend/dist/` contents to your web server's public directory
3. Configure your server to redirect all routes to `index.html`

**Nginx config example**:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/shrishyam-logistics/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Option 3: Docker

```dockerfile
FROM nginx:alpine
COPY frontend/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t shrishyam-logistics .
docker run -p 80:80 shrishyam-logistics
```

## Project Structure

```
frontend/
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── AboutUs.tsx
│   │   ├── CoreServices.tsx
│   │   └── ...
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Professional corporate styling
- ✅ Contact form with validation
- ✅ Service showcase
- ✅ Industries served section
- ✅ Call-to-action sections
- ✅ Toast notifications

## Backend (Optional - Not Required for Static Site)

The `backend/` folder contains Motoko code for Internet Computer blockchain integration, but the frontend works perfectly as a standalone static website without it.

## Support

For issues or questions, contact:
- Email: SSBTS3481@gmail.com
- Phone: 8432312949 / 9158312949
- Hours: 7 AM - 11 PM, Monday to Sunday

---

**Built with ❤️ for Shri Shyam Trans Logistics**
