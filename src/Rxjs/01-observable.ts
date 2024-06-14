import { Observable, Observer } from "rxjs";

// Observable -> Objeto que emite Información.
const observable$ = new Observable<number>((subscriber) => {
  subscriber.next(1); //primera emisión.
  subscriber.next(2);
  subscriber.next(3);

  setTimeout(() => {
    subscriber.next(4);
    subscriber.next(5);
  }, 1000);

  subscriber.complete(); // deja de emitir
});

// Observer -> Objeto que se subscribe a observable.

//@deprecated (This deprecation was introduced in RxJS 6.4.)
observable$.subscribe(
  //callback next function
  (res) => {
    console.log(res);
  },

  //callback error function
  (err) => {
    console.log(err);
  },

  //callback complete function
  () => {
    console.log("completed from observer as object deprecated");
  }
);

//suggested change:
observable$.subscribe({
  next: (res) => {
    console.log(res);
  },
  //next: console.log //es lo mismo que la función de arriba

  error: (err) => {
    console.log(err);
  },

  complete: () => {
    console.log("completed from observer as object");
  },
});

//observer as argument
const observer: Observer<any> = {
  next: (value) => console.log("next:", value),
  error: (error) => console.warn("error:", error),
  complete: () => console.info("completed from observer as argument"),
};

observable$.subscribe(observer); //se puede pasar el observer como argumento.
