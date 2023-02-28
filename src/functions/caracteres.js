export function caracteres(variavel){
    
    const variavelCaracteres =     
                variavel.indexOf('"') > -1 || variavel.indexOf('[') > -1 ||
                variavel.indexOf('!') > -1 || variavel.indexOf('{') > -1 ||
                variavel.indexOf('@') > -1 || variavel.indexOf('ª') > -1 ||
                variavel.indexOf('#') > -1 || variavel.indexOf(']') > -1 ||
                variavel.indexOf('$') > -1 || variavel.indexOf('}') > -1 ||
                variavel.indexOf('%') > -1 || variavel.indexOf('º') > -1 ||
                variavel.indexOf('¨') > -1 || variavel.indexOf('~') > -1 ||
                variavel.indexOf('&') > -1 || variavel.indexOf('^') > -1 ||
                variavel.indexOf('*') > -1 || variavel.indexOf(';') > -1 ||
                variavel.indexOf('(') > -1 || variavel.indexOf(':') > -1 ||
                variavel.indexOf(')') > -1 || variavel.indexOf('>') > -1 ||
                variavel.indexOf('_') > -1 || variavel.indexOf('.') > -1 ||
                variavel.indexOf('-') > -1 || variavel.indexOf('<') > -1 ||
                variavel.indexOf('=') > -1 || variavel.indexOf(',') > -1 ||
                variavel.indexOf('+') > -1 || variavel.indexOf('¬') > -1 ||
                variavel.indexOf('§') > -1 || variavel.indexOf('`') > -1 ||
                variavel.indexOf('/') > -1 || variavel.indexOf('¢') > -1 ||
                variavel.indexOf('?') > -1 || variavel.indexOf('³') > -1 ||
                variavel.indexOf('°') > -1 || variavel.indexOf('²') > -1 

                return variavelCaracteres
}