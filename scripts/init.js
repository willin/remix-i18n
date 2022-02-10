/* eslint-disable */
const { execSync } = require('child_process');
const fs = require('fs');

const package = fs.readFileSync('package.json', { encoding: 'utf-8' });

const { dependencies = {}, devDependencies = {} } = JSON.parse(package);

Object.keys(dependencies).forEach((key) => {
  console.log(
    execSync(`yarn add ${key}`, {
      encoding: 'utf-8'
    })
  );
});

Object.keys(devDependencies).forEach((key) => {
  if (key === 'wrangler') {
    console.log(
      execSync(`yarn add --dev wrangler@alpha`, {
        encoding: 'utf-8'
      })
    );
  } else {
    console.log(
      execSync(`yarn add --dev ${key}`, {
        encoding: 'utf-8'
      })
    );
  }
});
