const fs = require('fs');
const moment = require('moment');
const yamlFront = require('yaml-front-matter');

const sortDelimiter = ';';

/**
 * Generate sidebar array
 * @param {array} markdownPaths contains an array list of file paths
 * @param {bool} sort sort the output array by 'date' in YAML header descendantly or not
 * @param {int} limit limit the returned results, 0 will return all results
 */
function generateSidebar(markdownPaths, sort = true, limit = 0) {
    let renderedPosts = new Array();

    if (sort) {
        markdownPaths.forEach(filePath => {
            fileContents = fs.readFileSync(filePath, 'utf8').toString();
            fileMeta = yamlFront.loadFront(fileContents);
            if (fileMeta.blog_index == true) return;
            fileTimestamp = moment(fileMeta.date);
            renderedPosts.push(fileTimestamp + sortDelimiter + filePath);
        });
        renderedPosts = renderedPosts.sort().reverse();
        if (limit > 0) {
            renderedPosts = renderedPosts.slice(0, limit);
        }
        renderedPosts.forEach((sortedPath, index, array) => {
            array[index] = sortedPath.substring(sortedPath.indexOf(sortDelimiter) + sortDelimiter.length + basePath.length, sortedPath.lastIndexOf('/')) + '/';
        });
    } else {
        renderedPosts = markdownPaths.map(filePath => filePath.substring(basePath.length, filePath.lastIndexOf('/')) + '/');
    }

    return renderedPosts;
}

const glob = require('glob');
const basePath = 'docs';
let blogPaths = glob.sync(basePath + '/*/*.md');
let blogPosts = generateSidebar(blogPaths, true, 5);

module.exports = {
    title: "Michael Brooks",
    description: "Freelance Website Developer",
    dest: 'pages',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'My CV', link: 'https://www.visualcv.com/michael-brooks/'},
            { text: 'Blog', link: '/blog/' },
            { text: 'Let\'s Talk', items: [
                    { text: 'GitHub', link: 'https://github.com/michael-brooks'},
                    { text: 'Twitter', link: 'https://twtiter.com/mike_d_brooks'},
                    { text: 'Facebook', link: ''},
                    { text: 'Email', link: 'mailto:me@michaelbrooks.co.uk'}
                ] }
        ],
    },
    plugins: [
        [
            'vuepress-plugin-rss',
            {
                base_url: '/',
                site_url: 'https://michaelbrooks.co.uk',
                copyright: '2019 Michael Brooks',
                filter: (frontmatter) => { return [true|false] },
                count: 20
            },
            '@vuepress/google-analytics',
            {
                'ga': 'UA-49521345-1'
            }
        ]
    ]
};