import express from 'express';
import bodyParser from 'body-parser';
import { CategoryManager } from './categories/index';
import { Article } from './types/index';

const app = express();
const port = process.env.PORT || 3000;
const categoryManager = new CategoryManager();

app.use(bodyParser.json());

// Endpoint to post a new article
app.post('/articles', (req, res) => {
    const article: Article = req.body;
    // Logic to save the article
    res.status(201).send('Article posted successfully');
});

// Endpoint to get articles by category
app.get('/articles/:category', (req, res) => {
    const category = req.params.category;
    const articles = categoryManager.organizeArticlesByCategory(category);
    res.status(200).json(articles);
});

// Endpoint to add a new category
app.post('/categories', (req, res) => {
    const categoryName = req.body.name;
    categoryManager.addCategory(categoryName);
    res.status(201).send('Category added successfully');
});

// Endpoint to get all categories
app.get('/categories', (req, res) => {
    const categories = categoryManager.getCategories();
    res.status(200).json(categories);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});