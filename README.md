A repro of a yargs bug where the usage output goes wrong when using a `$0`
default command/alias.

```
$ npm i
$ node index.js test testingtypo
index.js test testing

testing description

Commands:
  index.js test test        parent - test description
  index.js test command2    parent - command2 description
  index.js test completion  generate completion definition script

Options:
  --version  Show version number  [boolean]
  --help     Show help  [boolean]

Unknown argument: testingtypo
```

Notice how it's `index.js test test`, `command2` and `completion`. They're the
top level tasks being shown under the usage for the `test` subcommand.

The correct output can be seen when the alias is removed:

```
$ git checkout origin/no-alias -- cli-commands
$ git reset
$ node index.js test testingtypo

index.js test

parent - test description

Commands:
  index.js test testing   testing description
  index.js test testing2  testing description
  index.js test testing3  testing description

Options:
  --version  Show version number  [boolean]
  --help     Show help  [boolean]

Unknown argument: testingtypo
```
