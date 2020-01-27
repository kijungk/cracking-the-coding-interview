module.exports = class ThreeInOne {
  container = [];

  oneTop = 0;
  twoTop = 0;

  onePush(item) {

  }

  onePop() {

  }

  onePeek() {

  }

  oneIsEmpty() {
    if (this.container.length) {
      return false;
    }

    return true;
  }

  twoPush(item) {
    if (!this.twoIsEmpty()) {
      this.container.splice(this.oneTop + this.twoTop, 0, item);
    }

    this.container.splice(this.oneTop, 0, item);
    return ++this.twoTop;
  }

  twoPop() {
    if (this.twoIsEmpty()) {
      return undefined;
    }

    this.container.splice(twoTop - 1, 1);
    return --this.twoTop;
  }

  twoPeek() {
    if (this.twoIsEmpty()) {
      return undefined;
    }

    return this.container[twoTop - 1];
  }

  twoIsEmpty() {
    if (this.twoTop) {
      return false;
    }

    return true;
  }

  threePush(item) {
    return this.container.push(item);
  }

  threePop() {
    return this.container.pop();
  }

  threePeek() {
    return this.container[this.container.length - 1];
  }

  threeIsEmpty() {
    if (this.threeTop) {
      return false;
    }

    return true;
  }
}