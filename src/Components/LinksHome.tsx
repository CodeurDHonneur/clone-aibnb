

export default function LinksHome() {
  return (
    <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', /* 3 colonnes égales */
        gap: '1rem', /* 16px */
        maxWidth: '1200px', /* largeur max */
        marginLeft: 'auto',
        marginRight: 'auto', /* centre horizontalement */
        paddingTop: '2rem', /* 32px */
        paddingBottom: '2rem',
    }}>

        <div style={{padding : '1rem'}}>
            <h4 style={{
                fontWeight: 'semibold',
                marginBottom: '0.75rem',
                fontSize: '1.125rem',
                lineHeight: 'calc(1.75 / 1.125)'
            }}>
                Assistance
            </h4>
            <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '3'
            }}>
                <li><a href="#" className='hoverElement'>Centre d'aide</a></li>
                <li><a href="#" className='hoverElement'>AirCover</a></li>
                <li><a href="#" className='hoverElement'>Lutte contre la discrimination</a></li>
                <li><a href="#" className='hoverElement'>Assistance handicape</a></li>
                <li><a href="#" className='hoverElement'>Options d'annulation</a></li>
            </ul>
        </div>
        <div style={{padding : '1rem'}}>
            <h4 style={{
                fontWeight: 'semibold',
                marginBottom: '0.75rem',
                fontSize: '1.125rem',
                lineHeight: 'calc(1.75 / 1.125)'
            }}>
                Accueil de voyageurs
            </h4>
            <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '3'
            }}>
                <li><a href="#" className='hoverElement'>J'ai un problème de voisinage</a></li>
                <li><a href="#" className='hoverElement'>Mettez votre logement sur Airbnb</a></li>
                <li><a href="#" className='hoverElement'>AirCover pour les hôtes</a></li>
                <li><a href="#" className='hoverElement'>Ressources pour les hôtes</a></li>
                <li><a href="#" className='hoverElement'>Forum de la communauté</a></li>
            </ul>
        </div>
        <div style={{padding : '1rem'}}>
            <h4 style={{
                fontWeight: 'semibold',
                marginBottom: '0.75rem',
                fontSize: '1.125rem',
                lineHeight: 'calc(1.75 / 1.125)'
            }}>
                Airbnb
            </h4>
            <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '3'
            }}>
                <li><a href="#" className='hoverElement'>Newsroom</a></li>
                <li><a href="#" className='hoverElement'>Nouvelles fonctionnalités</a></li>
                <li><a href="#" className='hoverElement'>Carrières</a></li>
                <li><a href="#" className='hoverElement'>Investisseurs</a></li>
                <li><a href="#" className='hoverElement'>Cartes cadeaux</a></li>
            </ul>
        </div>
    </div>
  )
}
