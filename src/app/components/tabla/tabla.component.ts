import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Student } from '../../models/student/student.module';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [MatTableModule, MatCheckboxModule],
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  
  // Definimos el listado de alumnos
  students: Student[] = [
    { id: 1, nombre: 'Juan', apellidos: 'Pérez', nif: '12345678A', edad: 20, curso: '1º DAM' },
    { id: 2, nombre: 'Ana', apellidos: 'López', nif: '87654321B', edad: 22, curso: '2º DAM' },
    { id: 3, nombre: 'Pedro', apellidos: 'Gómez', nif: '45612378C', edad: 21, curso: '1º DAW' }
  ];

  // Definimos las columnas disponibles
  availableColumns = [
    { value: 'id', viewValue: 'Nº de Alumno' },
    { value: 'nombre', viewValue: 'Nombre' },
    { value: 'apellidos', viewValue: 'Apellidos' },
    { value: 'nif', viewValue: 'NIF' },
    { value: 'edad', viewValue: 'Edad' },
    { value: 'curso', viewValue: 'Curso Matriculado' }
  ];

  // Columnas que se muestran por defecto
  displayedColumns: string[] = this.availableColumns.map(col => col.value);


  // Método para mostrar/ocultar columnas basado en el estado del checkbox
  
  setCol(column: string, checked: boolean): void {
    if (checked) {
      // Si el checkbox está marcado, añade la columna
      if (!this.displayedColumns.includes(column)) {
        this.displayedColumns.push(column);
      }
    } else {
      // Si el checkbox está desmarcado, quita la columna
      const index = this.displayedColumns.indexOf(column);
      if (index >= 0) {
        this.displayedColumns.splice(index, 1);
      }
    }
  }
}
