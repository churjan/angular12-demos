import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NzFormatBeforeDropEvent } from 'ng-zorro-antd/tree';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.scss']
})
export class TreeNodeComponent implements OnInit {

  constructor(private message: NzMessageService) { }

  ngOnInit(): void {
  }
  nodes = [
    {
      title: '分组a',
      key: '100',
      expanded: true,
      children: [
        { title: '任务aa', key: '1001', expanded: true },
        { title: '任务ab', key: '1002', expanded: true },
      ],
    },
    {
      title: '分组b',
      key: '200',
      expanded: true,
      children: [
        { title: '任务ba', key: '2001', expanded: true },
        { title: '任务bb', key: '2002', expanded: true },
      ],
    },
  ];
  beforeDrop(arg: NzFormatBeforeDropEvent): Observable<boolean> {
    console.log(arg)
    if(arg.dragNode.level===0){
      if(arg.node.level!==arg.dragNode.level){
        this.message.error('分组不能移动到任务')
        return of(false);
      }else{
        return of(true);
      }
    }else{
      if(arg.node.level===0){
        this.message.error('任务不能移动到分组')
        return of(false);
      }else{
      return of(true);
      }
    }
  }
  onClick(event){
    console.log(event)
  }

  onNodeEdit(node,e){
    e.stopPropagation()
  }

  onNodeAdd(node,e){
    e.stopPropagation()
  }

  onNodeDelete(node,e){
    e.stopPropagation()
  }

  onReturnTooltipText(level,type){
    const newLevel=level>=2?2:level
    const msgMap={
      edit:{
        0:'编辑分组',
        1:'编辑任务',
        2:'编辑子任务'
      },
      add:{
        0:'在分组下添加任务',
        1:'在任务下添加子任务',
        2:'在子任务下添加子任务'
      },
      delete:{
        0:'删除分组',
        1:'删除任务',
        2:'删除子任务'
      }
    }
    return msgMap[type][newLevel]
  }
}
