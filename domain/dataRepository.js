const API_URL = new URL(
  'https://api.tinybird.co/v0/pipes/yellow_tripdata_2017_pipe.json?q=SELECT%20%2A%20FROM%20yellow_tripdata_2017_pipe%20LIMIT%20100&token=p.eyJ1IjogIjdmOTIwMmMzLWM1ZjctNDU4Ni1hZDUxLTdmYzUzNTRlMTk5YSIsICJpZCI6ICJmZTRkNWFiZS05ZWIyLTRjMjYtYWZiZi0yYTdlMWJlNDQzOWEifQ.P67MfoqTixyasaMGH5RIjCrGc0bUKvBoKMwYjfqQN8c'
);

export class DataRepository {
  constructor(fetch) {
    this.fetch = fetch;
    this.data = null;
  }

  getData() {
    if (this.data) {
      return this.data;
    } else {
      return fetch(API_URL)
        .then((res) => res.json())
        .then((res) => (this.data = res));
    }
  }
}
