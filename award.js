class Award {
  constructor(name, category, description, dateReceived, issuer) {
    this.name = name;
    this.category = category;
    this.description = description;
    this.dateReceived = dateReceived;
    // this.image = image;
    // this.video = video;
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

// // Creating an instance of the Award class
// const sampleAward = new Award(
//   "Outstanding Contribution Award",
//   "Professional Recognition",
//   "Awarded for exceptional contributions to the company.",
//   "December 15, 2023"
// );
