import { Component, signal } from '@angular/core';
import { Encabezado } from './components/encabezado/encabezado';
import { ListaCursos } from './components/lista-cursos/lista-cursos';

@Component({
  imports: [Encabezado, ListaCursos],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('panel-de-cursos');
}
