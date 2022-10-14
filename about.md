# Haste

Compartir código es algo bueno, y debería ser _realmente_ fácil hacerlo.
Muchas veces, quiero mostrarte algo que estoy viendo - y ahí es donde usamos los pastebins.

Haste es el pastebin más bonito y fácil de usar que se ha hecho.

## Uso básico

Escribe lo que quieres que vea, haz clic en "Guardar" y luego copia la URL. Envía esa
URL a alguien y ellos verán lo que tú ves.

Para hacer una nueva entrada, haz clic en "Nuevo" (o escribe 'control + n')

## Desde la consola

La mayoría de las veces que quiero mostrarte algún texto, viene de mi actual
sesión de la consola.  Deberíamos hacer muy fácil tomar el código de la consola
y enviarlo a la gente.

`cat algo | haste` # https://paste.spanix.xyz/1238193

Incluso puedes llevar esto un paso más allá, y eliminar el último paso de copiar la
URL con:

* osx: `cat algo | haste | pbcopy`
* linux: `cat algo | haste | xsel`
* windows: check out [WinHaste](https://github.com/ajryan/WinHaste)

Después de ejecutar esto, la salida STDOUT de `cat algo` aparecerá en una URL
que ha sido convenientemente copiada en tu portapapeles.

Eso es todo, y puedes instalarlo con `gem install haste`
ahora mismo.
  * osx: necesitarás tener una versión actualizada de Xcode
  * linux: necesitarás tener instalados rubygems y ruby-devel

## Duración

Los pastes permanecerán durante 30 días desde su última vista.
Pueden ser eliminados antes y sin previo aviso.

## Privacidad

Aunque los contenidos de paste.spanix.xyz no son rastreados directamente por ningún robot de búsqueda
que obedezca a "robots.txt", no debería haber una gran expectativa de privacidad.  Publique en
cosas bajo su propio riesgo. No nos hacemos responsables de cualquier pérdida de datos o de la eliminación de
pastes.

## Código abierto

Haste puede ser fácilmente instalado detrás de tu red, ¡y es todo código abierto!

* [haste-client](https://github.com/seejohnrun/haste-client)
* [haste-server](https://github.com/seejohnrun/haste-server)

## Autor

Código por John Crepezzi <john.crepezzi@gmail.com>
Diseño de llaves por Brian Dawson <bridawson@gmail.com>