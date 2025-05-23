import { TbWorld } from 'react-icons/tb';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',    // corrigé "align-items" en CSS correct
        borderTop: '2px solid',
        margin: '0 auto',
        maxWidth: '1200px',
      }}
    >
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.25rem', // gap-1 = 0.25rem = 4px
          padding: '0.75rem', // p-3 = 0.75rem = 12px
          listStyleType: 'none', // pour éviter le style par défaut des <ul>
          margin: 0,
        }}
      >
        <li>&copy; Airbnb, inc,</li>
        <li>&#183;</li>
        <li><a href="#">Confidentialité</a></li>
        <li>&#183;</li>
        <li><a href="#">Conditions générales</a></li>
        <li>&#183;</li>
        <li><a href="#">Plan du site</a></li>
        <li>&#183;</li>
        <li><a href="#">Fonctionnement du site</a></li>
        <li>&#183;</li>
        <li><a href="#">Infos sur l'entreprise</a></li>
      </ul>
      <ul
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '0.5rem', // gap-2 = 0.5rem = 8px
          padding: '0.75rem',
          listStyleType: 'none',
          margin: 0,
        }}
      >
        <li>
          <a
            href="#"
            style={{
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem', // gap-1 = 4px
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <TbWorld />
            <p style={{ margin: 0 }}>Francais (FR)</p>
          </a>
        </li>
        <li>
          <a href="#" style={{ fontWeight: 'bold', textDecoration: 'none', color: 'inherit' }}>
            € EUR
          </a>
        </li>
        <li style={{ backgroundColor: '#484848', padding: '0.25rem' }}>
          <a href="#" style={{ color: '#fff', fontSize: '0.875rem', textDecoration: 'none' }}>
            <FaFacebookF />
          </a>
        </li>
        <li style={{ backgroundColor: '#484848', padding: '0.25rem' }}>
          <a href="#" style={{ color: '#fff', fontSize: '0.875rem', textDecoration: 'none' }}>
            <FaTwitter />
          </a>
        </li>
        <li style={{ backgroundColor: '#484848', padding: '0.25rem' }}>
          <a href="#" style={{ color: '#fff', fontSize: '0.875rem', textDecoration: 'none' }}>
            <FaInstagram />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
