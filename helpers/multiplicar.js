const fs = require('fs');
const colors = require('colors');

        const crearArchivo = async( base = 6, listar = false, hasta = 50 ) => {
    try{
            
                let salida, consola = '';
        
                for( let i = 1; i <= hasta; i++ ){
        
                salida +=`${base} ${'x'.yellow} ${i} ${'='.yellow} ${base*i}\n`;
                consola +=`${base} x ${i} = ${base*i}\n`;
            }  
            if(listar){
            console.log('================'.green);
            console.log(`Tabla del: ${base}`.red);
            console.log('================'.green);
            console.log(salida);
            }
            // fs.writeFile( `tabla-${base}.txt`, salida, (err)=>{
            //         if(err) throw err;+
        
            fs.writeFileSync(`./salida/tabla-${base}.txt`, consola)
                    return `Tabla-${base}.txt creado`;
        
        
        }catch(err){
        throw err;
    }
}

    

module.exports = {
    crearArchivo
}

