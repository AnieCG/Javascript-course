import { getHtmlPageName } from "../../../src/modules/header/getHtmlPageName";





test( "Debería retornar el nombre de la página html", ()=>{

    const filePath = "src/pages/home.html";
    const expected = "home.html";
    
    const result = getHtmlPageName( filePath );
  
    expect( result ).toBe( expected );
    expect( getHtmlPageName( "/index.html") ).toBe( "index.html" );






});