import Avatar from './Avatar.js';

export default class Mago extends Avatar {

    #spells;
    #idSetInterval;

    constructor (_life, _damage){
        super(_life, _damage);
        this.#spells = 10;
        this.#idSetInterval = 0;
    };

    get spells() {
        return this.#spells;
    }

    get idSetInterval() {
        return this.#idSetInterval;
    }

    set spells(_spells) {
        this.#spells = _spells;
    }

    attack() {
        if (this.#spells === 0){
            return 0;
        } else {
            this.#spells -= 1; 
            if (this.#spells === 0){
                this.#idSetInterval = setTimeout(() => this.loadSpells(10), 10000);
            }        
            return this.damage;    
        }
    }

    loadSpells(_n) {
        this.#spells = _n; 
        console.log('Recarga de feitiços: '+this.#spells);
    }
}

