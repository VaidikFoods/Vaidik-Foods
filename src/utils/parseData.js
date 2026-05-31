export const parseData = async () => {
  try {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const response = await fetch(`${baseUrl}data.txt`);
    const text = await response.text();

    const sections = text.split('#').filter(s => s.trim());
    const data = {
      company: {},
      products: []
    };

    sections.forEach(section => {
      const lines = section.split('\n');
      const sectionName = lines[0].trim().toUpperCase();
      const content = lines.slice(1).join('\n').trim();

      if (sectionName === 'COMPANY') {
        const matches = content.match(/\[(.*?)\]\s*(.*)/g);
        if (matches) {
          matches.forEach(match => {
            const [, key, value] = match.match(/\[(.*?)\]\s*(.*)/);
            data.company[key.toLowerCase()] = value.trim();
          });
        }
      } else if (sectionName === 'PRODUCTS' || sectionName === 'SELECTION') {
        const productBlocks = content.split('---');
        productBlocks.forEach(block => {
          const product = {};
          const lines = block.split('\n');
          lines.forEach(line => {
            const match = line.match(/\[(.*?)\]\s*(.*)/);
            if (match) {
              const [, key, value] = match;
              product[key.toLowerCase().trim()] = value.trim();
            }
          });
          if (Object.keys(product).length > 0) {
            // Default subcategory if missing
            if (!product.subcategory) {
              product.subcategory = '';
            }
            // Default image fallback
            if (!product.image) {
              product.image = 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000';
            }
            data.products.push(product);
          }
        });
      }
    });

    return data;
  } catch (error) {
    console.error('Error parsing data.txt:', error);
    return null;
  }
};
