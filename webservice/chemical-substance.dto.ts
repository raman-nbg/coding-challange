export interface ChemicalSubstance {
  casId: string;
  hazards: [
    {
      category: string;
      class: string;
    }
  ]
}