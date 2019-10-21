'use strict';

const LANGUAGES = {
  italiano: 'it',
  arabe: 'ar',
  árabe: 'ar',
  búlgaro: 'ar',
  bulgaro: 'ar',
  checo: 'cs',
  croata: 'hr',
  dinamarquês: 'da',
  dinamarques: 'da',
  holandês: 'nl',
  holandes: 'nl',
  inglês: 'en',
  ingles: 'en',
  finlandês: 'fi',
  finlandes: 'fi',
  francês: 'fr',
  frances: 'fr',
  alemão: 'de',
  alemao: 'de',
  grego: 'el',
  hebraico: 'he',
  hindi: 'hi',
  húngaro: 'hu',
  hungaro: 'hu',
  indonésio: 'id',
  indonesio: 'id',
  japonês: 'ja',
  japones: 'ja',
  coreano: 'co',
  norueguês:'no',
  noruegues:'no',
  polonês: 'pl',
  polones: 'pl',
  romeno: 'ro',
  russo: 'ru',
  chinês: 'zh',
  chines: 'zh',
  espanhol: 'es',
  sueco: 'sv',
  tailandês: 'th',
  tailandes: 'th',
  turco: 'tr',
  vietinamita: 'vi',
}

const COUNTRY = {
  US: 'American',
  IT: 'Italian',
  GB: 'British',
  CA: 'Canadian',
  CN: 'Chinese',
  NL: 'Dutch',
  EG: 'Egyptian',
  FR: 'French',
  GR: 'Greek',
  IN: 'Indian',
  IE: 'Irish',
  JM: 'Jamaican',
  JP: 'Japanese',
  KE: 'Kenyan',
  MY: 'Malaysian',
  MX: 'Mexican',
  RU: 'Russian',
  ES: 'Spanish',
  TH: 'Thai',
  TN: 'Tunisian',
  TR: 'Turkish',
  VN: 'Vietnamese'
}

const BUTTOM_DOWNLOAD_TEMPLATE = {
  payload: {
    template_type: "button",
    text:" Eu posso te ajudar com isso, mas somente através do meu aplicativo. Dê uma olhada na loja e faça o download :)",
    buttons: [
      {
        type: "web_url",
        url: "https://www.apple.com/br/ios/app-store/",
        title: "Download IOS"
      },
      {
        type: "web_url",
        url: "https://play.google.com/store/apps?hl=pt_BR",
        title: "Download Android"
      },
    ]
  }
};

const FRIENDLY_MESSAGES_INTENT = {
  WelcomeIntent: 'Que tal saber mais sobre a Milia?',
  SignupIntent: 'Que tal saber mais sobre a Milia?',
  SuccessSignupIntent: 'Que tal saber mais sobre a Milia?',
  ForgotPassword: 'Que tal saber mais sobre a Milia?',
  FallbackIntent: 'Que tal saber mais sobre a Milia?',
  HelpIntent: 'Pergunte o que mais a Milia pode fazer :)',
  LanguageIntent: 'A Milia é poliglota, traduz tudo pra você!',
  EmergencyIntent: 'A Milia está aqui pra te salvar!',
  AttractionsIntent: 'Procure pontos turísticos com a Milia!',
  ExchangeIntent: 'Pergunte agora cotações de suas moedas :)',
  PlacesIntent: 'A Milia encontra o lugar que você quiser :)',
  FoodIntent: 'A Milia acha as melhores comidas pra você :)',
  DocumentsIntent: 'Documentos pra viajar? A Milia te conta!',
  WhatToDoIntent: 'Procurando o que fazer? A Milia te ajuda!',
}

const COUNTRIES_DONT_NEED_PASSPORT = [
  'Argentina', 'Bolívia', 'Brasil', 'Chile', 'Colômbia', 'Equador', 'Paraguai', 'Peru', 'Uruguai', 'Venezuela'
];

const COUNTRIES_NEEDS_VISA = [
  'Afeganistão',
  'Arábia Saudita',
  'Argélia',
  'Armênia',
  'Austrália',
  'Azerbaijão',
  'Bahrein',
  'Bangladesh',
  'Benin',
  'Bielo Rússia',
  'Brunei',
  'Burkina Fasso',
  'Burundi',
  'Butão',
  'Cabo Verde',
  'Camarões ',
  'Camboja',
  'Canadá',
  'Catar',
  'Cazaquistão',
  'Chade',
  'China',
  'Comores Islands',
  'Congo',
  'Coréia do Norte',
  'Costa do Marfim',
  'Cuba',
  'Djibuti',
  'Egito',
  'Emirados Árabes Unidos',
  'Eritréia',
  'Estados Unidos da América',
  'Estados Unidos',
  'Etiópia',
  'Gabão',
  'Gana',
  'Granada',
  'GUAM Ilhas Marianas',
  'Guiana Francesa',
  'Guiné',
  'Guiné Bissau',
  'Guiné Equatorial',
  'Honduras',
  'Iêmen',
  'Ilha Borneo',
  'Ilha Kiribati',
  'Ilha Norfolk',
  'Ilhas Marshall',
  'Ilhas Seychelles',
  'Ilhas Virgens Americanas',
  'Índia',
  'Indonésia',
  'Irã',
  'Iraque',
  'Japão',
  'Jordânia',
  'Kuwait',
  'Laos',
  'Lesoto',
  'Líbano',
  'Libéria',
  'Líbia',
  'Madagascar',
  'Malawi',
  'Maldivas',
  'Mali',
  'Maurício',
  'Mauritânia',
  'Mianmar',
  'Moçambique',
  'Moldávia',
  'Mongólia',
];

module.exports = {
  LANGUAGES,
  COUNTRY,
  BUTTOM_DOWNLOAD_TEMPLATE,
  FRIENDLY_MESSAGES_INTENT,
  COUNTRIES_DONT_NEED_PASSPORT,
  COUNTRIES_NEEDS_VISA,
};