import { Component, Inject, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.scss'],
})
export class CommonModalComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      body: any;
      template: TemplateRef<any>;
    },
    private dialogRef: MatDialogRef<CommonModalComponent>
  ) {}

  public closeCommentModal(): void {
    this.dialogRef.close();
  }
}
