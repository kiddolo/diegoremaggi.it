/**
 * UI dictionaries.
 * Add new locales by adding a key to `messages` and to `SITE.locales` in
 * src/config.ts. All keys must exist for every locale (TypeScript enforces it).
 */

import type { Locale } from '../config';

export const messages = {
  it: {
    'site.skipToContent': 'Vai al contenuto',
    'nav.home': 'Home',
    'nav.posts': 'Articoli',
    'nav.tags': 'Tag',
    'nav.categories': 'Categorie',
    'nav.archives': 'Archivio',
    'nav.about': 'Chi sono',
    'nav.search': 'Cerca',
    'nav.toggleMenu': 'Apri/chiudi menu',

    'theme.toggle': 'Cambia tema',
    'theme.light': 'Chiaro',
    'theme.dark': 'Scuro',
    'theme.system': 'Sistema',

    'lang.switcher': 'Lingua',
    'lang.en': 'Inglese',
    'lang.fr': 'Francese',

    'post.publishedOn': 'Pubblicato il',
    'post.updatedOn': 'Aggiornato il',
    'post.readingTime': 'min di lettura',
    'post.toc': 'Indice',
    'post.tags': 'Tag',
    'post.categories': 'Categorie',
    'post.previous': 'Precedente',
    'post.next': 'Successivo',
    'post.comments': 'Commenti',
    'post.commentsDisabled': 'I commenti sono disattivati per questo articolo.',
    'post.commentsSetupTitle': 'I commenti richiedono configurazione',
    'post.commentsSetupBody':
      'Giscus è attivo ma non ancora configurato. Aggiungi i dettagli del repository qui sotto per iniziare a raccogliere i commenti.',
    'post.commentsSetupStep1':
      'Vai su `giscus.app` e seleziona il tuo repository GitHub pubblico (le Discussions devono essere attive).',
    'post.commentsSetupStep2':
      'Copia i valori generati `data-repo-id`, `data-category` e `data-category-id`.',
    'post.commentsSetupStep3':
      'Imposta le variabili di ambiente `PUBLIC_GISCUS_ENABLED`, `PUBLIC_GISCUS_REPO`, `PUBLIC_GISCUS_REPO_ID`, `PUBLIC_GISCUS_CATEGORY` e `PUBLIC_GISCUS_CATEGORY_ID` nel tuo file `.env`.',
    'post.commentsSetupStep4':
      'Ricostruisci il sito — questo avviso sarà sostituito dal thread dei commenti.',
    'post.commentsSetupDocs': 'Apri giscus.app',
    'post.share': 'Condividi',
    'post.copyLink': 'Copia link',
    'post.copied': 'Copiato!',
    'post.author': 'Autore',

    'list.allPosts': 'Tutti gli articoli',
    'list.empty': 'Nessun articolo trovato.',
    'list.tagPosts': 'Articoli con tag',
    'list.categoryPosts': 'Articoli in',
    'list.totalPosts': 'articoli',
    'list.totalPostsOne': 'articolo',

    'pagination.previous': 'Pagina precedente',
    'pagination.next': 'Pagina successiva',
    'pagination.page': 'Pagina',
    'pagination.of': 'di',

    'archives.title': 'Archivio',
    'archives.empty': 'Ancora nessun articolo.',

    'tags.title': 'Tag',
    'tags.empty': 'Ancora nessun tag.',

    'categories.title': 'Categorie',
    'categories.empty': 'Ancora nessuna categoria.',

    'search.title': 'Cerca',
    'search.placeholder': 'Cerca nel sito',
    'search.openLabel': 'Apri ricerca',
    'search.closeLabel': 'Chiudi ricerca',
    'search.empty': 'Nessun risultato.',
    'search.loading': 'Caricamento ricerca…',
    'search.typeToStart': 'Scrivi per cercare…',
    'search.hintShortcut': 'Premi / ovunque per aprire la ricerca',
    'search.searching': 'Ricerca in corso…',
    'search.noResultsFor': 'Nessun risultato per',
    'search.resultsCount': 'risultati',
    'search.resultsCountOne': 'risultato',
    'search.hintNavigate': 'per navigare',
    'search.hintSelect': 'per aprire',
    'search.clearLabel': 'Cancella',

    'code.copy': 'Copia',
    'code.copied': 'Copiato',

    '404.title': 'Pagina non trovata',
    '404.description': 'La pagina che cerchi è volata via.',
    '404.cta': 'Torna alla home',

    'footer.poweredBy': 'Realizzato con',
    'footer.theme': 'Tema',
    'footer.privacy': 'Informativa sulla privacy',
    'footer.copyright': 'Tutti i diritti riservati.',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof messages)['it'];
