import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.scss'],
})
export class ListNoteComponent implements OnInit {
  list: any = [];

  constructor(private storage: LocalstorageService) {}

  ngOnInit(): void {
    this.list = this.storage.getData();
  }

  deleteNote(i: any) {
    this.list.splice(i, 1);
    localStorage.setItem('list', JSON.stringify(this.list));
  }
}
