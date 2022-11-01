const { Builder, By} = require("selenium-webdriver");
const should = require("chai").should();

describe("header tests (HOME)", function () {
  //it
  it("texto correcto en boton login (HOME)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //Obtenemos el texto del boton Iniciar Sesión
    let textIniciarSesiónBtn = await driver
      .findElement(By.xpath("//button[last()]"))
      .getText();

    //Validamos
    textIniciarSesiónBtn.should.equal("Iniciar Sesión");

    //Cerramos la página
    await driver.close();
  });

  it("boton login nos lleva al login (HOME)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //clickeamos en Iniciar Sesión
    await driver.findElement(By.xpath("//button[last()]")).click();

    //Validamos
    let url = await driver.getCurrentUrl();
    url.should.equal(
      "http://localhost:3000/login"
    );

    //Cerramos la página
    await driver.close();
  });

  it("texto correcto en boton crear cuenta (HOME)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //Obtenemos el texto del boton Crear cuenta
    let textRegistrarseBtn = await driver
      .findElement(By.className("primary-button"))
      .getText();

    //Validamos
    textRegistrarseBtn.should.equal("Crear Cuenta");

    //Cerramos la página
    await driver.close();
  });

  it("boton crear cuenta nos lleva a registrar (HOME)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //click en boton crear cuenta
    let textRegistrarseBtn = await driver
      .findElement(By.className("primary-button"))
      .click();

    //Validamos
    let url = await driver.getCurrentUrl();
    url.should.equal(
      "http://localhost:3000/signup"
    );

    //Cerramos la página
    await driver.close();
  });

  it("Click en el logo nos deja en el home (HOME)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

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

describe("buscador tests (HOME)", function () {
  it
  it("texto correcto en titulo buscador (HOME)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //Obtenemos el texto del titulo del buscador
    let tituloBuscador = await driver
      .findElement(By.tagName("h1"))
      .getText();

    //Validamos
    tituloBuscador.should.equal("Busca las últimas ofertas en Autos");

    //Cerramos la página
    await driver.close();
  });

  it("validamos que exista un filtro por ciudad (HOME)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //Obtenemos el filtro
    let filtroCiudad = await driver.findElement(By.className("searchbar__control css-1s2u09g-control"));

    //Validamos
    let validado = false;
    if(filtroCiudad != null){
      validado = true;
    }
    validado.should.equal(true);

    //Cerramos la página
    await driver.close();
  });

  it("validamos que exista un calendario (HOME)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //Obtenemos el filtro
    let calendario= await driver.findElement(By.className("DateRangePickerInput DateRangePickerInput_1 DateRangePickerInput__withBorder DateRangePickerInput__withBorder_2"));

    //Validamos
    let validado = false;
    if(calendario != null){
      validado = true;
    }
    validado.should.equal(true);

    //Cerramos la página
    await driver.close();
  });

  it("validamos que exista un boton buscar (HOME)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //Obtenemos el filtro
    let buscarBtn= await driver.findElement(By.className("primary-button browser--form-button"));

    //Validamos
    let validado = false;
    if(buscarBtn != null){
      validado = true;
    }
    validado.should.equal(true);

    //Cerramos la página
    await driver.close();
  });

  it("El filtro ciudad inicia sin selección (HOME)", async function () {
    //Abrimos el navegador
    let driver = await new Builder().forBrowser("chrome").build();

    //Vamos a la página
    await driver.get(
      "http://localhost:3000/"
    );

    //Obtenemos el texto del filtro
    let textoPlaceHolder= await driver.findElement(By.id("react-select-2-placeholder")).getText();

    //Validamos
    textoPlaceHolder.should.equal("Buscar por ciudad");

    //Cerramos la página
    await driver.close();
  });

});

