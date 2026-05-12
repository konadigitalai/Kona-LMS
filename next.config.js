const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
      {
        hostname: 'digitallyncai.blob.core.windows.net',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
      {
        hostname: 'blobstoragedl.blob.core.windows.net',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
      {
        hostname: 's.gravatar.com',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
      {
        hostname: 'digitallync.blob.core.windows.net',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
      {
        hostname: 'dllmsstorageacc.blob.core.windows.net',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
      {
        hostname: 'digitallynclms.blob.core.windows.net',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
      {
        hostname: 'digitaledifylms.blob.core.windows.net',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
      {
        hostname: 'digitaledifylmssa.blob.core.windows.net',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
      {
        hostname: 'digitaledifysa.blob.core.windows.net',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
      {
        hostname: 'digitaledifystorage.blob.core.windows.net',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
      {
        hostname: 'edifylms.blob.core.windows.net',
        protocol: 'https',
        port: '',
        pathname: '/**',
      },
    ],
    domains: [
      'picsum.photos',
      'digitallyncai.blob.core.windows.net',
      'blobstoragedl.blob.core.windows.net',
      's.gravatar.com',
      'digitallync.blob.core.windows.net',
    ],
  },
});
