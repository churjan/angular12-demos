import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import * as go from 'gojs';

@Component({
  selector: 'app-gojs',
  templateUrl: './gojs.component.html',
  styleUrls: ['./gojs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GojsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  diagramDivClassName = 'myDiagramDiv';
  state = {
    diagramNodeData: [
      { id: 'Alpha', text: 'Alpha', color: 'lightblue' },
      { id: 'Beta', text: 'Beta', color: 'orange' },
    ],
    diagramLinkData: [{ key: -1, from: 'Alpha', to: 'Beta' }],
    diagramModelData: { prop: 'value' },
    skipsDiagramUpdate: false,
  };

  initDiagram(): go.Diagram {
    const $ = go.GraphObject.make;
    const dia = $(go.Diagram, {
      'undoManager.isEnabled': true,
      model: new go.GraphLinksModel({
        nodeKeyProperty: 'id',
        linkKeyProperty: 'key',
      }),
    });

    dia.nodeTemplate = $(
      go.Node,
      'Auto',
      $(
        go.Shape,
        'RoundedRectangle',
        { stroke: null },
        new go.Binding('fill', 'color')
      ),
      $(
        go.TextBlock,
        { margin: 8, editable: false },
        new go.Binding('text').makeTwoWay()
      )
    );
    return dia;
  }

  /**
   * Handle GoJS model changes, which output an object of data changes via Mode.toIncrementalData.
   * This method should iterate over thoe changes and update state to keep in sync with the FoJS model.
   * This can be done with any preferred state management method, as long as immutability is preserved.
   */
  public diagramModelChange = function (changes: go.IncrementalData) {
    console.log(changes);
    // see gojs-angular-basic for an example model changed handler that preserves immutability
    // when setting state, be sure to set skipsDiagramUpdate: true since GoJS already has this update
  };
}
