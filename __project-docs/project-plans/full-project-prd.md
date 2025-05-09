# Menu Del Dia - Project Requirements Document (PRD)

## 1. Introduction

### 1.1 Purpose
This document defines the requirements for the Menu Del Dia platform, which aims to connect diners with authentic, affordable menu del día offerings in Spanish restaurants. It serves as the authoritative source for technical and functional requirements to guide development, testing, and deployment.

### 1.2 Project Overview
Menu Del Dia is a mobile-first platform that digitizes the traditional Spanish "menu del día" experience, making it accessible to both locals and tourists. The app enables restaurants to easily upload and manage their daily lunch specials while providing diners with a location-based discovery tool to find authentic, quality meals at affordable prices.

### 1.3 Target Audience
* **Local Office Workers**: Seeking affordable, quality lunch options near their workplace on a daily basis
* **International Tourists**: Visitors to Spain wanting to experience authentic local cuisine at reasonable prices
* **Restaurant Owners**: Small to medium-sized restaurants offering daily changing menu del día specials
* **Expat Residents**: People living in Spain who face language barriers with traditional menu displays
* **Food Enthusiasts**: Individuals who enjoy exploring new culinary experiences and sharing opinions

### 1.4 Project Timeline
* **MVP Development**: 3 months to create functional application with core features
* **Initial Market Testing**: Launch in 2 major Spanish cities within 5 months
* **Feature Expansion**: Implement additional features based on user feedback by month 8
* **User Growth Phase**: Reach 5,000 active users and 500 registered restaurants within 12 months
* **Monetization Implementation**: Launch premium features by month 15
* **Geographic Expansion**: Expand to all major Spanish tourist destinations by month 18

## 2. Technical Stack

### 2.1 Frontend
* **Mobile Applications (Diners & Restaurants)**:
  * React Native with Expo SDK
  * NativeWind (TailwindCSS for React Native) for styling
  * React Native Paper for UI components
  * React Navigation for routing
  * Expo Location & React Native Maps for geolocation
  * i18next for internationalization
  * Formik for form handling
  * Expo Camera for menu photo capture

* **Web Applications (Restaurant Portal & Admin)**:
  * React.js with Next.js
  * TailwindCSS for styling
  * React Query for data fetching
  * React Hook Form for form management
  * Recharts for analytics visualization

### 2.2 Backend
* Supabase (PostgreSQL-based backend-as-a-service)
* PostGIS extension for geospatial queries
* Supabase Auth for authentication and user management
* Supabase Storage for image storage
* Supabase Realtime for live updates
* Supabase Edge Functions for custom serverless logic (as needed)

### 2.3 Infrastructure
* GitHub for version control
* GitHub Actions for CI/CD
* Expo EAS for mobile app building and submission
* Self-hosted Coolify on VPS for web app deployment
* Docker containerization for web applications
* Nginx for reverse proxy and SSL termination
* Database backups and redundancy

### 2.4 Third-Party Services
* Google OAuth for social login
* Apple Sign-In for iOS authentication
* App Store In-App Purchases for iOS subscriptions
* Google Play Billing for Android subscriptions
* Stripe for web payment processing (future phase)
* Sentry for error tracking and monitoring
* PostHog for analytics (future phase)

## 3. Functional Requirements

### 3.1 User Authentication & Profiles

#### 3.1.1 Authentication
* Social login integration with Google and Apple
* Email/password registration and login
* Secure JWT token management
* Role-based access control (diner, restaurant owner, admin)
* Account recovery mechanism
* Session management and secure logout

#### 3.1.2 Diner Profiles
* Basic profile information (name, email, profile photo)
* Language preference settings (initial: Spanish/English)
* Dietary preferences and restrictions
* Favorite restaurants list
* Review history
* Visited restaurant history

#### 3.1.3 Restaurant Profiles
* Business information (name, description, address, contact details)
* Operating hours and days
* Cuisine types and specialties
* Photo gallery
* Menu template management
* Analytics dashboard access

### 3.2 Location-Based Discovery

#### 3.2.1 Restaurant Search
* GPS-based nearby restaurant discovery
* Map view with restaurant locations
* List view with preview information
* Advanced filtering (distance, price range, cuisine type, ratings)
* Search by name or location
* Sorting options (distance, price, rating)

#### 3.2.2 Menu Discovery
* Daily menu browsing by restaurant
* Price and menu item comparison
* Special dietary filter options
* Visual menu representation with photos
* Cultural context notes for traditional dishes

