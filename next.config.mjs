/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	webpack: config => {
		config.resolve.alias.canvas = false
		return config
	},
}

export default nextConfig
