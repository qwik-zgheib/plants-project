# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

---

# Configuration and Execution of Scripts

## Fish

### Description

This script configures Git, verifies the Node.js and npm installation, and installs dependencies and runs npm commands. Specifically designed for Shell Fish.

### Permissions

```fish
chmod +x configure-run.fish
```

### Execution

```fish
./configure-run.fish
```

## Bash

### Description

This script performs similar configurations to configure-run.fish, but is designed for the Bash shell.

### Permissions

```sh
chmod +x configure-run.sh
```

### Execution

```sh
./configure-run.sh
```

## Zsh

### Description

Script similar to configure-run.sh but designed for the Zsh shell.

### Permissions

```zsh
chmod +x configure-run.zsh
```

### Execution

```zsh
./configure-run.zsh
```

## Powershell

### Description

This script is for PowerShell on Windows. Configure Git, check Node.js and npm, and install dependencies and run npm commands.

### Permissions

```ps1
Set-ExecutionPolicy RemoteSigned
```

### Execution

```ps1
.\configure-run.ps1
```
