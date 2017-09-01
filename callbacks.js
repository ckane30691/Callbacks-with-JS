class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getUTCHours();
    this.minutes = date.getUTCMinutes();
    this.seconds = date.getUTCSeconds();

    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.formatTime(this.hours)}:${this.formatTime(this.minutes)}:${this.formatTime(this.seconds)}`);
  }

  _tick() {
        this.seconds += 1;
        if (this.seconds === 60) {
          this.seconds = this.seconds % 60;
          this.minutes += 1;
        }

        if (this.minutes === 60) {
          this.minutes = this.minutes % 60;
          this.hours += 1;
        }

        this.hours =this.hours % 24;
        this.printTime();
      }

  formatTime(time) {
    if (time < 10) {
      return "0" + time;
    }
    else {
      return time;
    }
  }



}




const clock1 = new Clock();

clock1._tick();
