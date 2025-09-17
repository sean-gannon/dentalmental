# AI Coding Agent Instructions for Knocknacarra Dental Project

## Project Overview
This project is a React-based web application for Knocknacarra Dental. It uses TypeScript and Vite for development and build processes. The application structure is modular, with components organized under the `src/components` directory. Tailwind CSS is used for styling.

### Key Directories and Files
- **`src/`**: Contains the main application code.
  - **`components/`**: Houses React components like `Home.tsx` and `About.tsx`.
  - **`assets/`**: Stores static assets such as images.
  - **`App.tsx`**: The root component of the application.
  - **`vite.config.ts`**: Configuration file for Vite.
  - **`tailwind.config.js`**: Configuration file for Tailwind CSS.
- **`public/`**: Contains static files served directly, such as `vite.svg`.

## Development Workflow
### Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

### Build
To create a production build, run:
```bash
npm run build
```

### Preview
To preview the production build locally:
```bash
npm run preview
```

### Linting
To run ESLint:
```bash
npm run lint
```

## Project-Specific Conventions
1. **Component Structure**:
   - Each component is defined in its own file under `src/components/`.
   - Components are functional and use TypeScript for type safety.
2. **Styling**:
   - Use Tailwind CSS classes for styling. Avoid inline styles unless necessary.
   - Global styles are defined in `src/index.css`.
   - Component-specific styles are defined in `src/App.css`.
3. **Routing**:
   - React Router is used for navigation between pages.
   - Example: `Home.tsx` and `About.tsx` represent different routes.

## External Dependencies
- **React**: For building UI components.
- **Vite**: For fast development and build tooling.
- **TypeScript**: For static typing.
- **Tailwind CSS**: For utility-first styling.

## Example Patterns
### Functional Component
```tsx
function Home() {
  return (
    <div>
      <h1>Welcome to Knocknacarra Dental</h1>
      <p>Your trusted dental care provider.</p>
    </div>
  );
}

export default Home;
```

### Adding a New Component
1. Create a new file under `src/components/`, e.g., `Contact.tsx`.
2. Define the component:
   ```tsx
   function Contact() {
     return (
       <div>
         <h1>Contact Us</h1>
         <p>Reach out to us at contact@knocknacarradental.com.</p>
       </div>
     );
   }

   export default Contact;
   ```
3. Import and use the component in `App.tsx` or another parent component.

## Notes for AI Agents
- Follow the existing component structure and naming conventions.
- Ensure TypeScript types are used consistently.
- When adding new dependencies, update `package.json` and run `npm install`.
- Test new components by integrating them into the application and verifying their behavior in the browser.
- When modifying Tailwind CSS configuration, update `tailwind.config.js` and restart the development server.

---

Feel free to iterate on these instructions based on project evolution.