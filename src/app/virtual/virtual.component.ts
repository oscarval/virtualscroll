import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkScrollable, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.scss']
})
export class VirtualComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) public virtualScroll: CdkVirtualScrollViewport;
  public personas = Array(500).fill(0);

  constructor() { }

  ngOnInit(): void {
  }

  public irFinal(): void {
    this.virtualScroll.scrollToIndex(500);
  }

  public irInicio(): void {
    this.virtualScroll.scrollToIndex(0);
  }

  public irCenter(): void {
    this.virtualScroll.scrollToIndex(Math.round(500 / 2));
  }

}
