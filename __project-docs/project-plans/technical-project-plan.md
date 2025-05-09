# Menu Del Dia - Technical Project Plan

## 1. Executive Summary

This document outlines the technical implementation plan for the Menu Del Dia application, which aims to connect diners with daily menu specials (menu del día) in Spanish restaurants. The project will utilize React Native with Expo for mobile apps (iOS and Android), React.js for web interfaces, and Supabase as the backend solution. This technology stack enables efficient development for a solo developer while supporting all required functionalities.

## 2. System Architecture

### 2.1 High-Level Architecture

The system consists of three main components:

1. **Frontend Applications**:
   - React Native mobile apps (iOS and Android) for diners
   - React.js web portal for restaurants
   - React.js admin dashboard for system management

2. **Supabase Backend**:
   - PostgreSQL database with PostGIS for geospatial functionality
   - Authentication system for social login
   - Storage for images and assets
   - Realtime subscriptions for updates

3. **Serverless Functions** (as needed):
   - Custom business logic
   - Third-party integrations
   - Scheduled tasks

### 2.2 Component Responsibilities

#### Mobile Applications for Diners (React Native + Expo)
- Location-based restaurant discovery
- Menu browsing and favoriting
- User reviews and ratings
- Multilingual support (Spanish/English)
- Special offer notifications

#### Mobile Applications for Restaurants (React Native + Expo)
- Menu creation and photo capture
- Quick menu updates on-the-go
- Real-time notification of customer interactions
- Basic analytics and daily performance
- Special offer creation and management
- Simplified version of restaurant portal optimized for mobile use

#### Restaurant Web Portal (React.js)
- Comprehensive menu creation and management
- Restaurant profile administration
- Detailed analytics dashboard
- Marketing and special offer campaign management
- Advanced photo management and optimization
- Reservation management

#### Admin Dashboard (React.js)
- User management and moderation
- System configuration
- Content approval flows
- Analytics and reporting
- Platform health monitoring

#### Supabase Backend
- User authentication and authorization
- Data storage and retrieval
- Geospatial queries for location features
- File storage for images
- Realtime data synchronization

## 3. Technical Stack Details

### 3.1 Frontend Technologies

**Mobile Application for Diners**:
- React Native with Expo SDK
- React Navigation for routing
- Expo Location for geolocation
- React Native Maps for mapping
- i18next for internationalization
- Formik for form handling
- Expo Image for optimized image handling

**Mobile Application for Restaurants**:
- React Native with Expo SDK (shared codebase with diner app)
- Camera integration for menu photo capture
- Image processing for menu digitization
- Optional offline capabilities for rural areas
- Simplified menu management optimized for mobile

**Web Applications** (Restaurant Portal & Admin):
- React.js
- Next.js for SSR and routing
- TailwindCSS for styling
- React Query for data fetching
- i18next for internationalization
- React Hook Form for form management
- Recharts for analytics visualization

**Shared UI Framework**:
- NativeWind (TailwindCSS for React Native) for consistent styling across platforms
- React Native Paper for mobile-optimized UI components
- Custom component library with shared design tokens
- Responsive design system for all screen sizes and platforms

### 3.2 Backend Technologies

- Supabase (PostgreSQL-based backend-as-a-service)
- PostGIS extension for geospatial queries
- Supabase Auth for authentication
- Supabase Storage for file management
- Supabase Realtime for live updates
- Supabase Edge Functions (if custom serverless logic is needed)

### 3.3 DevOps & Infrastructure

- GitHub for version control
- GitHub Actions for CI/CD
- Expo EAS for mobile app building
- Self-hosted Coolify on VPS for web app deployment
- Docker containerization for web applications
- Supabase for backend hosting
- Nginx for reverse proxy and SSL termination
- Jest and React Testing Library for testing

## 4. Code Organization

### 4.1 Monorepo Structure

