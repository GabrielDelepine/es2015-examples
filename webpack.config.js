'use strict';

const colors = {
	"reset" : "\u{1b}[0m",
	"hicolor" : "\u{1b}[1m",
	"underline" : "\u{1b}[4m",
	"inverse" : "\u{1b}[7m",
	// foreground colors
	"black" : "\u{1b}[30m",
	"red" : "\u{1b}[31m",
	"green" : "\u{1b}[32m",
	"yellow" : "\u{1b}[33m",
	"blue" : "\u{1b}[34m",
	"magenta" : "\u{1b}[35m",
	"cyan" : "\u{1b}[36m",
	"white" : "\u{1b}[37m",
	// background colors
	"bg_black" : "\u{1b}[40m",
	"bg_red" : "\u{1b}[41m",
	"bg_green" : "\u{1b}[42m",
	"bg_yellow" : "\u{1b}[43m",
	"bg_blue" : "\u{1b}[44m",
	"bg_magenta" : "\u{1b}[45m",
	"bg_cyan" : "\u{1b}[46m",
	"bg_white" : "\u{1b}[47m"
};
let examples_directory = `${__dirname}/examples`;
let fs = require('fs');

function getEntries() {

	let entries = {};

	console.log("\n");

	try {

		fs.readdirSync(examples_directory)
            .sort((a,b) => a.localeCompare(b, { sensitivity: 'base' }))
            .forEach(file => {

			let pathDirectory = `${examples_directory}/${file}`;

			try {

				if (fs.statSync(pathDirectory).isDirectory()) {

					let pathFile = `${examples_directory}/${file}/main.js`;

					try {

						if (fs.statSync(pathFile).isFile()) {

							entries[file] = pathFile;
							console.info(`${colors.green}${file}${colors.reset}`);
						} else {

							throw(`${pathFile} is not a file.`);
						}
					} catch (err) {

						console.info(`${colors.yellow}${file}${colors.reset}`);
					}
				}
			} catch (err) {

				console.error(`${colors.red}Error access directory ${pathDirectory} (${err})${colors.reset}`);
			}
		});
	} catch (err) {

		console.error(`${colors.red}Error access directory ${examples_directory} (${err})${colors.reset}`);
	}

	console.log("\n\n");

	return entries;
}

module.exports = {
	devtool: 'source-map',
	entry: getEntries(),
	output: {
		path: __dirname,
		filename: '[name]/bundle.js',
		publicPath: 'examples/',
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/,
			}
		]
	},
	devServer: {
		historyApiFallback: './index.html',
		host: 'localhost',
		port: 8712,
	},
};