const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const joinApp = (relativePath) => path.join(appDirectory, relativePath);

const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
];

const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find((extension) =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}}`);
  }

  return resolveFn(`${filePath}.js`);
};

module.exports = {
  appIndexJs: resolveModule(resolveApp, 'src/index'),
  moduleOutputPath: resolveApp('dist/'),
  publicPaths: joinApp('public/'),
};

module.exports.moduleFileExtensions = moduleFileExtensions;
