export enum Player {
  One = "ONE",
  Two = "TWO"
}
export class Game {
  getPlayerScore(player: Player): number {
    return 0;
  }
}






















/**
 * A tennis match is composed of points, games and sets. 
 * The rules of counting points within a game are exposed next. 
 * Your task is to implement this logic and expose a method
 * which returns the current score as a string for display.
 * Points are referred to as “love”, “15”, “30” and “40”
 * If a player has scored 40 and they score next, they win the game.
 * However: if both players have scored 40, the game
 *  is said to be “deuce”.
 * If the game is deuce, the next scoring player has “advantage”.
 * If the player with advantage scores next, they win the game.
 * If the player without advantage scores next, the game 
 * is back to deuce.
 */ 

 //on attend quoi en input et on veut quoi en output ?
 //Commencer par les points de 0 à 30 puis apres s'attaquer au 40 A et à la victioire
//Représentation du modèle
//Affichage des résultats
//Gestions d'états avec scénarios
//résoner avec des exemples
//Cas 40-40
