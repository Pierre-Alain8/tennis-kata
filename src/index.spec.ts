import { Game, Player } from ".";

describe("Test first", function() {
  it("should initialize game score", function() {
    //given
      const game = new Game(); 
      
    //when

    //then
    expect(game.getPlayerScore(Player.One)).toEqual(0);
    expect(game.getPlayerScore(Player.Two)).toEqual(0);
  });

});