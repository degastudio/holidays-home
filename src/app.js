const path = require('path');
const express = require('express');
const hbs = require('hbs');
const utils = require('./utils');

//express
const app = express();

//static, views and partials configurations
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/templates/views'));
hbs.registerPartials(path.join(__dirname, '/templates/partials'));

//routing
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Casa Vacanze Bari Palese',
        header: {
            title: 'casa vacanze a palese (BA)',
            payoff: 'la casa ideale per le tue vacanze in puglia',
            btn: 'scopri di più!',
            link: '#about'
        },
        about: {
            title: 'Abbiamo ciò di cui hai bisogno!',
            payoff: 'In un contesto caratteristico e comodo a tutti i servizi, proponiamo a Palese in provincia di Bari, intero Loft raffinato e prestigioso per brevi e/o lunghi periodi. Questa location rappresenta il luogo ideale dove trascorrere momenti di completo relax e vivere l\'entusiasmo della vita pugliese.',
            btn: 'guarda i servizi offerti',
            link: '#services'
        },
        services: {
            title: 'Dettagli e Servizi',
            home: {
                title: 'Caratteristiche',
                feat: [
                    'casa su 3 piani (140m²)',
                    'terrazzo con vista',
                    'orientamento a sud',
                    '2 bagni',
                    'fino a 6 posti letto',
                    'armadi a muro',
                    'aria condizionata',
                    'riscaldamento aut. classe A3',
                    'sono ammessi animali'
                ],
            },
            places: {
                title: 'Luoghi e Servizi',
                feat: [
                    'a 1km dal mare',
                    'a 5 minuti dall\'aeroporto',
                    'vicina a luoghi turistici',
                    'lidi marittimi,',
                    'ristoranti e attività di',
                    'prodotti tipici pugliesi oltre a',
                    'servizi base come farmacie ecc.'
                ]
            },
            prices: {
                title: 'Tariffe e Prenotazioni',
                feat: [
                    'la tariffazione è basata',
                    'su periodi di 15 giorni',
                    'per la bassa stagione si parte',
                    'da 900€ il prezzo poi varia',
                    'in base alla stagione corrente',
                    'vi invitiamo a contattarci',
                    'per ricevere informazioni', 
                    'su dettagli e costi'
                ]
            }
        },
        gallery: utils.getImages(),
        contacts: {
            title: 'Contattaci Ora!',
            payoff: 'Sei pronto a trascorrere la tua prossima vacanza con noi? Chiamaci o scrivici e ti daremo tutte le informazioni di cui necessiti.',
            phone1: '+39 3930483213',
            phone2: '+39 3533798801',
            email: 'moreagabriele38@gmail.com'
        }
    });
});

app.get('*', (req, res) => {
    res.status(404).render('404', { 
        title: '404!',
        header: {
            title: 'pagina non trovata!',
            payoff: 'la pagina che stavi cercando non è qui.',
            btn: 'torna alla home',
            link: '/'
        }
    });
});
  
const d = new Date();
const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
app.listen(process.env.PORT || 3000, () => console.log(time,'SERVER IS RUNNING'));
