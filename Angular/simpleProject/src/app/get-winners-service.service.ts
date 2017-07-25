import { Injectable } from '@angular/core';

@Injectable()
export class GetWinnersService {
  winners = [[4,7,10], [5,8,11], [6,9,12], [4,5,6], [7,8,9], [10,11,12], [4,8,12], [6,8,10]];
  constructor() { }

  getCopyOfWinners() {
    var winnersCopy = this.winners.slice();
    return winnersCopy
  }

}
