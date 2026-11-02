import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatIconModule],
  selector: 'app-pie-pagina',
  styleUrl: './pie-pagina.css',
  templateUrl: './pie-pagina.html',
  standalone: true,
})
export class PiePagina {

  materia= 'Desarrollo de Aplicaciones Web Avanzadas';
  nivel= 'MAC';

}
