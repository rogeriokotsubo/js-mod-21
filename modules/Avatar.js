export default class Avatar {
    
    #life;
    #damage;
   
    constructor (_life, _damage) {
        this.#life = _life;
        this.#damage = _damage;
    }

    get life() {
         return this.#life;
    }
    get damage() {
        return this.#damage;
    }

    set damage(_damage) {
        this.#damage = _damage;
    }   

    set life(_life) {
        this.#life = _life;
    }   

    attack() {
        return this.#damage;
    }

    incomingAttack(_points) {
        if (this.#life===0){
            return false;
        }
        this.#life -= _points;
        if ( this.#life === 0 ){
            this.#damage = 0;
        }
        return true;
    }
}
