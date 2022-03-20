type Item = { name: string; _id: string; url: string };

export interface ISearchResults {
  dishes?: Item[];
  restaurants?: Item[];
  chefs?: Item[];
}
