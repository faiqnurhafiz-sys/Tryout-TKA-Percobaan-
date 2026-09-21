const dataSosiologiInten = {
    subjectId: 'sosiologi_tka_inten',
    subjectName: 'Sosiologi TKA (Prosus Inten TO-1)',
    category: 'Sosiologi',
    categoryId: 'sosiologi',
    categoryName: 'Sosiologi',
    icon: '👥',
    questions: [
        {
            id: 'sos1_inten',
            question: "Perhatikan beberapa variabel aktivitas masyarakat berikut:<br>1) Ayah menggunakan sapu untuk membersihkan kandang ayam<br>2) Ibu berkunjung dan menjenguk tetangganya yang sedang sakit<br>3) Ibu guru menjelaskan materi pelajaran sosiologi di kelas<br>4) Kakek menonton berita di TV mengenai kerusuhan massal<br><br>Pernyataan yang SESUAI sebagai objek kajian sosiologi (interaksi dan gejala sosial antarmanusia) ditunjukkan oleh nomor...",
            options: ["1 dan 2", "2 dan 3", "3 dan 4", "1 dan 4", "2 dan 4"],
            correct: 1,
            rationale: "Objek kajian sosiologi adalah hubungan antarmanusia (interaksi sosial) dan gejala sosial yang timbul dalam masyarakat, seperti pada nomor 2 (menjenguk tetangga) dan nomor 3 (interaksi guru-siswa)."
        },
        {
            id: 'sos2_inten',
            question: "Pemerintah membangun rumah susun untuk membantu masyarakat kurang mampu. Agar tidak salah sasaran, dilakukan seleksi ketat berdasarkan data sosiologis masyarakat. Berdasarkan pernyataan tersebut, hal ini menunjukkan contoh dari...",
            options: ["Objek sosiologi", "Kegunaan/Fungsi sosiologi", "Peran sosiolog", "Tujuan sosiologi", "Realitas sosiologi"],
            correct: 1,
            rationale: "Penggunaan data dan pengetahuan sosiologi untuk perencanaan sosial dan perumusan kebijakan pemerintah merupakan bentuk Kegunaan/Fungsi Sosiologi."
        },
        {
            id: 'sos3_inten',
            question: "Pemerintah Jepang menyatakan Kota Iitate tidak layak huni berdasarkan observasi ilmiah terhadap luapan radiasi reaktor nuklir. Pengambilan kesimpulan berdasarkan hasil observasi lapangan tanpa spekulasi dan menggunakan akal sehat menunjukkan sosiologi/ilmu sosial bersifat...",
            options: ["Empiris", "Teoritis", "Kumulatif", "Non-etis", "Subjektif"],
            correct: 0,
            rationale: "Ciri Empiris berarti ilmu berdasarkan pada hasil observasi, pengamatan, dan kenyataan di lapangan, bukan hasil spekulasi."
        },
        {
            id: 'sos4_inten',
            // Pengganti Soal Gambar No. 4 (Proses Keteraturan Sosial)
            question: "Suatu kondisi kehidupan masyarakat di mana tingkah laku anggota masyarakat berlangsung secara konsisten, serasi, dan berulang-ulang sesuai dengan nilai dan norma yang berlaku dinamakan...",
            options: ["Pola sosial", "Order sosial", "Keajegan sosial", "Tertib sosial", "Integrasi sosial"],
            correct: 2,
            rationale: "Keajegan sosial adalah kondisi keteraturan yang berlangsung secara tetap, konsisten, dan berulang-ulang dalam jangka waktu lama."
        },
        {
            id: 'sos5_inten',
            question: "Manakah dari pernyataan berikut yang paling tepat menggambarkan bentuk interaksi sosial Asosiatif Kooperatif (Kerja Sama)...",
            options: [
                "Kelompok masyarakat melakukan gotong royong membersihkan lingkungan sungai",
                "Seluruh peserta kompetisi bernyanyi unjuk kebolehan di panggung utama",
                "Para siswa bersaing secara individu untuk meraih peringkat pertama di sekolah",
                "Dua calon kepala desa saling membeberkan kelemahan lawan saat debat",
                "Siswa mengerjakan ujian nasional secara mandiri tanpa berkomunikasi"
            ],
            correct: 0,
            rationale: "Gotong royong membersihkan sungai merupakan bentuk interaksi sosial asosiatif berupa kerja sama (kooperasi) untuk mencapai tujuan bersama."
        },
        {
            id: 'sos6_inten',
            question: "Sugeng merasa kasihan melihat pengemis kecil yang kurus di jalan. Rasa kasihan dan kepedulian yang mendalam hingga tergerak memberikan sebagian uang sakunya merupakan contoh faktor pendorong interaksi sosial berupa...",
            options: ["Empati", "Imitasi", "Sugesti", "Simpati", "Identifikasi"],
            correct: 3,
            rationale: "Simpati adalah perasaan tertarik atau merasa kasihan terhadap orang lain sehingga dapat merasakan apa yang dialami orang tersebut."
        },
        {
            id: 'sos7_inten',
            // Pengganti Soal Gambar/Infografik No. 7 (Persyaratan SIM)
            question: "Pemberlakuan kewajiban memiliki Surat Izin Mengemudi (SIM) bagi pengendara kendaraan bermotor yang disertai sanksi tegas bagi pelanggar menunjukkan fungsi norma sosial yaitu...",
            options: [
                "Norma hukum yang berfungsi menciptakan ketertiban dan keselamatan berlalu lintas",
                "Norma kesopanan yang berfungsi sebagai kebiasaan turun-temurun",
                "Norma kesusilaan yang bersumber dari suara hati nurani individu",
                "Norma adat yang berlaku khusus pada daerah tertentu saja",
                "Norma kelakuan yang sifatnya tidak mengikat secara resmi"
            ],
            correct: 0,
            rationale: "Aturan kepemilikan SIM merupakan norma hukum (laws) yang dibuat oleh lembaga resmi negara, bersifat mengikat, dan memiliki sanksi tegas."
        },
        {
            id: 'sos8_inten',
            // Pengganti Soal Gambar No. 8 (Ojol dan Sepeda Motor)
            question: "Bagi seorang pengemudi ojek online, sepeda motor bukan sekadar alat transportasi melainkan benda yang sangat penting untuk bekerja mencari nafkah sehari-hari. Dalam konsep nilai sosial, sepeda motor tersebut memiliki nilai...",
            options: ["Nilai Material", "Nilai Vital", "Nilai Kerohanian", "Nilai Estetika", "Nilai Moral"],
            correct: 1,
            rationale: "Nilai Vital adalah segala sesuatu yang berguna bagi manusia untuk dapat mengadakan kegiatan atau aktivitas (misal: motor bagi penarik ojol)."
        },
        {
            id: 'sos9_inten',
            // Pengganti Soal Gambar No. 9 (Anak Berjualan Kue)
            question: "Seorang anak berusia 10 tahun sudah mampu memahami peran orang dewasa dan menjalankan kewajibannya secara mandiri untuk membantu keluarga. Dalam tahapan sosialisasi George Herbert Mead, anak tersebut berada pada tahap...",
            options: ["Preparatory Stage", "Play Stage", "Game Stage", "Generalized Other", "Personality Stage"],
            correct: 2,
            rationale: "Game Stage adalah tahap di mana anak sudah memahami perannya sendiri dan peran orang lain dalam masyarakat secara lebih kompleks."
        },
        {
            id: 'sos10_inten',
            question: "Pemuda asal Minangkabau terkenal memiliki tradisi merantau dan berdagang secara mandiri di daerah lain. Contoh tersebut menunjukkan bahwa pembentukan kepribadian terjadi karena hubungan antara sosialisasi dengan...",
            options: ["Warisan biologis", "Lingkungan fisik", "Pengalaman unik", "Struktur formal", "Kebudayaan"],
            correct: 4,
            rationale: "Kebudayaan tempat seseorang dibesarkan memengaruhi dan membentuk pola kepribadian khusus pada individu/kelompok tersebut."
        },
        {
            id: 'sos11_inten',
            question: "Sosialisasi tidak sempurna terjadi ketika pesan atau norma yang disampaikan oleh agen sosialisasi saling bertentangan. Perhatikan pernyataan berikut:<br>1) Di sekolah anak diajarkan disiplin tetapi di rumah orang tua membiarkan anak malas<br>2) Anak dibesarkan di keluarga agamis tetapi terpengaruh kelompok pecandu di luar rumah<br>3) Seorang anak menjadi tulang punggung keluarga pasca ayahnya meninggal<br><br>Pernyataan yang SESUAI menggambarkan dampak sosialisasi tidak sempurna/penyimpangan adalah...",
            options: ["1 dan 2", "2 dan 3", "1 dan 3", "Hanya 1", "Hanya 3"],
            correct: 0,
            rationale: "Sosialisasi tidak sempurna terjadi saat adanya pertentangan norma antar-agen sosialisasi (seperti sekolah vs rumah atau keluarga vs kelompok sebaya)."
        },
        {
            id: 'sos12_inten',
            question: "Sengketa hukum dan pidana antara dua pihak yang berkonflik diselesaikan melalui lembaga peradilan formal dengan keputusan hakim yang mengikat. Bentuk akomodasi ini dinamakan...",
            options: ["Ajudikasi", "Stalemate", "Mediasi", "Arbitrase", "Konsiliasi"],
            correct: 0,
            rationale: "Ajudikasi adalah bentuk penyelesaian konflik melalui jalur hukum/pengadilan."
        },
        {
            id: 'sos13_inten',
            question: "Perhatikan tindakan pengendalian sosial berikut:<br>1) Polisi membubarkan demonstran anarkis dengan gas air mata<br>2) Guru mengingatkan siswa agar membawa buku pelajaran besok<br>3) Pemuka agama menyampaikan ceramah bahaya penyalahgunaan narkoba<br>4) Hakim menjatuhkan hukuman penjara bagi pelaku pencurian<br><br>Tindakan pengendalian sosial yang bersifat PREVENTIF (pencegahan) ditunjukkan oleh nomor...",
            options: ["1 dan 2", "2 dan 3", "1 dan 3", "2 dan 4", "3 dan 4"],
            correct: 1,
            rationale: "Pengendalian preventif dilakukan sebelum pelanggaran terjadi (seperti pengingatan dari guru dan ceramah pemuka agama)."
        },
        {
            id: 'sos14_inten',
            question: "Masyarakat terdiri dari keberagaman kelompok dan profesi yang memiliki kedudukan sejajar/horizontal tanpa membedakan tingkatan kelas. Fenomena ini dalam sosiologi disebut...",
            options: ["Kelompok sosial", "Pluralisme sosial", "Kemajemukan sosial", "Diferensiasi sosial", "Stratifikasi sosial"],
            correct: 3,
            rationale: "Diferensiasi sosial adalah pembedaan masyarakat secara horizontal (sejajar) berdasarkan ras, suku, agama, profesi, atau gender."
        },
        {
            id: 'sos15_inten',
            // Pengganti Soal Gambar No. 15 (Salat Berjamaah & Interseksi)
            question: "Sekelompok warga dari berbagai suku dan latar belakang profesi yang berbeda rutin beribadah bersama di satu tempat ibadah. Persilangan keanggotaan kelompok sosial tersebut dikenal dengan istilah...",
            options: ["Konsolidasi", "Interseksi", "Akomodasi", "Asimilasi", "Koorporasi"],
            correct: 1,
            rationale: "Interseksi adalah persilangan keanggotaan anggota masyarakat dalam berbagai kelompok sosial yang berbeda (misal: beda suku tetapi sama agama/profesi)."
        },
        {
            id: 'sos16_inten',
            question: "Banyak buruh menempuh pendidikan tinggi untuk mendapat jabatan dan gaji yang lebih baik. Namun hal ini memicu konflik dengan pemilik perusahaan yang enggan menaikkan gaji. Dampak mobilitas sosial pada kasus ini adalah...",
            options: [
                "Keretakan hubungan sosial antarindividu",
                "Konflik antarkelas sosial",
                "Meningkatnya integrasi sosial",
                "Perubahan kepribadian positif",
                "Perubahan kebudayaan secara cepat"
            ],
            correct: 1,
            rationale: "Tuntutan kenaikan gaji berdasarkan pendidikan memicu konflik peran dan kepentingan antara kelas buruh dan kelas pemilik modal (konflik antarkelas)."
        },
        {
            id: 'sos17_inten',
            // Pengganti Soal Gambar No. 17 (Anak Petani Jadi Sarjana / Mobilitas)
            question: "Seorang anak dari keluarga petani miskin berhasil menyelesaikan studi hingga jenjang sarjana dan menjadi manajer perusahaan. Saluran utama mobilitas sosial vertikal naik (social climbing) pada contoh tersebut adalah...",
            options: ["Lembaga Keagamaan", "Lembaga Pendidikan", "Lembaga Militer", "Lembaga Politik", "Organisasi Ekonomi"],
            correct: 1,
            rationale: "Lembaga pendidikan merupakan 'social elevator' (tangga pengangkat) paling efektif untuk melakukan mobilitas sosial vertikal naik."
        },
        {
            id: 'sos18_inten',
            question: "Perbedaan antara kelompok sosial Paguyuban (Gemeinschaft) dan Patembayan (Gesellschaft) pada tabel berikut yang BENAR adalah...",
            options: [
                "Paguyuban bersifat Personal, Tradisional, Informal; Patembayan bersifat Impersonal, Utilitarian, Formal",
                "Paguyuban bersifat Impersonal, Formal; Patembayan bersifat Personal, Informal",
                "Paguyuban bersifat Utilitarian, Realistis; Patembayan bersifat Tradisional, Sentimental",
                "Paguyuban bersifat Umum, Nonformal; Patembayan bersifat Khusus, Sentimental",
                "Paguyuban bersifat Kontraktual, Sementara; Patembayan bersifat Alami, Kekal"
            ],
            correct: 0,
            rationale: "Paguyuban diikat oleh hubungan batin personal dan ikatan tradisi/kekeluargaan, sedangkan Patembayan diikat oleh ikatan formal, rasional, dan utilitas (keuntungan/kontrak)."
        },
        {
            id: 'sos19_inten',
            question: "Yayasan swasta bersama beberapa lembaga donasi mendirikan panti jompo untuk merawat lansia terlantar sebagai wujud kepedulian sosial. Kelompok sosial yang dibentuk atas dasar tujuan tertentu dan bersifat formal/sekunder ini dinamakan...",
            options: ["Kelompok Primer", "Kelompok Sekunder", "Reference Group", "Out-Group", "In-Group"],
            correct: 1,
            rationale: "Kelompok Sekunder adalah kelompok yang dibentuk atas dasar kepentingan bersama, ikatan formal, dan hubungan yang rasional."
        },
        {
            id: 'sos20_inten',
            question: "Di sebuah kota, pedagang berasal dari Suku Batak dan Suku Jawa, sementara profesi pengemudi juga diisi oleh kedua suku tersebut. Struktur interseksi sosial ini berpengaruh positif terhadap integrasi masyarakat majemuk karena...",
            options: [
                "Perbedaan suku bangsa disatukan oleh kesamaan profesi/pekerjaan",
                "Jenis suku dan pekerjaan selalu berada dalam hirarki vertikal",
                "Setiap individu mengisolasikan diri sesuai latar belakang sukunya",
                "Struktur pekerjaan mengharuskan masyarakat mengubah identitas kesukuan",
                "Masyarakat menutup diri dari interaksi dengan suku lain"
            ],
            correct: 0,
            rationale: "Interseksi (persilangan) antara suku dan pekerjaan mengurangi potensi konflik primordial karena kelompok disatukan oleh kesamaan kepentingan ekonomi/profesi."
        },
        {
            id: 'sos21_inten',
            // Pengganti Soal Gambar No. 21 (Tawuran Pelajar / Perilaku Menyimpang)
            question: "Tawuran antar-geng pelajar sering kali dipicu oleh rasa solidaritas kelompok yang berlebihan serta pengaruh negatif dari kelompok acuan. Dalam sosiologi, fenomena ini dipengaruhi oleh...",
            options: [
                "Kuatnya perasaan In-Group feeling yang ekstrem dan subkultur menyimpang",
                "Berjalannya fungsi afeksi keluarga secara optimal",
                "Keberhasilan sosialisasi nilai-nilai kedisiplinan sekolah",
                "Sikap apatis dari seluruh anggota kelompok sebaya",
                "Proses integrasi sosial yang berlangsung sempurna"
            ],
            correct: 0,
            rationale: "Sikap *In-Group feeling* yang berlebihan membuat kelompok memandang kelompok lain (*Out-Group*) sebagai musuh, dipicu oleh pergaulan subkultur menyimpang."
        },
        {
            id: 'sos22_inten',
            question: "Dalam pandangan sosiologi, konflik sosial dianggap sebagai gejala wajar yang selalu ada dalam kehidupan masyarakat karena...",
            options: [
                "Kehidupan masyarakat selalu dinamis, berubah, dan memiliki perbedaan kepentingan",
                "Setiap manusia pada dasarnya memiliki sifat jahat dan merusak",
                "Konflik selalu memberikan dampak positif secara langsung tanpa kerugian",
                "Masyarakat tidak memiliki norma dan nilai sosial sama sekali",
                "Pola pemikiran masyarakat senantiasa bersifat primitif"
            ],
            correct: 0,
            rationale: "Konflik adalah gejala wajar karena masyarakat terus berubah, dinamis, serta terdiri dari individu/kelompok yang memiliki perbedaan persepsi dan kepentingan."
        },
        {
            id: 'sos23_inten',
            question: "Demonstrasi mahasiswa dan masyarakat yang menuntut perbaikan kinerja serta transparansi anggaran lembaga legislatif memiliki dampak positif bagi struktur masyarakat, yaitu...",
            options: [
                "Mendorong perbaikan kinerja dan komitmen pembenahan pada lembaga publik",
                "Menghilangkan fungsi lembaga legislatif dalam sistem politik",
                "Menyebabkan kekacauan ekonomi yang tidak dapat dipulihkan",
                "Menurunkan tingkat partisipasi politik warga negara",
                "Membuat pemerintah bersikap acuh tak acuh terhadap aspirasi publik"
            ],
            correct: 0,
            rationale: "Dampak positif dari konflik/demonstrasi yang konstruktif adalah sebagai sarana kritik sosial untuk memperbaiki kinerja dan norma lembaga negara."
        },
        {
            id: 'sos24_inten',
            question: "Masyarakat perkotaan yang multikultural terbiasa berinteraksi dan bekerja sama dengan orang dari berbagai latar belakang suku dan agama. Dampak positif dari proses tersebut adalah...",
            options: [
                "Mengurangi sentimen kelompok primordial dan memperkuat integrasi",
                "Mempercepat pudarnya kebudayaan nasional",
                "Menghilangkan perbedaan identitas secara mutlak",
                "Menyebabkan munculnya konflik antarkelas secara masif",
                "Mendorong homogenitas total pada seluruh aspek kehidupan"
            ],
            correct: 0,
            rationale: "Interaksi yang terbuka pada masyarakat multikultural dapat mengikis prasangka dan sentimen primordialisme sempit."
        },
        {
            id: 'sos25_inten',
            question: "Integrasi fungsional terbentuk karena adanya fungsi-fungsi tertentu dalam masyarakat. Perhatikan pernyataan berikut:<br>1) Kerjasama AFTA antarnegara ASEAN untuk saling melengkapi kebutuhan ekonomi<br>2) Tim Damkar bekerjasama dengan Kepolisian dan BPBD dalam penanganan bencana<br>3) Penggunaan gas air mata oleh aparat untuk membubarkan demonstran anarkis<br><br>Pernyataan yang SESUAI sebagai contoh Integrasi Fungsional adalah...",
            options: ["1 dan 2", "1 dan 3", "2 dan 3", "Hanya 1", "Hanya 3"],
            correct: 0,
            rationale: "Integrasi fungsional terjadi karena adanya saling ketergantungan fungsi antarbagian/lembaga di masyarakat (seperti kolaborasi AFTA atau Damkar-BPBD)."
        },
        {
            id: 'sos26_inten',
            question: "Pada masa penjajahan, pemerintah kolonial memberi kekuasaan terbatas kepada raja-raja lokal dengan syarat mereka tunduk pada pemerintah kolonial. Pola hubungan antarkelompok seperti ini dinamakan...",
            options: ["Paternalisme", "Pluralisme", "Akulturalisme", "Integrasi", "Serikat"],
            correct: 0,
            rationale: "Paternalisme adalah bentuk dominasi kelompok pendatang/penguasa atas kelompok pribumi yang diperlakukan seperti bawahan/anak yang tidak mandiri."
        },
        {
            id: 'sos27_inten',
            question: "Kemajemukan masyarakat Nusantara yang memiliki mata pencaharian berbeda-beda (ada yang berbasis pertanian, perkebunan, maupun perikanan) terutama disebabkan oleh faktor...",
            options: ["Letak geografis dan kondisi alam yang berbeda-beda", "Kualitas sumber daya manusia yang homogen", "Pengaruh ideologi politik luar negeri", "Sistem pemerintahan terpusat", "Isolasi kebudayaan secara mutlak"],
            correct: 0,
            rationale: "Kondisi geografis dan persebaran iklim/topografi daerah di Indonesia menyebabkan keberagaman mata pencaharian dan budaya lokal."
        },
        {
            id: 'sos28_inten',
            question: "Berikut adalah ciri-ciri kehidupan sosial masyarakat:<br>1) Sering terjadi konflik antar kelompok yang berbeda<br>2) Masih sulit mencapai kesepakatan bersama (*consensus*) mengenai nilai dasar<br>3) Integrasi sosial berlangsung sangat cepat dan tanpa paksaan<br>4) Struktur sosialnya sangat homogen<br><br>Ciri masyarakat majemuk (*plural society*) menurut Pierre L. van den Berghe ditunjukkan oleh nomor...",
            options: ["1 dan 2", "1 dan 3", "2 dan 3", "2 dan 4", "3 dan 4"],
            correct: 0,
            rationale: "Ciri masyarakat majemuk antara lain: terintegrasi atas paksaan/saling ketergantungan, sulit mencapai konsensus nilai dasar, dan potensial memicu konflik."
        },
        {
            id: 'sos29_inten',
            // Pengganti Soal Gambar No. 29 (Lembaga Keluarga)
            question: "Pernyataan berikut ini yang BENAR mengenai fungsi dasar lembaga keluarga adalah...",
            options: [
                "Meningkatkan status sosial secara instan di mata hukum",
                "Menjalankan fungsi reproduksi, sosialisasi pertama, dan afeksi (kasih sayang)",
                "Memberikan sanksi pidana formal bagi anggota masyarakat yang melanggar hukum",
                "Mengatur tata kelola moneter dan ekonomi makro masyarakat",
                "Menghilangkan diferensiasi sosial dalam kehidupan bermasyarakat"
            ],
            correct: 1,
            rationale: "Fungsi utama lembaga keluarga mencakup fungsi reproduksi, proteksi, afeksi (kasih sayang), serta sosialisasi awal bagi anak."
        },
        {
            id: 'sos30_inten',
            question: "Pegadaian merupakan lembaga ekonomi yang sangat dibutuhkan oleh masyarakat luas dari berbagai lapisan untuk solusi keuangan cepat. Berdasarkan sudut penyebarannya, Pegadaian dikategorikan sebagai...",
            options: ["General Social Institutions", "Crescive Social Institutions", "Subsidiary Social Institutions", "Restricted Social Institutions", "Regulative Social Institutions"],
            correct: 0,
            rationale: "General Institutions adalah lembaga sosial yang dikenal dan diterima oleh hampir seluruh lapisan masyarakat."
        },
        {
            id: 'sos31_inten',
            question: "Kemudahan sistem kredit dan belanja online mendorong sebagian masyarakat untuk terus membeli barang secara berlebihan di luar batas kemampuan finansialnya. Merekabergaya hidup...",
            options: ["Konsumerisme", "Industrialisasi", "Sekularisme", "Hedonisme", "Materialisme"],
            correct: 0,
            rationale: "Konsumerisme adalah paham atau gaya hidup yang menganggap barang-barang mewah sebagai ukuran kebahagiaan dan membeli barang secara berlebihan."
        },
        {
            id: 'sos32_inten',
            question: "Penemuan teknologi internet menyebabkan perubahan masif di berbagai sektor, mulai dari lembaga pendidikan, politik, hingga ekonomi. Pola perubahan sosial ini bersifat...",
            options: ["Memancar ke berbagai bidang (radiasi)", "Menjalar secara linear lurus", "Menyebabkan timbulnya satu penemuan saja", "Berlangsung lambat tanpa dampak nyata", "Membatasi perkembangan teknologi lain"],
            correct: 0,
            rationale: "Penemuan baru yang memicu perubahan yang memancar/menyebar ke berbagai lembaga masyarakat dinamakan pola penemuan memancar."
        },
        {
            id: 'sos33_inten',
            question: "Teori evolusi linear dalam perubahan sosial menggambarkan bahwa perkembangan masyarakat bergerak secara berurutan dan perlahan dari tingkatan...",
            options: ["Primitif -> Tradisional -> Modern", "Modern -> Tradisional -> Primitif", "Tradisional -> Primitif -> Modern", "Metafisik -> Teologis -> Positivistik", "Kapitalis -> Feodal -> Sosialis"],
            correct: 0,
            rationale: "Evolusi linear mengasumsikan perubahan masyarakat bergerak maju dalam tahapan yang pasti dari bentuk sederhana/primitif menuju modern."
        },
        {
            id: 'sos34_inten',
            // Pengganti Soal Gambar No. 34 (Pabrik / Industrialisasi)
            question: "Pembangunan kawasan industri baru di berbagai daerah membawa perubahan sosial berupa peningkatan lapangan kerja. Namun di sisi lain juga berpotensi menimbulkan dampak negatif yaitu...",
            options: [
                "Pencemaran lingkungan dan alih fungsi lahan pertanian",
                "Penurunan jumlah penduduk secara drastis",
                "Meningkatnya kesadaran adat tradisional",
                "Penghentian arus urbanisasi dari desa ke kota",
                "Hilangnya teknologi komunikasi modern"
            ],
            correct: 0,
            rationale: "Industrialisasi membawa dampak positif ekonomi tetapi juga berisiko merusak lingkungan dan mengalihfungsikan lahan subur."
        },
        {
            id: 'sos35_inten',
            question: "Kemajuan platform e-commerce global mempermudah transaksi jual beli lintas negara. Dampak positif globalisasi di bidang ekonomi ini adalah...",
            options: ["Memperluas pangsa pasar dan pertumbuhan ekonomi", "Masuknya budaya asing secara liar", "Meningkatkan perilaku konsumtif saja", "Mendorong gaya hidup kebarat-baratan", "Menutup peluang bagi pelaku UMKM lokal"],
            correct: 0,
            rationale: "Penggunaan e-commerce global memperluas akses pasar ekspor/impor dan mendorong integrasi serta pertumbuhan ekonomi."
        },
        {
            id: 'sos36_inten',
            question: "Seorang pimpinan perusahaan hanya mau merekrut karyawan yang berasal dari daerah atau suku asalnya saja. Tindakan pimpinan ini bertentangan dengan prinsip multikulturalisme karena mengutamakan...",
            options: ["Primordialisme", "Patriotisme", "Egosentrisme", "Chauvinisme", "Liberalisme"],
            correct: 0,
            rationale: "Primordialisme adalah ikatan atau pandangan mengutamakan kelompok/suku/daerah asal secara berlebihan."
        },
        {
            id: 'sos37_inten',
            question: "Siswa SMA mengumpulkan data langsung di lapangan dengan cara mengawawancarai para sopir angkot mengenai pendapatan kotor dan jam kerja. Berdasarkan cara memperolehnya, data tersebut tergolong...",
            options: ["Data Primer", "Data Sekunder", "Data Kualitatif", "Data Akurat", "Data Kuantitatif"],
            correct: 0,
            rationale: "Data Primer adalah data yang diperoleh secara langsung dari sumber utama/responden di lapangan oleh peneliti."
        },
        {
            id: 'sos38_inten',
            question: "Dari tabel persentase rasa aman warga saat bepergian, diperoleh data bahwa angka rasa aman paling rendah terjadi pada saat bepergian di Dini Hari (tingkat kerawanan tinggi). Hal ini menunjukkan manfaat tabel dalam penelitian untuk...",
            options: [
                "Menyajikan data secara ringkas dan memudahkan penarikan kesimpulan",
                "Membuktikan bahwa semua waktu selalu aman",
                "Menggantikan fungsi seluruh instrumen penelitian",
                "Membuat data kualitatif menjadi narasi cerita",
                "Menghilangkan kebutuhan akan analisis data"
            ],
            correct: 0,
            rationale: "Penyajian data dalam bentuk tabel bertujuan mempermudah analisis, pembacaan data, dan penarikan kesimpulan."
        },
        {
            id: 'sos39_inten',
            question: "Seorang peneliti melakukan pengujian ulang terhadap teori dan data tingkat pengangguran guna menguji kebenaran hipotesis yang ada. Berdasarkan tujuannya, penelitian ini tergolong jenis...",
            options: ["Verifikatif", "Development", "Eksploratif", "Deskriptif", "Korelatif"],
            correct: 0,
            rationale: "Penelitian Verifikatif bertujuan untuk menguji kembali kebenaran suatu teori, data, atau hipotesis yang sudah ada sebelumnya."
        },
        {
            id: 'sos40_inten',
            question: "Seorang peneliti mengambil sampel 300 siswa kelas X, 200 siswa kelas XI, dan 100 siswa kelas XII sesuai dengan proporsi jumlah siswa di tiap tingkatan. Teknik pengambilan sampel ini dinamakan...",
            options: ["Proportional Stratified Random Sampling", "Simple Random Sampling", "Cluster Sampling", "Quota Sampling", "Purposive Sampling"],
            correct: 0,
            rationale: "Sampel berstrata proporsional (*Proportional Stratified Sampling*) digunakan jika populasi memiliki tingkatan/strata dan sampel diambil seimbang sesuai proporsi tiap tingkatan."
        }
    ]
};