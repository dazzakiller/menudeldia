# Menu Del Dia

Menu Del Dia is a mobile-first platform that connects diners with authentic, affordable daily lunch specials ("menu del día") in Spanish restaurants. The platform enables restaurants to easily upload and manage their daily menus, while providing diners with a location-based discovery tool to find quality meals at great prices.

## Project Goals
- Digitize the traditional Spanish "menu del día" experience
- Make daily menus accessible to locals and tourists
- Empower restaurants to manage and promote their offerings
- Support multilingual access (Spanish/English)

## Target Audience
- Local office workers
- International tourists
- Restaurant owners
- Expat residents
- Food enthusiasts

## Tech Stack
- **Frontend:**
  - React Native (Expo) for mobile apps (diners & restaurants)
  - React.js (Next.js) for web portal and admin dashboard
  - TailwindCSS, NativeWind, React Native Paper, i18next
- **Backend:**
  - Supabase (PostgreSQL, PostGIS, Auth, Storage, Realtime)
  - Supabase Edge Functions (serverless logic)
- **DevOps & Infrastructure:**
  - GitHub, GitHub Actions (CI/CD)
  - Expo EAS for mobile builds
  - Docker, Coolify, Nginx for web deployment
  - Jest, React Testing Library, Detox, Cypress for testing

## High-Level Architecture
- **Mobile Apps:**
  - Diner app: location-based restaurant discovery, menu browsing, reviews, notifications
  - Restaurant app: menu/photo upload, analytics, offer management
- **Web Portal:**
  - Restaurant management, analytics, marketing, reservations
- **Admin Dashboard:**
  - User/content management, analytics, moderation
- **Supabase Backend:**
  - Auth, data storage, geospatial queries, file storage, realtime sync

## Planned Monorepo Structure
```
menu-del-dia/
├── packages/
│   ├── common/          # Shared business logic, types, utilities
│   ├── api/             # API layer for Supabase
│   ├── ui-components/   # Shared UI components
│   └── translations/    # Shared language files
├── apps/
│   ├── mobile/          # React Native mobile app
│   ├── restaurant-web/  # Restaurant web portal
│   └── admin/           # Admin dashboard
└── services/
    └── functions/       # Edge/serverless functions
```

## Key Features
- Social login (Google, Apple), role-based access
- Location-based restaurant and menu discovery
- Menu management and photo upload
- Multilingual support (Spanish/English)
- Reviews and ratings
- Analytics for restaurants and platform
- Real-time updates

## Getting Started
Project setup and contribution guidelines will be added as the codebase evolves. For now, see `__project-docs/` for technical plans and requirements.

## License
TBD