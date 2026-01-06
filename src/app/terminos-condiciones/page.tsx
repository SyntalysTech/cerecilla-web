import LegalPageLayout from '@/components/layout/LegalPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos y Condiciones - Cerecilla',
  description: 'Términos y condiciones de uso de los servicios de Cerecilla S.L.',
};

export default function TerminosCondicionesPage() {
  return (
    <LegalPageLayout title="Términos y Condiciones" lastUpdated="Enero 2024">
      <h2>1. Objeto</h2>
      <p>
        Los presentes Términos y Condiciones regulan el uso de los servicios de comparación y asesoramiento ofrecidos por CERECILLA, S.L. a través de su sitio web y otros canales de comunicación.
      </p>

      <h2>2. Descripción del Servicio</h2>
      <p>CERECILLA, S.L. ofrece un servicio gratuito de:</p>
      <ul>
        <li>Comparación de tarifas de luz y gas.</li>
        <li>Comparación de tarifas de telefonía y fibra.</li>
        <li>Comparación de seguros.</li>
        <li>Asesoramiento personalizado para optimizar gastos del hogar.</li>
        <li>Gestión del cambio de compañía cuando el cliente lo solicite.</li>
      </ul>

      <h2>3. Gratuidad del Servicio</h2>
      <p>
        El servicio de comparación y asesoramiento de CERECILLA, S.L. es totalmente gratuito para el usuario. La empresa obtiene su remuneración a través de las comisiones que las compañías de suministros y aseguradoras abonan por cada cliente captado.
      </p>
      <p>
        Esta relación comercial con las compañías no afecta a la objetividad del asesoramiento, ya que nuestro compromiso es siempre recomendar la mejor opción para cada cliente.
      </p>

      <h2>4. Obligaciones del Usuario</h2>
      <p>El usuario se compromete a:</p>
      <ul>
        <li>Facilitar información veraz y actualizada.</li>
        <li>No utilizar el servicio para fines ilícitos o contrarios a estos términos.</li>
        <li>No proporcionar datos de terceros sin su consentimiento.</li>
        <li>Mantener actualizados sus datos de contacto.</li>
      </ul>

      <h2>5. Proceso de Contratación</h2>
      <p>El proceso de comparación y posible contratación sigue estos pasos:</p>
      <ol>
        <li>El usuario facilita sus datos de contacto y consumo actual.</li>
        <li>CERECILLA, S.L. analiza las opciones disponibles en el mercado.</li>
        <li>Se presenta al usuario las mejores alternativas encontradas.</li>
        <li>Si el usuario decide cambiar, CERECILLA, S.L. gestiona el proceso de alta con la nueva compañía.</li>
        <li>El contrato se formaliza directamente entre el usuario y la compañía elegida.</li>
      </ol>

      <h2>6. Limitación de Responsabilidad</h2>
      <p>CERECILLA, S.L. actúa como intermediario entre el usuario y las compañías de suministros o aseguradoras. Por tanto:</p>
      <ul>
        <li>No es responsable de los servicios prestados por dichas compañías.</li>
        <li>No garantiza la exactitud de las tarifas mostradas, que pueden variar según las condiciones particulares de cada usuario.</li>
        <li>No asume responsabilidad por incidencias en el suministro o servicio contratado.</li>
        <li>Las reclamaciones sobre los servicios contratados deben dirigirse a la compañía proveedora.</li>
      </ul>

      <h2>7. Derecho de Desistimiento</h2>
      <p>
        El usuario puede desistir en cualquier momento de la gestión de cambio solicitada a CERECILLA, S.L., siempre que no se haya formalizado el contrato con la nueva compañía.
      </p>
      <p>
        Una vez formalizado el contrato con la compañía de suministros o aseguradora, el derecho de desistimiento se ejercerá conforme a las condiciones establecidas por dicha compañía.
      </p>

      <h2>8. Propiedad Intelectual</h2>
      <p>
        Todos los contenidos del sitio web de CERECILLA, S.L. están protegidos por derechos de propiedad intelectual. Queda prohibida su reproducción, distribución o transformación sin autorización expresa.
      </p>

      <h2>9. Modificación de los Términos</h2>
      <p>
        CERECILLA, S.L. se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web.
      </p>

      <h2>10. Legislación y Jurisdicción</h2>
      <p>
        Estos términos se rigen por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales de Barcelona, renunciando a cualquier otro fuero que pudiera corresponderles.
      </p>

      <h2>11. Contacto</h2>
      <p>Para cualquier consulta sobre estos términos, puede contactar con nosotros en:</p>
      <ul>
        <li><strong>Email:</strong> laia.castella@cerecilla.com</li>
        <li><strong>Teléfono:</strong> +34 666 207 398</li>
        <li><strong>Dirección:</strong> C/ Lope de Vega, 10, Esc. Izq., 4º, 5ª, 08005 Barcelona</li>
      </ul>
    </LegalPageLayout>
  );
}
