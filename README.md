# Hexagonal Architecture in Next.js with TypeScript

This project demonstrates the implementation of a countdown timer using Hexagonal Architecture principles in a Next.js application with TypeScript. The architecture separates the domain logic, application logic, and presentation logic, making the codebase more modular, maintainable, and scalable.

## Table of Contents

- [Project Structure](#project-structure)
- [Domain Layer](#domain-layer)
- [Application Layer](#application-layer)
- [Presentation Layer](#presentation-layer)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Contributing](#contributing)

## Project Structure 📂

The project is structured as follows:

```
/src 📁
  ├── /domain 📁
  │   ├── /entities 📁
  │   │   └── TimeLeft.ts 📄
  │   └── /services 📁
  │       └── countdownService.ts 📄
  ├── /application 📁
  │   └── /useCases 📁
  │       └── useCountdown.tsx 📄
  └── /presentation 📁
      ├── /components 📁
      │   └── CountdownComponent.tsx 📄
      └── /pages 📁
          └── index.tsx 📄
```

### Domain Layer 🎯

The domain layer contains the core business logic and entities. It is independent of any framework or UI.

- `/domain/entities/TimeLeft.ts` 📄
- `/domain/services/countdownService.ts` 📄

### Application Layer 🚀

The application layer contains the use cases that orchestrate the business logic.

- `/application/useCases/useCountdown.tsx` 📄

### Presentation Layer 🖼️

The presentation layer contains the React components and pages that interact with the user.

- `/presentation/components/CountdownComponent.tsx` 📄
- `/presentation/pages/index.tsx` 📄

## How It Works 🛠️

1. **Domain Layer**: Defines the core business logic and entities.
2. **Application Layer**: Orchestrates the business logic using custom hooks.
3. **Presentation Layer**: Renders the UI components and pages.

## Getting Started 🚀

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Run the development server using `npm run dev` or `yarn dev`.

## Contributing 🤝

Contributions are welcome! Please follow the standard GitHub flow:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---
