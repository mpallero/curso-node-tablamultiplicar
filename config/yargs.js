
const { options, describe } = require('yargs');

const argv = require('yargs')
                        .option('h', {
                            alias: 'hasta',
                            type: 'number',
                            demandOption: true,
                            describe: 'Es hasta cuanto llega la tabla de multiplicar'
                        })
                        .option('b', {
                            alias: 'base',
                            type: 'number',
                            demandOption: true,
                            describe: 'Es la base de la tabla de multiplicar'
                        })
                        .option('l',{
                            alias: 'listar',
                            type: 'boolean',
                            default: false,
                            describe: 'Muestra la tabla en consola'
                        })
                        .check((argv, options)=>{
                            if( isNaN (argv.b) ){
                                throw 'La base tiene que ser un número'
                            }
                            return true;
                        })

                        .argv;

module.exports = argv;