const { MongoClient } = require('mongodb');
const fs = require('fs').promises;
const path = require('path');

// Build MongoDB URI from environment variables
const buildMongoURI = () => {
  // If MONGODB_URI is provided, use it directly
  if (process.env.MONGODB_URI) {
    return process.env.MONGODB_URI;
  }
  
  // Otherwise, build URI from individual components
  const host = process.env.MONGO_HOST || process.env.MONGODB_HOST || 'localhost';
  const port = process.env.MONGO_PORT || process.env.MONGODB_PORT || '27017';
  const username = process.env.MONGO_USERNAME || process.env.MONGODB_USERNAME;
  const password = process.env.MONGO_PASSWORD || process.env.MONGODB_PASSWORD;
  const database = process.env.MONGODB_DATABASE || 'techtwistweb';
  
  let uri = 'mongodb://';
  
  if (username && password) {
    uri += `${encodeURIComponent(username)}:${encodeURIComponent(password)}@`;
  }
  
  uri += `${host}:${port}`;
  
  return uri;
};

const MONGODB_URI = buildMongoURI();
const DB_NAME = process.env.MONGODB_DATABASE || 'techtwistweb';

const industryProductsPath = path.join(__dirname, '..', 'data', 'industryProducts.json');
const productReviewsPath = path.join(__dirname, '..', 'data', 'productReviews.json');

async function seedDatabase() {
  const client = new MongoClient(MONGODB_URI);

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    console.log('Connection URI:', MONGODB_URI.replace(/\/\/[^:]+:[^@]+@/, '//***:***@')); // Log URI with masked credentials

    const db = client.db(DB_NAME);

    // Seed products
    console.log('Reading products data...');
    const productsData = JSON.parse(await fs.readFile(industryProductsPath, 'utf-8'));
    console.log('Products data structure:', Object.keys(productsData));
    
    const productsCollection = db.collection('products'); // <-- Specifies the 'products' collection
    await productsCollection.deleteMany({}); // Clears any existing data in the collection

    const productsToInsert = [];
    for (const category in productsData) {
        const categoryData = productsData[category];
        console.log(`Processing category: ${category}`);
        
        if (categoryData.productAreas) {
            for (const areaKey in categoryData.productAreas) {
                const area = categoryData.productAreas[areaKey];
                console.log(`  Processing area: ${areaKey} (${area.name})`);
                
                if (Array.isArray(area.products)) {
                    area.products.forEach(product => {
                        productsToInsert.push({ 
                            ...product, 
                            category: category,
                            categoryName: categoryData.name,
                            productArea: areaKey,
                            productAreaName: area.name
                        });
                    });
                    console.log(`    Added ${area.products.length} products from ${area.name}`);
                } else {
                    console.warn(`    Products in area ${areaKey} is not an array:`, typeof area.products);
                }
            }
        } else {
            console.warn(`Category ${category} does not have productAreas:`, Object.keys(categoryData));
        }
    }
    
    if (productsToInsert.length > 0) {
        await productsCollection.insertMany(productsToInsert); // Inserts the products
        console.log(`${productsToInsert.length} products inserted into the 'products' collection.`);
    } else {
        console.log('No products to insert.');
    }

    // Seed reviews
    console.log('Reading reviews data...');
    const reviewsData = JSON.parse(await fs.readFile(productReviewsPath, 'utf-8'));
    console.log('Reviews data structure:', Object.keys(reviewsData));
    
    const reviewsCollection = db.collection('reviews');
    await reviewsCollection.deleteMany({}); // Clear existing data

    const reviewsToInsert = [];
    for (const productId in reviewsData) {
        if (Array.isArray(reviewsData[productId])) {
            reviewsData[productId].forEach(review => {
                reviewsToInsert.push({ ...review, productId });
            });
        } else {
            console.warn(`Reviews for product ${productId} is not an array:`, typeof reviewsData[productId]);
        }
    }
    
    if (reviewsToInsert.length > 0) {
        await reviewsCollection.insertMany(reviewsToInsert);
        console.log(`${reviewsToInsert.length} reviews inserted into the 'reviews' collection.`);
    } else {
        console.log('No reviews to insert.');
    }


    console.log('Database seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
    console.log('MongoDB connection closed.');
  }
}

seedDatabase();