```
menu-del-dia/
├── packages/
│   ├── common/          # Shared business logic, types, and utilities
│   ├── api/             # API layer interacting with Supabase
│   ├── ui-components/   # Shared UI components
│   └── translations/    # Shared language files
├── apps/
│   ├── mobile/          # React Native mobile app
│   ├── restaurant-web/  # Restaurant web portal
│   └── admin/           # Admin dashboard
└── services/
    └── functions/       # Edge/serverless functions for custom logic
```

### 4.2 Shared Code Benefits
- Common business logic and API calls
- Consistent styling and UX
- Reusable validation and form logic
- Centralized translations
- Shared types and interfaces

## 5. Database Schema

### 5.1 Core Tables

**users** (managed by Supabase Auth)
- Standard auth fields
- Role (diner, restaurant_owner, admin)

**profiles**
- user_id (FK to users)
- display_name
- avatar_url
- language_preference
- dietary_preferences (array)

**restaurants**
- id (FK to users for restaurant owners)
- name
- description
- address
- coordinates (geography point)
- contact_info
- operating_hours
- cuisines (array)
- profile_photos (array)

**menu_templates**
- id
- restaurant_id
- name
- items (JSONB array)

**daily_menus**
- id
- restaurant_id
- date
- starters (JSONB array)
- mains (JSONB array)
- desserts (JSONB array)
- price
- available (boolean)

**reviews**
- id
- user_id
- restaurant_id
- daily_menu_id (optional)
- rating
- comment
- visit_date
- photos (array)

## 6. Key Feature Implementation

### 6.1 Authentication System

Implementation using Supabase Auth with social login:

```javascript
// Example implementation with Supabase and Expo AuthSession
import * as AuthSession from 'expo-auth-session';
import { supabase } from './supabaseClient';

async function signInWithGoogle() {
  const redirectUri = AuthSession.makeRedirectUri();
  const provider = 'google';

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: redirectUri,
    },
  });

  // Handle authentication result
}
```

### 6.2 Geolocation Restaurant Discovery

```javascript
// Mobile app restaurant discovery function
async function findNearbyRestaurants(latitude, longitude, radiusInMeters = 1000) {
  const { data, error } = await supabase
    .rpc('nearby_restaurants', {
      lat: latitude,
      lng: longitude,
      radius: radiusInMeters
    });

  if (error) {
    console.error('Error finding restaurants:', error);
    return [];
  }

  return data;
}

// Corresponding Supabase stored procedure
create or replace function nearby_restaurants(lat float8, lng float8, radius float8)
returns setof restaurants
language sql
as $$
  select *
  from restaurants
  where ST_DWithin(
    coordinates,
    ST_SetSRID(ST_MakePoint(lng, lat), 4326)::geography,
    radius
  )
  order by coordinates <-> ST_SetSRID(ST_MakePoint(lng, lat), 4326)::geography;
$$;
```

### 6.3 Multi-lingual Support

```javascript
// i18next configuration
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: require('./locales/en.json')
  },
  es: {
    translation: require('./locales/es.json')
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
```

### 6.4 Menu Management System

```typescript
// Restaurant portal menu management
interface MenuItem {
  id: string;
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
  price: number;
  photo_url?: string;
  dietary_tags: string[];
}

interface DailyMenu {
  id: string;
  restaurant_id: string;
  date: string;
  starters: MenuItem[];
  mains: MenuItem[];
  desserts: MenuItem[];
  price: number;
  available: boolean;
}

// Function to save a daily menu
async function saveDailyMenu(menu: DailyMenu) {
  const { data, error } = await supabase
    .from('daily_menus')
    .upsert(menu, { onConflict: 'restaurant_id, date' })
    .select();

  return { data, error };
}
```

## 7. Development Timeline

