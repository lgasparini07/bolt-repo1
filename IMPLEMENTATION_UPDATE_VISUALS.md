# Landing Page Visual Update & Database Integration

The goal is to transform the current landing page into a high-converting, visually stunning experience with a dark aesthetic, dynamic animations, and robust lead capture via Supabase.

## User Review Required

> [!IMPORTANT]
> **Supabase Configuration**: The plan assumes access to a Supabase project. You will need to provide the `SUPABASE_URL` and `SUPABASE_ANON_KEY` if they are not already set up in a `.env` file. You will also need to run the SQL definitions provided to set up the `leads` table.

## Proposed Changes

### Design System
- **Colors**:
    - Backgrounds: Charcoal/Black (#0a0a0a, #1a1a1a)
    - Accents: Electric Blue (#3b82f6), Cyan (#06b6d4)
    - Text: White/Off-white for contrast
- **Typography**: Large, bold headings with generous whitespace.
- **Effects**: Glassmorphism, backdrop blur, animated gradients.

### Components Structure
We will refactor `App.tsx` into smaller, focused components in `src/components`.
Existing components to reuse/enhance:
- `AnimatedSection.tsx`: Already handles intersection observer animations.
- `BackgroundEffects.tsx`: Already handles the dark animated background.

New components to create:
- `Hero.tsx`: Main entry point with "manual work" hook and CTA.
- `Qualification.tsx`: "Who It's For / Not For" grid.
- `HowItWorks.tsx`: 4-step process visualization.
- `SocialProof.tsx`: Stats and logos.
- `LeadMagnet.tsx`: Free audit details.
- `ProcessTimeline.tsx`: Post-submission steps.
- `LeadForm.tsx`: The actual capture form (reused in Hero/Footer).
- `Footer.tsx`: Final CTA and links.

### Database (Supabase)
- **Table**: `leads`
    - Columns: `id, name, email, company_url, challenge, created_at`
- **Security**: Row Level Security (RLS) to allow public inserts but restrict reads.

## Verification Plan

### Automated Tests
- We will rely on manual verification for the visual aspects due to the heavy emphasis on animations and design.
- Form submission can be tested by submitting a lead and checking console logs/Supabase dashboard.

### Manual Verification
- **Visual Check**:
    - Verify dark mode aesthetic and gradients.
    - Check scroll animations (fade-in, slide-up).
    - Mobile responsiveness check (resize window).
- **Functional Check**:
    - Submit the form -> Verify "Success" state appears.
    - Submit invalid data -> Verify error messages.
