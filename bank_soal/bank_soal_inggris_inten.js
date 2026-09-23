const dataBahasaInggrisInten = {
    subjectId: 'bahasa_inggris_tka_inten',
    subjectName: 'Bahasa Inggris TKA (Prosus Inten TO-1)',
    category: 'Bahasa Inggris',
    categoryId: 'bahasa_inggris',
    categoryName: 'Bahasa Inggris',
    icon: '🇬🇧',
    questions: [
        // ==================== TEXT 1 (Q1) - AI AT WORKPLACE ====================
        {
            id: 'ing1_inten',
            question: "<b>Read the following text to answer question number 1!</b><br><br><blockquote style='background:#f9f9f9; border-left:4px solid #ccc; padding:10px; margin:10px 0;'>AI is increasingly used in various areas of life, including the workplace. While some support this development, others express concern. Below are arguments for and against the use of AI at work.<br><br>Supporters present three main points. First, efficiency and productivity. AI can handle repetitive, monotonous tasks without fatigue, allowing employees to focus on more complex and creative work. This increases output and saves time. Second, better decision-making. AI can analyze vast amounts of data quickly, identifying patterns and trends that help managers make informed, data-driven decisions. This leads to more accurate forecasts, improved employee engagement, and better overall results. Third, learning and development. AI can enhance employee engagement by offering personalized training. AI systems can detect skill gaps and recommend tailored programs, helping employees grow.<br><br>Critics, however, raise several concerns. First, job displacement. As AI takes over tasks once handled by humans, there's growing fear of job loss, causing stress among workers. Second, lack of human touch. Despite its capabilities, AI cannot replicate the empathy, emotional intelligence, and connection offered by human leaders essential in many roles. Third, ethical and privacy issues. Concerns about data use require clear policies to ensure fairness, transparency, and respect for privacy.<br><br>Conclusion: AI should be used in the workplace, but with proper regulations to maximize benefits and minimize risks.</blockquote><br>Based on the text about AI at work, which statement correctly reflects the impact or concerns regarding AI?<br>1) AI can handle repetitive tasks allowing employees to focus on creative work.<br>2) AI can replicate human empathy and emotional intelligence perfectly.<br>3) Critical concerns include job displacement and privacy issues.<br><br>The correct combination of statements is...",
            options: [
                "1 True, 2 False, 3 True",
                "1 True, 2 True, 3 False",
                "1 False, 2 False, 3 True",
                "1 False, 2 True, 3 True",
                "1 True, 2 True, 3 True"
            ],
            correct: 0,
            rationale: "Statement 1 is TRUE (efficiency & productivity), Statement 2 is FALSE (text states 'AI cannot replicate empathy...'), and Statement 3 is TRUE (critics raise job displacement & privacy concerns)."
        },

        // ==================== TEXT 2 (Q2 & Q4) - BALI ATTRACTIONS ====================
        {
            id: 'ing2_inten',
            question: "<b>Read the following text to answer question number 2!</b><br><br><blockquote style='background:#f9f9f9; border-left:4px solid #ccc; padding:10px; margin:10px 0;'>Bali, a beautiful island in Indonesia, is known for its stunning landscapes and rich culture. While many come for the beaches and temples, the island also offers natural attractions that amaze nature lovers from around the world.<br><br>In the west lies West Bali National Park, a peaceful area filled with green forests, calm mangrove swamps, and colorful coral reefs along the sea. One of the park's most special sights is the Bali Starling, a rare white bird with bright blue around its eyes. Visitors can walk along clear paths and enjoy the rich variety of plants and animals in this protected area.<br><br>Heading north, travelers find the scenic Munduk Waterfall, surrounded by green hills and forests. Water flows gently over rocky cliffs into a cool clear pool. The walk to the waterfall passes through narrow paths lined with coffee and clove trees. Munduk is the perfect place to relax and enjoy Bali's natural charm.<br><br>Near the cultural center Ubud, the famous Tegalalang rice terraces stretch across the hills in green steps. These terraces are shaped by generations of farmers who work the land by hand. In the morning, mist rises above the fields, and sunlight reflects off the water in the paddies.<br><br>These natural wonders highlight Bali's dedication in preserving its environmental and cultural treasures. By exploring these sites, tourists support ongoing conservation efforts.</blockquote><br>What is the main purpose of visiting these places in Bali according to the text?<br>1) West Bali National Park<br>2) Munduk Waterfall<br>3) Tegalalang Rice Terraces",
            options: [
                "1 Conservation & Protection, 2 Relaxation & Nature, 3 Culture & Agricultural Heritage",
                "1 Commercial Shopping, 2 Extreme Sports, 3 Industrial Farming",
                "1 Urban Entertainment, 2 Waterpark Recreation, 3 Luxury Resort",
                "1 Religious Ceremony only, 2 Fishing, 3 Mining",
                "1 Hunting, 2 Swimming pool, 3 Hotel development"
            ],
            correct: 0,
            rationale: "West Bali National Park is a protected area for wildlife conservation (Bali Starling), Munduk Waterfall offers a relaxing natural atmosphere, and Tegalalang represents agricultural heritage."
        },

        // ==================== TEXT 3 (Q3 & Q5) - SOCIAL MEDIA ON TEENS ====================
        {
            id: 'ing3_inten',
            question: "<b>Read the following text to answer question number 3!</b><br><br><blockquote style='background:#f9f9f9; border-left:4px solid #ccc; padding:10px; margin:10px 0;'>In today's world, social media is a big part of many teenagers' daily lives. While it has some benefits, such as staying connected with friends, meeting new people, and learning about interesting topics, it also brings serious problems. I strongly believe that social media harms teen mental health, and we must pay more attention to this issue before it becomes even worse.<br><br>First, social media often makes teenagers compare themselves to others in an unhealthy way. When teens see pictures of people who seem perfect, they feel that they are not good enough. These feelings can lower self-esteem and lead to sadness, anxiety, or even depression. The problem is that many of these online posts are edited, filtered, or fake.<br><br>Second, too much time on social media affects sleep and study habits. Many teenagers use their phones late at night, checking messages or watching videos, which reduces sleep time and quality. Without enough sleep, teens cannot focus well in class, and their grades may suffer.<br><br>Finally, online bullying, or cyberbullying, is another serious danger. Unlike face-to-face bullying, it can happen at any time. Victims of cyberbullying often feel alone, scared, and helpless.<br><br>In conclusion, although social media has some good uses, its harm to teen mental health is much greater. Parents and schools should guide young people to spend time offline.</blockquote><br>Based on the text, using social media extensively brings about unintended effects on youths. Click TRUE or FALSE for each statement:<br>1) Teens tend to compare themselves to idealized online posts, lowering self-esteem.<br>2) Victims of cyberbullying always find immediate help easily.<br>3) Late-night social media usage negatively affects sleep quality and academic performance.<br><br>The correct evaluation is...",
            options: [
                "1 True, 2 False, 3 True",
                "1 True, 2 True, 3 False",
                "1 False, 2 True, 3 True",
                "1 False, 2 False, 3 True",
                "1 True, 2 True, 3 True"
            ],
            correct: 0,
            rationale: "Statement 1 is TRUE (unhealthy comparisons), Statement 2 is FALSE (victims often feel alone, scared, and helpless), and Statement 3 is TRUE (poor sleep leads to lower grades)."
        },
        {
            id: 'ing4_inten',
            question: "<b>(Use the Bali text from question No. 2)</b><br><br>Which parts of the text best support the description of Bali as being 'full of natural beauty'?",
            options: [
                "A peaceful area filled with green forests, calm mangrove swamps, and colorful coral reefs along the sea.",
                "Farmers wearing wide-brimmed hats and working on land.",
                "Busy city centers filled with heavy traffic and commercial malls.",
                "Modern high-rise buildings along the shoreline.",
                "Souvenir shops located around local markets."
            ],
            correct: 0,
            rationale: "The description of green forests, mangrove swamps, and colorful coral reefs directly highlights Bali's rich natural landscapes."
        },
        {
            id: 'ing5_inten',
            question: "<b>(Use the Social Media text from question No. 3)</b><br><br>What will happen if teenagers have poor sleep quality due to excessive social media use?",
            options: [
                "Teens struggle to focus in class, leading to lower grades and increased stress.",
                "Teenagers will become more confident and mentally strong.",
                "Teens will perform much better in sports and physical activities.",
                "Teens will easily memorize complex lessons in class.",
                "Teens will improve their social communication skills offline."
            ],
            correct: 0,
            rationale: "Without enough sleep, teenagers cannot focus well in class, causing their grades to suffer and increasing stress."
        },

        // ==================== TEXT 4 (Q6 & Q7) - INTERNSHIP AT SPORTS CLUB ====================
        {
            id: 'ing6_inten',
            question: "<b>Read the following text to answer questions number 6 and 7!</b><br><br><blockquote style='background:#f9f9f9; border-left:4px solid #ccc; padding:10px; margin:10px 0;'>Last summer, I had the opportunity to work as an intern at a local sports club. It was my first time working in a professional sports environment, and I was both nervous and excited.<br><br>On my first day, I met the head coach, who welcomed me and explained my tasks. I had to set up cones for drills, bring water for the players, and check the training schedules. The first few days were challenging because I was not used to the morning routine. Every morning I had to wake up early, arrive on time, and follow instructions carefully.<br><br>In the second month of my internship, I was trained to handle emergency situations. I got the chance to put that knowledge into practice when something unexpected happened. During football practice, a player fell and hurt his ankle. Everyone stopped, and I quickly ran to get the first aid kit. I helped the coach assess the injury and ensured the player stayed calm. Luckily, it wasn't serious, but the experience reinforced an important lesson: staying alert during emergencies makes a big difference.<br><br>At the end of my internship, the coaches highlighted my strengths in teamwork, responsibility, and communication, and even gave me a club T-shirt as a gift.</blockquote><br>What are the best traits to describe the writer's personality during their internship at the sports club?",
            options: [
                "Responsible, attentive, and willing to learn",
                "Arrogant and prefers working alone",
                "Careless and easily panicked in emergencies",
                "Lazy and constantly complaining about morning routines",
                "Indifferent to feedback from coaches"
            ],
            correct: 0,
            rationale: "The writer showed responsibility by waking up early, readiness during emergencies (first aid), and willingness to learn from feedback."
        },
        {
            id: 'ing7_inten',
            question: "<b>(Use the Internship text from question No. 6)</b><br><br>During the internship, what did the writer do every morning in the initial phase?",
            options: [
                "Woke up early, arrived on time, set up cones, brought water, and checked training schedules.",
                "Played football with the professional team and scored goals.",
                "Evaluated the coaches and distributed club T-shirts.",
                "Conducted medical surgery on injured players.",
                "Designed marketing banners for the sports club."
            ],
            correct: 0,
            rationale: "The text mentions setting up cones for drills, bringing water, checking schedules, and arriving on time every morning."
        },

        // ==================== TEXT 5 (Q8 - Q12) - PLANT ELEMENTS & SOIL ====================
        {
            id: 'ing8_inten',
            question: "<b>Read the following text to answer questions number 8 to 12!</b><br><br><blockquote style='background:#f9f9f9; border-left:4px solid #ccc; padding:10px; margin:10px 0;'>In total, the plant has need of at least 16 elements, of which the most important are carbon, hydrogen, oxygen, nitrogen, phosphorus, sulfur, potassium, calcium, and magnesium.<br><br>The plant obtains carbon and hydrogen dioxide from the atmosphere; other nutrients are taken up from the soil. Although the plant contains sodium, iodine, and cobalt, these are apparently not essential. This is also true of silicon and aluminum.<br><br>Overall chemical analyses indicate that the total supply of nutrients in soils is usually high in comparison with the requirements of crop plants. Much of this potential supply, however, is bound tightly in forms that are not released to crops fast enough to give satisfactory growth. Because of this, the farmer is interested in measuring the available nutrient supply as contrasted to the total quantities.</blockquote><br>Which of the following elements is NOT taken up from the soil by plants?",
            options: ["Carbon", "Potassium", "Magnesium", "Calcium", "Sulfur"],
            correct: 0,
            rationale: "Paragraph 2 states: 'The plant obtains carbon and hydrogen dioxide from the atmosphere; other nutrients are taken up from the soil.'"
        },
        {
            id: 'ing9_inten',
            question: "<b>(Use the Plant Elements text from question No. 8)</b><br><br>Why do farmers prefer considering only available nutrients rather than the total quantity of nutrients in the soil?",
            options: [
                "Because much of the potential supply is bound tightly in compounds that are not released fast enough to crops.",
                "Because chemical analyses indicate that soil contains no nutrients at all.",
                "Because farmers do not know how to measure total nutrients.",
                "Because plants absorb all nutrients directly from the air.",
                "Because total nutrients are always toxic to young plants."
            ],
            correct: 0,
            rationale: "Much of the total supply is bound tightly in forms that plants cannot absorb fast enough for satisfactory growth."
        },
        {
            id: 'ing10_inten',
            question: "<b>(Use the Plant Elements text from question No. 8)</b><br><br>The main topic of paragraph three is about...",
            options: [
                "the contrast between total nutrient supply and available nutrient supply for crop growth",
                "the process of photosynthesis in green plants",
                "the atmospheric absorption of oxygen",
                "the methods of applying chemical fertilizers",
                "the role of sodium and cobalt in plant nutrition"
            ],
            correct: 0,
            rationale: "Paragraph 3 contrasts total nutrient quantities with the actual available nutrient supply that crops can use."
        },
        {
            id: 'ing11_inten',
            question: "<b>(Use the Plant Elements text from question No. 8)</b><br><br>According to the text, how many non-essential/less vital elements are mentioned as present in plants (e.g., sodium, iodine, cobalt, silicon, aluminum)?",
            options: ["Five", "Three", "Seven", "Nine", "Sixteen"],
            correct: 0,
            rationale: "The text mentions 5 non-essential elements: sodium, iodine, cobalt, silicon, and aluminum."
        },
        {
            id: 'ing12_inten',
            question: "<b>(Use the Plant Elements text from question No. 8)</b><br><br>\"The plant obtains carbon and hydrogen dioxide...\" (Paragraph 2). The word 'obtains' is closest in meaning to...",
            options: ["gets", "puts", "gives", "loses", "destroys"],
            correct: 0,
            rationale: "'Obtain' means to acquire or get something."
        },

        // ==================== TEXT 6 (Q13 - Q17) - POLAR BEAR & ECOLOGY ====================
        {
            id: 'ing13_inten',
            question: "<b>Read the following text to answer questions number 13 to 17!</b><br><br><blockquote style='background:#f9f9f9; border-left:4px solid #ccc; padding:10px; margin:10px 0;'>Polar bears are adapted to life in the polar region, around the North Pole. Their bodies have special features that work particularly well in the polar seas. For instance, they have sharp and powerful claws for catching their food, which is mainly seals. In their own environment, they are excellent hunters; but if they had to live on birds and squirrels in other places, they would die.<br><br>The science that studies the way that different forms of life are adapted to their particular environment is called ecology.<br><br>The first lesson of ecology is that all life in an environment depends on other forms of life. Polar bears depend on seals, which can live only where they do because they depend on particular kinds of fish found in the Arctic seas.<br><br>There are certain important cycles in nature that show plants and animals depend on each other: for example, the nitrogen cycle and the oxygen cycle.<br><br>In an ideal ecological system, living things exist in balance. However, particularly where man interferes, a species may become too successful and abundant, and the balance is destroyed. For instance, the use of pesticides to kill a plant pest may also kill predatory insects and birds. Through ecology, we try to restore balance and save the world from devastation.</blockquote><br>The primary natural habitat of polar bears is in...",
            options: ["the North Pole (Arctic region)", "the South Pole (Antarctica)", "tropical rainforests", "temperate European forests", "desert regions"],
            correct: 0,
            rationale: "Paragraph 1 specifies: 'Polar bears are adapted to life in the polar region, around the North Pole.'"
        },
        {
            id: 'ing14_inten',
            question: "<b>(Use the Ecology text from question No. 13)</b><br><br>What is the text as a whole mainly discussing?",
            options: [
                "Ecology and the interdependence of living things in an ecosystem",
                "The extinction of polar bears in Antarctica",
                "How to manufacture chemical pesticides",
                "The life cycle of squirrels and forest birds",
                "The history of ocean exploration"
            ],
            correct: 0,
            rationale: "The text uses polar bears, nitrogen/oxygen cycles, and pesticides to explain the science of ecology and ecological balance."
        },
        {
            id: 'ing15_inten',
            question: "<b>(Use the Ecology text from question No. 13)</b><br><br>The ecological balance in a certain area will be severely endangered if...",
            options: [
                "man interferes excessively with the environment",
                "plants take nitrogen compounds from the soil",
                "animals release carbon dioxide when breathing",
                "polar bears hunt seals for survival",
                "fish swim in the Arctic ocean"
            ],
            correct: 0,
            rationale: "Paragraph 5 states: 'where man interferes, a species may become too successful... and the balance is destroyed.'"
        },
        {
            id: 'ing16_inten',
            question: "<b>(Use the Ecology text from question No. 13)</b><br><br>The main idea of paragraph 3 is that...",
            options: [
                "all life in an environment depends on other forms of life (interdependence)",
                "polar bears can easily live on eating squirrels",
                "seals do not need fish to survive",
                "Arctic seas have no living organisms",
                "plants do not require sunlight"
            ],
            correct: 0,
            rationale: "Paragraph 3 opens with: 'The first lesson of ecology is that all life in an environment depends on other forms of life.'"
        },
        {
            id: 'ing17_inten',
            question: "<b>(Use the Ecology text from question No. 13)</b><br><br>\"...save the world from devastation.\" (Paragraph 6). The synonym of the underlined word 'devastation' is...",
            options: ["destruction", "rehabilitation", "preservation", "creation", "construction"],
            correct: 0,
            rationale: "'Devastation' means severe damage or destruction."
        },

        // ==================== TEXT 7 (Q18 - Q22) - WOMEN'S SUFFRAGE ====================
        {
            id: 'ing18_inten',
            question: "<b>Read the following text to answer questions number 18 to 22!</b><br><br><blockquote style='background:#f9f9f9; border-left:4px solid #ccc; padding:10px; margin:10px 0;'>During the nineteenth century, women in the United States organized and participated in a large number of reform movements, including movements to reorganize the prison system, improve education, ban the sale of alcohol, and most importantly, to free the slaves. Some women saw similarities in the social status of women and slaves. Women like Elizabeth Cady Stanton and Lucy Stone were feminists and abolitionists who supported the rights of both women and blacks. Probably more than any other movement, abolitionism offered women entry into politics. They became involved primarily in order to better their living conditions and the conditions of others.<br><br>When the Civil War ended in 1865, the Fourteenth and Fifteenth Amendments granted citizenship and suffrage to blacks but not to women. Discouraged but resolved, feminists influenced more women to demand the right to vote. In 1869 Wyoming Territory had yielded to demands by feminists, but eastern states resisted. A women's suffrage bill had been presented to every Congress since 1878 but it continually failed to pass until 1920, when the Nineteenth Amendment granted women the right to vote.</blockquote><br>When were women officially granted the right to vote throughout the entire United States?",
            options: ["In 1920 (19th Amendment)", "In 1865", "In 1868", "In 1870", "In 1878"],
            correct: 0,
            rationale: "Paragraph 2 states that the bill continually failed until 1920, when the Nineteenth Amendment granted women suffrage."
        },
        {
            id: 'ing19_inten',
            question: "<b>(Use the Women's Suffrage text from question No. 18)</b><br><br>What is mainly discussed in the second paragraph?",
            options: [
                "The long historical process and struggle to grant women the right to vote",
                "The detailed strategy of the American Civil War",
                "The immediate economic impact of the 14th Amendment",
                "The geographic landscape of Wyoming Territory",
                "The defeat of abolitionist groups in the East"
            ],
            correct: 0,
            rationale: "Paragraph 2 focuses on post-Civil War amendments, feminist demands, Wyoming yielding, and eventual passage of the 19th Amendment in 1920."
        },
        {
            id: 'ing20_inten',
            question: "<b>(Use the Women's Suffrage text from question No. 18)</b><br><br>What is the primary topic of the passage?",
            options: [
                "Women's suffrage and rights movement in the United States",
                "The election of Elizabeth Cady Stanton as president",
                "The military history of the American Civil War",
                "Prison reform techniques in the 19th century",
                "Alcohol prohibition laws in western states"
            ],
            correct: 0,
            rationale: "The passage comprehensively details women's involvement in social reforms, abolitionism, and the battle for voting rights (suffrage)."
        },
        {
            id: 'ing21_inten',
            question: "<b>(Use the Women's Suffrage text from question No. 18)</b><br><br>According to the passage, why did women initially become active in political and social reform movements?",
            options: [
                "To better their living conditions and the conditions of marginalized others",
                "To become world-famous celebrities",
                "To run for executive public office immediately",
                "To abolish all forms of taxation",
                "To overthrow the US Constitution"
            ],
            correct: 0,
            rationale: "Paragraph 1 concludes: 'They became involved primarily in order to better their living conditions and the conditions of others.'"
        },
        {
            id: 'ing22_inten',
            question: "<b>(Use the Women's Suffrage text from question No. 18)</b><br><br>\"A women's suffrage bill had been presented to...\" (Paragraph 2). The word 'suffrage' closest in meaning to...",
            options: ["the right to vote", "freedom from slavery", "citizenship status", "financial compensation", "pain and suffering"],
            correct: 0,
            rationale: "'Suffrage' in a political context specifically means the right to vote in public elections."
        },

        // ==================== Q23 - JUMBLED SENTENCES ====================
        {
            id: 'ing23_inten',
            question: "Rearrange the following jumbled sentences into a coherent paragraph:<br>1. One is the familiar 'Tombstone' format listing education and work in chronological order.<br>2. But employers throw away most unrequested 'Tombstone' lists, preferring quick interviews.<br>3. The main purpose of a resume is to convince an employer to grant you an interview.<br>4. It's handy to have a 'Tombstone' for certain occasions.<br>5. There are two main kinds of resumes.<br>6. The other is the 'functional' resume—descriptive, unique, and more likely to land an interview.<br><br>The correct order is...",
            options: [
                "3 - 5 - 1 - 6 - 4 - 2",
                "1 - 2 - 3 - 4 - 5 - 6",
                "5 - 1 - 6 - 3 - 2 - 4",
                "3 - 1 - 2 - 5 - 6 - 4",
                "6 - 5 - 4 - 3 - 2 - 1"
            ],
            correct: 0,
            rationale: "Sentence 3 introduces the main purpose, 5 states there are two kinds, 1 describes the first ('Tombstone'), 6 describes the second ('functional'), 4 adds a note, and 2 concludes with employers' reactions."
        },

        // ==================== Q24 - Q26 CLOZE TEST ====================
        {
            id: 'ing24_inten',
            question: "<b>Read the paragraph and complete the blanks (24 to 26)!</b><br><br><blockquote style='background:#f9f9f9; border-left:4px solid #ccc; padding:10px; margin:10px 0;'>Poverty sometimes occurs in [...] (24) slums, where some poor people have not had the opportunity to learn skills that will help them to [...] (25) a living. People trapped in this kind of situation often have [...] (26) income.</blockquote><br>Choose the correct word for blank (24):",
            options: ["urban", "rich", "remote", "exotic", "mountainous"],
            correct: 0,
            rationale: "Slums characterized by lack of formal skills in economic centers are typically 'urban slums'."
        },
        {
            id: 'ing25_inten',
            question: "<b>(Use the Cloze Test paragraph from question No. 24)</b><br><br>Choose the correct verb for blank (25):",
            options: ["earn", "owe", "borrow", "waste", "lose"],
            correct: 0,
            rationale: "The standard English idiom for making money to support oneself is to 'earn a living'."
        },
        {
            id: 'ing26_inten',
            question: "<b>(Use the Cloze Test paragraph from question No. 24)</b><br><br>Choose the correct adjective for blank (26):",
            options: ["inadequate", "sufficient", "excessive", "abundant", "unlimited"],
            correct: 0,
            rationale: "'Inadequate' (insufficient/poor) fits the context of poverty and urban slum conditions."
        },

        // ==================== TEXT 8 (Q27 - Q30) - LETTER TO MS. SUSANTI ====================
        {
            id: 'ing27_inten',
            question: "<b>Read the letter below to answer questions number 27 to 30!</b><br><br><blockquote style='background:#f9f9f9; border-left:4px solid #ccc; padding:10px; margin:10px 0;'>Dear Ms. Susanti,<br><br>I hope this letter finds you in good health. I am writing to you today to express my concerns about the upcoming math exam.<br><br>As you know, math has always been a challenging subject for me, and I have been struggling with it for some time now. I have been working hard to prepare for the exam, but I am still feeling unsure about my abilities.<br><br>I am wondering if you could give me some extra help or guidance to prepare for the exam. Perhaps you could recommend some study materials or provide some additional practice problems for me to work on.<br><br>I appreciate all the hard work and effort you put into teaching us and I know you want us to succeed. Your guidance and support would mean a lot to me.<br><br>Sincerely,<br>Rayani</blockquote><br>What subject does Ms. Susanti teach?",
            options: ["Mathematics", "Biology", "History", "Geography", "English"],
            correct: 0,
            rationale: "Rayani writes: 'I am writing to you today to express my concerns about the upcoming math exam.'"
        },
        {
            id: 'ing28_inten',
            question: "<b>(Use the Letter to Ms. Susanti from question No. 27)</b><br><br>What does Rayani think of mathematics?",
            options: [
                "It is a challenging subject that she struggles with",
                "It is very easy and boring",
                "It is her favorite effortless subject",
                "It requires no studying at all",
                "It is purely about drawing graphs"
            ],
            correct: 0,
            rationale: "Rayani states: 'math has always been a challenging subject for me, and I have been struggling with it...'"
        },
        {
            id: 'ing29_inten',
            question: "<b>(Use the Letter to Ms. Susanti from question No. 27)</b><br><br>Rayani writes to Ms. Susanti because she wants her teacher to...",
            options: [
                "provide extra help, guidance, and study practice problems",
                "cancel the upcoming examination completely",
                "give her maximum grades without taking the exam",
                "buy her new textbooks",
                "change her class schedule"
            ],
            correct: 0,
            rationale: "Rayani asks if Ms. Susanti could give 'some extra help or guidance... recommend study materials or provide additional practice problems.'"
        },
        {
            id: 'ing30_inten',
            question: "<b>(Use the Letter to Ms. Susanti from question No. 27)</b><br><br>What positive attitude or moral lesson can we learn from Rayani's action?",
            options: [
                "When facing academic difficulties, it is wise to be proactive and politely seek guidance from teachers",
                "If a subject is hard, one should give up immediately",
                "Students should complain to their friends instead of asking teachers",
                "Exams should be avoided whenever possible",
                "Teachers are solely responsible if students fail"
            ],
            correct: 0,
            rationale: "Rayani demonstrates proactive initiative, humility, and polite communication in seeking help to overcome her academic struggles."
        }
    ]
};