module.exports = {
    command: 'test',
    describe: 'parent - test description',
    builder(yargs) {
        yargs.command({ aliases: ['$0'], command: 'testing', describe: 'testing description', handler: () => console.log('nested') })
        yargs.command('testing2', 'testing description', () => console.log('nested'))
        yargs.command('testing3', 'testing description', () => console.log('nested'))
    }
}
