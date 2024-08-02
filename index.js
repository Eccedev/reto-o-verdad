let myArray = [
    "Vaaaale, muy valiente!!!",
    "Es adictivo ...y lo sabes",
    "Aquí estás tú OnFire",
    "Serénate que te nos pierdes!!!",
    "Vigila esos pensamientos xxx",
    "Esas pupilas están echando fuego",
    "Sorprendiendo al diablo mismo!!!"
  ];
  
  let randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  
  let myTruths = [
    "¿Cómo de a menudo piensas en sexo salvaje?",
    "¿Mejor pareja con grandes atributos y poco dinero o pequeños atributos pero montones de dinero?",
    "Para tu cumpleaños quieres comprarte un juguete sexual. ¿Qué te gustaría?",
    "¿Te besarías con alguien de tu mismo sexo por dinero? Si es así, ¿cuánto? ¿y del sexo contrario?", 
    "¿Alguna vez has pillado a alguien masturbándose/teniendo sexo o te han pillado a ti? ¿Cómo fue?", 
    "¿Alguna vez te has visto desnudx accidentalmente? ¿Cuándo y cómo?", 
    "Imagina que estás atrapadx en una isla muy aburrida para siempre. ¿Con quién te gustaría estar y cómo te entretendrías con esa persona?",  "Imagina que te han cambiado de género. ¿Qué cosa mala te gustaría hacer?", 
    "¿Te gustaría recibir un masaje sensual con final feliz? ¿Con quién y con qué frecuencia?",
    "¿Cuál es la cosa más atrevida que has hecho en una primera cita?",
    "¿Cuál es tu fantasía sexual más oculta?",
    "¿De qué sex-simbol te enamorarías si tuvieras la oportunidad?",
    "¿Cuál es el piropo más cursi que has recibido o has dicho?",
    "¿Cuál es la experiencia sexual más extraña que has tenido?",
    "¿Cuál es el lugar más inusual en el que has tenido relaciones sexuales?",
    "¿Cuál es la mentira más grande que has contado para ligar?",
    "¿Prefieres dar o recibir?¿activx o pasivx?",
    "¿Cuál es tu posición sexual favorita?",
    "¿Cuál es la fantasía sexual que siempre has querido cumplir?",
    "¿Cuál es tu mayor fantasía erótica?",
    "¿Cuál es la peor experiencia íntima que has tenido?",
    "¿culo sí o culo no? Defiende tu elección",
    "¿Cuál es tu placer culpable del que no puedes huir?",
    "¿Qué es lo que más te excita?",
    "¿Alguna vez has salido de casa sin ropa interior?",
    "¿Cuántas veces piensas en sexo al día",
    "¿qué comprarías en un sex-shop si no tuvieras tanta verguenza?",
    "¿Cuál es la parte del cuerpo de tu crush que más te atrae y por qué?"
  
  ];
  
  let randomTruth = myTruths[Math.floor(Math.random()*myTruths.length)];
  
  let myDares = [
  "¡Haz twerking sensual 30 segundos!",
  "¡Deja que el jugador/a a tu derecha elija la prenda que debes quitarte y mostrar!",
  "¡Cuenta un chiste o historia picante que hayas vivido!",
  "Grita ¡fóllame! en los idiomas que conozcas!",
  "Date una nalgada fuerte en el trasero frente a los demás diciendo ¡Este culito no pasará hambre!",
  "¡Busca en Google imágenes: SEXO ERÓTICO B&W  ¡...ahora elige la que más te guste y muestra tu elección al grupo!",
    "Muestra tu galería de imágenes del móvil",
    "Demuestra cómo ligas. Tírale los tejos a cada jugador/a de modo ardiente y convincente",
    "Actúa poniendo voz a una escena de sexo en la cocina de una película porno",
    "Enseñar la foto más embarazosa de tu teléfono",
    "Hacer como que le estás haciendo el amor a alguien durante 30 segundos",
    "Decir algo sexualmente cachondo y sucio a la persona de tu izquierda y de tu derecha",
    "Mostrar tu cara de orgasmo durante 10 segundos",
    "Actúa poniendo voz a una escena de sexo en la ducha de una película porno",
    "Hacer tu mejor gateo sexy durante 30 segundos"
    
  ];
  
  let randomDares = myDares[Math.floor(Math.random()*myDares.length)];

   function myFunction() {
   document.getElementById("price").innerHTML = randomItem;
   document.getElementById("price").style.border = "none";
   document.getElementById("dare").style.display = "inline-block";   
   document.getElementById("truth").style.display = "inline-block";
   
  }
   
  function myFunction2() { 
    randomItem = myArray[Math.floor(Math.random()*myArray.length)];
         
    document.getElementById("price").textContent = randomItem;
    document.getElementById("dare").innerHTML = randomDares;
    document.getElementById("dare").style.border = "none";
    document.getElementById("dare").style.color = "#00FF00";
    document.getElementById("truth").style.display = "none";
    document.getElementById("next").style.display = "inline-block"; 
   }
      
   function myFunction3() { 
    randomItem = myArray[Math.floor(Math.random()*myArray.length)];
         
   document.getElementById("price").textContent = randomItem;
   document.getElementById("truth").innerHTML = randomTruth;
   document.getElementById("truth").style.border = "none";
   document.getElementById("truth").style.color = "#FF0000";
   document.getElementById("dare").style.display = "none";
   document.getElementById("next").style.display = "inline-block";
  }
   
   