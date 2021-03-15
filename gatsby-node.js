exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const productListQuery = await graphql(
      `
        query ProductList {
        jamcommerce {
          items {
            products(filter: {status: {_eq: "published"}}) {
              id
            }
          }
        }
      }
      
      `
    )
  

    productListQuery.data.jamcommerce.items.products.forEach(({ id }) =>
    createPage({
      path: `/product/${id}`,
      component: require.resolve(`./src/templates/ProductTemplate.js`),
      context: {
        id
      },
    })
  );

    
  
  }