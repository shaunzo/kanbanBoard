# How to use this component

Import the module into the module you are using, mostly it would be the App Module

```
import { ModalModule } from './modal/modal.module';
```

Import the service into the component from which you want to call the modal
```
import { ModalService } from '../modal/services/modal.service';
```
Then inject our service into our component
```
constructor(private modal: ModalService) { }
```

## Using the component

You create a method in your component and call the *open()* method in the modal service:

###open() params:
@param *string | TemplateRef | Component - string*
@param *Data to pass into modal - any*
@param *width of modal - number*


```
  myMethod() {
    const ref = this.modal.open('This is a string modal test' , null, 400);
    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }
```

In your template add your method:
```
<button (click)="myMethod()">Call Modal</button>
```

## Content Options
You can pass content into this modal in three ways:

- ***Via a string***
```
  myMethod() {
    const ref = this.modal.open('This is how you pass content via a string' , null, 400);
    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }
```

- ***Via a TemplateRef***
In your component template file:
```
<button (click)="myMethod(tpl)" data-test="addTaskBoard">Show Modal</button>

<ng-template #tpl>
  <div class="modal-card">
  <header class="modal-card-head">
   <h3>Modal Heading</h3>
  </header>
  <section class="modal-card-body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit suscipit labore pariatur aliquid expedita odio harum. Saepe sit dolorem, accusamus quaerat expedita earum, eligendi itaque incidunt possimus eius quo obcaecati.
  </section>
  <footer class="modal-card-foot">
    Modal Footer
  </footer>
 </div>
</ng-template> 
```

In your component/ts file:
```
  myMethod(tplName) {
    const ref = this.modal.open(tplName , null, 400);
    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }

```

- ***Via a Component***
In your template file:
```
<button (click)="myMethod()" data-test="addTaskBoard">Show Modal</button>
```

In your component file:
```
import { YOUR_COMPONENT } from 'YOUR-COMPONENT-LOCATION';

  myMethod() {
    const ref = this.modal.open(YOUR-COMPONENT , null, 400);
    ref.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }

```
