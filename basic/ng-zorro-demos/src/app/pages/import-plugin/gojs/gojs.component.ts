import { Component, OnInit,ViewEncapsulation } from '@angular/core';

import * as go from 'gojs';

@Component({
  selector: 'app-gojs',
  templateUrl: './gojs.component.html',
  styleUrls: ['./gojs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GojsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

public state = {
  // Diagram state props
  diagramNodeData: [
    { id: 'Alpha', text: "Alpha", color: 'lightblue' },
    { id: 'Beta', text: "Beta", color: 'orange' }
  ],
  diagramLinkData: [
    { key: -1, from: 'Alpha', to: 'Beta' }
  ],
  diagramModelData: { prop: 'value' },
  skipsDiagramUpdate: false,

  // Palette state props
  paletteNodeData: [
    { key: 'PaletteNode1', color: 'firebrick' },
    { key: 'PaletteNode2', color: 'blueviolet' }
  ]
}; // end state object

public diagramDivClassName: string = 'myDiagramDiv';
public paletteDivClassName = 'myPaletteDiv';

// initialize diagram / templates
public initDiagram(): go.Diagram {
  const $ = go.GraphObject.make;
  const dia = $(go.Diagram, {
    'undoManager.isEnabled': true,
    model: new go.GraphLinksModel(
      {
        nodeKeyProperty: 'id',
        linkKeyProperty: 'key' // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
      }
    )
  });

  // define the Node template
  dia.nodeTemplate =
    $(go.Node, 'Auto',
        $(go.Shape, 'RoundedRectangle', { stroke: null },
          new go.Binding('fill', 'color')
        ),
        $(go.TextBlock, { margin: 8, editable: true },
          new go.Binding('text').makeTwoWay())
      );
  return dia;
}

/**
 * Handle GoJS model changes, which output an object of data changes via Mode.toIncrementalData.
 * This method should iterate over thoe changes and update state to keep in sync with the FoJS model.
 * This can be done with any preferred state management method, as long as immutability is preserved.
 */
public diagramModelChange = function(changes: go.IncrementalData) {
  console.log(changes);
  // see gojs-angular-basic for an example model changed handler that preserves immutability
  // when setting state, be sure to set skipsDiagramUpdate: true since GoJS already has this update
};

public initPalette(): go.Palette {
  const $ = go.GraphObject.make;
  const palette = $(go.Palette);

  // define the Node template
  palette.nodeTemplate =
    $(go.Node, 'Auto',
      $(go.Shape, 'RoundedRectangle', { stroke: null },
        new go.Binding('fill', 'color')
      ),
      $(go.TextBlock, { margin: 8 },
        new go.Binding('text', 'key'))
    );

  palette.model = new go.GraphLinksModel(
    {
      linkKeyProperty: 'key'  // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
    });

  return palette;
}

  

}
