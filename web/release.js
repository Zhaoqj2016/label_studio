const fs = require("fs");
const path = require("path");
const toml = require("toml");

const pyproject = path.resolve(__dirname, "../", "pyproject.toml");
const packageFile = fs.readFileSync(pyproject).toString();

const parsedToml = toml.parse(packageFile);

const packageName = parsedToml.project.name;
const versionNumber = parsedToml.project.version;

module.exports.name = packageName;
module.exports.version = versionNumber;

module.exports.getReleaseName = () => {
  const version = require("./release");
  return `${version.name}@${version.version}-frontend`;
};
