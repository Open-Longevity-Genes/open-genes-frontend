import { Routes } from '@angular/router';
import { GeneComponent } from './gene.component';

export const GENE_ROUTES: Routes = [
  {
    path: '',
    component: GeneComponent,
    data: {
      breadcrumb: 'gene_page_breadcrumb',
    },
  },
];
