export class Juego {

    public nombreJuego:string;
    public usuario:string;
    public puntaje:number;
    public gano:boolean;


    constructor(gameName:string,user:string,score:number,win:boolean){
        this.nombreJuego = gameName;
        this.usuario = user;
        this.puntaje = score;
        this.gano = win;
    }
}
