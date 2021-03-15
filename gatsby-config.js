require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "JamCommerce",
  },
  plugins: [{
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "JAMcommerce",
      fieldName: "jamcommerce",
      url: process.env.GRAPHQL_URL,
      headers: {
        Authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
      },
      fetchOptions: {},
    },
  },],
};
