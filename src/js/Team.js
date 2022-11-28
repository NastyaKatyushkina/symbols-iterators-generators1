export default class Team {
  constructor(team) {
    this.team = team;
  }

  [Symbol.iterator] = function () {
    let current = 0;
    const last = this.team.length;

    return {
      next: () => {
        if (current <= last) {
          return {
            done: false,
            value: this.team[current++],
          };
        }
        return {
          done: true,
        };
      },
    };
  };
}