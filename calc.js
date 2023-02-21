
var numeroromano = function( numero ) {
    var romano = "";
    var unidades = [ "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX" ];
    var decenas = [ "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC" ];
    var centenas = [ "", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM" ];
    var miles = [ "", "M", "MM", "MMM" ];
    var numero = numero.toString();
    var longitud = numero.length;
  
    var unidad = numero.substring( longitud - 1, longitud );
    var decena = numero.substring( longitud - 2, longitud - 1 );
    var centena = numero.substring( longitud - 3, longitud - 2 );
    var mil = numero.substring( longitud - 4, longitud - 3 );
    
    if (numero < 10) {
      romano = unidades[numero];
    } 
    if (numero >= 10 && numero < 100) {
        romano = decenas[decena] + unidades[unidad];
    } 
    if (numero >= 100 && numero < 1000) {
        romano = centenas[centena] + decenas[decena] + unidades[unidad];
    } 
    if (numero > 999 && numero < 4000) {
         romano = miles[mil] + centenas[centena] + decenas[decena] + unidades[unidad];
    }
    return romano
  }
  
  
  
  console.log(numeroromano(12));
  console.log(numeroromano(11));
  console.log(numeroromano(13));
  console.log(numeroromano(12));
  console.log(numeroromano(111));
  console.log(numeroromano(3999));
  console.log(numeroromano(4));
  console.log(numeroromano(5));
  console.log(numeroromano(6));
  console.log(numeroromano(1000));
  console.log(numeroromano(999));