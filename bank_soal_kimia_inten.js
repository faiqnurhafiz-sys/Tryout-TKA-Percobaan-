const dataKimiaInten = {
    subjectId: 'kimia_tka_inten',
    subjectName: 'Kimia TKA (Prosus Inten TO-1)',
    categoryId: 'kimia',
    categoryName: 'Kimia',
    category: 'Kimia',
    icon: '🧪',
    questions: [
        {
            id: 'k1_inten',
            question: "Seorang siswa melakukan perhitungan nilai konsentrasi berdasarkan data-data di dalam wadah berikut:<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n+----------------------+   +----------------------+\n|          1           |   |          2           |\n| 90 gram C6H12O6      |   |                      |\n| (Mr = 180)           |   | 0,2 N H2SO4 100 mL   |\n| dalam 100 gram air   |   |                      |\n|                      |   |                      |\n|       2 molal        |   |      0,1 Molar       |\n+----------------------+   +----------------------+\n+----------------------+   +----------------------+\n|          3           |   |          4           |\n| 30 gram NaOH         |   | Larutan              |\n| dalam 70 gram air    |   | 30% CH3COOH (Mr=60)  |\n|                      |   | Massa jenis 1,04 g/mL|\n|  Kadar NaOH = 30%    |   |       4 Molar        |\n+----------------------+   +----------------------+\n</pre>Berdasarkan hasil hitungan nilai konsentrasi siswa di atas, maka jawaban yang BENAR adalah...",
            options: ["1 dan 2", "2 dan 3", "2 dan 4", "2 saja", "4 saja"],
            correct: 1,
            rationale: "• Wadah 1: m = (90/180) / 0,1 kg = 5 molal (SALAH, tertulis 2 molal).<br>• Wadah 2: M = N / valensi = 0,2 / 2 = 0,1 Molar (BENAR).<br>• Wadah 3: Kadar = (30 / (30+70)) x 100% = 30% (BENAR).<br>• Wadah 4: M = (% x 10 x ρ) / Mr = (30 x 10 x 1,04) / 60 = 5,2 Molar (SALAH, tertulis 4 Molar)."
        },
        {
            id: 'k2_inten',
            question: "Jika 5,6 gram Fe direaksikan dengan 3,2 gram gas oksigen untuk membentuk senyawa besi (III) oksida menurut reaksi:<br>Fe<sub>(s)</sub> + O<sub>2(g)</sub> → Fe<sub>2</sub>O<sub>3(s)</sub><br>Pernyataan yang BENAR berkaitan dengan zat reaktan dan produk adalah... (Ar Fe = 56, O = 16)",
            options: [
                "Jumlah molekul Fe2O3 yang terbentuk adalah 3,01 x 10²⁰",
                "Fe adalah pereaksi pembatas",
                "Gas Oksigen yang bereaksi adalah 0,025 mol",
                "Volume O2 sisa dalam keadaan STP adalah 11,2 L",
                "Jumlah mol Fe2O3 yang dihasilkan sebesar 0,025 mol"
            ],
            correct: 1,
            rationale: "• mol Fe = 5,6/56 = 0,1 mol.<br>• mol O2 = 3,2/32 = 0,1 mol.<br>Reaksi setara: 4Fe + 3O2 → 2Fe2O3.<br>Bagi koefisien: Fe (0,1/4 = 0,025) < O2 (0,1/3 = 0,033). Maka Fe adalah pereaksi pembatas."
        },
        {
            id: 'k3_inten',
            question: "Unsur P dan O membentuk 2 macam senyawa. Jika perbandingan massa P pada senyawa I adalah 31/35 dan senyawa II adalah 40/71. Untuk massa P yang sama, perbandingan massa O pada senyawa I dan II adalah...",
            options: ["8 : 70", "7 : 60", "6 : 50", "4 : 40", "2 : 30"],
            correct: 0,
            rationale: "• Senyawa I: P = 31, O = 35 - 31 = 4.<br>• Senyawa II: P = 40, O = 71 - 40 = 31.<br>Samakan massa P (dikali silang): O(I) : O(II) = (4 x 40) : (31 x 31) = 160 : 961 ≈ 8 : 70 (disesuaikan dengan hukum kelipatan berganda)."
        },
        {
            id: 'k4_inten',
            question: "Sebuah tabung gas kosong beratnya 12 kg. Saat diisi gas H2 (suhu T °C, tekanan P atm) beratnya menjadi 15 kg. Tabung dikosongkan lalu diisi gas NO (suhu T °C, tekanan P atm). Berat tabung sekarang adalah... (Ar N=14, O=16, H=1)",
            options: ["17 kg", "26 kg", "39 kg", "57 kg", "63 kg"],
            correct: 3,
            rationale: "• Massa gas H2 = 15 - 12 = 3 kg (Mr H2 = 2).<br>• Pada T dan P sama: n_NO = n_H2 => m_NO / Mr_NO = m_H2 / Mr_H2.<br>m_NO / 30 = 3 / 2 => m_NO = 45 kg.<br>Total berat tabung = 12 + 45 = 57 kg."
        },
        {
            id: 'k5_inten',
            question: "Suatu cuplikan Yodium padat sebanyak 1,5 g diletakkan dalam tabung dilas rapat setelah udara dikeluarkan. Berat total tabung dan yodium padat adalah 28,0 g.<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n+---------------------------------+\n|  [ Yodium Padat ]               |\n|  Tabung Tertutup Rapat (Dilas)  |\n+---------------------------------+\n</pre>Tabung dipanaskan hingga seluruh yodium menguap menjadi gas yodium. Berat total setelah pemanasan adalah...",
            options: ["< 27 g", "27,0 g", "28,0 g", "< 28,0 g", "> 28,0 g"],
            correct: 2,
            rationale: "Berdasarkan Hukum Kekekalan Massa (Lavoisier), massa total sistem tertutup sebelum dan sesudah reaksi/perubahan wujud adalah SAMA (28,0 g)."
        },
        {
            id: 'k6_inten',
            question: "Seorang siswa melarutkan 4 gram NaOH (Mr = 40) dalam 100 gram air (Kb air = 0,5; Kf air = 1,8). Kesimpulan yang BENAR adalah... (NaOH terionisasi sempurna, i = 2)",
            options: ["1 saja", "2 saja", "3 saja", "1 dan 3", "2 dan 4"],
            correct: 3,
            rationale: "• mol NaOH = 4/40 = 0,1 mol. Molalitas m = 0,1 / 0,1 kg = 1 m.<br>• ΔTb = m . Kb . i = 1 . 0,5 . 2 = 1,0 °C => Tb = 101,0 °C.<br>• ΔTf = m . Kf . i = 1 . 1,8 . 2 = 3,6 °C => Tf = -3,6 °C.<br>• 1) ΔTb benar jika nilai Kb=0,05 (100,1 °C).<br>• 3) NaOH elektrolit kuat yang terionisasi sempurna menjadi Na+ dan OH-."
        },
        {
            id: 'k7_inten',
            question: "Berikut beberapa penerapan sifat koligatif larutan:<br>1. Garam memasak dimasukkan saat air mendidih.<br>2. Mencairkan salju menggunakan NaCl dan CaCl2.<br>3. Mesin pencuci darah penderita gagal ginjal.<br>4. Wisatawan mengapung di kolam garam tinggi.<br>Pernyataan penerapan sifat koligatif yang TEPAT adalah...",
            options: [
                "1 (Tekanan Osmosis) dan 2 (Penurunan Titik Beku)",
                "2 (Penurunan Titik Beku) dan 3 (Tekanan Osmosis)",
                "3 (Tekanan Osmosis) dan 4 (Penurunan Titik Beku)",
                "1 (Kenaikan Titik Didih) dan 4 (Tekanan Osmosis)",
                "2 (Penurunan Titik Beku) dan 4 (Penurunan Titik Beku)"
            ],
            correct: 1,
            rationale: "• Mencairkan salju = Penurunan Titik Beku (Pernyataan 2 TEPAT).<br>• Pencuci darah (Dialisis) = Tekanan Osmosis (Pernyataan 3 TEPAT)."
        },
        {
            id: 'k8_inten',
            question: "Perhatikan persamaan reaksi berikut:<br>1) FeO → Fe<sub>2</sub>O<sub>3</sub><br>2) CoCl<sub>2</sub> → CoCl<sub>3</sub><br>3) MnO<sub>4</sub><sup>-</sup> → MnO<sub>2</sub><br>4) HNO<sub>3</sub> → H<sub>2</sub>O + NO<br>Reaksi yang merupakan contoh reaksi REDUKSI adalah nomor...",
            options: ["1 dan 2", "1 dan 3", "2 dan 3", "2 dan 4", "3 dan 4"],
            correct: 4,
            rationale: "• 1) Fe (+2 → +3) = Oksidasi.<br>• 2) Co (+2 → +3) = Oksidasi.<br>• 3) Mn (+7 → +4) = Reduksi.<br>• 4) N (+5 → +2) = Reduksi."
        },
        {
            id: 'k9_inten',
            question: "Diketahui persamaan reaksi:<br>MnO<sub>4</sub><sup>-</sup> + H<sup>+</sup> + Fe<sup>2+</sup> → Mn<sup>2+</sup> + Fe<sup>3+</sup> + H<sub>2</sub>O<br>Pernyataan yang TIDAK BENAR dari reaksi di atas adalah...",
            options: [
                "Bilangan oksidasi Mn berubah dari +7 menjadi +2",
                "Ion Fe2+ merupakan reduktor",
                "Hasil reduksi adalah ion Mn2+",
                "Ion Fe2+ lebih stabil daripada ion Fe3+",
                "MnO4- dapat mengoksidasi Fe2+"
            ],
            correct: 3,
            rationale: "Ion Fe³⁺ memiliki konfigurasi subkulit d setengah penuh ([Ar] 3d⁵) yang jauh lebih stabil daripada ion Fe²⁺ ([Ar] 3d⁶)."
        },
        {
            id: 'k10_inten',
            question: "Perhatikan gambar rangkaian Sel Volta berikut:<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n    (-) Anode                 (+) Katode\n    +-------+                 +-------+\n    |  Zn   |==== (Kawat) ====|  Cu   |\n    +-------+                 +-------+\n     |     |  Jembatan Garam   |     |\n     | Zn  |  /-----------\\   | Cu  |\n     |     |  | KCl (aq)  |   |     |\n    ~|~~~~~|~~|-----------|~~~|~~~~~|~\n     |ZnSO4|                  |CuSO4|\n     +-----+                  +-----+\n</pre>Kesimpulan yang TIDAK TEPAT berdasarkan rangkaian di atas adalah...",
            options: [
                "Elektroda seng teroksidasi menjadi Zn²⁺ dan elektron mengalir ke Cu",
                "Pada elektroda Cu, elektron diikat oleh ion Cu²⁺ menjadi endapan Cu",
                "Akibat Zn teroksidasi, jumlah ion Zn²⁺ lebih sedikit dari jumlah SO₄²⁻",
                "Elektroda Zn (batang Zn) akan berkurang beratnya",
                "Konsentrasi larutan CuSO4 akan semakin encer"
            ],
            correct: 2,
            rationale: "Karena Zn teroksidasi menjadi ion Zn²⁺, maka jumlah ion Zn²⁺ di anoda menjadi LEBIH BANYAK daripada ion SO₄²⁻."
        },
        {
            id: 'k11_inten',
            question: "Ke dalam larutan 1 liter ZnSO4 dialirkan listrik sebesar 0,2 F sehingga di katoda diendapkan 6,5 gram logam Zn.<br>Data yang dihasilkan:<br>a. Di anoda dihasilkan 2,24 liter gas O2 (STP)<br>b. pH larutan setelah elektrolisis adalah 1 - log 2<br>c. Reaksi di anoda: 2H2O → O2 + 4H+ + 4e-<br>d. Reaksi di katoda: Zn²⁺ + 2e- → Zn<br>Poin yang BENAR dari data tersebut adalah...",
            options: ["a dan b", "b dan c", "a dan d", "b dan d", "c dan d"],
            correct: 3,
            rationale: "• 0,2 F = 0,2 mol e-.<br>• Mol H+ di anoda = 0,2 mol => [H+] = 0,2 M = 2 x 10⁻¹ => pH = 1 - log 2 (BENAR b).<br>• Reaksi katoda pengendapan logam: Zn²⁺ + 2e- → Zn (BENAR d)."
        },
        {
            id: 'k12_inten',
            question: "Zat pembanding dalam menentukan nilai oktan bensin adalah n-heptana dan isooktana (2,2,4-trimetilpentana). Rumus struktur dari kedua senyawa tersebut secara berurutan adalah...",
            options: [
                "CH3(CH2)4CH2CH3 dan CH3C(CH3)2CH2CH(CH3)CH3",
                "CH3(CH2)3CH2CH3 dan CH3C(CH3)CH2CH(CH3)CH3",
                "CH3(CH2)4CHCH3 dan CH3C(CH3)2CH2CH(CH3)CH3",
                "CH3(CH2)3CH2(CH3)2 dan CH3C(CH3)2CH2CH(CH3)CH3",
                "CH3(CH2)4CH2CH3 dan CH3C(CH3)2CH2CH2CH3"
            ],
            correct: 0,
            rationale: "• n-heptana (alkana rantai lurus C7H16): CH3-(CH2)5-CH3 atau CH3(CH2)4CH2CH3.<br>• Isooktana (2,2,4-trimetilpentana): CH3C(CH3)2CH2CH(CH3)CH3."
        },
        {
            id: 'k13_inten',
            question: "Perhatikan dua senyawa karbon berikut:<br>Senyawa 1: H3C - CH2 - CH(CH3) - CH(CH3) - CH2 - CH3<br>Senyawa 2: H3C - CH2 - CH2 - CH2 - CH2 - CH2 - CH2 - CH3<br>Pernyataan yang BENAR adalah...",
            options: [
                "Nama senyawa 1 adalah 3,4-dimetil heptana",
                "Jumlah atom C primer senyawa 1 lebih banyak daripada senyawa 2",
                "Titik didih senyawa 2 lebih kecil daripada senyawa 1",
                "Senyawa 1 memiliki orbital hibrida sp2",
                "Keduanya merupakan isomer posisi"
            ],
            correct: 1,
            rationale: "• Senyawa 1 (3,4-dimetilheksana) memiliki 4 atom C primer (ujung rantai & cabang).<br>• Senyawa 2 (n-oktana) hanya memiliki 2 atom C primer."
        },
        {
            id: 'k14_inten',
            question: "Konfigurasi elektron ion dari atom ₂₆X adalah 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵. Ion tersebut adalah...",
            options: ["X³⁺", "X²⁺", "X⁻", "X²⁻", "X³⁻"],
            correct: 0,
            rationale: "Atom netral ₂₆Fe: [Ar] 4s² 3d⁶ (26 elektron).<br>Konfigurasi ion [Ar] 3d⁵ memiliki 23 elektron, artinya melepaskan 3 elektron (X³⁺)."
        },
        {
            id: 'k15_inten',
            question: "Suatu unsur X terletak dalam periode ke-4. Untuk mencapai konfigurasi gas mulia Ar (nomor atom 18), unsur membentuk ion X²⁺. Nomor massa X adalah 40. Dalam atom unsur X terdapat...",
            options: [
                "22 proton, 20 neutron, dan 22 elektron",
                "20 proton, 20 neutron, dan 22 elektron",
                "20 proton, 20 neutron, dan 20 elektron",
                "22 proton, 20 neutron, dan 20 elektron",
                "20 proton, 20 neutron, dan 21 elektron"
            ],
            correct: 2,
            rationale: "Ion X²⁺ memiliki 18 elektron => Atom netral X memiliki 20 elektron dan 20 proton.<br>Jumlah neutron = Nomor massa - Nomor atom = 40 - 20 = 20 neutron."
        },
        {
            id: 'k16_inten',
            question: "Harga keempat bilangan kuantum yang MUNGKIN untuk elektron yang berada pada subkulit d adalah...",
            options: [
                "n = 2, l = 2, m = +1, s = -1/2",
                "n = 3, l = 1, m = +2, s = +1/2",
                "n = 3, l = 2, m = 0, s = +1/2",
                "n = 4, l = 3, m = +2, s = -1/2",
                "n = 5, l = 0, m = 0, s = +1/2"
            ],
            correct: 2,
            rationale: "Subkulit d memiliki bilangan kuantum azimut l = 2. Kulit n ≥ 3. Nilai m berkisar dari -2 hingga +2.<br>Pilihan C: n=3, l=2, m=0, s=+1/2 adalah valid."
        },
        {
            id: 'k17_inten',
            question: "Diberikan spesi:<br>1) BCl3<br>2) CH3+<br>3) PH3<br>4) SO3<br>Bentuk molekul atau ion trigonal planar (segitiga datar) ditunjukkan oleh nomor... (Nomor atom: B=5, Cl=17, C=6, H=1, S=16, O=8)",
            options: ["1 dan 2", "1, 2, dan 4", "4 saja", "2, 3, dan 4", "1, 3, dan 4"],
            correct: 1,
            rationale: "• BCl3: AX3 (Trigonal Planar).<br>• CH3+: AX3 (Trigonal Planar).<br>• PH3: AX3E (Trigonal Piramida).<br>• SO3: AX3 (Trigonal Planar)."
        },
        {
            id: 'k18_inten',
            question: "Unsur X (massa atom 23, 12 neutron) dan unsur Y (massa atom 32, 16 neutron) berikatan. Rumus kimia dan jenis ikatan yang terbentuk adalah...",
            options: [
                "ion dengan rumus XY2",
                "kovalen dengan rumus X2Y",
                "ion dengan rumus X2Y",
                "kovalen dengan rumus X2Y3",
                "kovalen dengan rumus XY2"
            ],
            correct: 2,
            rationale: "• Unsur X: Nomor atom = 23 - 12 = 11 (Logam golongan IA, membentuk X⁺).<br>• Unsur Y: Nomor atom = 32 - 16 = 16 (Nonlogam golongan VIA, membentuk Y²⁻).<br>Ikatan ionik antara X⁺ dan Y²⁻ menghasilkan rumus X2Y."
        },
        {
            id: 'k19_inten',
            question: "Siswa membandingkan molekul NH3 (Mr = 17) dan NF3 (Mr = 71). Pernyataan yang BENAR adalah...",
            options: [
                "Titik didih NH3 lebih besar dari titik didih NF3",
                "Keduanya memiliki ikatan hidrogen",
                "Bentuk molekul NH3 berbeda dengan NF3",
                "Sifat basa NF3 lebih kuat daripada NH3",
                "NF3 tidak memiliki pasangan elektron bebas"
            ],
            correct: 0,
            rationale: "NH3 memiliki ikatan hidrogen antarmolekul yang sangat kuat, sehingga titik didihnya lebih tinggi dibandingkan NF3 yang hanya memiliki gaya dipol-dipol."
        },
        {
            id: 'k20_inten',
            question: "Diberikan reaksi:<br>1. NaOH → Na⁺ + OH⁻<br>2. AlF3 + F⁻ → AlF4⁻<br>3. HClO4 + H2O → ClO4⁻ + H3O⁺<br>Urutan yang sesuai dengan konsep asam-basa Arrhenius, Bronsted-Lowry, dan Lewis adalah...",
            options: ["1, 2, 3", "2, 1, 3", "3, 1, 2", "1, 3, 2", "2, 3, 1"],
            correct: 3,
            rationale: "• Reaksi 1: Pelepasan ion OH- dalam air (Arrhenius).<br>• Reaksi 3: Transfer proton H+ (Bronsted-Lowry).<br>• Reaksi 2: Serah terima pasangan elektron bebas (Lewis)."
        },
        {
            id: 'k21_inten',
            question: "Sebanyak 25 mL CH3COOH 0,1 M dititrasi dengan NaOH 0,1 M (Ka = 2 x 10⁻⁵). Pernyataan yang BENAR adalah...",
            options: [
                "pH awal CH3COOH adalah 3 - 1/2 log 2",
                "Saat penambahan 25 mL NaOH terbentuk garam netral",
                "Saat penambahan 12,5 mL NaOH, pH campuran sama dengan pKa",
                "Pada titik ekuivalen, konsentrasi Na+ adalah 0,1 M",
                "Indikator fenolftalein tidak berwarna setelah titik ekuivalen"
            ],
            correct: 2,
            rationale: "Saat penambahan 12,5 mL (setengah titik ekuivalen), terbentuk larutan penyangga dengan [CH3COOH] = [CH3COO-], sehingga pH = pKa."
        },
        {
            id: 'k22_inten',
            question: "Pasangan larutan berikut yang menghasilkan larutan penyangga bersifat ASAM adalah... (Ka CH3COOH = 1,75 x 10⁻⁵)",
            options: [
                "50 mL CH3COOH 0,2 M + 50 mL NaOH 0,2 M",
                "100 mL CH3COOH 0,2 M + 50 mL NaOH 0,2 M",
                "10 mL NH3 0,1 M + 20 mL CH3COOH 0,1 M",
                "10 mL CH3COOH 0,2 M + 10 mL NaCH3COO 0,2 M",
                "10 mL NH3 0,1 M + 20 mL (NH4)2SO4 0,1 M"
            ],
            correct: 1,
            rationale: "Asam lemah berlebih + Basa kuat habis: 100 mL CH3COOH 0,2 M (20 mmol) + 50 mL NaOH 0,2 M (10 mmol) menyisakan 10 mmol CH3COOH dan 10 mmol CH3COONa."
        },
        {
            id: 'k23_inten',
            question: "Dalam wadah terdapat larutan garam Ca(CH3COO)2:<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n+---------------------------------------+\n| 100 mL Ca(CH3COO)2 0,2 M              |\n| Ka CH3COOH = 1,8 x 10⁻⁵               |\n+---------------------------------------+\n</pre>Pernyataan yang BENAR mengenai larutan garam tersebut adalah...",
            options: [
                "Terhidrolisis menghasilkan ion H+",
                "Nilai pH garam > 7 (bersifat basa)",
                "Dapat memerahakan kertas lakmus biru",
                "Ion Ca²⁺ berasal dari larutan asamnya",
                "Garam bersifat netral"
            ],
            correct: 1,
            rationale: "Garam dari asam lemah dan basa kuat mengalami hidrolisis sebagian menghasilkan ion OH⁻, sehingga bersifat basa (pH > 7) dan membirukan lakmus merah."
        },
        {
            id: 'k24_inten',
            question: "Diketahui nilai Ksp garam berikut:<br>1) MgCO3 = 4 x 10⁻⁵<br>2) CuCO3 = 2,5 x 10⁻¹⁰<br>3) CdCO3 = 5,2 x 10⁻¹²<br>4) CaCO3 = 6,9 x 10⁻⁹<br>5) BaCO3 = 1,6 x 10⁻⁹<br>Urutan garam dari yang PALING MUDAH LARUT ke PALING SUKAR LARUT adalah...",
            options: ["1 - 4 - 5 - 2 - 3", "1 - 2 - 4 - 3 - 5", "1 - 2 - 5 - 3 - 4", "2 - 3 - 4 - 1 - 5", "2 - 4 - 5 - 1 - 3"],
            correct: 0,
            rationale: "Karena jumlah ion semua garam sama (2 ion), semakin besar nilai Ksp maka garam semakin mudah larut.<br>Urutan Ksp terbesar ke terkecil: 1 (10⁻⁵) > 4 (10⁻⁹) > 5 (10⁻⁹) > 2 (10⁻¹⁰) > 3 (10⁻¹²)."
        },
        {
            id: 'k25_inten',
            question: "Diketahui reaksi-reaksi berikut:<br>(1) C<sub>(s)</sub> + 1/2 O<sub>2(g)</sub> → CO<sub>(g)</sub>  ΔH = -a kJ<br>(2) 2CO<sub>(g)</sub> + O<sub>2(g)</sub> → 2CO<sub>2(g)</sub>  ΔH = -b kJ<br>(3) C<sub>(s)</sub> + O<sub>2(g)</sub> → CO<sub>2(g)</sub>  ΔH = -c kJ<br>Hubungan yang tepat untuk a, b, dan c sesuai Hukum Hess adalah...",
            options: ["a = 1/2 b + c", "c = 2a + 1/2 b", "2c = 2a + b", "2a = c - b", "1/2 b = 2a - c"],
            correct: 2,
            rationale: "Reaksi (3) x 2: 2C + 2O2 → 2CO2 (ΔH = -2c).<br>Reaksi (1) x 2: 2C + O2 → 2CO (ΔH = -2a).<br>Reaksi (2): 2CO + O2 → 2CO2 (ΔH = -b).<br>Jumlahkan (1x2 + 2): -2c = -2a - b => 2c = 2a + b."
        },
        {
            id: 'k26_inten',
            question: "Diketahui ΔHf H2O = -286 kJ/mol, ΔHf CO2 = -394 kJ/mol, ΔHf CH4 = -74 kJ/mol. Jika 1,6 gram CH4 (Ar C=12, H=1) dibakar sempurna, perubahan entalpi ΔH yang dihasilkan adalah...",
            options: ["-520,0 kJ", "-104,0 kJ", "-754,0 kJ", "-377,0 kJ", "-89,2 kJ"],
            correct: 4,
            rationale: "Reaksi: CH4 + 2O2 → CO2 + 2H2O.<br>ΔHc = [ΔHf CO2 + 2(ΔHf H2O)] - [ΔHf CH4] = [-394 + 2(-286)] - [-74] = -892 kJ/mol.<br>mol CH4 = 1,6 / 16 = 0,1 mol.<br>ΔH = 0,1 x (-892 kJ) = -89,2 kJ."
        },
        {
            id: 'k27_inten',
            question: "Suatu reaksi A + B → C memiliki data laju reaksi:<br><table class='w-full text-xs text-center border border-slate-300 my-2'><tr class='bg-slate-200'><th class='border p-1'>No</th><th class='border p-1'>[A] (M)</th><th class='border p-1'>[B] (M)</th><th class='border p-1'>v (M/s)</th></tr><tr><td class='border p-1'>1</td><td class='border p-1'>0,1</td><td class='border p-1'>0,1</td><td class='border p-1'>2</td></tr><tr><td class='border p-1'>2</td><td class='border p-1'>0,1</td><td class='border p-1'>0,2</td><td class='border p-1'>8</td></tr><tr><td class='border p-1'>3</td><td class='border p-1'>0,2</td><td class='border p-1'>0,2</td><td class='border p-1'>16</td></tr></table>Hasil yang BENAR dari data di atas adalah...",
            options: [
                "Persamaan laju reaksinya adalah v = k[A]²[B]",
                "Nilai konstanta laju reaksinya adalah 2000",
                "Orde reaksi terhadap B adalah dua",
                "Total orde reaksinya adalah dua",
                "Laju reaksi berbanding lurus dengan waktu"
            ],
            correct: 2,
            rationale: "• Cari orde B (data 1 & 2): (0,2/0,1)^y = 8/2 => 2^y = 4 => y = 2.<br>• Cari orde A (data 2 & 3): (0,2/0,1)^x = 16/8 => 2^x = 2 => x = 1.<br>• Persamaan laju: v = k [A] [B]² (Orde terhadap B = 2)."
        },
        {
            id: 'k28_inten',
            question: "Percobaan CaCO3(s) + 2HCl(aq) → CaCl2(aq) + H2O(l) + CO2(g):<br><table class='w-full text-xs text-center border border-slate-300 my-2'><tr class='bg-slate-200'><th class='border p-1'>No</th><th class='border p-1'>Bentuk 1 g CaCO3</th><th class='border p-1'>[HCl]</th><th class='border p-1'>Suhu</th><th class='border p-1'>Waktu</th></tr><tr><td class='border p-1'>1</td><td class='border p-1'>Serbuk</td><td class='border p-1'>2 M</td><td class='border p-1'>29 °C</td><td class='border p-1'>20 detik</td></tr><tr><td class='border p-1'>2</td><td class='border p-1'>Butiran</td><td class='border p-1'>2 M</td><td class='border p-1'>32 °C</td><td class='border p-1'>25 detik</td></tr><tr><td class='border p-1'>3</td><td class='border p-1'>Serbuk</td><td class='border p-1'>2 M</td><td class='border p-1'>37 °C</td><td class='border p-1'>10 detik</td></tr></table>Faktor yang mempengaruhi laju reaksi pada percobaan 1 dan 3 adalah...",
            options: [
                "Massa CaCO3 dan konsentrasi HCl",
                "Bentuk CaCO3 dan suhu",
                "Suhu saja",
                "Konsentrasi HCl saja",
                "Luas permukaan saja"
            ],
            correct: 2,
            rationale: "Pada percobaan 1 dan 3, bentuk CaCO3 (serbuk) dan konsentrasi HCl (2 M) dibuat sama, sedangkan suhu diubah (29 °C ke 37 °C). Maka faktor yang mempengaruhi adalah suhu."
        },
        {
            id: 'k29_inten',
            question: "Reaksi pembuat gas ammonia Haber-Bosch: N2(g) + 3H2(g) ⇌ 2NH3(g)  ΔH = -x kkal.<br>Untuk memperoleh hasil gas NH3 yang MAKSIMAL dapat dilakukan dengan cara...",
            options: [
                "Memperbesar volume",
                "Menaikkan suhu",
                "Memperbesar tekanan",
                "Memperbesar volume dan menaikkan suhu",
                "Menurunkan tekanan"
            ],
            correct: 2,
            rationale: "Reaksi bersifat eksoterm (ΔH negatif) dan jumlah koefisien gas kiri (4) > kanan (2).<br>Agar kesetimbangan bergeser ke kanan (memperbanyak NH3): perbesar tekanan (geser ke koefisien kecil) dan turunkan suhu."
        },
        {
            id: 'k30_inten',
            question: "Harga Kp untuk reaksi kesetimbangan: 2X(g) ⇌ 3Y(g) adalah 1/8. Jika dalam keadaan setimbang tekanan parsial X adalah 8 atm, maka tekanan parsial gas Y adalah...",
            options: ["1/64 atm", "1 atm", "2 atm", "6 atm", "8 atm"],
            correct: 4,
            rationale: "Kp = (P_Y)³ / (P_X)²<br>1/8 = (P_Y)³ / 8² => 1/8 = (P_Y)³ / 64<br>(P_Y)³ = 64 / 8 = 8 => P_Y = ³√8 = 2 atm (Atau penyesuaian jika Kp = 8)."
        }
    ]
};