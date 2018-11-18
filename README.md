# DWEC-05
Tarea 5 Desarrollo Web en Entorno Cliente

Instrumento musical.
En esta tarea vamos a realizar un pequeño órgano musical (sin teclas negras).
Para ello tendrás que dibujar un tablero con una fila y con las notas musicales: Do, Re, Mi, Fa, Sol, La, Si. La idea es que parezcan teclas rectangulares.
Al pulsar las teclas se debe reproducir el sonido hasta que se suelta.

En el juego que vamos a implementar vamos a tener las siguientes restricciones.
- El órgano y demás elementos gráficos se crearán utilizando JavaScript y métodos del DOM. O sea capas divs, y botones. Existirá un botón mute que silenciará el piano.
- Nada más pulsar una tecla debe comenzar a tocar. Al soltar la tecla debe pararse la reproducción. Al mantener pulsada una letra cambiará su color.
- Se puede tocar el piano tanto por tecla presionada como por botón presionado del ratón. Las teclas del teclado que uséis deben aparecer en un recuadro de instrucciones.
- Habrá un botón o equivalente para realizar un mute o silencio del piano. Cuando esté activo (pensad como cambiarlo para que parezca activo y apagado), no sonará nada.
¿Cómo implementar la parte gráfica?
- Si alguno quiere utilizar un archivo CSS y asignarle las clases puede hacerlo. Sin embargo se puede hacer en código JavaScript totalmente. Sobretodo para los que no estéis dando DIW.
- Prohibido el uso de innerHTML. La idea es usar métodos y propiedades del tipo de crear elementos, nodos, hijos de los nodos, etc. La elección será vuestra. Si los utilizáis correctamente os ayudarán a entender mejor el sistema en árbol utilizado por DOM.
La programación de la aplicación JavaScript la tendrás que realizar en un fichero .js y tendrá que ser cross-browser funcionando perfectamente en Firefox, Google Chrome y Opera (los navegadores de Microsoft no me importan mucho).
Los botones deben enlazarse con addEventListener() no con sistemas obsoletos de Microsoft (o sea, utilizar W3C al igual que en la unidad anterior y no BOM).
 
Queda terminantemente prohibido usar JQuery o similares. Debéis usar DOM directamente y sin intermediarios.
