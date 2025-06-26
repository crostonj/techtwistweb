const data = require('./src/data/industryProducts.json');

console.log('Product validation report:');
console.log('=========================');

Object.keys(data).forEach(industryKey => {
  const industry = data[industryKey];
  console.log(`\n${industry.name}:`);
  
  const areas = Object.keys(industry.productAreas);
  console.log(`  Total categories: ${areas.length}`);
  
  areas.forEach(areaKey => {
    const area = industry.productAreas[areaKey];
    const productCount = area.products.length;
    const status = productCount === 5 ? '✓' : '✗';
    console.log(`  ${status} ${area.name}: ${productCount} products`);
  });
});

// Count totals
const totalIndustries = Object.keys(data).length;
const totalCategories = Object.values(data).reduce((sum, industry) => 
  sum + Object.keys(industry.productAreas).length, 0);
const totalProducts = Object.values(data).reduce((sum, industry) => 
  sum + Object.values(industry.productAreas).reduce((areaSum, area) => 
    areaSum + area.products.length, 0), 0);

console.log(`\n=========================`);
console.log(`Summary:`);
console.log(`Total industries: ${totalIndustries}`);
console.log(`Total categories: ${totalCategories}`);
console.log(`Total products: ${totalProducts}`);
console.log(`Expected products (${totalCategories} categories × 5): ${totalCategories * 5}`);
console.log(`Status: ${totalProducts === totalCategories * 5 ? 'COMPLETE ✓' : 'INCOMPLETE ✗'}`);
