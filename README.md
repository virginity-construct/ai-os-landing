# AI OS Landing Page

A high-converting landing page for AI OS, a self-improving AI system that autonomously builds businesses and reduces development teams by 90%.

## Features

- Responsive design with mobile-first approach
- Interactive UI components with smooth animations
- Form functionality with Supabase backend integration
- SEO optimized with meta tags and OpenGraph support
- Analytics tracking with Vercel Analytics

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Database**: Supabase
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-os-landing.git
   cd ai-os-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Supabase Setup

1. Create a new Supabase project
2. Set up the following tables:

### Waitlist Table
```sql
CREATE TABLE waitlist (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL,
  use_case TEXT,
  profession TEXT,
  work_email TEXT,
  social_links TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Investors Table
```sql
CREATE TABLE investors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL,
  name TEXT,
  company TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. Set up Row Level Security (RLS) policies for your tables to ensure data security.

## Deployment

### Deploying to Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Set up the environment variables in the Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy the application

## Project Structure

```
ai-os-landing/
├── public/             # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── api/        # API routes
│   │   │   ├── investor/  # Investor form API
│   │   │   └── waitlist/  # Waitlist form API
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/     # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── AgentSystem.tsx
│   │   ├── Testimonials.tsx
│   │   ├── WaitlistForm.tsx
│   │   ├── InvestorSection.tsx
│   │   ├── Footer.tsx
│   │   ├── SystemDiagram.tsx
│   │   └── AnimatedSection.tsx
│   └── utils/          # Utility functions
│       └── supabase.ts # Supabase client
├── .env.local          # Environment variables (not in repo)
├── .env.example        # Example environment variables
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # TailwindCSS configuration
└── package.json        # Project dependencies
```

## Performance Optimization

- All client-side components have the "use client" directive
- Images are optimized with Next.js Image component
- Animations are triggered only when components are in view
- Code splitting with dynamic imports for larger components

## Future Enhancements

- Dark mode toggle
- More interactive animations
- A/B testing for conversion optimization
- Internationalization support
- Enhanced analytics with custom events

## License

MIT
