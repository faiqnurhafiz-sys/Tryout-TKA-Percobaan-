let masterBankSoal = [];
let currentSubject = null;
let currentQuestions = [];
let currentIndex = 0;
let userAnswers = {};
let activeCategory = 'all';
let quizHistory = JSON.parse(localStorage.getItem('tka_master_history')) || [];

document.addEventListener("DOMContentLoaded", () => {
    if (typeof dataMatematika !== 'undefined') masterBankSoal.push(dataMatematika);
    if (typeof dataFisika !== 'undefined') masterBankSoal.push(dataFisika);
    if (typeof dataKimia !== 'undefined') masterBankSoal.push(dataKimia);
    if (typeof dataIndonesia !== 'undefined') masterBankSoal.push(dataIndonesia);
    if (typeof dataInggris !== 'undefined') masterBankSoal.push(dataInggris);
    if (typeof dataMatematikaInten !== 'undefined') masterBankSoal.push(dataMatematikaInten);
    if (typeof dataFisikaInten !== 'undefined') masterBankSoal.push(dataFisikaInten);
    if (typeof dataKimiaInten !== 'undefined') masterBankSoal.push(dataKimiaInten);
    if (typeof dataMatematikaBaru !== 'undefined') masterBankSoal.push(dataMatematikaBaru);
    if (typeof dataSejarahInten !== 'undefined') masterBankSoal.push(dataSejarahInten);
    if (typeof dataPknInten !== 'undefined') masterBankSoal.push(dataPknInten);
    if (typeof dataSosiologiInten !== 'undefined') masterBankSoal.push(dataSosiologiInten);
    if (typeof dataBahasaIndonesiaInten !== 'undefined') masterBankSoal.push(dataBahasaIndonesiaInten);
    if (typeof dataBahasaInggrisInten !== 'undefined') masterBankSoal.push(dataBahasaInggrisInten);
    if (typeof dataBahasaIndonesia !== 'undefined') masterBankSoal.push(dataBahasaIndonesia);
    if (typeof dataBahasaInggris !== 'undefined') masterBankSoal.push(dataBahasaInggris);

    renderCategoryTabs();
    renderDashboard();
    renderMath();
});

function renderMath() {
    setTimeout(() => {
        if (window.renderMathInElement) {
            renderMathInElement(document.body, {
                delimiters: [
                    { left: "$$", right: "$$", display: true },
                    { left: "$", right: "$", display: false }
                ]
            });
        }
    }, 50);
}

function renderCategoryTabs() {
    const tabsContainer = document.getElementById('category-tabs');
    if (!tabsContainer) return;
    tabsContainer.innerHTML = '';

    const categories = ['all'];
    masterBankSoal.forEach(item => {
        const cat = item.categoryName || item.category || 'Lainnya';
        if (!categories.includes(cat)) {
            categories.push(cat);
        }
    });

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `px-3 py-1.5 rounded-xl text-xs font-semibold transition border ${activeCategory === cat
            ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`;
        btn.innerText = cat === 'all' ? '✨ Semua' : cat;
        btn.onclick = () => {
            activeCategory = cat;
            renderCategoryTabs();
            filterDashboard();
        };
        tabsContainer.appendChild(btn);
    });
}

function filterDashboard() {
    renderDashboard();
}

