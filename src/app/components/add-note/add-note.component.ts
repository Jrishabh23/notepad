import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  addNoteForm: FormGroup;
  listNote: any = [];
  id: any = false;
  title: string = '';
  descriptions: string = '';
  constructor(
    private fromBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      this.id = params.id;
    });
    if (this.id) {
      this.getData();
    }
  }

  ngOnInit(): void {
    this.addNoteForm = this.fromBuilder.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }
  /**
   * Submit data
   */
  submit() {
    if (this.addNoteForm.valid) {
      this.listNote = this.getListNode();
      console.log(this.listNote, 'dddddddddddd');
      this.addNoteForm.value['update_at'] = Date();
      /**
       * Remove data
       */
      if (this.id) {
        this.listNote.splice(this.id, 1);
      }
      this.listNote.splice(0, 0, this.addNoteForm.value);
      localStorage.setItem('list', JSON.stringify(this.listNote));
      this.router.navigate(['/list-note']);
    }
  }
  /**
   * Get exist list of node
   */
  getListNode() {
    const list: any = localStorage.getItem('list');
    const lists = JSON.parse(list);
    return lists ?? [];
  }
  /**
   * get previous store data
   */
  getData() {
    const lists = this.getListNode();
    if (this.id && lists[this.id]) {
      this.title = lists[this.id]['title'];
      this.descriptions = lists[this.id]['description'];
    } else {
      this.id = false;
    }
  }
}
