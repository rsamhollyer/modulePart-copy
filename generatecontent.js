const makeHeading = require("./makeheading");
const makeNumber = require("./number");
const makeUUID = require("./log_uuid");
const randomColor = require("randomcolor");

const navigation = `
<nav>
	<div>
		<span><a href="?page=home"> HOME</a></span>
		<span><a href="?page=contact"> CONTACT</a></span>
		<span><a href="?page=about"> ABOUT</a></span>
	</div>

</nav>
`;

const generateContent = ({ page, additional, count, lastVisit }) => {
	return `
	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>My Selection ${page}</title>
			<link rel="icon" type="image/ico" sizes="32x32" href="favicon.ico" />
			<link rel="stylesheet" href="../styles.css" />
		</head>
		<body>
			${navigation}
            ${makeHeading(page)}
			<h2>${makeNumber()}</h2?
			
			

			The count is ${count || 0}. I hope you are happy

			<ul>
				${additional.join("")}
			</ul>

			<footer>
				copyright2020
				${new Date().toLocaleTimeString(lastVisit)}

				<h1 style=background-color:${randomColor()}> Your UUID is ${makeUUID()}</h1>
				</footer>
		</body>
	</html>
	`;
};

module.exports = generateContent;
