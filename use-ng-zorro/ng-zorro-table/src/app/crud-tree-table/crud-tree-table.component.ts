import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-tree-table',
  templateUrl: './crud-tree-table.component.html',
  styleUrls: ['./crud-tree-table.component.scss']
})
export class CrudTreeTableComponent implements OnInit {
  listOfMapData: any[] = [
    {
      key: `1`,
      name: 'John Brown sr.',
      age: 60,
      address: 'New York No. 1 Lake Park',
      children: [
        {
          key: `1-1`,
          name: 'John Brown',
          age: 42,
          address: 'New York No. 2 Lake Park',
        },
        {
          key: `1-2`,
          name: 'John Brown jr.',
          age: 30,
          address: 'New York No. 3 Lake Park',
          children: [
            {
              key: `1-2-1`,
              name: 'Jimmy Brown',
              age: 16,
              address: 'New York No. 3 Lake Park',
            },
          ],
        },
        {
          key: `1-3`,
          name: 'Jim Green sr.',
          age: 72,
          address: 'London No. 1 Lake Park',
          children: [
            {
              key: `1-3-1`,
              name: 'Jim Green',
              age: 42,
              address: 'London No. 2 Lake Park',
              children: [
                {
                  key: `1-3-1-1`,
                  name: 'Jim Green jr.',
                  age: 25,
                  address: 'London No. 3 Lake Park',
                },
                {
                  key: `1-3-1-2`,
                  name: 'Jimmy Green sr.',
                  age: 18,
                  address: 'London No. 4 Lake Park',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: `2`,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  mapOfExpandedData: { [key: string]: any[] } = {};

  onAddGroup(){
    this.listOfMapData.push({
        key: `3`,
        name: 'Churjan',
        age: 28,
        address: 'Taizhou. Wan Da',
    })
      this.init()
  }

  collapse(
    array: any[],
    data: any,
    $event: boolean
  ): void {
    if (!$event) {
      if (data.children) {
        data.children.forEach((d:any) => {
          const target = array.find((a) => a.key === d.key)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: any): any[] {
    const stack: any[] = [];
    const array: any[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({
            ...node.children[i],
            level: node.level! + 1,
            expand: false,
            parent: node,
          });
        }
      }
    }

    return array;
  }

  visitNode(
    node: any,
    hashMap: { [key: string]: boolean },
    array: any[]
  ): void {
    if (!hashMap[node.key]) {
      hashMap[node.key] = true;
      array.push(node);
    }
  }

  ngOnInit(): void {
    this.init()
  }
  init(){
    console.log(this.listOfMapData);
    this.listOfMapData.forEach((item) => {
      this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
    });
    console.log(this.mapOfExpandedData);
  }
  
}