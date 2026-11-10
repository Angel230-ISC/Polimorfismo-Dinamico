
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  respuestas = {
    pregunta1: '',
    pregunta2: '',
    codigo1: ['', '', '', ''],
    codigo2: ['', '', '']
  };

  calificacion: number | null = null;
  evaluado = false;

  evaluar(): void {
    let puntos = 0;

    // Pregunta 1: 25 puntos
    if (this.respuestas.pregunta1 === 'b') {
      puntos += 25;
    }

    // Pregunta 2: 25 puntos
    if (this.respuestas.pregunta2 === 'a') {
      puntos += 25;
    }

    // Ejercicio 3: 25 puntos
    const correctasCodigo1 = [
      'class',
      'def',
      'print',
      'def'
    ];

    const aciertos1 = this.respuestas.codigo1.filter(
      (respuesta, i) => respuesta === correctasCodigo1[i]
    ).length;

    puntos += (aciertos1 / 4) * 25;

    // Ejercicio 4: 25 puntos
    const correctasCodigo2 = [
      'for',
      'animal',
      'hacer_sonido'
    ];

    const aciertos2 = this.respuestas.codigo2.filter(
      (respuesta, i) => respuesta === correctasCodigo2[i]
    ).length;

    puntos += (aciertos2 / 3) * 25;

    this.calificacion = Math.round(puntos);
    this.evaluado = true;
  }

  reiniciar(): void {
    this.respuestas = {
      pregunta1: '',
      pregunta2: '',
      codigo1: ['', '', '', ''],
      codigo2: ['', '', '']
    };

    this.calificacion = null;
    this.evaluado = false;
  }
}
