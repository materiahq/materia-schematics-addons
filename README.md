# Getting Started @materia/schematics-addons

This package is used to generate a Materia Addon automatically using Angular schematics.

To use it you will need to:
 - install `@angular-devkit/schematics-cli` globally and use the `schematics` command line tool,
 - install `@materia/schematics-addons` globally.


Run following command with npm:
 ```bash
npm install -g @angular-devkit/schematics-cli @materia/schematics-addons
```
or using yarn:
 ```bash
yarn global add @angular-devkit/schematics-cli @materia/schematics-addons
```

### Generate a new addon

Run this comand in the folder where you want to generate your new addon folder:

```bash
schematics @materia/schematics-addons:new --name=ADDON_NAME --packageName=PACKAGE_NAME --prefix=COMPONENT_PREFIX 
```

All params are optional:
- name: Name of your addon (default: 'addon-boilerplate'),
- prefix: Prefix used in angular for the client side part (default: 'materia'),
- packageName: Name used in package.json if different from name.
 