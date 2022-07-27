import Avatar from './modules/Avatar.js';
import Cowboy from './modules/Cowboy.js';
import Mago from './modules/Mago.js';

const msg = document.querySelector('#p-msg');
const ctnAvatar = document.querySelector("#ctn-drawn");
const consoleBx = document.querySelector("#console");

let attackSuccess = 0;
let incomingAttackSuccess = false;
let dano = 0;

consoleBx.innerHTML +=`Instanciando Avatar \n`;
const newAvatar = new Avatar(10 ,1);
consoleBx.innerHTML +=` Avatar dano: ${newAvatar.damage} \n`;
consoleBx.innerHTML +=` Avatar vida: ${newAvatar.life} \n`;

consoleBx.innerHTML +=` Avatar atacando \n`;
attackSuccess = newAvatar.attack();
consoleBx.innerHTML +=` Ataque: ${attackSuccess} \n`;

consoleBx.innerHTML +=` Avatar recebendo ataque \n`;
incomingAttackSuccess = newAvatar.incomingAttack(2);
consoleBx.innerHTML +=` Ataque recebido: ${incomingAttackSuccess}, Vida: ${newAvatar.life} \n\n`;

consoleBx.innerHTML +=`Instanciando Cowboy \n`;
const newCowboy = new Cowboy(10, 2);
consoleBx.innerHTML +=` Cowboy dano: ${newCowboy.damage} \n`;
consoleBx.innerHTML +=` Cowboy vida: ${newCowboy.life} \n`;
consoleBx.innerHTML +=` Cowboy munição: ${newCowboy.ammo} \n`;

consoleBx.innerHTML +=` Cowboy atacando \n`;
dano = newCowboy.attack();
consoleBx.innerHTML +=` Ataque dano: ${dano}, Munição: ${newCowboy.ammo} \n`;

consoleBx.innerHTML +=` Carregamento de munição com 5 \n`;
incomingAttackSuccess = newCowboy.loadAmmunition(5);
consoleBx.innerHTML +=` Munição: ${newCowboy.ammo} \n\n`;

consoleBx.innerHTML +=`Instanciando Mago \n`;
const newMago = new Mago(10, 3);
consoleBx.innerHTML +=` Mago dano: ${newMago.damage} \n`;
consoleBx.innerHTML +=` Mago vida: ${newMago.life} \n`;
consoleBx.innerHTML +=` Mago feitiços: ${newMago.spells} \n`;

consoleBx.innerHTML +=` Mago atacando \n`;
dano = newMago.attack();
consoleBx.innerHTML +=` Ataque dano: ${dano}, Spells: ${newMago.spells} \n`;
dano = newMago.attack();
dano = newMago.attack();
dano = newMago.attack();
dano = newMago.attack();
dano = newMago.attack();
dano = newMago.attack();
dano = newMago.attack();
dano = newMago.attack();
consoleBx.innerHTML +=` . \n`;
consoleBx.innerHTML +=` . \n`;
consoleBx.innerHTML +=` . \n`;
consoleBx.innerHTML +=` Ataque dano: ${dano}, Spells: ${newMago.spells} \n`;
dano = newMago.attack();
consoleBx.innerHTML +=` Ataque dano: ${dano}, Spells: ${newMago.spells} \n`;
consoleBx.innerHTML +=` Zerou feitiços ... \n`;
consoleBx.innerHTML +=` Aguardando carregamento de feitiços ... \n\n`;
dano = setTimeout(() => {consoleBx.innerHTML +=` Feitiços após carregamento: ${newMago.spells} \n\n Fim`},12000);











