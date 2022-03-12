//var Emitter = require('./emitter');
import EventEmitter from 'events'; //Inyectar la dependencia.
let emtr = new EventEmitter(); //Variable que contiene el import del emitter.
import events from './config.js'; //Inyectar la dependencia de events.

emtr.on(events.GREET, () => {       
    console.log('Somewhere, someone said hello.');
});
                                                    //Dos funciones con el mismo nombre pero diferente comportamiento.
emtr.on(events.GREET, () => {
    console.log('A greeting ocurred!');
});

console.log('Hello!');
emtr.emit('greet');//Se invoca la función "greet". Al ejecutarlo en la terminal, las dos funciones son invocadas y se imprime lo que hay en cada función.

emtr.on(events.JUMP, () => {
    console.log('someone jumped!');
});

console.log(emtr); //Ahora "emit" tiene por eventos tanto "greet" como "jump" que fueron las funciones que se crearon en app.js.
emtr.emit('jump'); 

//Se ejecuta cada función y lo imprime en la terminal.
//Se modificaron en las funciones especificamente en "emtr.on", strings por variables, para hacer funcionarlo.
