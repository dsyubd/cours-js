let playlist = ["musique 1" , "musique 2" , "musique 3" , "musique 4" , "Anissa_Wejdene"]

class Personnage { 
    constructor(name, pv) {
    this.name = name
    this.pv = pv
    }
    trajet () {
        let nbrChangeTaxi = 0
        let nbrRedLight = 0



        while (nbrRedLight < 30 && this.pv > 0  ) {
            nbrRedLight = nbrRedLight + 1
            let musicRandom = playlist[Math.floor(Math.random() * playlist.length)]

            console.log ("Seb a passé " + nbrRedLight + " feu rouges et " + musicRandom + " est entrain de passer a la radio")

            if (musicRandom === playlist[4]) {
                this.pv -= 1
                nbrChangeTaxi += 1


            } else {
                console.log (" La musique convient a Seb ")
            }

            if (this.pv === 0) {

                console.log("Seb est mentalement epuisé, il a cessé de fonctionner")
                break
                }
            if (nbrRedLight === 30 ) {
                console.log("Seb a atteint sa destination en changant " + nbrChangeTaxi + " fois de taxi") 
                break
            }
        }
    }  
}

let Seb = new Personnage("Seb" , 30);
Seb.trajet ()


