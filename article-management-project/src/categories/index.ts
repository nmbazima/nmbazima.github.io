class CategoryManager {
    private categories: string[] = [];
    private articlesByCategory: { [key: string]: string[] } = {};

    addCategory(category: string): void {
        if (!this.categories.includes(category)) {
            this.categories.push(category);
            this.articlesByCategory[category] = [];
        }
    }

    getCategories(): string[] {
        return this.categories;
    }

    organizeArticlesByCategory(article: string, category: string): void {
        if (this.categories.includes(category)) {
            this.articlesByCategory[category].push(article);
        } else {
            throw new Error(`Category "${category}" does not exist.`);
        }
    }

    getArticlesByCategory(category: string): string[] {
        return this.articlesByCategory[category] || [];
    }
}