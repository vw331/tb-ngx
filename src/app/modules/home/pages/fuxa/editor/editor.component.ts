import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tb-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  isLoading: boolean = false;
  panelPropertyIdOpenState: boolean;
  panelsState = {
    enabled: false,
    panelView: true,
    panelGeneral: true,
    panelC: true,
    panelD: true,
    panelS: true
  };
  panelPropertyTransformOpenState: boolean
  colorFill: string = '#FFFFFF'
  colorStroke: string = '#000000'
  constructor() { }

  ngOnInit(): void {
  }

  savePanelState() {
    if (this.panelsState.enabled) {
        localStorage.setItem("@frango.webeditor.panelsState", JSON.stringify(this.panelsState));
    }
  }

  onAddView() {

  }

  onImportView() {

  }

  onViewFileChangeListener() {

  }

  onMakeHyperlink() {

  }

}
