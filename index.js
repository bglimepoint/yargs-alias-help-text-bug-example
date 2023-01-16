const yargs = require('yargs')

let priorFailureOutput = null,
  helpShown = false

yargs
    .commandDir('cli-commands')
    .recommendCommands()
    .demandCommand()
    .strict()
    .wrap(null)
    .completion('completion', 'generate completion definition script')
    .help()
    .parse()
