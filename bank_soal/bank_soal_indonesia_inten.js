const dataBahasaIndonesiaInten = {
    subjectId: 'bahasa_indonesia_tka_inten',
    subjectName: 'Bahasa Indonesia TKA (Prosus Inten TO-1)',
    category: 'Bahasa Indonesia',
    categoryId: 'bahasa_indonesia',
    categoryName: 'Bahasa Indonesia',
    icon: '🇮🇩',
    questions: [
        // ==================== SOAL PENGGANTI INFOGRAFIK (NO. 1 - 5) ====================
        {
            id: 'ind1_inten',
            question: "Manakah kalimat berikut yang merupakan kalimat efektif dan memenuhi kaidah PUEBI/EYD?",
            options: [
                "Pemerintah harus memprioritaskan pembangunan infrastruktur di daerah terpencil.",
                "Bagi seluruh peserta ujian diharapkan untuk hadir tepat waktu.",
                "Dalam rapat itu membicarakan tentang masalah alokasi dana pendidikan.",
                "Meskipun hujan deras, namun para pekerja tetap menyelesaikan pekerjaannya.",
                "Penulis daripada buku ini sudah menyampaikan banyak gagasan-gagasan menarik."
            ],
            correct: 0,
            rationale: "Kalimat A memiliki struktur yang lengkap (Subjek: Pemerintah, Predikat: harus memprioritaskan, Objek: pembangunan infrastruktur). Pilihan B hemat/subjek kabur ('Bagi...'), C tidak bersubjek ('Dalam rapat itu membicarakan...'), D konjungsi ganda ('Meskipun... namun'), dan E pleonastis ('banyak gagasan-gagasan')."
        },
        {
            id: 'ind2_inten',
            question: "Penggunaan tanda baca yang tepat terdapat pada kalimat...",
            options: [
                "Ibu membeli buah-buahan, seperti: apel, jeruk, dan mangga.",
                "Ibu membeli buah-buahan: apel, jeruk, dan mangga.",
                "Ibu membeli: apel, jeruk, dan mangga.",
                "Ibu membeli buah-buahan; apel, jeruk, dan mangga.",
                "Ibu membeli buah-buahan, seperti apel, jeruk dan mangga."
            ],
            correct: 1,
            rationale: "Tanda titik dua (:) digunakan di akhir pernyataan lengkap yang diikuti pemerincian. Penggunaan kata 'seperti' tidak perlu diikuti titik dua."
        },
        {
            id: 'ind3_inten',
            question: "Kata berimbuhan yang digunakan secara tepat dalam kalimat resmi adalah...",
            options: [
                "Pemerintah terus mengkritisi kebijakan yang dianggap tidak berpihak pada rakyat.",
                "Banyak pihak yang mengkritik rancangan undang-undang tersebut.",
                "Ketua organisasi itu melepaskan jabatannya setelah masa tugasnya berakhir.",
                "Karyawan diimbau untuk tidak mentaati peraturan yang tidak sah.",
                "Setiap warga negara wajib menyukseskan program vaksinasi nasional."
            ],
            correct: 4,
            rationale: "Kata dasar 'sukses' diawali huruf 's' (KTSP) sehingga meluluh menjadi 'menyukseskan'. Kata dasar 'taat' meluluh menjadi 'menaati' (bukan mentaati). Kata 'mengkritik' adalah bentuk baku (bukan mengkritisi)."
        },
        {
            id: 'ind4_inten',
            question: "Bacalah paragraf berikut!<br><br><i>Pendidikan karakter di sekolah bukan sekadar mengajarkan mana yang benar dan mana yang salah. Lebih dari itu, pendidikan karakter menanamkan kebiasaan (habituation) tentang hal yang baik sehingga siswa menjadi paham, mampu merasakan, dan mau melakukan yang baik.</i><br><br>Gagasan utama paragraf tersebut adalah...",
            options: [
                "Pendidikan karakter di sekolah berfungsi menanamkan kebiasaan bernilai baik.",
                "Sekolah hanya mengajarkan mana yang benar dan mana yang salah.",
                "Siswa harus paham dan mau melakukan kebaikan di sekolah.",
                "Pendidikan karakter merupakan tanggung jawab penuh pihak sekolah.",
                "Siswa diajarkan cara membedakan kebenaran dan kejahatan."
            ],
            correct: 0,
            rationale: "Gagasan utama tersirat dari keseluruhan paragraf, yaitu pentingnya pendidikan karakter sebagai penanaman kebiasaan bernilai baik."
        },
        {
            id: 'ind5_inten',
            question: "Bacalah teks berikut!<br><br><i>Meningkatnya penggunaan kendaraan bermotor memicu peningkatan polusi udara di kota-kota besar. Oleh karena itu, pemerintah perlu memperluas ruang terbuka hijau dan meningkatkan kualitas transportasi publik.</i><br><br>Pola hubungan antarkalimat dalam teks di atas adalah...",
            options: [
                "Sebab - Akibat - Solusi/Penyelesaian",
                "Perbandingan - Pertentangan",
                "Definisi - Contoh",
                "Urutan Waktu - Rincian",
                "Sebab - Akibat - Penegasan"
            ],
            correct: 0,
            rationale: "Kalimat 1 menyatakan sebab-akibat (kendaraan memicu polusi), dan kalimat 2 memberikan solusi/langkah pencegahan ('Oleh karena itu, pemerintah perlu...')."
        },

        // ==================== BACAAN NO. 6 - 10 (NOVEL LASKAR PELANGI) ====================
        {
            id: 'ind6_inten',
            question: "<b>Bacalah kutipan novel berikut untuk menjawab soal nomor 6 s.d. 10!</b><br><br><blockquote style='background:#f9f9f9; border-left:4px solid #ccc; padding:10px; margin:10px 0;'>Bu Mus adalah seorang guru yang pandai, kharismatik, dan memiliki pandangan jauh ke depan. Beliau menyusun sendiri silabus pelajaran Budi Pekerti dan mengajarkan kepada kami sejak dini pandangan-pandangan dasar moral, demokrasi, hukum, keadilan, dan hak-hak asasi jauh hari sebelum orang-orang sekarang meributkan soal materialisme versus pembangunan spiritual dalam pendidikan. Kami diajarkan menggali nilai luhur di dalam diri sendiri agar berperilaku baik karena kesadaran pribadi.<br><br>Pada suatu kesempatan, karena masih kecil tentu saja, kami sering mengeluh mengapa sekolah kami tak seperti sekolah-sekolah lain. Terutama, atap sekolah yang bocor dan sangat menyusahkan saat musim hujan. Beliau tak menanggapi keluhan itu, tapi mengeluarkan sebuah buku berbahasa Belanda dan memperlihatkan sebuah gambar. Gambar itu adalah sebuah ruangan yang sempit, dikelilingi tembok tebal yang suram, tinggi, gelap, dan berjeruji. Kesan di dalamnya begitu pengap, angker, penuh kekerasan dan kesedihan. 'Inilah sel Pak Karno di sebuah penjara di Bandung, di sini Beliau menjalani hukuman dan setiap hari belajar, setiap waktu membaca buku. Beliau adalah salah satu orang tercerdas yang pernah dimiliki bangsa ini.' Bu Mus tak melanjutkan ceritanya.<br><br>Kami tersihir dalam senyap. Mulai saat itu, kami tak pernah memprotes keadaan sekolah kami. Pernah suatu ketika hujan turun sangat lebat, petir sambar-menyambar. Trapani dan Mahar memakai terindak, topi kerucut dari daun lais khas tentara Vietkong, untuk melindungi jambul mereka. Kucai, Borek, dan Sahara memakai jas hujan kuning bergambar gerigi metal besar di punggungnya dengan tulisan besar 'UPT Bel' (Unit Penambangan Timah Belitong)-jas hujan PT Timah milik bapaknya. Kami sisanya hampir basah kuyup. Tapi kami sehari pun tak pernah bolos dan kami tak pernah mengeluh, tidak, sedikit pun kami tak pernah mengeluh.<i>(Diadaptasi dari Laskar Pelangi karya Andrea Hirata)</i></blockquote><br>Sesuai dengan bacaan, gambaran karakter Bu Mus yang paling tepat adalah seorang guru yang...",
            options: [
                "bertindak mandiri karena menyusun silabus mata pelajaran dan mengajarkannya sendiri",
                "memiliki wawasan luas karena mendidik moral, demokrasi, hukum, keadilan, dan hak asasi",
                "berwawasan futuristik karena memberikan mata pelajaran yang pihak lain belum membicarakannya",
                "berbudi pekerti luhur karena memberikan mata pelajaran budi pekerti, moral, dan hukum",
                "memiliki kearifan lokal karena mengajari menggali nilai luhur dari diri sendiri"
            ],
            correct: 2,
            rationale: "Bu Mus digambarkan memiliki pandangan jauh ke depan (futuristik) karena mengajarkan konsep-konsep moral dan hak asasi jauh hari sebelum masyarakat umum meributkannya."
        },
        {
            id: 'ind7_inten',
            question: "<b>(Gunakan teks novel Laskar Pelangi pada soal No. 6)</b><br><br>Ungkapan 'Kami tersihir dalam senyap' tergambar dari perilaku tokoh novel sebagai berikut...",
            options: [
                "Kami tidak pernah mengeluh dan memprotes keadaan sekolah kami",
                "Kami tetap sekolah sekalipun hujan lebat dan petir sambar-menyambar",
                "Kami tidak pernah membolos dan mengeluhkan kondisi sekolah kami",
                "Kami tetap sekolah sekalipun hanya bertopi kerucut dari daun lais",
                "Kami bertiga masuk sekolah walaupun memakai jas hujan milik ayah"
            ],
            correct: 0,
            rationale: "Setelah mendengar cerita Bu Mus tentang Bung Karno, murid-murid terdiam dan 'mulai saat itu tidak pernah memprotes keadaan sekolah'."
        },
        {
            id: 'ind8_inten',
            question: "<b>(Gunakan teks novel Laskar Pelangi pada soal No. 6)</b><br><br>Tujuan Bu Mus menunjukkan dan menjelaskan gambar kondisi sel penjara Bung Karno yang sempit untuk menanggapi keluhan muridnya tentang kondisi sekolah adalah...",
            options: [
                "menggambarkan penderitaan Bung Karno melalui fasilitas yang sangat buruk dalam sel penjara",
                "menunjukkan penderitaan Bung Karno dalam proses memperjuangkan kemerdekaan",
                "menunjukkan Bung Karno merupakan salah satu orang tercerdas hasil pemenjaraan di sel yang buruk",
                "menggambarkan kesuraman sel penjara Bung Karno yang mengesankan kekerasan dan kesedihan",
                "membuktikan lokasi yang sangat buruk tetap bisa menguatkan tekad belajar Bung Karno"
            ],
            correct: 4,
            rationale: "Bu Mus menekankan bahwa meskipun berada di sel yang sempit dan buruk, Bung Karno tetap belajar dan membaca buku hingga menjadi orang cerdas."
        },
        {
            id: 'ind9_inten',
            question: "<b>(Gunakan teks novel Laskar Pelangi pada soal No. 6)</b><br><br>Hal yang berkaitan dengan kehidupan sehari-hari berdasarkan kutipan sinopsis novel tersebut adalah...",
            options: [
                "Masih banyak sekolah yang tidak memadai, tetapi siswanya tetap bersekolah dengan semangat",
                "Siswa Bu Mus tetap belajar walaupun kondisi sekolahnya tidak bagus",
                "Siswa di daerah-daerah terpencil bersemangat untuk bersekolah, namun pemerintah tidak perhatian",
                "Semangat siswa untuk sekolah tidak berhubungan dengan kondisi sekolah",
                "Tokoh nasional banyak yang cerdas, tetapi dipenjara karena politik"
            ],
            correct: 0,
            rationale: "Keterkaitan dengan realitas kehidupan nyata adalah masih banyaknya sekolah dengan keterbatasan sarana namun siswanya tetap gigih menuntut ilmu."
        },
        {
            id: 'ind10_inten',
            question: "<b>(Gunakan teks novel Laskar Pelangi pada soal No. 6)</b><br><br>Peristiwa apa yang akan terjadi kepada tokoh 'kami' jika Bu Mus menanggapi keluhan muridnya secara emosional tanpa bercerita?<br>1) Tokoh kami akan terus mengeluhkan kondisi sekolah.<br>2) Tokoh kami tidak akan mengenal sosok keagungan Bung Karno.<br>3) Tokoh kami akan membolos saat hujan deras.<br><br>Pernyataan yang TEPAT adalah...",
            options: [
                "1, 2, dan 3 Tepat",
                "1 dan 2 Tepat, 3 Tidak Tepat",
                "1 dan 3 Tepat, 2 Tidak Tepat",
                "2 dan 3 Tepat, 1 Tidak Tepat",
                "Hanya 1 yang Tepat"
            ],
            correct: 0,
            rationale: "Tanpa cerita Bu Mus, murid-murid akan terus mengeluh, tidak mengenal teladan Bung Karno di sel penjara, serta rawan membolos."
        },

        // ==================== BACAAN NO. 11 - 15 (ARTIKEL PAUD) ====================
        {
            id: 'ind11_inten',
            question: "<b>Bacalah teks berikut untuk menjawab soal nomor 11 s.d. 15!</b><br><br><blockquote style='background:#f9f9f9; border-left:4px solid #ccc; padding:10px; margin:10px 0;'>Pak Budiman sedang mengajarkan teks informasi ke siswanya. Beliau memberikan contoh teks informasi seperti artikel di bawah ini.<br><br><b>Paragraf 1:</b><br>(1) Pendidikan anak usia dini (PAUD) adalah suatu upaya pembinaan yang ditujukan kepada anak sejak lahir sampai dengan usia enam tahun yang dilakukan melalui pemberian rangsangan pendidikan. (2) Hal ini merupakan bentuk bantuan bagi pertumbuhan dan perkembangan jasmani dan rohani agar anak memiliki kesiapan dalam memasuki pendidikan lebih lanjut. (3) Tujuan utamanya adalah untuk membentuk anak Indonesia yang berkualitas, yakni anak yang tumbuh dan berkembang sesuai dengan tingkat perkembangannya sehingga memiliki kesiapan yang ideal dalam memasuki pendidikan dasar, serta mengarungi kehidupan setelah dewasa kelak.<br><br><b>Paragraf 2:</b><br>(1) Menurut Prof. Dr. Lydia Freyani, selaku Dewan Guru Besar Fakultas Psikologi Universitas Indonesia, kegiatan di PAUD dapat memberi rangsangan atau stimulasi pendidikan yang sesuai dengan tahap tumbuh kembang anak usia prasekolah. (2) Seluruh aktivitasnya dilakukan melalui pendekatan bermain sambil belajar. (3) Selain memberikan kesempatan pada anak untuk mengenal sekolah, kegiatan-kegiatan di PAUD juga menanamkan kejujuran, kedisiplinan, dan berbagai hal positif lain. (4) Anak yang sebelumnya mendapatkan pendidikan di PAUD sering kali memiliki kemampuan untuk komunikasi lebih baik saat sekolah. (5) Hal ini disebabkan ia sudah terbiasa untuk bermain, belajar, hingga makan bersama dengan teman yang memiliki usia sebaya.<br><br><b>Ciri PAUD Menurut NAEYC:</b><br>Dalam memilih PAUD, seperti dikutip dari National Association for the Education of Young Children (NAEYC), menyarankan untuk memperhatikan ciri PAUD yang baik, yakni:<br>1) Anak-anak dapat menghabiskan hampir seluruh waktu mereka untuk bermain, baik membuat sesuatu maupun bermain dengan temannya.<br>2) Anak diberikan berbagai aktivitas sepanjang hari.<br>3) Lihat hiasan di dalam kelas, sebab idealnya karya anak-anaklah yang dipajang untuk menghias kelas, sehingga anak pun merasa bangga dan bersemangat.<br>4) Kurikulum dapat diadaptasi untuk anak yang lebih cepat belajar, dan/atau juga untuk anak yang membutuhkan bantuan lebih.<br>5) Para guru dapat mengetahui bahwa latar belakang dan kemampuan setiap anak berbeda.<br>6) Sarana dan prasarana penunjang pendidikan yang memadai.</blockquote><br>Dari artikel di atas, manakah gagasan pokok yang tepat dari keseluruhan bacaan tersebut?",
            options: [
                "Tujuan utama PAUD adalah untuk membentuk anak Indonesia yang berkualitas sehingga memiliki kesiapan yang optimal.",
                "Dalam memilih PAUD, seperti dikutip NAEYC, orang tua disarankan untuk memperhatikan ciri PAUD yang baik, di antaranya adanya sarana dan prasarana sebagai penunjang pendidikan anak.",
                "Ciri PAUD yang baik ada sekitar 5 poin yang dikutip dari National Association for the Education of Young Children (NAEYC).",
                "PAUD merupakan upaya pembinaan kepada anak sejak lahir hingga usia enam tahun melalui pemberian rangsangan pendidikan agar anak memiliki kesiapan dalam memasuki pendidikan lebih lanjut.",
                "Anak yang sebelumnya mendapatkan pendidikan di PAUD sering kali memiliki kemampuan untuk komunikasi lebih baik saat sekolah disebabkan ia sudah terbiasa dengan teman sebayanya."
            ],
            correct: 3,
            rationale: "Gagasan pokok cakupan teks secara menyeluruh mendefinisikan PAUD sebagai pembinaan usia 0-6 tahun untuk menyiapkan jenjang pendidikan berikutnya."
        },
        {
            id: 'ind12_inten',
            question: "<b>(Gunakan teks PAUD pada soal No. 11)</b><br><br>Dalam artikel tersebut, Prof. Dr. Lydia Freyani percaya bahwa kegiatan di PAUD...<br>Tentukan TEPAT atau TIDAK TEPAT untuk setiap pernyataan berikut:<br>1) Dapat merangsang pendidikan yang sesuai dengan tahap tumbuh kembang anak usia prasekolah.<br>2) Menanamkan kejujuran, kedisiplinan, dan hal positif lainnya.<br>3) Membantu anak memiliki kemampuan berkomunikasi lebih baik.<br><br>Pernyataan yang TEPAT adalah...",
            options: [
                "1, 2, dan 3 Tepat",
                "1 dan 2 Tepat",
                "2 dan 3 Tepat",
                "Hanya 1 Tepat",
                "Hanya 3 Tepat"
            ],
            correct: 0,
            rationale: "Ketiga poin tersebut secara rinci disebutkan oleh Prof. Dr. Lydia Freyani dalam paragraf kedua."
        },
        {
            id: 'ind13_inten',
            question: "<b>(Gunakan teks PAUD pada soal No. 11)</b><br><br>Tujuan utama pendidikan anak usia dini (PAUD) di Indonesia menurut bacaan tersebut adalah...",
            options: [
                "Membentuk anak Indonesia yang berkualitas",
                "Menyiapkan anak memiliki kesiapan dalam memasuki pendidikan lebih lanjut",
                "Menyiapkan anak memasuki pendidikan dasar",
                "Membentuk tumbuh kembang anak sesuai dengan perkembangannya",
                "Menyiapkan anak dalam mengarungi kehidupan setelah dewasa kelak"
            ],
            correct: 0,
            rationale: "Paragraf 1 kalimat 3 secara eksplisit menyatakan: 'Tujuan utamanya adalah untuk membentuk anak Indonesia yang berkualitas...'"
        },
        {
            id: 'ind14_inten',
            question: "<b>(Gunakan teks PAUD pada soal No. 11)</b><br><br>Makna yang BUKAN/BERBEDA dari kata 'ideal' yang terdapat pada kalimat (3) paragraf kesatu ('kesiapan yang ideal') adalah...",
            options: ["optimal", "terbaik", "kolektif", "sesuai", "cocok"],
            correct: 2,
            rationale: "Kata 'ideal' berarti sesuai yang dicita-citakan/terbaik/optimal/cocok. 'Kolektif' berarti secara bersama-sama/kelompok."
        },
        {
            id: 'ind15_inten',
            question: "<b>(Gunakan teks PAUD pada soal No. 11)</b><br><br>Menurut bacaan tersebut, dalam memilih PAUD, NAEYC menyarankan anak-anak untuk...<br>1) Menghabiskan hampir seluruh waktunya untuk bermain.<br>2) Memajang karya anak-anak untuk menghias kelas.<br>3) Diberikan berbagai aktivitas sepanjang hari.<br><br>Pernyataan yang BENAR adalah...",
            options: [
                "1, 2, dan 3 Benar",
                "1 dan 2 Benar",
                "2 dan 3 Benar",
                "Hanya 1 Benar",
                "Hanya 3 Benar"
            ],
            correct: 0,
            rationale: "Ketiga pernyataan tersebut merupakan poin-poin saran dari NAEYC yang tertulis pada daftar poin PAUD yang baik."
        },

        // ==================== BACAAN NO. 16 - 20 (MAFIA TANAH) ====================
        {
            id: 'ind16_inten',
            question: "<b>Bacalah teks berikut untuk menjawab soal nomor 16 s.d. 20!</b><br><br><blockquote style='background:#f9f9f9; border-left:4px solid #ccc; padding:10px; margin:10px 0;'><b>Paragraf 1:</b><br>(1) Mafia tanah diperingatkan agar jangan main-main dengan sengketa tanah sebab bisa menjadi bom waktu pada kemudian hari. (2) Persoalan tanah harus diwaspadai karena berpotensi menimbulkan konflik antarwarga, warga dengan pengusaha, bahkan warga dengan aparat keamanan. (3) Melihat tingginya kasus tanah dan potensi konflik di berbagai daerah, usul pembentukan tim terpadu kasus sengketa tanah perlu direspons. (4) Tim dibentuk untuk [...]. (5) Bila sudah terdapat pola dan dapat dipetakan, langkah berikutnya adalah mencari solusi yang dapat dijadikan sebagai pedoman bersama. (6) Untuk kasus-kasus yang dapat memicu konflik langsung ditangani agar tidak menjadi konflik terbuka.<br><br><b>Paragraf 2:</b><br>(1) Berbagai pihak menyebutkan bahwa mencuatnya persoalan pertanahan tidak terlepas dari ketidaktegasan pemerintah serta tidak adanya instrumen hukum yang jelas. (2) Praktisi hukum selalu mempertanyakan alasan rakyat menggarap tanah: apakah karena turun-temurun atau karena ada landasan hukumnya? (3) Sebaliknya, sudah seharusnya dibuatkan instrumen hukum sehingga ada pedoman dalam menyelesaikan kasus tanah garapan.<br><br><b>Paragraf 3:</b><br>(1) Mengingat tingginya potensi konflik persoalan tanah, masyarakat yakin jika seluruh komponen yang ada di tengah masyarakat bersatu memiliki tekad yang sama dalam menyelesaikan persoalan, masalah sengketa lahan akan dapat terselesaikan. (2) Masyarakat juga yakin bahwa meskipun penyelesaian kasus tanah belum mendapat solusi konkret, namun adanya tekad para petinggi untuk kembali mendudukan masalah tanah merupakan langkah maju. (3) Kita tidak ingin persoalan tanah memicu konflik berkepanjangan sehingga mengganggu stabilitas pembangunan. (4) Begitu pula soal tanah dikaitkan dengan keterlibatan mafia tanah. (5) Kalau jelas terbukti dan mengarah ke tindak pidana, seharusnya diberi tindakan yang tegas.</blockquote><br>Hubungan makna antarparagraf pada bacaan tersebut yang paling tepat adalah...",
            options: [
                "paragraf (2) menjadi penyebab paragraf (3)",
                "paragraf (3) memaparkan rincian atau usulan atas potensi konflik di paragraf (1) dan (2)",
                "paragraf (3) merupakan pembanding paragraf (2)",
                "paragraf (1) merupakan akibat dari paragraf (3)",
                "paragraf (2) tidak berkaitan dengan paragraf (1)"
            ],
            correct: 1,
            rationale: "Paragraf 1 dan 2 memaparkan bahaya sengketa tanah, lalu paragraf 3 menawarkan usulan/solusi tim terpadu."
        },
        {
            id: 'ind17_inten',
            question: "<b>(Gunakan teks Mafia Tanah pada soal No. 16)</b><br><br>Penulis pada bacaan teks sengketa pertanahan tersebut berpihak kepada...",
            options: [
                "penggarap lahan",
                "aparat keamanan",
                "para pengusaha",
                "praktisi hukum",
                "korban sengketa / keadilan masyarakat"
            ],
            correct: 4,
            rationale: "Penulis menekankan perlunya instrumen hukum yang jelas demi melindungi masyarakat dan mencegah kezaliman mafia tanah."
        },
        {
            id: 'ind18_inten',
            question: "<b>(Gunakan teks Mafia Tanah pada soal No. 16)</b><br><br>Konjungsi 'Sebaliknya' pada kalimat (3) paragraf kedua tidak tepat jika mengacu pada konteks antarkalimat. Konjungsi antarkalimat yang seharusnya digantikan adalah...",
            options: ["Oleh karena itu", "Namun demikian", "Bahkan", "Dengan demikian", "Akan tetapi"],
            correct: 0,
            rationale: "Kalimat sebelumnya membahas ketiadaan instrumen hukum, sehingga kesimpulan tindakan yang harus diambil dihubungkan dengan konjungsi kausalitas/akibat: 'Oleh karena itu'."
        },
        {
            id: 'ind19_inten',
            question: "<b>(Gunakan teks Mafia Tanah pada soal No. 16)</b><br><br>Kalimat yang tepat untuk melengkapi bagian rumpang [... ] pada kalimat (4) paragraf pertama ('Tim dibentuk untuk [...]') adalah...",
            options: [
                "membuat pola penyelesaian masalah, menginventarisasi, dan memetakan kasus-kasus pertanahan.",
                "membentuk tim baru yang dapat menyelesaikan masalah dan memetakan kasus-kasus pertanahan.",
                "bekerja sama dan bersinergi dengan pemerintah sebagai bagian dari perbaikan kasus yang ada.",
                "menyelesaikan kasus tanah yang belum mendapat solusi konkret, namun ada tekad para petinggi.",
                "mencari solusi terbaik dalam menyelesaikan dan memetakan kasus-kasus pertanahan."
            ],
            correct: 0,
            rationale: "Kalimat berikutnya (kalimat 5) menyebutkan 'Bila sudah terdapat pola dan dapat dipetakan...', sehingga kalimat rumpang harus memuat kata kunci 'membuat pola dan memetakan'."
        },
        {
            id: 'ind20_inten',
            question: "<b>(Gunakan teks Mafia Tanah pada soal No. 16)</b><br><br>Manakah penulisan kata serapan yang TEPAT/BAKU berdasarkan kalimat-kalimat pada teks tersebut?<br>1) 'direspons' (ditulis serangkai)<br>2) 'instrumen' (menggunakan i dan u)<br>3) 'konkret' (bukan konkrit)<br><br>Pernyataan yang TEPAT adalah...",
            options: [
                "1, 2, dan 3 Tepat",
                "1 dan 2 Tepat",
                "2 dan 3 Tepat",
                "Hanya 1 Tepat",
                "Hanya 3 Tepat"
            ],
            correct: 0,
            rationale: "Bentuk baku menurut KBBI adalah 'direspons' (imbuhan di- pasif), 'instrumen', dan 'konkret'."
        },

        // ==================== BACAAN NO. 21 - 25 (TELEKOMUNIKASI) ====================
        {
            id: 'ind21_inten',
            question: "<b>Bacalah dua pandangan berikut untuk menjawab soal nomor 21 s.d. 25!</b><br><br><blockquote style='background:#f9f9f9; border-left:4px solid #ccc; padding:10px; margin:10px 0;'><b>Pandangan 1: Cara Masa Depan Bertelekomunikasi</b><br>(1) Coba bayangkan bagaimana enaknya kalau kita bisa 'bertelekomunikasi' dengan tempat bekerja menggunakan jalan raya elektronik, dengan semua pekerjaan dilakukan di komputer atau melalui telepon! (2) Tidak perlu lagi berdesak-desakan di dalam bus atau kereta api atau membuang waktu berjam-jam di jalan dari dan/atau ke tempat kerja. (3) Kamu bisa bekerja di mana pun kamu mau coba bayangkan semua kesempatan kerja yang dapat terbuka dengan cara ini! (4) Yang terpenting dalam hal ini, kita dapat bekerja tanpa harus menghilangkan kepentingan personal, bahkan di saat-saat produktif.<br><br><b>Pandangan 2: Kehancuran Sedang dalam Proses (oleh Molly)</b><br>(1) Memperpendek waktu berkendaraan dan mengurangi penggunaan bahan bakar jelas adalah suatu ide yang bagus. (2) Namun, ide itu seharusnya disertai dengan peningkatan transportasi umum atau dengan menjamin bahwa tempat bekerja terletak dekat dengan tempat tinggal pekerja. (3) Ide yang ambisius bahwa bertelekomunikasi seharusnya merupakan bagian dari cara hidup setiap orang hanya akan menjadikan kita makin lama makin asyik dengan diri sendiri. (4) Apakah kita benar-benar menginginkan perasaan kita sebagai bagian dari masyarakat menjadi hancur lebih jauh? (5) Sudah sewajarnya kita bekerja dengan situasi dan kondisi yang benar.</blockquote><br>Berdasarkan bacaan tersebut, apa hubungan antara 'Cara Masa Depan' dan 'Kehancuran Sedang dalam Proses'?",
            options: [
                "Keduanya menggunakan argumen yang berbeda untuk mencapai kesimpulan umum yang sama.",
                "Keduanya ditulis dengan gaya yang sama, tetapi tentang topik yang sama sekali berbeda.",
                "Keduanya mengutarakan pandangan umum yang sama, tetapi mencapai kesimpulan yang berbeda.",
                "Keduanya mengutarakan pandangan yang berlawanan mengenai topik yang sama (telekomunikasi/bekerja jarak jauh).",
                "Keduanya menggambarkan pandangan yang tidak berhubungan satu sama lain."
            ],
            correct: 3,
            rationale: "Teks pertama berpandangan positif/optimis terhadap *telecommuting*, sedangkan teks kedua (Molly) berpandangan kritis/menolak karena mengancam kebersamaan sosial."
        },
        {
            id: 'ind22_inten',
            question: "<b>(Gunakan teks Telekomunikasi pada soal No. 21)</b><br><br>Apakah maksud pertanyaan retoris pada bagian akhir tulisan Molly ('Apakah kita benar-benar menginginkan perasaan kita sebagai bagian dari masyarakat menjadi hancur lebih jauh?')?",
            options: [
                "Mengajak pembaca setuju dengan penulis untuk menolak bertelekomunikasi secara ekstrim",
                "Membuat pembaca meragukan akan arti nilai dirinya sebagai bagian dari masyarakat",
                "Memberi kesan bahwa belum ada orang yang betul-betul memahami topik ini",
                "Mengajak pembaca membentuk opininya sendiri tentang topik ini",
                "Mengapresiasi ide yang ada dalam pandangan umum"
            ],
            correct: 0,
            rationale: "Pertanyaan retoris tersebut bertujuan menyenggol kesadaran pembaca agar menyetujui kekhawatiran penulis terhadap pudarnya nilai kemasyarakatan."
        },
        {
            id: 'ind23_inten',
            question: "<b>(Gunakan teks Telekomunikasi pada soal No. 21)</b><br><br>Manakah pernyataan yang disetujui oleh kedua belah pihak (baik pendukung maupun pengkritik telekomunikasi)?",
            options: [
                "Orang-orang seharusnya dibiarkan bekerja selama yang mereka inginkan.",
                "Menghabiskan waktu terlalu banyak dalam perjalanan ke tempat kerja adalah hal yang tidak efisien/tidak baik.",
                "Bertelekomunikasi tidak akan berhasil untuk setiap orang.",
                "Membentuk hubungan sosial adalah bagian terpenting dari pekerjaan.",
                "Bekerja bisa menghilangkan komunikasi yang baik."
            ],
            correct: 1,
            rationale: "Kedua teks sepakat bahwa membuang waktu berjam-jam dalam kemacetan perjalanan ke kantor adalah hal buruk/rugi."
        },
        {
            id: 'ind24_inten',
            question: "<b>(Gunakan teks Telekomunikasi pada soal No. 21)</b><br><br>Pendapat menyatakan bahwa bertelekomunikasi membuat orang 'makin lama makin asyik dengan diri sendiri'. Tentukan YA atau TIDAK untuk alasan pendorong pendapat tersebut:<br>1) Orang menjadi jarang berinteraksi tatap muka secara langsung dengan rekan kerja.<br>2) Pekerja terbiasa menyelesaikan tugas secara mandiri tanpa sosialisasi lingkungan kantor.<br><br>Pernyataan pendorong yang TEPAT (YA) adalah...",
            options: [
                "1 dan 2 YA",
                "Hanya 1 YA",
                "Hanya 2 YA",
                "1 dan 2 TIDAK",
                "Tidak ada yang sesuai"
            ],
            correct: 0,
            rationale: "Kurangnya interaksi tatap muka dan kebiasaan isolasi mandiri saat bekerja dari rumah mendukung opini bahwa orang bisa menjadi makin individualis."
        },
        {
            id: 'ind25_inten',
            question: "<b>(Gunakan teks Telekomunikasi pada soal No. 21)</b><br><br>Manakah penggunaan penulisan kata depan atau konjungsi yang TEPAT dalam kalimat berikut?",
            options: [
                "Di mana pun kamu berada, kamu harus tetap menjaga etika.",
                "Dimanapun kamu berada, kamu harus tetap menjaga etika.",
                "Di saat-saat tertentu, kita harus mengambil keputusan cepat.",
                "Namun pada awal kalimat tanpa koma.",
                "Disaat kita bekerja dari rumah."
            ],
            correct: 0,
            rationale: "Kata 'di' sebagai kata depan tempat ditulis terpisah ('di mana'), dan 'pun' sebagai partikel juga ditulis terpisah ('pun') -> 'Di mana pun'."
        },

        // ==================== BACAAN NO. 26 - 30 (REVOLUSI INDUSTRI 4.0) ====================
        {
            id: 'ind26_inten',
            question: "<b>Bacalah teks berikut untuk menjawab soal nomor 26 s.d. 30!</b><br><br><blockquote style='background:#f9f9f9; border-left:4px solid #ccc; padding:10px; margin:10px 0;'><b>Paragraf 1:</b><br>(1) Gelombang revolusi industri 4.0 telah membawa perubahan fundamental pada berbagai tatanan kehidupan global. (2) Hal ini ditandai dengan semakin berkembangnya kreativitas, dan inovasi dengan pemanfaatan teknologi informasi yang mendisrupsi berbagai sendi kehidupan global, termasuk persaingan dalam bidang ekonomi. (3) Disrupsi tersebut dapat kita saksikan melalui cepatnya perubahan yang terjadi akibat pemanfaatan artificial intelligence (AI), internet of things, human-machine interface, dan merebaknya fenomena sharing economy yang menjadikan kreativitas dan inovasi sebagai garda terdepan dalam memenangkan persaingan ekonomi global.<br><br><b>Paragraf 2:</b><br>(1) Pada era revolusi industri 4.0 menjadikan ekonomi kreatif sebagai salah satu isu strategis yang layak mendapatkan pengarus utamaan sebagai pilihan strategi untuk memenangkan persaingan global. (2) Hal ini ditandai dengan terus dilakukannya inovasi dan kreativitas guna meningkatkan nilai tambah ekonomi melalui kapitalisasi ide kreatif. (3) Ekonomi kreatif sendiri mulai dikenal luas sejak munculnya buku The Creative Economy: How People Make Money from Ideas yang ditulis oleh John Howkins. (4) Istilah 'ekonomi kreatif' dimunculkan Howkins ketika melihat adanya gelombang ekonomi baru yang melanda Amerika Serikat. (5) Gelombang ekonomi baru itu dicirikan dengan adanya aktivitas ekonomi berbasis ide, gagasan, dan kreativitas. (6) Asumsi Howkins tentang munculnya gelombang ekonomi baru di Amerika Serikat (AS) itu bukan tanpa dasar. (7) Pada tahun 1997 di AS saja, perekonomian meraup tidak kurang dari USD414 miliar hanya dari produk barang dan jasa yang berbasis kreativitas.</blockquote><br>Simpulan yang PALING MUNGKIN dapat diambil dari bacaan mengenai Revolusi Industri 4.0 dan Ekonomi Kreatif di atas adalah...",
            options: [
                "Ekonomi kreatif menjadi strategi utama dalam memenangkan persaingan ekonomi global di era Revolusi Industri 4.0 berbasis ide dan inovasi.",
                "John Howkins adalah satu-satunya orang yang menciptakan sistem ekonomi baru di Amerika Serikat.",
                "Artificial Intelligence (AI) akan menggantikan seluruh jenis pekerjaan manusia di bidang ekonomi kreatif.",
                "Perekonomian Amerika Serikat sepenuhnya bergantung pada produk barang dan jasa tradisional.",
                "Revolusi industri 4.0 hanya berdampak pada negara-negara maju seperti Amerika Serikat."
            ],
            correct: 0,
            rationale: "Simpulan utama merangkum bahwa di era 4.0, ekonomi kreatif berbasis ide dan inovasi menjadi strategi kunci pemenang persaingan global."
        },
        {
            id: 'ind27_inten',
            question: "<b>(Gunakan teks Revolusi Industri 4.0 pada soal No. 26)</b><br><br>Kalimat yang tepat sebagai perbaikan kalimat (1) paragraf kedua yang semula berbunyi: 'Pada era revolusi industri 4.0 menjadikan ekonomi kreatif sebagai salah satu isu strategis...' agar menjadi kalimat efektif ber-Subjek jelas adalah...",
            options: [
                "Era revolusi industri 4.0 menjadikan ekonomi kreatif sebagai salah satu isu strategis yang layak mendapatkan pengarusutamaan sebagai pilihan strategi untuk memenangi persaingan global.",
                "Pada era revolusi industri 4.0, menjadikan ekonomi kreatif sebagai salah satu isu strategis yang layak mendapatkan pengarus utamaan.",
                "Di era revolusi industri 4.0 dijadikan sebagai ekonomi kreatif sebagai salah satu isu strategis.",
                "Era revolusi industri 4.0 menjadi ekonomi kreatif sebagai salah satu isu strategis.",
                "Pada era revolusi industri 4.0 menjadikan ekonomi kreatif pilihan utama."
            ],
            correct: 0,
            rationale: "Menghilangkan kata depan 'Pada' di awal kalimat membuat 'Era revolusi industri 4.0' resmi menjadi Subjek kalimat, serta penulisan 'pengarusutamaan' dan 'memenangi' yang baku."
        },
        {
            id: 'ind28_inten',
            question: "<b>(Gunakan teks Revolusi Industri 4.0 pada soal No. 26)</b><br><br>Dilihat dari penggunaan tanda baca koma (,), kalimat manakah yang memuat penggunaan tanda koma yang TEPAT?",
            options: [
                "Gelombang ekonomi baru itu dicirikan dengan adanya aktivitas ekonomi berbasis ide, gagasan, dan kreativitas.",
                "Gelombang ekonomi baru itu dicirikan, dengan adanya aktivitas ekonomi berbasis ide.",
                "Asumsi Howkins tentang munculnya gelombang ekonomi baru di Amerika Serikat itu, bukan tanpa dasar.",
                "Pada tahun 1997 di AS saja perekonomian, meraup tidak kurang dari USD414 miliar.",
                "Ekonomi kreatif sendiri mulai dikenal luas, sejak munculnya buku The Creative Economy."
            ],
            correct: 0,
            rationale: "Pemerincian tiga unsur atau lebih wajib diikuti tanda koma sebelum kata 'dan' ('...ide, gagasan, dan kreativitas')."
        },
        {
            id: 'ind29_inten',
            question: "<b>(Gunakan teks Revolusi Industri 4.0 pada soal No. 26)</b><br><br>Penggunaan kata 'meraup' dalam kalimat '...perekonomian meraup tidak kurang dari USD414 miliar' memperjelas makna yaitu...",
            options: [
                "memperoleh/mendapatkan keuntungan dalam jumlah yang sangat banyak",
                "mencakup lebih banyak kerugian",
                "mengumpulkan sisa-sisa pendapatan",
                "menggandakan modal usaha secara perlahan",
                "mencapai target minimal investasi"
            ],
            correct: 0,
            rationale: "Kata 'meraup' dalam konteks finansial bermakna mendapatkan/memperoleh keuntungan atau jumlah yang sangat besar."
        },
        {
            id: 'ind30_inten',
            question: "<b>(Gunakan teks Revolusi Industri 4.0 pada soal No. 26)</b><br><br>Bagaimanakah analisis pola pengembangan paragraf ke-1 dan ke-2 pada bacaan tersebut?<br>1) Paragraf pertama menggunakan pola sebab-akibat karena menjelaskan disrupsi akibat teknologi 4.0.<br>2) Paragraf kedua menggunakan pola penjelas/ilustrasi dengan memberikan fakta angka dan referensi buku John Howkins.<br><br>Pernyataan yang BENAR adalah...",
            options: [
                "1 dan 2 Benar",
                "Hanya 1 Benar",
                "Hanya 2 Benar",
                "1 dan 2 Salah",
                "Tidak ada yang sesuai"
            ],
            correct: 0,
            rationale: "Paragraf 1 menguraikan hubungan sebab-akibat perkembangan teknologi 4.0 terhadap disrupsi global, sedangkan Paragraf 2 memberikan argumen penjelas beserta bukti data dan sejarah."
        }
    ]
};