import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FormsComponent } from "./forms/forms.component";
import { HandbookComponent } from "./handbook/handbook.component";
import { MetricsComponent } from "./metrics/metrics.component";
import { ProgramationComponent } from "./programation/programation.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { BirthdayComponent } from "./birthday/birthday.component";
import { PerritoComponent } from "./perrito/perrito.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomeComponent, FormsComponent, HandbookComponent, MetricsComponent, ProgramationComponent, ContactsComponent, BirthdayComponent, PerritoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'siteAstudillo';

  currentSection: string = 'inicio';
  isExiting: boolean = false;

  showSection(section: string) {
    // Si la sección es la misma, no hace nada
    if (this.currentSection === section) return;

    // Activa la salida y después de un tiempo cambia la sección
    this.isExiting = true;
    setTimeout(() => {
      this.currentSection = section;
      this.isExiting = false;
    }, 150); // Cambia el tiempo según la duración de tu animación de salida
  }


  @HostListener('document:mousemove', ['$event'])
onMouseMove(event: MouseEvent) {
  const leftEye = document.getElementById('leftEye') as HTMLElement;
  const rightEye = document.getElementById('rightEye') as HTMLElement;

  if (leftEye && rightEye) {
    // Seleccionamos los pseudoelementos '::after' de los ojos para mover las pupilas
    const leftPupil = window.getComputedStyle(leftEye, '::after');
    const rightPupil = window.getComputedStyle(rightEye, '::after');

    const catContainer = document.querySelector('.cartoon') as HTMLElement;
    const rect = catContainer.getBoundingClientRect();

    // Calcula la posición relativa del mouse con respecto a la caricatura
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    // Limita el movimiento de las pupilas
    const maxMovement = 25; // Ajusta este valor según el tamaño de las pupilas
    const angle = Math.atan2(y, x);

    const moveX = Math.cos(angle) * maxMovement;
    const moveY = Math.sin(angle) * maxMovement;

    // Actualiza la posición de las pupilas de ambos ojos
    leftEye.style.setProperty('--pupil-move-x', `${moveX}px`);
    leftEye.style.setProperty('--pupil-move-y', `${moveY}px`);

    rightEye.style.setProperty('--pupil-move-x', `${moveX}px`);
    rightEye.style.setProperty('--pupil-move-y', `${moveY}px`);
  }
}

}
