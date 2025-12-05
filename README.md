# Obermind

Project developed with Next.js 16, React 19, and TypeScript, following Atomic Design principles for component organization.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd obermind
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

### Available Scripts

- `npm run build` - Creates a production build
- `npm run start` - Starts the production server (after build)
- `npm run lint` - Runs ESLint linter
- `npm run commitlint` - Validates commit messages

## 🏗️ Architecture

This project adopts the **Atomic Design Architecture**, a methodology that organizes components in a clear and scalable hierarchy, facilitating code maintenance and reusability.

### Component Structure

```
components/
├── atoms/          # Basic and indivisible components
├── molecules/      # Combinations of atoms
├── organisms/      # Complex components formed by molecules and atoms
└── templates/      # Page templates that combine organisms
```

#### Atoms
Fundamental and indivisible components, the smallest building blocks of the interface:
- `Button` - Basic button
- `Card` - Card container
- `Icon` - Icon
- `Input` - Input field
- `Typography` - Text components
- `TimeRangeButton` - Time range button

#### Molecules
Simple combinations of atoms that form functional components:
- `HeroPrimaryButton` / `HeroSecondaryButton` - Hero buttons
- `BuyersSellers` - Buyers/sellers component
- `LanguageSelector` - Language selector
- `MarketCard` / `MarketListItem` - Market cards and items
- `NavigationItem` - Navigation item
- `PriceDisplay` - Price display
- `StepCard` - Step card
- `TabSelector` - Tab selector
- `TestimonialCard` - Testimonial card
- `TopBarLink` - Top bar link

#### Organisms
Complex components that form complete sections of the interface:
- `Header` - Page header
- `Footer` - Footer
- `Hero` - Hero section
- `MarketsSection` - Markets section
- `MarketsGrid` - Markets grid
- `TradingFeatures` - Trading features
- `TrustSection` - Trust section
- `WithdrawalsSection` - Withdrawals section
- `NewsSection` - News section
- `TestimonialsGrid` - Testimonials grid
- `CTASection` - Call-to-action section
- `FinancialCard` - Financial card

#### Templates
Page templates that combine multiple organisms:
- `LandingPageTemplate` - Landing page template

### Project Folder Structure

```
obermind/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Components organized by Atomic Design
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
├── public/                # Static files (images, icons)
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

### Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Static typing
- **Tailwind CSS 4** - Utility-first styling framework
- **Lucide React** - Icon library
- **ESLint** - Code quality linter
- **Husky** - Git hooks
- **Commitlint** - Commit message validation

### Standards and Conventions

- **Path Aliases**: The project uses `@/*` for absolute imports (configured in `tsconfig.json`)
- **Component Export**: Each component has an `index.ts` file to facilitate imports
- **TypeScript**: All code is typed with TypeScript
- **Conventional Commits**: The project uses Commitlint to ensure standardized commit messages

## 📝 Notes

- The project uses Google Fonts (Urbanist and Inter) optimized by Next.js
- Images are located in the `public/` folder
- Global styles are defined in `app/globals.css`

## 🚀 Future Improvements

If I had more time, here are the frontend improvements I would implement to enhance the project:


### Testing & Quality Assurance
- **Unit Tests**: Add unit tests using Jest and React Testing Library for critical components
- **Visual Regression**: Set up visual regression testing with tools like Chromatic or Percy
- **Test Coverage**: Aim for at least 80% code coverage on critical paths

### User Experience
- **Animations**: Add smooth page transitions and micro-interactions using Framer Motion
- **Loading States**: Add skeleton loaders and loading states for async operations
- **Fallback UI**: Create fallback components for failed image loads
- **Mobile Optimization**: Further optimize touch targets and mobile interactions

### Internationalization (i18n)
- **Multi-language Support**: Implement full i18n using next-intl or react-i18next
- **RTL Support**: Add right-to-left language support for Arabic and Hebrew
- **Locale Detection**: Implement automatic locale detection based on user's browser/region

### Developer Experience
- **Storybook**: Create Storybook documentation for all components with interactive examples
- **Component Documentation**: Add JSDoc comments to all components and functions

### Advanced Features
- **Dark Mode**: Implement dark mode toggle with system preference detection