function renderDashboard() {
    const container = document.getElementById('subject-sections-container');
    if (!container) return;
    const searchKeyword = (document.getElementById('search-input')?.value || '').toLowerCase();
    container.innerHTML = '';

    if (masterBankSoal.length === 0) {
        container.innerHTML = `<div class="text-center py-10 text-slate-400">Belum ada data bank soal yang terdeteksi.</div>`;
        return;
    }

    const filteredSoal = masterBankSoal.filter(sub => {
        const catName = sub.categoryName || sub.category || 'Lainnya';
        const matchesCategory = activeCategory === 'all' || catName === activeCategory;
        const matchesSearch = sub.subjectName.toLowerCase().includes(searchKeyword);
        return matchesCategory && matchesSearch;
    });

    if (filteredSoal.length === 0) {
        container.innerHTML = `<div class="text-center py-12 bg-white rounded-2xl border border-slate-200 text-slate-400">Modul tidak ditemukan. Coba kata kunci atau kategori lain.</div>`;
        return;
    }

    const grouped = filteredSoal.reduce((acc, sub) => {
        const category = sub.categoryName || sub.category || 'Lainnya';
        if (!acc[category]) acc[category] = [];
        acc[category].push(sub);
        return acc;
    }, {});

    for (const [categoryName, modules] of Object.entries(grouped)) {
        const section = document.createElement('div');
        section.className = "space-y-4";

        const categoryIcon = modules[0]?.icon || '📚';

        section.innerHTML = `
            <div class="flex items-center space-x-2 border-b border-slate-200 pb-2">
                <span class="text-xl">${categoryIcon}</span>
                <h3 class="font-bold text-slate-800 text-lg">${categoryName}</h3>
                <span class="text-xs text-slate-400 font-normal">(${modules.length} Modul)</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                ${modules.map(sub => `
                    <div onclick="startQuiz('${sub.subjectId}')"
                        class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition cursor-pointer flex flex-col justify-between space-y-4">
                        <div class="flex items-center space-x-3.5">
                            <span class="text-3xl">${sub.icon || '📝'}</span>
                            <div>
                                <h4 class="font-bold text-slate-800 text-base leading-snug">${sub.subjectName}</h4>
                                <span class="text-[11px] text-teal-600 font-bold bg-teal-50 px-2.5 py-0.5 rounded-full inline-block mt-1">
                                    ${sub.questions.length} Soal
                                </span>
                            </div>
                        </div>
                        <button class="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-xl text-xs transition">
                            Mulai Kerjakan →
                        </button>
                    </div>
                `).join('')}
            </div>
        `;

        container.appendChild(section);
    }
}

function startQuiz(subjectId) {
    currentSubject = masterBankSoal.find(s => s.subjectId === subjectId);
    currentQuestions = currentSubject.questions;
    currentIndex = 0;
    userAnswers = {};

    document.getElementById('quiz-subject-tag').innerText = currentSubject.category;
    document.getElementById('quiz-title').innerText = currentSubject.subjectName;

    switchScreen('screen-quiz');
    loadQuestion();
    renderNumberGrid();
}

function loadQuestion() {
    const q = currentQuestions[currentIndex];
    document.getElementById('quiz-progress').innerText = `${currentIndex + 1} / ${currentQuestions.length}`;

    const stimEl = document.getElementById('question-stimulus');
    if (q.stimulus) {
        stimEl.innerHTML = `<strong>Teks / Bacaan / Gambar:</strong><br>${q.stimulus}`;
        stimEl.classList.remove('hidden');
    } else {
        stimEl.classList.add('hidden');
    }

    document.getElementById('question-text').innerHTML = `${currentIndex + 1}. ${q.question}`;

    const optContainer = document.getElementById('options-container');
    optContainer.innerHTML = '';

    q.options.forEach((optText, idx) => {
        const isSelected = userAnswers[currentIndex] === idx;
        const optBtn = document.createElement('button');
        optBtn.className = `w-full text-left p-4 rounded-xl border text-sm font-medium transition flex items-start space-x-3 ${isSelected
            ? 'border-teal-500 bg-teal-50/70 text-teal-900 shadow-sm'
            : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
            }`;
        optBtn.onclick = () => selectOption(idx);
        optBtn.innerHTML = `
            <span class="w-6 h-6 rounded-full border text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${isSelected ? 'bg-teal-600 text-white border-teal-600' : 'border-slate-300 text-slate-500 bg-slate-50'
            }">${String.fromCharCode(65 + idx)}</span>
            <span class="leading-relaxed mt-0.5">${optText}</span>
        `;
        optContainer.appendChild(optBtn);
    });

    document.getElementById('btn-prev').disabled = currentIndex === 0;
    if (currentIndex === currentQuestions.length - 1) {
        document.getElementById('btn-next').classList.add('hidden');
        document.getElementById('btn-submit').classList.remove('hidden');
    } else {
        document.getElementById('btn-next').classList.remove('hidden');
        document.getElementById('btn-submit').classList.add('hidden');
    }

    renderNumberGrid();
    renderMath();
}

