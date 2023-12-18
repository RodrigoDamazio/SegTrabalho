import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-segtrab',
  templateUrl: './home-segtrab.component.html',
  styleUrls: ['./home-segtrab.component.css']
})
export class HomeSegtrabComponent {

  constructor(private router: Router) {}

   myimage: string = "assets/imagens/segtrab4.avif"
   myimage2: string = "assets/imagens/training.png"
   myimage3: string = "assets/imagens/gloves.png"
   myimage4: string = "assets/imagens/worker.png"

   navigateToColaboradores() {
    this.router.navigate(['/colaborador']);
  }
}
