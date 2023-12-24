class Award {
  constructor(name, category, description, dateReceived, issuer) {
    this.name = name;
    this.category = category;
    this.description = description;
    this.dateReceived = dateReceived;
    // this.image = image;
    // this.video = video;
    this.receiver = receiver;
    this.issuer = issuer;
    // this.cryptoSigned = // blockchain id stuff goes here
  }

  displayInfo() {
    console.log(`Award Name: ${this.name}`);
    console.log(`Category: ${this.category}`);
    console.log(`Description: ${this.description}`);
    console.log(`Date Received: ${this.dateReceived}`);
  }
}
