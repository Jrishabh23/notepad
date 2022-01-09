import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { ListNoteComponent } from './components/list-note/list-note.component';

const routes: Routes = [
  { path: '', redirectTo: 'add-note', pathMatch: 'full' },
  { path: 'add-note', component: AddNoteComponent },
  { path: 'add-note/:id', component: AddNoteComponent },
  { path: 'list-note', component: ListNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
