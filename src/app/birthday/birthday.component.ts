import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Definición de la interfaz Cumpleanios
interface Cumpleanios {
  nombre: string;
  fecha: Date;
  isToday?: boolean;
}

@Component({
  selector: 'app-birthday',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './birthday.component.html',
  styleUrl: './birthday.component.css'
})
export class BirthdayComponent implements OnInit{

  private cumpleanios: Cumpleanios[] = [
    { nombre: 'Gustavo Astudillo', fecha: new Date('2024-01-05') },
    { nombre: 'Facundo Brissio', fecha: new Date('2024-01-11') },
    { nombre: 'Paulo Passini', fecha: new Date('2024-01-27') },
    { nombre: 'Nicolas Ragazzini', fecha: new Date('2024-02-11') },
    { nombre: 'Leonel Pacheco', fecha: new Date('2024-02-21') },
    { nombre: 'Fernando Herrera', fecha: new Date('2024-02-24') },
    { nombre: 'Guillermo Martinez', fecha: new Date('2024-04-17') },
    { nombre: 'Nadia Astrada', fecha: new Date('2024-05-13') },
    { nombre: 'Nicolas Perez', fecha: new Date('2024-05-28') },
    { nombre: 'Daniela Marioni', fecha: new Date('2024-06-13') },
    { nombre: 'Nicolas Gomez', fecha: new Date('2024-07-11') },
    { nombre: 'Analia Dionicio', fecha: new Date('2024-07-31') },
    { nombre: 'Gustavo Arce', fecha: new Date('2024-08-08') },
    { nombre: 'Paula Camacho', fecha: new Date('2024-08-09') },
    { nombre: 'Marcos Perez', fecha: new Date('2024-08-25') },
    { nombre: 'Micaela Cariddi', fecha: new Date('2024-10-03') },
    { nombre: 'Carolina Guevara', fecha: new Date('2024-10-16') },
    { nombre: 'Mariano Schulz', fecha: new Date('2024-10-20') },
    { nombre: 'Araceli Casas', fecha: new Date('2024-11-14') },
    { nombre: 'Gabriel Nesteruk', fecha: new Date('2024-11-21') },
    { nombre: 'Enzo Escudero', fecha: new Date('2024-12-23') }
  ];
  

  public cumpleaniosMesActual: Cumpleanios[] = [];
  public currentMonth = new Date().getMonth();
  public currentMonthName = new Date().toLocaleString('es-ES', { month: 'long' });

  ngOnInit(): void {
    this.actualizarCumpleaniosMes();
  }

  actualizarCumpleaniosMes() {
    const today = new Date();
    this.cumpleaniosMesActual = this.cumpleanios
      .filter(c => c.fecha.getMonth() === this.currentMonth)
      .map(c => ({
        ...c,
        isToday: c.fecha.getDate() === today.getDate() && c.fecha.getMonth() === today.getMonth()
      }));
  }

  mesAnterior() {
    this.currentMonth = (this.currentMonth - 1 + 12) % 12;
    this.currentMonthName = new Date(0, this.currentMonth).toLocaleString('es-ES', { month: 'long' });
    this.actualizarCumpleaniosMes();
  }

  mesSiguiente() {
    this.currentMonth = (this.currentMonth + 1) % 12;
    this.currentMonthName = new Date(0, this.currentMonth).toLocaleString('es-ES', { month: 'long' });
    this.actualizarCumpleaniosMes();
  }
}
