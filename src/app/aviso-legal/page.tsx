import LegalPageLayout from '@/components/layout/LegalPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal - Cerecilla',
  description: 'Aviso legal y condiciones de uso del sitio web de Cerecilla S.L.',
};

export default function AvisoLegalPage() {
  return (
    <LegalPageLayout title="Aviso Legal" lastUpdated="Enero 2024">
      <h2>1. Datos Identificativos</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa al usuario de los datos del titular:
      </p>
      <ul>
        <li><strong>Denominación social:</strong> CERECILLA, S.L.</li>
        <li><strong>CIF:</strong> B05406822</li>
        <li><strong>Domicilio social:</strong> C/ Lope de Vega, 10, Esc. Izq., 4º, 5ª, 08005 Barcelona</li>
        <li><strong>Teléfono:</strong> +34 666 207 398</li>
        <li><strong>Email:</strong> laia.castella@cerecilla.com</li>
        <li><strong>Representante:</strong> Laia Castella Prim</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        El presente aviso legal regula el uso del sitio web cerecilla.com, del que es titular CERECILLA, S.L. La navegación por el sitio web atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal.
      </p>

      <h2>3. Condiciones de Uso</h2>
      <p>
        El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que CERECILLA, S.L. ofrece a través de su sitio web y, con carácter enunciativo pero no limitativo, a no emplearlos para:
      </p>
      <ul>
        <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
        <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
        <li>Provocar daños en los sistemas físicos y lógicos de CERECILLA, S.L., de sus proveedores o de terceras personas.</li>
        <li>Introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños anteriormente mencionados.</li>
        <li>Intentar acceder y, en su caso, utilizar las cuentas de correo electrónico de otros usuarios y modificar o manipular sus mensajes.</li>
      </ul>

      <h2>4. Propiedad Intelectual e Industrial</h2>
      <p>
        El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos, son propiedad de CERECILLA, S.L. o, en su caso, dispone de licencia o autorización expresa por parte de los autores.
      </p>
      <p>
        Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial, así como inscritos en los registros públicos correspondientes.
      </p>
      <p>
        Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución y comercialización, requiere en todo caso de la autorización escrita previa por parte de CERECILLA, S.L. Cualquier uso no autorizado previamente se considera un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.
      </p>

      <h2>5. Exclusión de Garantías y Responsabilidad</h2>
      <p>
        CERECILLA, S.L. no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
      </p>

      <h2>6. Modificaciones</h2>
      <p>
        CERECILLA, S.L. se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que estos aparezcan presentados o localizados en su portal.
      </p>

      <h2>7. Enlaces</h2>
      <p>
        En el caso de que en el sitio web se dispusiesen enlaces o hipervínculos hacia otros sitios de Internet, CERECILLA, S.L. no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno de dichos hipervínculos u otros sitios de Internet.
      </p>

      <h2>8. Derecho de Exclusión</h2>
      <p>
        CERECILLA, S.L. se reserva el derecho a denegar o retirar el acceso a portal y/o los servicios ofrecidos sin necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan las presentes Condiciones Generales de Uso.
      </p>

      <h2>9. Generalidades</h2>
      <p>
        CERECILLA, S.L. perseguirá el incumplimiento de las presentes condiciones así como cualquier utilización indebida de su portal ejerciendo todas las acciones civiles y penales que le puedan corresponder en derecho.
      </p>

      <h2>10. Legislación Aplicable y Jurisdicción</h2>
      <p>
        La relación entre CERECILLA, S.L. y el usuario se regirá por la normativa española vigente. Todas las disputas y reclamaciones derivadas de este aviso legal se resolverán por los juzgados y tribunales de Barcelona.
      </p>
    </LegalPageLayout>
  );
}
