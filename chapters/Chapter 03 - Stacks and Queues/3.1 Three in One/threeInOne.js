class ThreeInOne {
  container = [];
  oneCount = 0;
  twoCount = 0;

  onePush(item) {
    this.container.splice(this.oneCount, 0, item);

    ++this.oneCount;

    return;
  }

  onePop() {
    const popPosition = this.oneCount ? this.oneCount - 1 : 0;

    this.container.splice(popPosition, 1);

    return --this.oneCount;
  }

  onePeek() {
    const peekPosition = this.oneCount ? this.oneCount - 1 : 0;

    return this.container[peekPosition];
  }

  oneIsEmpty() {
    if (this.container.length) {
      return false;
    }

    return true;
  }

  twoPush(item) {
    this.container.splice(this.oneCount + this.twoCount, 0, item);

    return ++this.twoCount;
  }

  twoPop() {
    const popPosition = this.twoCount ? this.twoCount - 1 : 0;

    if (this.twoIsEmpty()) {
      return undefined;
    }

    this.container.splice(this.oneCount + popPosition, 1);

    return --this.twoCount;
  }

  twoPeek() {
    const peekPosition = this.twoCount ? this.twoCount - 1 : 0;

    if (this.twoIsEmpty()) {
      return undefined;
    }

    return this.container[this.oneCount + peekPosition];
  }

  twoIsEmpty() {
    if (this.twoCount) {
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

module.exports = ThreeInOne;