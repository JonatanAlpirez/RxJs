import { Observable } from "rxjs";  


// Objeto que emite Informacion. 
const observable$ = new Observable<number>( subscriber => {

  subscriber.next(1); //primera emisión. 
  subscriber.next(2);
  subscriber.next(3);

  setTimeout( () => {
    subscriber.next(4);
    subscriber.next(5);
  }, 1000);  

  subscriber.complete(); // deja de emitir

});



// Observer -> Objeto que se subscribe a observable.

/* observable$.subscribe( //@deprecated (This deprecation was introduced in RxJS 6.4.)

  //callback next function
  res => {console.log(res);},

  //callback error function
  err => {console.log(err)},

  //callback complete function
  () => {console.log('completed')}

); */

//suggested change
observable$.subscribe({ 
  next: res => {
    console.log(res)
  },
  //next: console.log //es lo mismo que la función de arriba
  error: err => {
    console.log(err)
  },
  complete: () => {
    console.log('completed')
  }
});

 







