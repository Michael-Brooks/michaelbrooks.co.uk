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
    description: "Freelance Website Developer in Newton Abbot",
    dest: 'pages',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Blog', link: '/blog.html'},
            {text: 'My CV', link: 'https://www.visualcv.com/michael-brooks/'},
            {
                text: 'Let\'s Talk', items: [
                    {text: 'GitHub', link: 'https://github.com/michael-brooks'},
                    {text: 'Twitter', link: 'https://twitter.com/__MichaelBrooks'},
                    {text: 'Facebook', link: 'https://www.facebook.com/MBrooksDeveloper/'},
                ]
            }
        ],
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'michael-brooks/michaelbrooks.co.uk',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Contribute!',

        // Optional options for generating "Edit this page" link

        // if your docs are in a different repo from your main project:
        docsRepo: 'michael-brooks/michaelbrooks.co.uk',
        // if your docs are not at the root of the repo:
        docsDir: 'docs',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'master',
        // defaults to false, set to true to enable
        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Help us improve this page!'
    },
    plugins: {
        'vuepress-plugin-rss': {
            base_url: '/',
            site_url: 'https://michaelbrooks.co.uk',
            copyright: '2019 Michael Brooks',
            filter: (frontmatter) => {
                return [true | false]
            },
            count: 20
        },
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "New content is available.",
                buttonText: "Refresh"
            }
        },
        "vuepress-plugin-matomo": {
                'siteId': 3,
                'trackerUrl': "https://analytics.michaelbrooks.dev/"
            }
    },
};
