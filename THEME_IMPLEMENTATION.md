# Dark and Light Theme Implementation

## Overview
This document outlines the dark and light theme implementation for the Tattoo Studio website using `next-themes` for seamless theme switching.

## Features

### ✨ Key Features
- **Dual Theme Support**: Dark mode (default) and Light mode
- **System Preference Detection**: Automatically detects user's system theme preference
- **Persistent Theme**: Theme choice is saved in localStorage
- **Smooth Transitions**: Animated theme switching with no flash
- **Accessible Toggle**: Theme toggle button with proper ARIA labels
- **Mobile Responsive**: Theme toggle available on both desktop and mobile menus

## Implementation Details

### 1. **Dependencies**
- `next-themes`: Theme management library for Next.js

### 2. **Theme Colors**

#### Dark Theme (Default)
```css
--color-background: #050505
--color-foreground: #ffffff
--color-card: #0a0a0a
--color-muted: #1a1a1a
--color-accent: #ffffff
--color-border: rgba(255, 255, 255, 0.1)
```

#### Light Theme
```css
--color-background: #ffffff
--color-foreground: #0a0a0a
--color-card: #f5f5f5
--color-muted: #f5f5f5
--color-accent: #0a0a0a
--color-border: rgba(0, 0, 0, 0.1)
```

### 3. **Components**

#### ThemeProvider (`components/theme-provider.tsx`)
Wraps the application to provide theme context using `next-themes`.

**Configuration:**
- `attribute="class"`: Uses class-based theme switching
- `defaultTheme="dark"`: Sets dark as the default theme
- `enableSystem`: Respects user's system preferences
- `disableTransitionOnChange={false}`: Enables smooth transitions

#### ThemeToggle (`components/theme-toggle.tsx`)
Animated button component for switching between themes.

**Features:**
- Moon icon for dark mode
- Sun icon for light mode
- Smooth rotation animation on toggle
- Hover and tap animations
- Loading state during hydration
- Accessible with ARIA labels

### 4. **Updated Components**

All components have been updated to use theme-aware CSS variables:

- **Hero**: Background and text colors
- **Portfolio**: Card and muted backgrounds
- **Artists**: Card backgrounds
- **Styles**: Muted backgrounds
- **Booking**: Card backgrounds
- **Footer**: Card backgrounds and borders
- **Navbar**: Background, borders, and text colors

### 5. **CSS Variables Usage**

Components now use semantic color variables:
- `bg-background`: Main background color
- `bg-card`: Card/section background
- `bg-muted`: Muted/secondary background
- `text-foreground`: Main text color
- `text-accent`: Accent text color
- `border-border`: Border color

## Usage

### Accessing Theme in Components
```tsx
import { useTheme } from "next-themes";

function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle Theme
    </button>
  );
}
```

### Adding New Theme Colors
1. Add color to `app/globals.css` in `@theme` block
2. Add corresponding light theme color in `.light` class
3. Use the color in components with Tailwind classes

Example:
```css
@theme {
  --color-custom: #your-dark-color;
}

.light {
  --color-custom: #your-light-color;
}
```

## Theme Toggle Locations

### Desktop
- Located in the main navigation bar
- Positioned between navigation links and "Book Now" button
- Always visible on desktop screens

### Mobile
- Located in the mobile menu overlay
- Positioned above the "Book Appointment" button
- Accessible when mobile menu is open

## Best Practices

### 1. **Always Use Theme Variables**
❌ Don't use hardcoded colors:
```tsx
<div className="bg-black text-white">
```

✅ Use theme variables:
```tsx
<div className="bg-background text-foreground">
```

### 2. **Maintain Contrast**
Ensure sufficient contrast in both themes for accessibility:
- Dark theme: Light text on dark backgrounds
- Light theme: Dark text on light backgrounds

### 3. **Test Both Themes**
Always test new components in both dark and light modes to ensure proper visibility and aesthetics.

### 4. **Smooth Transitions**
Use `transition-colors` class for smooth color transitions:
```tsx
<div className="bg-background transition-colors duration-300">
```

## Customization

### Changing Default Theme
Update in `app/layout.tsx`:
```tsx
<ThemeProvider defaultTheme="light"> {/* Change to "light" */}
```

### Disabling System Preference
Update in `app/layout.tsx`:
```tsx
<ThemeProvider enableSystem={false}>
```

### Adding More Themes
1. Define new theme colors in `globals.css`
2. Add theme class (e.g., `.blue-theme`)
3. Update ThemeToggle to support new theme

## Accessibility

- Theme toggle has proper ARIA labels
- Keyboard accessible (Tab navigation)
- Respects `prefers-color-scheme` media query
- No flash of unstyled content (FOUC)
- Smooth transitions for reduced motion users

## Browser Support

Works in all modern browsers that support:
- CSS custom properties (CSS variables)
- localStorage API
- matchMedia API (for system preference detection)

## Performance

- Theme preference stored in localStorage (instant load)
- No layout shift during theme change
- Minimal JavaScript overhead
- CSS variables enable efficient theme switching

## Troubleshooting

### Flash of Wrong Theme
- Ensure `suppressHydrationWarning` is on `<html>` tag
- Check that ThemeProvider wraps all content

### Theme Not Persisting
- Verify localStorage is enabled in browser
- Check browser console for errors

### Colors Not Updating
- Ensure components use theme variables
- Check that CSS variables are properly defined
- Verify Tailwind config includes theme colors

## Future Enhancements

Potential improvements:
1. Add more theme options (e.g., high contrast, sepia)
2. Per-section theme customization
3. Scheduled theme switching (auto dark mode at night)
4. Theme preview before applying
5. Custom color picker for user-defined themes
