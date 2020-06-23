// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Michael Brooks',
  siteDescription: 'Freelance website developer in Newton Abbot, UK.',

  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      use: 'gridsome-plugin-matomo',
      options: {
        host: 'https://analytics.michaelbrooks.dev',
        siteId: 3
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Michael Brooks Blog',
          feed_url: 'https://michaelbrooks.co.uk/rss.xml',
          site_url: 'https://michaelbrooks.co.uk'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://michaelbrooks.co.uk/' + node.title,
          author: 'Michael Brooks'
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
