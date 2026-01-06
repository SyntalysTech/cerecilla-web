import LegalPageLayout from '@/components/layout/LegalPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad - Cerecilla',
  description: 'Política de privacidad y protección de datos de Cerecilla S.L.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalPageLayout title="Política de Privacidad" lastUpdated="Enero 2024">
      <h2>1. Responsable del Tratamiento</h2>
      <ul>
        <li><strong>Identidad:</strong> CERECILLA, S.L.</li>
        <li><strong>CIF:</strong> B05406822</li>
        <li><strong>Dirección:</strong> C/ Lope de Vega, 10, Esc. Izq., 4º, 5ª, 08005 Barcelona</li>
        <li><strong>Teléfono:</strong> +34 666 207 398</li>
        <li><strong>Email:</strong> laia.castella@cerecilla.com</li>
      </ul>

      <h2>2. Finalidad del Tratamiento</h2>
      <p>Sus datos personales serán tratados con las siguientes finalidades:</p>
      <ul>
        <li>Gestionar las consultas realizadas a través del formulario de contacto.</li>
        <li>Prestar los servicios de comparación y asesoramiento contratados.</li>
        <li>Enviar comunicaciones comerciales sobre nuestros servicios, siempre que haya dado su consentimiento.</li>
        <li>Gestionar la relación comercial con colaboradores.</li>
        <li>Cumplir con las obligaciones legales aplicables.</li>
      </ul>

      <h2>3. Legitimación</h2>
      <p>La base legal para el tratamiento de sus datos es:</p>
      <ul>
        <li>El consentimiento del interesado para el envío de comunicaciones comerciales.</li>
        <li>La ejecución de un contrato o la aplicación de medidas precontractuales.</li>
        <li>El cumplimiento de obligaciones legales.</li>
        <li>El interés legítimo del responsable.</li>
      </ul>

      <h2>4. Destinatarios</h2>
      <p>
        Sus datos podrán ser comunicados a las compañías de suministros (luz, gas, telefonía, etc.) y aseguradoras con las que trabajamos, única y exclusivamente para la prestación del servicio solicitado.
      </p>
      <p>
        No se realizarán transferencias internacionales de datos fuera del Espacio Económico Europeo.
      </p>

      <h2>5. Conservación de Datos</h2>
      <p>Los datos personales se conservarán:</p>
      <ul>
        <li>Mientras se mantenga la relación comercial.</li>
        <li>Hasta que solicite su supresión.</li>
        <li>Durante los plazos legalmente establecidos para el cumplimiento de obligaciones legales.</li>
      </ul>

      <h2>6. Derechos del Interesado</h2>
      <p>Puede ejercer los siguientes derechos:</p>
      <ul>
        <li><strong>Acceso:</strong> Conocer qué datos personales estamos tratando.</li>
        <li><strong>Rectificación:</strong> Solicitar la modificación de datos inexactos.</li>
        <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos.</li>
        <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos.</li>
        <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento.</li>
        <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado.</li>
      </ul>
      <p>
        Para ejercer estos derechos, puede enviar un email a <a href="mailto:laia.castella@cerecilla.com">laia.castella@cerecilla.com</a> adjuntando copia de su DNI.
      </p>
      <p>
        También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
      </p>

      <h2>7. Medidas de Seguridad</h2>
      <p>
        CERECILLA, S.L. ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
      </p>

      <h2>8. Modificaciones</h2>
      <p>
        CERECILLA, S.L. se reserva el derecho a modificar la presente política de privacidad para adaptarla a novedades legislativas o jurisprudenciales.
      </p>
    </LegalPageLayout>
  );
}
