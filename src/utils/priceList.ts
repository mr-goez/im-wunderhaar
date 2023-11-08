const priceListGents = [
  {
    id: 'ladies',
    image: 'src/assets/women-cut.png',
    label: 'Damen',
    description: undefined,
    content: [
      {
        action: 'Waschen & Schneiden',
        normalPrice: '30,00 €',
        masterPrice: '35,00 €',
      },
      {
        action: 'Föhnen Kurz / Mittel',
        normalPrice: '25,00 €',
        masterPrice: '25,00 €',
      },
      {
        action: 'Föhnen Lang',
        normalPrice: 'ab 35,00 €',
        masterPrice: 'ab 35,00 €',
      },
    ],
  },
  {
    id: 'gents',
    image: 'src/assets/men-cut.png',
    label: 'Herren',
    description: undefined,
    content: [
      {
        action: 'Waschen, Schneiden & Finish',
        normalPrice: '30,00 €',
        masterPrice: '30,00 €',
      },
    ],
  },
  {
    id: 'kids',
    image: 'src/assets/kid-cut.png',
    label: 'Kinder',
    description: 'bis 9 Jahre',
    content: [
      {
        action: 'Haarschnitt',
        normalPrice: '15,00 €',
        masterPrice: '15,00 €',
      },
    ],
  },
  {
    id: 'coloring',
    image: 'src/assets/coloring.png',
    label: 'Färben',
    description: 'Exklusive Farbtechnik',
    content: [
      {
        action: 'Farbe / Intensive Tönung',
        normalPrice: 'ab 40,00 €',
        masterPrice: 'ab 40,00 €',
      },
      {
        action: 'Farbaufschlag',
        normalPrice: 'ab 10,00 €',
        masterPrice: 'ab 10,00 €',
      },
    ],
  },
  {
    id: 'blonde',
    image: 'src/assets/blonde.png',
    label: 'Blondierung',
    description: undefined,
    content: [
      {
        action: 'Kurzhaar',
        normalPrice: 'ab 40,00 €',
        masterPrice: 'ab 40,00 €',
      },
      {
        action: 'Langhaar',
        normalPrice: 'ab 60,00 €',
        masterPrice: 'ab 60,00 €',
      },
    ],
  },
  {
    id: 'highlights',
    image: 'src/assets/highlights.png',
    label: 'Foliensträhnen',
    description: undefined,
    content: [
      {
        action: '1/4 Kopf',
        normalPrice: 'ab 20,00 €',
        masterPrice: 'ab 20,00 €',
      },
      {
        action: '1/2 Kopf',
        normalPrice: 'ab 40,00 €',
        masterPrice: 'ab 40,00 €',
      },
      {
        action: '3/4 Kopf',
        normalPrice: 'ab 60,00 €',
        masterPrice: 'ab 60,00 €',
      },
      {
        action: 'Ganzer Kopf',
        normalPrice: 'ab 80,00 €',
        masterPrice: 'ab 80,00 €',
      },
    ],
  },
  {
    id: 'color-tech',
    image: 'src/assets/color-tech.png',
    label: 'Farbtechnik',
    description: 'Aufpreis bei Mehraufwand',
    content: [
      {
        action: 'Kurz',
        normalPrice: 'ab 60,00 €',
        masterPrice: 'ab 60,00 €',
      },
      {
        action: 'Mittel',
        normalPrice: 'ab 90,00 €',
        masterPrice: 'ab 90,00 €',
      },
      {
        action: 'Lang',
        normalPrice: 'ab 120,00 €',
        masterPrice: 'ab 120,00 €',
      },
    ],
  },
  {
    id: 'permanent-mod',
    image: 'src/assets/permanent-mod.png',
    label: 'Dauerhafte Umformung',
    description: undefined,
    content: [
      {
        action: 'Kurzhaar',
        normalPrice: 'ab 70,00 €',
        masterPrice: 'ab 70,00 €',
      },
      {
        action: 'Langhaar',
        normalPrice: 'ab 95,00 €',
        masterPrice: 'ab 95,00 €',
      },
      {
        action: 'Volumenwelle (nur Kurzhaar)',
        normalPrice: 'ab 70,00 €',
        masterPrice: 'ab 70,00 €',
      },
    ],
  },
  {
    id: 'other',
    image: 'src/assets/women-wash.png',
    label: 'Sonstiges',
    description: 'Preis je nach Menge',
    content: [
      {
        action: 'Olaplex-Treatment kurz',
        normalPrice: 'ab 20,00 €',
        masterPrice: 'ab 20,00 €',
      },
      {
        action: 'Olaplex-Treatment lang',
        normalPrice: 'ab 40,00 €',
        masterPrice: 'ab 40,00 €',
      },
      {
        action: 'Keratinkur',
        normalPrice: 'ab 15,00 €',
        masterPrice: 'ab 15,00 €',
      },
      {
        action: 'Haarkur',
        normalPrice: 'ab 7,00 €',
        masterPrice: 'ab 7,00 €',
      },
      {
        action: 'Maschinenhaarschnitt',
        normalPrice: '15,00 €',
        masterPrice: '15,00 €',
      },
      {
        action: 'Augenbrauen zupfen',
        normalPrice: '6,00 €',
        masterPrice: '6,00 €',
      },
      {
        action: 'Augenbrauen zupfen & färben',
        normalPrice: '8,00 €',
        masterPrice: '8,00 €',
      },
      {
        action: 'Wimpern färben',
        normalPrice: '10,00 €',
        masterPrice: '10,00 €',
      },
      {
        action: 'Haare hochstecken / flechten',
        normalPrice: '60,00 € / Stunde',
        masterPrice: '60,00 € / Stunde',
      },
      {
        action: 'Bartpflege',
        normalPrice: 'ab 15,00 €',
        masterPrice: 'ab 15,00 €',
      },
    ],
  },
];

export default priceListGents;