### 3.3 Menu Management System

#### 3.3.1 Menu Creation
* Intuitive interface for daily menu upload (web and mobile)
* Template system for recurring menu items
* Schedule menus in advance for the week
* Photo upload and management
* Pricing and special offer information
* Dietary information tagging
* Multilingual input support (Spanish/English)

#### 3.3.2 Menu Updates
* Real-time menu modifications
* Mark items as sold out
* Special highlight for chef's recommendations
* Daily special notification system
* Menu archiving for historical reference

### 3.4 Multi-lingual Support

#### 3.4.1 Interface Localization
* Complete UI translation in Spanish and English
* Language detection based on device settings
* Manual language selection option
* Remember language preference

#### 3.4.2 Content Translation
* Menu item translations between Spanish and English
* Description and ingredient translations
* Cultural context explanations for traditional dishes
* Translation correction mechanism for user feedback
* Visual elements to overcome language barriers

### 3.5 Review and Rating System

#### 3.5.1 Review Creation
* Star rating system (1-5 stars)
* Written review capability
* Photo upload with reviews
* Specific menu del día experience focus
* Moderation system for inappropriate content

#### 3.5.2 Review Display
* Overall restaurant rating
* Menu-specific ratings
* Sort and filter reviews by criteria
* Highlight helpful reviews
* Restaurant owner response capability

### 3.6 Analytics and Reporting

#### 3.6.1 Restaurant Analytics
* View count for restaurant profile
* Menu view statistics
* Customer demographics (if available)
* Peak search times
* Comparison with similar restaurants
* Rating trends over time

#### 3.6.2 Platform Analytics
* User acquisition and retention metrics
* Feature usage statistics
* Search pattern analysis
* User feedback aggregation
* Performance monitoring

### 3.7 Subscription and Monetization

#### 3.7.1 Diner Subscriptions
* Free basic access
* Premium subscription via app stores
* Additional features for premium users (future)
* Subscription management through app stores

#### 3.7.2 Restaurant Features
* Free basic listing
* Enhanced visibility options (future)
* Featured placement in search results (future)
* Advanced analytics (future)
* Promotional tools (future)

## 4. Non-Functional Requirements

### 4.1 Performance
* Mobile app startup time under 2 seconds on mid-range devices
* Search results returned in under 1 second
* Menu images optimized for quick loading on mobile connections
* Smooth scrolling and navigation (60fps)
* Efficient battery usage for location services
* Responsive UI with no perceptible lag

### 4.2 Security
* Secure authentication with industry-standard protocols
* Data encryption in transit and at rest
* Secure API communication
* Protection against common vulnerabilities (OWASP Top 10)
* Regular security audits and updates
* Privacy-focused data handling

### 4.3 Scalability
* Support for up to 50,000 users in first year
* Database architecture designed for growth
* Horizontal scaling capability for web services
* CDN implementation for media content
* Query optimization for increasing data volume
* Efficient caching strategies

### 4.4 Reliability
* 99.9% uptime for core services
* Graceful degradation when components fail
* Automated backup system for critical data
* Error logging and monitoring
* Crash reporting and analysis
* Automated recovery processes

### 4.5 Compliance
* GDPR compliance for EU users
* App store guidelines compliance for both iOS and Android
* Accessibility standards compliance
* Data retention policies in line with regulations
* Transparent privacy policy and terms of service
* Cookie consent management

### 4.6 Accessibility
* WCAG 2.1 AA compliance
* Screen reader compatibility
* Sufficient color contrast
* Keyboard navigation support for web interfaces
* Alternative text for images
* Resizable text without loss of functionality

### 4.7 Responsiveness
* Mobile-first design approach
* Support for all major browsers
* Responsive layouts for all screen sizes
* Optimization for both portrait and landscape orientations
* Appropriate touch targets for mobile interfaces
* Consistent experience across devices

## 5. User Journeys

### 5.1 Diner User Journey

1. **Discovery & Installation**
   * Discover app through search, social media, or tourism information
   * Install from App Store or Google Play

2. **Registration & Onboarding**
   * Create account via social login
   * Set language preference
   * Set dietary preferences (optional)
   * Allow location access

3. **Restaurant Discovery**
   * View nearby restaurants on map or list
   * Filter based on preferences (price, distance, cuisine)
   * Browse today's menu offerings

4. **Menu Exploration**
   * Select restaurant of interest
   * View complete menu del día details
   * See photos and descriptions in preferred language
   * Check ratings and reviews

