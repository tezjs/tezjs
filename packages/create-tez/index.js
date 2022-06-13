#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import minimist from 'minimist'
const argv = minimist(process.argv.slice(2), { string: ['_'] });
import prompts from 'prompts'
import {execa} from 'execa'
import {fileURLToPath} from 'url';

import {
    yellow,
    green,
    blue,
    red,
    reset
  } from 'kolorist';
  import { bold } from 'kleur/colors';

import chalk from 'chalk';
import ora from 'ora';

const gradients = [
	`#00FF97`,
	`#29FF8F`,
	`#58FF38`,
	`#3BFF24`,
	`#93FF05`,
	`#4EFF00`,
	`#6FF500`,
	`#14E684`,
	`#36D629`,
	`#38C266`,
];

export const arrow = '■■▶';

const gradientRefrences = [
	...gradients,
	...[...gradients].reverse(),
	...gradients,
];


const sleepProcess = (time) =>
	new Promise((resolve) => {
		setTimeout(resolve, time);
	});

function getInstallAnimationFrames() {
	const animationFrames = [];
	for (let i = 0; i < gradients.length * 2; i++) {
		const end = i + gradients.length - 1;
		animationFrames.push(
			gradientRefrences
				.slice(i, end)
				.map((g) => chalk.bgHex(g)(' '))
				.join('')
		);
	}
	return animationFrames;
}

function getAnimationFrames() {
	const animationFrames = [];
	for (let i = 1; i <= gradients.length; i++) {
		const spaces = Array.from(
			new Array(Math.abs(gradients.length - i - 1)),
			() => ' '
		);
		const gradientColors = gradients.slice(0, i).map((item) => chalk.bgHex(item)(' '));
		animationFrames.push([...spaces, ...gradientColors].join(''));
	}
	return animationFrames;
}


async function showSpinner(text) {
	const animationFrames = getAnimationFrames();
	const startSpinner = ora({
		spinner: {
			interval: 30,
			frames:animationFrames,
		},
		text: `${arrow} ${text}`,
	});
	startSpinner.start();
	await sleepProcess((animationFrames.length - 1) * startSpinner.interval);
	startSpinner.stop();
	const spinner = ora({
		spinner: {
			interval: 80,
			frames: getInstallAnimationFrames(),
		},
		text: `${arrow} ${text}`,
	}).start();

	return spinner;
}
  
const cwd = process.cwd()

const TEZ_SUPPORTED_FRAMEWORKS = [
  {
    name: 'vue',
    color: green,
    templates: [
      {
        name: 'tez-vue',
        color: yellow
      },
      {
        name: 'tez-strapi-vue',
        color: blue
      }

    ]
  },
]
const TEMPLATES = TEZ_SUPPORTED_FRAMEWORKS.map(
    (item) => (item.templates && item.templates.map((t) => t.name)) || [item.name]
  ).reduce((first, second) => first.concat(second), [])

  const renameFiles = {
    _gitignore: '.gitignore'
  }

