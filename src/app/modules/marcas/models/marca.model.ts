export interface IMarca{
    marca: number
    nombre: string
    notas: string
}

export class Marca implements IMarca{
    marca: number
    nombre: string
    notas: string

    constructor(marca?: IMarca){
        this.populate(marca)
    }

    populate(marca: IMarca|any){
        if( !marca ){
            this.marca = null
            this.nombre = null
            this.notas = null
        } else {
            this.marca = marca.marca? marca.marca : null
            this.nombre = marca.nombre? marca.nombre : null
            this.notas = marca.notas? marca.notas : null
        }
    }
}