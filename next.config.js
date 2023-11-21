// https://www.npmjs.com/package/@next/bundle-analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.BUNDLE_ANALYZER_ENABLED === 'true',
    openAnalyzer: true
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        // https://nextjs.org/docs/messages/webpack-build-worker-opt-out
        webpackBuildWorker: true
    },
    // https://stackoverflow.com/questions/70608086/i-am-getting-error-while-converting-my-next-js-project-to-docker
    // https://nextjs.org/docs/pages/api-reference/next-config-js/output#automatically-copying-traced-files-experimental
    output: 'standalone'
};

module.exports = withBundleAnalyzer(nextConfig);
