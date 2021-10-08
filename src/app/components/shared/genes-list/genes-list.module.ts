import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesListComponent } from './genes-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '../search/search.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { SearchModule } from '../search/search.module';
import { PipesModule } from '../../../modules/pipes/pipes.module';
import { DirectivesModule } from '../../../directives/directives.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UiComponentsModule } from '../../ui-components/ui-components.module';
import { MatCardModule } from '@angular/material/card';
import { WindowService } from '../../../core/services/browser/window.service';
import { GeneMenuComponent } from './components/gene/menu/gene-menu.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SelectionCriteriaModule } from '../selection-criteria/selection-criteria.module';
import { MaterialModule } from '../../../modules/vendors/material.module';
import { GenesTableHeaderComponent } from './components/genes-table-header/genes-table-header.component';
import { AssociatedDiseasesModule } from '../associated-diseases/associated-diseases.module';
import { AssociatedDiseaseCategoriesModule } from '../associated-disease-categories/associated-disease-categories.module';
import { NoContentModule } from '../no-content/no-content.module';
import { IconModule } from '../../ui-components/components/icon/app-icon.module';
import { GeneCardComponent } from './components/gene/gene-card/gene-card.component';
import { GeneTableRowComponent } from './components/gene/gene-table-row/gene-table-row.component';
import { GeneFieldsModalComponent } from './components/gene-fields-modal/gene-fields-modal.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { GeneAnnotationsCardComponent } from './components/gene/gene-annotations-card/gene-annotations-card.component';

@NgModule({
  declarations: [
    GenesListComponent,
    SearchComponent,
    GeneMenuComponent,
    GenesTableHeaderComponent,
    GeneCardComponent,
    GeneTableRowComponent,
    GeneFieldsModalComponent,
    FilterPanelComponent,
    GeneAnnotationsCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
    SearchModule,
    PipesModule,
    DirectivesModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    UiComponentsModule,
    MatCardModule,
    MatTooltipModule,
    SelectionCriteriaModule,
    MaterialModule,
    AssociatedDiseasesModule,
    AssociatedDiseaseCategoriesModule,
    NoContentModule,
    IconModule,
  ],
  providers: [WindowService],
  exports: [GenesListComponent, SearchComponent, GeneCardComponent, GeneTableRowComponent],
})
export class GenesListModule {}
