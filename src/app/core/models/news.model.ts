import { IGene } from './genes.model';

export interface INews {
  url: string;
  title: string;
  gene: IGene;
}
