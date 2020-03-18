import { Rule, SchematicContext, Tree, template, noop, apply, mergeWith, url, move, empty, chain } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';
import {
  NodePackageInstallTask
} from '@angular-devkit/schematics/tasks';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function materiaSchematicsAddons(options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    if ( ! options.packageName) {
      options.packageName = options.name;
    }
    return chain([
      mergeWith(
        apply(empty(), [createStructure(options), noop(), move(options.name)])
      ),
      mergeWith(
        apply(empty(), [createServer(options), noop(), move(`${options.name}/server`)])
      ),
      mergeWith(
        apply(empty(), [createClient(options), noop(), move(`${options.name}/client`)])
      ),
      mergeWith(
        apply(empty(), [createScripts(), noop(), move(`${options.name}/scripts`)])
      ),
      (_tree: Tree, context: SchematicContext) => {
        context.addTask(new NodePackageInstallTask(options.name));
      }
    ])

  }
};

export function createStructure(options: any): Rule {
  return mergeWith(
    apply(url('./files/root'), [
      noop(),
      template({
        utils: strings,
        ...options,
        'dot': '.'
      })
    ]));
}

export function createServer(options: any): Rule {
  return mergeWith(
    apply(url('./files/server'), [
      noop(),
      template({
        utils: strings,
        ...options
      })
    ]));
}

export function createClient(options: any): Rule {
  return mergeWith(
    apply(url('./files/client'), [
      noop(),
      template({
        utils: strings,
        ...options,
        dashname: strings.dasherize(options.name)
      })
    ]));
}

export function createScripts(): Rule {
  return mergeWith(
    apply(url('./files/scripts'), [
      noop()
    ]));
}

