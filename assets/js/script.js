// variables
let text = document.getElementById('text');
let games = document.getElementById('games');
// tableau 
let sign = ['pierre', 'papier', 'ciseaux']
// compteur
let countSuccessGames = 0;

// fonction qui récupère mon choix via les btns dans le html
function clickBtn(id) {
    // variable 
    let successGames = document.getElementById('successGames')
    // variable du chiffre aléatoire
    let randomNumber = Math.floor(Math.random() * 3);
    //  j'attribut le chiffre aleatoire a l'index du tableau et je stock la valeur dans un variable
    let ordiChoise = sign[randomNumber];
    //  j'affiche dans le html, le choix de l'ordi et le mien
    text.innerHTML = `<p>Vous avez choisi ${id} et l'ordi a choisi ${ordiChoise}</p>`;
    // condition si les deux valeurs sont identiques
    if (id == ordiChoise) {
        text.innerHTML += '<p id="resultNull">égalité</p>';
    } else if (id == 'pierre' && ordiChoise == 'papier' || id == 'papier' && ordiChoise == 'ciseaux' || id == 'ciseaux' && ordiChoise == 'pierre') {
        // condition de tous les cas où je perds
        text.innerHTML += '<p id="resultLost">perdu</p>';
    } else {
        text.innerHTML += '<p id="resultSuccsses">bravo</p>';
        document.getElementById('resultSuccsses').style.backgroundColor = 'green';
        // mon compteur s'incrémente de 1 si je gagne
        countSuccessGames++
    }
    
// j'affiche mon compteur dans le html
    successGames.textContent = countSuccessGames;
    // j'affiche tout les resultats
    games.innerHTML += text.innerHTML
}