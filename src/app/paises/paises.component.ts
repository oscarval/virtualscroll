import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  public paises: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(paises => {
      this.paises = paises;
    });
  }

  public drop(event: CdkDragDrop<any>): void {
    moveItemInArray(this.paises, event.previousIndex, event.currentIndex);
  }

}
