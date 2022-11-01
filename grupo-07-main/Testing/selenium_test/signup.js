const { Builder, By, Key } = require("selenium-webdriver");
const should = require("chai").should();

describe("header tests (SIGNUP)", function () {
  //it
  it("boton header Iniciar Sesión (SIGNUP)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Crear Cuenta
    await driver.findElement(By.className("primary-button")).click();

    //Obtenemos el texto del boton Iniciar Sesión
    let textIniciarSesionBtn = await driver
      .findElement(By.xpath("//button[last()]"))
      .getText();

    //Validamos
    textIniciarSesionBtn.should.equal("Iniciar Sesión");

    //Cerramos la página
    await driver.close();
  });

  it("Click en el logo nos lleva al home (SIGNUP)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Iniciar Sesión
    await driver.findElement(By.xpath("//button[last()]")).click();

    //Cliqueamos en en logo de la página
    await driver.findElement(By.className("header--main-logo")).click();

    //Validamos
    let urlLogo = await driver.getCurrentUrl();

    urlLogo.should.equal(
      "http://localhost:3000/home"
    );

    //Cerramos la página
    await driver.close();
  });
});

describe("main test (SIGNUP)", function () {
  it("Cantidad de inputs en form (SIGNUP)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Crear Cuenta
    await driver.findElement(By.className("primary-button")).click();

    //obtenemos todos los inputs
    let cantInputs = await driver.findElements(By.tagName("input"));

    //Validamos
    cantInputs.length.should.equal(5);

    //Cerramos la página
    await driver.close();
  });

  it("Ingresar sin ningun dato (SIGNUP)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Crear Cuenta
    await driver.findElement(By.className("primary-button")).click();

    //clickeamos en Registrarse
    await driver
      .findElement(By.className("registrationForm--form-button"))
      .click();

    //Validamos que seguimos en sign-up
    let urlActual = await driver.getCurrentUrl();
    urlActual.should.equal(
      "http://localhost:3000/signup"
    );

    //Cerramos la página
    await driver.close();
  });

  it("Ingresar solo con nombre (SIGNUP)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Crear Cuenta
    await driver.findElement(By.className("primary-button")).click();

    //escribimos un nombre
    await driver.findElement(By.name("name")).sendKeys("nombre", Key.RETURN);

    //Validamos que seguimos en sign-up
    let urlActual = await driver.getCurrentUrl();
    urlActual.should.equal(
      "http://localhost:3000/signup"
    );

    //Cerramos la página
    await driver.close();
  });

  it("Ingresar solo con apellido (SIGNUP)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Crear Cuenta
    await driver.findElement(By.className("primary-button")).click();

    //escribimos un apellido
    await driver
      .findElement(By.name("surname"))
      .sendKeys("apellido", Key.RETURN);

    //Validamos que seguimos en el sign-up
    let urlActual = await driver.getCurrentUrl();
    urlActual.should.equal(
      "http://localhost:3000/signup"
    );

    //Cerramos la página
    await driver.close();
  });

  it("Ingresar solo con email (SIGNUP)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Crear Cuenta
    await driver.findElement(By.className("primary-button")).click();

    //escribimos un email
    await driver
      .findElement(By.name("email"))
      .sendKeys("mail@sumail.com", Key.RETURN);

    //Validamos que seguimos en el sign-up
    let urlActual = await driver.getCurrentUrl();
    urlActual.should.equal(
      "http://localhost:3000/signup"
    );

    //Cerramos la página
    await driver.close();
  });

  it("Ingresar solo con contraseña (SIGNUP)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Crear Cuenta
    await driver.findElement(By.className("primary-button")).click();

    //escribimos una contraseña
    await driver
      .findElement(By.name("password"))
      .sendKeys("Password123", Key.RETURN);

    //Validamos que seguimos en el sign-up
    let urlActual = await driver.getCurrentUrl();
    urlActual.should.equal(
      "http://localhost:3000/signup"
    );

    //Cerramos la página
    await driver.close();
  });

  it("Ingresar solo con contraseña y su confirmación (SIGNUP)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Crear Cuenta
    await driver.findElement(By.className("primary-button")).click();

    //escribimos una contraseña
    await driver
      .findElement(By.name("password"))
      .sendKeys("Password123");

    //repetimos la contraseña 
    await driver
      .findElement(By.name("confirmPassword"))
      .sendKeys("Password123", Key.RETURN); 

    //Validamos que seguimos en el sign-up
    let urlActual = await driver.getCurrentUrl();
    urlActual.should.equal(
      "http://localhost:3000/signup"
    );

    //Cerramos la página
    await driver.close();
  });

  it("Ingresar solo confirmacion de contraseña (SIGNUP)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Crear Cuenta
    await driver.findElement(By.className("primary-button")).click();

    //escribimos una confirmación de contraseña
    await driver
      .findElement(By.name("confirmPassword"))
      .sendKeys("Password123", Key.RETURN); 

    //Validamos que seguimos en el sign-up
    let urlActual = await driver.getCurrentUrl();
    urlActual.should.equal(
      "http://localhost:3000/signup"
    );

    //Cerramos la página
    await driver.close();
  });

  it("Redireccion '¿Ya tienes cuenta?' (SIGNUP)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Crear Cuenta
    await driver.findElement(By.className("primary-button")).click();

    //clickeamos en "ENTRAR AQUI", en la sección "¿Ya tienes cuenta?"
    await driver
      .findElement(By.className("link"))
      .click(); 

    //Validamos que nos fuimos al login
    let urlActual = await driver.getCurrentUrl();
    urlActual.should.equal(
      "http://localhost:3000/login"
    );

    //Cerramos la página
    await driver.close();
  });
});