function renderNumberGrid() {
    const grid = document.getElementById('number-grid');
    grid.innerHTML = '';

    currentQuestions.forEach((_, idx) => {
        const isAnswered = userAnswers.hasOwnProperty(idx);
        const isCurrent = idx === currentIndex;

        const btn = document.createElement('button');
        btn.className = `h-9 w-full rounded-lg font-bold text-xs flex items-center justify-center border transition ${isCurrent
            ? 'ring-2 ring-teal-600 border-teal-600 bg-teal-50 text-teal-800'
            : isAnswered
                ? 'bg-teal-600 text-white border-teal-600'
                : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
            }`;
        btn.innerText = idx + 1;
        btn.onclick = () => {
            currentIndex = idx;
            loadQuestion();
        };
        grid.appendChild(btn);
    });
}

function selectOption(index) {
    userAnswers[currentIndex] = index;
    loadQuestion();
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (currentIndex < currentQuestions.length - 1) {
        currentIndex++;
        loadQuestion();
    }
}

function finishQuiz() {
    if (Object.keys(userAnswers).length < currentQuestions.length) {
        if (!confirm(`Anda baru menjawab ${Object.keys(userAnswers).length} dari ${currentQuestions.length} soal. Yakin ingin mengirimkan?`)) {
            return;
        }
    }

    let correctCount = 0;
    currentQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correct) {
            correctCount++;
        }
    });

    const score = Math.round((correctCount / currentQuestions.length) * 100);

    const record = {
        id: Date.now(),
        date: new Date().toLocaleString('id-ID'),
        subject: currentSubject.subjectName,
        score: score,
        correct: correctCount,
        total: currentQuestions.length,
        questions: currentQuestions,
        userAnswers: userAnswers
    };

    quizHistory.unshift(record);
    localStorage.setItem('tka_master_history', JSON.stringify(quizHistory));

    document.getElementById('final-score').innerText = score;
    document.getElementById('score-summary').innerText = `Menjawab ${correctCount} dari ${currentQuestions.length} soal dengan benar`;

    switchScreen('screen-result');
}

function showReviewCurrent() {
    renderReviewScreen(currentQuestions, userAnswers, currentSubject.subjectName);
}

function showReviewByHistoryId(historyId) {
    const record = quizHistory.find(item => item.id === historyId);
    if (record && record.questions) {
        renderReviewScreen(record.questions, record.userAnswers || {}, record.subject);
    } else {
        alert("Detail pembahasan untuk riwayat ini tidak tersedia.");
    }
}

function renderReviewScreen(questions, answers, subjectName) {
    document.getElementById('review-subject-title').innerText = subjectName || 'Tryout Soal';
    const container = document.getElementById('review-container');
    container.innerHTML = '';

    questions.forEach((q, idx) => {
        const userAns = answers[idx];
        const isCorrect = userAns === q.correct;

        const card = document.createElement('div');
        card.className = "bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4";
        card.innerHTML = `
            <div class="flex justify-between items-start border-b pb-3">
                <span class="text-xs font-bold text-slate-400">Soal #${idx + 1}</span>
                <span class="px-2.5 py-1 rounded-full text-xs font-bold ${isCorrect ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-rose-50 text-rose-600 border border-rose-200'
            }">
                    ${isCorrect ? '✓ Jawaban Benar' : '✕ Jawaban Salah/Kosong'}
                </span>
            </div>

            ${q.stimulus ? `<div class="text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200">${q.stimulus}</div>` : ''}

            <div class="text-sm font-semibold text-slate-800">${q.question}</div>

            <div class="space-y-2 pt-2">
                ${q.options.map((opt, oIdx) => {
                let optStyle = "border-slate-100 bg-slate-50 text-slate-600";
                if (oIdx === q.correct) {
                    optStyle = "border-emerald-300 bg-emerald-50/70 text-emerald-900 font-semibold";
                } else if (oIdx === userAns && !isCorrect) {
                    optStyle = "border-rose-300 bg-rose-50/70 text-rose-900 font-semibold";
                }
                return `
                        <div class="p-3 rounded-xl border text-xs flex items-center space-x-2 ${optStyle}">
                            <span class="font-bold">${String.fromCharCode(65 + oIdx)}.</span>
                            <span>${opt}</span>
                        </div>
                    `;
            }).join('')}
            </div>

            <div class="bg-teal-50/60 border border-teal-100 p-4 rounded-xl text-xs text-teal-950 leading-relaxed">
                <span class="font-bold block text-teal-800 mb-1">💡 Kunci & Pembahasan:</span>
                ${q.rationale}
            </div>
        `;
        container.appendChild(card);
    });

    switchScreen('screen-review');
    renderMath();
}

