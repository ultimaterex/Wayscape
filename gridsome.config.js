// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Wayscape',
  titleTemplate: 'Wayscape - %s',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projects/**/**/*.md',
        typeName: 'Post',
        remark: {
          plugins: [
			'remark-collapse',
			'remark-docx',
			'remark-img-links'
		  ]
        }
      }
    },
	{
		use: 'gridsome-plugin-typescript'
	},
	{
      use: 'gridsome-plugin-tailwindcss2',
      options: {
        tailwindConfigFile: './tailwind.config.js',
        mainCssFile: './src/assets/css/main.css',
      }
    },
	{
		use: 'gridsome-plugin-svg',
		options:
		{
			// default options below
			goesBothWays: false,
			svgo: [
			  {
				removeTitle: false
			  },
			  {
				prefixIds: {
				  prefix: (_, {path}) => basename(path, '.svg'),
				  delim: '-',
				},
			  },
			  {
				removeDesc: false
			  },
			  {
				removeViewBox: false,
			  },
				  {
					sortAttrs: true,
				  }
			],
		}
	},
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}