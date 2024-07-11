const path = require('path');

exports.onCreatePage = ({ page, actions }) => {
    const { createPage } = actions;

    if (page.path.match(/^\/vehicles\//)) {
        page.matchPath = "/vehicles/*";
        createPage(page);
    }
};