5. **Restaurant Visit**
   * Use directions to navigate to restaurant
   * Enjoy meal based on app information
   * Optionally check in at restaurant

6. **Post-Visit Engagement**
   * Leave rating and review
   * Upload photos of the experience
   * Save restaurant to favorites
   * Share discovery with friends

### 5.2 Restaurant Owner Journey

1. **Discovery & Registration**
   * Learn about platform through restaurant associations or marketing
   * Install mobile app or visit web portal
   * Create business account with verification

2. **Restaurant Profile Setup**
   * Add business details (name, address, description)
   * Set operating hours
   * Upload restaurant photos
   * Add cuisine types and specialties

3. **Menu Template Creation**
   * Create templates for recurring menu items
   * Add dish details in Spanish
   * Add English translations (or use automated translation)
   * Upload dish photos

4. **Daily Menu Management**
   * Update daily menu using templates or new items
   * Set price for menu del día
   * Highlight specials or chef recommendations
   * Publish menu for the day

5. **Customer Engagement**
   * Receive notifications of new reviews
   * Respond to customer feedback
   * Monitor profile visits and menu views
   * Update real-time information (sold-out items)

6. **Performance Analysis**
   * Review analytics dashboard
   * Compare performance to previous periods
   * Identify popular menu items
   * Make data-driven decisions for business

## 6. Data Models

### 6.1 User Model
* id (UUID, primary key)
* email (string, unique)
* password_hash (string, if applicable)
* auth_provider (string: 'email', 'google', 'apple')
* auth_provider_id (string)
* role (enum: 'diner', 'restaurant_owner', 'admin')
* created_at (timestamp)
* last_login (timestamp)

### 6.2 Diner Profile Model
* id (UUID, primary key)
* user_id (UUID, foreign key to users)
* display_name (string)
* profile_photo_url (string)
* language_preference (enum: 'es', 'en')
* dietary_preferences (string array)
* favorites (array of restaurant_ids)
* created_at (timestamp)
* updated_at (timestamp)

### 6.3 Restaurant Model
* id (UUID, primary key)
* owner_id (UUID, foreign key to users)
* name (string)
* description (string)
* address (string)
* coordinates (geography point)
* contact_info (JSON: phone, email, website)
* operating_hours (JSON object)
* cuisines (string array)
* profile_photos (string array)
* average_rating (float)
* created_at (timestamp)
* updated_at (timestamp)

### 6.4 Menu Template Model
* id (UUID, primary key)
* restaurant_id (UUID, foreign key to restaurants)
* name (string)
* items (JSONB array)
* created_at (timestamp)
* updated_at (timestamp)

### 6.5 Daily Menu Model
* id (UUID, primary key)
* restaurant_id (UUID, foreign key to restaurants)
* date (date)
* starters (JSONB array)
* mains (JSONB array)
* desserts (JSONB array)
* price (decimal)
* available (boolean)
* created_at (timestamp)
* updated_at (timestamp)

### 6.6 Review Model
* id (UUID, primary key)
* user_id (UUID, foreign key to users)
* restaurant_id (UUID, foreign key to restaurants)
* daily_menu_id (UUID, foreign key to daily_menus, optional)
* rating (integer, 1-5)
* comment (text)
* photos (string array)
* visit_date (date)
* created_at (timestamp)
* updated_at (timestamp)

## 7. API Endpoints

### 7.1 Authentication API
* POST /auth/register
* POST /auth/login
* POST /auth/social-login
* POST /auth/logout
* GET /auth/me
* POST /auth/refresh-token

### 7.2 User Profile API
* GET /profile
* PUT /profile
* GET /profile/settings
* PUT /profile/settings
* GET /profile/favorites
* POST /profile/favorites
* DELETE /profile/favorites/:id

### 7.3 Restaurant API
* GET /restaurants
* GET /restaurants/nearby?lat=x&lng=y&radius=z
* GET /restaurants/:id
* POST /restaurants (admin/owner)
* PUT /restaurants/:id (admin/owner)
* DELETE /restaurants/:id (admin)
* GET /restaurants/:id/photos
* POST /restaurants/:id/photos (owner)
* DELETE /restaurants/:id/photos/:photoId (owner)