| Phase | Timeline | Focus | Deliverables |
|-------|----------|-------|-------------|
| **Foundation** | Weeks 1-3 | Core setup | Project structure, Supabase configuration, authentication |
| **Restaurant Portal** | Weeks 4-6 | Restaurant experience | Menu management system, profile setup |
| **Mobile MVP** | Weeks 7-9 | Diner experience | Restaurant discovery, menu viewing |
| **Integration** | Weeks 10-11 | System connectivity | Review system, notifications |
| **Polishing** | Week 12 | Refinement | Performance optimization, UI finalization |
| **Testing** | Throughout | Quality assurance | Ongoing testing and debugging |

## 8. Deployment Strategy

### 8.1 Mobile App Deployment
- Use Expo EAS Build for generating native builds
- Configure both iOS and Android builds in parallel
- Submit to App Store and Google Play Store
- Implement phased rollout strategy

### 8.2 Web App Deployment
- Deploy to self-hosted Coolify instance on VPS
- Configure Docker-based deployment pipeline
- Set up automatic builds triggered by GitHub Actions
- Implement staging environment for testing
- Configure Nginx as reverse proxy with caching
- Set up auto-renewal for SSL certificates
- Implement CDN for static assets

### 8.3 Backend Deployment
- Use Supabase's managed hosting
- Configure separate development and production instances
- Set up database migrations flow
- Implement backup strategy

## 9. Testing Strategy

### 9.1 Unit Testing
- Jest for testing business logic
- React Testing Library for component testing
- Supabase mocking for backend tests

### 9.2 Integration Testing
- API integration tests
- Authentication flow testing
- Database operation verification

### 9.3 End-to-End Testing
- Detox for mobile app E2E testing
- Cypress for web app E2E testing
- Cross-device testing with BrowserStack

### 9.4 Performance Testing
- Lighthouse for web performance
- React Native performance monitoring
- API response time benchmarking

## 10. Security Considerations

### 10.1 Authentication Security
- Implement proper JWT handling
- Configure secure session management
- Protect against common auth vulnerabilities

### 10.2 Data Security
- Row-Level Security in Supabase
- Proper access control policies
- Encrypted data transmission

### 10.3 GDPR Compliance
- Privacy policy implementation
- Data retention policies
- User data export functionality
- Right to be forgotten implementation

## 11. Future Expansion Considerations

### 11.1 Technical Scalability
- Database scaling strategy
- API performance optimizations
- CDN implementation for images

### 11.2 Feature Expansion
- Reservation system architecture
- Payment processing integration
- Loyalty program implementation
- Analytics engine enhancement

## 12. Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Performance issues with geospatial queries | High | Implement proper indexing, query optimization, and caching strategies |
| Social login integration challenges | Medium | Thorough testing of auth flows, fallback authentication methods |
| App store rejection | High | Review guidelines thoroughly, prepare for multiple submission iterations |
| Restaurant adoption barriers | High | Simplify onboarding, provide excellent support, consider assisted onboarding |
| Translation accuracy | Medium | Allow manual correction of translations, community feedback mechanism |

## 13. Technical Debt Management

- Regular code refactoring sessions
- Comprehensive unit test coverage
- Documentation requirements for all features
- Scheduled technical debt sprints

## 14. Documentation Strategy

- Code documentation with JSDoc
- API documentation with Swagger
- User guides for restaurants and admins
- Developer onboarding documentation

## 15. Monitoring and Analytics

- Error tracking with Sentry
- Performance monitoring with Supabase
- User behavior analytics with PostHog
- Crash reporting for mobile apps

## 16. Conclusion

This technical project plan outlines a comprehensive approach to building the Menu Del Dia platform, leveraging modern technologies that enable efficient development for a solo developer. The stack selection prioritizes development speed and maintainability while ensuring a robust foundation for growth.

The implementation timeline of three months to MVP is aggressive but achievable with the selected technologies, particularly by leveraging Supabase's built-in functionality to reduce backend development time.

By following this plan, the Menu Del Dia platform has a clear path to successful implementation and a strong technical foundation for future growth.