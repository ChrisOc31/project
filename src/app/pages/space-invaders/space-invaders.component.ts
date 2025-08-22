import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-space-invaders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './space-invaders.component.html',
  styleUrl: './space-invaders.component.css',
})
export class SpaceInvadersComponent {
  @ViewChildren('alienSvg') alienSvgs!: QueryList<ElementRef>;

  ngOnInit() {
    // this.moveAliens();
  }

  constructor() {
    setInterval(() => {
      this.updateBullets();
    }, 16); // about 60 times per second
  }

  // SHIP
  shipPosition = window.innerWidth / 2;

  // BULLET
  bullets: { x: number; y: number }[] = [];
  spacePressed = false;

  //ALIEN
  alienX = 0;

  // KEY DOWN EVENTS
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const step = 5;
    const shipWidth = 64;
    const screenWidth = window.innerWidth;
    if (event.key === 'ArrowLeft') {
      this.shipPosition = Math.max(0, this.shipPosition - step);
    } else if (event.key === 'ArrowRight') {
      this.shipPosition = Math.min(
        screenWidth - shipWidth,
        this.shipPosition + step
      );
    } else if (event.key === ' ') {
      if (!this.spacePressed) {
        // Add a new bullet only if space wasn't pressed before
        this.bullets.push({
          x: this.shipPosition - 2,
          y: window.innerHeight - 100,
        });
        this.spacePressed = true;
      }
    }
  }

  // REST BULLETS WHEN SPACE IS REALEASED
  @HostListener('window:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    if (event.key === ' ') {
      setTimeout(() => {
        this.spacePressed = false;
      }, 1000); // delay 300 ms before allowing next bullet
    }
  }

  updateBullets() {
    // Get aliens as array
    const aliensArray = this.alienSvgs.toArray();

    this.bullets = this.bullets
      .map((bullet) => ({ ...bullet, y: bullet.y - 5 })) // move bullet up
      .filter((bullet) => {
        if (bullet.y <= 0) return false; // remove if off screen

        // Check collision with each alien
        for (let i = 0; i < aliensArray.length; i++) {
          const alienElem = aliensArray[i].nativeElement;
          const rect = alienElem.getBoundingClientRect();

          // Simple rectangle collision check
          if (
            bullet.x >= rect.left &&
            bullet.x <= rect.right &&
            bullet.y >= rect.top &&
            bullet.y <= rect.bottom
          ) {
            // Collision happened, remove alien visually
            alienElem.classList.add('d-none');
            return false; // remove this bullet too
          }
        }
        return true; // keep bullet if no collision
      });
  }

  moveAliens() {
    let direction = 1;
    const step = 2;

    setInterval(() => {
      this.alienX += step * direction;

      if (this.alienX >= 300) {
        direction = -1; // reverse to left
      } else if (this.alienX <= -300) {
        direction = 1; // reverse to right
      }
    }, 50);
  }
}
