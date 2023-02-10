import { Collection, MongoClient } from 'mongodb';
import { ChemicalSubstance } from '../chemical-substance.dto';

// TODO: Insert credentials
const uri = "mongodb+srv://<username>:<password>@coding-challange.15an4ec.mongodb.net/?retryWrites=true&w=majority";

export class MongoDB {
  private client = new MongoClient(uri);
  private collection: Collection<ChemicalSubstance> | null = null;

  public async connect() {
    await this.client.connect();
    const db = this.client.db('coding-challange');
    this.collection = db.collection<ChemicalSubstance>('substances');
  }

  public async getChemicalSubstances() {
    return await this.collection!.find().toArray();
  }
}
