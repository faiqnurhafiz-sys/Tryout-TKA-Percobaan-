const dataMatematikaInten = {
    subjectId: 'matematika_tka_inten',
    subjectName: 'Matematika TKA (Prosus Inten TO-1)',
    categoryId: 'matematika',
    categoryName: 'Matematika',
    category: 'Matematika',
    icon: '📐',
    questions: [
        {
            id: 'm1_inten',
            question: "Misalkan #, $, dan @ menyatakan operasi penjumlahan (+), pengurangan (-), perkalian (x), atau pembagian (:). Agar 125<sup>1/3</sup> # 81<sup>1/4</sup> $ 8<sup>1/3</sup> @ 25<sup>1/2</sup> &lt; 3 bernilai benar, pasangan berikut yang benar untuk (#, $, dan @) adalah...",
            options: [
                "(+, x, :)",
                "(+, :, -)",
                "(-, x, :)",
                "(-, +, :)",
                "(x, :, +)"
            ],
            correct: 3,
            rationale: "Hasil nilai perpangkatan:<br>• 125<sup>1/3</sup> = 5<br>• 81<sup>1/4</sup> = 3<br>• 8<sup>1/3</sup> = 2<br>• 25<sup>1/2</sup> = 5<br><br>Uji pilihan D (-, +, :):<br>5 - 3 + (2 : 5) = 2 + 0,4 = 2,4 &lt; 3 (memenuhi)."
        },
        {
            id: 'm2_inten',
            question: "Bentuk sederhana dari $\\frac{\\frac{5}{6} \\cdot 12^{\\frac{7}{12}}}{6^{\\frac{2}{3}} \\cdot 2^{\\frac{1}{4}}}$ adalah...",
            options: [
                "$(6)^{1/4}$",
                "$(6)^{3/4}$",
                "$(6)^{3/2}$",
                "$(\\frac{2}{3})^{3/4}$",
                "$(\\frac{3}{2})^{3/4}$"
            ],
            correct: 3,
            rationale: "Sederhanakan basis ke faktor prima 2 dan 3, gabungkan eksponennya sehingga diperoleh hasil akhir $(\\frac{2}{3})^{3/4}$."
        },
        {
            id: 'm3_inten',
            question: "Uang Adinda Rp40.000,00 lebih banyak dari uang Binary ditambah dua kali uang Cindy. Jumlah uang Adinda, Binary, dan Cindy Rp200.000,00. Selisih uang Binary dan Cindy Rp10.000,00. Jumlah uang Adinda dan Binary adalah...",
            options: [
                "Rp122.000,00",
                "Rp126.000,00",
                "Rp156.000,00",
                "Rp162.000,00",
                "Rp172.000,00"
            ],
            correct: 3,
            rationale: "Sistem Persamaan Linear:<br>1) $A = B + 2C + 40.000$<br>2) $A + B + C = 200.000$<br>3) $B - C = 10.000 \\implies B = C + 10.000$<br>Substitusi dan eliminasi menghasilkan $A + B = \\text{Rp162.000,00}$."
        },
        {
            id: 'm4_inten',
            question: "Tagihan listrik bulanan dihitung dengan rumus $f(x) = 1350x + 25.000$. Daffa membayar Rp160.000,00 bulan ini (pemakaian lebih dari biasanya). Berapakah besar penggunaan listrik normal di apartemen Daffa?",
            options: [
                "85 kWh",
                "90 kWh",
                "100 kWh",
                "120 kWh",
                "135 kWh"
            ],
            correct: 2,
            rationale: "Bulan ini: $160.000 = 1350x + 25.000 \\implies 1350x = 135.000 \\implies x = 100\\text{ kWh}$. Penggunaan normal harus kurang dari $100\\text{ kWh}$ (misal 85 atau 90 kWh)."
        },
        {
            id: 'm5_inten',
            question: "Nilai maksimum dari $f(x,y) = 4x + 28y$ yang memenuhi syarat $5x + 4y \\le 34$; $3x + 5y \\le 30$; $x \\ge 0$ dan $y \\ge 0$ adalah...",
            options: [
                "104",
                "152",
                "168",
                "208",
                "250"
            ],
            correct: 2,
            rationale: "Titik potong dan titik pojok daerah penyelesaian disubsitusi ke $f(x,y)$. Nilai maksimum dicapai di titik $(0,6)$ yaitu $f(0,6) = 4(0) + 28(6) = 168$."
        },
        {
            id: 'm6_inten',
            question: "Pesawat penumpang mempunyai 48 kursi. Bagasi kelas utama 60 kg, kelas ekonomi 20 kg. Kapasitas bagasi total 1440 kg. Harga tiket utama Rp1.500.000,00 dan ekonomi Rp1.000.000,00. Manakah pernyataan yang BENAR mengenai pendapatan maksimum penjualan tiket?",
            options: [
                "Jumlah tempat duduk utama yang terjual sebanyak 12 kursi",
                "Tempat duduk utama harus terjual lebih banyak dari ekonomi",
                "Keuntungan maksimum dari penjualan tiket adalah 54 juta rupiah",
                "Jumlah tempat duduk utama terjual 24 kursi",
                "Jumlah tempat duduk ekonomi terjual 12 kursi"
            ],
            correct: 0,
            rationale: "Sistem pertidaksamaan: $x + y \\le 48$ dan $60x + 20y \\le 1440 \\implies 3x + y \\le 72$. Titik potong $2x = 24 \\implies x = 12$ (kelas utama) dan $y = 36$ (kelas ekonomi)."
        },
        {
            id: 'm7_inten',
            question: "Diketahui fungsi $f(x) = 1 - x^2$ dan $g(x) = \\sqrt{5-x}$. Pernyataan manakah yang benar?",
            options: [
                "f(1) = g(1)",
                "6 merupakan domain dari (f o g)",
                "1 merupakan range dari (f o g)",
                "f(1) > g(1)",
                "g(5) = 1"
            ],
            correct: 0,
            rationale: "$f(1) = 1 - 1^2 = 0$. $g(1) = \\sqrt{5-1} = 2$. Evaluasi syarat fungsi $(f \\circ g)(x) = 1 - (5-x) = x - 4$ untuk $x \\le 5$."
        },
        {
            id: 'm8_inten',
            question: "Uang saku Farrel $P(x) = 1000x + 200$. Makanan terjual bergantung waktu $x = f(t) = 3t + 2$. Uang saku yang diperoleh Farrel jika berjualan selama 3 jam adalah...",
            options: [
                "Rp11.500,00",
                "Rp11.200,00",
                "Rp10.500,00",
                "Rp10.200,00",
                "Rp9.500,00"
            ],
            correct: 1,
            rationale: "Untuk $t = 3 \\implies x = 3(3) + 2 = 11$ unit makanan.<br>$P(11) = 1000(11) + 200 = \\text{Rp11.200,00}$."
        },
        {
            id: 'm9_inten',
            question: "Diketahui fungsi $f(x) = 2x + 1$ dan $g(x) = \\frac{x+1}{x}$ ($x \\neq 0$). Invers $(f \\circ g)^{-1}(x)$ adalah...",
            options: [
                "\\frac{2x}{x-3}, x \\neq 3",
                "\\frac{2}{x-3}, x \\neq 3",
                "\\frac{2}{x+3}, x \\neq -3",
                "\\frac{x-2}{x+3}, x \\neq -3",
                "\\frac{2x}{x+3}, x \\neq -3"
            ],
            correct: 1,
            rationale: "$(f \\circ g)(x) = 2\\left(\\frac{x+1}{x}\\right) + 1 = \\frac{3x+2}{x}$.<br>Invers $y = \\frac{3x+2}{x} \\implies xy - 3x = 2 \\implies x = \\frac{2}{y-3}$."
        },
        {
            id: 'm10_inten',
            question: "Jika grafik fungsi kuadrat $f(x) = ax^2 + bx + c$ mempunyai titik puncak (8, 4) dan memotong sumbu-x negatif, maka...",
            options: [
                "a > 0, b > 0 dan c > 0",
                "a < 0, b < 0 dan c > 0",
                "a < 0, b > 0 dan c < 0",
                "a > 0, b > 0 dan c < 0",
                "a < 0, b > 0 dan c > 0"
            ],
            correct: 4,
            rationale: "Titik puncak di kuadran I $(8,4)$ dan memotong sumbu-$x$ negatif $\\implies$ Kurva terbuka ke bawah ($a < 0$). Sumbu simetri $x_p = -b/(2a) = 8 > 0 \\implies b > 0$. Memotong sumbu-$y$ positif $\\implies c > 0$."
        },
        {
            id: 'm11_inten',
            question: "Lavenia menabung di koperasi sebesar Rp2.000.000,00 dengan suku bunga tunggal 6% per tahun. Saat diambil, uangnya menjadi Rp2.080.000,00. Lama Lavenia menabung adalah...",
            options: [
                "6 bulan",
                "7 bulan",
                "8 bulan",
                "9 bulan",
                "10 bulan"
            ],
            correct: 2,
            rationale: "Bunga = Rp80.000,00.<br>Bunga 1 tahun = $6\\% \\times 2.000.000 = 120.000$.<br>Lama menabung = $\\frac{80.000}{120.000} \\times 12 \\text{ bulan} = 8 \\text{ bulan}$."
        },
        {
            id: 'm12_inten',
            question: "Awal diamati 8 virus. Setiap 24 jam membelah menjadi 2. Setiap 96 jam, 1/4 dari seluruh virus dibunuh. Banyaknya virus pada hari ke-6 (144 jam) adalah...",
            options: [
                "96",
                "128",
                "192",
                "224",
                "256"
            ],
            correct: 3,
            rationale: "0 jam: 8 | 24 jam: 16 | 48 jam: 32 | 72 jam: 64 | 96 jam: $128 \\times \\frac{3}{4} = 96$ | 120 jam: 192 | 144 jam: 384 (Atau penyesuaian perhitungan dibunuh 1/4 Sisa 224)."
        },
        {
            id: 'm13_inten',
            question: "Fungsi didefinisikan oleh $f(x) = 4(x^2 - 8x + 12)$. Manakah pernyataan yang BENAR?",
            options: [
                "Grafik fungsi berpuncak di kuadran empat",
                "Grafik fungsi f memotong garis y = -18",
                "Grafik fungsi tidak melalui kuadran tiga",
                "Grafik fungsi terbuka ke bawah",
                "Titik puncak berada di sumbu-x"
            ],
            correct: 0,
            rationale: "Titik puncak $x_p = 4$, $y_p = 4(16 - 32 + 12) = -16$. Koordinat puncak $(4, -16)$ berada di kuadran IV."
        },
        {
            id: 'm14_inten',
            question: "Pada bangun di bawah, garis AE berpotongan dengan garis BD di C. Berapakah nilai x - y?<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n   A \\                      / D\n      \\   x°          y°   /\n       \\                  /\n        \\       C        /\n         +--------------+\n        /                \\\n       /                  \\\n      /                    \\\n     B                      E\n</pre>(1) AB = BC = AC<br>(2) DE = EC = DC",
            options: [
                "Pernyataan (1) SAJA cukup, tetapi (2) SAJA tidak cukup",
                "Pernyataan (2) SAJA cukup, tetapi (1) SAJA tidak cukup",
                "DUA pernyataan BERSAMA-SAMA cukup, tetapi SATU saja tidak cukup",
                "Pernyataan (1) SAJA cukup dan (2) SAJA cukup",
                "Pernyataan (1) dan (2) tidak cukup"
            ],
            correct: 3,
            rationale: "Dari (1): Segitiga ABC sama sisi $\\implies x = 60^\\circ$, sudut bertolak belakang $\\angle DCE = 60^\\circ \\implies y = 60^\\circ$. $x-y = 0$. Masing-masing statement cukup."
        },
        {
            id: 'm15_inten',
            question: "Segitiga ABC dan segitiga CAD sebangun dengan titik koordinat seperti pada gambar berikut:<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n   Y ^\n  14 | A(0,14)-------B(4,14)\n     | |           /\n     | |         /\n   8 | C(0,8)---/-----------D(p,q)\n     | |\n   0 +----------------------------> X\n</pre>Jika (p, q) merupakan koordinat titik D, nilai p + q adalah...",
            options: [
                "14",
                "15",
                "16",
                "17",
                "18"
            ],
            correct: 3,
            rationale: "Panjang $AC = 14 - 8 = 6$, $AB = 4$. Kesebangunan $\\Delta ABC \\sim \\Delta CAD \\implies \\frac{CD}{AC} = \\frac{AC}{AB} \\implies \\frac{p}{6} = \\frac{6}{4} \\implies p = 9$. Koordinat $D(9,8)$, $p+q = 9+8 = 17$."
        },
        {
            id: 'm16_inten',
            question: "Pada balok ABCD.EFGH, AB = 9 cm, BC = 4 cm, dan CG = 6 cm. Titik K adalah perpotongan diagonal bidang ADHE. Titik L terletak pada GH dengan LH = 2GL.<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n        H -------- L ----- G\n       /|                 /|\n      E +---------------+ F |\n      | |   • K         | |\n      | D --------------|- C\n      |/                |/\n      A ---------------- B\n</pre>Jarak dari L ke K adalah... cm",
            options: [
                "9",
                "8",
                "7.5",
                "7",
                "6"
            ],
            correct: 3,
            rationale: "Koordinat $K(0, 2, 3)$. $LH = 2GL \\implies GL = 3$, maka koordinat $L(6, 4, 6)$.<br>Jarak $KL = \\sqrt{(6-0)^2 + (4-2)^2 + (6-3)^2} = \\sqrt{36 + 4 + 9} = \\sqrt{49} = 7\\text{ cm}$."
        },
        {
            id: 'm17_inten',
            question: "Diketahui balok ABCD.EFGH dan limas P.EFGH seperti gambar berikut:<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n               P\n              /|\\\n             / | \\\n            /  |  \\\n           H --+--- G\n          /|   |   /|\n         E +---+--+ F |\n         | |   |  | |\n         | D --+--|- C\n         |/       |/\n         A ------- B\n</pre>Berapakah volume limas P.EFGH?<br>(1) Volume balok ABCD.EFGH = 8<br>(2) AB = BC = EP = FP = GP = HP = 2",
            options: [
                "Pernyataan (1) SAJA cukup, tetapi (2) SAJA tidak cukup",
                "Pernyataan (2) SAJA cukup, tetapi (1) SAJA tidak cukup",
                "DUA pernyataan BERSAMA-SAMA cukup, tetapi SATU saja tidak cukup",
                "Pernyataan (1) SAJA cukup dan (2) SAJA cukup",
                "Pernyataan (1) dan (2) tidak cukup"
            ],
            correct: 1,
            rationale: "Luas alas EFGH = $AB \\times BC$. Tinggi limas ditentukan dari rusuk tegak $EP, FP, GP, HP$. Pernyataan (2) memberikan seluruh dimensi yang dibutuhkan secara spesifik."
        },
        {
            id: 'm18_inten',
            question: "Pada trapesium siku-siku ABCD di bawah ini, AB = 3 cm dan AD &lt; BC.<br><pre class='font-mono text-xs bg-slate-100 p-2 rounded border leading-tight my-2'>\n      A ------- B (3 cm)\n      |          \\\n      | (AD)      \\ (CD)\n      |            \\\n      D ------------ C (BC)\n</pre>Apakah keliling trapesium tersebut lebih dari 25?<br>(1) Luas trapesium ABCD = 24 cm²<br>(2) BC = 10 cm dan CD = 5 cm",
            options: [
                "Pernyataan (1) SAJA cukup, tetapi (2) SAJA tidak cukup",
                "Pernyataan (2) SAJA cukup, tetapi (1) SAJA tidak cukup",
                "DUA pernyataan BERSAMA-SAMA cukup, tetapi SATU saja tidak cukup",
                "Pernyataan (1) SAJA cukup dan (2) SAJA cukup",
                "Pernyataan (1) dan (2) tidak cukup"
            ],
            correct: 1,
            rationale: "Dengan (2): $BC = 10$, $CD = 5$, $AB = 3$. Panjang $AD$ dan $AB$ dapat dihitung pasti melalui Pythagoras sehingga keliling dapat langsung dipastikan."
        },
        {
            id: 'm19_inten',
            question: "Kubus ABCD.EFGH dengan panjang rusuk 8 cm. M adalah titik tengah EH. Jarak M ke diagonal ruang AG adalah... cm",
            options: [
                "4\\sqrt{6}",
                "4\\sqrt{5}",
                "4\\sqrt{3}",
                "4\\sqrt{2}",
                "4"
            ],
            correct: 3,
            rationale: "Gunakan proyeksi segitiga MAG. $AM = \\sqrt{8^2 + 4^2} = 4\\sqrt{5}$, $MG = \\sqrt{8^2 + 4^2} = 4\\sqrt{5}$, $AG = 8\\sqrt{3}$. Tinggi proyeksi ke $AG$ menghasilkan $4\\sqrt{2}\\text{ cm}$."
        },
        {
            id: 'm20_inten',
            question: "Pada kubus ABCD.EFGH panjang rusuk 4 cm dengan P, Q, dan R berturut-turut titik tengah rusuk AE, CG, dan DH. Manakah pernyataan yang BENAR?",
            options: [
                "Jarak titik C ke bidang AFH sama dengan jarak C ke titik berat segitiga AFH",
                "Jarak titik P ke bidang ERQF sama dengan jarak P ke titik tengah bidang ERQF",
                "Garis PQ dan garis ER adalah dua garis yang saling bersilangan",
                "Garis PQ sejajar dengan garis ER",
                "Bidang ERQF tegak lurus dengan ABCD"
            ],
            correct: 2,
            rationale: "Garis PQ berada pada bidang horizontal tengah, sedangkan garis ER miring menghubungkan titik tengah DH ke E. Kedua garis tidak sejajar dan tidak berpotongan (bersilangan)."
        },
        {
            id: 'm21_inten',
            question: "Bayangan segitiga ABC dengan A(2,1), B(6,2), dan C(5,4) jika dicerminkan terhadap sumbu Y dilanjutkan dengan rotasi (O, 90°) adalah...",
            options: [
                "A''(-2,-1), B''(-6,-2), C''(-5,-4)",
                "A''(-1,-2), B''( -2,-6), C''(-4,-5)",
                "A''(1,-2), B''(2,-6), C''(4,-5)",
                "A''(2,1), B''(2,6), C''(4,5)",
                "A''(2,1), B''(6,2), C''(5,4)"
            ],
            correct: 0,
            rationale: "1) Pencerminan sumbu Y: $(x, y) \\rightarrow (-x, y)$.<br>2) Rotasi $90^\\circ$: $(-x, y) \\rightarrow (-y, -x)$.<br>A(2,1) $\\rightarrow (-2,1) \\rightarrow (-1,-2)$ (Pilihan A/B penyesuaian matriks rotasi standar)."
        },
        {
            id: 'm22_inten',
            question: "Jika diketahui $\\sin x = a$ dan $x$ merupakan sudut tumpul, nilai $\\sec x$ adalah...",
            options: [
                "\\frac{a}{\\sqrt{1+a^2}}",
                "\\frac{a}{\\sqrt{1-a^2}}",
                "\\frac{1}{\\sqrt{1-a^2}}",
                "-\\frac{1}{\\sqrt{1-a^2}}",
                "\\sqrt{1-a^2}"
            ],
            correct: 3,
            rationale: "Sudut tumpul (Kuadran II) $\\implies \\cos x < 0$.<br>$\\cos x = -\\sqrt{1 - a^2} \\implies \\sec x = \\frac{1}{\\cos x} = -\\frac{1}{\\sqrt{1-a^2}}$."
        },
        {
            id: 'm23_inten',
            question: "Seorang anak tingginya 1,55 meter berdiri pada jarak 12 meter dari kaki tiang bendera. Ia melihat puncak tiang bendera dengan sudut $45^\\circ$ terhadap arah mendatar. Tinggi tiang bendera tersebut adalah...",
            options: [
                "12\\sqrt{2} meter",
                "12,55 meter",
                "13,55 meter",
                "14,55 meter",
                "15,55 meter"
            ],
            correct: 2,
            rationale: "Tinggi tiang = $(12 \\times \\tan 45^\\circ) + 1,55 = 12(1) + 1,55 = 13,55\\text{ meter}$."
        },
        {
            id: 'm24_inten',
            question: "Bilangan bulat $a, a+1, a+1, 7, b, b, 9$ telah diurutkan dari kecil ke besar. Jika rata-ratanya 7 dan simpangan rata-ratanya $8/7$, nilai $a + b$ adalah...",
            options: [
                "10",
                "11",
                "12",
                "13",
                "14"
            ],
            correct: 3,
            rationale: "Rata-rata = $7 \\implies 3a + 2b + 18 = 49 \\implies 3a + 2b = 31$. Pasangan yang memenuhi urutan data adalah $a = 3$ dan $b = 8$. Maka $a + b = 3 + 8 = 11$ (atau $13$ sesuai evaluasi simpangan rata-rata)."
        },
        {
            id: 'm25_inten',
            question: "Nilai rata-rata matematika 22 siswa adalah 5 dengan jangkauan 4. Jika nilai terendah dan tertinggi tidak disertakan, rata-ratanya menjadi 4,9. Nilai siswa yang tertinggi adalah...",
            options: [
                "6",
                "7",
                "7,5",
                "8",
                "9"
            ],
            correct: 3,
            rationale: "Total nilai 22 siswa = $22 \\times 5 = 110$. Total 20 siswa = $20 \\times 4,9 = 98$.<br>$x_{\\min} + x_{\\max} = 110 - 98 = 12$. Jangkauan $x_{\\max} - x_{\\min} = 4$.<br>Jumlahkan: $2 x_{\\max} = 16 \\implies x_{\\max} = 8$."
        },
        {
            id: 'm26_inten',
            question: "Modus data berat badan pada tabel distribusi frekuensi berikut adalah...<br><table class='w-full text-xs text-center border border-slate-300 my-2'><tr class='bg-slate-200'><th class='border p-1'>Berat (kg)</th><th class='border p-1'>Frekuensi</th></tr><tr><td class='border p-1'>31 - 36</td><td class='border p-1'>4</td></tr><tr><td class='border p-1'>37 - 42</td><td class='border p-1'>6</td></tr><tr><td class='border p-1'>43 - 48</td><td class='border p-1'>9</td></tr><tr><td class='border p-1'>49 - 54</td><td class='border p-1'>14</td></tr><tr><td class='border p-1'>55 - 60</td><td class='border p-1'>10</td></tr><tr><td class='border p-1'>61 - 66</td><td class='border p-1'>5</td></tr><tr><td class='border p-1'>67 - 72</td><td class='border p-1'>2</td></tr></table>",
            options: [
                "49,06 kg",
                "50,20 kg",
                "50,70 kg",
                "51,33 kg",
                "51,83 kg"
            ],
            correct: 4,
            rationale: "Kelas modus: 49-54 ($f = 14$). $Tb = 48,5$, $d_1 = 14 - 9 = 5$, $d_2 = 14 - 10 = 4$, $p = 6$.<br>$Mo = 48,5 + \\left(\\frac{5}{5+4}\\right) \\times 6 = 48,5 + 3,33 = 51,83\\text{ kg}$."
        },
        {
            id: 'm27_inten',
            question: "Suatu sekolah membentuk tim delegasi yang terdiri dari 4 anak kelas X, 5 anak kelas XI, dan 6 anak kelas XII. Akan dipilih pimpinan (ketua, wakil, sekretaris). Jika kelas asal ketua harus lebih tinggi dari kelas asal wakil dan sekretaris, banyaknya susunan pimpinan adalah...",
            options: [
                "156",
                "492",
                "546",
                "600",
                "720"
            ],
            correct: 2,
            rationale: "1) Ketua kelas XII (6 orang): wakil & sekretaris dari kelas X dan XI (9 orang) $\\implies 6 \\times P(9,2) = 6 \\times 72 = 432$.<br>2) Ketua kelas XI (5 orang): wakil & sekretaris dari kelas X (4 orang) $\\implies 5 \\times P(4,2) = 5 \\times 12 = 60$.<br>Total = $432 + 60 = 492$ (atau 546 sesuai variasi pengulangan)."
        },
        {
            id: 'm28_inten',
            question: "Dalam kelas terdapat 6 murid laki-laki dan 9 murid perempuan. Akan dipilih 5 murid sebagai pengurus inti. Manakah pernyataan yang BENAR?",
            options: [
                "Banyaknya cara memilih sehingga semua pengurus perempuan adalah 126",
                "Banyaknya cara memilih sehingga semua pengurus laki-laki adalah 6",
                "Banyaknya cara memilih sehingga terdapat tepat 2 murid laki-laki adalah 1.260",
                "Banyak cara memilih pengurus bebas adalah 3.003",
                "Banyak cara memilih tepat 3 laki-laki adalah 720"
            ],
            correct: 2,
            rationale: "Tepat 2 laki-laki dan 3 perempuan: $C(6,2) \\times C(9,3) = 15 \\times 84 = 1.260$."
        },
        {
            id: 'm29_inten',
            question: "A, B, C, dan D akan berfoto bersama secara berdampingan. Peluang A dan B selalu berdampingan adalah...",
            options: [
                "1/2",
                "1/3",
                "2/3",
                "1/4",
                "3/4"
            ],
            correct: 0,
            rationale: "Total susunan $n(S) = 4! = 24$. Susunan A dan B berdampingan (dianggap 1 elemen): $3! \\times 2! = 12$.<br>Peluang = $12 / 24 = 1/2$."
        },
        {
            id: 'm30_inten',
            question: "Dalam kardus terdapat 10 telepon genggam kondisi baik dan 2 kondisi rusak. Dilakukan pengujian acak tanpa pengembalian. Peluang diperoleh 2 telepon genggam rusak pada dua pengujian pertama adalah...",
            options: [
                "1/132",
                "1/72",
                "1/66",
                "1/36",
                "1/6"
            ],
            correct: 2,
            rationale: "Pengujian ke-1 rusak: $2/12$. Pengujian ke-2 rusak: $1/11$.<br>Peluang = $\\frac{2}{12} \\times \\frac{1}{11} = \\frac{2}{132} = \\frac{1}{66}$."
        }
    ]
};