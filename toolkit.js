// ── SALES TOOLKIT ──
// Edit this file to update content for your reps
// Upload to GitHub when ready to publish
// Supports two languages: 'en' (English) and 'id' (Bahasa Indonesia)

var TOOLKIT = {

  // ════════════════════════════════════════════
  // SPOTLIGHT — Featured products this month
  // ════════════════════════════════════════════
  spotlight: [
    {
      id: 1,
      product: "Masterista Ceremonial Pure Matcha",
      category: { en: "Beverage Powder", id: "Minuman Powder" },
      tagline: {
        en: "Premium ceremonial grade matcha — only true grade available in Bali",
        id: "Matcha grade ceremonial premium — satu-satunya grade asli di Bali"
      },
      pitch: {
        en: "Position as a premium upsell for specialty cafés and hotel F&B. Ceremonial grade means smoother taste, less bitter, better colour in drinks. Customers who try it don't go back to regular matcha.",
        id: "Posisikan sebagai upsell premium untuk specialty café dan hotel F&B. Grade ceremonial berarti rasa lebih halus, kurang pahit, warna lebih bagus dalam minuman. Customer yang sudah coba tidak akan balik ke matcha biasa."
      },
      target: {
        en: "Specialty café, hotel all-day dining, Japanese restaurant",
        id: "Specialty café, hotel all-day dining, restoran Jepang"
      },
      tip: {
        en: "Lead with cost per serving — Rp 6K/serving vs competitor at Rp 9K+. Show them the math on a 50-cup day.",
        id: "Mulai dengan biaya per sajian — Rp 6K/sajian vs kompetitor Rp 9K+. Tunjukkan hitungannya untuk 50 gelas per hari."
      },
      focus: true
    },
    {
      id: 2,
      product: "Osterberg Fruit Crush Series",
      category: { en: "Fruit Crush", id: "Fruit Crush" },
      tagline: {
        en: "Real fruit crush — not syrup, not concentrate",
        id: "Fruit crush asli — bukan sirup, bukan konsentrat"
      },
      pitch: {
        en: "Fruit Crush is the premium alternative to syrup. Real fruit pieces, better colour, better taste. Perfect for mocktails, smoothies, fruit teas. Hotels love it for presentation.",
        id: "Fruit Crush adalah alternatif premium dari sirup. Ada buah aslinya, warna lebih bagus, rasa lebih enak. Cocok untuk mocktail, smoothie, fruit tea. Hotel sangat menyukai tampilannya."
      },
      target: {
        en: "Hotel bar, pool bar, café, restaurant",
        id: "Hotel bar, pool bar, café, restoran"
      },
      tip: {
        en: "Bring a bottle to the visit. Let the outlet taste it. One taste usually closes the deal.",
        id: "Bawa satu botol saat kunjungan. Biarkan outlet mencicipinya. Satu kali cicip biasanya langsung closing."
      },
      focus: true
    },
    {
      id: 3,
      product: "Berggold Pizza Topping Mozzarella",
      category: { en: "Butter & Mozzarella", id: "Butter & Mozzarella" },
      tagline: {
        en: "EU-standard pizza mozzarella — stable melt, clean taste, better yield",
        id: "Mozzarella pizza standard Eropa — melt stabil, rasa bersih, yield lebih baik"
      },
      pitch: {
        en: "Made in Lithuania (EU), Berggold offers consistent melt, even browning, and a clean dairy flavour — no excess oil, no watery melt. Better yield than economy grades means lower real cost per pizza.",
        id: "Dibuat di Lithuania (EU), Berggold menawarkan melt yang konsisten, browning merata, dan rasa dairy yang bersih — tidak berminyak, tidak berair. Yield lebih baik dari grade ekonomis berarti biaya nyata per pizza lebih rendah."
      },
      target: {
        en: "Pizzeria, casual dining, hotel kitchen, café with pizza menu",
        id: "Pizzeria, casual dining, dapur hotel, café dengan menu pizza"
      },
      tip: {
        en: "If customer complains about stretch: explain that long stretch = high water content. Berggold melt is rapi and stable — that's the pro kitchen standard.",
        id: "Jika customer komplain soal stretch: jelaskan bahwa stretch panjang = kadar air tinggi. Melt Berggold rapi dan stabil — itulah standar dapur profesional."
      },
      focus: true
    },
    {
      id: 4,
      product: "Pardoo Wagyu Australia",
      category: { en: "Wagyu", id: "Wagyu" },
      tagline: {
        en: "Australian Wagyu MS 4–9+ — premium marbling, consistent supply",
        id: "Wagyu Australia MS 4–9+ — marbling premium, supply konsisten"
      },
      pitch: {
        en: "Pardoo Wagyu from the Pilbara region uses F2–F4 crossbreeding for strong marbling at MS 4–9+. More beefy than Japanese A5, easier to cook, better suited for hotel and restaurant menus that need both quality and consistency.",
        id: "Pardoo Wagyu dari wilayah Pilbara menggunakan crossbreeding F2–F4 untuk marbling yang kuat di MS 4–9+. Lebih 'beefy' dari A5 Jepang, lebih mudah dimasak, lebih cocok untuk menu hotel dan restoran yang butuh kualitas sekaligus konsistensi."
      },
      target: {
        en: "Fine dining restaurant, hotel steakhouse, premium steakhouse",
        id: "Restoran fine dining, hotel steakhouse, premium steakhouse"
      },
      tip: {
        en: "Match the MS score to the outlet: MS 4/5 for budget-conscious customers, MS 6/7 for hotel menus, MS 8/9+ for fine dining signatures.",
        id: "Sesuaikan MS score dengan outlet: MS 4/5 untuk customer yang sensitif harga, MS 6/7 untuk menu hotel, MS 8/9+ untuk signature fine dining."
      },
      focus: false
    },
    {
      id: 5,
      product: "Sriboga Tepung Hime Fusion",
      category: { en: "Flour", id: "Tepung" },
      tagline: {
        en: "Japanese-grade bread flour — longer freshness, no improver needed",
        id: "Tepung roti grade Jepang — kesegaran lebih lama, tanpa improver"
      },
      pitch: {
        en: "Hime Fusion is high-protein Japanese bread flour (min 12% protein, min 34% gluten, min 64% water absorption). Produces larger bread volume, brighter crumb colour, and longer freshness without needing bread improver. Cost-efficient per loaf.",
        id: "Hime Fusion adalah tepung roti Jepang protein tinggi (protein min 12%, gluten min 34%, daya serap air min 64%). Menghasilkan volume roti yang lebih besar, warna pori-pori lebih cerah, kesegaran lebih lama tanpa perlu improver. Lebih efisien biaya per loaf."
      },
      target: {
        en: "Premium bakery, hotel pastry kitchen, artisan bread café",
        id: "Bakery premium, dapur pastry hotel, café roti artisan"
      },
      tip: {
        en: "Ask if they're currently adding bread improver. Hime eliminates that cost — a strong ROI argument.",
        id: "Tanyakan apakah mereka sekarang menambahkan bread improver. Hime menghilangkan biaya itu — argumen ROI yang kuat."
      },
      focus: false
    },
    {
      id: 6,
      product: "Sriboga Double Zero Fusion",
      category: { en: "Flour", id: "Tepung" },
      tagline: {
        en: "Italian-style pastry flour — flaky texture, stable in frozen production",
        id: "Tepung pastry gaya Italia — tekstur renyah, stabil dalam produksi frozen"
      },
      pitch: {
        en: "Double Zero Fusion (min 11% protein, min 32% gluten) is highly extensible — easy to work with for croissants, puff pastry, and laminated dough. Stable in frozen processes. Better water absorption and yield than standard pastry flour.",
        id: "Double Zero Fusion (protein min 11%, gluten min 32%) sangat extensible — mudah digunakan untuk croissant, puff pastry, dan laminated dough. Stabil pada proses frozen. Daya serap air dan yield lebih baik dari tepung pastry biasa."
      },
      target: {
        en: "Hotel pastry kitchen, bakery, croissant specialist, frozen pastry producer",
        id: "Dapur pastry hotel, bakery, spesialis croissant, produsen pastry frozen"
      },
      tip: {
        en: "If they make croissants or puff pastry — this is the natural fit. Position alongside Hime: Hime for bread, Double Zero for pastry.",
        id: "Jika mereka membuat croissant atau puff pastry — ini adalah pilihan yang tepat. Posisikan bersama Hime: Hime untuk roti, Double Zero untuk pastry."
      },
      focus: false
    }
  ],

  // ════════════════════════════════════════════
  // FAQ — Common questions from the field
  // ════════════════════════════════════════════
  faq: [
    {
      id: 1,
      question: {
        en: "Which flour is best for croissants?",
        id: "Tepung apa yang paling bagus untuk croissant?"
      },
      answer: {
        en: "Double Zero Fusion (Italian-style, min 11% protein) is the best fit for croissants and laminated dough — highly extensible, gives a flaky texture. Hime Fusion (Japanese-style, min 12% protein) is better for bread and soft buns. Use both — different products for different applications.",
        id: "Double Zero Fusion (gaya Italia, protein min 11%) paling cocok untuk croissant dan laminated dough — sangat extensible, menghasilkan tekstur renyah. Hime Fusion (gaya Jepang, protein min 12%) lebih baik untuk roti dan bun lembut. Gunakan keduanya — produk berbeda untuk aplikasi berbeda."
      }
    },
    {
      id: 2,
      question: {
        en: "Is Masterista halal certified?",
        id: "Apakah Masterista bersertifikat halal?"
      },
      answer: {
        en: "Yes — Masterista products are halal certified. Safe to offer to all outlets including those requiring halal certification.",
        id: "Ya — produk Masterista bersertifikat halal. Aman ditawarkan ke semua outlet termasuk yang memerlukan sertifikasi halal."
      }
    },
    {
      id: 3,
      question: {
        en: "What is the minimum order quantity (MOQ)?",
        id: "Berapa minimum order quantity (MOQ)?"
      },
      answer: {
        en: "No strict MOQ for most products — reps can order per carton. Volume discounts apply at 6 cartons (−3%) and 11+ cartons (−5%). Confirm with Cost Control for special pricing.",
        id: "Tidak ada MOQ ketat untuk sebagian besar produk — sales bisa order per karton. Diskon volume berlaku di 6 karton (−3%) dan 11+ karton (−5%). Konfirmasi dengan Cost Control untuk harga khusus."
      }
    },
    {
      id: 4,
      question: {
        en: "What is the difference between Masterista Syrup and Osterberg Syrup?",
        id: "Apa perbedaan Masterista Syrup dan Osterberg Syrup?"
      },
      answer: {
        en: "Masterista Syrup (850ml, 6/case) is positioned for beverage stations — wider flavour range, Indonesian brand. Osterberg Syrup (750ml, 6/case) is a European brand, premium positioning, better for hotel bars and specialty cafés.",
        id: "Masterista Syrup (850ml, 6/case) diposisikan untuk beverage station — pilihan rasa lebih luas, merek Indonesia. Osterberg Syrup (750ml, 6/case) adalah merek Eropa, positioning premium, lebih cocok untuk hotel bar dan specialty café."
      }
    },
    {
      id: 5,
      question: {
        en: "What is the shelf life of frozen meat products?",
        id: "Berapa shelf life produk daging beku?"
      },
      answer: {
        en: "Frozen meat products typically 12–24 months frozen, 3–5 days chilled after thawing. Always check the packaging for specific product dates.",
        id: "Produk daging beku umumnya 12–24 bulan dalam kondisi beku, 3–5 hari dalam kondisi dingin setelah dicairkan. Selalu periksa kemasan untuk tanggal spesifik produk."
      }
    },
    {
      id: 6,
      question: {
        en: "Can customers order small quantities of Wagyu?",
        id: "Apakah customer bisa order Wagyu dalam jumlah kecil?"
      },
      answer: {
        en: "Wagyu is sold by the piece/kg — minimum is one whole cut (e.g. one Striploin piece = 6–7kg). Not available by the slice. Best suited for fine dining restaurants and hotel steakhouses.",
        id: "Wagyu dijual per piece/kg — minimum satu potongan utuh (misal satu piece Striploin = 6–7kg). Tidak tersedia per slice. Paling cocok untuk restoran fine dining dan hotel steakhouse."
      }
    },
    {
      id: 7,
      question: {
        en: "Why does Berggold Mozzarella not stretch as long as other brands?",
        id: "Mengapa Berggold Mozzarella tidak stretch sepanjang merek lain?"
      },
      answer: {
        en: "Berggold is an EU-formula pizza topping that prioritises stable melt, even browning, and a clean dairy taste — not maximum stretch. Long stretch in cheaper brands typically comes from additives and high water content. Berggold stretch is natural and rapi. To increase stretch: defrost fully before use, raise initial oven temperature, reduce bake time by 20–40 seconds, or mix with 20–30% high-moisture mozzarella.",
        id: "Berggold adalah pizza topping formula EU yang mengutamakan melt stabil, browning merata, dan rasa dairy yang bersih — bukan stretch maksimal. Stretch panjang pada merek lebih murah biasanya berasal dari aditif dan kadar air tinggi. Stretch Berggold bersifat alami dan rapi. Untuk meningkatkan stretch: cairkan sepenuhnya sebelum digunakan, naikkan suhu oven awal, kurangi waktu panggang 20–40 detik, atau campur dengan 20–30% mozzarella high-moisture."
      }
    },
    {
      id: 8,
      question: {
        en: "What is Wagyu Marbling Score (MS) and what does it mean for pricing?",
        id: "Apa itu Wagyu Marbling Score (MS) dan apa artinya untuk harga?"
      },
      answer: {
        en: "Marbling Score (MS) measures intramuscular fat on a scale of 0–9+. Higher MS = more fat within the muscle = more tender and rich flavour. MS 4/5 is entry-level Wagyu (affordable, good for casual dining), MS 6/7 is the sweet spot for hotel menus, MS 8/9+ is fine dining premium. Price increases significantly with MS level.",
        id: "Marbling Score (MS) mengukur lemak intramuskular pada skala 0–9+. MS lebih tinggi = lebih banyak lemak di dalam otot = lebih empuk dan rasa lebih kaya. MS 4/5 adalah Wagyu entry-level (terjangkau, baik untuk casual dining), MS 6/7 adalah titik optimal untuk menu hotel, MS 8/9+ adalah premium fine dining. Harga meningkat signifikan dengan level MS."
      }
    },
    {
      id: 9,
      question: {
        en: "What is the difference between the Sriboga Ninja Pao and Ninja Cookies flours?",
        id: "Apa perbedaan tepung Sriboga Ninja Pao dan Ninja Cookies?"
      },
      answer: {
        en: "Ninja Pao Fusion (min 9% protein, min 25% gluten) is designed for Asian steamed buns (pao) — produces a whiter colour, firm and voluminous shape, soft and chewy texture. Ninja Cookies Fusion (max 10% protein, max 27% gluten) is designed for cookies — produces a crisp snap, melt-in-mouth sensation, and easy handling.",
        id: "Ninja Pao Fusion (protein min 9%, gluten min 25%) dirancang untuk pao kukus Asia — menghasilkan warna lebih putih, bentuk kokoh dan bervolume, tekstur lembut dan kenyal. Ninja Cookies Fusion (protein maks 10%, gluten maks 27%) dirancang untuk cookies — menghasilkan snap renyah, sensasi melt di mulut, dan penanganan yang mudah."
      }
    },
    {
      id: 10,
      question: {
        en: "How do Japanese condiments like Sushi Vinegar and Mirin Fu save kitchen time?",
        id: "Bagaimana kondimen Jepang seperti Sushi Vinegar dan Mirin Fu menghemat waktu dapur?"
      },
      answer: {
        en: "Sushi Vinegar 5L is pre-balanced — no need to mix rice vinegar, sugar, and salt separately. Just pour over hot rice for consistent shari every time. Mirin Fu 5L is a mirin substitute that provides the same sweet glaze and aroma for teriyaki and sukiyaki without the need to balance sweetness manually. Both reduce prep time and inconsistency in high-volume kitchens.",
        id: "Sushi Vinegar 5L sudah seimbang — tidak perlu mencampur cuka beras, gula, dan garam secara terpisah. Cukup tuangkan ke nasi panas untuk shari yang konsisten setiap saat. Mirin Fu 5L adalah pengganti mirin yang memberikan glaze manis dan aroma yang sama untuk teriyaki dan sukiyaki tanpa perlu menyeimbangkan rasa manis secara manual. Keduanya mengurangi waktu persiapan dan inkonsistensi di dapur volume tinggi."
      }
    }
  ],

  // ════════════════════════════════════════════
  // BATTLECARDS — Objection handling scripts
  // ════════════════════════════════════════════
  battlecards: [
    {
      id: 1,
      situation: {
        en: "Customer says our price is too expensive",
        id: "Customer bilang harga kita terlalu mahal"
      },
      response: {
        en: "Shift the conversation from price to cost per serving or cost per kg yield. A cheaper flour with lower yield costs more in the end. Ask: how much waste do you get from your current product?",
        id: "Alihkan pembicaraan dari harga ke biaya per sajian atau biaya per kg yield. Tepung lebih murah dengan yield lebih rendah akhirnya lebih mahal. Tanyakan: berapa banyak pemborosan dari produk yang sekarang mereka pakai?"
      },
      keypoints: {
        en: [
          "Calculate cost per serving, not cost per pack",
          "Highlight yield — premium products waste less",
          "Offer a trial carton to prove quality",
          "Volume pricing: 6 cartons gets −3%, 11+ gets −5%"
        ],
        id: [
          "Hitung biaya per sajian, bukan biaya per pack",
          "Tonjolkan yield — produk premium lebih sedikit terbuang",
          "Tawarkan trial satu karton untuk membuktikan kualitas",
          "Harga volume: 6 karton dapat −3%, 11+ dapat −5%"
        ]
      }
    },
    {
      id: 2,
      situation: {
        en: "Customer already has a supplier",
        id: "Customer sudah punya supplier"
      },
      response: {
        en: "Don't try to replace — offer to complement. Ask what products their current supplier doesn't carry well. Find the gap. Get one product in the door first.",
        id: "Jangan coba menggantikan — tawarkan pelengkap. Tanyakan produk apa yang kurang bagus dari supplier mereka sekarang. Cari celahnya. Masukkan satu produk dulu."
      },
      keypoints: {
        en: [
          "Never attack the competitor directly",
          "Ask: is there anything your current supplier struggles to deliver consistently?",
          "Offer a trial on one product — low risk for the customer",
          "Once one product is in, others follow naturally"
        ],
        id: [
          "Jangan pernah menyerang kompetitor secara langsung",
          "Tanyakan: apakah ada produk yang sulit dikirim konsisten oleh supplier sekarang?",
          "Tawarkan trial satu produk — risiko rendah untuk customer",
          "Begitu satu produk masuk, yang lain mengikuti secara alami"
        ]
      }
    },
    {
      id: 3,
      situation: {
        en: "Customer wants to negotiate price below pricelist",
        id: "Customer ingin negosiasi harga di bawah pricelist"
      },
      response: {
        en: "Hold the pricelist price but offer volume incentives instead. Volume discounts are pre-approved — price cuts are not. Redirect to commitment: if you can commit to X cartons, I can get you a better rate.",
        id: "Pertahankan harga pricelist tapi tawarkan insentif volume. Diskon volume sudah disetujui — pemotongan harga tidak. Alihkan ke komitmen: jika bisa komit X karton, bisa dapat harga lebih baik."
      },
      keypoints: {
        en: [
          "Never discount below pricelist without manager approval",
          "Redirect to volume: 6 cartons = −3%, 11+ = −5%",
          "Offer value instead: faster delivery, priority stock, product training",
          "If serious negotiation needed — involve Randy"
        ],
        id: [
          "Jangan pernah diskon di bawah pricelist tanpa persetujuan manager",
          "Alihkan ke volume: 6 karton = −3%, 11+ = −5%",
          "Tawarkan nilai tambah: pengiriman lebih cepat, prioritas stok, product training",
          "Jika negosiasi serius diperlukan — libatkan Randy"
        ]
      }
    },
    {
      id: 4,
      situation: {
        en: "Chef complains Berggold doesn't stretch enough",
        id: "Chef komplain Berggold kurang stretch"
      },
      response: {
        en: "\"Chef, Berggold is a European pizza topping that's more natural. Other brands use more additives to create long stretch. Berggold melt is more consistent, browning is better, and the taste is more dairy. If Chef needs more stretch, I can help adjust the bake time or suggest mixing with high-moisture mozzarella.\"",
        id: "\"Chef, Berggold ini pizza topping Eropa yang lebih clean. Brand sebelumnya memakai lebih banyak additives untuk bikin stretch panjang. Berggold melt-nya lebih konsisten, browning lebih bagus, dan rasanya lebih dairy. Kalau Chef butuh stretch lebih, saya bisa bantu sesuaikan bake time atau campuran keju.\""
      },
      keypoints: {
        en: [
          "Long stretch = additives + high water content — not a quality indicator",
          "Berggold: stable melt, even golden browning, cleaner dairy taste",
          "Technical fix: defrost fully, raise oven temp, reduce bake 20–40 sec",
          "Option: mix 80% Berggold + 20% high-moisture mozzarella for more stretch",
          "Ideal oven temp: 280–300°C with fine grating"
        ],
        id: [
          "Stretch panjang = additives + kadar air tinggi — bukan indikator kualitas",
          "Berggold: melt stabil, browning golden merata, rasa dairy lebih bersih",
          "Perbaikan teknis: cairkan sepenuhnya, naikkan suhu oven, kurangi panggang 20–40 detik",
          "Opsi: campur 80% Berggold + 20% mozzarella high-moisture untuk stretch lebih",
          "Suhu oven ideal: 280–300°C dengan parutan lebih halus"
        ]
      }
    },
    {
      id: 5,
      situation: {
        en: "Customer asks why Australian Wagyu is real Wagyu",
        id: "Customer mempertanyakan apakah Australian Wagyu benar-benar Wagyu asli"
      },
      response: {
        en: "Australian Wagyu is genetically real Wagyu — it uses F1 to F4 crossbreeding with authentic Japanese Wagyu genetics. F4 is 93.75% Wagyu DNA. The difference is they're raised in Australia, giving a beefier flavour that's actually preferred in many professional kitchens over Japanese A5 which can be too fatty for some dishes.",
        id: "Australian Wagyu secara genetis adalah Wagyu asli — menggunakan crossbreeding F1 hingga F4 dengan genetika Wagyu Jepang asli. F4 adalah 93,75% DNA Wagyu. Perbedaannya adalah dibesarkan di Australia, memberikan rasa lebih 'beefy' yang sebenarnya lebih disukai di banyak dapur profesional dibandingkan A5 Jepang yang bisa terlalu berlemak untuk beberapa hidangan."
      },
      keypoints: {
        en: [
          "F1 = 50% Wagyu, F2 = 75%, F3 = 87.5%, F4 = 93.75% (Purebred)",
          "Pardoo uses F2–F4 — strong marbling, MS 4–9+",
          "More beefy than Japanese A5 — easier to cook, better for steakhouse menus",
          "Consistent supply — unlike Japanese Wagyu which has seasonal availability"
        ],
        id: [
          "F1 = 50% Wagyu, F2 = 75%, F3 = 87,5%, F4 = 93,75% (Purebred)",
          "Pardoo menggunakan F2–F4 — marbling kuat, MS 4–9+",
          "Lebih 'beefy' dari A5 Jepang — lebih mudah dimasak, lebih baik untuk menu steakhouse",
          "Supply konsisten — berbeda dengan Wagyu Jepang yang ketersediaannya musiman"
        ]
      }
    },
    {
      id: 6,
      situation: {
        en: "Bakery customer says their current flour is good enough",
        id: "Customer bakery bilang tepung mereka yang sekarang sudah cukup bagus"
      },
      response: {
        en: "Don't disagree — instead, ask about specific pain points. Do they add bread improver? Do their products stay fresh long enough? Do they have issues with dough consistency? Then offer a trial bag of Hime or Double Zero as an experiment — not a replacement. Position it as: 'Let's see if there's a difference in your own kitchen.'",
        id: "Jangan tidak setuju — tanyakan tentang pain point spesifik. Apakah mereka menambahkan bread improver? Apakah produk mereka cukup lama segar? Apakah ada masalah dengan konsistensi adonan? Kemudian tawarkan trial satu kantong Hime atau Double Zero sebagai eksperimen — bukan pengganti. Posisikan sebagai: 'Mari kita lihat apakah ada perbedaan di dapur Anda sendiri.'"
      },
      keypoints: {
        en: [
          "Ask about bread improver usage — Hime eliminates that cost",
          "Ask about shelf life / freshness complaints from customers",
          "Offer a trial bag — low commitment, high impact",
          "EAPP User Development Framework: lead with results, not product specs"
        ],
        id: [
          "Tanyakan penggunaan bread improver — Hime menghilangkan biaya itu",
          "Tanyakan tentang shelf life / keluhan kesegaran dari customer mereka",
          "Tawarkan trial satu kantong — komitmen rendah, dampak tinggi",
          "EAPP User Development Framework: mulai dengan hasil, bukan spesifikasi produk"
        ]
      }
    }
  ],

  // ════════════════════════════════════════════
  // MODULES — Product training reference cards
  // ════════════════════════════════════════════
  modules: [
    {
      id: 1,
      title: { en: "Berggold Mozzarella — Full Training", id: "Berggold Mozzarella — Pelatihan Lengkap" },
      division: "MKU",
      color: "#C8242A",
      icon: "🧀",
      sections: [
        {
          heading: { en: "What is it?", id: "Apa ini?" },
          content: {
            en: "Berggold Mozzarella Type 45% FIDM — a pizza topping mozzarella (analog/processed) made in Lithuania, EU. Formula: pasteurised skim milk, 23% palm oil, salt, starter culture, microbial rennet. It is NOT full-dairy mozzarella — it is a pizza topping with vegetable fat (clean EU formula).",
            id: "Berggold Mozzarella Type 45% FIDM — mozzarella pizza topping (analog/processed) dibuat di Lithuania, EU. Formula: susu skim pasteurisasi, minyak sawit 23%, garam, starter culture, rennet mikroba. Ini BUKAN mozzarella full-dairy — ini adalah pizza topping dengan vegetable fat (formula EU yang bersih)."
          }
        },
        {
          heading: { en: "Key Technical Properties", id: "Sifat Teknis Utama" },
          content: {
            en: "✔ Very stable melt — no separation, no oil pooling\n✔ Even browning — attractive golden colour\n✔ Wide coverage — 1g covers more area\n✔ Medium stretch — natural stretch, not additive-boosted\n✔ Clean dairy taste — not artificial or overly salty",
            id: "✔ Melt sangat stabil — tidak pecah, tidak berminyak\n✔ Browning merata — tampak golden brown yang cantik\n✔ Coverage luas — 1 gram menutupi area lebih besar\n✔ Stretch sedang — stretch alami, tidak menggunakan booster\n✔ Rasa dairy yang bersih — tidak artifisial atau terlalu asin"
          }
        },
        {
          heading: { en: "vs Polmlek (Competitor)", id: "vs Polmlek (Kompetitor)" },
          content: {
            en: "Polmlek: very long stretch, melts fast, slightly oily, flat flavour — suited for economy pizza outlets. Berggold: neat stable stretch, richer dairy taste, less oil, better browning — suited for hotel, premium restaurant, franchise pizza. Key message: 'If you want long stretch, Polmlek wins. If you want pizza that looks more premium, with clean melt and natural flavour — Berggold is far better.'",
            id: "Polmlek: stretch sangat panjang, meleleh cepat, agak berminyak, rasa flat — cocok untuk outlet pizza ekonomis. Berggold: stretch rapi dan stabil, rasa dairy lebih kaya, lebih sedikit minyak, browning lebih bagus — cocok untuk hotel, restoran premium, franchise pizza. Pesan utama: 'Kalau cari stretch super panjang, Polmlek memang menang. Tapi kalau mau hasil pizza yang kelihatan lebih premium, dengan melt rapi dan rasa lebih natural, Berggold jauh lebih bagus.'"
          }
        },
        {
          heading: { en: "Handling Complaints", id: "Mengatasi Komplain" },
          content: {
            en: "• 'Too bland/not salty': Good mozzarella is low-salt to melt cleanly. Adjust saltiness from the sauce.\n• 'Cheese separates from dough': Usually a kitchen technique issue — sauce too watery, oven temp unstable, grating too coarse, or toppings too heavy.\n• 'Not enough stretch': Use finer grating, ensure full defrost, raise initial oven temp, reduce bake by 20–40 sec, or mix 80/20 with high-moisture mozzarella.\n• Protocol: fine grating, not-too-watery sauce, oven 280–300°C, avoid heavy toppings.",
            id: "• 'Kurang asin / rasanya bland': Mozzarella bagus memang low-salt supaya meleleh rapi. Sesuaikan keasinan dari saus.\n• 'Keju tidak blend, terpisah dengan saus/dough': Biasanya masalah teknik dapur — saus terlalu berair, suhu oven tidak stabil, parutan terlalu besar, atau topping terlalu berat.\n• 'Tidak stretch panjang': Gunakan parutan lebih halus, pastikan dicairkan sepenuhnya, naikkan suhu oven awal, kurangi panggang 20–40 detik, atau campur 80/20 dengan mozzarella high-moisture.\n• Protokol: parutan halus, saus tidak terlalu berair, oven 280–300°C, hindari topping terlalu berat."
          }
        }
      ]
    },
    {
      id: 2,
      title: { en: "Wagyu — Sales Training", id: "Wagyu — Pelatihan Penjualan" },
      division: "MKS",
      color: "#163C70",
      icon: "🐄",
      sections: [
        {
          heading: { en: "What is Wagyu?", id: "Apa itu Wagyu?" },
          content: {
            en: "Wagyu = cattle breed known for high intramuscular fat (marbling). Higher marbling → more tender, more aromatic, more premium. Australia uses Wagyu crossbreeding (F1–F4) to control quality and cost. All are real cattle — no artificial product. Only controlled breeding.",
            id: "Wagyu = jenis sapi yang dikenal memiliki lemak intramuskular tinggi (marbling). Marbling lebih tinggi → lebih empuk, lebih beraroma, lebih premium. Australia menggunakan crossbreeding Wagyu (F1–F4) untuk mengontrol kualitas dan biaya. Semua adalah sapi asli — tidak ada produk buatan. Hanya proses breeding yang terkontrol."
          }
        },
        {
          heading: { en: "Blood Level (F1–F4)", id: "Level Darah (F1–F4)" },
          content: {
            en: "F1 (50% Wagyu) — MS 3–6, entry level\nF2 (75% Wagyu) — MS 5–7, stronger marbling\nF3 (87.5% Wagyu) — MS 6–9, high marbling\nF4 (93.75% Wagyu) — MS 7–9+, near full-blood character, considered Purebred in Australia\n\nPardoo Wagyu uses F2–F4 for consistent MS 4–9+.",
            id: "F1 (50% Wagyu) — MS 3–6, level dasar\nF2 (75% Wagyu) — MS 5–7, marbling lebih kuat\nF3 (87,5% Wagyu) — MS 6–9, marbling tinggi\nF4 (93,75% Wagyu) — MS 7–9+, karakter hampir full-blood, dianggap Purebred di Australia\n\nPardoo Wagyu menggunakan F2–F4 untuk MS konsisten 4–9+."
          }
        },
        {
          heading: { en: "Marbling Score Guide", id: "Panduan Marbling Score" },
          content: {
            en: "MS 4/5 — Entry Wagyu. Good marbling, affordable. → 'Budget-conscious customer'\nMS 6/7 — Mid Wagyu. Balanced price and quality, best seller for hotels. → 'Best Value'\nMS 8/9 — Premium. Intense marbling, very tender. → 'Premium Steakhouse'\nMS 9+ — Luxury. Extremely thick marbling, buttery texture. → 'Fine Dining Signature'",
            id: "MS 4/5 — Wagyu Entry. Marbling bagus, terjangkau. → 'Customer sensitif harga'\nMS 6/7 — Wagyu Menengah. Harga dan kualitas seimbang, paling laku untuk hotel. → 'Best Value'\nMS 8/9 — Premium. Marbling intens, sangat lembut. → 'Premium Steakhouse'\nMS 9+ — Luxury. Marbling sangat tebal, tekstur seperti mentega. → 'Fine Dining Signature'"
          }
        },
        {
          heading: { en: "Sales Script", id: "Script Penjualan" },
          content: {
            en: "\"Wagyu is different because the fat grows inside the meat, not on the outside. The more Wagyu DNA → the higher the marbling. The higher the marbling → the more tender, richer, and juicier. Pardoo Wagyu is Australian Wagyu with MS 4–9+, suitable for restaurants that need quality and consistency.\"",
            id: "\"Wagyu berbeda karena lemaknya tumbuh di dalam daging, bukan di luar. Semakin banyak DNA Wagyu → semakin tinggi marbling. Semakin tinggi marbling → semakin empuk, lebih rich, lebih juicy. Pardoo Wagyu adalah Wagyu Australia dengan MS 4–9+, cocok untuk restoran yang butuh kualitas dan konsistensi.\""
          }
        }
      ]
    },
    {
      id: 3,
      title: { en: "Sriboga Fusion Flour — Full Range", id: "Tepung Sriboga Fusion — Rangkaian Lengkap" },
      division: "MKS",
      color: "#1A7A45",
      icon: "🌾",
      sections: [
        {
          heading: { en: "Hime Fusion — Japanese Bread Flour", id: "Hime Fusion — Tepung Roti Jepang" },
          content: {
            en: "Protein min 12% | Gluten min 34% | Water absorption min 64%\nBest for: Japanese bread, soft buns, sandwich bread, loaves\nKey benefits: Larger bread volume, brighter crumb colour, longer freshness, no improver needed, cost-efficient per loaf",
            id: "Protein min 12% | Gluten min 34% | Daya serap air min 64%\nTerbaik untuk: Roti Jepang, bun lembut, roti sandwich, loaf\nKeunggulan utama: Volume roti lebih besar, warna pori-pori lebih cerah, kesegaran lebih lama, tidak perlu improver, lebih efisien biaya per loaf"
          }
        },
        {
          heading: { en: "Double Zero Fusion — Italian Pastry Flour", id: "Double Zero Fusion — Tepung Pastry Italia" },
          content: {
            en: "Protein min 11% | Gluten min 32% | Water absorption min 63%\nBest for: Croissants, puff pastry, pizza dough, laminated dough\nKey benefits: Highly extensible dough, flaky crisp texture, stable in frozen production, high water absorption and yield",
            id: "Protein min 11% | Gluten min 32% | Daya serap air min 63%\nTerbaik untuk: Croissant, puff pastry, adonan pizza, laminated dough\nKeunggulan utama: Adonan sangat extensible, tekstur renyah (flaky), stabil dalam produksi frozen, daya serap air dan yield tinggi"
          }
        },
        {
          heading: { en: "Yokozuna Fusion — Premium Cake Flour", id: "Yokozuna Fusion — Tepung Cake Premium" },
          content: {
            en: "Protein max 9.5% | Gluten max 26% | Water absorption min 60%\nBest for: Chiffon cake, sponge cake, layered cake\nKey benefits: Brighter pore colour in cake, finer and more uniform crumb, softer and more moist texture",
            id: "Protein maks 9,5% | Gluten maks 26% | Daya serap air min 60%\nTerbaik untuk: Chiffon cake, sponge cake, layered cake\nKeunggulan utama: Warna pori-pori cake lebih cerah, pori-pori lebih halus dan seragam, tekstur lebih lembut dan moist"
          }
        },
        {
          heading: { en: "Ninja Pao Fusion — Asian Steamed Bun Flour", id: "Ninja Pao Fusion — Tepung Pao Asia" },
          content: {
            en: "Protein min 9% | Gluten min 25% | Water absorption min 60%\nBest for: Asian steamed buns (pao), mantou, Asian dim sum dough\nKey benefits: Whiter pao colour, firm and voluminous shape, soft and chewy texture",
            id: "Protein min 9% | Gluten min 25% | Daya serap air min 60%\nTerbaik untuk: Pao kukus Asia, mantou, adonan dim sum Asia\nKeunggulan utama: Warna pao lebih putih, bentuk kokoh dan bervolume, tekstur lembut dan kenyal"
          }
        },
        {
          heading: { en: "Ninja Cookies Fusion — Cookie Flour", id: "Ninja Cookies Fusion — Tepung Cookies" },
          content: {
            en: "Protein max 10% | Gluten max 27% | Water absorption min 60%\nBest for: Shortbread cookies, butter cookies, sandwich cookies\nKey benefits: Clean cookie snap, melt-in-mouth sensation, easy to handle in production",
            id: "Protein maks 10% | Gluten maks 27% | Daya serap air min 60%\nTerbaik untuk: Shortbread cookies, butter cookies, sandwich cookies\nKeunggulan utama: Snap cookies yang bersih, sensasi melt di mulut, mudah ditangani dalam produksi"
          }
        }
      ]
    },
    {
      id: 4,
      title: { en: "Japanese Condiments — Reference Card", id: "Kondimen Jepang — Kartu Referensi" },
      division: "MKU",
      color: "#B07D1A",
      icon: "🍱",
      sections: [
        {
          heading: { en: "Core Sushi Condiments", id: "Kondimen Sushi Utama" },
          content: {
            en: "Sushi Soy Sauce 5L — Balanced flavour, light aroma, won't overpower raw fish. Use for sashimi dipping, sushi roll base, nikiri sauce. Selling point: Safe for raw fish, not bitter, ideal for high-volume restaurant (5L pack).\n\nSushi Vinegar 5L — Pre-balanced rice vinegar, mild acidity, slightly sweet. Use for shari rice, Japanese pickles (sunomono), dressings. Selling point: No need to mix sugar and salt separately — consistent shari every time.\n\nMirin Fu 5L — Mirin substitute, sweet glaze and aroma. Use for teriyaki base, sukiyaki, yakiniku, meat marinade. Selling point: Consistent flavour, cost-effective, beautiful finishing glaze.",
            id: "Sushi Soy Sauce 5L — Rasa seimbang, aroma ringan, tidak menutupi rasa ikan mentah. Gunakan untuk cocolan sashimi, base sushi roll, saus nikiri. Selling point: Aman untuk ikan mentah, tidak pahit, ideal untuk restoran volume besar (kemasan 5L).\n\nSushi Vinegar 5L — Cuka beras yang sudah seimbang, keasaman ringan, sedikit manis. Gunakan untuk nasi shari, acar Jepang (sunomono), dressing. Selling point: Tidak perlu mencampur gula dan garam terpisah — shari konsisten setiap saat.\n\nMirin Fu 5L — Pengganti mirin, glaze manis dan aroma. Gunakan untuk base teriyaki, sukiyaki, yakiniku, marinasi daging. Selling point: Rasa konsisten, ekonomis, glaze finishing yang indah."
          }
        },
        {
          heading: { en: "Ready-to-Use Sauces", id: "Saus Siap Pakai" },
          content: {
            en: "Teriyaki Sauce 1.9L — Sweet-savoury Japanese flavour, thick texture, easy to glaze. Use for chicken/beef/salmon teriyaki. No mixing needed — consistent every batch.\n\nUnagi Sauce 1.9L — Sweet thick soy-based sauce, caramel-like. Use for unagi topping, sushi roll finishing, donburi glaze, grilled seafood. Glossy premium appearance — great for fusion menus too.",
            id: "Teriyaki Sauce 1.9L — Rasa manis-gurih khas Jepang, tekstur kental, mudah di-glaze. Gunakan untuk teriyaki ayam/daging/salmon. Tidak perlu mixing — konsisten setiap batch.\n\nUnagi Sauce 1.9L — Saus berbasis kecap manis kental, rasa karamel. Gunakan untuk topping unagi, finishing sushi roll, glaze donburi, grilled seafood. Tampilan glossy premium — cocok juga untuk menu fusion."
          }
        },
        {
          heading: { en: "Key Questions to Ask Chefs", id: "Pertanyaan Kunci untuk Chef" },
          content: {
            en: "• What Japanese menu items sell most?\n• Is your kitchen focused on authentic flavour or kitchen efficiency?\n• Do you make shari rice daily? How do you currently balance the seasoning?\n• Do you use teriyaki or glazing sauces on your menu?\n\nFocus the pitch on kitchen function and time efficiency — not just taste.",
            id: "• Menu Jepang apa yang paling banyak terjual?\n• Apakah dapur Anda fokus pada rasa autentik atau efisiensi dapur?\n• Apakah Anda membuat nasi shari setiap hari? Bagaimana Anda menyeimbangkan bumbunya sekarang?\n• Apakah Anda menggunakan saus teriyaki atau glazing pada menu Anda?\n\nFokuskan pitch pada fungsi dapur dan efisiensi waktu — bukan hanya rasa."
          }
        }
      ]
    },
    {
      id: 5,
      title: { en: "Chinese Condiments — Reference Card", id: "Kondimen China — Kartu Referensi" },
      division: "MKS",
      color: "#6B3FA0",
      icon: "🥡",
      sections: [
        {
          heading: { en: "Sauces & Seasonings", id: "Saus & Bumbu Masak" },
          content: {
            en: "KCT Dark Soy Sauce — Deep brown colour and caramel aroma. Use for semur, ayam kecap, fried noodles.\nTiparos Fish Sauce — Strong umami from fish fermentation. Use as salt substitute in Thai cooking, tom yum base.\nMee Chun Chu Hou Sauce — Fermented soy sauce for meat. Best for braised beef brisket — tenderises and flavours.\nMee Chun Sesame Sauce — Thick sesame paste, savoury nutty flavour. Use for hot pot dipping, cold noodles, salad dressing.\nThree Sheep Rice Vinegar — Mild acidity, softer than white vinegar. Use for pickles, sweet-sour sauce, dumpling dipping sauce.\nVe-Tsin Gourmet Powder — Pure MSG flavour enhancer. Small amounts elevate soups and stir-fries.",
            id: "KCT Dark Soy Sauce — Warna cokelat pekat dan aroma karamel. Gunakan untuk semur, ayam kecap, mie goreng.\nTiparos Fish Sauce — Rasa gurih (umami) kuat dari fermentasi ikan. Pengganti garam untuk masakan Thailand, base tom yum.\nMee Chun Chu Hou Sauce — Saus fermentasi kedelai untuk daging. Terbaik untuk braised beef brisket — mengempukkan dan memberikan rasa.\nMee Chun Sesame Sauce — Pasta wijen kental, rasa gurih kacang. Gunakan untuk cocolan hot pot, mie dingin, dressing salad.\nThree Sheep Rice Vinegar — Keasaman ringan, lebih lembut dari cuka putih. Gunakan untuk acar, saus asam manis, cocolan dumpling.\nVe-Tsin Gourmet Powder — Penguat rasa MSG murni. Sedikit saja menonjolkan rasa sup dan tumisan."
          }
        },
        {
          heading: { en: "Specialty Oils", id: "Minyak Spesialis" },
          content: {
            en: "Double Happiness Sesame Oil Black — Stronger, sharper aroma. Best for herbal dishes and soup finishing.\nDouble Happiness Sesame Oil White — More versatile. Drizzle on congee or stir-fries just before serving.\nIKPS Chilli Oil Red — Bright red colour and clean chilli heat. Good for dim sum dipping.\nIKPS Mala Chilli Oil — Contains Sichuan pepper for a numbing/tingling sensation. Signature of Sichuan cuisine.",
            id: "Double Happiness Sesame Oil Hitam — Aroma lebih kuat dan tajam. Terbaik untuk masakan herbal dan finishing sup.\nDouble Happiness Sesame Oil Putih — Lebih serbaguna. Teteskan di atas bubur atau tumisan sesaat sebelum disajikan.\nIKPS Chilli Oil Merah — Warna merah menyala dan pedas cabai yang bersih. Cocok untuk cocolan dim sum.\nIKPS Mala Chilli Oil — Mengandung lada Sichuan yang memberikan efek kebas/getar di lidah. Khas masakan Sichuan."
          }
        }
      ]
    },
    {
      id: 6,
      title: { en: "Italian Products — Reference Card", id: "Produk Italia — Kartu Referensi" },
      division: "MKU",
      color: "#1A6B7A",
      icon: "🍝",
      sections: [
        {
          heading: { en: "O'Sole Olives & Preserved Vegetables", id: "O'Sole Olives & Sayuran Awetan" },
          content: {
            en: "Green Olives (Denocciolate) — Pitted, stored in brine, ready to use. Firm texture, slightly salty and bitter, fresh vegetal aroma. Use for pizza topping, salad, pasta, antipasti, Mediterranean garnish. Cross-sell with olive oil and canned tomato products.\n\nBlack Olives (Denocciolate) — Pitted, stored in brine. Dark purple to black, slightly fruity aroma. Use for pizza quattro stagioni, pasta puttanesca, Mediterranean fish dishes. Operational value: no pitting needed, consistent size.\n\nSun-dried Tomatoes in Oil — Semi-dried tomatoes preserved in oil, intense sweet-savoury umami flavour. Use for creamy pasta, focaccia topping, gourmet sandwich spread, chicken with sun-dried tomato sauce. Strong flavour impact in small quantities — long shelf life.",
            id: "Olive Hijau (Denocciolate) — Sudah tanpa biji, disimpan dalam brine, siap pakai. Tekstur firm, sedikit asin dan pahit, aroma segar khas sayuran. Gunakan untuk topping pizza, salad, pasta, antipasti, garnish Mediterranean. Cross-sell dengan olive oil dan produk tomat kalengan.\n\nOlive Hitam (Denocciolate) — Sudah tanpa biji, disimpan dalam brine. Warna ungu gelap hingga hitam, aroma fruity ringan. Gunakan untuk pizza quattro stagioni, pasta puttanesca, ikan panggang gaya Mediterranean. Nilai operasional: tidak perlu membuang biji, ukuran konsisten.\n\nSun-dried Tomatoes dalam Minyak — Tomat semi kering diawetkan dalam minyak, rasa manis-gurih umami intens. Gunakan untuk pasta creamy, topping focaccia, olesan sandwich gourmet, ayam dengan saus sun-dried tomato. Dampak rasa kuat dalam jumlah kecil — shelf life panjang."
          }
        },
        {
          heading: { en: "Pesto & Pasta", id: "Pesto & Pasta" },
          content: {
            en: "Pesto di Pistacchio — Pistachio-based pesto sauce, creamy, nutty, slightly sweet. Use for linguine, salmon with pistachio cream, flatbread, pasta with burrata. No blending needed — consistent flavour. High menu differentiation value.\n\nPasta Range (Fettuccine / Linguine / Spaghetti / Spaghetti Nero):\n• Fettuccine — flat, wide pasta, best for heavy cream sauces (Alfredo, mushroom cream)\n• Linguine — slightly flat long pasta, best for seafood and oil-based sauces\n• Spaghetti — round classic pasta, works with almost any sauce\n• Spaghetti Nero — black squid ink pasta, light seafood aroma, strong visual premium appeal\n\nAll pasta: long shelf life, high portion yield, easy portion control.",
            id: "Pesto di Pistacchio — Saus pesto berbasis kacang pistachio, creamy, nutty, sedikit manis. Gunakan untuk linguine, salmon dengan pistachio cream, flatbread, pasta dengan burrata. Tidak perlu blending — rasa konsisten. Nilai diferensiasi menu yang tinggi.\n\nRangkaian Pasta (Fettuccine / Linguine / Spaghetti / Spaghetti Nero):\n• Fettuccine — pasta pipih lebar, terbaik untuk saus cream berat (Alfredo, mushroom cream)\n• Linguine — pasta panjang agak pipih, terbaik untuk saus berbasis seafood dan minyak\n• Spaghetti — pasta bulat klasik, cocok untuk hampir semua jenis saus\n• Spaghetti Nero — spaghetti hitam dengan tinta cumi, aroma seafood ringan, tampilan visual premium yang kuat\n\nSemua pasta: shelf life panjang, yield porsi tinggi, kontrol porsi mudah."
          }
        }
      ]
    },
    {
      id: 7,
      title: { en: "User Development Framework (Bakery Sales)", id: "User Development Framework (Penjualan Bakery)" },
      division: "MKS",
      color: "#7A3A1A",
      icon: "🎯",
      sections: [
        {
          heading: { en: "The 8-Step Process", id: "Proses 8 Langkah" },
          content: {
            en: "Step 1: Identify the bakery — categorise by type (traditional, artisan, chain, factory, HORECA). Identify key contact (owner, chef, R&D).\nStep 2: Visit — introduce yourself and company, exchange cards, gather business insights.\nStep 3: Lead with results — bring samples for blind taste testing. Ask what they currently produce. Observe appearance, aroma, texture, crumb structure.\nStep 4: Probe butter pain points — multiple suppliers? Limited shelf life? Waste costs? Premium positioning?\nStep 5: Define our role — 'Not here to replace your butter. Here to help identify 2–3 recipes for trial.'\nStep 6a: Conduct the baking trial — wear hairnet and mask, coordinate with their team, monitor results.\nStep 6b: Report — Technical Visit & Solution Validation Report.\nStep 7: Trial purchase — issue quotation, run product under normal production for 3–6 months before market feedback.\nStep 8: Marketing rollout — finalise formula, cost calculation, packaging, brand communication.",
            id: "Langkah 1: Identifikasi bakery — kategorikan berdasarkan tipe (tradisional, artisan, chain, factory, HORECA). Identifikasi kontak kunci (pemilik, chef, R&D).\nLangkah 2: Kunjungan — perkenalkan diri dan perusahaan, tukar kartu, kumpulkan informasi bisnis.\nLangkah 3: Mulai dengan hasil — bawa sampel untuk blind taste testing. Tanyakan apa yang mereka buat saat ini. Amati tampilan, aroma, tekstur, struktur crumb.\nLangkah 4: Telusuri pain point butter — beberapa supplier? Shelf life terbatas? Biaya pemborosan? Positioning premium?\nLangkah 5: Definisikan peran kita — 'Bukan untuk menggantikan butter Anda. Untuk membantu mengidentifikasi 2–3 resep untuk trial.'\nLangkah 6a: Lakukan uji baking — pakai hairnet dan masker, koordinasi dengan tim mereka, pantau hasilnya.\nLangkah 6b: Laporan — Technical Visit & Solution Validation Report.\nLangkah 7: Pembelian trial — keluarkan penawaran, jalankan produk dalam kondisi produksi normal selama 3–6 bulan sebelum feedback pasar.\nLangkah 8: Marketing rollout — finalisasi formula, kalkulasi biaya, packaging, komunikasi brand."
          }
        },
        {
          heading: { en: "Demand Maturity Classification", id: "Klasifikasi Kematangan Permintaan" },
          content: {
            en: "Tier 1 — Ready to place trial order or full order\nTier 2 — Trial completed & validated, pending approval or additional trials\nTier 3 — Presentation & concept validated, trial timing dependent\n\nImportant: Do NOT negotiate price on the first visit — even for 50/100/200 carton trial orders. Market feedback takes 3–6 months after a trial order begins.",
            id: "Tier 1 — Siap melakukan trial order atau full order\nTier 2 — Trial selesai & tervalidasi, menunggu persetujuan atau trial tambahan\nTier 3 — Presentasi & konsep tervalidasi, timing trial tergantung situasi\n\nPenting: JANGAN negosiasi harga pada kunjungan pertama — bahkan untuk trial order 50/100/200 karton. Feedback pasar membutuhkan 3–6 bulan setelah trial order dimulai."
          }
        }
      ]
    }
  ]

};
