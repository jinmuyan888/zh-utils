import { execSync } from 'child_process';

/**
 * 代码格式化
 */
const codeFormatting = () => {
  execSync('npx prettier --write src/**/*.ts', { stdio: 'inherit' });
};

export const dev = async () => {
  await codeFormatting();
  await execSync('cross-env NODE_ENV=dev tsup --watch', { stdio: 'inherit' });
};

export const build = async () => {
  await codeFormatting();
  await execSync('cross-env NODE_ENV=build tsup', { stdio: 'inherit' });
};

export const release = async () => {
  await execSync('npx esno ./build/release.ts', { stdio: 'inherit' });
};
