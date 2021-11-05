class PokeTruc {
    
    constructor(name='truc', type='normal', pv=120, attaque=50, defense=10, vitesse=15) {
        this.name = name;
        this.type = type;
        this.pv=pv;
        this.attaque=attaque;
        this.defense=defense;
        this.vitesse=vitesse;
    }
    
    getMyPokeStats() {
        console.log(this.name
            +" : Pokemon de type "
            +this.type
            +" / pv : "
            +this.pv
            +" / attaque : "
            +this.attaque
            +" / defense : "
            +this.defense
            +" / vitesse : "
            +this.vitesse
        );
    }
        
    attaquer() {
        
    }
}
function combattre(poke1, poke2) {

    function fastest(params) {
        
    }
    function taper(params) {
        
    }
    function soigner(params) {
        //pv+=defense
    }
}
//-----------------------------------------------------------
mon_poke = new PokeTruc('Zapp', 'feu', 150, 55, 13, 14);
mon_poke2 = new PokeTruc('Truc', 'Eau');
mon_poke.getMyPokeStats();
combattre(mon_poke, mon_poke2);
