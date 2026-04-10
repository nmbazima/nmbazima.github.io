# Article Management Project

This project provides a simple and scalable way to manage articles and organize them by categories. Below are the instructions on how to post articles and utilize the category management features.

## Table of Contents
- [Getting Started](#getting-started)
- [Posting an Article](#posting-an-article)
- [Organizing Articles by Category](#organizing-articles-by-category)
- [Project Structure](#project-structure)

## Getting Started

To get started with the Article Management Project, clone the repository and install the necessary dependencies.

```bash
git clone <repository-url>
cd article-management-project
npm install
```

## Posting an Article

1. Navigate to the `src/articles` directory.
2. Create a new Markdown file for your article. Use the naming convention `article-title.md` (e.g., `my-first-article.md`).
3. Structure your article using Markdown syntax. Here’s a basic template:

   ```markdown
   # Article Title

   ## Introduction
   Write an introduction here.

   ## Content
   Write the main content of your article here.

   ## Conclusion
   Write a conclusion here.
   ```

4. Save the file. Your article will now be available in the project.

## Organizing Articles by Category

1. To add a new category, open the `src/categories/index.ts` file.
2. Use the `addCategory` method of the `CategoryManager` class to create a new category.
3. Assign articles to categories using the `organizeArticlesByCategory` method.

Example usage:

```typescript
const categoryManager = new CategoryManager();
categoryManager.addCategory('Technology');
categoryManager.organizeArticlesByCategory('Technology', 'my-first-article.md');
```

## Project Structure

- `src/articles/`: Contains all article files in Markdown format.
- `src/categories/`: Contains the `CategoryManager` class for managing categories.
- `src/app.ts`: Entry point of the application.
- `src/types/`: Contains TypeScript interfaces for articles and categories.
- `package.json`: Lists dependencies and scripts for the project.
- `tsconfig.json`: TypeScript configuration file.

For further information, refer to the code comments in the respective files or consult the documentation of the libraries used.