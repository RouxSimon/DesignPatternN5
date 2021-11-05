class PokeTruc {
    
    constructor(name, age, energie=100, concentration=100, motivation=75, competence=15) {
        this.name = name;
        this.age = age;
        this.energie=energie;
        this.concentration=concentration;
        this.motivation=motivation;
        this.competence=competence;
    }
    
    getMypokeStats() {
        console.log(this.name
            +" : "
            +this.age
            +" ans / Energie : "
            +this.energie
            +"pts / Concentration : "
            +this.concentration
            +"pts / Motivation : "
            +this.motivation
            +"pts / Competence : "
            +this.competence
            +"pts"
        );
    }
        
    dormir() {
        energieRand = Math.random() * (60 - 20) + 20;
        this.energie = this.energie + energieRand;
    }
    jouer() {
        energieRand = Math.random() * (10 - 30) + 10;
        this.energie = this.energie - energieRand;

        motivationRand = Math.random() * (10 - 40) + 10;
        this.motivation = this.motivation - motivationRand;
    }
    manger() {
        energieRand = Math.random() * (5 - 10) + 5;
        this.energie = this.energie + energieRand;

        motivationRand = Math.random() * (10 - 30) + 10;
        this.motivation = this.motivation - motivationRand;

        concentrationRand = Math.random() * (10 - 30) + 10;
        this.concentration = this.concentration - concentrationRand;
    }
    travailler() {
        energieRand = Math.random() * (5 - 15) + 5;
        this.energie = this.energie - energieRand;

        motivationRand = Math.random() * (5 - 15) + 5;
        this.motivation = this.motivation - motivationRand;

        concentrationRand = Math.random() * (5 - 15) + 5;
        this.concentration = this.concentration - concentrationRand;

        competenceRand = Math.random() * (5 - 30) + 5;
        this.competence = this.competence + competenceRand;
    }
}
console.log("|| PokeSchtroumf ||"); 
console.log("Attributs : Nom / Age / Energie / Concentration / Compétence");
console.log("Méthodes :");     
console.log("Dormir : Energie +20 à 60");
console.log("Jouer : Energie -10 à 30 Motivation -10 à 40");
console.log("Manger : Energie +5 à 10 Concentration -10 à 30 Motivation -10 à 30");
console.log("Travailler : Compétence +5 à 30 Energie -5 à 15 Concentration -5 à 15 Motivation -5 à 15"); 
console.log("Manger tout les 6 tours et dormir tout les 16\n");
//-----------------------------------------------------------
mon_poke = new PokeTruc('Zapp', 25);

let turn = 0;
while (mon_poke.energie>0 && mon_poke.motivation>0 && mon_poke.competence<100) {
    turn+=1;
    if((turn%6) == 0) {
        let rand=4;
    } else if((turn%16) == 0) {
        let rand=3;
    } else {
        let rand = Math.random() * (1 - 4) + 1;
    }

    switch (rand) {
        case 1:mon_poke.jouer();
        console.log('\npioupiou\n');
        mon_poke.getMypokeStats();
        break;
        case 2:mon_poke.travailler();
        console.log('\ntravaille terminé\n');
        mon_poke.getMypokeStats();
        break;
        case 3:mon_poke.dormir();
        console.log('\nzzzzzzz\n');
        mon_poke.getMypokeStats();
        break;
        case 4:mon_poke.manger();
        console.log('\nYum yum yum\n');
        mon_poke.getMypokeStats();
        break;
    }
}