### 7.4 Menu API
* GET /restaurants/:id/menus/today
* GET /restaurants/:id/menus?date=yyyy-mm-dd
* POST /restaurants/:id/menus (owner)
* PUT /restaurants/:id/menus/:menuId (owner)
* DELETE /restaurants/:id/menus/:menuId (owner)
* GET /restaurants/:id/templates
* POST /restaurants/:id/templates (owner)
* PUT /restaurants/:id/templates/:templateId (owner)
* DELETE /restaurants/:id/templates/:templateId (owner)

### 7.5 Review API
* GET /restaurants/:id/reviews
* POST /restaurants/:id/reviews
* PUT /restaurants/:id/reviews/:reviewId (owner of review)
* DELETE /restaurants/:id/reviews/:reviewId (owner of review or admin)
* POST /restaurants/:id/reviews/:reviewId/report

## 8. UI/UX Requirements

### 8.1 Design System
* Consistent color scheme reflecting Spanish cuisine themes
* Typography system with excellent readability on mobile devices
* Iconography library for consistent visual language
* Component library with shared patterns
* Animation guidelines for interactive elements
* Responsive grid system
* Accessibility-focused design patterns

### 8.2 Key Interface Requirements
* Clean, intuitive navigation system
* Prominent search and filtering capabilities
* Visual-forward presentation of restaurants and menus
* Simple restaurant profile pages with clear information hierarchy
* Straightforward menu management interface for restaurant owners
* Effortless photo upload process
* Easy-to-understand analytics visualizations

### 8.3 Priority Screens
1. Restaurant discovery map/list view
2. Daily menu display
3. Restaurant profile page
4. Menu creation interface (restaurant owners)
5. User profile and preferences
6. Review creation and display
7. Registration and onboarding flows

## 9. Testing Requirements

### 9.1 Unit Testing
* Test coverage for core business logic (minimum 80%)
* Component unit tests for all reusable UI elements
* API service function tests
* Form validation logic tests
* State management tests

### 9.2 Integration Testing
* API integration tests for all endpoints
* Authentication flow testing
* Payment processing verification
* Cross-component interaction tests
* Database operation verification

### 9.3 End-to-End Testing
* Complete user journeys for diners and restaurant owners
* Cross-platform testing (iOS, Android, web)
* Multi-language testing
* Location services testing
* Image upload and processing tests

### 9.4 Performance Testing
* Load testing for concurrent users
* Response time benchmarking
* Mobile performance on various device categories
* Battery usage monitoring
* Data usage optimization testing

### 9.5 Accessibility Testing
* Screen reader compatibility testing
* Keyboard navigation testing
* Color contrast verification
* Font scaling tests
* Touch target size verification

## 10. Deployment and Operations

### 10.1 CI/CD Pipeline
* Automated build process via GitHub Actions
* Test automation for each pull request
* Staging environment deployment for verification
* Production deployment approval process
* Automated mobile app builds with Expo EAS

### 10.2 Environment Setup
* Development environment for active development
* Staging environment for pre-release testing
* Production environment for end users
* Separate Supabase instances for each environment
* Database migration strategy between environments

### 10.3 Monitoring and Logging
* Error tracking with Sentry
* Performance monitoring for API endpoints
* User behavior analytics
* Crash reporting for mobile apps
* Server health monitoring
* Database performance tracking

### 10.4 Backup and Recovery
* Automated database backups (daily)
* Backup verification process
* Disaster recovery plan
* Data retention policy implementation
* Point-in-time recovery capability

## 11. Future Considerations

### 11.1 Potential Features for Future Releases
* Reservation system integration
* Pre-ordering capabilities
* Loyalty program for frequent diners
* Additional language support beyond Spanish/English
* AI-powered menu recommendations
* Advanced analytics for restaurants
* Expanded payment options
* In-app directions and navigation
* Augmented reality menu visualization

### 11.2 Scaling Considerations
* International expansion beyond Spain
* Additional menu types beyond menu del día
* B2B partnerships with tourism organizations
* Integration with hotel and accommodation platforms
* API access for third-party developers
* White label solutions for restaurant chains

## 12. Appendix

### 12.1 Glossary
* **Menu del día**: Fixed-price lunch menu offered by Spanish restaurants, typically including multiple courses at an affordable price
* **Diner**: End user searching for restaurants and menu options
* **Restaurant Owner**: Business user managing restaurant profile and menus
* **PostGIS**: PostgreSQL extension that adds support for geographic objects

### 12.2 References
* Spanish Tourism Board restaurant statistics
* GDPR compliance requirements
* Apple App Store and Google Play Store guidelines
* WCAG 2.1 AA accessibility standards
* React Native and Expo documentation
* Supabase documentation and best practices