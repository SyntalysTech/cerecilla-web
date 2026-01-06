import LegalPageLayout from '@/components/layout/LegalPageLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies - Cerecilla',
  description: 'Política de cookies del sitio web de Cerecilla S.L.',
};

export default function PoliticaCookiesPage() {
  return (
    <LegalPageLayout title="Política de Cookies" lastUpdated="Enero 2024">
      <h2>1. ¿Qué son las Cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo cuando los visita. Se utilizan ampliamente para hacer que los sitios web funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
      </p>

      <h2>2. Tipos de Cookies que Utilizamos</h2>

      <h3>2.1 Cookies Técnicas (Necesarias)</h3>
      <p>
        Son esenciales para el funcionamiento del sitio web. Permiten la navegación y el uso de las diferentes opciones o servicios que existen en él.
      </p>
      <ul>
        <li>Gestión de la sesión del usuario.</li>
        <li>Recordar las preferencias de idioma.</li>
        <li>Garantizar la seguridad de la navegación.</li>
      </ul>

      <h3>2.2 Cookies de Análisis</h3>
      <p>
        Nos permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico de la utilización del sitio web. Para ello se analiza la navegación con el fin de mejorar la oferta de productos o servicios.
      </p>

      <h3>2.3 Cookies de Personalización</h3>
      <p>
        Permiten recordar información para que el usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia de la de otros usuarios.
      </p>

      <h2>3. Cookies de Terceros</h2>
      <p>Nuestro sitio web puede utilizar servicios de terceros que recopilan información con fines estadísticos y de uso del sitio:</p>

      <h3>Google Analytics</h3>
      <ul>
        <li><strong>Proveedor:</strong> Google LLC</li>
        <li><strong>Finalidad:</strong> Análisis estadístico de la navegación</li>
        <li><strong>Más información:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidad de Google</a></li>
      </ul>

      <h2>4. Gestión de Cookies</h2>
      <p>
        Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador. A continuación le ofrecemos enlaces donde encontrará información sobre cómo hacerlo en los principales navegadores:
      </p>
      <ul>
        <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
        <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
        <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
        <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
      </ul>

      <h2>5. Consecuencias de Desactivar las Cookies</h2>
      <p>
        Si desactiva las cookies, es posible que algunas funcionalidades del sitio web no estén disponibles o no funcionen correctamente.
      </p>

      <h2>6. Actualizaciones de la Política</h2>
      <p>
        CERECILLA, S.L. puede modificar esta política de cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.
      </p>
      <p>
        Se recomienda al usuario que consulte esta página periódicamente para estar informado sobre cualquier cambio.
      </p>

      <h2>7. Contacto</h2>
      <p>
        Para cualquier consulta sobre esta política de cookies, puede contactar con nosotros a través de:
      </p>
      <ul>
        <li><strong>Email:</strong> laia.castella@cerecilla.com</li>
        <li><strong>Teléfono:</strong> +34 666 207 398</li>
      </ul>
    </LegalPageLayout>
  );
}
