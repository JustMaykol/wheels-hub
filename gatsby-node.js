exports.onCreatePage = async ({ page, actions }) => {
    const { createPage, deletePage } = actions;

    const subdomain = "honda";

    deletePage(page);

    createPage({
        ...page,
        context: {
            ...page.context,
            subdomain: subdomain,
        },
    });
};
