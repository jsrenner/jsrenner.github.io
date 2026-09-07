/**
 * <g-term term-key="enuma-elish">Enuma Elish</g-term>
 *
 * Curriculum-wide glossary. Any term a first-time participant is unlikely to
 * know gets wrapped in <g-term>. It renders as a dotted-underlined word;
 * click (or focus + Enter) opens a short plain-language explainer card.
 *
 * Add new entries to GLOSSARY below — one shared source for every lesson,
 * slide deck and handout.
 */
(function () {
  const GLOSSARY = {

    "lament": {
      term: "lament",
      kind: "BIBLICAL GENRE · A THIRD OF THE PSALTER",
      plain: "Structured complaint addressed to God — grief given permission and a form.",
      body: "Lament is not a lapse in faith but one of Scripture's most common ways of speaking to God. It names loss, protests, sometimes accuses, and often refuses easy resolution — several psalms end without comfort. It becomes the dominant form in exile, which is precisely why the tradition needed it."
    },

    "judgment": {
      term: "judgment",
      kind: "HEBREW מִשְׁפָּט · SEE ALSO MISHPAT",
      plain: "God's verdict on a situation — sometimes announced, sometimes arriving as consequence.",
      body: "The prophets use strong, direct language of divine judgment and this course does not soften it. Alongside that, it holds open an interpretive possibility: some judgment language can be read as God allowing, naming or working through consequences already developing inside human choices and systems. Neither reading turns every tragedy into punishment, and Hosea 11 blocks the conclusion that judgment means abandonment."
    },

    "prophetic-era": {
      term: "c. 800–700 BC",
      kind: "DATING NOTE · THE EIGHTH-CENTURY PROPHETS",
      plain: "The century of Amos, Hosea, Isaiah and Micah — and of Assyria's expansion.",
      body: "Individual dates are approximate and partly inferred from the kings each book names. What is not in doubt is the setting: a period of real prosperity in the north, sharpening inequality, and an empire moving west. Samaria falls in 722 BC and Jerusalem is besieged in 701 BC — the prophets are speaking into that, not into a vacuum."
    },

    "prophet": {
      term: "prophet",
      kind: "HEBREW נָבִיא · NABI'",
      plain: "Someone who speaks God's word into the present, publicly and usually unwelcome.",
      body: "Prediction is part of the job but not the center of it. The characteristic prophetic act is address: naming what is happening, to the people doing it. Most of the prophetic corpus is aimed at the world directly in front of the prophet — its economy, its courts, its worship and its rulers."
    },

    "oracle": {
      term: "oracle",
      kind: "TERM · A UNIT OF PROPHETIC SPEECH",
      plain: "A single delivered message, usually short, often poetry.",
      body: "The prophetic books are collections of oracles rather than continuous essays, which is why they can shift abruptly between indictment, lament, threat and promise. Reading a chapter as one argument often misreads it; reading it as several speeches gathered together usually works better."
    },

    "covenant-lawsuit": {
      term: "covenant lawsuit",
      kind: "PROPHETIC FORM · HEBREW רִיב · RIV",
      plain: "A prophetic speech shaped like a legal case brought against Israel.",
      body: "God is plaintiff, heaven and earth are called as witnesses, the covenant terms are the standard, and the indictment follows. Micah 6 opens exactly this way. The form matters: the prophets are not attacking Israel from outside its faith but prosecuting Israel by its own agreed standard."
    },

    "mishpat": {
      term: "mishpat",
      kind: "HEBREW מִשְׁפָּט · JUSTICE, JUDGMENT",
      plain: "Justice — including the concrete question of how vulnerable people are actually treated.",
      body: "The word covers legal decision, right ruling and the establishment of what is right. In the prophets it carries an unmistakably social dimension: courts that can be bought, debts that swallow people, and the widow and orphan who have no leverage. It is measurable, not sentimental."
    },

    "tsedaqah": {
      term: "tsedaqah",
      kind: "HEBREW צְדָקָה · RIGHTEOUSNESS",
      plain: "Living in right relationship — with God and with other people.",
      body: "Usually translated righteousness, which in English has drifted toward private moral purity. The biblical word is more relational and more social: being rightly ordered toward others. In prophetic literature tsedaqah and mishpat travel together so consistently that separating them distorts both. Later Jewish usage extends the word toward charity itself."
    },

    "remnant": {
      term: "remnant",
      kind: "HEBREW שְׁאָר · SHE'AR",
      plain: "The surviving few through whom the story continues after catastrophe.",
      body: "A prophetic idea that carries judgment and hope in the same breath: the nation will not survive intact, and it will not disappear either. It becomes structurally important in exile — a theology for people who have lost almost everything but not quite everything."
    },

    "assyria": {
      term: "Assyria",
      kind: "EMPIRE · DOMINANT c. 900–612 BC",
      plain: "The Mesopotamian empire that destroyed the northern kingdom and besieged Jerusalem.",
      body: "Assyria's method was deportation and resettlement, designed to break a people's identity along with its army. Samaria fell in 722 BC; Sennacherib besieged Jerusalem in 701 BC. The prophets' warnings and Assyrian foreign policy occupy the same decades, which is why their words read as political as much as religious."
    },

    "lev-heart": {
      term: "heart",
      kind: "HEBREW לֵב · LEV",
      plain: "Not the seat of emotion so much as the center of thought, will and decision.",
      body: "When Jeremiah says the law will be written on the heart, he is not saying religion will become a feeling. Lev is closer to what we would call the deciding self. The promise is that instruction will move from an external tablet to the place where a person actually chooses."
    },

    "social-justice": {
      term: "justice, biblically",
      kind: "TERM · USED CAREFULLY IN THIS COURSE",
      plain: "What happens to people who have the least leverage.",
      body: "The prophets are concrete rather than programmatic: debt slavery, seized fields, rigged courts, unpaid wages, the widow with no advocate. This course keeps the term at that level deliberately — the biblical texts name specific harms rather than endorse a modern political platform, and the specificity is what gives them force."
    },

    "heschel": {
      term: "Abraham Joshua Heschel",
      kind: "JEWISH THEOLOGIAN · 1907–1972",
      plain: "Rabbi and scholar whose book The Prophets reshaped modern reading of prophetic literature.",
      body: "A Jewish voice, not a Christian one — included here as a conversation partner. His central claim is that the prophets are not detached moralists: they experience the world's injustice as something that matters intensely to God. He escaped Nazi Europe, lost most of his family in the Holocaust, and later marched at Selma with Martin Luther King Jr."
    },

    "united-monarchy": {
      term: "c. 1050–930 BC",
      kind: "DATING NOTE · CONVENTIONAL RECONSTRUCTION",
      plain: "The traditional dates for Saul, David and Solomon, ending with the division of the kingdom.",
      body: "These are conventional reconstructions, not archival dates. The scale and political reach of David's and Solomon's kingdom are genuinely debated — some read a modest hill-country chiefdom, others a substantial regional state. The Tel Dan Stele gives later extrabiblical evidence for a dynasty remembered as the House of David; the size of the tenth-century kingdom remains argued."
    },

    "monarchy": {
      term: "monarchy",
      kind: "POLITICAL STRUCTURE · THE ANCIENT NORM",
      plain: "Rule by a king, usually hereditary, usually claiming divine sanction.",
      body: "Israel did not invent it and was surrounded by it. Ancient kings typically claimed divine favor, military authority, control of land, rights to taxation and labor, temple patronage and dynastic succession. What is unusual about Israel is not the institution but the internal critique it develops: the king is never beyond judgment."
    },

    "anointing": {
      term: "anointing",
      kind: "HEBREW מָשַׁח · MASHACH",
      plain: "Pouring oil on someone to mark them as set apart for a role.",
      body: "Priests and kings were anointed. It is a public, physical act of designation — the person is now bearing an office, not merely holding an opinion of themselves. The noun formed from it, mashiach, is the word that becomes “messiah.”"
    },

    "mashiach": {
      term: "mashiach · messiah",
      kind: "HEBREW מָשִׁיחַ · “ANOINTED ONE”",
      plain: "Originally a royal title, later the name for a hoped-for deliverer.",
      body: "Saul and David are each called YHWH's anointed. Only later, especially after the monarchy fails and exile comes, does the word gather the weight of future hope. Translated into Greek it becomes Christos — so “Christ” is not a surname but a royal claim: Anointed One."
    },

    "dynasty": {
      term: "dynasty",
      kind: "TERM · HEREDITARY RULE",
      plain: "A line of rulers from one family, with power passing by descent.",
      body: "Dynastic succession is what 2 Samuel 7 promises David — a house, not merely a reign. It is also what makes kingship structurally different from the judges: authority now transfers by birth rather than by crisis and calling."
    },

    "davidic-covenant": {
      term: "the Davidic covenant",
      kind: "2 SAMUEL 7:8–17",
      plain: "God's promise that David's house and throne will endure.",
      body: "Unlike Sinai, this promise is not framed as conditional on Israel's obedience. It becomes one of the deepest threads in Jewish messianic hope and in Christian claims about Jesus — and it sits, uncomfortably and deliberately, only a few chapters before David's worst act."
    },

    "divine-right": {
      term: "divine right",
      kind: "TERM · ANCIENT AND EARLY MODERN",
      plain: "The claim that a ruler's authority comes directly from God and is therefore beyond human challenge.",
      body: "The ancient world routinely made some version of it, and Christian Europe revived it in a stronger form. Israel's prophetic tradition cuts against it: Nathan can walk into the throne room and indict the king. Authority from God, in the biblical version, means accountable to God."
    },

    "nabi": {
      term: "nabi' · prophet",
      kind: "HEBREW נָבִיא",
      plain: "One who speaks God's word into the present — including to kings.",
      body: "Not primarily a predictor of the future. The prophet's characteristic act is confrontation and address: naming what is actually happening. Nathan's “You are the man” is one of the most politically radical sentences in ancient literature, because it assumes the king can be judged."
    },

    "tel-dan-stele": {
      term: "the Tel Dan Stele",
      kind: "ARAMAIC INSCRIPTION · 9th CENTURY BC",
      plain: "A victory inscription found in northern Israel that appears to name the “House of David.”",
      body: "Discovered in 1993 and dated roughly a century after Solomon. It is not evidence about the size of David's kingdom, but it is widely taken as extrabiblical evidence that a dynasty bearing David's name was recognized by Israel's neighbors."
    },

    "mesha-stele": {
      term: "the Mesha Stele",
      kind: "MOABITE INSCRIPTION · 9th CENTURY BC",
      plain: "A Moabite king's victory monument, crediting his god with military success.",
      body: "Later than David and Solomon, but it illustrates the regional world precisely: kings routinely attributed victory and defeat to their national gods, in language that reads much like parts of the Hebrew Bible. It is why the projection question keeps returning."
    },

    "chrysostom": {
      term: "John Chrysostom",
      kind: "PREACHER AND BISHOP · c. AD 347–407",
      plain: "The most celebrated preacher of the early Greek church, later bishop of Constantinople.",
      body: "The name is a nickname — “golden-mouthed.” He preached on David at length and refused the two easy options: he neither excuses the sin nor discards the man. What makes David exemplary in his reading is repentance and divine mercy, not innocence. He was also exiled for preaching against imperial luxury, which is Nathan's role in a later century."
    },

    "libido-dominandi": {
      term: "libido dominandi",
      kind: "LATIN · AUGUSTINE, CITY OF GOD",
      plain: "The lust to dominate — the desire to have power over others.",
      body: "Augustine uses it to describe what drives empires, and he applies it to Rome without flinching. Two cities, organized by two loves: one by love of God, one by love of self extending into mastery of others. It connects Babel, David's throne, Rome and eventually the church's own acquisition of power."
    },

    "brueggemann": {
      term: "Walter Brueggemann",
      kind: "MODERN BIBLICAL THEOLOGIAN · 1933–2025",
      plain: "An Old Testament scholar known for work on prophetic imagination and royal consciousness.",
      body: "A modern scholar, not a Church Father. His enduring contribution to this course's frame is the contrast between royal consciousness — the mindset of managed abundance, security and control that a court generates — and prophetic imagination, which refuses to accept that arrangement as the only possible world."
    },

    "settlement-tradition": {
      term: "Covenant & Settlement Traditions",
      kind: "LATE SECOND MILLENNIUM BC · DATING AND SCALE DEBATED",
      plain: "The biblical traditions of Sinai, covenant, and Israel's arrival in Canaan.",
      body: "How Israel actually emerged in Canaan is one of the most argued questions in biblical archaeology — military invasion, gradual infiltration, internal social transformation, or some mixture. This course keeps the narrative claims of Joshua and Judges distinct from modern historical reconstruction rather than silently treating them as identical."
    },

    "origen": {
      term: "Origen",
      kind: "TEACHER AND BIBLICAL SCHOLAR · c. AD 185–253",
      plain: "The most prolific biblical interpreter of the early church, based in Alexandria and later Caesarea.",
      body: "He was openly troubled by Scripture's violent texts and read Israel's wars spiritually — as struggle against sin and destructive powers rather than a pattern for Christians to imitate. His governing conviction was that Scripture must be read in a way worthy of Christ. Some of his speculative views were later condemned; his influence on Christian reading of the Old Testament survived anyway."
    },

    "hammurabi": {
      term: "the Code of Hammurabi",
      kind: "BABYLONIAN LAW CODE · c. 1750 BC",
      plain: "A long collection of laws carved on a stone stele, several centuries older than Sinai.",
      body: "The stele's top shows the king receiving authority from a god. Its contents — property, injury, marriage, debt, restitution — cover much of the same ground as biblical law, graded by social rank, and include a version of proportional retaliation. Torah enters a world where legal culture was already ancient."
    },

    "ane-law": {
      term: "ancient Near Eastern law",
      kind: "LEGAL WORLD · FROM c. 2100 BC",
      plain: "The wider body of law codes and treaty forms Israel's law shares a world with.",
      body: "Ur-Nammu, Lipit-Ishtar, Hammurabi, Hittite statutes and Middle Assyrian rulings all predate or parallel biblical law. Sinai's covenant even follows the shape of a suzerain treaty: the great king identified, his acts recounted, stipulations, witnesses, blessings and curses. Shared form is not borrowed theology — but it does mean Torah was legible to its own era."
    },

    "lex-talionis": {
      term: "lex talionis",
      kind: "LATIN · “LAW OF RETALIATION”",
      plain: "The principle of proportional response — eye for eye, tooth for tooth.",
      body: "It appears in Babylonian law before it appears in Torah. Read against unlimited vengeance rather than against the Sermon on the Mount, it functions as a ceiling: the response may not exceed the injury. This course treats it as real restraint and not as the destination — Jesus moves past limitation entirely."
    },

    "purity": {
      term: "purity",
      kind: "HEBREW טָהוֹר / טָמֵא · CLEAN / UNCLEAN",
      plain: "A ritual category about access to sacred space — not a synonym for moral goodness.",
      body: "Childbirth, contact with a corpse, bodily fluids and certain foods render a person unclean, usually temporarily, and often through something entirely ordinary or good. Confusing clean/unclean with good/evil has produced real damage — shame attached to bodies rather than to conduct. Jesus' habit of touching the unclean, and healing moving outward rather than contamination moving inward, is a deliberate reversal of the expected direction."
    },

    "herem": {
      term: "herem · the ban",
      kind: "HEBREW חֵרֶם · “DEVOTED TO DESTRUCTION”",
      plain: "Something placed under a ban — set apart for God by being destroyed.",
      body: "The word stands at the center of the conquest traditions, where whole populations and their possessions are placed under it. These are among the most morally difficult texts in the Bible. This course reads them plainly first and interprets afterward, rather than softening what the text says."
    },

    "holy-war": {
      term: "holy war",
      kind: "TERM · USED OF ANCIENT AND LATER WARFARE",
      plain: "Warfare understood as commanded, led or won by a god.",
      body: "It was the normal ancient assumption, not an Israelite peculiarity: Assyrian, Moabite and Egyptian kings all credited their gods with victory in similar language. The category becomes far more dangerous once Christians hold political power — crusade rhetoric borrows this vocabulary directly."
    },

    "judges": {
      term: "the judges",
      kind: "HEBREW שֹׁפְטִים · SHOFETIM",
      plain: "Tribal deliverers and leaders in the period between the settlement and the monarchy.",
      body: "Less courtroom officials than charismatic military leaders raised up in crisis. The book named after them is deliberately disturbing: the cycles deteriorate, the deliverers grow more compromised, and it ends in sexual brutality and tribal civil war. Israel's own literature preserves the indictment."
    },

    "torah": {
      term: "Torah",
      kind: "HEBREW תּוֹרָה · INSTRUCTION, TEACHING",
      plain: "Israel's covenant instruction — and the name for the first five books of the Bible.",
      body: "The root has to do with pointing or showing the way; the word covers teaching and direction as much as legislation. Rendering it only as “law” makes it sound like a statute book, when much of its work is formative: what a rescued people is being taught about how to live."
    },

    "hesed": {
      term: "hesed",
      kind: "HEBREW חֶסֶד · STEADFAST LOVE",
      plain: "Loyal love, mercy, steadfastness, covenant faithfulness — no single English word carries it.",
      body: "It is what covenant partners owe each other, and what God keeps extending when Israel does not reciprocate. Translators reach for “lovingkindness,” “mercy,” “steadfast love,” all partial. It becomes the prophets' word for what covenant faithfulness actually looks like in practice."
    },
    "redemption": {
      term: "redemption",
      kind: "HEBREW גָּאַל · GA'AL",
      plain: "To reclaim, rescue, release, or act on behalf of someone trapped in loss or bondage.",
      body: "Concrete before it is abstract. A go'el was the relative obligated to buy back a family member's land or freedom — so the word arrives in Scripture as economic and legal rescue, not as a metaphor. Every later theological use is standing on that."
    },

    "plague": {
      term: "plague",
      kind: "HEBREW · “BLOW,” “STRIKE”",
      plain: "The escalating series of disasters in Exodus 7–12 that dismantle Egypt's security.",
      body: "Several correspond to features of Egyptian life and religion — the Nile, livestock, the sun — which is why many readers see them as a contest over who actually governs the natural order. That reading does not dissolve the moral difficulty of who suffers, and this course does not pretend it does."
    },

    "hardening": {
      term: "hardening of heart",
      kind: "EXODUS 7–14",
      plain: "The text's language for Pharaoh's growing inability to relent — sometimes attributed to Pharaoh, sometimes to God.",
      body: "Exodus preserves both without resolving them, and the shift is not tidy. One reading worth holding: repeated refusal can become character, so what is chosen often enough eventually becomes what one is. In Hebrew idiom the heart is the seat of will and thought, not feeling."
    },

    "mlk": {
      term: "Martin Luther King Jr.",
      kind: "PASTOR AND CIVIL RIGHTS LEADER · 1929–1968",
      plain: "An American Baptist minister who made Exodus a central biblical grammar for the movement against segregation.",
      body: "He drew constantly on the language of Egypt, wilderness and promised land, while insisting that liberation must not reproduce the hatred it opposes. He belongs in a course on Christian history partly because he shows a biblical story still forming consciousness three thousand years after it was told."
    },

    "liberation-theology": {
      term: "liberation theology",
      kind: "MOVEMENT · FROM THE 1960s",
      plain: "Theology that begins from the situation of the poor and oppressed and reads Scripture — especially Exodus — from there.",
      body: "It emerged most prominently in Latin America. Its central claim is that God is not neutral about oppression; its central risk is collapsing God's justice into one group's political interest. Both the claim and the risk are already present in Exodus itself."
    },

    "exodus-tradition": {
      term: "Exodus Tradition",
      kind: "EXODUS 1–15 · DATING AND SCALE DEBATED",
      plain: "Israel's founding memory of liberation from Egypt — a theological narrative whose historical scale and date are genuinely disputed.",
      body: "Proposals cluster around the thirteenth century BC, and estimates of how many people left range from a vast nation to a much smaller group whose story became the whole people's story. Egyptian records do not mention it, which is unsurprising for a document culture that recorded victories. This course distinguishes what Exodus claims theologically from claims about exact historical reconstruction — and treats the theological claim as the reason the text exists."
    },

    "pharaoh": {
      term: "Pharaoh",
      kind: "EGYPTIAN RULER · TITLE, NOT A NAME",
      plain: "Egypt's king, understood as divine or semi-divine and responsible for maintaining cosmic and social order.",
      body: "Exodus never gives him a personal name, which may be deliberate: he functions as a type rather than an individual. In Egyptian theology he upheld ma'at, right order — which is precisely the claim Exodus contests by telling the story from the brick pits."
    },

    "passover": {
      term: "Passover",
      kind: "HEBREW פֶּסַח · PESACH",
      plain: "Israel's annual remembrance of liberation from slavery in Egypt — the central festival of the Jewish year.",
      body: "The meal is a memory practice: participants speak as though they themselves were brought out. Christian tradition later reads Jesus' death through Passover imagery, and that reading is richer when the feast's own meaning is kept first — this is a liberation festival before it is anything else."
    },

    "monotheism": {
      term: "monotheism",
      kind: "TERM · ONE GOD",
      plain: "The conviction that only one God exists.",
      body: "Abraham is not introduced as a philosopher who has worked this out. Joshua 24:2 remembers his ancestors as serving other gods, and Israel's earliest material reads more like exclusive allegiance to one God than a denial that other divine beings exist. The philosophical form of the claim develops later."
    },

    "faith-emunah": {
      term: "faith",
      kind: "HEBREW אֱמוּנָה · EMUNAH",
      plain: "Firmness, reliability, faithfulness, trust — leaning your weight onto something.",
      body: "Not primarily assent to a set of statements. The word's root suggests something solid enough to hold you; the noun can describe God's own reliability as easily as a person's trust. Abraham's faith arrives long before creeds, doctrinal systems, or Israel."
    },

    "kierkegaard": {
      term: "Søren Kierkegaard",
      kind: "DANISH PHILOSOPHER · 1813–1855",
      plain: "A Christian thinker who used Abraham and Genesis 22 to explore what faith actually costs.",
      body: "Fear and Trembling circles Genesis 22 without resolving it, and that is deliberate: Kierkegaard wants readers to feel how far Abraham stands outside ordinary ethical reasoning rather than to explain him. He is included here to sharpen the tension, not to settle it."
    },

    "typology": {
      term: "typology",
      kind: "INTERPRETIVE METHOD",
      plain: "Reading an earlier biblical figure or event as prefiguring a later one — Isaac and Christ, Passover and the cross.",
      body: "Early Christians used it constantly. The discipline it requires: a typological resonance is a later reading looking back, not a claim that the earlier text's original meaning was a prediction. Genesis 22 meant something to its first readers before anyone connected it to Golgotha."
    },

    "patriarchal-narrative": {
      term: "Patriarchal Narrative",
      kind: "GENESIS 12–50 · DATING DEBATED",
      plain: "The stories of Abraham, Isaac, Jacob and Joseph — a narrative world rather than a datable stretch of history.",
      body: "Scholars debate both when these traditions took written shape and whether they can be placed in a specific century; proposals for Abraham range across most of the second millennium BC. The details of household religion, migration, treaty-making and herding fit an ancient Near Eastern setting well. This course treats the narrative world as real and the precise dating as genuinely open."
    },

    "patriarch": {
      term: "patriarch",
      kind: "TERM · GREEK “FOUNDING FATHER”",
      plain: "The name tradition gives to Abraham, Isaac and Jacob as the founding ancestors of Israel.",
      body: "The word describes their place in the story, not an endorsement of the social order around them. These narratives assume a world of male household authority, plural wives, concubines and inherited status — and they often report its damage without comment."
    },

    "election": {
      term: "election",
      kind: "THEOLOGICAL TERM",
      plain: "God's choosing of a particular person or people for a particular purpose.",
      body: "Genesis 12 attaches the choice to a purpose in the same breath: blessing for all the families of the earth. Read that way, election is vocation rather than favoritism — a distinction Israel and the church both keep losing and recovering."
    },

    "circumcision": {
      term: "circumcision",
      kind: "HEBREW בְּרִית מִילָה · GENESIS 17",
      plain: "The covenant sign given to Abraham's household — a permanent mark on the body.",
      body: "Practiced by several ancient peoples, given covenant meaning here. It matters that the sign arrives after the promise, not before it, and that Paul makes exactly that argument in Romans 4: Abraham was counted righteous while still uncircumcised."
    },

    "babel": {
      term: "Babel",
      kind: "HEBREW בָּבֶל · GENESIS 11",
      plain: "The Hebrew name for Babylon — and, in Genesis, a pun.",
      body: "Babylonian tradition read the name as bab-ilu, \"gate of god.\" Genesis hears the Hebrew verb balal, to confuse, and turns the greatest city in the world into a stammer. The story is therefore about language and about imperial ambition at the same time."
    },

    "ziggurat": {
      term: "ziggurat",
      kind: "MESOPOTAMIAN TEMPLE TOWER · FROM c. 2100 BC",
      plain: "A massive stepped tower built as a stairway between earth and heaven, with a shrine at the top.",
      body: "Ur, Uruk, Nippur and Babylon all had one. They were not observatories or tombs but meeting-points: the god was thought to descend the stairs to the shrine. Babel takes the region's proudest architecture and reads it as a story about human self-securing."
    },
    "scapegoat": {
      term: "scapegoat",
      kind: "TERM · LEVITICUS 16 AND AFTER",
      plain: "A victim who carries away a community's guilt — originally a literal goat driven into the wilderness on the Day of Atonement.",
      body: "The word has since become a name for a social mechanism: a group under pressure discharges its tension onto one person or minority, and feels unity and relief afterward. Cain's story is the Bible's first hint of it. This course develops the idea properly at the cross."
    },
    "empire": {
      term: "empire",
      kind: "TERM USED THROUGHOUT THIS COURSE",
      plain: "A political order that secures itself by dominating others — and usually explains that domination as divinely sanctioned.",
      body: "Assyria, Babylon, Persia, Greece and Rome all shape the biblical story, and Babel is the Bible's early portrait of the type. What this course watches for is the moment empire becomes a religious idea: our security, our name, our permanence, blessed from above."
    },
    "divine-judgment": {
      term: "divine judgment",
      kind: "THEOLOGICAL TERM",
      plain: "God's decisive response to evil — in the biblical texts sometimes described as destruction, sometimes as exposure, sometimes as letting consequences run.",
      body: "The Bible uses several models and does not harmonize them. This course holds the question open rather than settling it early: how much of a judgment scene reveals God's action, and how much reveals the ancient framework through which catastrophe was interpreted?"
    },
    "noahic-covenant": {
      term: "the covenant with Noah",
      kind: "GENESIS 9:8–17",
      plain: "God's promise after the flood, made not only with Noah's family but with every living creature.",
      body: "It is one-sided: no conditions are placed on the animals, and none on humanity for the promise to hold. The sign is a weapon — a bow — hung up in the sky. Later covenants at Sinai and with David are far more conditional; this one is not."
    },
    "ephrem": {
      term: "Ephrem the Syrian",
      kind: "DEACON AND POET · c. AD 306–373",
      plain: "A Syriac Christian who did nearly all his theology in hymns and verse rather than argument.",
      body: "He wrote in Syriac, close to the Aramaic Jesus spoke, and reads Scripture symbolically and musically — holding several meanings at once rather than reducing a story to one literal dimension. His hymns were sung by choirs of women he trained, and much of Eastern Christian theology reaches ordinary people through work like his."
    },

    "primeval-story": {
      term: "the primeval story",
      kind: "GENESIS 1–11",
      plain: "The opening eleven chapters of Genesis, which function as primordial theological narrative rather than ordinary dated history.",
      body: "Creation, the garden, Cain, the flood, Babel. These chapters deal with origins, universals and the human condition as such — no named kings, no datable events, no archive. From Genesis 12 onward the story narrows to one family and begins to look far more like ordinary ancient history. Reading chapters 1–11 as reportage asks them for something they never offered."
    },
    "satan": {
      term: "Satan",
      kind: "HEBREW שָׂטָן · “ADVERSARY,” “ACCUSER”",
      plain: "A Hebrew term meaning adversary or accuser. The fully developed figure familiar from later Christianity emerges across later biblical and post-biblical traditions.",
      body: "In Job the satan is a member of the heavenly court performing a prosecutorial role, with the definite article — a job description more than a name. The serpent of Genesis 3 is never called Satan inside Genesis. The identification is made by later Jewish and Christian readers, and by the New Testament period it is widespread. Noticing where an idea enters the tradition is not the same as denying it."
    },
    "the-fall": {
      term: "the Fall",
      kind: "THEOLOGICAL TERM · NOT A BIBLICAL PHRASE",
      plain: "The name Christian tradition gives to the events of Genesis 3 and their consequences for humanity.",
      body: "Genesis 3 never uses the word. The term carries a particular reading with it — a height from which something dropped — which is exactly what the two interpretations in this lesson disagree about. This course keeps using the word because everyone else does, while staying aware of what it presumes."
    },
    "original-sin": {
      term: "original sin",
      kind: "WESTERN DOCTRINAL TERM",
      plain: "The teaching that Adam's sin affects every human being who follows, so that we are born into a damaged condition rather than a neutral one.",
      body: "The phrase is not in Genesis or in Paul. It develops over centuries and takes its most influential Western form in Augustine, who reads Romans 5 as teaching an inherited condition — in many later Latin formulations, inherited guilt as well. Lesson 31 takes up the doctrine properly."
    },
    "ancestral-sin": {
      term: "ancestral sin",
      kind: "EASTERN CHRISTIAN TERM",
      plain: "The Eastern Christian way of describing what Adam passes on: mortality, corruption and alienation rather than inherited legal guilt.",
      body: "On this reading we inherit a condition and a wound, not a verdict. Guilt attaches to what each person actually does — a distinction Ezekiel 18:20 also insists on. The practical difference is large: salvation is framed primarily as healing rather than as acquittal."
    },
    "concupiscence": {
      term: "concupiscence",
      kind: "LATIN CONCUPISCENTIA · DISORDERED DESIRE",
      plain: "In Augustine and later Western theology, the disordered pull of desire that remains in human beings even after baptism.",
      body: "Not desire itself, which Genesis treats as good, but desire that has come loose from its proper order — wanting rightly good things wrongly, or too much, or at another's expense. Traditions disagree sharply over whether this residue is itself sin or only the tinder for it."
    },
    "gregory-nyssa": {
      term: "Gregory of Nyssa",
      kind: "BISHOP AND THEOLOGIAN · c. AD 335–395",
      plain: "An Eastern theologian who understood salvation as endless growth into God — healing and maturing rather than a legal transaction.",
      body: "He coined the idea sometimes called epektasis: because God is infinite, the soul's movement into God never terminates, so growth is not a phase before arrival but the shape of the life itself. That keeps the Fall inside a larger story of becoming rather than making failure the final definition of humanity."
    },
    "recapitulation": {
      term: "recapitulation",
      kind: "IRENAEUS · GREEK ANAKEPHALAIŌSIS",
      plain: "Irenaeus' idea that Christ goes back over the whole course of human life and gets it right, so that humanity is summed up and restarted in him.",
      body: "Where Adam grasped, Christ trusts; where Adam hid, Christ remains open; where Adam's story ends in death, Christ's passes through it. Not merely a debt paid but a human trajectory retraced correctly — which is why Irenaeus can call Christ the second Adam without making him only a repair."
    },
    "sacred-tree": {
      term: "sacred tree",
      kind: "ANCIENT NEAR EASTERN MOTIF",
      plain: "A widespread ancient symbol of life, fertility and divine presence, often guarded, often paired with serpents in art.",
      body: "Mesopotamian seals and Assyrian reliefs are full of stylized trees flanked by guardian figures. Genesis is not borrowing a doctrine when it puts trees in a garden; it is speaking the region's visual language and then telling its own story with it."
    },
    "tree-of-life": {
      term: "the tree of life",
      kind: "GENESIS 2–3 · REVELATION 22",
      plain: "The tree in the middle of the garden associated with unending life — never prohibited, and never eaten from in the story.",
      body: "The prohibition concerns the other tree. Only after the humans grasp at knowledge is access to this one closed off, and the Bible's last chapter reopens it. Immortality-quest stories were common in the region; Gilgamesh chases one and loses it. Genesis frames the loss as relational rather than as bad luck."
    },

    "l04-dating": {
      term: "c. 500 BC – AD 100",
      kind: "DATING NOTE",
      plain: "This lesson traces the development of ideas across several centuries rather than one historical event.",
      body: "Wisdom writings, Greek philosophy, the Septuagint, Philo and the New Testament belong to different generations and different cities. Every date here is a range, and the streams overlap rather than running in single file."
    },
    "philo": {
      term: "Philo of Alexandria",
      kind: "JEWISH PHILOSOPHER · c. 20 BC – AD 50",
      plain: "A devout Jewish thinker in Alexandria who read Israel's Scriptures using Greek philosophical categories.",
      body: "He wrote a great deal about the Logos as God's ordering activity in creation and revelation. He was not a Christian and never mentions Jesus — which is precisely why he matters: the bridge between Hebrew Scripture and Greek Logos language was already standing before the New Testament was written."
    },
    "stoicism": {
      term: "Stoicism",
      kind: "GREEK PHILOSOPHICAL SCHOOL · FROM c. 300 BC",
      plain: "A philosophy that saw the cosmos as ordered by a rational principle — the Logos — and taught human beings to live in accordance with it.",
      body: "Stoics were not thinking about Jesus or Israel. They were asking what makes the universe intelligible and what makes a life virtuous. Paul quotes a Stoic-flavored line at Athens, and early Christians borrowed Stoic vocabulary freely."
    },
    "hellenism": {
      term: "Hellenism",
      kind: "CULTURAL WORLD · FROM c. 330 BC",
      plain: "The spread of Greek language, education, cities and thought across the eastern Mediterranean and Near East after Alexander.",
      body: "It is the reason a Galilean movement could be explained in Greek from Jerusalem to Rome within a generation. Jewish responses to it ranged from enthusiastic synthesis to armed revolt."
    },
    "koine": {
      term: "Koine Greek",
      kind: "GREEK κοινή · “COMMON”",
      plain: "The simplified, widely shared Greek of the Hellenistic and Roman world — the language the New Testament is written in.",
      body: "Not the polished Greek of Plato but the working language of trade, letters and administration across the eastern empire. A shared second language made the message portable."
    },
    "wisdom-tradition": {
      term: "the Wisdom tradition",
      kind: "BIBLICAL STREAM · PROVERBS, JOB, ECCLESIASTES AND MORE",
      plain: "Israel's writings about how life actually works — observation, proverb, argument and reflection rather than law or prophecy.",
      body: "Its most striking move is to personify Wisdom as a figure present with God at creation (Proverbs 8), which gave early Christians ready-made Jewish language for speaking about someone through whom the world was made."
    },
    "preexistence": {
      term: "preexistence",
      kind: "THEOLOGICAL TERM",
      plain: "The claim that the one Christians meet in Jesus did not begin to exist at his birth but was already with God.",
      body: "The New Testament states it in several ways — Logos, image, Son through whom all things were made — without offering a philosophical mechanism. The councils of the fourth and fifth centuries are largely arguments about how to say it precisely."
    },
    "logoi": {
      term: "logoi",
      kind: "GREEK · PLURAL OF LOGOS",
      plain: "In Maximus the Confessor, the inner meaning or divine purpose of each created thing.",
      body: "Every creature has its own logos, and all of them are held together in the one Logos, Christ. Creation is therefore not a pile of unrelated objects but a coherence — which makes attention to any created thing a way toward its source."
    },
    "maximus": {
      term: "Maximus the Confessor",
      kind: "MONK AND THEOLOGIAN · c. AD 580–662",
      plain: "An Eastern Christian thinker who developed a vision of creation as held together by Christ, the Logos.",
      body: "He was mutilated and exiled for refusing an imperial theological compromise — the title \"Confessor\" records that. His cosmic Christology is among the most ambitious in Christian tradition."
    },
    "alexandria": {
      term: "Alexandria",
      kind: "CITY · EGYPT, FOUNDED 331 BC",
      plain: "The great Greek-speaking intellectual center of the ancient Mediterranean, with a very large Jewish community.",
      body: "Its library, its philosophers and its Greek-speaking synagogues made it the place where Hebrew Scripture and Greek thought met most intensively — the Septuagint and Philo both come from here, and later Origen, Clement and Athanasius."
    },
    "fullness-of-time": {
      term: "the fullness of time",
      kind: "GREEK πλήρωμα τοῦ χρόνου · GALATIANS 4:4",
      plain: "Paul's phrase for the moment at which God sent his Son — a time described as full, ripe, complete.",
      body: "The text does not explain what made it full. This course treats that gap as an invitation rather than a settled answer: was it only a date on a divine calendar, or a world that had become capable of receiving and carrying the message?"
    },
    "christology": {
      term: "Christology",
      kind: "TERM · THINKING ABOUT CHRIST",
      plain: "The part of Christian theology that asks who Jesus is and how he is related to God, humanity and creation.",
      body: "The New Testament contains several developed Christologies rather than one formula. The high Christologies of John, Colossians and Hebrews are the ones this lesson follows."
    },
    "polytheism": {
      term: "polytheism",
      kind: "TERM · MANY GODS",
      plain: "The belief that many gods exist, usually with different domains, personalities and territories.",
      body: "The normal religious assumption of the ancient world. Storm, sea, grain, war, fertility and death could each have their own divine power to be reckoned with."
    },
    "pantheon": {
      term: "pantheon",
      kind: "TERM · GREEK “ALL THE GODS”",
      plain: "The full set of gods a culture recognized, often ranked like a royal household.",
      body: "Pantheons usually had a high god, a consort, active younger gods and lesser servants — a divine society organized much like the human one below it."
    },
    "monolatry": {
      term: "monolatry",
      kind: "TERM · WORSHIP OF ONE",
      plain: "Worshipping one god exclusively without necessarily denying that others exist.",
      body: "Many scholars read Israel's earliest material this way: the command is allegiance to YHWH alone, not yet a philosophical statement that no other divine beings exist."
    },
    "henotheism": {
      term: "henotheism",
      kind: "TERM · ONE ABOVE MANY",
      plain: "Devotion to one supreme god while accepting a wider divine world beneath it.",
      body: "A useful category for texts that praise YHWH as greater than all gods rather than as the only being of that kind. The distinction between this and monolatry is debated."
    },
    "divine-council": {
      term: "divine council",
      kind: "BIBLICAL IMAGE · e.g. PSALM 82, JOB 1",
      plain: "A heavenly assembly in which God is pictured presiding over other divine beings.",
      body: "The image is shared with Canaanite and Mesopotamian texts. Biblical writers use it and then subvert it: in Psalm 82 the other members are judged and stripped of standing."
    },
    "cuneiform": {
      term: "cuneiform",
      kind: "WRITING SYSTEM · FROM c. 3000 BC",
      plain: "Wedge-shaped marks pressed into wet clay — the world's first writing.",
      body: "Developed in Sumer for accounting, then used for law, myth, letters, astronomy and epic. Because clay survives fire, we can read the religious world Israel was born into in its own words."
    },
    "covenant": {
      term: "covenant",
      kind: "HEBREW בְּרִית · BERIT",
      plain: "A binding, formal relationship with obligations on both sides.",
      body: "Israel's covenant language borrows the shape of ancient treaties between a great king and a lesser one. What is unusual is not the form but the claim that God binds himself to obligations within it."
    },
    "maat": {
      term: "ma'at",
      kind: "EGYPTIAN CONCEPT",
      plain: "Order, justice, balance — the right arrangement of the cosmos and of society.",
      body: "Pharaoh's duty was to uphold ma'at; chaos was its opposite. Egyptian religion was less about appeasing appetites than maintaining a rightly ordered world."
    },
    "marduk": {
      term: "Marduk",
      kind: "BABYLONIAN HIGH GOD",
      plain: "Babylon's patron god, who rises to the top of the pantheon as Babylon rises to power.",
      body: "In Enuma Elish he defeats the sea-goddess Tiamat and builds the world from her body. His status and his city's status move together — a clear case of the heavens mirroring the map."
    },
    "baal": {
      term: "Baal",
      kind: "CANAANITE STORM GOD",
      plain: "The rain-and-storm god of Canaan — and therefore the god of whether the crops live.",
      body: "The title means \"lord\" or \"master.\" In an agricultural world dependent on unreliable rainfall, Baal was the most practically urgent god in the region, which is why the Hebrew Bible argues with him so often."
    },
    "el-canaan": {
      term: "El",
      kind: "CANAANITE HIGH GOD · ALSO A HEBREW WORD FOR GOD",
      plain: "The aged father-god at the head of the Canaanite pantheon — and a word the Hebrew Bible uses for God.",
      body: "\"Israel\" itself contains the name. The overlap in vocabulary is one of the clearest signs that Israel's language for God grew inside the Canaanite world rather than apart from it."
    },
    "asherah": {
      term: "Asherah",
      kind: "CANAANITE GODDESS",
      plain: "A mother-goddess, in Ugaritic texts the consort of El.",
      body: "Archaeology has found Asherah imagery in Israelite contexts, and the prophets denounce it repeatedly — evidence that Israel's practice was often more mixed than its official texts prescribe."
    },
    "atrahasis": {
      term: "Atrahasis",
      kind: "BABYLONIAN EPIC · c. 18th CENTURY BC",
      plain: "A Mesopotamian story in which the gods send a flood and one man builds a boat.",
      body: "Humans are made to do the gods' labor; their noise disturbs the gods; a flood follows; a survivor's sacrifice pleases the hungry gods afterward. Genesis 6–9 shares the shape and changes the reasons."
    },
    "gilgamesh": {
      term: "Epic of Gilgamesh",
      kind: "MESOPOTAMIAN EPIC · WRITTEN FORM c. 2100 BC",
      plain: "The best-known literature of the ancient world — a king's search for meaning in the face of death.",
      body: "Tablet XI contains a flood account closely related to Atrahasis and to Genesis. It was being copied by scribes for over a thousand years before Israel existed."
    },
    "akhenaten": {
      term: "Akhenaten",
      kind: "PHARAOH · c. 1353–1336 BC",
      plain: "The Egyptian king who elevated one god, the sun-disc Aten, and suppressed the other cults.",
      body: "His experiment lasted barely a generation and was undone after his death. It shows that something like exclusive devotion was thinkable in the ancient world — and how hard it was to sustain."
    },
    "justin-martyr": {
      term: "Justin Martyr",
      kind: "PHILOSOPHER AND MARTYR · c. AD 100–165",
      plain: "An early Christian who argued that pagan philosophers had glimpsed real truth.",
      body: "He taught that the Logos fully revealed in Christ had scattered seeds of itself through human thought — so Socrates was, in his phrase, a Christian before Christ. He was executed in Rome."
    },
    "clement-alexandria": {
      term: "Clement of Alexandria",
      kind: "TEACHER · c. AD 150–215",
      plain: "An early Christian who called Greek philosophy a tutor that prepared the Greeks, as the law prepared Israel.",
      body: "He read widely in pagan literature and quoted it freely, on the principle that all truth belongs to God wherever it is found."
    },
    "logos-spermatikos": {
      term: "logos spermatikos",
      kind: "GREEK · “SEED OF THE WORD”",
      plain: "Justin Martyr's idea that fragments of divine reason are scattered through all human thought.",
      body: "A Stoic term repurposed: whatever anyone anywhere sees truly, they see by the same Logos that becomes flesh in Christ. It is the earliest Christian framework for taking non-biblical insight seriously."
    },
    "shema": {
      term: "Shema",
      kind: "HEBREW שְׁמַע · “HEAR”",
      plain: "Israel's foundational confession, named for its first word: \"Hear, O Israel.\"",
      body: "Recited twice daily in Jewish practice. Jesus quotes it as the first and greatest commandment. It begins not with a definition of God but with a demand for attention and allegiance."
    },
    "projection": {
      term: "projection",
      kind: "TERM USED THROUGHOUT THIS COURSE",
      plain: "Imagining God through the categories, fears and social structures we already know.",
      body: "Naming the tendency does not settle whether God exists or whether Scripture reveals him. It gives us a working question: when are we seeing something true about God, and when are we seeing ourselves reflected back?"
    },
    "biblical-dating": {
      term: "c. 1000 BC – AD 100",
      kind: "DATING NOTE",
      plain: "The written composition of the biblical library spans roughly a millennium.",
      body: "Dates for individual books and traditions are debated, and some material preserves much earlier oral traditions. Every date in this course should be read as a range rather than a fixed point."
    },
    "genre": {
      term: "genre",
      kind: "TERM · LITERARY FORM",
      plain: "The kind of writing a text is — and therefore the kind of reading it expects from us.",
      body: "We do this instinctively with a contract, a text message and a song lyric. Ancient readers did it too. Asking a genre for something it never offered is where most misreadings begin."
    },
    "canon": {
      term: "canon",
      kind: "GREEK κανών · MEASURING ROD",
      plain: "The collection of writings a religious community recognizes as Scripture.",
      body: "The word originally names a carpenter's rule — a standard. Which books belong was recognized gradually, through use in worship and teaching, rather than settled at a single meeting. Lesson 24 takes this up properly."
    },
    "oral-tradition": {
      term: "oral tradition",
      kind: "TERM · HOW MATERIAL TRAVELS BEFORE WRITING",
      plain: "Stories, teachings, songs and genealogies passed person to person before — or alongside — being written down.",
      body: "In a largely non-literate world this was not casual rumor but trained, communal memory, often in forms built to be remembered: rhythm, repetition, verse. Much biblical material circulated this way for generations."
    },
    "apocalyptic": {
      term: "apocalyptic",
      kind: "GENRE · GREEK “UNVEILING”",
      plain: "A symbolic ancient genre that portrays earthly conflict through visions, beasts, angels, cosmic imagery and dramatic numbers.",
      body: "It typically arises among people under pressure from an empire, and it says out loud what could not be said safely in plain speech. Daniel 7–12 and Revelation are the biblical examples; the first readers knew who the beasts were."
    },
    "inspiration": {
      term: "inspiration",
      kind: "DOCTRINAL TERM",
      plain: "The Christian belief that God works through Scripture in a unique way.",
      body: "Christian traditions agree on the conviction and differ on the mechanism — how exactly divine action and genuine human authorship fit together. This lesson raises that question rather than settling it."
    },
    "graphe": {
      term: "Scripture",
      kind: "GREEK γραφή · “WRITING”",
      plain: "In the New Testament, graphē simply means “the writing” — but used absolutely, it means the sacred writings.",
      body: "When Paul or Jesus says \"the Scripture says,\" the word is ordinary. What is not ordinary is the definite article: among all writings, these are the ones the community reads as addressing it from God."
    },
    "historiography": {
      term: "ancient historiography",
      kind: "TERM · HOW HISTORY WAS WRITTEN",
      plain: "Ancient history-writing selected and shaped events to make a point, and did not pretend otherwise.",
      body: "This is not the same as fabrication. It is closer to how a documentary or a memoir works than to a wire-service report — and every ancient historian, biblical or not, wrote this way."
    },
    "hebrews-homily": {
      term: "Hebrews",
      kind: "NEW TESTAMENT BOOK · c. AD 60–90",
      plain: "Grouped with the letters, but it reads more like a theological sermon than ordinary correspondence.",
      body: "It has no opening greeting, no named author, and calls itself a \"word of exhortation\" — the phrase used elsewhere for a synagogue sermon. Only the last few lines look like a letter."
    },
    "origen": {
      term: "Origen",
      kind: "TEACHER OF ALEXANDRIA · c. AD 185–254",
      plain: "The most learned Christian reader of the first three centuries, and the one who insisted Scripture has depth beneath its surface.",
      body: "He produced the first critical edition of the Old Testament and the first systematic theology. His rule: a difficult passage is an invitation to read more carefully, not an embarrassment to explain away."
    },
    "enuma-elish": {
      term: "Enuma Elish",
      kind: "BABYLONIAN CREATION POEM · c. 1100 BC",
      plain: "Babylon's creation story — the best-known one in the ancient world, and the one Genesis' first readers would have grown up hearing.",
      body: "Named for its opening words (\"When on high…\"). The gods fight; the storm-god Marduk kills the sea-goddess Tiamat and builds the world out of her body; humans are then made from the blood of a defeated god so the gods can stop doing manual labor. It was recited publicly at Babylon's New Year festival. Genesis 1 answers the same questions and gives opposite answers."
    },
    "babylon": {
      term: "Babylon",
      kind: "CITY · SOUTHERN IRAQ TODAY",
      plain: "The dominant city-empire of the ancient Near East, and later the place Judah was carried into exile.",
      body: "Roughly where Baghdad is now. Powerful, literate, and religiously confident. Judah's leaders were deported there in 587 BC — which is why Babylonian ideas show up in the background of so much Old Testament writing."
    },
    "mesopotamia": {
      term: "Mesopotamia",
      kind: "REGION · GREEK FOR “BETWEEN THE RIVERS”",
      plain: "The land between the Tigris and Euphrates rivers — modern Iraq. Where cities, writing and law first appear.",
      body: "Sumer, Assyria and Babylon are all Mesopotamian. When this course says \"the ancient Near East,\" this is the center of it."
    },
    "canaan": {
      term: "Canaan",
      kind: "REGION · c. 2000–1000 BC",
      plain: "The strip of land along the eastern Mediterranean that later becomes Israel — modern Israel, Palestine, Lebanon and western Jordan.",
      body: "A crossroads between Egypt and Mesopotamia, made up of small city-states with their own gods. Israel emerges inside this world, not apart from it."
    },
    "ancient-near-east": {
      term: "the ancient Near East",
      kind: "SHORTHAND USED THROUGHOUT THIS COURSE",
      plain: "Egypt, Canaan, Mesopotamia and their neighbors — the world the Old Testament happens inside.",
      body: "Scholars use the phrase to cover roughly 3000–300 BC across that region. When a lesson says Israel's neighbors, this is who is meant."
    },
    "ugarit": {
      term: "Ugarit",
      kind: "CITY · COASTAL SYRIA, DESTROYED c. 1200 BC",
      plain: "A Canaanite city whose buried library was dug up in 1929 — our best window into what Israel's neighbors actually believed.",
      body: "Its clay tablets preserve myths of the gods El and Baal in a language closely related to Hebrew. Much of what we know about Canaanite religion comes from this one site."
    },
    "logos": {
      term: "Logos",
      kind: "GREEK WORD · λόγος",
      plain: "Greek for \"word,\" but also \"reason\" or \"the logic that holds things together.\"",
      body: "Greek philosophers used it for the rational order running through the universe. John's Gospel takes that word and says the Logos is a person — and that this person is Jesus. That move is why the term matters for this course."
    },
    "irenaeus": {
      term: "Irenaeus",
      kind: "BISHOP OF LYONS · c. AD 130–202",
      plain: "An early Christian teacher who argued that the physical world is good, against groups who called matter a mistake.",
      body: "He grew up in what is now Turkey and led the church in Lyons, France. His big book, Against Heresies, is one of the earliest surviving defenses of what became mainstream Christian belief."
    },
    "basil": {
      term: "Basil",
      kind: "BISHOP OF CAESAREA · c. AD 330–379",
      plain: "A bishop and monastic organizer who preached a famous series of sermons on the six days of creation.",
      body: "Also known as Basil the Great. He founded hospitals and poorhouses, and argued that hoarding wealth is theft from the poor — an ethic he drew straight from creation-as-gift."
    },
    "augustine": {
      term: "Augustine",
      kind: "BISHOP OF HIPPO, NORTH AFRICA · AD 354–430",
      plain: "The most influential Western theologian after Paul — and, on creation, an early opponent of reading Genesis as a science textbook.",
      body: "His Confessions and City of God shaped Western Christianity for a thousand years. He warned Christians not to make fools of themselves by insisting on readings of Genesis that the evidence contradicts."
    },
    "church-father": {
      term: "church father",
      kind: "TERM · c. AD 100–700",
      plain: "A shorthand for the earliest Christian teachers whose writings survive and shaped later belief.",
      body: "Not an office anyone held — a label historians use. When this course quotes a church father, it is quoting someone from the first few centuries, long before denominations existed."
    },
    "manichaeism": {
      term: "Manichaeism",
      kind: "RELIGIOUS MOVEMENT · FOUNDED c. AD 240",
      plain: "A rival religion that taught the universe is a war between a good spirit-world and an evil material world.",
      body: "Augustine belonged to it for nine years before rejecting it. Once you believe matter itself is evil, Genesis' insistence that the physical world is good becomes an argument, not a platitude."
    },
    "privation": {
      term: "privation",
      kind: "PHILOSOPHICAL TERM",
      plain: "The idea that evil is not a thing in its own right, but the absence or spoiling of something good.",
      body: "Like a hole in cloth: the hole is real, but it is not made of anything. Augustine used this to avoid saying God created evil."
    },
    "incarnation": {
      term: "incarnation",
      kind: "TERM · LITERALLY “BECOMING FLESH”",
      plain: "The Christian claim that God took on an actual human life in Jesus — a body, a childhood, a death.",
      body: "It is the point at which Christianity parts ways with every philosophy that treats the physical world as beneath God's attention."
    },
    "genesis": {
      term: "Genesis",
      kind: "FIRST BOOK OF THE BIBLE",
      plain: "The opening book of both the Jewish and Christian Scriptures — creation, the first families, and the ancestors of Israel.",
      body: "The name is Greek for \"origin.\" Chapters 1–11 deal with the world as a whole; from chapter 12 on, it narrows to one family."
    },
    "gospel": {
      term: "Gospel",
      kind: "TERM · LITERALLY “GOOD NEWS”",
      plain: "One of the four accounts of Jesus' life in the New Testament — Matthew, Mark, Luke and John.",
      body: "The word originally described the announcement of a royal victory. Applying it to a crucified man was, at the time, a provocation."
    },
    "second-temple": {
      term: "Second Temple period",
      kind: "ERA · 516 BC – AD 70",
      plain: "The centuries between the return from exile and the Roman destruction of the Jerusalem temple — the world Jesus is born into.",
      body: "Synagogues, the Pharisees, the Dead Sea Scrolls and the Greek translation of the Hebrew Bible all belong to this stretch."
    },
    "septuagint": {
      term: "Septuagint",
      kind: "GREEK OLD TESTAMENT · c. 250 BC",
      plain: "The Hebrew Scriptures translated into Greek, in Egypt, centuries before Jesus.",
      body: "It is the version most New Testament writers quote. Its existence is why the Christian message could travel across the Greek-speaking world without a translator."
    },
    "exile": {
      term: "the exile",
      kind: "EVENT · 587–538 BC",
      plain: "Babylon destroyed Jerusalem and deported Judah's leadership. Much of the Old Testament was written or edited in the aftermath.",
      body: "Losing the temple, the king and the land forced a hard question: is our God only a local god who lost? A great deal of Israel's most enduring theology is the answer."
    },
    "athanasius": {
      term: "Athanasius",
      kind: "BISHOP OF ALEXANDRIA · c. AD 296–373",
      plain: "The theologian who argued that the same Word through whom the world was made is the one who entered it in Christ.",
      body: "His short book On the Incarnation makes creation and incarnation one continuous act of the same Logos — which is why, for him, God taking on a body is restoration rather than rescue from matter."
    },
    "hexaemeron": {
      term: "Hexaemeron",
      kind: "GREEK · “THE SIX DAYS”",
      plain: "Basil of Caesarea's sermon series on the six days of creation, preached around AD 370.",
      body: "Part theology, part natural history: Basil talks about seeds, birds, tides and stars, and treats close attention to the created world as a form of worship."
    },
    "primeval-story": {
      term: "the primeval story",
      kind: "GENESIS 1–11 · A NARRATIVE SETTING, NOT A DATE",
      plain: "Genesis places these stories at the beginning of creation rather than inside ordinary historical chronology.",
      body: "The dates at which the texts themselves were composed, preserved and edited are debated. This course does not assign a historical date to \"creation\" — the primeval story is telling us what kind of world this is, not when the calendar starts."
    },
    "sabbath": {
      term: "Sabbath",
      kind: "HEBREW שַׁבָּת · “CEASING”",
      plain: "The seventh day, on which work stops — built into the structure of creation itself in Genesis 1.",
      body: "In Genesis the rest is God's before it is anyone's command. Later Israel receives it as law; here it appears first as the shape of a finished gift."
    },
    "raqia": {
      term: "raqia / firmament",
      kind: "HEBREW רָקִיע",
      plain: "The solid-seeming expanse over the earth that holds back the waters above in Genesis 1.",
      body: "The word suggests something hammered out or spread thin. Genesis describes the sky as its first readers experienced and imagined it — which is a clue about what kind of writing this is."
    },
    "ancient-cosmology": {
      term: "ancient cosmology",
      kind: "TERM · HOW THE ANCIENTS PICTURED THE WORLD",
      plain: "A flat earth under a domed sky, with waters above and below — the shared mental map of the ancient Near East.",
      body: "Genesis speaks inside that picture rather than correcting it. Reading it as a physics lecture asks the text for something it never offered."
    },
    "image-of-god": {
      term: "image of God",
      kind: "LATIN IMAGO DEI · GENESIS 1:26–27",
      plain: "The claim that human beings represent God within creation.",
      body: "In surrounding cultures such language could attach to kings and cult statues. Genesis extends it to humanity as such — male and female — which is where a great deal of later Christian ethics begins."
    },
    "creatio-ex-nihilo": {
      term: "creatio ex nihilo",
      kind: "LATIN · “CREATION FROM NOTHING”",
      plain: "The later Christian doctrine that God did not make the universe out of preexistent eternal matter.",
      body: "It was worked out over the first centuries of Christian thought. Genesis 1 is compatible with it but does not by itself settle the philosophical question."
    },
    "pantheism": {
      term: "pantheism",
      kind: "TERM · “ALL IS GOD”",
      plain: "The view that the universe and God are identical — no distinction between creator and creation.",
      body: "Christian theology has consistently rejected this: creation is genuinely other than God, which is what makes gift, relationship and love possible at all."
    },
    "panentheism": {
      term: "panentheism",
      kind: "TERM · “ALL IS IN GOD”",
      plain: "The view that creation exists within God, while God is more than creation.",
      body: "Different from pantheism, and closer to language some Christian traditions use — Paul's \"in him all things hold together.\" It remains a contested description rather than a defined doctrine."
    },
    "rohr": {
      term: "Richard Rohr",
      kind: "FRANCISCAN WRITER · b. 1943",
      plain: "A contemporary Catholic teacher whose framing this course borrows at several points.",
      body: "His interest is less in defending doctrine than in asking how human consciousness grows — including his line that development goes \"three steps forward, two steps backward.\""
    }
  };

  const css = `
    :host { display: inline; }
    button.t {
      font: inherit; color: inherit; letter-spacing: inherit; background: none;
      border: none; padding: 0; margin: 0; cursor: help;
      text-decoration: underline dotted; text-underline-offset: 3px; text-decoration-thickness: 1px; opacity: 1;
      display: inline; text-align: inherit; text-indent: 0; white-space: inherit;
    }
    button.t:hover, button.t:focus-visible { color: var(--g-accent, oklch(0.82 0.12 72)); outline: none; }
    .wrap { position: relative; display: inline; }
    .card {
      position: absolute; z-index: 90; top: calc(100% + 10px); left: 0;
      width: 340px; max-width: 78vw; text-align: left;
      background: #1c1a15; border: 1px solid #45412f;
      box-shadow: 0 18px 44px rgba(0,0,0,0.55); padding: 16px 18px;
      font-family: 'Libre Franklin', system-ui, sans-serif; font-weight: 300;
      letter-spacing: 0; white-space: normal;
    }
    .card.light { background: #fbf9f4; border-color: #d8d3c6; box-shadow: 0 14px 32px rgba(0,0,0,0.16); }
    .kind { font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.18em; color: oklch(0.74 0.12 72); }
    .head { display: flex; justify-content: space-between; align-items: baseline; gap: 14px; margin-bottom: 8px; }
    .x { font-family: 'JetBrains Mono', monospace; font-size: 12px; line-height: 1; color: #6b665a; background: none; border: none; cursor: pointer; }
    .x:hover { color: #ece7db; }
    .card.light .x:hover { color: #241f18; }
    .name { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 21px; line-height: 1.15; color: #ece7db; margin-bottom: 8px; }
    .plain { font-size: 14px; line-height: 1.6; color: #ded7c8; margin: 0 0 10px; }
    .body { font-size: 13px; line-height: 1.65; color: #9c9689; margin: 0; }
    .card.light .name { color: #241f18; }
    .card.light .plain { color: #4a443a; }
    .card.light .body { color: #6b6558; }
    .missing { font-size: 13px; color: #c46a4a; }
  `;

  class GTerm extends HTMLElement {
    static get observedAttributes() { return ["term-key", "align", "theme"]; }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._open = false;
      this._onDocDown = (e) => { if (!this.contains(e.target) && !e.composedPath().includes(this)) this._set(false); };
      this._onKey = (e) => { if (e.key === "Escape") this._set(false); };
    }
    connectedCallback() { this._label = this._label || this.textContent.trim(); this._render(); }
    attributeChangedCallback() { if (this.shadowRoot.childNodes.length) this._render(); }
    disconnectedCallback() { this._detach(); }
    _attach() { document.addEventListener("pointerdown", this._onDocDown, true); document.addEventListener("keydown", this._onKey); }
    _detach() { document.removeEventListener("pointerdown", this._onDocDown, true); document.removeEventListener("keydown", this._onKey); }
    _set(v) { if (this._open === v) return; this._open = v; v ? this._attach() : this._detach(); this._render(); }
    _render() {
      const key = this.getAttribute("term-key") || "";
      const e = GLOSSARY[key];
      const label = this._label || (e && e.term) || key;
      const light = this.getAttribute("theme") === "light";
      const right = this.getAttribute("align") === "right";
      const sr = this.shadowRoot;
      sr.innerHTML = "";
      const style = document.createElement("style");
      style.textContent = css;
      const wrap = document.createElement("span");
      wrap.className = "wrap";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "t";
      btn.textContent = label;
      btn.setAttribute("aria-expanded", String(this._open));
      btn.addEventListener("click", (ev) => { ev.stopPropagation(); this._set(!this._open); });
      wrap.appendChild(btn);
      if (this._open) {
        const card = document.createElement("div");
        card.className = "card" + (light ? " light" : "");
        if (right) { card.style.left = "auto"; card.style.right = "0"; }
        if (!e) {
          card.innerHTML = '<div class="missing">No glossary entry for “' + key + '”.</div>';
        } else {
          const head = document.createElement("div");
          head.className = "head";
          const kind = document.createElement("span");
          kind.className = "kind";
          kind.textContent = e.kind;
          const x = document.createElement("button");
          x.className = "x"; x.type = "button"; x.textContent = "✕";
          x.addEventListener("click", (ev) => { ev.stopPropagation(); this._set(false); });
          head.append(kind, x);
          const name = document.createElement("div");
          name.className = "name"; name.textContent = e.term;
          const plain = document.createElement("p");
          plain.className = "plain"; plain.textContent = e.plain;
          card.append(head, name, plain);
          if (e.body) {
            const body = document.createElement("p");
            body.className = "body"; body.textContent = e.body;
            card.appendChild(body);
          }
        }
        wrap.appendChild(card);
      }
      sr.append(style, wrap);
    }
  }
  if (!customElements.get("g-term")) customElements.define("g-term", GTerm);
  window.GLOSSARY = GLOSSARY;
})();
