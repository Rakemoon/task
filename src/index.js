const { readFileSync, readdirSync, statSync, writeFileSync } = require("fs");
const { join } = require("path");

const baseReadme = join(__dirname, "./README.md");
const readme = readFileSync(baseReadme, "utf8");

const ignores = ["src", ".github", ".git", "out"];

const repository = "https://github.com/Rakemoon/task/blob/master";

function getTasks(dir, indent = 0) {
	const files = readdirSync(dir);
	let result  = "";
	for (let i = 0; i < files.length; i++) {
		let file = files[i];
		const path = join(dir, file);
		if (statSync(path).isDirectory()) {
			if (ignores.includes(file)) continue;
			file = `${file}\n${getTasks(path, indent + 1)}`;
		} else file = `[${file}](${join(repository, path)})`;
		result += `${"  ".repeat(indent)}- ${file}`;
		if (i < files.length - 1) result += "\n";
	}
	return result;
}

const tasks = getTasks(join(__dirname, "../"));
const path = join(__dirname, "../README.md");
writeFileSync(path, `${readme}\n${tasks}`, { encoding: "utf8" });
process.exit();
