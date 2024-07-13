const path = require('path');

exports.createPages = async ({ actions }) => {
    const { createPage } = actions;

    createPage({
        path: `/vehicles/__model__`,
        matchPath: `/vehicles/*`,
        component: path.resolve(`./src/templates/vehicles-template.js`),
    });
};
