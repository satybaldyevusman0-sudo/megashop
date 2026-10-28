// MegaShop: сайттын жөндөөлөрү (тема, тексттер, категориялар, тарифтер, байланыштар)
export default {
  "slug": "megashop",
  "name": "MegaShop",
  "nameParts": [
    "Mega",
    "Shop"
  ],
  "logo": "🛍️",
  "currency": "KGS",
  "theme": {
    "primary": "#6d28d9",
    "primaryDark": "#5b21b6",
    "accent": "#f97316",
    "dark": "#1e1035"
  },
  "heroImage": "https://loremflickr.com/1600/900/shopping,mall?lock=21",
  "heroWiki": "Shopping mall",
  "contacts": {
    "phone": "+996 774 054 601",
    "instagram": "satyba1dyev18",
    "address": {
      "ky": "Бишкек ш., Кыргызстан",
      "ru": "г. Бишкек, Кыргызстан",
      "en": "Bishkek, Kyrgyzstan"
    }
  },
  "text": {
    "tagline": {
      "ky": "Бишкектеги чоң онлайн дүкөн",
      "ru": "Большой онлайн-магазин Бишкека",
      "en": "Big online store in Bishkek"
    },
    "heroTitle": {
      "ky": "Миңдеген товар — бир жерде, тез жеткирүү менен",
      "ru": "Тысячи товаров — в одном месте, с быстрой доставкой",
      "en": "Thousands of products — one place, fast delivery"
    },
    "heroText": {
      "ky": "Электроника, үй буюмдары, сулуулук, балдар үчүн, азык-түлүк жана спорт. Бишкек боюнча жеткирүү 1 күндө.",
      "ru": "Электроника, дом, красота, детям, продукты и спорт. Доставка по Бишкеку за 1 день.",
      "en": "Electronics, home, beauty, kids, groceries and sport. 1-day delivery in Bishkek."
    },
    "catalog": {
      "ky": "Каталог",
      "ru": "Каталог",
      "en": "Catalog"
    },
    "catalogText": {
      "ky": "Категория, баа жана рейтинг боюнча тандаңыз",
      "ru": "Выбирайте по категории, цене и рейтингу",
      "en": "Filter by category, price and rating"
    },
    "search": {
      "ky": "Товар издөө: наушник, чайнек…",
      "ru": "Поиск товара: наушники, чайник…",
      "en": "Search: headphones, kettle…"
    },
    "plans": {
      "ky": "MegaShop Plus",
      "ru": "MegaShop Plus",
      "en": "MegaShop Plus"
    },
    "plansText": {
      "ky": "Акысыз жеткирүү жана кошумча арзандатуулар",
      "ru": "Бесплатная доставка и дополнительные скидки",
      "en": "Free delivery and extra discounts"
    },
    "booking": {
      "ky": "Алып кетүү",
      "ru": "Самовывоз",
      "en": "Pickup"
    },
    "bookingText": {
      "ky": "Дүкөндөн алып кетүү убактысын брондоңуз",
      "ru": "Забронируйте время самовывоза",
      "en": "Book a pickup time"
    },
    "bookBtn": {
      "ky": "Алып кетүүгө брондоо",
      "ru": "Забронировать самовывоз",
      "en": "Book pickup"
    },
    "buy": {
      "ky": "Корзинага",
      "ru": "В корзину",
      "en": "Add to cart"
    },
    "about": {
      "ky": "MegaShop — Бишкектеги универсалдуу онлайн дүкөн: электроникадан азык-түлүккө чейин.",
      "ru": "MegaShop — универсальный онлайн-магазин в Бишкеке.",
      "en": "MegaShop is a universal online store in Bishkek."
    }
  },
  "categories": [
    {
      "id": "electronics",
      "name": {
        "ky": "Электроника",
        "ru": "Электроника",
        "en": "Electronics"
      },
      "icon": "🎧",
      "wiki": "Consumer electronics",
      "tags": "electronics,gadget"
    },
    {
      "id": "home",
      "name": {
        "ky": "Үй жана ашкана",
        "ru": "Дом и кухня",
        "en": "Home & kitchen"
      },
      "icon": "🏠",
      "wiki": "Kitchen",
      "tags": "kitchen,home"
    },
    {
      "id": "beauty",
      "name": {
        "ky": "Сулуулук",
        "ru": "Красота",
        "en": "Beauty"
      },
      "icon": "💄",
      "wiki": "Cosmetics",
      "tags": "cosmetics"
    },
    {
      "id": "kids",
      "name": {
        "ky": "Балдар үчүн",
        "ru": "Детям",
        "en": "Kids"
      },
      "icon": "🧸",
      "wiki": "Lego",
      "tags": "toys,kids"
    },
    {
      "id": "grocery",
      "name": {
        "ky": "Азык-түлүк",
        "ru": "Продукты",
        "en": "Grocery"
      },
      "icon": "🛒",
      "wiki": "Honey",
      "tags": "grocery,food"
    },
    {
      "id": "sport",
      "name": {
        "ky": "Спорт жана эс алуу",
        "ru": "Спорт и отдых",
        "en": "Sport & outdoors"
      },
      "icon": "⛺",
      "wiki": "Camping",
      "tags": "camping,sport"
    }
  ],
  "plans": [
    {
      "id": "plus-month",
      "icon": "⭐",
      "price": 299,
      "title": {
        "ky": "Plus — 1 ай",
        "ru": "Plus — 1 месяц",
        "en": "Plus — 1 month"
      },
      "desc": {
        "ky": "Акысыз жеткирүү 1000 сомдон",
        "ru": "Бесплатная доставка от 1000 сом",
        "en": "Free delivery from 1000 KGS"
      }
    },
    {
      "id": "plus-year",
      "icon": "💎",
      "price": 2490,
      "popular": true,
      "title": {
        "ky": "Plus — 1 жыл",
        "ru": "Plus — 1 год",
        "en": "Plus — 1 year"
      },
      "desc": {
        "ky": "Акысыз жеткирүү + 5% кешбэк",
        "ru": "Бесплатная доставка + 5% кешбэк",
        "en": "Free delivery + 5% cashback"
      }
    },
    {
      "id": "express",
      "icon": "🚀",
      "price": 350,
      "title": {
        "ky": "Экспресс жеткирүү",
        "ru": "Экспресс-доставка",
        "en": "Express delivery"
      },
      "desc": {
        "ky": "Бишкек боюнча 2 сааттын ичинде",
        "ru": "По Бишкеку за 2 часа",
        "en": "Within 2 hours in Bishkek"
      }
    }
  ],
  "booking": {
    "slots": [
      "10:00",
      "12:00",
      "14:00",
      "16:00",
      "18:00",
      "20:00"
    ],
    "formats": [
      {
        "id": "store",
        "label": {
          "ky": "Дүкөндөн",
          "ru": "Из магазина",
          "en": "From store"
        }
      },
      {
        "id": "locker",
        "label": {
          "ky": "Постамат",
          "ru": "Постамат",
          "en": "Parcel locker"
        }
      }
    ],
    "itemLabel": {
      "ky": "Товар",
      "ru": "Товар",
      "en": "Product"
    },
    "sundayOff": false
  },
  "features": [
    {
      "icon": "🚚",
      "title": {
        "ky": "1 күндө жеткирүү",
        "ru": "Доставка за 1 день",
        "en": "1-day delivery"
      },
      "text": {
        "ky": "Бишкек жана Чүй облусу боюнча.",
        "ru": "По Бишкеку и Чуйской области.",
        "en": "Bishkek and Chuy region."
      }
    },
    {
      "icon": "↩️",
      "title": {
        "ky": "14 күн кайтаруу",
        "ru": "Возврат 14 дней",
        "en": "14-day returns"
      },
      "text": {
        "ky": "Товар жакпаса — кайтарыңыз.",
        "ru": "Не подошло — верните.",
        "en": "Not happy? Return it."
      }
    },
    {
      "icon": "💳",
      "title": {
        "ky": "Онлайн төлөм",
        "ru": "Онлайн-оплата",
        "en": "Online payment"
      },
      "text": {
        "ky": "Карта же накталай.",
        "ru": "Картой или наличными.",
        "en": "Card or cash."
      }
    },
    {
      "icon": "🎁",
      "title": {
        "ky": "Акциялар",
        "ru": "Акции",
        "en": "Deals"
      },
      "text": {
        "ky": "Ар жумада жаңы арзандатуулар.",
        "ru": "Новые скидки каждую неделю.",
        "en": "New discounts every week."
      }
    }
  ],
  "stats": [
    {
      "value": "28",
      "label": {
        "ky": "товар",
        "ru": "товаров",
        "en": "products"
      }
    },
    {
      "value": "1 күн",
      "label": {
        "ky": "жеткирүү",
        "ru": "доставка",
        "en": "delivery"
      }
    },
    {
      "value": "14 күн",
      "label": {
        "ky": "кайтаруу",
        "ru": "возврат",
        "en": "returns"
      }
    },
    {
      "value": "24/7",
      "label": {
        "ky": "колдоо",
        "ru": "поддержка",
        "en": "support"
      }
    }
  ],
  "specLabels": {
    "brand": {
      "ky": "Бренд",
      "ru": "Бренд",
      "en": "Brand"
    },
    "feature": {
      "ky": "Өзгөчөлүгү",
      "ru": "Особенность",
      "en": "Feature"
    },
    "size": {
      "ky": "Көлөмү",
      "ru": "Объём / размер",
      "en": "Size"
    },
    "warranty": {
      "ky": "Кепилдик",
      "ru": "Гарантия",
      "en": "Warranty"
    }
  },
  "faq": [
    {
      "keys": [
        "жеткир",
        "доставк",
        "delivery"
      ],
      "answer": {
        "ky": "Бишкек боюнча жеткирүү 1 күндө, 3000 сомдон ашса акысыз.",
        "ru": "Доставка по Бишкеку за 1 день, от 3000 сом — бесплатно.",
        "en": "Delivery in Bishkek in 1 day, free over 3000 KGS."
      },
      "link": "/plans"
    },
    {
      "keys": [
        "кайтар",
        "возврат",
        "return"
      ],
      "answer": {
        "ky": "14 күндүн ичинде кайтарса болот.",
        "ru": "Возврат в течение 14 дней.",
        "en": "14-day returns."
      },
      "link": "/contact"
    }
  ],
  "priceNote": {
    "ky": "Баалар Бишкек дүкөндөрүнүн орточо баасына жакын, болжолдуу.",
    "ru": "Цены ориентировочные, близки к средним по Бишкеку.",
    "en": "Approximate prices, close to Bishkek averages."
  },
  "dataNote": {
    "ky": "Баалар болжолдуу (28.10.2026). Сүрөттөр: Wikipedia / Wikimedia Commons.",
    "ru": "Цены ориентировочные (28.10.2026). Фото: Wikipedia.",
    "en": "Approximate prices (28.10.2026). Photos: Wikipedia."
  },
  "sources": []
};
