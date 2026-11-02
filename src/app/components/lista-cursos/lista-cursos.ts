import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatIconModule],
  selector: 'app-lista-cursos',
  styleUrl: './lista-cursos.css',
  templateUrl: './lista-cursos.html',
})

export class ListaCursos {

  cursos = [
    {
      id: 1,
      semestre: 7,
      paralelo: 'SOF-S-MA-7-1',
      jornada: 'Matutino',
      materia: 'Calidad del Software',
      docente: 'Ing. Castro Aguilar Gilberto Fernando',
      creditos: 3,
      modalidad: 'Virtual',
      periodo: '2026 - 2027 CII'
    },
    {
      id: 2,
      semestre: 7,
      paralelo: 'SOF-S-MA-7-1',
      jornada: 'Matutino',
      materia: 'Desarrollo de Aplicaciones Web Avanzado',
      docente: 'Ing. Cedeño Rodriguez Juan Carlos',
      creditos: 3,
      modalidad: 'Virtual',
      periodo: '2026 - 2027 CII'
    },
    {
      id: 3,
      semestre: 7,
      paralelo: 'SOF-S-MA-7-1',
      jornada: 'Matutino',
      materia: 'Inteligencia de Negocios',
      docente: 'Ing. Galarza Soledispa Maria Isabel',
      creditos: 3,
      modalidad: 'Virtual',
      periodo: '2026 - 2027 CII'
    },
    {
      id: 4,
      semestre: 8,
      paralelo: 'SOF-S-MA-8-1',
      jornada: 'Matutino',
      materia: 'Verificación y Validación de Software',
      docente: 'Ing. Mendoza Moran Veronica del Rocio',
      creditos: 3,
      modalidad: 'Virtual',
      periodo: '2026 - 2027 CII'
    },
    {
      id: 5,
      semestre: 8,
      paralelo: 'SOF-S-MA-8-1',
      jornada: 'Matutino',
      materia: 'Desarrollo de Aplicaciones Móviles',
      docente: 'Ing. Charco Aguirre Jorge Luis',
      creditos: 3,
      modalidad: 'Virtual',
      periodo: '2026 - 2027 CII'
    },
    {
      id: 6,
      semestre: 8,
      paralelo: 'SOF-S-MA-8-1',
      jornada: 'Matutino',
      materia: 'Seguridad Informática',
      docente: 'Ing. Garcia Enriquez Myriam Cecilia',
      creditos: 3,
      modalidad: 'Virtual',
      periodo: '2026 - 2027 CII'
    }
  ];

}
