<h1 align="center">
    <img alt="Face with hat, glasses and tie. And litle icon of the align text in botton." src="./public/github/logo.svg?raw=true" />
    <br>
    Align Text Line
</h1>
<h3 align="center">
Typescript library for aligning texts on one line. Very useful for menus in bots and small fiscal printers.
</h3>
<h4 align="center">
<br>
<img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
<img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/mckatoo/whatsapp-bot">
<img alt="GitHub All Releases" src="https://img.shields.io/github/downloads/mckatoo/whatsapp-bot/total">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/mckatoo/whatsapp-bot">
<img alt="GitHub" src="https://img.shields.io/github/license/mckatoo/whatsapp-bot">
<img alt="GitHub followers" src="https://img.shields.io/github/followers/mckatoo">
<img alt="GitHub forks" src="https://img.shields.io/github/forks/mckatoo/whatsapp-bot">
<img alt="GitHub stars" src="https://img.shields.io/github/stars/mckatoo/whatsapp-bot">
<img alt="GitHub watchers" src="https://img.shields.io/github/watchers/mckatoo/whatsapp-bot">
<img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/mckatoo/whatsapp-bot">
<img alt="GitHub contributors" src="https://img.shields.io/github/contributors/mckatoo/whatsapp-bot">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/mckatoo/whatsapp-bot">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/mckatoo/whatsapp-bot">
<img alt="GitHub release (latest by date)" src="https://img.shields.io/github/v/release/mckatoo/whatsapp-bot">
<br>
<a href="http://standardjs.com" target="blank"><img alt="JavaScript Style Guide" src="https://cdn.rawgit.com/standard/standard/master/badge.svg"></a>
</h4>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#warning-prerequisites">Prerequisites</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-contribute">How To Contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

<h2 align="center"> 🚧 Under construction.</h2>

## :warning: Atention

For a beautiful alignment use monospace fonts.

## :rocket: Technologies

- [TypeScript](https://www.typescriptlang.org/)
- [Commitizen](https://github.com/commitizen/cz-cli)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [JS Standard Style](http://standardjs.com)
- [Tests with Jest](https://jestjs.io/)

## :warning: Prerequisites

To use and test the application, you must have already set up the development environment for NodeJS applications. You can install and configure NodeJS:

<a href="https://nodejs.org/"><img height=60 src="./public/github/nodejs.svg"></a>
<a href="http://jestjs.io/"><img height=60 src="./public/github/jestjs.svg"></a>

## :information_source: How To Use

```bash
# Start the app
$ yarn add align-text-line
# or
$ npm install align-text-line
```

### Sample

```typescriptlang
import align from 'align-text-line'

const textAlignedLeft = align.leftAligned('text', '-', 30)
const textAlignedRight = align.rightAligned('text', '-', 30)
const textAlignedCentralized = align.centralized('text', '-', 30)
const textAlignedWithSpaceCentralized = align.leftRightAligned(
  'bola',
  'carro',
  '-',
  30
)
console.log(textAlignedLeft)
console.log(textAlignedRight)
console.log(textAlignedCentralized)
console.log(textAlignedWithSpaceCentralized)
```

## :information_source: How To Contribute

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v12.18][nodejs] or higher + [Yarn v1.22][yarn] or higher installed on your computer. From your command line:

### Fork the repository

<img alt="Forking Repository clicking in the fork button on top right button on screen" src="./public/github/fork.png">

```bash
# Clone this forked repository
$ git clone https://github.com/your_repository/align-text-line.git

# Go into the repository
$ cd align-text-line

# Add this remote repository
$ git remote add mckatoo https://github.com/mckatoo/align-text-line.git

# Update your local repository if necessary
$ git fetch mckatoo

# Merge your local repository with recentily pushed
$ git merge mckatoo/master

# Push local repository updated for your remote repository
$ git push

# Never work on the main branch
$ git checkout -b your-branch

# There, you can start the job.

# Install dependencies
$ yarn
# or
$ npm install

# Run the app
$ yarn develop
# or
$ npm run develop

# After the modifications are finished, do it.
$ git add .
$ git commit

# This project uses commitizen and commitlint to standardize and organize commits.
# Follow the steps indicated by commitizen.

# After committing, it's time to send your branch
$ git push origin your-branch

# To open a pull request go to your github repository and click on the green button labeled 'Compare & pull request'
# Check all the data and describe the pull request with clear and direct information.
# Click on the green button labeled 'Create pull request'.
# Okay, now just wait for approval or not.
```

For a better illustration of the process, follow a video by [Diego Fernandes of RocketSeat](https://youtu.be/mcd7lqpUzIA)

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/mckatoo/align-text-line/blob/master/LICENSE) for more information.

---

Made with ♥ by Milton Carlos Katoo :wave: <a href="https://www.linkedin.com/in/mckatoo/" target="blank">Get in touch!</a>

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
