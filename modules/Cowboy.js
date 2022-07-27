import Avatar from './Avatar.js';

export default class Cowboy extends Avatar {

    #ammo;

    constructor (_life, _damage){
        super(_life, _damage);
        this.#ammo = 10;
    };

    get ammo() {
        return this.#ammo;
    }

    set ammo(_ammo) {
        this.#ammo = _ammo;
    }

    attack() {
        if (this.#ammo === 0){
            return 0;
        } else {
            this.#ammo -= 1; 
            return this.damage;    
        }
    }

    loadAmmunition(_n) {
        this.#ammo += _n; 
        return true;
    }
}

