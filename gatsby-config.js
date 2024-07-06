module.exports = {
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `montserrat\:400,700`,
                ],
                display: 'swap'
            },
        },
        `gatsby-transformer-json`,
    ],
}
