type Post = {
  Id: number;
  Image: string;
  Title: string;
  Date: string;
  Content: string;
  Category: string;
  Visible: boolean;
};

export const posts: Post[] = [
  {
    Id: 1,
    Image: "https://picsum.photos/200",
    Title: "Cómo hacer un pastel de zanahoria",
    Date: "2022-12-24",
    Content:
      "<p>Para hacer un pastel de zanahoria necesitarás los siguientes ingredientes:</p><ul><li>2 tazas de harina</li><li>1 taza de azúcar</li><li>3 huevos</li><li>2 tazas de zanahoria rallada</li><li>1 cucharadita de canela</li><li>1 cucharadita de polvo de hornear</li></ul><p>Precalentar el horno a 180 grados y engrasar un molde para pastel. Mezclar los ingredientes secos y luego agregar los huevos, la zanahoria y el aceite. Verter la mezcla en el molde y hornear durante 45 minutos o hasta que al insertar un palillo este salga limpio.</p>",
    Category: "Postres",
    Visible: true,
  },
  {
    Id: 2,
    Image: "https://picsum.photos/201",
    Title: "La importancia de la meditación en la vida cotidiana",
    Date: "2022-11-15",
    Content:
      "<p>La meditación es una práctica que consiste en enfocarse en el presente y quietud mental. Esta actividad tiene numerosos beneficubrimientos y provee muchos beneficubrimientos sobre la salud mental y física. Además, puede ayudar a reducir el estrés y ansiedad, mejorar la concentración, la memoria y el bienestar general.</p><p>Se recomienda dedicar al menos 10-15 minutos al día a la meditación, encontrando un lugar tranquilo y cómodo para sentarse y concentrarse en la respiración. Con la práctica regular, puedes ver cómo la meditación mejora tu calidad de vida.</p>",
    Category: "Bienestar",
    Visible: true,
  },
  {
    Id: 3,
    Image: "https://picsum.photos/202",
    Title: "Los mejores paisajes de montaña para visitar",
    Date: "2022-10-01",
    Content:
      "<p>Si amas la naturaleza y buscas una escapada emocionante, aquí hay algunos de los mejores paisajes de montaña para visitar:</p><ul><li>El Parque Nacional de Yosemite, California</li><li>El Parque Nacional de Rocky Mountains, Colorado</li><li>La Cordillera Blanca, Perú</li><li>El Monte Kilimanjaro, Tanzania</li><li>El Monte Everest, Nepal </li></ul><p>Cada uno de estos destinos ofrece una experiencia única y espectacular, con paisajes de montañas impresionantes y una variedad de actividades al aire libre, como senderismo, escalada y camping. Además, estos parques nacionales protegen la biodiversidad y permiten a los visitantes disfrutar de la naturaleza y aprender sobre su conservación.</p>",
    Category: "Viajes",
    Visible: true,
  },
  {
    Id: 4,
    Image: "https://picsum.photos/203",
    Title: "Cómo crear un jardín vertical en casa",
    Date: "2022-09-12",
    Content:
      "<p>Un jardín vertical es una forma de aprovechar el espacio en casa y añadir un toque verde y fresco a la decoración. Aquí hay algunos consejos para crear tu propio jardín vertical:</p><ul><li>Elije una pared con luz natural o instala una fuente de luz artificial para tus plantas</li><li>Selecciona las plantas adecuadas para tus condiciones de iluminación y humedad</li><li>Compra o haz tu propio sistema de riego por goteo</li><li>Usa maceteros y soportes para colgar tus plantas</li><li>Añade tierra y planta tus semillas o plántulas</li></ul><p>Con un poco de paciencia y dedicación, tu jardín vertical será un éxito y te aportará un oasis de tranquilidad en casa.</p>",
    Category: "Jardinería",
    Visible: true,
  },
  {
    Id: 5,
    Image: "https://picsum.photos/204",
    Title: "Cómo hacer ejercicio en casa durante la cuarentena",
    Date: "2022-03-20",
    Content:
      "<p>Durante la cuarentena, es importante mantener un estilo de vida activo y saludable, incluso si no se puede ir al gimnasio. Aquí hay algunos consejos para hacer ejercicio en casa:</p><ul><li>Establece un horario regular de ejercicio y hazlo una prioridad</li><li>Usa videos en línea o aplicaciones para seguir entrenamientos en casa</li><li>Aprovecha el espacio disponible, como una habitación o el pasillo, para hacer ejercicios de cardio y fortalecimiento</li><li>Usa objetos cotidianos como botellas de agua o libros como pesas improvisadas</li><li>No te rindas, sé constante y encuentra motivación en pequeños logros y progresos </li></ul><p>Recuerda escuchar a tu cuerpo y hacer ejercicio de manera segura y consciente. También es importante complementar el ejercicio con una dieta equilibrada y suficiente descanso. ¡No hay excusas para no cuidar tu salud y mantenerte activo durante la cuarentena o en cualquier momento!</p>",
    Category: "Deportes",
    Visible: true,
  },
];
