module.exports = {
    command: 'command2',
    describe: 'parent - command2 description',
    builder(yargs) {
        yargs.command('testing', 'testing description', () => console.log('nested'))
    },
    handler() {
        console.log('test')
    }
}
