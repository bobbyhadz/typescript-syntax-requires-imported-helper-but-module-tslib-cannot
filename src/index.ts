export {};

// Error: This syntax requires an imported helper but module 'tslib' cannot be found

@sealed
export class BugReport {
  type = 'report';
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

function sealed(constructor: any) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

console.log('bobbyhadz.com');
