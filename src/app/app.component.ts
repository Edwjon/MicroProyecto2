import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Proyect2';

  desaparecer() {
    //se que me odiaras por usar elementById... pero aun no se muy bien usar ngClass
    //asi que usare esto por ahora :(
    document.getElementById("texto").style.display = "none";
    document.getElementById("navBar").style.display = "none";
  }
}


