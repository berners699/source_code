# YOUWARE Template - React Modern Development Guide

This is a modern React application template built with React 18, TypeScript, Vite, and Tailwind CSS.

## Project Status

- **Project Type**: React + TypeScript Modern Web Application
- **Entry Point**: `src/main.tsx` (React application entry)
- **Build System**: Vite 7.0.0 (Fast development and build)
- **Styling System**: Tailwind CSS 3.4.17 (Atomic CSS framework)

## Implemented Features

### Pages

- **Home**: Landing page with hero section and game preview.
- **Games**: Entertainment Game Center with 5 distinct game modes:
  - **Rapid 30s** (Red Theme, 30s draw)
  - **Bit 60s** (Blue Theme, 60s draw)
  - **Korea 90s** (Purple Theme, 90s draw)
  - **Slovakia 120s** (Green Theme, 120s draw)
  - **Canada 210s** (Orange Theme, 210s draw)
  - **Features**:
    - Dynamic color themes per game.
    - Tabbed interface: Betting Mode, Past Results, Betting Records, Game Trend, Auto Bet, Rules.
    - **Betting Records**: Implemented a detailed table for tracking game history, including issue numbers, decryption times, results, and profit/loss.
    - **Detailed View Modal**: A sophisticated modal for viewing specific betting details, featuring a grid of numbers with highlighted results and comprehensive summaries. Now updated with a dark theme, blue accents, and a consistent 15px font size for all content within the main area. The winning number display has been refined to only show the earned gold beans for clarity.
    - **Betting Mode Refactoring**: The Betting Mode tab now features a two-tier interface. A list view displays saved modes with accurate details like betting quantity and total gold beans. The full betting editor (with quick select and number grid) is accessible only when adding a new mode or editing an existing one. The "Edit" functionality allows users to load previously saved configurations, and the "Delete" functionality enables removing unwanted modes from the list without a confirmation dialog for a faster workflow.
    - **Mode Saving Logic**: When adding a mode, the system validates the total amount (minimum 500 gold beans). Upon successful validation, a modal appears to enter the mode name, allowing users to save their custom betting configurations with actual count and total values displayed in the list.
    - **Betting Validation**: Added validation to the "Add Mode" and "Confirm Participation" buttons. If no amount is entered, a "Please fill in amount" (请填写金额) toast appears. If the total amount is less than 500, a "Minimum 500 Gold Beans" (最低500金豆) toast is shown.
    - **Notice Board**: A modal-based system for viewing platform announcements, now updated with a dark theme and blue accents to match the site's overall aesthetic.
    - **Past Results Pagination**: The Past Results table now displays 20 items per page and supports up to 5 pages of historical data, allowing users to browse through 100 recent game issues.
    - **Interactive Navigation**: The "Join Now" (立即参与) button in the Past Results tab opens an in-place participation page with a centered header. The "Confirm Participation" (确定参与) button is prominently displayed in the action bar. A single "Back to List" (返回列表) button is integrated into the header of the editor and participation views. Switching between tabs or changing the active game now automatically resets the betting state and returns the view to the default "Past Results" tab for a consistent starting point.
    - **Exclusive Selection Logic**: In Betting Mode, quick selection categories are mutually exclusive (only one can be active). Manually selecting a number clears the quick selection, and vice versa, ensuring a clean and predictable betting state.
    - **Dynamic Betting Logic**: When a quick selection is active, the system automatically calculates default betting amounts for each number using the formula `Amount = (BaseAmount / Odds) * Multiplier` (rounded). The total sum of these bets is dynamically displayed in the "Custom Amount" box.
    - **Fixed Amount Presets**: A row of "Fixed Amount" (定额) buttons (5万, 50万, etc.) allows users to quickly set the total betting amount. The system distributes this total among selected numbers such that each number has the same potential winning amount (`Odds * BetAmount = Constant`). A custom input box and "Fixed All-in" (定额梭哈) button are positioned after the "2亿" button for flexible amount entry.
    - **Cumulative Multipliers**: Multiplier buttons (0.5x, 1.5x, etc.) now apply cumulatively to the _current_ betting amount instead of the initial value. The highlight effect has been removed from these buttons to reflect their action-based nature.
    - **Betting Controls**: Removed the general "All-in" (梭哈), "Mode Betting" (模式投注), and redundant list sections while retaining the "Fixed All-in" (定额梭哈) functionality for better risk management. Redundant buttons have been removed from the action bar for a cleaner UI. The "Clear" (清空) button resets all selections and amounts, while the "Invert Selection" (反选) button toggles the selection state of all numbers based on the current highlighted state, initializing amounts for newly selected ones.
    - Real-time countdown and issue tracking.
    - Mock data generation for history and trends.
