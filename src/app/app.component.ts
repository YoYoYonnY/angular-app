import { Component, HostListener } from '@angular/core';

class Position {
  public static ZERO: Position = new Position(0, 0);

  constructor(public x: number, public y: number) {}
}

class Card {
  constructor(public content: string = "", public position: Position = Position.ZERO) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'My1337App.exe';
  public cards = [ new Card("Do the dishes", new Position(100, 100))
          , new Card("Buy milk", new Position(200, 200))
          , new Card("Finish homework", new Position(300, 300))
          , new Card("Remember sport event!", new Position(400, 400))
          ]
  addCard() {
    this.cards.push(new Card("Click to add text", new Position(100, 100)));
  }
  mouseMove(card: Card, event: MouseEvent) {
    if (AppComponent.isMouseDown) {
      card.position.x += event.movementX;
      card.position.y += event.movementY;
    }
  }
  @HostListener('document:mousedown', ['$event'])
  mouseDown(event: KeyboardEvent) {
    AppComponent.isMouseDown = true;
  }
  @HostListener('document:mouseup', ['$event'])
  mouseUp(event: KeyboardEvent) {
    AppComponent.isMouseDown = false;
  }

  public static isMouseDown: boolean = false;
}
