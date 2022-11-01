const { Builder, By, Key } = require("selenium-webdriver");
const should = require("chai").should();

describe("header tests (LOGIN)", function () {
  //it
  it("boton header Crear Cuenta (LOGIN)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Iniciar Sesión
    await driver.findElement(By.xpath("//button[last()]")).click();

    //Obtenemos el texto del boton Crear cuenta
    let textRegistrarseBtn = await driver
      .findElement(By.className("primary-button"))
      .getText();

    //Validamos
    textRegistrarseBtn.should.equal("Crear Cuenta");

    //Cerramos la página
    await driver.close();
  });

  it("Click en el logo nos lleva al home (LOGIN)", async function () {
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

describe("main test (LOGIN)", function () {
  it("Cantidad de inputs en form (LOGIN)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Iniciar Sesión
    await driver.findElement(By.xpath("//button[last()]")).click();

    //obtenemos todos los inputs
    let cantInputs = await driver.findElements(By.tagName("input"));

    //Validamos
    cantInputs.length.should.equal(2);

    //Cerramos la página
    await driver.close();
  });

  it("Ingresar sin ningun dato  (LOGIN)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Iniciar Sesión
    await driver.findElement(By.xpath("//button[last()]")).click();

    //clickeamos en iniciar sesión
    await driver.findElement(By.className("loginForm--form-button")).click();

    //Validamos que seguimos en el login
    let urlActual = await driver.getCurrentUrl();
    urlActual.should.equal(
      "http://localhost:3000/login"
    );

    //Validamos que existen 2 mensajes de error
    let mensajeErrorMail = await driver
      .findElement(By.className("errors"))
      .getText();
    mensajeErrorMail.should.equal("El email es requerido");
    let mensajeErrorPass = await driver
      .findElement(By.xpath("//small[last()]"))
      .getText();
    mensajeErrorPass.should.equal("La contraseña es requerida");

    //Cerramos la página
    await driver.close();
  });

  it("Ingresar email sin contraseña (LOGIN)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Iniciar Sesión
    await driver.findElement(By.xpath("//button[last()]")).click();

    //escribimos un Email sin una contraseña
    await driver
      .findElement(By.name("email"))
      .sendKeys("email@gmail.com", Key.RETURN);

    //Validamos que seguimos en el login
    let urlActual = await driver.getCurrentUrl();
    urlActual.should.equal(
      "http://localhost:3000/login"
    );

    //Validamos que existe un mensaje de error
    let mensajeError = await driver
      .findElement(By.xpath("//small[last()]"))
      .getText();
    mensajeError.should.equal("La contraseña es requerida");

    //Cerramos la página
    await driver.close();
  });

  it("Ingresar contraseña sin email (LOGIN)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Iniciar Sesión
    await driver.findElement(By.xpath("//button[last()]")).click();

    //escribimos una contraseña sin un email
    await driver
      .findElement(By.name("pass"))
      .sendKeys("Contrasenia123", Key.RETURN);

    //Validamos que seguimos en el login
    let urlActual = await driver.getCurrentUrl();
    urlActual.should.equal(
      "http://localhost:3000/login"
    );

    //Validamos que existe un mensaje de error
    let mensajeError = await driver
      .findElement(By.className("errors"))
      .getText();
    mensajeError.should.equal("El email es requerido");

    //Cerramos la página
    await driver.close();
  });

  it("Redirección '¿No estas registrado?' (LOGIN)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Iniciar Sesión
    await driver.findElement(By.xpath("//button[last()]")).click();

    //clickeamos en "ENTRAR AQUI", en la sección "¿No estás registrado?"
    await driver
      .findElement(By.className("link"))
      .click();

    //Validamos que nos fuimos a sign-up
    let urlActual = await driver.getCurrentUrl();
    urlActual.should.equal(
      "http://localhost:3000/signup"
    );

    //Cerramos la página
    await driver.close();
  });
});
