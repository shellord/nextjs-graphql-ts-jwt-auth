// graphql.config.js
module.exports = {
  projects: {
    app: {
      //   schema: ['src/schema.graphql', 'directives.graphql'],
      //   documents: ['**/*.{graphql,js,ts,jsx,tsx}', 'my/fragments.graphql'],
      extensions: {
        endpoints: {
          default: {
            url: 'http://localhost:3000/api/graphql',
          },
        },
      },
    },
  },
}
