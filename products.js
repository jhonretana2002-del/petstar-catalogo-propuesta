const PRODUCTS = [
  {
    "id": "b1",
    "brand": "Balance",
    "name": "Adulto · Razas pequeñas",
    "desc": "Pollo. Empaque de 2 kg visible en la referencia.",
    "category": "perros",
    "packWeight": 2,
    "bulk": 2400,
    "packPrice": 4400,
    "image": "codex-clipboard-484794ab-7256-43ca-addc-1371ea619d52.jpg",
    "crop": [
      350,
      900
    ],
    "minimum": 0.5,
    "step": 0.25,
    "weightVerified": true
  },
  {
    "id": "b2",
    "brand": "Balance",
    "name": "Adulto · Piel y pelo",
    "desc": "Todas las razas. Cerdo y pollo. Referencia de 9,07 kg.",
    "category": "perros",
    "packWeight": 9.07,
    "bulk": 2300,
    "packPrice": 18500,
    "image": "codex-clipboard-3b6d3efd-f38c-4e7c-8f60-884c16c43ae2.jpg",
    "crop": [
      380,
      822
    ],
    "minimum": 0.5,
    "step": 0.25,
    "weightVerified": true
  },
  {
    "id": "b3",
    "brand": "Balance",
    "name": "Adulto · Razas medianas",
    "desc": "Cordero. Empaque de 2 kg visible en la referencia.",
    "category": "perros",
    "packWeight": 2,
    "bulk": 2500,
    "packPrice": 4600,
    "image": "codex-clipboard-d5217eeb-376b-4694-8e0e-30a3a8112753.jpg",
    "crop": [
      422,
      900
    ],
    "minimum": 0.5,
    "step": 0.25,
    "weightVerified": true
  },
  {
    "id": "b4",
    "brand": "Balance",
    "name": "Adulto · Control de peso",
    "desc": "Todas las razas. Cerdo y pollo. Referencia de 9,07 kg.",
    "category": "perros",
    "packWeight": 9.07,
    "bulk": 2400,
    "packPrice": 19500,
    "image": "codex-clipboard-4f13866a-6dab-4e73-886e-765110eff553.jpg",
    "crop": [
      381,
      903
    ],
    "minimum": 0.5,
    "step": 0.25,
    "weightVerified": true
  },
  {
    "id": "b5",
    "brand": "Balance",
    "name": "Cachorro · Razas pequeñas",
    "desc": "Pollo. Empaque de 2 kg visible en la referencia.",
    "category": "perros",
    "packWeight": 2,
    "bulk": 2600,
    "packPrice": 4800,
    "image": "codex-clipboard-67f1e8cf-2640-4c4a-9a1b-49032c20c8d8.jpg",
    "crop": [
      471,
      900
    ],
    "minimum": 0.5,
    "step": 0.25,
    "weightVerified": true
  },
  {
    "id": "n1",
    "brand": "NutriSource",
    "name": "Cachorro · Razas pequeñas y medianas",
    "desc": "Chicken Meal & Rice Recipe. Peso del empaque ilustrativo.",
    "category": "perros",
    "packWeight": 6.8,
    "bulk": 5100,
    "packPrice": 32000,
    "image": "codex-clipboard-131c517e-8a11-4bca-9366-58803b99c90e.jpg",
    "crop": [
      418,
      900
    ],
    "minimum": 0.5,
    "step": 0.25,
    "weightVerified": false
  },
  {
    "id": "n2",
    "brand": "NutriSource",
    "name": "Lamb Meal & Rice Recipe",
    "desc": "Receta de cordero y arroz. Peso del empaque ilustrativo.",
    "category": "perros",
    "packWeight": 6.8,
    "bulk": 5300,
    "packPrice": 33500,
    "image": "codex-clipboard-d674b584-58ad-4aeb-8a7f-22450b09e35c.jpg",
    "crop": [
      292,
      900
    ],
    "minimum": 0.5,
    "step": 0.25,
    "weightVerified": false
  },
  {
    "id": "n3",
    "brand": "NutriSource",
    "name": "Adulto · Chicken & Rice",
    "desc": "Receta de pollo y arroz. Peso del empaque ilustrativo.",
    "category": "perros",
    "packWeight": 6.8,
    "bulk": 4900,
    "packPrice": 31000,
    "image": "codex-clipboard-5ad63da7-3018-4944-b74f-15b5c479f7ca.jpg",
    "crop": [
      354,
      900
    ],
    "minimum": 0.5,
    "step": 0.25,
    "weightVerified": false
  },
  {
    "id": "v1",
    "brand": "PureVita",
    "name": "Salmon & Potato Entrée",
    "desc": "Línea NutriSource. Salmón y papa. Peso ilustrativo.",
    "category": "perros",
    "packWeight": 6.8,
    "bulk": 6200,
    "packPrice": 39000,
    "image": "codex-clipboard-3448afa9-1d49-4a6d-a15c-cc54cd0d2611.jpg",
    "crop": [
      481,
      867
    ],
    "minimum": 0.5,
    "step": 0.25,
    "weightVerified": false
  },
  {
    "id": "v2",
    "brand": "PureVita",
    "name": "Duck & Oatmeal Entrée",
    "desc": "Línea NutriSource. Pato y avena. Peso ilustrativo.",
    "category": "perros",
    "packWeight": 6.8,
    "bulk": 6300,
    "packPrice": 40000,
    "image": "codex-clipboard-ddadcc3d-f32b-471f-899a-ae3a95cef44f.jpg",
    "crop": [
      366,
      900
    ],
    "minimum": 0.5,
    "step": 0.25,
    "weightVerified": false
  },
  {
    "id": "n4",
    "brand": "NutriSource",
    "name": "Senior · Chicken & Rice",
    "desc": "Receta para perros de 7 años o más, según el empaque. Peso ilustrativo.",
    "category": "perros",
    "packWeight": 6.8,
    "bulk": 5200,
    "packPrice": 33000,
    "image": "codex-clipboard-e5703fcf-7ae7-46dc-a553-527f9346618a.jpg",
    "crop": [
      338,
      900
    ],
    "minimum": 0.5,
    "step": 0.25,
    "weightVerified": false
  },
  {
    "id": "a1",
    "brand": "ALPO",
    "name": "Adulto · Todos los tamaños",
    "desc": "Marca indicada por el cliente. Fotografía por incorporar.",
    "category": "perros",
    "packWeight": 15,
    "bulk": 1800,
    "packPrice": 24000,
    "image": null,
    "crop": [
      350,
      900
    ],
    "minimum": 0.5,
    "step": 0.25,
    "weightVerified": true
  },
  {
    "id": "p1",
    "brand": "Pro Pet",
    "name": "Adulto",
    "desc": "Marca indicada por el cliente. Fotografía por incorporar.",
    "category": "perros",
    "packWeight": 18,
    "bulk": 1600,
    "packPrice": 26000,
    "image": null,
    "crop": [
      350,
      900
    ],
    "minimum": 0.5,
    "step": 0.25,
    "weightVerified": true
  },
  {
    "id": "f1",
    "brand": "Félix",
    "name": "Megamix · Adulto",
    "desc": "Referencia de alimento seco. Variedad local por confirmar.",
    "category": "gatos",
    "packWeight": 3,
    "bulk": 2900,
    "packPrice": 8000,
    "image": null,
    "crop": [
      350,
      900
    ],
    "minimum": 0.5,
    "step": 0.25,
    "weightVerified": true
  },
  {
    "id": "f2",
    "brand": "Félix",
    "name": "Megamix · Gatitos",
    "desc": "Referencia de alimento seco. Presentación ilustrativa.",
    "category": "gatos",
    "packWeight": 1.5,
    "bulk": 3200,
    "packPrice": 4500,
    "image": null,
    "crop": [
      350,
      900
    ],
    "minimum": 0.5,
    "step": 0.25,
    "weightVerified": false
  },
  {
    "id": "h1",
    "brand": "Por confirmar",
    "name": "Alimento para hámster",
    "desc": "Ficha conceptual. Marca, fórmula y empaque por definir con la tienda.",
    "category": "hamsters",
    "packWeight": 0.5,
    "bulk": 4200,
    "packPrice": 2300,
    "image": null,
    "crop": [
      350,
      900
    ],
    "minimum": 0.25,
    "step": 0.25,
    "weightVerified": false
  }
];
