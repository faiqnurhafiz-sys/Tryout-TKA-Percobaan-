const dataSejarahInten = {
    subjectId: 'sejarah_tka_inten',
    subjectName: 'Sejarah TKA (Prosus Inten TO-1)',
    category: 'Sejarah',
    categoryId: 'sejarah',
    categoryName: 'Sejarah',
    icon: '🏛️',
    questions: [
        {
            id: 's1_inten',
            question: "Sejarah merupakan salah satu ilmu pengetahuan yang memiliki ciri-ciri sama seperti ilmu pengetahuan yang lain. Yang termasuk ciri-ciri sejarah sebagai ilmu adalah...",
            options: ["Unik", "Abadi", "Penting", "Interpretative", "Empiris"],
            correct: 4,
            rationale: "Ciri-ciri sejarah sebagai ilmu adalah memiliki objek, memiliki metode, bersifat empiris, memiliki teori, dan mempunyai generalisasi."
        },
        {
            id: 's2_inten',
            question: "Penelitian sejarah adalah proses sistematis untuk mempelajari dan memahami peristiwa masa lalu guna mendapatkan pengetahuan dan makna dari kejadian tersebut... Tahap dalam penelitian sejarah untuk menguji keaslian (otentisitas) dan kredibilitas (keabsahan) sumber sejarah adalah...",
            options: ["Heuristik", "Verifikasi", "Interpretasi", "History", "Historiografi"],
            correct: 1,
            rationale: "Tahap Verifikasi (kritik sumber) bertujuan untuk menguji keaslian/otentisitas (kritik ekstern) dan kredibilitas/keabsahan (kritik intern) dari sumber sejarah."
        },
        {
            id: 's3_inten',
            question: "Nadhira berkunjung ke perpustakaan daerah. Ia sedang mengumpulkan sumber-sumber sejarah tentang seputar peralihan kekuasaan dari pemerintahan Orde Baru ke pemerintahan Reformasi. Kegiatan Nadhira tersebut dalam tahap penelitian sejarah disebut...",
            options: ["Historiografi", "Interpretasi", "Ekskavasi", "Heuristik", "Verifikasi"],
            correct: 3,
            rationale: "Tahap mengumpulkan sumber-sumber sejarah (baik dokumen, buku, maupun wawancara) disebut tahap Heuristik."
        },
        {
            id: 's4_inten',
            question: "Kerajaan Mataram Kuno berhasil merengkuh kejayaan di era pemerintahan Dinasti Syailendra abad ke-8 M. Faktor utama yang mendukung kestabilan ekonomi Kerajaan Mataram Kuno adalah...",
            options: [
                "Wilayah yang subur dan sistem irigasi yang baik mendukung sektor pertanian dan perdagangan",
                "Monopoli penuh perdagangan rempah-rempah di kawasan perairan Maluku",
                "Ketergantungan penuh pada bantuan militer dan ekonomi dari Kerajaan Sriwijaya",
                "Penerapan sistem pajak pelabuhan tanpa mengembangkan sektor agraris",
                "Eksploitasi tambang emas besar-besaran di sekitar wilayah Pegunungan Seribu"
            ],
            correct: 0,
            rationale: "Mataram Kuno merupakan kerajaan agraris sekaligus maritim yang didukung oleh wilayah daratan subur di Jawa Tengah/Jatim serta irigasi yang baik dari sungai-sungai besar."
        },
        {
            id: 's5_inten',
            question: "Kitab karangan Mpu Tantular pada masa Kerajaan Majapahit yang memuat semboyan negara Indonesia 'Bhinneka Tunggal Ika' adalah...",
            options: ["Pararaton", "Negarakertagama", "Sutasoma", "Arjunawiwaha", "Babad Tanah Jawi"],
            correct: 2,
            rationale: "Frasa 'Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa' terdapat dalam Kitab Sutasoma karya Mpu Tantular."
        },
        {
            id: 's6_inten',
            question: "Kerajaan Majapahit (1293–1500 M) mengandalkan kekuatan laut dan agraris. Berikut ini yang TIDAK termasuk faktor pendorong kejayaan Majapahit adalah...",
            options: [
                "Kerajaan ini diapit oleh dua sungai besar, yakni Sungai Brantas dan Sungai Bengawan Solo",
                "Memiliki sistem pertanian yang teratur dan efisien",
                "Memiliki banyak pelabuhan yang dibangun di daerah pesisir seperti Tuban, Gresik, dan Surabaya",
                "Kemajuan di bidang perdagangan dengan menguasai jalur rempah",
                "Menjadi pusat utama penyebaran agama Buddha di seluruh kawasan Asia Tenggara"
            ],
            correct: 4,
            rationale: "Pusat agama Buddha di Asia Tenggara pada masa klasik utamanya adalah Kerajaan Sriwijaya, bukan Majapahit."
        },
        {
            id: 's7_inten',
            question: "Faktor utama yang menyebabkan runtuh atau kemunduran Kerajaan Majapahit adalah...",
            options: [
                "Masuknya agama Islam yang ditandai dengan datangnya Laksamana Cheng Ho",
                "Perang saudara (Perang Paregreg) serta perebutan takhta di antara keluarga kerajaan",
                "Serangan mendadak dari Kerajaan Tumapel dan Singasari",
                "Konflik militer berkepanjangan dengan Batalyon Kubilai Khan dari Mongol",
                "Pemberontakan massal kaum agraris melawan penguasa daerah"
            ],
            correct: 1,
            rationale: "Kemunduran Majapahit dipicu oleh konflik internal perang saudara (Perang Paregreg) pasca wafatnya Hayam Wuruk dan Gajah Mada, disusul menguatnya pengaruh kerajaan-kerajaan Islam di pesisir."
        },
        {
            id: 's8_inten',
            // Pengganti soal gambar No. 8 (Situs Trowulan / Numismatik)
            question: "Ilmu bantu sejarah yang khusus mempelajari mata uang kuno, koin, serta stempel modal untuk menentukan usia dan keaslian sumber sejarah disebut...",
            options: ["Filologi", "Geologi", "Numismatik", "Geodesi", "Antropologi"],
            correct: 2,
            rationale: "Numismatik adalah ilmu bantu sejarah yang mempelajari mata uang, koin, atau medali kuno."
        },
        {
            id: 's9_inten',
            question: "Kapal utama yang digunakan oleh Christopher Columbus dalam pelayarannya menemukan benua Amerika (Pulau Bahama) pada tahun 1492 adalah...",
            options: ["Santa Maria", "Sao Gabriel", "Caravel Berrio", "Victoria", "Trinidad"],
            correct: 0,
            rationale: "Ekspedisi Columbus membawa 3 kapal: Santa Maria (kapal bendera utama), Pinta, dan Niña."
        },
        {
            id: 's10_inten',
            question: "Pernyataan yang tepat mengenai Raden Patah dalam sejarah pendirian Kesultanan Demak adalah...",
            options: [
                "Mendirikan Kesultanan Demak dan Masjid Agung Demak dengan dukungan Wali Songo",
                "Berhasil memperluas wilayah kekuasaan Kerajaan Mataram Islam hingga Batavia",
                "Memindahkan pusat pemerintahan dari Pajang ke Mataram",
                "Melakukan perlawanan terbuka pertama melawan armada kolonial Portugis di Malaka",
                "Menyusun kitab Babad Tanah Jawi sebagai dasar hukum kerajaan"
            ],
            correct: 0,
            rationale: "Raden Patah adalah pendiri Demak (kerajaan Islam pertama di Jawa) yang memimpin sejak akhir abad ke-15 dan mendirikan Masjid Agung Demak bersama Wali Songo."
        },
        {
            id: 's11_inten',
            question: "Kerajaan Samudera Pasai sebagai kerajaan Islam pertama di Nusantara (berdiri sekitar 1267 M) dapat berkembang pesat menjadi pusat perdagangan karena...",
            options: [
                "Memanfaatkan aliran sungai untuk mendominasi ekspor beras terbesar di Jawa",
                "Letaknya yang strategis di Selat Malaka dan kaya akan komoditas komersial seperti lada",
                "Memiliki armada laut terkuat yang berhasil menaklukkan armada Portugis",
                "Memiliki pelabuhan utama di pesisir utara Jawa bagian barat",
                "Menjadi pusat pertahanan utama dalam menentang monopoli perdagangan VOC"
            ],
            correct: 1,
            rationale: "Samudera Pasai berkembang pesat karena posisinya di pintu masuk Selat Malaka serta menjadi bandar persinggahan pedagang dari India, Arab, Persia, dan Tiongkok dengan komoditas lada."
        },
        {
            id: 's12_inten',
            question: "Pernyataan yang BENAR mengenai sejarah perkembangan kerajaan Islam di wilayah Maluku adalah...",
            options: [
                "Kerajaan Ternate mencapai puncak kejayaannya pada masa pemerintahan Sultan Baabullah",
                "Islamisasi di Maluku mendapat penolakan total dari seluruh pedagang lokal",
                "Kerajaan Tidore didirikan oleh ulama utusan dari Kesultanan Demak",
                "Kerajaan Ternate dan Tidore selalu bersatu padu melawan ekspansi Portugis sejak awal",
                "Ulama Jawa melarang hubungan perdagangan antara Maluku dan pesisir Jawa"
            ],
            correct: 0,
            rationale: "Sultan Baabullah berhasil membawa Ternate ke puncak kejayaan dan mengusir Portugis dari Benteng Nostra Senhora da Anunciada pada tahun 1575."
        },
        {
            id: 's13_inten',
            question: "Dampak positif pelaksanaan Sistem Tanam Paksa (Cultuurstelsel) bagi masyarakat pribumi Indonesia adalah...",
            options: [
                "Memulihkan krisis keuangan pemerintah kolonial Belanda",
                "Pribumi mendapatkan keuntungan finansial yang melimpah dari hasil ekspor",
                "Masyarakat pribumi mulai mengenal jenis tanaman ekspor baru dan teknik bercocok tanamnya",
                "Penduduk pribumi mendapatkan kepemilikan tanah secara cuma-cuma dari Belanda",
                "Terciptanya kerja sama yang adil dan seimbang antara petani dan pemerintah kolonial"
            ],
            correct: 2,
            rationale: "Dampak positif tak langsung dari Cultuurstelsel bagi pribumi adalah dikenalnya jenis tanaman ekspor baru (seperti kopi, teh, tebu, nila) beserta teknologi irigasi dan teknik pengolahannya."
        },
        {
            id: 's14_inten',
            question: "Tokoh humanis asal Belanda yang menentang penderitaan rakyat akibat Tanam Paksa melalui novel 'Max Havelaar' dengan nama samaran Multatuli adalah...",
            options: ["Baron van Hoevell", "Eduard Douwes Dekker", "Fransen van de Putte", "Van den Bosch", "C. Th. van Deventer"],
            correct: 1,
            rationale: "Eduard Douwes Dekker mengkritik kekejaman Tanam Paksa melalui bukunya 'Max Havelaar' menggunakan nama samaran Multatuli."
        },
        {
            id: 's15_inten',
            question: "Pada masa kolonial, di wilayah Vorstenlanden sistem Tanam Paksa tidak diberlakukan secara langsung. Istilah Vorstenlanden merujuk pada wilayah kerajaan...",
            options: ["Tarumanegara dan Pajajaran", "Galuh dan Singasari", "Surakarta dan Yogyakarta", "Demak dan Majapahit", "Aceh dan Samudera Pasai"],
            correct: 2,
            rationale: "Vorstenlanden (wilayah raja-raja) merujuk pada daerah Kasunanan Surakarta, Kasultanan Yogyakarta, Mangkunegaran, dan Pakualaman."
        },
        {
            id: 's16_inten',
            question: "Tokoh yang menentang sistem tanam paksa di Hindia Belanda dengan menerbitkan buku berjudul 'Suiker Contracten' (Kontrak-Kontrak Gula) adalah...",
            options: ["Van den Bosch", "Fransen van de Putte", "E.F.E. Douwes Dekker", "Baron van Hoevell", "Van Deventer"],
            correct: 1,
            rationale: "Fransen van de Putte menulis karangan 'Suiker Contracten' untuk mengkritik monopoli pemerintah dalam Tanam Paksa gula."
        },
        {
            id: 's17_inten',
            question: "Asas perjuangan yang diusung oleh Partai Nasional Indonesia (PNI) yang didirikan oleh Ir. Soekarno pada tahun 1927 adalah...",
            options: [
                "Self help, non-kooperatif, dan marhaenisme",
                "Self help, kooperatif, dan sosialisme",
                "Sosialisme, nasionalisme, dan liberalisme",
                "Kooperatif, swadaya, dan kapitalisme",
                "Federalisme, non-kooperatif, dan marhaenisme"
            ],
            correct: 0,
            rationale: "Asas PNI adalah Self-help (percaya pada kekuatan sendiri), Non-kooperatif (menolak kerja sama dengan pemerintah kolonial), dan Marhaenisme (ideologi pembelaan rakyat kecil)."
        },
        {
            id: 's18_inten',
            question: "Pernyataan berikut ini yang TIDAK SESUAI mengenai pendudukan Inggris di Indonesia (1811–1816) di bawah Thomas Stamford Raffles adalah...",
            options: [
                "Tujuan awal Inggris datang adalah mencari sumber rempah-rempah langsung dari daerah asal",
                "Inggris berupaya memperluas pasar bagi produk-produk hasil revolusi industrinya",
                "Tujuan utama Inggris berkembang menjadi ambisi pembumihancuran wilayah Nusantara",
                "Kekuasaan langsung Inggris di Indonesia berlangsung relatif singkat (sekitar 5 tahun)",
                "Raffles memperkenalkan sistem sewa tanah (Landrent system) di Jawa"
            ],
            correct: 2,
            rationale: "Tujuan Inggris adalah kepentingan ekonomi perdagangan dan pasar industri, bukan pembumihancuran Nusantara."
        },
        {
            id: 's19_inten',
            question: "Berakhirnya kekuasaan singkat Inggris di Indonesia dan penyerahan kembali wilayah Nusantara kepada Belanda ditandai dengan ditandatanganinya...",
            options: ["Konvensi London", "Traktat Sumatera", "Perjanjian Tordesillas", "Perjanjian Saragosa", "Perjanjian Kalijati"],
            correct: 0,
            rationale: "Konvensi London (1814) mengembalikan bekas jajahan Belanda yang direbut Inggris pasca-Perang Napoleonik."
        },
        {
            id: 's20_inten',
            question: "Organisasi semi-militer bentukan Jepang di Indonesia yang dikhususkan sebagai wadah pemuda dan tokoh pimpinan bangsa untuk memimpin barisan massa adalah...",
            options: ["Suishintai (Barisan Pelopor)", "Seinendan", "Fujinkai", "Keibodan", "Hizbullah"],
            correct: 0,
            rationale: "Suishintai (Barisan Pelopor) dibentuk pada 1944 dan dipimpin langsung oleh tokoh-tokoh nasionalis seperti Ir. Soekarno, Otto Iskandardinata, dan R.P. Soeroso."
        },
        {
            id: 's21_inten',
            question: "Organisasi pembantu kepolisian (Keibodan) bentukan Jepang yang khusus dibentuk di wilayah Kalimantan dikenal dengan nama...",
            options: ["Borneo Konan Hokokudan", "Keibodan Borneo", "Kalimantan Suishintai", "Heiho Borneo", "Fujinkai Kalimantan"],
            correct: 0,
            rationale: "Di wilayah Kalimantan (di bawah pemerintahan Angkatan Laut/Kaigun), Keibodan dinamai Borneo Konan Hokokudan."
        },
        {
            id: 's22_inten',
            question: "Tokoh anggota Volksraad yang mengajukan petisi pada tahun 1936 menuntut agar pemerintah Belanda memberikan pemerintahan sendiri (otonomi) secara berangsur-angsur dalam waktu 10 tahun adalah...",
            options: ["M.H. Thamrin", "Woerjaningrat", "R. Panji Soeroso", "Amir Syarifuddin", "Soetardjo Kartohadikoesoemo"],
            correct: 4,
            rationale: "Gagasan otonomi berangsur tersebut dikenal sebagai Petisi Soetardjo yang diajukan oleh Soetardjo Kartohadikoesoemo pada 15 Juli 1936."
        },
        {
            id: 's23_inten',
            question: "Perubahan sistem pemerintahan Indonesia dari Presidensial menjadi Parlementer pada awal kemerdekaan terjadi sebagai konsekuensi diluncurkannya...",
            options: [
                "Hasil sidang PPKI tanggal 18 Agustus 1945",
                "Hasil sidang PPKI tanggal 22 Agustus 1945",
                "Maklumat Pemerintah tanggal 5 Oktober 1945",
                "Maklumat Pemerintah tanggal 14 November 1945",
                "Manipol USDEK tahun 1959"
            ],
            correct: 3,
            rationale: "Maklumat Pemerintah 14 November 1945 mengubah sistem kabinet presidensial menjadi parlementer dengan Sutan Sjahrir sebagai Perdana Menteri pertama."
        },
        {
            id: 's24_inten',
            question: "Maklumat Wapres No. X tanggal 3 November 1945 yang dikeluarkan oleh Mohammad Hatta memberikan dampak besar pada kehidupan politik Indonesia, yaitu...",
            options: [
                "Mendorong pembentukan partai-partai politik dan mengakhiri rencana partai tunggal (PNI)",
                "Membubarkan KNIP dan menggantikannya dengan DPR hasil pemilu",
                "Menetapkan Pancasila sebagai asas tunggal bagi seluruh organisasi massa",
                "Menyatakan perang terbuka terhadap pasukan Sekutu dan NICA",
                "Menyatu-padukan seluruh kekuatan militer ke dalam wadah TNI"
            ],
            correct: 0,
            rationale: "Maklumat No. X tanggal 3 November 1945 menganulir gagasan partai tunggal dan menganjurkan pembentukan multi-partai politik untuk menyongsong pemilu."
        },
        {
            id: 's25_inten',
            question: "Nasionalisasi De Javasche Bank (DJB) menjadi Bank Indonesia (BI) sebagai bank sentral Republik Indonesia mulai dilaksanakan pada masa pemerintahan Kabinet...",
            options: ["Natsir", "Sukiman", "Wilopo", "Ali Sastroamidjojo I", "Burhanuddin Harahap"],
            correct: 1,
            rationale: "Proses nasionalisasi DJB dimulai pada masa Kabinet Sukiman (1951) dengan membentuk Panitia Nasionalisasi DJB dan disahkan melalui UU No. 11/1953."
        },
        {
            id: 's26_inten',
            question: "Alasan utama TRI dan rakyat membakar kota dalam peristiwa 'Bandung Lautan Api' pada Maret 1946 adalah...",
            options: [
                "Sebagai strategi taktik perang gerilya untuk mengecoh pertahanan musuh",
                "Bentuk protes terhadap pemerintah pusat yang dianggap lemah",
                "Merupakan perintah langsung dari Komando Tertinggi NICA",
                "Agar Sekutu dan NICA tidak dapat memanfaatkan Kota Bandung sebagai markas strategis militer",
                "Karena Kota Bandung secara hukum telah diserahkan kepada pihak Sekutu"
            ],
            correct: 3,
            rationale: "Berdasarkan musyawarah Madjelis Perjoangan Priangan, pembumihancuran dilakukan agar fasilitas infrastruktur dan markas strategis di Bandung Selatan tidak jatuh ke tangan tentara Sekutu/NICA."
        },
        {
            id: 's27_inten',
            question: "Prestasi monumental yang berhasil dicapai oleh Kabinet Ali Sastroamidjojo I dalam panggung diplomasi internasional adalah...",
            options: [
                "Melaksanakan pemilu pertama tahun 1955",
                "Menyelenggarakan Konferensi Asia-Afrika (KAA) di Bandung tahun 1955",
                "Menumpas pemberontakan DI/TII Jawa Barat",
                "Merebut kembali Irian Barat melalui jalur KMB",
                "Membentuk Deklarasi Djuanda mengenai batas laut teritorial"
            ],
            correct: 1,
            rationale: "Kabinet Ali Sastroamidjojo I sukses menyelenggarakan Konferensi Asia Afrika (KAA) pada 18–24 April 1955 di Bandung."
        },
        {
            id: 's28_inten',
            question: "Peristiwa pemberontakan PRRI dan Permesta pada tahun 1957/1958 dilatarbelakangi oleh...",
            options: [
                "Keinginan daerah mendirikan negara sosialis terpisah dari RI",
                "Ketidakpuasan daerah terhadap alokasi ekonomi dan tuntutan otonomi daerah yang diabaikan pusat",
                "Keinginan mengganti Pancasila dengan ideologi lain",
                "Pertentangan antarpimpinan partai politik di tingkat daerah",
                "Intervensi langsung tentara pangkalan Inggris di Singapura"
            ],
            correct: 1,
            rationale: "PRRI/Permesta dipicu oleh ketimpangan pembangunan ekonomi antara pusat dan daerah serta tuntutan otonomi daerah yang luas dari para perwira militer daerah."
        },
        {
            id: 's29_inten',
            question: "Pemilihan Umum (Pemilu) pertama tahun 1955 yang berlangsung aman dan demokratis berhasil diselenggarakan pada masa Kabinet Burhanuddin Harahap dari partai...",
            options: ["Masyumi", "PNI", "PSII", "NU", "PSI"],
            correct: 0,
            rationale: "Perdana Menteri Burhanuddin Harahap berasal dari partai Masyumi."
        },
        {
            id: 's30_inten',
            question: "Berikut ini merupakan istilah-istilah slogan politik populer yang dicetuskan oleh Presiden Soekarno, KECUALI...",
            options: ["Berdikari", "Jasmerah", "Nawaksara", "Koti", "Azas Tunggal"],
            correct: 4,
            rationale: "Penetapan 'Azas Tunggal' Pancasila bagi parpol dan ormas merupakan kebijakan politik pada masa Orde Baru di bawah Presiden Soeharto (UU No. 3/1985)."
        },
        {
            id: 's31_inten',
            question: "Alasan utama Presiden Soekarno mengeluarkan Dekrit/Keputusan membubarkan DPR hasil Pemilu 1955 pada tahun 1960 adalah...",
            options: [
                "DPR menolak DPR-GR usulan pemerintah",
                "Sebagian besar anggota DPR terindikasi korupsi",
                "DPR menolak Anggaran Pendapatan dan Belanja Negara (RAPBN) yang diajukan Presiden",
                "DPR secara terbuka menuding Soekarno melindungi PKI",
                "DPR gagal menyusun Undang-Undang Dasar yang baru"
            ],
            correct: 2,
            rationale: "Soekarno membubarkan DPR hasil Pemilu 1955 pada Maret 1960 karena DPR menolak menandatangani RAPBN tahun 1960 yang diusulkan pemerintah."
        },
        {
            id: 's32_inten',
            question: "Respon ketegangan politik Presiden Soekarno terhadap rencana Inggris membentuk Negara Federasi Malaysia diwujudkan melalui pengumuman...",
            options: ["Tri Komando Rakyat (Trikora)", "Dwi Komando Rakyat (Dwikora)", "Trilogi Pembangunan", "Dasasila Bandung", "Pancadarma"],
            correct: 1,
            rationale: "Presiden Soekarno mengumumkan Dwikora (Dwi Komando Rakyat) pada 3 Mei 1964 di Jakarta dalam rangka Konfrontasi Malaysia."
        },
        {
            id: 's33_inten',
            question: "Selama masa Orde Baru, kontestan pemilu politik yang konsisten menempati urutan dua besar pemenang pemilu dari tahun 1971 hingga 1997 mendampingi Golkar adalah...",
            options: ["PDI", "PPP", "PDIP", "PKB", "Gerindra"],
            correct: 1,
            rationale: "Dalam setiap pemilu Orde Baru (1971–1997), PPP selalu menduduki posisi kedua setelah Golkar."
        },
        {
            id: 's34_inten',
            question: "Unsur dalam 'Trilogi Pembangunan' Orde Baru yang berkaitan langsung dengan pemeliharaan keamanan dan ketertiban adalah...",
            options: [
                "Pemerataan pembangunan dan hasil-hasilnya",
                "Pelaksanaan Dwi Fungsi ABRI secara total",
                "Stabilitas nasional yang sehat dan dinamis",
                "Pertumbuhan ekonomi yang tinggi",
                "Menciptakan konsensus politik luar negeri"
            ],
            correct: 2,
            rationale: "Tiga pilar Trilogi Pembangunan Orde Baru: 1) Stabilitas nasional yang sehat dan dinamis, 2) Pertumbuhan ekonomi yang tinggi, 3) Pemerataan pembangunan dan hasil-hasilnya."
        },
        {
            id: 's35_inten',
            question: "Pada masa pemerintahan Presiden B.J. Habibie tahun 1999, empat bank pemerintah (Bank Bumi Daya, BDN, Bank Ekspor Impor, dan BAPINDO) di-merger menjadi...",
            options: ["Bank Central Asia (BCA)", "Bank Mandiri", "Bank Negara Indonesia (BNI)", "Bank Tabungan Negara (BTN)", "Bank Syariah Indonesia (BSI)"],
            correct: 1,
            rationale: "Bank Mandiri berdiri pada 2 Oktober 1998 sebagai bagian dari program restrukturisasi perbankan pemerintahan B.J. Habibie."
        },
        {
            id: 's36_inten',
            question: "Salah satu kebijakan penting Presiden Abdurrahman Wahid (Gus Dur) dalam bidang keagamaan dan hak asasi manusia adalah...",
            options: [
                "Mengakuinya agama Khonghucu secara resmi dan mencabut larangan perayaan Imlek",
                "Membentuk Komisi Pemberantasan Korupsi (KPK)",
                "Menjual saham Indosat ke pihak asing",
                "Membentuk kabinet gotong royong bersama militer",
                "Menerapkan asas tunggal Pancasila bagi ormas keagamaan"
            ],
            correct: 0,
            rationale: "Gus Dur menerbitkan Keppres No. 6 Tahun 2000 yang mencabut Inpres No. 14/1967, memulihkan hak-hak sipil penganut Khonghucu dan warga Tionghoa."
        },
        {
            id: 's37_inten',
            question: "Kebijakan strategis pada masa pemerintahan Presiden Megawati Soekarnoputri dalam penegakan hukum dan pemberantasan korupsi adalah...",
            options: [
                "Membentuk Komisi Pemilihan Umum (KPU)",
                "Membentuk Komisi Pemberantasan Korupsi (KPK)",
                "Menyelenggarakan referendum Timor Timur",
                "Membubarkan Departemen Penerangan",
                "Mencabut keanggotaan Indonesia dari IMF"
            ],
            correct: 1,
            rationale: "KPK didirikan pada tahun 2002 di masa pemerintahan Megawati Soekarnoputri melalui UU No. 30 Tahun 2002."
        },
        {
            id: 's38_inten',
            question: "Prinsip politik luar negeri Indonesia pada masa Presiden Susilo Bambang Yudhoyono (SBY) yang terkenal dengan slogan 'Zero Enemy and Thousands of Friends' diterapkan karena...",
            options: [
                "Indonesia ingin mengambil sikap pasif menunggu dinamika global",
                "Menghindari tekanan dari negara-negara anggota Non-Blok",
                "Merespons dinamika politik global yang cepat berubah serta memperluas kerja sama internasional",
                "Adanya kekhawatiran konflik militer langsung dengan negara tetangga",
                "Tuntutan pengiriman tenaga kerja Indonesia ke luar negeri"
            ],
            correct: 2,
            rationale: "Doktrin 'Zero Enemy, Thousand Friends' dirancang SBY untuk memperluas jejaring diplomasi Indonesia di tengah dinamika multipolar global."
        },
        {
            id: 's39_inten',
            question: "Kebijakan pembangunan infrastruktur dan regulasi penting yang disahkan pada masa pemerintahan Presiden Joko Widodo adalah...",
            options: [
                "Undang-Undang Nomor 3 Tahun 2022 tentang Ibu Kota Negara (IKN) dan Kereta Cepat Jakarta-Bandung",
                "Pembentukan Lembaga Pemberantasan Korupsi (KPK) pertama kali",
                "Penyelesaian penandatanganan kesepakatan damai Helsinki dengan GAM",
                "Pelaksanaan Dekrit Presiden pembubaran DPR",
                "Pengesahan undang-undang otonomi khusus untuk seluruh provinsi di Jawa"
            ],
            correct: 0,
            rationale: "UU No. 3 Tahun 2022 tentang IKN Nusantara serta penyelesaian mega-proyek Kereta Cepat Whoosh dan Tol Trans-Jawa merupakan tonggak kebijakan era Presiden Joko Widodo."
        },
        {
            id: 's40_inten',
            question: "Program prioritas di bidang sosial dan ekonomi yang mulai direalisasikan pada masa pemerintahan Presiden Prabowo Subianto adalah...",
            options: [
                "Program Makan Bergizi Gratis (MBG) dan kebijakan pemutihan/penghapusan utang UMKM, petani, dan nelayan",
                "Pembangunan jalan tol pertama di Pulau Sumatra",
                "Pengesahan Undang-Undang Otonomi Daerah tahun 1999",
                "Masa penataan kabinet gotong royong pasca-Reformasi 1998",
                "Nasionalisasi seluruh perusahaan asing di Indonesia"
            ],
            correct: 0,
            rationale: "Program Makan Bergizi Gratis (MBG) serta kebijakan hapus tagih utang macet UMKM, petani, dan nelayan merupakan program unggulan awal pemerintahan Presiden Prabowo Subianto."
        }
    ]
};