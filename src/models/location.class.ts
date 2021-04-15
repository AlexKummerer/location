export class Location {
  location: string;
  results: string;

  constructor(obj?: any) {
    this.location = obj ? obj.location : '';
    this.results = obj ? obj.results : '';
  }
  public toJSON() {
    return {
      location: this.location,
      results: this.results,
    };
  }
}
