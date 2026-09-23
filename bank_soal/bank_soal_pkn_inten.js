const dataPknInten = {
    subjectId: 'pkn_tka_inten',
    subjectName: 'PPKn TKA (Prosus Inten TO-1)',
    category: 'PPKn',
    categoryId: 'pkn',
    categoryName: 'Pendidikan Kewarganegaraan',
    icon: '🇮🇩',
    questions: [
        {
            id: 'p1_inten',
            question: "Kedudukan Pancasila sebagai dasar negara Republik Indonesia secara konstitusional tertuang dalam...",
            options: ["Pembukaan UUD 1945", "Keputusan Presiden (Kepres)", "Garis-Garis Besar Haluan Negara (GBHN)", "Ketetapan MPR RI", "Batang Tubuh UUD 1945"],
            correct: 0,
            rationale: "Kedudukan Pancasila sebagai dasar negara formal tertuang dalam Pembukaan UUD 1945 alinea IV."
        },
        {
            id: 'p2_inten',
            question: "Perhatikan pernyataan mengenai ideologi Pancasila berikut:<br>1) Berakar dari nilai-nilai yang berasal dari luar bangsanya<br>2) Berakar dari hasil pemikiran dan gagasan individu<br>3) Digali dan diambil dari kekayaan rohani serta budaya masyarakat itu sendiri<br>4) Nilai dasarnya dapat menyesuaikan terhadap perkembangan zaman<br>5) Dibentuk oleh negara dengan mengutamakan budaya kelompok tertentu<br><br>Pernyataan yang SESUAI menggambarkan ciri khas Pancasila sebagai Ideologi Terbuka adalah...",
            options: ["1 dan 2", "2 dan 5", "3 dan 4", "1 dan 4", "3 dan 5"],
            correct: 2,
            rationale: "Ideologi terbuka berakar dari kekayaan rohani/budaya masyarakat sendiri (3) serta nilai dasarnya bersikap fleksibel/adaptif terhadap perkembangan zaman (4)."
        },
        {
            id: 'p3_inten',
            question: "Salah satu tujuan Reformasi Indonesia adalah terciptanya pemerintahan demokratis yang konstitusional. Berikut yang BUKAN merupakan ciri pemerintahan konstitusional yaitu...",
            options: [
                "Diberlakukan pembatasan pada kekuasaan eksekutif",
                "Adanya jaminan Hak Asasi Manusia",
                "Adanya sistem hukum positif dalam melakukan pengaturan negara",
                "Tidak memberlakukan pembagian kekuasaan antara legislatif, eksekutif, dan yudikatif",
                "Adanya pergantian kepemimpinan melalui pelaksanaan Pemilu"
            ],
            correct: 3,
            rationale: "Pemerintahan konstitusional wajib menerapkan pembatasan dan pembagian/pemisahan kekuasaan (Trias Politica / Checks and Balances)."
        },
        {
            id: 'p4_inten',
            question: "Jaminan persamaan kedudukan warga negara di dalam hukum dan pemerintahan tercantum dalam UUD 1945 pasal...",
            options: ["Pasal 1 ayat (1)", "Pasal 7 ayat (1)", "Pasal 17 ayat (2)", "Pasal 27 ayat (1)", "Pasal 37 ayat (2)"],
            correct: 3,
            rationale: "Pasal 27 ayat (1) menegaskan bahwa 'Segala warga negara bersamaan kedudukannya di dalam hukum dan pemerintahan dan wajib menjunjung hukum dan pemerintahan itu dengan tidak ada kecualinya'."
        },
        {
            id: 'p5_inten',
            question: "Diberikan norma hukum berikut:<br>1) Ketetapan MPR<br>2) Undang-Undang<br>3) UUD 1945<br>4) Perpu<br>5) Peraturan Daerah<br>6) Peraturan Pemerintah<br>7) Peraturan Presiden<br><br>Tata urutan peraturan perundang-undangan di Indonesia berdasarkan UU No. 12 Tahun 2011 yang tepat adalah...",
            options: ["3, 1, 2/4, 6, 7, 5", "1, 2, 7, 3, 4, 5, 6", "2, 3, 6, 7, 5, 4, 1", "3, 2, 1, 4, 6, 7, 5", "1, 2, 3, 6, 5, 4, 7"],
            correct: 0,
            rationale: "Hirarki perundangan RI menurut UU No. 12/2011: 1) UUD 1945, 2) Tap MPR, 3) UU/Perpu, 4) PP, 5) Perpres, 6) Perda Provinsi, 7) Perda Kabupaten/Kota."
        },
        {
            id: 'p6_inten',
            question: "Penjabaran nilai-nilai Pancasila ke dalam norma-norma hukum dasar atau aturan perundang-undangan merupakan manifestasi Pancasila dalam dimensi...",
            options: ["Idealitas", "Normatif", "Realitas", "Substantif", "Komplementer"],
            correct: 1,
            rationale: "Dimensi Normatif mengandung arti bahwa nilai-nilai Pancasila perlu dijabarkan dalam suatu sistem norma/hukum perundang-undangan."
        },
        {
            id: 'p7_inten',
            question: "Indonesia menganut Sistem Ekonomi Pancasila. Hal berikut yang DIPERBOLEHKAN dan dikembangkan dalam ekonomi Pancasila adalah...",
            options: [
                "Persaingan bebas (free fight liberalism)",
                "Mengembangkan ekonomi berbasis kearifan lokal dan kebersamaan",
                "Monopoli perdagangan oleh swasta",
                "Pengawasan mutlak dan terpusat dari pemerintah (etatisme)",
                "Ketidakadilan dalam berusaha bagi pelaku usaha kecil"
            ],
            correct: 1,
            rationale: "Sistem Ekonomi Pancasila menghindari free fight liberalism dan etatisme, serta mengutamakan asas kekeluargaan, kebersamaan, dan kearifan lokal."
        },
        {
            id: 'p8_inten',
            question: "Berikut ini yang BUKAN merupakan kategori Hak Sosial dan Budaya dalam konsep Hak Asasi Manusia (HAM) adalah...",
            options: [
                "Hak untuk memilih, memeluk, dan menjalankan agama dan kepercayaan",
                "Hak untuk mengembangkan dan berpartisipasi dalam kebudayaan",
                "Hak mendapatkan perlindungan terhadap karya cipta (HAKI)",
                "Hak untuk mendapatkan pendidikan yang layak",
                "Hak untuk mendapatkan kesejahteraan ekonomi"
            ],
            correct: 0,
            rationale: "Hak memilih, memeluk, dan menjalankan agama masuk dalam kategori Hak Sipil dan Politik (atau Hak Pribadi/Personal Rights)."
        },
        {
            id: 'p9_inten',
            // Pengganti Soal Gambar No. 9 (Infografis Pelanggaran HAM)
            question: "Berdasarkan UU No. 26 Tahun 2000, perbuatan yang dilakukan sebagai bagian dari serangan yang meluas atau sistematik yang ditujukan secara langsung kepada penduduk sipil dikategorikan sebagai...",
            options: [
                "Kejahatan Genosida",
                "Kejahatan Kemanusiaan",
                "Pelanggaran HAM Ringan",
                "Kejahatan Agresi Militer",
                "Tindak Pidana Umum"
            ],
            correct: 1,
            rationale: "UU No. 26/2000 mendefinisikan Kejahatan Terhadap Kemanusiaan sebagai serangan meluas/sistematik terhadap penduduk sipil."
        },
        {
            id: 'p10_inten',
            question: "Upaya penegakan HAM di Indonesia dilakukan melalui pembentukan Komnas HAM. Berikut yang BUKAN merupakan wewenang Komnas HAM adalah...",
            options: [
                "Melakukan perdamaian pada kedua belah pihak yang bermasalah",
                "Melakukan peradilan dan penjatuhan vonis pidana terhadap pelaku pelanggaran HAM berat",
                "Memberi saran kepada pihak yang bermasalah untuk menyelesaikan sengketa di pengadilan",
                "Menyampaikan rekomendasi atas kasus pelanggaran HAM kepada pemerintah dan DPR",
                "Menyelesaikan masalah secara konsultasi maupun negosiasi"
            ],
            correct: 1,
            rationale: "Komnas HAM adalah lembaga pengkajian, penelitian, penyuluhan, pemantauan, dan mediasi. Kewenangan melakukan peradilan kasus HAM Berat berada di Pengadilan HAM."
        },
        {
            id: 'p11_inten',
            question: "Landasan konstitusional bahwa Negara Indonesia adalah negara hukum (Rechtsstaat) tertuang dalam UUD 1945 pasal...",
            options: ["Pasal 1 ayat (3)", "Pasal 3 ayat (1)", "Pasal 4 ayat (1)", "Pasal 5 ayat (2)", "Pasal 6 ayat (1)"],
            correct: 0,
            rationale: "Pasal 1 ayat (3) UUD 1945 menegaskan: 'Negara Indonesia adalah negara hukum'."
        },
        {
            id: 'p12_inten',
            question: "Lembaga independen negara yang didirikan khusus dengan tugas pencegahan dan penindakan segala kasus tindak pidana korupsi di Indonesia adalah...",
            options: ["Kepolisian RI", "Komnas HAM", "Komisi Pemberantasan Korupsi (KPK)", "Indonesia Corruption Watch (ICW)", "Otoritas Jasa Keuangan (OJK)"],
            correct: 2,
            rationale: "KPK adalah lembaga negara independen yang dibentuk untuk meningkatkan daya guna dan hasil guna terhadap upaya pemberantasan tindak pidana korupsi."
        },
        {
            id: 'p13_inten',
            question: "Makna yang terkandung dalam Alinea Pertama Pembukaan UUD 1945 adalah sebagai berikut, KECUALI...",
            options: [
                "Bangsa Indonesia siap membantu bangsa lain untuk merdeka",
                "Bangsa Indonesia memiliki keinginan kuat untuk melepaskan diri dari penjajahan",
                "Perluasan wilayah dan kekuasaan melalui penjajahan negara lain",
                "Bangsa Indonesia menjunjung tinggi hak kodrat setiap bangsa untuk merdeka",
                "Pernyataan subjektif dan objektif penolakan terhadap segala bentuk penjajahan"
            ],
            correct: 2,
            rationale: "Alinea Pertama menolak tegas penjajahan karena tidak sesuai dengan perikemanusiaan dan perikeadilan."
        },
        {
            id: 'p14_inten',
            question: "Konstitusi sebagai pedoman penyelenggaraan kehidupan berbangsa dan bernegara pada dasarnya memuat unsur-unsur penting, KECUALI...",
            options: [
                "Pembagian kekuasaan dalam sistem politik (balance of power)",
                "Pemberian kedaulatan mutlak dan tak terbatas di tangan Pemerintah",
                "Pengaturan mengenai lembaga-lembaga negara",
                "Pembatasan kekuasaan bagi penguasa agar tidak sewenang-wenang",
                "Jaminan terhadap Hak Asasi Manusia"
            ],
            correct: 1,
            rationale: "Konstitusi justru berfungsi membatasi kekuasaan pemerintah agar tidak memegang kedaulatan mutlak/otoriter."
        },
        {
            id: 'p15_inten',
            question: "Sesuai Pasal 1 ayat (2) UUD 1945 hasil amandemen, kedudukan MPR tidak lagi menjadi lembaga tertinggi pemegang penuh kedaulatan rakyat, karena...",
            options: [
                "Kedaulatan berada di tangan rakyat dan dilaksanakan menurut Undang-Undang Dasar",
                "Kedaulatan sepenuhnya dialihkan melalui pemilihan Presiden langsung saja",
                "Kedaulatan berpindah sepenuhnya ke tangan Mahkamah Agung dan MK",
                "Kedaulatan hanya dipegang oleh organisasi kemasyarakatan",
                "Kedaulatan negara diserahkan sepenuhnya kepada dewan daerah"
            ],
            correct: 0,
            rationale: "Pasal 1 Ayat (2) UUD 1945 berbunyi: 'Kedaulatan berada di tangan rakyat dan dilaksanakan menurut Undang-Undang Dasar'."
        },
        {
            id: 'p16_inten',
            question: "Perhatikan pernyataan hubungan Pemerintah Pusat dan Daerah berikut:<br>1) Pembagian wewenang antara pusat dan daerah sesuai prinsip desentralisasi<br>2) Kewenangan pembentukan kebijakan nasional hanya dimiliki pemerintah pusat<br>3) Pemerintah daerah berhak mengabaikan peraturan pusat<br>4) Adanya koordinasi antara pusat dan daerah dalam penyelenggaraan pemerintahan<br><br>Pernyataan yang SESUAI dengan konsep Otonomi Daerah dalam NKRI adalah...",
            options: ["1 dan 2", "1 dan 4", "2 dan 3", "3 dan 4", "1 dan 3"],
            correct: 1,
            rationale: "Hubungan pusat-daerah dijalankan dengan desentralisasi (1) serta koordinasi yang padu dalam kerangka NKRI (4)."
        },
        {
            id: 'p17_inten',
            question: "Berdasarkan UU No. 23 Tahun 2014 tentang Pemerintahan Daerah, yang BUKAN merupakan urusan pemerintahan absolut (sepenuhnya kewenangan Pemerintah Pusat) adalah...",
            options: [
                "Pengelolaan pelayanan dasar sarana kesehatan dan pendidikan daerah",
                "Moneter dan fiskal nasional",
                "Agama",
                "Pertahanan dan Keamanan",
                "Politik Luar Negeri"
            ],
            correct: 0,
            rationale: "6 Urusan Absolut Pusat: Politik Luar Negeri, Pertahanan, Keamanan, Yustisi, Moneter/Fiskal, dan Agama. Kesehatan & Pendidikan adalah urusan pemerintahan konkurasi/pembagian."
        },
        {
            id: 'p18_inten',
            question: "Dalam sistem pemerintahan Presidensial seperti di Indonesia, apabila DPR tidak menyetujui Rancangan APBN yang diajukan oleh Presiden, maka...",
            options: [
                "DPR mengambil alih secara paksa wewenang penetapan APBN",
                "Presiden dapat membubarkan lembaga DPR",
                "Pemerintah tidak boleh melakukan pengeluaran belanja negara sama sekali",
                "Pemerintah menjalankan APBN tahun lalu",
                "Pemerintah langsung menghentikan operasional seluruh kementerian"
            ],
            correct: 3,
            rationale: "Pasal 23 ayat (3) UUD 1945 menyatakan jika DPR tidak menyetujui RAPBN, pemerintah menjalankan APBN tahun lalu."
        },
        {
            id: 'p19_inten',
            question: "Penyerahan wewenang pemerintahan oleh pemerintah pusat kepada daerah otonom untuk mengatur dan mengurus urusan pemerintahan sendiri dalam sistem NKRI disebut...",
            options: ["Desentralisasi", "Dekonsentrasi", "Tugas Perbantuan", "Sentralisasi", "Otonomi Khusus"],
            correct: 0,
            rationale: "Desentralisasi adalah penyerahan wewenang pemerintahan oleh Pemerintah Pusat kepada daerah otonom."
        },
        {
            id: 'p20_inten',
            question: "Perhatikan tugas dan wewenang lembaga negara berikut:<br>1) Menetapkan UUD dan perubahannya<br>2) Memilih Presiden dan Wakil Presiden dalam pemilu<br>3) Menetapkan GBHN<br>4) Melantik Presiden dan Wakil Presiden<br>5) Memberhentikan Presiden dan/atau Wakil Presiden dalam masa jabatannya menurut UUD<br><br>Yang merupakan kewenangan Majelis Permusyawaratan Rakyat (MPR) pasca-amandemen UUD 1945 adalah...",
            options: ["1, 2, dan 3", "2, 3, dan 4", "1, 4, dan 5", "3, 4, dan 5", "2, 4, dan 5"],
            correct: 2,
            rationale: "Kewenangan MPR pasca-amandemen: 1) Mengubah dan menetapkan UUD, 2) Melantik Presiden/Wapres, 3) Memberhentikan Presiden/Wapres menurut UUD."
        },
        {
            id: 'p21_inten',
            question: "Perhatikan pernyataan tentang hubungan antarlembaga negara berikut:<br>1) Memiliki kekuasaan dominan dan mutlak dalam pengambilan keputusan negara<br>2) Bersama-sama memiliki pengaruh menyusun kebijakan dan UU negara<br>3) Memiliki kewenangan yang seimbang dalam mekanisme checks and balances<br>4) Memiliki keleluasaan membuat keputusan tanpa melibatkan lembaga lain<br><br>Pernyataan yang SESUAI menggambarkan kedudukan Lembaga Eksekutif yang setara dengan Lembaga Legislatif dan Yudikatif adalah...",
            options: ["1 dan 2", "2 dan 3", "3 dan 4", "1 dan 4", "2 dan 4"],
            correct: 1,
            rationale: "Dalam sistem kesetaraan lembaga negara (Checks and Balances), eksekutif bekerjasama dalam pembentukan UU (2) dan memiliki kewenangan yang seimbang (3)."
        },
        {
            id: 'p22_inten',
            question: "Bhinneka Tunggal Ika sebagai semboyan bangsa Indonesia mengakui dan menghormati keberagaman dalam hal-hal berikut, KECUALI...",
            options: ["Sistem mata pencaharian", "Ras", "Status Kasta feodal yang hierarkis", "Etnis atau suku bangsa", "Agama dan kepercayaan"],
            correct: 2,
            rationale: "Semboyan Bhinneka Tunggal Ika menjunjung tinggi kesetaraan derajat manusia dan menolak diskriminasi sistem kasta feodal."
        },
        {
            id: 'p23_inten',
            question: "Pemberian penilaian atau sifat tertentu yang cenderung negatif terhadap seseorang atau kelompok hanya berdasarkan persepsi subjektif kategori kelompoknya dinamakan...",
            options: ["Prasangka negatif", "Etnosentrisme", "Rasisme", "Stereotipe", "Eksklusivisme"],
            correct: 3,
            rationale: "Stereotipe adalah prasangka/penilaian umum yang subjektif dan menyederhanakan sifat kelompok tertentu."
        },
        {
            id: 'p24_inten',
            question: "Hak warga negara Indonesia yang diatur dalam UUD 1945 di bidang Sosial dan Budaya adalah...",
            options: [
                "Hak untuk berserikat dan berkumpul (Pasal 28)",
                "Hak mendapatkan perlakuan yang sama di depan hukum (Pasal 27 ayat 1)",
                "Hak untuk mendapatkan pendidikan dan mengembangkan kebudayaan (Pasal 31 & 32)",
                "Hak ikut serta dalam upaya pertahanan dan keamanan negara (Pasal 30)",
                "Hak atas pekerjaan dan penghidupan yang layak (Pasal 27 ayat 2)"
            ],
            correct: 2,
            rationale: "Pasal 31 (Pendidikan) dan Pasal 32 (Kebudayaan) merupakan hak dasar dalam bidang sosial-budaya."
        },
        {
            id: 'p25_inten',
            // Pengganti Soal Gambar No. 25 (Foto Kerukunan Agama)
            question: "Sesuai dengan ketentuan Pasal 29 ayat (2) UUD 1945, sikap dan tindakan intoleransi antarumat beragama dapat berdampak buruk bagi bangsa, yaitu...",
            options: [
                "Mengurangi secara permanen HAM individu",
                "Mengganggu ketertiban umum dan merusak keharmonisan dalam kebinekaan",
                "Menjamin kebebasan beragama tanpa batas dan tanpa aturan",
                "Mendorong terbentuknya negara berbasis satu agama secara konstitusional",
                "Membatasi hak warga negara untuk berpindah kewarganegaraan"
            ],
            correct: 1,
            rationale: "Intoleransi beragama bertentangan dengan jaminan Pasal 29 ayat (2) UUD 1945 dan memicu konflik sosial yang merusak integrasi kebangsaan."
        },
        {
            id: 'p26_inten',
            question: "Perhatikan pernyataan tentang pembentukan identitas nasional berikut:<br>1) Menerapkan politik isolasionis yang menolak budaya asing secara total<br>2) Mengakomodasi nilai-nilai kemanusiaan universal dalam identitas nasional<br>3) Menumbuhkan sikap chauvinisme dan merendahkan budaya lain<br>4) Mengakomodasi budaya luar yang tidak bertentangan dengan nilai Pancasila<br><br>Pernyataan yang SESUAI terkait upaya membangun identitas nasional yang inklusif adalah...",
            options: ["1 dan 2", "2 dan 4", "3 dan 4", "1 dan 3", "2 dan 3"],
            correct: 1,
            rationale: "Identitas nasional yang inklusif bersikap terbuka terhadap nilai kemanusiaan universal (2) dan budaya asing yang selaras dengan Pancasila (4)."
        },
        {
            id: 'p27_inten',
            question: "Dalam konteks identitas nasional Indonesia, yang berkedudukan sebagai Identitas Fundamental negara adalah...",
            options: ["UUD 1945", "Pancasila", "Lambang Garuda Pancasila", "Bendera Merah Putih", "Bahasa Indonesia"],
            correct: 1,
            rationale: "Identitas Fundamental Indonesia adalah Pancasila (sebagai dasar negara, pandangan hidup, dan falsafah)."
        },
        {
            id: 'p28_inten',
            question: "Pengaturan secara rinci mengenai simbol-simbol negara Indonesia diatur dalam regulasi resmi yaitu...",
            options: [
                "UU No. 24 Tahun 2009 tentang Bendera, Bahasa, dan Lambang Negara, serta Lagu Kebangsaan",
                "UU No. 12 Tahun 2011 tentang Pembentukan Peraturan Perundang-undangan",
                "UU No. 39 Tahun 1999 tentang Hak Asasi Manusia",
                "UU No. 23 Tahun 2014 tentang Pemerintahan Daerah",
                "UU No. 32 Tahun 2004 tentang Otonomi Daerah"
            ],
            correct: 0,
            rationale: "UU No. 24 Tahun 2009 secara eksplisit mengatur Bendera, Bahasa, Lambang Negara, serta Lagu Kebangsaan Indonesia."
        },
        {
            id: 'p29_inten',
            question: "Perhatikan pernyataan berikut:<br>1) Keberagaman bangsa merupakan kekuatan dan kekayaan bangsa<br>2) Keberagaman merupakan aset bangsa dan anugerah Tuhan Yang Maha Esa<br>3) Keberagaman harus diatasi dengan mengutamakan hak kelompok mayoritas<br><br>Pernyataan yang sesuai dengan konsep Bhinneka Tunggal Ika dalam mewujudkan integrasi nasional ditunjukkan oleh nomor...",
            options: ["1 dan 2", "1 dan 3", "2 dan 3", "Hanya 1", "Hanya 3"],
            correct: 0,
            rationale: "Keberagaman dipandang sebagai modal kekuatan (1) dan anugerah Tuhan (2), bukan alasan dominasi mayoritas."
        },
        {
            id: 'p30_inten',
            question: "Gerakan disintegrasi bangsa yang pernah mengancam persatuan Indonesia yang dilatarbelakangi oleh kepentingan kelompok/golongan yang tertanam kuat (*vested interest*) adalah...",
            options: ["Pemberontakan PKI Madiun 1948", "Pemberontakan DI/TII Jawa Barat", "Gerakan Aceh Merdeka (GAM)", "Pemberontakan APRA, RMS, dan Andi Azis", "Pemberontakan PRRI/Permesta"],
            correct: 3,
            rationale: "Pemberontakan APRA, RMS, dan Andi Azis dilatarbelakangi oleh *vested interest* (perwira KNIL yang ingin mempertahankan keberadaan negara bagian dan posisi militer mereka)."
        },
        {
            id: 'p31_inten',
            question: "Upaya strategis dalam menghadapi ancaman di bidang politik guna mempertahankan integrasi nasional adalah sebagai berikut, KECUALI...",
            options: [
                "Menegakkan pemerintahan yang berwibawa, transparan, dan bersih",
                "Menerapkan sistem pemerintahan otoriter tanpa pergantian kepemimpinan",
                "Mengajak peran serta aktif masyarakat dalam demokrasi",
                "Memperkuat posisi diplomasi negara di tingkat internasional",
                "Melakukan reformasi lembaga politik agar menjalankan peran sesuai aturan"
            ],
            correct: 1,
            rationale: "Sistem otoriter tanpa pergantian kepemimpinan justru memicu ancaman disintegrasi dan ketidakstabilan politik."
        },
        {
            id: 'p32_inten',
            // Pengganti Soal Gambar No. 32 (Grafik Temuan Isu Hoaks)
            question: "Salah satu ancaman non-militer terhadap integrasi nasional adalah maraknya penyebaran berita bohong (hoaks) di media sosial. Langkah yang KURANG TEPAT dalam menangkal hoaks adalah...",
            options: [
                "Melakukan verifikasi dan konfirmasi sumber berita sebelum membagikannya",
                "Mengembangkan sikap kritis dan tidak mudah terprovokasi oleh judul berita",
                "Bebas menyebarkan informasi apapun tanpa perlu menyaring kebenarannya",
                "Melaporkan akun-akun penyebar ujaran kebencian ke pihak berwenang",
                "Meningkatkan literasi digital dan etika berinteraksi di media sosial"
            ],
            correct: 2,
            rationale: "Menyebarkan informasi secara bebas tanpa verifikasi merupakan penyebab utama meluasnya hoaks yang mengancam persatuan."
        },
        {
            id: 'p33_inten',
            question: "Wilayah sengketa perbatasan antara Indonesia dan Malaysia di Selat Makassar yang pada tahun 2002 putusannya dimenangkan oleh Mahkamah Internasional untuk Malaysia adalah...",
            options: ["Pulau Natuna", "Pulau Lipan", "Pulau Panjang", "Pulau Sipadan dan Ligitan", "Pulau Mangkir Gadang"],
            correct: 3,
            rationale: "Sengketa Pulau Sipadan dan Ligitan diputus oleh Mahkamah Internasional (ICJ) pada tahun 2002 dengan memberikan kedaulatan atas pulau tersebut kepada Malaysia berdasarkan prinsip *effective occupation*."
        },
        {
            id: 'p34_inten',
            question: "Sesuai hukum internasional, Indonesia melakukan berbagai saluran diplomasi dalam menyelesaikan sengketa batas wilayah dengan negara tetangga, KECUALI...",
            options: [
                "Penetapan status quo sementara di wilayah sengketa",
                "Perundingan bilateral antarnegara",
                "Memanfaatkan mekanisme penyelesaian sengketa ASEAN",
                "Mengajukan kasus ke Mahkamah Internasional (ICJ)",
                "Penyelesaian sengketa melalui Pengadilan Militer Internasional"
            ],
            correct: 4,
            rationale: "Pengadilan Militer Internasional bertugas mengadili penjahat perang militer, bukan menyelesaikan sengketa batas wilayah antarnegara."
        },
        {
            id: 'p35_inten',
            question: "Indonesia menganut prinsip Politik Luar Negeri Bebas-Aktif. Landasan konstitusional pelaksanaan politik luar negeri bebas-aktif tersebut adalah...",
            options: [
                "Pembukaan UUD 1945 Alinea Pertama dan Ketiga",
                "Pembukaan UUD 1945 Alinea Pertama dan Keempat",
                "Pasal 10 UUD 1945 saja",
                "Pasal 33 UUD 1945",
                "Ketetapan Presiden No. 1 Tahun 1965"
            ],
            correct: 1,
            rationale: "Landasan konstitusional bebas-aktif adalah Pembukaan UUD 1945 Alinea I ('penjajahan di atas dunia harus dihapuskan') dan Alinea IV ('ikut melaksanakan ketertiban dunia')."
        },
        {
            id: 'p36_inten',
            question: "Prinsip dasar politik luar negeri Indonesia 'Bebas-Aktif' pertama kali dirumuskan dan disampaikan secara resmi dalam pidato 'Mendayung di Antara Dua Karang' oleh...",
            options: ["Sutan Sjahrir", "H. Agus Salim", "Dr. Radjiman Wedyodiningrat", "A.A. Maramis", "Mohammad Hatta"],
            correct: 4,
            rationale: "Mohammad Hatta menyampaikan pidato bersejarah 'Mendayung di Antara Dua Karang' di depan BPKNIP pada 2 September 1948 yang menjadi peletak dasar politik bebas-aktif."
        },
        {
            id: 'p37_inten',
            question: "Berikut ini merupakan wujud peran aktif Indonesia dalam menjaga perdamaian dunia, KECUALI...",
            options: [
                "Menyelenggarakan Konferensi Asia Afrika (KAA) di Bandung tahun 1955",
                "Mengirim Kontingen Pasukan Garuda di bawah naungan PBB",
                "Menjadi salah satu negara pemrakarsa berdirinya ASEAN tahun 1967",
                "Menjadi pelopor pendirian Kontingen Militer Pakta Pertahanan SEATO",
                "Aktif dalam Gerakan Non-Blok (GNB)"
            ],
            correct: 3,
            rationale: "Indonesia menolak bergabung dengan pakta pertahanan militer seperti SEATO atau NATO karena bertentangan dengan prinsip politik luar negeri bebas-aktif."
        },
        {
            id: 'p38_inten',
            question: "Konsep Wawasan Nusantara yang menyatakan bahwa 'Kekayaan wilayah Nusantara, baik potensial maupun efektif adalah modal dan milik bersama bangsa' merupakan perwujudan dari...",
            options: ["Kesatuan Sosial-Budaya", "Kesatuan Politik", "Kesatuan Ekonomi", "Kesatuan Pertahanan dan Keamanan", "Kesatuan Wilayah Geografis"],
            correct: 2,
            rationale: "Aspek Perwujudan Kepulauan Nusantara sebagai Satu Kesatuan Ekonomi menegaskan kepemilikan bersama atas potensi sumber daya alam untuk kebutuhan seluruh rakyat."
        },
        {
            id: 'p39_inten',
            question: "Salah satu bentuk sikap dan komitmen nyata warga negara dalam menjaga keutuhan Negara Kesatuan Republik Indonesia (NKRI) adalah...",
            options: [
                "Mengutamakan kepentingan pribadi di atas kepentingan negara",
                "Menjaga persatuan dan toleransi antar suku, agama, dan budaya",
                "Bersikap apatis terhadap peraturan perundang-undangan",
                "Memupuk sikap primordialisme dan etnosentrisme suku",
                "Rela berkorban hanya jika menguntungkan kelompok sendiri"
            ],
            correct: 1,
            rationale: "Komitmen menjaga persatuan serta toleransi keragaman merupakan kunci utama mempertahankan keutuhan NKRI."
        },
        {
            id: 'p40_inten',
            question: "Meskipun menghadapi berbagai ancaman disintegrasi baik dari dalam maupun luar negeri pasca-proklamasi 1945, Indonesia mampu mempertahankan kemerdekaannya. Faktor kunci utama keberhasilan tersebut adalah...",
            options: [
                "Dukungan penuh persenjataan dari negara-negara blok barat",
                "Kekuatan ekonomi nasional yang sangat melimpah",
                "Kuatnya rasa kesatuan, persatuan, dan semangat rela berkorban seluruh rakyat Indonesia",
                "Bantuan modal dari organisasi keuangan internasional",
                "Ketergantungan penuh pada pasukan tentara asing"
            ],
            correct: 2,
            rationale: "Faktor penentu utama keberhasilan mempertahankan kemerdekaan Indonesia adalah persatuan nasional seluruh elemen rakyat dan pejuang."
        }
    ]
};