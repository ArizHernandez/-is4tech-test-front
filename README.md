# is4tech-test-front

## Pasos importates por hacer para que el programa corra correctamente:

- Instalar los node_modules con `npm install`

## Demo

## Preview

![image](https://user-images.githubusercontent.com/37966712/166085731-f01bed71-08a1-4906-afb0-fb92995a8f93.png)

---

## Como cambiar los servicios para poder trabajar en forma local sin necesidad del back

- En el login hay que hacer un pequeño cambio en el archivo ts que esta en `src/app/pages/public/login/login.component.ts` tienes que cambiar el `this.authService.login` por `this.authService.fakeLogin`
  ![image](https://user-images.githubusercontent.com/37966712/166181657-d0bdef36-bb66-4d72-92e4-f594773bb5a7.png)
- En los distribuidores se debe de hacer un cambio tambien en el `src\app\pages\private\distributors` tienes que cambiar en tres partes, en el constructor tienes que cambiar el `distributorsService.getDistributors` por `distributorsService.getFakeDistributors`
  ![image](https://user-images.githubusercontent.com/37966712/166181971-e00c7780-eca5-4a5a-8e1f-9d8932b86ce3.png)

  - tambien en el `delete` hay que cambiar el `this.distributorsService.deleteDistributor` por `this.distributorsService.deleteDistributorFake`

    ![image](https://user-images.githubusercontent.com/37966712/166181819-be9c44f7-fd37-4147-be39-dc31158251f3.png)

  - En el formulario (`src\app\pages\private\distributors\form`) hay que hacer 2 cambios en el onSubmit:

    - en el `this.distributorsService.putDistributor` por `this.distributorsService.putDistributor`
    - en el `this.distributorsService.postDistributor` por `this.distributorsService.postDistributorFake`

    ![image](https://user-images.githubusercontent.com/37966712/166182384-60499863-2a6c-4a85-8f0b-a24d3b428666.png)

---

## Mas informacion y herramientas utilizadas:

- **Angular** ( version 13 )
- **Angular Material** ( version 13 )
- **Transloco** ( version 4 )
