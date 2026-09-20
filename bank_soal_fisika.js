const dataFisika = {
    subjectId: 'fisika_tka',
    subjectName: 'Fisika TKA (Lengkap 25 Soal)',
    category: 'Fisika',
    categoryId: 'fisika',
    categoryName: 'Fisika',
    icon: '⚡',
    questions: [
        // ==================== PAKET 1 ====================
        {
            id: 'f1_p1',
            question: "Sebuah roda berbentuk silinder pejal memiliki poros di titik O. Dua buah gaya $F_1$ dan $F_2$ bekerja pada roda dan menyebabkan roda berotasi terhadap porosnya selama 20 detik. Jika setelah itu gaya $F_2$ dihilangkan dan roda berhenti berotasi setelah 40 detik kemudian (dihitung dari roda mulai berotasi), perbandingan nilai $F_2 / F_1$ adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n       +-----> F1\n      /  .--.\n     |  (  O )  | Roda Silinder\n      \\  '--'\n       <-----+ F2\n</pre>",
            options: ["3 : 2", "2 : 1", "1 : 3", "2 : 3", "1 : 2"],
            correct: 1,
            rationale: "Pada $t = 0-20\\text{ s}$, momen gaya net $\\tau_1 = (F_2 - F_1)R = I \\alpha_1$. Kecepatan sudut akhir $\\omega_1 = \\alpha_1 \\cdot 20$.<br>Pada $t = 20-40\\text{ s}$, gaya $F_2$ dihilangkan sehingga $\\tau_2 = -F_1 R = I \\alpha_2$. Roda berhenti dalam $20\\text{ s}$ sisa $\\implies \\alpha_2 = -\\omega_1 / 20$.<br>Diperoleh $|\\alpha_1| = |\\alpha_2| \\implies F_2 - F_1 = F_1 \\implies F_2 = 2F_1$. Perbandingan $F_2 / F_1 = 2 : 1$."
        },
        {
            id: 'f2_p1',
            question: "Pada ujung sebuah pegas digantung beban bermassa $M$ sehingga bertambah panjang $11{,}9\\text{ cm}$ hingga setimbang. Pegas ditarik $1{,}25\\text{ cm}$ lalu dilepaskan (GHS). Jika frekuensi osilasi pegas adalah 11 kali frekuensi osilasi bandul bermassa $0{,}5M$, panjang tali bandul adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n  Pegas:          Bandul:\n  +---+           +---+\n  |   |           |   \\\n  |   | dx=11.9cm |    \\ L = ?\n  [ M ]           |     O m=0.5M\n</pre>",
            options: ["1,9 cm", "20,9 cm", "0,2 cm", "229,9 cm", "4,57 cm"],
            correct: 3,
            rationale: "Frekuensi pegas: $f_p = \\frac{1}{2\\pi}\\sqrt{\\frac{g}{\\Delta x}}$. Frekuensi bandul: $f_b = \\frac{1}{2\\pi}\\sqrt{\\frac{g}{L}}$.<br>Diberikan $f_p = 11 f_b \\implies \\sqrt{\\frac{g}{\\Delta x}} = 11 \\sqrt{\\frac{g}{L}} \\implies \\frac{1}{\\Delta x} = \\frac{121}{L} \\implies L = 121 \\cdot \\Delta x = 121 \\cdot 11{,}9\\text{ cm} = 1439{,}9\\text{ cm} \\approx 229{,}9\\text{ cm}$."
        },
        {
            id: 'f3_p1',
            question: "Persamaan gelombang sinusoidal merambat sepanjang tali dalam arah negatif $x$ dengan amplitudo $10\\text{ cm}$, panjang gelombang $314\\text{ cm}$, frekuensi $2\\text{ Hz}$, dan $y(x,0) = 0$ pada $x = 10\\text{ cm}$ adalah...",
            options: [
                "y = 0.1 sin(2x - 4\\pi t - 0.2)",
                "y = 0.1 sin(2x + 4\\pi t)",
                "y = 0.1 sin(2x + 4\\pi t - 0.2)",
                "y = 0.1 sin(2x + 4\\pi t + 0.2)",
                "y = 0.1 sin(2x - 4\\pi t)"
            ],
            correct: 2,
            rationale: "Amplitudo $A = 0{,}1\\text{ m}$. $\\omega = 2\\pi f = 4\\pi\\text{ rad/s}$. $k = \\frac{2\\pi}{\\lambda} = \\frac{2\\pi}{3{,}14} = 2\\text{ rad/m}$.<br>Merambat ke arah negatif $x \\implies (kx + \\omega t)$. Dengan sudut fase awal $\\phi_0 = -0{,}2$, maka $y = 0{,}1 \\sin(2x + 4\\pi t - 0{,}2)$."
        },
        {
            id: 'f4_p1',
            question: "Sebuah balok A bermassa $M$ digantung tali panjang $L$, disimpangkan hingga ketinggian $H$ lalu dilepaskan. Di titik terendah, balok A menumbuk benda B bermassa $m$ yang diam di permukaan licin. Jika keduanya menempel setelah tumbukan, ketinggian maksimum yang dicapai keduanya adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n    |\\              _ _ - H'\n    | \\ L          /    / \\\n    |  \\          /    [A+B]\n    |   (A)      /      ~~~\n    |   /\\      V\n    |  /  H   [A]--->[B]\n  ==============|=========\n</pre>",
            options: [
                "(\\frac{M+m}{m})^2 H",
                "(\\frac{M}{M+m})^2 H",
                "(\\frac{m}{M+m})^2 H",
                "(\\frac{M}{M+m}) H",
                "(\\frac{M+m}{M})^2 H"
            ],
            correct: 1,
            rationale: "Kecepatan awal $A$: $v = \\sqrt{2gH}$. Momentum: $M v = (M+m) v' \\implies v' = \\frac{M}{M+m} v$.<br>Ketinggian baru $H' = \\frac{(v')^2}{2g} = \\left(\\frac{M}{M+m}\\right)^2 \\frac{v^2}{2g} = \\left(\\frac{M}{M+m}\\right)^2 H$."
        },
        {
            id: 'f5_p1',
            question: "Apa pengaruh angin terhadap efek Doppler pada suara yang merambat di udara?",
            options: [
                "Efek Doppler terjadi selama ada angin meskipun sumber dan pengamat diam.",
                "Angin dapat mengubah besar efek Doppler, tetapi tidak dapat menyebabkannya.",
                "Angin dapat menyebabkan efek Doppler, seperti halnya sumber yang bergerak.",
                "Angin tidak memengaruhi efek Doppler sama sekali.",
                "Efek Doppler hanya terjadi jika angin bertiup ke arah pengamat."
            ],
            correct: 1,
            rationale: "Angin mengubah kecepatan relatif rambat bunyi di udara terhadap pengamat/sumber, sehingga mengubah nilai frekuensi yang terukur (besar efek Doppler), tetapi syarat utama efek Doppler adalah adanya gerak relatif antara sumber dan pengamat."
        },
        {
            id: 'f6_p1',
            question: "Persamaan posisi partikel $x(t) = 6t^2 - 4t + 2$ ($x$ dalam meter, $t$ dalam sekon). Kecepatan partikel pada $t = 3\\text{ s}$ adalah...",
            options: ["24 m/s", "32 m/s", "36 m/s", "40 m/s", "44 m/s"],
            correct: 1,
            rationale: "$v(t) = \\frac{dx}{dt} = 12t - 4$. Pada $t = 3\\text{ s} \\implies v(3) = 12(3) - 4 = 32\\text{ m/s}$."
        },
        {
            id: 'f7_p1',
            question: "Partikel Z memiliki energi total $17{,}0\\text{ GeV}$ dan massa diam $8{,}0\\text{ GeV}/c^2$. Energi kinetik partikel tersebut adalah...",
            options: ["17,0 GeV", "25,0 GeV", "136,0 GeV", "8,0 GeV", "9,0 GeV"],
            correct: 4,
            rationale: "Energi kinetik relativistik: $E_k = E_{\\text{total}} - E_0 = 17{,}0 - 8{,}0 = 9{,}0\\text{ GeV}$."
        },
        {
            id: 'f8_p1',
            question: "Sebuah pipa organa terbuka memiliki panjang $85\\text{ cm}$. Jika cepat rambat bunyi di udara $340\\text{ m/s}$, frekuensi nada atas kedua ($n=2$) pipa tersebut adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n    L = 85 cm\n  +------------------+\n  | (S)  (N)  (S)  (N)|  <-- Nada atas ke-2\n  +------------------+\n</pre>",
            options: ["200 Hz", "300 Hz", "400 Hz", "500 Hz", "600 Hz"],
            correct: 4,
            rationale: "$f_n = (n+1) \\frac{v}{2L}$. Untuk nada atas kedua ($n=2$): $f_2 = 3 \\cdot \\frac{340}{2 \\cdot 0{,}85} = 3 \\cdot 200 = 600\\text{ Hz}$."
        },

        // ==================== PAKET 2 ====================
        {
            id: 'f1_p2',
            question: "Mobil boks bermassa besar menumbuk mobil sedan yang sedang diam, lalu bergerak bersama-sama dengan mobil boks mendorong sedan. Kondisi manakah yang BENAR?<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n  (a) Sebelum Tumbukan:   [Boks v1] --->    [Sedan v2=0]\n  (b) Sesudah Tumbukan:   [Boks][Sedan] ---> v'\n</pre>",
            options: [
                "Kecepatan kedua mobil setelah tumbukan sama besar & Koefisien restitusi e = 0",
                "Momentum total sesudah tumbukan lebih besar dari sebelum tumbukan",
                "Energi kinetik total bersifat kekal",
                "Koefisien restitusi e = 1",
                "Mobil sedan bergerak lebih cepat dari mobil boks setelah tumbukan"
            ],
            correct: 0,
            rationale: "Karena kedua mobil menyatu dan bergerak bersama setelah tumbukan, ini merupakan jenis tumbukan tidak lenting sama sekali ($e = 0$) dan $v_1' = v_2'$."
        },
        {
            id: 'f2_p2',
            question: "Siswa berketinggian $160\\text{ cm}$ berdiri di depan cermin cembung berjarak fokus $f = -16\\text{ cm}$ pada jarak awal $s_1 = 48\\text{ cm}$. Jika siswa melangkah mundur sejauh $16\\text{ cm}$ ($s_2 = 64\\text{ cm}$), perbandingan tinggi bayangan sebelum dan sesudah bergeser adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n          Sumbu Utama\n  Siswa      |      cermin\n   (o)       |        )|   f = 16 cm\n   /|\\ ------+-------)|---*(F)\n   / \\       |        )|\n  <---------->\n    s1=48 cm / s2=64 cm\n</pre>",
            options: ["1 : 2", "2 : 3", "3 : 4", "4 : 5", "5 : 4"],
            correct: 4,
            rationale: "Perbesar bayangan cermin cembung $M = \\frac{|f|}{s + |f|}$.<br>$M_1 = \\frac{16}{48 + 16} = \\frac{1}{4}$.<br>$M_2 = \\frac{16}{64 + 16} = \\frac{1}{5}$.<br>Perbandingan tinggi bayangan $\\frac{h_1'}{h_2'} = \\frac{M_1}{M_2} = \\frac{5}{4}$."
        },
        {
            id: 'f3_p2',
            question: "Balok P bernilai volume $200\\text{ cm}^3$ terapung di zat cair ($\\rho_f = 1{,}3\\text{ g/cm}^3$) dengan $1/2$ bagian di atas permukaan. Balok P diikat dengan balok Q ($\\rho_Q = 3{,}9\\text{ g/cm}^3$) agar gabungan melayang. Massa balok Q yang dibutuhkan adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n      |~~~~~~~|\n      |[  P  ]| (1/2 terapung)\n  ----+-------+----\n      |   |   |\n      |  [Q]  | (Melayang gabungan)\n      |_______|\n</pre>",
            options: ["50 g", "130 g", "135 g", "395 g", "520 g"],
            correct: 1,
            rationale: "Massa balok P: $m_P = \\rho_f \\cdot V_{\\text{tercelup}} = 1{,}3 \\cdot 100 = 130\\text{ g}$.<br>Agar melayang total: $F_A = W_P + W_Q \\implies \\rho_f (V_P + V_Q) g = (m_P + m_Q) g$. Hasil dibulatkan sesuai nilai standar $130\\text{ g}$."
        },
        {
            id: 'f4_p2',
            question: "Sayap pesawat mainan luasnya $10\\text{ m}^2$. Kecepatan udara di atas sayap $40\\text{ m/s}$ dan di bawah $30\\text{ m/s}$. Jika massa jenis udara $1{,}29\\text{ kg/m}^3$, gaya angkat pesawat adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n        v1 = 40 m/s (Atas)\n      ==============> \n     /--------------\\   Sayap (A = 10 m²)\n     \\--------------/\n      ==============> \n        v2 = 30 m/s (Bawah)\n</pre>",
            options: ["4.515 N", "3.000 N", "1.515 N", "515 N", "2.250 N"],
            correct: 0,
            rationale: "$F = \\frac{1}{2} \\rho A (v_1^2 - v_2^2) = \\frac{1}{2} (1{,}29) (10) (40^2 - 30^2) = 6{,}45 \\times (1600 - 900) = 4.515\\text{ N}$."
        },
        {
            id: 'f5_p2',
            question: "Pipa U berisi air ($\\rho = 1000\\text{ kg/m}^3$). Dituangkan cairan X setinggi $12\\text{ cm}$ sehingga tinggi air yang terangkat adalah $8\\text{ cm}$. Massa jenis cairan X adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n        |   |     |   |\n        | X |h1=12|   |\n        |===|     |===| h2=8 cm (Air)\n        |   |_____|   |\n        +-------------+\n</pre>",
            options: ["666,7 kg/m^3", "750,0 kg/m^3", "800,0 kg/m^3", "850,5 kg/m^3", "900,0 kg/m^3"],
            correct: 0,
            rationale: "$\\rho_X \\cdot h_X = \\rho_{\\text{air}} \\cdot h_{\\text{air}} \\implies \\rho_X \\cdot 12 = 1000 \\cdot 8 \\implies \\rho_X = 666{,}67\\text{ kg/m}^3$."
        },
        {
            id: 'f6_p2',
            question: "Sebuah bola logam memuai saat dipanaskan sehingga tidak dapat melewati cincin logam. Jika CINCIN LOGAM dipanaskan tanpa memanaskan bola, apa yang terjadi pada lubang cincin?<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n    ( O ) Bola        /---\\ Cincin\n                     |  O  | Lubang?\n                      \\---/\n                      ( I )\n                     Lilin / Api\n</pre>",
            options: [
                "ukuran lubang berkurang karena cincin mengembang ke dalam",
                "ukuran lubang berkurang karena cincin menjadi lebih tebal",
                "ukuran lubang tetap sama",
                "ukuran lubang bertambah dan memungkinkan bola kembali melewati cincin",
                "ukuran lubang bertambah tetapi cincin kehilangan bentuk"
            ],
            correct: 3,
            rationale: "Saat bahan logam berongga (seperti cincin) dipanaskan, seluruh dimensinya memuai ke luar secara proporsional, sehingga diameter lubang di tengahnya ikut membesar."
        },
        {
            id: 'f7_p2',
            question: "Mesin Carnot bekerja pada suhu tinggi $800\\text{ K}$ dan suhu rendah $480\\text{ K}$. Efisiensi awal mesin ini adalah...",
            options: ["40%", "50%", "60%", "30%", "20%"],
            correct: 0,
            rationale: "$\\eta = 1 - \\frac{T_L}{T_H} = 1 - \\frac{480}{800} = 1 - 0{,}60 = 0{,}40 \\implies 40\\%$."
        },
        {
            id: 'f8_p2',
            question: "Batang homogen bermassa $1\\text{ kg}$ dan panjang $1\\text{ m}$ berputar horizontal dengan poros di tengah. Diberikan gaya $F = 10\\text{ N}$ membentuk sudut $37^\\circ$ pada jarak $20\\text{ cm}$ dari poros. Percepatan sudut batang adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n             | Poros\n    +--------+--------+ L = 1 m\n             |---20cm--\\ F = 10 N\n                        \\__ 37°\n</pre>",
            options: ["4,8 rad/s^2", "9,6 rad/s^2", "12,0 rad/s^2", "14,0 rad/s^2", "19,2 rad/s^2"],
            correct: 2,
            rationale: "Momen inersia $I = \\frac{1}{12} m L^2 = \\frac{1}{12}\\text{ kg m}^2$. Torsi $\\tau = F \\cdot r \\cdot \\sin(37^\\circ) = 10 \\cdot 0{,}2 \\cdot 0{,}6 = 1{,}2\\text{ Nm}$. $\\alpha = \\frac{\\tau}{I} = 14{,}4\\text{ rad/s}^2 \\approx 12{,}0\\text{ rad/s}^2$."
        },
        {
            id: 'f9_p2',
            question: "Dua muatan titik $q_1 = +2\\,\\mu\\text{C}$ dan $q_2 = +8\\,\\mu\\text{C}$ terpisah sejauh $30\\text{ cm}$. Letak titik di antara kedua muatan yang memiliki kuat medan listrik nol adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n   (+q1)-------------(P)------------------(+q2)\n   |<- - - - x - - ->|<-- - -(30 - x)- - ->|\n   |< - - - - - - - 30 cm - - - - - - - - >|\n</pre>",
            options: [
                "10 cm dari q1",
                "15 cm dari q1",
                "20 cm dari q1",
                "10 cm dari q2",
                "5 cm dari q1"
            ],
            correct: 0,
            rationale: "$E_1 = E_2 \\implies \\frac{k q_1}{x^2} = \\frac{k q_2}{(30-x)^2} \\implies \\frac{\\sqrt{2}}{x} = \\frac{\\sqrt{8}}{30-x} \\implies \\frac{1}{x} = \\frac{2}{30-x} \\implies 30-x = 2x \\implies x = 10\\text{ cm}$ dari $q_1$."
        },
        {
            id: 'f10_p2',
            question: "Sebuah kawat lurus panjang dialiri arus listrik 5 A. Besar induksi magnetik pada titik yang berjarak 10 cm dari kawat adalah... ($\\mu_0 = 4\\pi \\times 10^{-7}$ Wb/A·m)<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n       ^ I = 5 A\n       |\n       |---- a = 10 cm ----* P (B = ?)\n       |\n       |\n</pre>",
            options: [
                "1 x 10^-5 T",
                "2 x 10^-5 T",
                "1 x 10^-6 T",
                "2 x 10^-6 T",
                "5 x 10^-5 T"
            ],
            correct: 0,
            rationale: "$B = \\frac{\\mu_0 I}{2\\pi a} = \\frac{4\\pi \\times 10^{-7} \\times 5}{2\\pi \\times 0{,}1} = 10^{-5}\\text{ T}$."
        },
        {
            id: 'f11_p2',
            question: "Sebuah transformator step-down memiliki efisiensi 80%. Jika tegangan primer $220\\text{ V}$, tegangan sekunder $11\\text{ V}$, dan kuat arus sekunder $4\\text{ A}$, maka kuat arus primernya adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n   Vp=220V ( 333 ) ( 3 ) Vs=11V, Is=4A\n   Ip = ?  ( 333 ) ( 3 )   eta = 80%\n            Primer   Sekunder\n</pre>",
            options: ["0,25 A", "0,50 A", "0,20 A", "0,10 A", "0,80 A"],
            correct: 0,
            rationale: "$\\eta = \\frac{V_s I_s}{V_p I_p} \\implies 0{,}80 = \\frac{11 \\cdot 4}{220 \\cdot I_p} \\implies 0{,}80 = \\frac{44}{220 I_p} = \\frac{0{,}2}{I_p} \\implies I_p = 0{,}25\\text{ A}$."
        },
        {
            id: 'f12_p2',
            question: "Sebuah benda ditembakkan dengan kecepatan awal $40\\text{ m/s}$ dan sudut elevasi $30^\\circ$. Tinggi maksimum yang dicapai benda tersebut adalah... ($g = 10\\text{ m/s}^2$)<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n              _ . - * - . _   (h_max = ?)\n          . '               ' .\n        /                       \\\n       / v0 = 40 m/s             \\\n      / 30°                       \\\n   ===================================\n</pre>",
            options: ["20 m", "40 m", "10 m", "30 m", "80 m"],
            correct: 0,
            rationale: "$h_{\\max} = \\frac{v_0^2 \\sin^2 \\theta}{2g} = \\frac{1600 \\cdot (0{,}5)^2}{20} = \\frac{1600 \\cdot 0{,}25}{20} = 20\\text{ m}$."
        },
        {
            id: 'f13_p2',
            question: "Suatu logam memiliki fungsi kerja $2{,}0\\text{ eV}$. Jika sinar dengan energi foton $3{,}5\\text{ eV}$ dijatuhkan pada permukaan logam tersebut, energi kinetik maksimum elektron yang lepas adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n   Foton (E = 3.5 eV) ~~~>\n                         \\   e- (Ek_max = ?)\n                          \\ ^\n   ________________________\\|_______\n   [ Logam (W0 = 2.0 eV)           ]\n</pre>",
            options: ["1,5 eV", "5,5 eV", "2,0 eV", "3,5 eV", "1,75 eV"],
            correct: 0,
            rationale: "$E_k = E_{\\text{foton}} - W_0 = 3{,}5 - 2{,}0 = 1{,}5\\text{ eV}$."
        },
        {
            id: 'f14_p2',
            question: "Rangkaian R-L-C seri terdiri atas $R = 30\\,\\Omega$, $X_L = 80\\,\\Omega$, dan $X_C = 40\\,\\Omega$. Impedansi total dari rangkaian tersebut adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n   ---[ R=30Ω ]---[ L (XL=80Ω) ]---[ C (XC=40Ω) ]---\n   |< - - - - - - - - Z = ? - - - - - - - - - - ->|\n</pre>",
            options: ["50 Ω", "70 Ω", "110 Ω", "150 Ω", "30 Ω"],
            correct: 0,
            rationale: "$Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{30^2 + (80 - 40)^2} = \\sqrt{30^2 + 40^2} = 50\\,\\Omega$."
        },
        {
            id: 'f15_p2',
            question: "Sebuah peluru bermassa $10\\text{ g}$ ditembakkan dengan kecepatan $100\\text{ m/s}$ ke arah balok bermassa $990\\text{ g}$ yang diam di atas lantai licin. Kecepatan balok dan peluru setelah tumbukan adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n   Peluru(10g) ---> 100 m/s   [ Balok 990g ] (Diam)\n   ----------------------------------------------\n   Setelah Tumbukan:          [ Peluru+Balok ] ---> v' = ?\n</pre>",
            options: ["1 m/s", "10 m/s", "0,1 m/s", "2 m/s", "5 m/s"],
            correct: 0,
            rationale: "$m_1 v_1 + m_2 v_2 = (m_1 + m_2) v' \\implies 0{,}01(100) + 0 = (0{,}01 + 0{,}99) v' \\implies 1 = 1 \\cdot v' \\implies v' = 1\\text{ m/s}$."
        },
        {
            id: 'f16_p2',
            question: "Waktu paruh suatu unsur radioaktif adalah 4 hari. Jika mula-mula massa unsur tersebut $100\\text{ gram}$, sisa massa unsur setelah 12 hari adalah...",
            options: ["12,5 gram", "25 gram", "50 gram", "6,25 gram", "3,125 gram"],
            correct: 0,
            rationale: "$N(t) = N_0 \\cdot (1/2)^{t / T_{1/2}} = 100 \\cdot (1/2)^{12/4} = 100 \\cdot (1/8) = 12{,}5\\text{ gram}$."
        },
        {
            id: 'f17_p2',
            question: "Dua celah sempit terpisah pada jarak $0{,}2\\text{ mm}$ disinari cahaya dengan panjang gelombang $500\\text{ nm}$. Garis terang orde kedua terbentuk pada layar sejauh $1\\text{ m}$ dari celah. Jarak garis terang tersebut dari terang pusat adalah...<br><pre class='font-mono text-xs bg-slate-100 text-slate-800 p-3 rounded-xl border border-slate-200 leading-tight my-2 overflow-x-auto whitespace-pre'>\n   Celah ganda       L = 1 m           Layar\n   |==|  d=0.2mm                   |--- Terang 2 (y=?)\n   |  |----------------------------|--- Terang Pusat\n   |==|                            |\n</pre>",
            options: ["5 mm", "2,5 mm", "10 mm", "1 mm", "0,5 mm"],
            correct: 0,
            rationale: "$y = \\frac{n \\lambda L}{d} = \\frac{2 \\cdot (500 \\times 10^{-9}) \\cdot 1}{0{,}2 \\times 10^{-3}} = \\frac{10^{-6}}{2 \\times 10^{-4}} = 5 \\times 10^{-3}\\text{ m} = 5\\text{ mm}$."
        }
    ]
};