function showHistory() {
    const container = document.getElementById('screen-history');
    if (!container) return;

    // Render ulang seluruh bagian rekap nilai agar responsif di HP & Desktop
    let historyHTML = `
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold text-slate-800">Riwayat Nilai & Pembahasan</h2>
            <button onclick="showDashboard()" class="text-sm text-teal-600 font-semibold hover:underline">
                ← Kembali ke Dashboard
            </button>
        </div>
    `;

    if (quizHistory.length === 0) {
        historyHTML += `
            <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center text-slate-400">
                Belum ada riwayat pengerjaan tryout.
            </div>
        `;
    } else {
        // Tampilan 1: Tabel untuk Layar Komputer / Desktop (hidden di HP)
        historyHTML += `
            <div class="hidden md:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-4">
                <table class="w-full text-left border-collapse text-sm">
                    <thead>
                        <tr class="bg-slate-50 text-slate-500 uppercase text-[11px] tracking-wider border-b">
                            <th class="p-4">Tanggal Pengerjaan</th>
                            <th class="p-4">Mata Pelajaran</th>
                            <th class="p-4">Jawaban Benar</th>
                            <th class="p-4">Skor</th>
                            <th class="p-4 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        ${quizHistory.map(item => `
                            <tr class="hover:bg-slate-50">
                                <td class="p-4 text-xs text-slate-500">${item.date}</td>
                                <td class="p-4 font-semibold text-slate-800">${item.subject}</td>
                                <td class="p-4 text-slate-600">${item.correct} /${item.total}</td>
                                <td class="p-4 font-bold text-teal-600">${item.score}</td>
                                <td class="p-4 text-center">
                                    ${item.questions ? `
                                        <button onclick="showReviewByHistoryId(${item.id})"
                                            class="px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg transition">
                                            📖 Pembahasan
                                        </button>
                                    ` : `<span class="text-xs text-slate-400">-</span>`}
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;

        // Tampilan 2: Kartu (Card) Khusus untuk Layar HP / Mobile (hidden di Desktop)
        historyHTML += `
            <div class="block md:hidden space-y-3 mb-4">
                ${quizHistory.map(item => `
                    <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                        <div class="flex justify-between items-start border-b border-slate-100 pb-2">
                            <div>
                                <h4 class="font-bold text-slate-800 text-sm leading-snug">${item.subject}</h4>
                                <span class="text-[10px] text-slate-400 block mt-0.5">${item.date}</span>
                            </div>
                            <div class="text-right">
                                <span class="text-lg font-extrabold text-teal-600 block">${item.score}</span>
                                <span class="text-[10px] text-slate-500">${item.correct}/${item.total} Benar</span>
                            </div>
                        </div>
                        <div class="pt-1">
                            ${item.questions ? `
                                <button onclick="showReviewByHistoryId(${item.id})"
                                    class="w-full py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-xl transition flex items-center justify-center space-x-1.5">
                                    <span>📖</span>
                                    <span>Lihat Pembahasan Soal</span>
                                </button>
                            ` : `
                                <span class="text-xs text-slate-400 text-center block">Pembahasan Tidak Tersedia</span>
                            `}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Tombol Hapus Riwayat
    historyHTML += `
        <div class="text-right">
            <button onclick="clearHistory()" class="text-xs text-rose-500 hover:underline">
                Hapus Seluruh Riwayat Data
            </button>
        </div>
    `;

    container.innerHTML = historyHTML;
    switchScreen('screen-history');
}

function clearHistory() {
    if (confirm("Apakah Anda yakin ingin menghapus seluruh riwayat nilai dan pembahasan?")) {
        quizHistory = [];
        localStorage.removeItem('tka_master_history');
        showHistory();
    }
}

function switchScreen(screenId) {
    ['screen-dashboard', 'screen-quiz', 'screen-result', 'screen-review', 'screen-history'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(screenId).classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showDashboard() {
    switchScreen('screen-dashboard');
}