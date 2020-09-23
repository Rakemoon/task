const { readFileSync, readdirSync, statSync, writeFileSync } = require("fs");
const { join } = require("path");

const baseReadme = join(__dirname, "./README.md");
const readme = readFileSync(baseReadme, "utf8");

const ignoredFolders = ["src", ".github", ".git", "out"];
const ignoredFiles = ["README.md"];

const repository = "https://github.com/Rakemoon/task/blob/master";

const cwd = process.cwd();

const getIndent = indent => "  ".repeat(indent);

function getTasks(dir, indent = 0) {
	const files = readdirSync(dir);
	const spaces = getIndent(indent);
	let result  = "";
	for (let i = 0; i < files.length; i++) {
		let file = files[i];
		const path = join(dir, file);
		if (statSync(path).isDirectory()) {
			if (ignoredFolders.includes(file)) continue;
			file = `${spaces}- <details><summary>${file}</summary>\n\n${getTasks(path, indent + 2)}\n${spaces}${getIndent(indent + 1)}</details>`
		} else {
			if (ignoredFiles.includes(file)) continue;
			const url = join(repository, file.replace(cwd, ""));
			file = `${spaces}- ${new URL(url).href}`;
		}
		result += file;
		if (i < files.length - 1) result += "\n";
	}
	return result;
}

const tasks = getTasks(join(__dirname, "../"));
const path = join(__dirname, "../README.md");
writeFileSync(path, `${readme}\n${tasks}`, { encoding: "utf8" });
process.exit();