- **Mall**: Exchange center with product grid.
- **Leaderboard**: Ranking list.
- **Invite**: Referral system with subordinates list.
- **Profile**: User dashboard with balance and settings.
- **VIP**: VIP level system with interactive selection highlighting and a contact modal for membership activation (QQ: 88888888).

### Components

- **Navbar**: Responsive navigation with dynamic active state highlighting.
  - **Active State**: Selected section lights up with a specific theme color (Blue, Orange, Purple, Yellow, Amber, Green, Indigo).
  - **Icons**: Added icons for all navigation items.
- **Footer**: Site footer.
- **GameGrid**: Grid display of available games.

## Core Design Principles

### Context-Driven Design Strategy

- Scenario Analysis First: Analyze the user's specific use case, target audience, and functional requirements before making design decisions
- Contextual Appropriateness: Choose design styles that align with the content purpose
- User Journey Consideration: Design interactions and visual flow based on how users will actually engage with the content
  IMPORTANT: When users don't specify UI style preferences, always default to modern and responsive UI design with minimalist aesthetic

### Modern Visual Sophistication

- Contemporary Aesthetics: Embrace contemporary design trends for modern aesthetics
- Typography Excellence: Master type scale relationships and strategic white space for premium hierarchy
- Advanced Layouts: Use CSS Grid, asymmetrical compositions, and purposeful negative space
- Strategic Color Systems: Choose palettes based on use cases and psychological impact

### Delightful Interactions

- Dynamic Over Static: Prioritize interactive experiences over passive presentations
- Micro-Interactions: Subtle hover effects, smooth transitions, and responsive feedback animations
- Animation Sophistication: Layer motion design that enhances usability without overwhelming
- Surprise Elements: Custom cursors, hidden Easter eggs, playful loading states, and unexpected interactive details (if applicable)

### Technical Excellence

- Reusable, typed React components with clear interfaces
- Leverage React 18's concurrent features to enhance user experience
- Adopt TypeScript for type-safe development experience
- Use Zustand for lightweight state management
- Implement smooth single-page application routing through React Router DOM

## Project Architecture

### Directory Structure

```
project-root/
├── index.html              # Main HTML template
├── package.json            # Node.js dependencies and scripts
├── package-lock.json       # Lock file for npm dependencies
├── README.md              # Project documentation
├── YOUWARE.md             # Development guide and template documentation
├── yw_manifest.json       # Project manifest file
├── vite.config.ts         # Vite build tool configuration
├── tsconfig.json          # TypeScript configuration (main)
├── tsconfig.app.json      # TypeScript configuration for app
├── tsconfig.node.json     # TypeScript configuration for Node.js
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── dist/                  # Build output directory (generated)
└── src/                   # Source code directory
    ├── App.tsx            # Main application component
    ├── main.tsx           # Application entry point
    ├── index.css          # Global styles and Tailwind CSS imports
    ├── vite-env.d.ts      # Vite type definitions
    ├── api/               # API related code
    ├── assets/            # Static assets
    │   ├── avatars/       # User avatar assets (16 unique Wuxia/Chinese Fantasy style icons)
    │   ├── games/         # Game cover assets
    │   └── ...
    ├── components/        # Reusable components
    ├── layouts/           # Layout components
    ├── pages/             # Page components
    │   ├── GamesPage.tsx     # Entertainment Game Center (5 Games)
    │   ├── InvitePage.tsx    # Invite Rebate page
    │   ├── MallPage.tsx      # Mall page
    │   ├── ProfilePage.tsx   # User profile
    │   ├── RankPage.tsx      # Leaderboard
    │   ├── VIPPage.tsx       # VIP system
    │   └── ...
    ├── store/             # State management
    ├── styles/            # Global styles
    └── types/             # TypeScript types
```
