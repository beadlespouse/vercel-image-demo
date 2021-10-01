module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Vercel Image Demo",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `key14V9QMtguTEU7L`, // this is a demo airtable acc on the free plan - hence the API key is being shared for the sake of this demo
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `applUqC89vvyTnj30`,
            tableName: `Table 1`,
            mapping: { Image: `fileNode` }, // optional, e.g. "text/markdown", "fileNode"
            separateNodeType: false, // boolean, default is false, see the documentation on naming conflicts for more information
            separateMapType: false, // boolean, default is false, see the documentation on using markdown and attachments for more information
          }
        ]
      }
    }
  ],
};