function readFileSync(path,isString=false) {
    if(fs.existsSync(path)){
        var content = fs.readFileSync(path, "utf-8");
        content = isString ? content: JSON.parse(content);
        return content;
    }
}

  async function initTez() {
    let targetDir = argv._[0]
    let template = argv.template || argv.t
  
    const defaultProjectName = !targetDir ? 'tez-project' : targetDir
  
    let result = {}
  
    try {
      result = await prompts(
        [
          {
            type: targetDir ? null : 'text',
            name: 'projectName',
            message: reset('Project name:'),
            initial: defaultProjectName,
            onState: (state) =>
              (targetDir = state.value.trim() || defaultProjectName)
          },
          {
            type: () =>
              !fs.existsSync(targetDir) || isEmpty(targetDir) ? null : 'confirm',
            name: 'overwrite',
            message: () =>
              (targetDir === '.'
                ? 'Current directory'
                : `Target directory "${targetDir}"`) +
              ` is not empty. Remove existing files and continue?`
          },
          {
            type: (_, { overwrite } = {}) => {
              if (overwrite === false) {
                throw new Error(red('✖') + ' Operation cancelled')
              }
              return null
            },
            name: 'overwriteChecker'
          },
          {
            type: () => (isValidPackageName(targetDir) ? null : 'text'),
            name: 'packageName',
            message: reset('Package name:'),
            initial: () => toValidPackageName(targetDir),
            validate: (dir) =>
              isValidPackageName(dir) || 'Invalid package.json name'
          },
          {
            type: template && TEMPLATES.includes(template) ? null : 'select',
            name: 'framework',
            message:
              typeof template === 'string' && !TEMPLATES.includes(template)
                ? reset(
                    `"${template}" isn't a valid template. Please choose from below: `
                  )
                : reset('Select a framework:'),
            initial: 0,
            choices: TEZ_SUPPORTED_FRAMEWORKS.map((framework) => {
              const frameworkColor = framework.color
              return {
                title: frameworkColor(framework.name),
                value: framework
              }
            })
          },
          {
            type: (framework) =>
              framework && framework.templates ? 'select' : null,
            name: 'variant',
            message: reset('Select a variant:'),
            // @ts-ignore
            choices: (framework) =>
              framework.templates.map((template) => {
                const templateColor = template.color
                return {
                  title: templateColor(template.name),
                  value: template.name
                }
              })
          }
        ],
        {
          onCancel: () => {
            throw new Error(red('✖') + ' Operation cancelled')
          }
        }
      )
    } catch (cancelled) {
      console.log(cancelled.message)
      return
    }
  
    const { framework, overwrite, packageName, variant } = result
  
    const root = path.join(cwd, targetDir)
  
    if (overwrite) {
      emptyDir(root)
    } else if (!fs.existsSync(root)) {
      fs.mkdirSync(root)
    }
    template = variant || framework || template
  
    console.log(`\nScaffolding project in ${root}...`)
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const templateDir = path.join(__dirname, `template-${template}`)
    const write = (file, content) => {
      const targetPath = renameFiles[file]
        ? path.join(root, renameFiles[file])
        : path.join(root, file)
      if (content) {
        fs.writeFileSync(targetPath, content)
      } else {
        copy(path.join(templateDir, file), targetPath)
      }
    }
  
    const files = fs.readdirSync(templateDir)
    for (const file of files.filter((f) => f !== 'package.json')) {
      write(file)
    }
    const pkg = readFileSync(path.join(templateDir, `package.json`))
  
    pkg.name = packageName || targetDir
  
    write('package.json', JSON.stringify(pkg, null, 2))
  
    const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent)
    const pkgManager = pkgInfo ? pkgInfo.name : 'npm'
    await runInstall(`${template}`,pkgManager,root);
    console.log(`\nDone. Now run:\n`)
    if (root !== cwd) {
      console.log(`  cd ${path.relative(cwd, root)}`)
    }
    switch (pkgManager) {
      case 'yarn':
        console.log('  yarn')
        console.log('  yarn dev')
        break
      default:
        if(template === "tez-strapi-vue"){
          console.log(`  ${pkgManager} run develop`)
        }
        else{
          console.log(`  ${pkgManager} install`)
          console.log(`  ${pkgManager} run dev`)
        }
        break
    }
    console.log()
  }
  
  function copy(src, dest) {
    const stat = fs.statSync(src)
    if (stat.isDirectory()) {
      copyDir(src, dest)
    } else {
      fs.copyFileSync(src, dest)
    }
  }
  
  function isValidPackageName(projectName) {
    return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(
      projectName
    )
  }
  
  function toValidPackageName(projectName) {
    return projectName
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/^[._]/, '')
      .replace(/[^a-z0-9-~]+/g, '-')
  }
  
  function copyDir(srcDir, destDir) {
    fs.mkdirSync(destDir, { recursive: true })
    for (const file of fs.readdirSync(srcDir)) {
      const srcFile = path.resolve(srcDir, file)
      const destFile = path.resolve(destDir, file)
      copy(srcFile, destFile)
    }
  }
  
  function isEmpty(path) {
    const files = fs.readdirSync(path)
    return files.length === 0 || (files.length === 1 && files[0] === '.git')
  }
  
  function emptyDir(dir) {
    if (!fs.existsSync(dir)) {
      return
    }
    for (const file of fs.readdirSync(dir)) {
      const abs = path.resolve(dir, file)
      if (fs.lstatSync(abs).isDirectory()) {
        emptyDir(abs)
        fs.rmdirSync(abs)
      } else {
        fs.unlinkSync(abs)
      }
    }
  }
  
  function pkgFromUserAgent(userAgent) {
    if (!userAgent) return undefined
    const pkgSpec = userAgent.split(' ')[0]
    const pkgSpecArr = pkgSpec.split('/')
    return {
      name: pkgSpecArr[0],
      version: pkgSpecArr[1]
    }
  }
  function emojiWithFallback(char, fallback) {
    return process.platform !== 'win32' ? char : fallback;
  }

  async function runInstall(templateName,pkgManager,root) {
    if (templateName === "tez-strapi-vue") {
      const installProjects = ["","backend","frontend"];
      for(var projectName of installProjects)
       await installPacakages(pkgManager,projectName,root)
    }
  }

  async function installPacakages(pkgManager,projectName,root){
    const iPath = projectName ? path.resolve(cwd, root,projectName) : path.resolve(cwd, root);
      const installExec = execa(pkgManager, ['install'], { cwd:iPath });
      const installingPackagesMsg = `Installing '${projectName || 'root'}' folder packages${emojiWithFallback(' 📦', '...')}`;
      const installSpinner = await showSpinner(installingPackagesMsg);
      await new Promise((resolve, reject) => {
        installExec.stdout?.on('data', function (data) {
          installSpinner.text = `${arrow} ${installingPackagesMsg}\n${bold(
            `[${pkgManager}]`
          )} ${data}`;
        });
        installExec.on('error', (error) => reject(error));
        installExec.on('close', () => resolve());
      });
    
		 installSpinner.text = green(`'${projectName || 'root'}' folder Packages installed!`);
		 installSpinner.succeed();
  }
  
  initTez().catch((e) => {
    console.error(e)
  })