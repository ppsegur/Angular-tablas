import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }

export interface Student {
  id: number;
  nombre: string;
  apellidos: string;
  nif: string;
  edad: number;
  curso: string;
}
