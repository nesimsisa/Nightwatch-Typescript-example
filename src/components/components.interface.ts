interface it {
  should: String;
  //func: Function;
}

export interface Interface {
  selector: String;
  description: String;
  it: [it];
  elements: Object;
  commands: Object;
}

