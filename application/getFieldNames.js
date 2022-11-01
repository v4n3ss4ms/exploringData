export class GetFieldNames {
    
  constructor(dataRepository){
      this.dataRepository = dataRepository;
  }

  async execute() {
      return this.dataRepository.data.meta.map(e => e.name);
  }
}