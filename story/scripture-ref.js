/**
 * <s-ref ref-key="gen-1-1-2-3">Genesis 1:1–2:3</s-ref>
 *
 * Scripture reference tooltip. Click the reference to read the passage
 * (World English Bible — public domain) plus a one-line note on why this
 * lesson points at it. Shared across every lesson page, handout and deck.
 *
 * Add passages to PASSAGES below. Long passages carry an excerpt plus a
 * `scope` line naming what the full reading covers.
 */
(function () {
  const PASSAGES = {

    "amos-5-21-24": {
      ref: "Amos 5:21–24",
      scope: "God rejects the worship — and names what is missing.",
      text: "I hate, I despise your feasts, and I can't stand your solemn assemblies… Take away from me the noise of your songs! I will not listen to the music of your harps. But let justice roll on like rivers, and righteousness like a mighty stream.",
      note: "Notice what is not being condemned: idolatry, atheism, neglect of the temple. The festivals are running. The songs are being sung. That is the scandal."
    },

    "amos-2-6-8": {
      ref: "Amos 2:6–8",
      scope: "The indictment, in specifics.",
      text: "They have sold the righteous for silver, and the poor for a pair of sandals — they trample the head of the poor into the dust of the earth… They lay themselves down on clothes taken in pledge, beside every altar.",
      note: "Read the last line twice. The garment seized as debt collateral becomes the blanket they worship on. The exploitation and the religion are physically touching."
    },

    "isa-1-10-17": {
      ref: "Isaiah 1:10–17",
      scope: "Too much sacrifice, not enough justice.",
      text: "What are the multitude of your sacrifices to me?… I can't bear your evil assemblies… Wash yourselves. Make yourself clean. Put away the evil of your doings from before my eyes. Cease to do evil. Learn to do well. Seek justice. Relieve the oppressed. Judge the fatherless. Plead for the widow.",
      note: "The remedy is not more or better ritual — it is a list of actions toward specific people. And “learn” is the honest verb: justice is a skill acquired by practice."
    },

    "isa-58-3-10": {
      ref: "Isaiah 58:3–10",
      scope: "What a fast is actually for.",
      text: "Isn't this the fast that I have chosen: to release the bonds of wickedness… to break every yoke? Isn't it to distribute your bread to the hungry, and that you bring the poor who are cast out to your house?",
      note: "A later text, and the clearest statement of the pattern: the religious practice is redefined by naming what it was supposed to produce. Not fasting abolished — fasting explained."
    },

    "mic-6-6-8": {
      ref: "Micah 6:6–8",
      scope: "The escalation, and the answer.",
      text: "Shall I come before him with burnt offerings, with calves a year old? Will Yahweh be pleased with thousands of rams? … He has shown you, O man, what is good. What does Yahweh require of you, but to act justly, to love mercy, and to walk humbly with your God?",
      note: "Watch the offer escalate — calves, then thousands of rams, then the unthinkable. The answer arrives with no ritual in it at all. Three things, and every one of them describes a kind of person."
    },

    "hos-6-6": {
      ref: "Hosea 6:6",
      text: "For I desire mercy, and not sacrifice; and the knowledge of God more than burnt offerings.",
      note: "The word behind “mercy” is hesed — covenant love. God is not contrasting sacrifice with nothing; God is contrasting religious performance with faithful love. Jesus quotes this verse twice."
    },

    "hos-11-1-9": {
      ref: "Hosea 11:1–9",
      scope: "One of Scripture's most emotionally startling portraits of God.",
      text: "When Israel was a child, then I loved him… I taught Ephraim to walk. I took them by his arms… How can I give you up, Ephraim? … My heart is turned within me, my compassion is aroused. I will not execute the fierceness of my anger.",
      note: "Judgment is announced and then interrupted from the inside. Hosea offers no theory of judgment — but he refuses to describe it as detached retaliation. Anger does not cancel attachment."
    },

    "luke-4-16-21": {
      ref: "Luke 4:16–21",
      scope: "Jesus reads Isaiah in his hometown synagogue and applies it to himself.",
      text: "The Spirit of the Lord is on me, because he has anointed me to preach good news to the poor. He has sent me to heal the broken hearted, to proclaim release to the captives, recovering of sight to the blind, to deliver those who are crushed… Today, this Scripture has been fulfilled in your hearing.",
      note: "Of all the texts available to him, this is the one he picks to announce his mission — and it is a justice-and-liberation text from Israel's prophetic tradition."
    },

    "matt-12-7": {
      ref: "Matthew 12:7",
      text: "But if you had known what this means, “I desire mercy, and not sacrifice,” you would not have condemned the guiltless.",
      note: "The second time he quotes Hosea 6:6 — here in a Sabbath dispute. He does not argue from his own authority; he argues from Israel's prophets, and accuses his critics of not knowing their own Scripture."
    },

    "matt-23-23": {
      ref: "Matthew 23:23",
      text: "You blind guides, who strain out a gnat, and swallow a camel! … you have left undone the weightier matters of the law: justice, mercy, and faith.",
      note: "The complaint is not scrupulousness itself but proportion. “Weightier matters” assumes the law has a center of gravity — and names it as justice, mercy and faithfulness."
    },

    "ezek-36-26-27": {
      ref: "Ezekiel 36:26–27",
      text: "I will give you a new heart, and I will put a new spirit within you; and I will take away the stony heart out of your flesh, and I will give you a heart of flesh.",
      note: "Spoken in exile, alongside Jeremiah 31. Both prophets locate the solution in the same place: not a better tablet, but a different interior."
    },

    "1sam-8-4-22": {
      ref: "1 Samuel 8:4–22",
      scope: "The request for a king, and the warning that follows.",
      text: "Make us a king to judge us like all the nations… Yahweh said to Samuel, “Listen to the voice of the people in all that they say to you; for they have not rejected you, but they have rejected me as king over them.”",
      note: "Read the whole thing aloud once. The request is granted and criticized in the same breath — which is the shape of the entire lesson."
    },

    "1sam-8-10-18": {
      ref: "1 Samuel 8:10–18",
      scope: "Samuel tells them what a king does. Count the verb.",
      text: "He will take your sons… He will take your daughters… He will take the tenth of your seed and of your vineyards… He will take your male servants and your female servants… and you will be his servants.",
      note: "Six times: he will take. The chapter ends with the word servants — the same word the Exodus story used for Egypt."
    },

    "2sam-7-8-17": {
      ref: "2 Samuel 7:8–17",
      scope: "The Davidic covenant.",
      text: "Your house and your kingdom will be made sure forever before you. Your throne will be established forever.",
      note: "David wants to build God a house; God promises to build David one instead. Unlike Sinai, no conditions are attached — which is why the promise survives David's worst chapter four chapters later."
    },

    "2sam-11": {
      ref: "2 Samuel 11",
      scope: "Bathsheba and Uriah. Roughly four minutes aloud.",
      text: "David sent messengers and took her… She came to him, and he lay with her… David wrote a letter to Joab: “Send Uriah to the forefront of the hottest battle, and retreat from him, that he may be struck and die.”",
      note: "Track the verbs: saw, sent, took, concealed, commanded. The narrator never editorializes — and never protects the king. Notice that Bathsheba is never asked."
    },

    "2sam-12-1-7": {
      ref: "2 Samuel 12:1–7",
      scope: "Nathan's parable, and four words.",
      text: "The rich man had very many flocks and herds, but the poor man had nothing except one little ewe lamb… David's anger was greatly kindled against the man… Nathan said to David, “You are the man.”",
      note: "Nathan makes the king pass judgment before he knows he is the defendant. Four words that assume political power does not define morality."
    },

    "ps-51": {
      ref: "Psalm 51",
      scope: "The repentance tradition associated with David.",
      text: "Create in me a clean heart, O God. Renew a right spirit within me… You don't delight in sacrifice, or else I would give it. You have no pleasure in burnt offering. The sacrifices of God are a broken spirit.",
      note: "Whatever its date, the tradition attaches it to this moment. Notice where it lands: not on ritual, but on a changed interior — the same direction Jeremiah 31 and the prophets are heading."
    },

    "1kings-4-20-28": {
      ref: "1 Kings 4:20–28",
      scope: "Solomon's golden age, described in inventory.",
      text: "Solomon's provision for one day was thirty measures of fine flour… ten fat oxen, twenty oxen out of the pastures, and one hundred sheep… Solomon had forty thousand stalls of horses for his chariots.",
      note: "The text presents this as glory. Read it beside Deuteronomy 17 and it also reads as an indictment. Someone is farming, hauling and paying for all of it."
    },

    "1kings-11-1-13": {
      ref: "1 Kings 11:1–13",
      scope: "The unraveling.",
      text: "King Solomon loved many foreign women… When Solomon was old, his wives turned away his heart after other gods… Therefore Yahweh said to Solomon, “I will surely tear the kingdom from you.”",
      note: "The political marriages that secured the alliances are the same ones the text blames. Consolidated power tends to require compromises that then become the story."
    },

    "1kings-12-1-19": {
      ref: "1 Kings 12:1–19",
      scope: "The kingdom divides — over a labor grievance.",
      text: "Your father made our yoke difficult. Now therefore make the grievous service of your father… lighter, and we will serve you… Rehoboam answered, “My father made your yoke heavy, but I will add to your yoke.”",
      note: "The golden age ends in a strike. The complaint is precisely Samuel's warning, arriving as history within one generation."
    },

    "deut-17-14-20": {
      ref: "Deuteronomy 17:14–20",
      scope: "Limits on a king, written before there was one.",
      text: "He shall not multiply horses to himself… He shall not multiply wives to himself… He shall not greatly multiply to himself silver and gold… he shall write himself a copy of this law in a book… that his heart not be lifted up above his brothers.",
      note: "An ancient constitution that restrains the ruler and puts him under the same Torah as everyone else. Then read 1 Kings 4 and 11: horses, wives, silver and gold, each in turn."
    },

    "mark-10-42-45": {
      ref: "Mark 10:42–45",
      scope: "Jesus on how power works — and how it will not work among his followers.",
      text: "You know that they who are recognized as rulers over the nations lord it over them… But it shall not be so among you. Whoever wants to become great among you shall be your servant… For the Son of Man also came not to be served, but to serve.",
      note: "He does not deny that this is how rulers behave. He denies that it may continue inside the community. “Not so among you” is the hinge of the whole lesson."
    },

    "john-13-1-17": {
      ref: "John 13:1–17",
      scope: "The king with a towel.",
      text: "He poured water into the basin, and began to wash the disciples' feet… If I then, the Lord and the Teacher, have washed your feet, you also ought to wash one another's feet.",
      note: "The task belonged to a household slave. John places it where the other Gospels place the institution of the supper — as if this act is the meaning of the meal."
    },

    "matt-27-29": {
      ref: "Matthew 27:29",
      text: "They braided a crown of thorns and put it on his head, and a reed in his right hand; and they kneeled down before him, and mocked him, saying, “Hail, King of the Jews!”",
      note: "The soldiers stage a coronation as a joke. The Gospel writers let the joke stand, because they think it is accidentally accurate."
    },

    "ex-19-3-6": {
      ref: "Exodus 19:3–6",
      scope: "The covenant proposal at Sinai, before any command.",
      text: "You have seen what I did to the Egyptians, and how I bore you on eagles' wings, and brought you to myself… you shall be my own possession from among all peoples… and you shall be to me a kingdom of priests, and a holy nation.",
      note: "The history comes first, then the vocation. And the vocation is priestly — a people for the sake of others, which is Abraham's call again in national form."
    },

    "ex-20-8-11": {
      ref: "Exodus 20:8–11",
      scope: "The Sabbath command, and who it covers.",
      text: "Remember the Sabbath day, to keep it holy… you shall not do any work, you, nor your son, nor your daughter, nor your male servant, nor your female servant, nor your livestock, nor your stranger who is within your gates.",
      note: "Read the list. Rest is extended to servants, resident foreigners and working animals — in a world where leisure was a privilege of rank."
    },

    "ex-22-21-24": {
      ref: "Exodus 22:21–24",
      text: "You shall not wrong an alien, neither oppress him, for you were aliens in the land of Egypt. You shall not take advantage of any widow or fatherless child.",
      note: "The recurring triad of the legally defenseless — and the reason given is memory, not rank or piety."
    },

    "deut-15-12-15": {
      ref: "Deuteronomy 15:12–15",
      scope: "Release, with provision.",
      text: "In the seventh year you shall let him go free… you shall not let him go empty. You shall furnish him liberally… You shall remember that you were a slave in the land of Egypt.",
      note: "Regulation, not abolition — and still a real limit in a world where debt servitude was usually permanent. Notice the motive clause again: remember Egypt."
    },

    "lev-19-33-34": {
      ref: "Leviticus 19:33–34",
      text: "If a stranger lives as a foreigner with you in your land, you shall not do him wrong. The stranger who lives as a foreigner with you shall be to you as the native-born among you, and you shall love him as yourself; for you lived as foreigners in the land of Egypt.",
      note: "“Love your neighbor” is in this same chapter, and here it is extended to the outsider. Memory of slavery is doing the ethical work."
    },

    "deut-20-16-18": {
      ref: "Deuteronomy 20:16–18",
      scope: "The command of the ban.",
      text: "But of the cities of these peoples that Yahweh your God gives you for an inheritance, you shall save alive nothing that breathes.",
      note: "Do not soften this. It is one of the hardest sentences in Scripture, and the lesson's four interpretive lenses exist because of verses like it."
    },

    "josh-6-20-21": {
      ref: "Joshua 6:20–21",
      scope: "Jericho.",
      text: "The people went up into the city… and they utterly destroyed all that was in the city, both man and woman, both young and old.",
      note: "The narrative uses the vocabulary of herem. Whether the language is reportage or the totalizing war rhetoric of its era is one of the genuine questions."
    },

    "josh-10-40": {
      ref: "Joshua 10:40",
      text: "So Joshua struck all the land… he left no one remaining, but he utterly destroyed all that breathed, as Yahweh, the God of Israel, commanded.",
      note: "Sweeping and total. Read it beside Joshua 13:1 and Judges 1, where the same peoples are still there."
    },

    "josh-13-1": {
      ref: "Joshua 13:1",
      text: "Now Joshua was old and well advanced in years. Yahweh said to him, “You are old and advanced in years, and there remains yet very much land to be possessed.”",
      note: "The tension is inside the book, not imported by skeptics. Land described as utterly destroyed is also described as still unconquered."
    },

    "judg-2-11-19": {
      ref: "Judges 2:11–19",
      scope: "The cycle stated as a formula.",
      text: "The children of Israel did evil in Yahweh's sight… Yahweh raised up judges, who saved them… When the judge was dead, they turned back and behaved more corruptly than their fathers.",
      note: "“More corruptly than their fathers” is the key phrase. This is a spiral, not a circle — structure without formation does not hold."
    },

    "judg-21-25": {
      ref: "Judges 21:25",
      text: "In those days there was no king in Israel. Everyone did what was right in his own eyes.",
      note: "The book's closing verdict, after civil war and atrocity. It sets up the demand for a king in Lesson 10 — and quietly warns that a throne is not the cure either."
    },

    "jer-31-31-34": {
      ref: "Jeremiah 31:31–34",
      scope: "A new covenant, promised in exile.",
      text: "I will make a new covenant with the house of Israel… I will put my law in their inward parts, and in their heart I will write it… for they will all know me, from their least to their greatest.",
      note: "Centuries before Jesus, Israel's own prophet describes the trajectory this lesson traces: from law written before us toward love formed within us."
    },

    "matt-5-21-26": {
      ref: "Matthew 5:21–26",
      scope: "The first of six “but I say to you” sayings.",
      text: "You have heard that it was said to the ancient ones, “You shall not murder”… But I tell you that everyone who is angry with his brother without a cause will be in danger of the judgment.",
      note: "Not a rejection of the command but a move inward, toward what produces the act. Jesus is interpreting Torah from inside Israel's tradition, not discarding it."
    },

    "mark-2-27": {
      ref: "Mark 2:27",
      text: "The Sabbath was made for man, not man for the Sabbath.",
      note: "The principle stated plainly, about a structure Jesus himself kept. The structure serves life; life does not exist to preserve the structure."
    },

    "rom-13-8-10": {
      ref: "Romans 13:8–10",
      text: "He who loves his neighbor has fulfilled the law… Love doesn't harm a neighbor. Therefore love is the fulfillment of the law.",
      note: "Paul's summary of the whole trajectory. Fulfilled — not abolished. The distinction matters for how Christians read Torah."
    },

    "luke-23-34": {
      ref: "Luke 23:34",
      text: "Jesus said, “Father, forgive them, for they don't know what they are doing.”",
      note: "Spoken about an occupying army in the act of executing him. Place this beside the conquest commands and the difficulty of the Christian question becomes clear."
    },
    "ex-1-8-14": {
      ref: "Exodus 1:8–14",
      scope: "A new king, and fear turned into policy.",
      text: "Now there arose a new king over Egypt, who didn't know Joseph. He said to his people, “Behold, the people of the children of Israel are more and mightier than we. Come, let's deal wisely with them… They made their lives bitter with hard service.",
      note: "Notice the sequence. Not hatred first, but arithmetic: they are becoming too numerous. The policy follows the fear."
    },

    "ex-1-15-22": {
      ref: "Exodus 1:15–22",
      scope: "Population control becomes the killing of children — and two midwives refuse.",
      text: "The king of Egypt spoke to the Hebrew midwives… “When you perform the duty of a midwife… if it is a son, then you shall kill him.” But the midwives feared God, and didn't do what the king of Egypt commanded.",
      note: "The first act of resistance in Exodus is civil disobedience by two women whose names the text preserves — Shiphrah and Puah — while Pharaoh's is never given."
    },

    "ex-2-23-25": {
      ref: "Exodus 2:23–25",
      scope: "Four verbs that start the rescue.",
      text: "The children of Israel groaned because of the bondage, and they cried, and their cry came up to God because of the bondage. God heard their groaning, and God remembered his covenant… God saw the children of Israel, and God was concerned about them.",
      note: "Heard. Remembered. Saw. Knew. Nothing here is earned, and nothing is asked first. Salvation begins with being noticed."
    },

    "ex-3-7-8": {
      ref: "Exodus 3:7–8",
      text: "Yahweh said, “I have surely seen the affliction of my people who are in Egypt, and have heard their cry because of their taskmasters. For I know their sorrows. I have come down to deliver them.”",
      note: "“I have come down” is the sentence. The God of Exodus is encountered from below — not defending the palace but arriving at the brick pits."
    },

    "ex-3-13-15": {
      ref: "Exodus 3:13–15",
      scope: "Moses asks for a name.",
      text: "God said to Moses, “I AM WHO I AM,” and he said, “You shall tell the children of Israel this: ‘I AM has sent me to you.’”",
      note: "Ehyeh asher ehyeh can be rendered “I am who I am,” “I will be what I will be,” or a mixture of both. Rather than a philosophical definition, the context supplies the meaning: two verses earlier God has already said “I will be with you.”"
    },

    "ex-12": {
      ref: "Exodus 12",
      scope: "The first Passover — instructions given to people still in slavery.",
      text: "This day shall be to you for a memorial, and you shall keep it as a feast to Yahweh… You shall eat it in haste: it is Yahweh's Passover.",
      note: "The feast is commanded before the escape happens. The memory is built into the night itself — which is why Passover is a practice of remembering rather than a monument."
    },

    "ex-14-21-31": {
      ref: "Exodus 14:21–31",
      scope: "The sea.",
      text: "Moses stretched out his hand over the sea… and the waters were divided. The children of Israel went into the middle of the sea on the dry ground.",
      note: "The image the rest of Scripture keeps reaching for: water that should have drowned them becomes the road out. Prophets use it for return from exile; the New Testament uses it for baptism."
    },

    "ex-20-2": {
      ref: "Exodus 20:2",
      text: "I am Yahweh your God, who brought you out of the land of Egypt, out of the house of bondage.",
      note: "The first line of the Ten Commandments is not a command. It is a reminder of who is already speaking and what has already been done — the whole grace-before-law argument in one sentence."
    },

    "deut-24-17-22": {
      ref: "Deuteronomy 24:17–22",
      scope: "Law grounded in memory.",
      text: "You shall not deprive the foreigner or the fatherless of justice… You shall remember that you were a slave in the land of Egypt. Therefore I command you to do this thing.",
      note: "Torah keeps giving the same reason for protecting the vulnerable: you were slaves. Memory is being used as moral formation, which is exactly what Passover is for."
    },

    "num-11-4-6": {
      ref: "Numbers 11:4–6",
      text: "The children of Israel also wept again, and said, “Who will give us meat to eat? We remember the fish which we ate in Egypt for nothing…”",
      note: "In the wilderness they remember Egypt as free food. Oppressive systems shape the imagination of the oppressed too — leaving Egypt was the fast part."
    },

    "mic-6-8": {
      ref: "Micah 6:8",
      text: "He has shown you, O man, what is good. What does Yahweh require of you, but to act justly, to love mercy, and to walk humbly with your God?",
      note: "The prophets end up judging Israel by the standard Exodus established. Rescue from Pharaoh was never a permanent alliance; it was a claim about what God cares for."
    },

    "gen-12-2": {
      ref: "Genesis 12:2",
      text: "I will make of you a great nation. I will bless you and make your name great. You will be a blessing.",
      note: "Read it directly after Genesis 11:4, where humanity says “let us make a name for ourselves.” Babel grasps for a name; Abram receives one."
    },

    "gen-15": {
      ref: "Genesis 15",
      scope: "The covenant of the divided animals — and the first mention of Abram's belief.",
      text: "He brought him outside and said, “Look toward the sky, and count the stars… so shall your offspring be.” He believed in Yahweh, and he reckoned it to him for righteousness.",
      note: "In the ceremony that follows, only God passes between the pieces. The obligation runs one direction — which is Paul's whole point in Romans 4."
    },

    "gen-16": {
      ref: "Genesis 16",
      scope: "Hagar — the promise pursued by human arrangement.",
      text: "Sarai said to Abram, “See now, Yahweh has restrained me from bearing. Please go in to my servant. It may be that I will obtain children by her.” Abram listened to the voice of Sarai.",
      note: "The text reports the damage without softening it, and then gives Hagar the only scene in Genesis where a person names God. Attempts to secure a promise tend to cost someone with less power."
    },

    "gen-12-10-20": {
      ref: "Genesis 12:10–20",
      scope: "Famine, Egypt, and Abram's lie about Sarai.",
      text: "Say, please, that you are my sister, that it may be well with me for your sake… Pharaoh took her into his house.",
      note: "Three verses after the promise of protection, Abram protects himself at his wife's expense. The Bible does not tidy this up."
    },

    "gen-22": {
      ref: "Genesis 22",
      scope: "Moriah — the binding of Isaac. Roughly three minutes aloud.",
      text: "Take your son, your only son, whom you love, even Isaac… Abraham stretched out his hand and took the knife to kill his son. The angel of Yahweh called to him out of the sky, “Don't lay your hand on the boy.” … Abraham lifted up his eyes, and saw that behind him was a ram caught in the thicket by his horns.",
      note: "One of the most disturbing and influential chapters in Scripture. Notice what actually happens: the act is stopped, and provision is given. Christians have read this several ways, and this course does not collapse them into one."
    },

    "rom-4": {
      ref: "Romans 4",
      scope: "Paul's argument from Abraham — promise before law, trust before sign.",
      text: "For what does the Scripture say? “Abraham believed God, and it was accounted to him for righteousness.” … He received the sign of circumcision, a seal of the righteousness of the faith which he had while he was in uncircumcision.",
      note: "Paul's sequence matters as much as his conclusion: the promise comes first, the response second, the sign third. Grace before performance, argued from Genesis."
    },

    "gal-3-8": {
      ref: "Galatians 3:8",
      text: "The Good News was preached beforehand to Abraham, saying, “In you all the nations will be blessed.”",
      note: "Paul reads the last line of Genesis 12:3 as the point of the whole thing. The narrowing to one family was always meant for widening."
    },

    "heb-11-8": {
      ref: "Hebrews 11:8",
      text: "By faith, Abraham, when he was called, obeyed to go out to a place which he was to receive for an inheritance. He went out, not knowing where he went.",
      note: "“Not knowing where he went” is the definition the New Testament offers. Faith here is trust sufficient for the next step, not information about the destination."
    },

    "matt-9-13": {
      ref: "Matthew 9:13",
      text: "But you go and learn what this means: “I desire mercy, and not sacrifice,” for I didn't come to call the righteous, but sinners to repentance.",
      note: "Jesus quotes Hosea against the sacrificial assumption — one late point in a long biblical argument that runs back through the prophets to the ram in the thicket."
    },

    "luke-22-42": {
      ref: "Luke 22:42",
      text: "Father, if you are willing, remove this cup from me; nevertheless not my will, but yours, be done.",
      note: "Abraham begins the journey of trust without controlling the outcome. In Gethsemane, Jesus asks for the outcome to change and still does not seize it."
    },

    "gen-4-1-16": {
      ref: "Genesis 4:1–16",
      scope: "Cain and Abel — the first family, the first murder.",
      text: "Yahweh said to Cain, “Why are you angry? Why has your countenance fallen? … If you don't do well, sin crouches at the door. Its desire is for you, but you rule over it.” … Cain rose up against Abel, his brother, and killed him.",
      note: "The warning comes before the act, and it assumes Cain can still choose. The first death in the Bible is not natural — it is murder."
    },
    "gen-4-7": {
      ref: "Genesis 4:7",
      text: "If you don't do well, sin crouches at the door. Its desire is for you, but you rule over it.",
      note: "Sin pictured as an animal waiting outside — something with appetite, not merely a bad decision. The image is closer to Paul's language about a power than to a rule-book."
    },
    "gen-4-10-15": {
      ref: "Genesis 4:10–15",
      scope: "The blood that cries out — and the mark that protects a murderer.",
      text: "The voice of your brother's blood cries to me from the ground… Cain said, “Whoever finds me will kill me.” Yahweh said to him, “…Whoever slays Cain, vengeance will be taken on him sevenfold.” Yahweh appointed a sign for Cain, so that anyone finding him would not strike him.",
      note: "Read carefully: the mark is protection, not branding. The first thing God does after the first murder is put a limit on revenge."
    },
    "gen-4-23-24": {
      ref: "Genesis 4:23–24",
      scope: "Lamech's boast — the oldest poem in Genesis.",
      text: "I have slain a man for wounding me, and a young man for bruising me. If Cain will be avenged sevenfold, truly Lamech seventy-seven times.",
      note: "Cain feared revenge; Lamech sings about it. Violence has stopped being something humans do and become something humans admire."
    },
    "gen-6-11-13": {
      ref: "Genesis 6:11–13",
      text: "The earth was corrupt before God, and the earth was filled with violence… God said to Noah, “The end of all flesh has come before me, for the earth is filled with violence through them.”",
      note: "The diagnosis is specific. Not filled with disobedience or unbelief — filled with hamas, violence."
    },
    "gen-9-8-17": {
      ref: "Genesis 9:8–17",
      scope: "The covenant after the flood, and its sign.",
      text: "I establish my covenant with you, and with your offspring after you, and with every living creature that is with you… I set my rainbow in the cloud, and it will be a sign of a covenant between me and the earth.",
      note: "Every living creature — not one family, not one nation. And nothing is asked in return. The sign is a bow, the weapon of the storm-god across the region, hung up in the sky."
    },
    "matt-18-21-22": {
      ref: "Matthew 18:21–22",
      text: "Peter came and said to him, “Lord, how often shall my brother sin against me, and I forgive him? Until seven times?” Jesus said to him, “I don't tell you until seven times, but until seventy times seven.”",
      note: "The same arithmetic as Lamech's boast, running the other direction. Lamech multiplies revenge; Jesus multiplies forgiveness."
    },
    "matt-5-38-44": {
      ref: "Matthew 5:38–44",
      text: "You have heard that it was said, ‘An eye for an eye, and a tooth for a tooth.’ But I tell you, don't resist him who is evil… Love your enemies, and pray for those who persecute you.",
      note: "Jesus quotes a law that was itself a limit on runaway vengeance, and then moves past limitation entirely. Restraint was never the destination."
    },
    "ex-21-23-25": {
      ref: "Exodus 21:23–25",
      text: "Eye for eye, tooth for tooth, hand for hand, foot for foot.",
      note: "Read in its own world this is a ceiling, not a demand: one eye, not a village. Ancient law codes routinely escalated; this one caps the payback."
    },
    "acts-2-1-12": {
      ref: "Acts 2:1–12",
      scope: "Pentecost — the crowd hears in its own languages.",
      text: "They were all filled with the Holy Spirit, and began to speak with other languages… Parthians, Medes, Elamites, and people from Mesopotamia, Judea, Cappadocia, Pontus, Asia… we hear them speaking in our own languages the mighty works of God.",
      note: "Not a reversal of Babel into one tongue. Everyone stays who they are and understanding arrives anyway — communion without erasing difference."
    },

    "gen-3": {
      ref: "Genesis 3",
      scope: "The serpent, the tree, the eating, and everything that follows — about four minutes aloud.",
      text: "Now the serpent was more subtle than any animal of the field which Yahweh God had made… The eyes of both of them were opened, and they knew that they were naked. They sewed fig leaves together, and made coverings for themselves.",
      note: "A few hundred words carrying enormous theological weight. Read it once without commentary and notice how much of what we \"remember\" is not on the page."
    },
    "gen-3-1": {
      ref: "Genesis 3:1",
      text: "He said to the woman, “Has God really said, ‘You shall not eat of any tree of the garden?’”",
      note: "The first move is not rebellion but suspicion — and a subtle exaggeration of the command. Mistrust arrives before disobedience."
    },
    "gen-3-6": {
      ref: "Genesis 3:6",
      text: "When the woman saw that the tree was good for food, and that it was a delight to the eyes, and that the tree was to be desired to make one wise, she took some of its fruit, and ate.",
      note: "Nothing here is described as ugly. What is grasped is a genuine good, taken in the wrong way — which is harder and more honest than a story about wanting something bad."
    },
    "gen-3-8-10": {
      ref: "Genesis 3:8–10",
      scope: "The first hiding.",
      text: "The man and his wife hid themselves from the presence of Yahweh God among the trees of the garden… He said, “I heard your voice in the garden, and I was afraid, because I was naked; and I hid myself.”",
      note: "God has not struck anyone. The fear precedes any punishment — which is why this lesson asks whether God became dangerous or humanity began experiencing God as dangerous."
    },
    "gen-3-12": {
      ref: "Genesis 3:12–13",
      text: "The man said, “The woman whom you gave to be with me, she gave me fruit of the tree, and I ate.” … The woman said, “The serpent deceived me, and I ate.”",
      note: "Blame in two directions in a single breath, and one of them aimed at God for the gift. Alienation from each other arrives immediately."
    },
    "gen-2-16-17": {
      ref: "Genesis 2:16–17",
      text: "Yahweh God commanded the man, saying, “You may freely eat of every tree of the garden; but you shall not eat of the tree of the knowledge of good and evil.”",
      note: "The permission is enormous and comes first; the limit is single. A boundary inside a relationship of trust rather than a test designed to be failed."
    },
    "gen-2-25": {
      ref: "Genesis 2:25",
      text: "The man and his wife were both naked, and they were not ashamed.",
      note: "One verse before the serpent. Vulnerability without danger — the state the rest of the Bible will be trying to get back to."
    },
    "rom-5-12-21": {
      ref: "Romans 5:12–21",
      scope: "Paul's Adam–Christ comparison.",
      text: "Therefore as sin entered into the world through one man, and death through sin… so also through one act of righteousness the free gift came to all men… For as through the one man's disobedience many were made sinners, even so through the obedience of the one, many will be made righteous.",
      note: "The passage Augustine reads as inherited condition and Eastern readers as inherited mortality. Notice what Paul is actually arguing: not the mechanics of the Fall but the scale of the gift, which he says exceeds it."
    },
    "1cor-15-21-22": {
      ref: "1 Corinthians 15:21–22",
      text: "For since death came by man, the resurrection of the dead also came by man. For as in Adam all die, so also in Christ all will be made alive.",
      note: "Two representative humanities, two trajectories. Paul's interest is Christ as a new beginning for the species, not a forensic account of guilt."
    },
    "ezek-18-20": {
      ref: "Ezekiel 18:20",
      text: "The soul who sins, he shall die. The son shall not bear the iniquity of the father, neither shall the father bear the iniquity of the son.",
      note: "Israel's own Scripture rejects inherited guilt in the plainest terms — which is why the Eastern language of inherited corruption rather than inherited guilt is not a modern softening."
    },
    "rom-8-19-22": {
      ref: "Romans 8:19–22",
      scope: "Creation itself caught up in the damage — and in the hope.",
      text: "For the creation waits with eager expectation for the children of God to be revealed… For we know that the whole creation groans and travails in pain together until now.",
      note: "Whatever went wrong is not only a human legal problem. Paul describes a whole world out of joint and leaning toward release."
    },
    "1john-4-18": {
      ref: "1 John 4:18",
      text: "There is no fear in love; but perfect love casts out fear, because fear has punishment. He who fears is not made perfect in love.",
      note: "The New Testament's direct answer to Genesis 3:10. If hiding is the symptom, love that cannot be feared is the cure."
    },
    "ps-139-7-12": {
      ref: "Psalm 139:7–12",
      text: "Where could I go from your Spirit? Or where could I flee from your presence? … If I say, “Surely the darkness will hide me,” even the darkness isn't dark to you.",
      note: "The same instinct as Eden — the impulse to hide — turned into something else entirely, because the psalmist has decided the presence is safe."
    },
    "phil-2-5-8": {
      ref: "Philippians 2:5–8",
      text: "Who, existing in the form of God, didn't consider equality with God something to be grasped, but emptied himself… becoming obedient to death, yes, the death of the cross.",
      note: "Read directly against Genesis 3. Where Adam reaches for likeness to God, Christ holds it and lets it go. Grasping and self-giving are the two human trajectories."
    },
    "luke-23-46": {
      ref: "Luke 23:46",
      text: "Jesus, crying with a loud voice, said, “Father, into your hands I commit my spirit!”",
      note: "The opposite of “I was afraid, so I hid.” Trust at the point where fear would be most reasonable."
    },

    "matt-1-1-17": {
      ref: "Matthew 1:1–17",
      scope: "Jesus' genealogy, running forward from Abraham in three sets of fourteen.",
      text: "The book of the genealogy of Jesus Christ, the son of David, the son of Abraham… So all the generations from Abraham to David are fourteen generations; from David to the exile to Babylon fourteen generations; and from the carrying away to Babylon to the Christ, fourteen generations.",
      note: "Matthew names the pattern out loud. A genealogy arranged in fourteens is making an argument, not filing a birth record."
    },
    "luke-3-23-38": {
      ref: "Luke 3:23–38",
      scope: "Jesus' genealogy, running backward from Jesus to Adam and to God.",
      text: "Jesus… being the son (as was supposed) of Joseph, the son of Heli, the son of Matthat… the son of Nathan, the son of David… the son of Adam, the son of God.",
      note: "Different direction, different names between David and Joseph, different endpoint. Luke's line does not stop at Israel — it runs to Adam, and to God."
    },
    "mark-14-12-16": {
      ref: "Mark 14:12–16",
      scope: "Preparing the Last Supper.",
      text: "On the first day of unleavened bread, when they sacrificed the Passover, his disciples asked him, “Where do you want us to go and prepare that you may eat the Passover?”",
      note: "In Mark, Matthew and Luke the final meal is a Passover meal, which places the crucifixion on the day of the feast."
    },
    "john-19-14": {
      ref: "John 19:14",
      scope: "Pilate's verdict, timed to the hour.",
      text: "Now it was the Preparation Day of the Passover, at about the sixth hour.",
      note: "John has Jesus condemned before the feast begins, dying as the Passover lambs are killed — a day earlier than the other three, and theologically pointed."
    },
    "mark-16-1-8": {
      ref: "Mark 16:1–8",
      scope: "The empty tomb in the earliest Gospel's earliest ending.",
      text: "Entering into the tomb, they saw a young man sitting on the right side, dressed in a white robe… They went out and fled from the tomb, for trembling and astonishment had come on them. They said nothing to anyone; for they were afraid.",
      note: "One figure, and silence. Mark's oldest manuscripts end here; the longer endings are later additions."
    },
    "matt-28-1-10": {
      ref: "Matthew 28:1–10",
      scope: "The empty tomb in Matthew.",
      text: "There was a great earthquake, for an angel of the Lord descended from the sky… The women departed quickly with fear and great joy, and ran to bring his disciples word. Behold, Jesus met them.",
      note: "An earthquake, a descending angel, and the women meeting Jesus themselves — details the other accounts do not carry."
    },
    "john-2-13-22": {
      ref: "John 2:13–22",
      scope: "Jesus clears the temple — in John, at the very start of his ministry.",
      text: "He found in the temple those who sold oxen, sheep and doves, and the changers of money sitting. He made a whip of cords and drove all out of the temple.",
      note: "The other three Gospels place this scene in the final week, where it helps trigger his arrest. John moves it to the opening and makes it a signpost instead."
    },
    "mark-15-34": {
      ref: "Mark 15:34",
      text: "At the ninth hour Jesus cried with a loud voice, “Eloi, Eloi, lama sabachthani?” which is, being interpreted, “My God, my God, why have you forsaken me?”",
      note: "Mark and Matthew give a cry of abandonment; Luke gives trust (“into your hands”), John gives completion (“It is finished”). Each Gospel ends the scene in its own key."
    },
    "prov-8-22-31": {
      ref: "Proverbs 8:22–31",
      scope: "Wisdom speaks in her own voice about her presence at creation.",
      text: "Yahweh possessed me in the beginning of his work, before his deeds of old… When he established the heavens, I was there… Then I was the craftsman by his side. I was daily his delight, rejoicing always before him, rejoicing in his whole world.",
      note: "Israel's own Scriptures already imagine a figure beside God as the world is ordered — delighting in it. Early Christians did not have to reach into Greece to find this language."
    },
    "gal-4-4": {
      ref: "Galatians 4:4",
      scope: "Paul on the timing of the incarnation.",
      text: "But when the fullness of the time came, God sent out his Son, born to a woman, born under the law.",
      note: "Paul calls the moment full — and does not say what filled it. This lesson asks whether more than a calendar date is meant."
    },
    "1cor-8-6": {
      ref: "1 Corinthians 8:6",
      scope: "One of the earliest surviving Christian statements about Christ and creation.",
      text: "To us there is one God, the Father, of whom are all things, and we for him; and one Lord, Jesus Christ, through whom are all things, and we live through him.",
      note: "Written within about twenty-five years of the crucifixion. Paul splits Israel's confession of one God and puts Jesus inside it — with creation running through him."
    },
    "ps-33-6": {
      ref: "Psalm 33:6",
      text: "By Yahweh's word, the heavens were made; all the army of them by the breath of his mouth.",
      note: "Creation by speech is already ordinary Hebrew theology. John's \"in the beginning was the Word\" grows out of this soil as much as out of Greek philosophy."
    },
    "wis-7-25-27": {
      ref: "Wisdom of Solomon 7:25–27",
      scope: "A Greek-language Jewish text from Alexandria, written not long before the New Testament.",
      text: "She is a breath of the power of God, and a pure emanation of the glory of the Almighty… a reflection of eternal light, a spotless mirror of the working of God, and an image of his goodness.",
      note: "Jewish writers in Greek were already describing Wisdom with the vocabulary Hebrews and Colossians would later apply to Christ. Protestants read this book as apocrypha; Catholic and Orthodox canons include it."
    },
    "john-1-9": {
      ref: "John 1:9",
      text: "The true light that enlightens everyone was coming into the world.",
      note: "Justin Martyr built a whole theology of truth outside Israel on this verse: whatever light anyone sees anywhere is this light."
    },
    "acts-17-22-28": {
      ref: "Acts 17:22–28",
      scope: "Paul at Athens, addressing philosophers.",
      text: "What therefore you worship in ignorance, this I announce to you… he is not far from each one of us. For in him we live, move, and have our being. As some of your own poets have said, “For we are his offspring.”",
      note: "Paul argues from a Greek poet rather than from Moses — an early Christian precedent for finding usable truth outside Israel's Scriptures."
    },
    "gen-11-27-32": {
      ref: "Genesis 11:27–32",
      scope: "Abram's family, and where they came from.",
      text: "Now this is the history of the generations of Terah… Terah took Abram his son, Lot the son of Haran, and Sarai his daughter-in-law, and they went from Ur of the Chaldees to go into the land of Canaan. They came to Haran and lived there.",
      note: "The story opens with a family already in motion, out of a working Mesopotamian city — not with a people who arrived from nowhere."
    },
    "deut-6-4": {
      ref: "Deuteronomy 6:4",
      scope: "The Shema — Israel's foundational confession.",
      text: "Hear, Israel: Yahweh is our God. Yahweh is one.",
      note: "The Hebrew can be rendered \"Yahweh is one\" or \"Yahweh alone.\" Either way it functions first as a demand for exclusive allegiance rather than as a philosophical head-count of divine beings."
    },
    "ps-82": {
      ref: "Psalm 82",
      scope: "God stands up in the divine assembly and passes judgment on its members.",
      text: "God presides in the great assembly. He judges among the gods. “How long will you judge unjustly, and show partiality to the wicked?… Defend the weak, the poor and the fatherless.” … “You are gods… nevertheless you shall die like men.”",
      note: "Biblical language keeps the ancient image of a divine council — and then dismantles it, on the grounds that these powers failed the poor."
    },
    "gen-11-1-9": {
      ref: "Genesis 11:1–9",
      scope: "Babel: a tower, a city, and a scattering.",
      text: "They said, “Come, let's build ourselves a city, and a tower whose top reaches to the sky, and let's make ourselves a name.”",
      note: "Ziggurats really were built as stairways between earth and heaven. Genesis takes the region's proudest architecture and reads it as a story about human self-securing."
    },
    "john-1-14": {
      ref: "John 1:14",
      text: "The Word became flesh and lived among us. We saw his glory, such glory as of the one and only Son of the Father, full of grace and truth.",
      note: "The most radical version of the direction the biblical story keeps taking: not humanity climbing high enough, but God coming to meet humanity."
    },
    "rom-1-19-20": {
      ref: "Romans 1:19–20",
      text: "Because that which is known of God is revealed in them… since the creation of the world his invisible attributes are clearly seen, being perceived through the things that are made.",
      note: "Paul assumes something of God is genuinely perceptible outside Israel's Scriptures — an early basis for taking the wider religious world seriously."
    },
    "gen-6-9": {
      ref: "Genesis 6–9",
      scope: "The flood narrative, for comparison with Atrahasis and Gilgamesh XI.",
      text: "I will establish my covenant with you… I set my rainbow in the cloud, and it will be a sign of a covenant between me and the earth.",
      note: "Same story-shape as its neighbors: flood, boat, survivor, sacrifice. Different reasons, and a different ending — a promise rather than appeased hunger."
    },
    "hos-6-6": {
      ref: "Hosea 6:6",
      text: "For I desire mercy, and not sacrifice; and the knowledge of God more than burnt offerings.",
      note: "Quoted twice by Jesus. Israel's own Scriptures put the sacrificial system under question from inside."
    },
    "gen-12-1-3": {
      ref: "Genesis 12:1–3",
      scope: "The call — the promise that starts the whole story of Israel.",
      text: "Now Yahweh said to Abram, “Get out of your country, and from your relatives, and from your father's house, to the land that I will show you. I will make of you a great nation… and in you all the families of the earth will be blessed.”",
      note: "A promise made to an elderly childless couple, disproportionate to anything they possess. Everything after this depends on their trusting it."
    },
    "gen-11-27-12-9": {
      ref: "Genesis 11:27–12:9",
      scope: "Terah's family leaves Ur, and Abram is called out of Haran.",
      text: "Terah took Abram his son… to go into the land of Canaan. They came to Haran and lived there… So Abram went out as Yahweh had told him.",
      note: "The family is already migrating before God speaks. The call redirects a journey that was underway."
    },
    "josh-24-2": {
      ref: "Joshua 24:2",
      text: "Joshua said to all the people, “Yahweh, the God of Israel, says, ‘Your fathers lived beyond the River in old time, even Terah, the father of Abraham and the father of Nahor; and they served other gods.’”",
      note: "Israel's own Scripture says plainly that its ancestors were polytheists. The story does not begin with a pure faith."
    },
    "deut-26-5": {
      ref: "Deuteronomy 26:5",
      text: "You shall answer and say before Yahweh your God, “My father was a Syrian ready to perish. He went down into Egypt and lived there, few in number; and he became there a great, mighty, and populous nation.”",
      note: "The oldest creed in the Bible is a migration story — recited at harvest, so no generation could forget it started with a wanderer."
    },
    "acts-17-22-28": {
      ref: "Acts 17:22–28",
      scope: "Paul in Athens, arguing from the city's own altars and poets.",
      text: "What therefore you worship in ignorance, this I announce to you… He is not far from each one of us. For in him we live, move, and have our being. As some of your own poets have said, “For we are also his offspring.”",
      note: "Paul assumes the religious searching of non-Israelite peoples was not simply error — a precedent for how this course reads the ancient religious world."
    },
    "heb-1-1-3": {
      ref: "Hebrews 1:1–3",
      scope: "The opening sentence — revelation described as long, plural and various.",
      text: "God, having in the past spoken to the fathers through the prophets at many times and in various ways, has at the end of these days spoken to us by his Son, whom he appointed heir of all things, through whom also he made the worlds.",
      note: "Even the New Testament describes revelation as arriving over time, in many modes — and then names a center."
    },
    "luke-1-1-4": {
      ref: "Luke 1:1–4",
      scope: "A Gospel writer describing his own research method.",
      text: "Since many have undertaken to set in order a narrative concerning those matters which have been fulfilled among us, even as those who from the beginning were eyewitnesses and servants of the word delivered them to us, it seemed good to me also, having traced the course of all things accurately from the first, to write to you in order, most excellent Theophilus.",
      note: "Luke says plainly that he consulted sources and arranged them. Inspiration, on his own account, did not bypass the work."
    },
    "2tim-3-16": {
      ref: "2 Timothy 3:16",
      text: "Every Scripture is God-breathed and profitable for teaching, for reproof, for correction, and for instruction in righteousness.",
      note: "The verse tells us how early Christians regarded Scripture and what it is for. It does not, by itself, describe the mechanism of inspiration."
    },
    "john-5-39-40": {
      ref: "John 5:39–40",
      text: "You search the Scriptures, because you think that in them you have eternal life; and these are they which testify about me. Yet you will not come to me, that you may have life.",
      note: "Exhaustive knowledge of the text is not the same as arriving at what the text points to."
    },
    "luke-24-25-27": {
      ref: "Luke 24:25–27",
      scope: "The road to Emmaus — the risen Jesus rereading the story with two followers.",
      text: "Beginning from Moses and from all the prophets, he explained to them in all the Scriptures the things concerning himself.",
      note: "The first Christian hermeneutics lesson is taught by Jesus, and its method is to reread the whole library through one center."
    },
    "matt-5-21-48": {
      ref: "Matthew 5:21–48",
      scope: "Six sayings, each following the same pattern.",
      text: "You have heard that it was said to the ancient ones… but I tell you…",
      note: "Jesus does not merely quote Scripture. He interprets it — intensifying, redirecting, and repeatedly turning it toward mercy."
    },
    "matt-5-29": {
      ref: "Matthew 5:29",
      text: "If your right eye causes you to stumble, pluck it out and throw it away from you. For it is more profitable for you that one of your members should perish than for your whole body to be cast into Gehenna.",
      note: "Deliberately shocking teaching language. No one in the early church read this as surgical instruction — recognizing the rhetoric is part of reading it faithfully."
    },
    "ps-23-1": {
      ref: "Psalm 23:1",
      text: "Yahweh is my shepherd; I shall lack nothing.",
      note: "Poetry. God does not literally keep sheep. The metaphor says something true by way of an image."
    },
    "rev-12-3": {
      ref: "Revelation 12:3",
      text: "Another sign was seen in heaven. Behold, a great red dragon, having seven heads and ten horns, and seven crowns on his heads.",
      note: "Apocalyptic vision, not zoology. Symbolic numbers and beasts were a shared political vocabulary among the first readers."
    },
    "prov-26-4-5": {
      ref: "Proverbs 26:4–5",
      scope: "Two adjacent proverbs, kept side by side.",
      text: "Don't answer a fool according to his folly, lest you also be like him. Answer a fool according to his folly, lest he be wise in his own eyes.",
      note: "Wisdom literature places competing observations next to each other on purpose. Reading them as rules produces a contradiction; reading them as wisdom produces judgment."
    },
    "lev-19-19": {
      ref: "Leviticus 19:19",
      text: "You shall not sow your field with two kinds of seed; neither shall a garment made of two kinds of material come upon you.",
      note: "Covenant instruction for a specific ancient society. Before applying it, ask what it was doing there — and notice it sits nine verses from \"love your neighbor as yourself.\""
    },
    "john-1-18": {
      ref: "John 1:18",
      text: "No one has seen God at any time. The one and only Son, who is in the bosom of the Father, has declared him.",
      note: "The claim that sets this course's method: the clearest picture of God's character is a person."
    },
    "gen-1-2": {
      ref: "Genesis 1–2",
      scope: "The two creation accounts, read together — about ten minutes aloud.",
      text: "In the beginning, God created the heavens and the earth. Now the earth was formless and empty. Darkness was on the surface of the deep and God's Spirit was hovering over the surface of the waters. God said, “Let there be light,” and there was light.",
      note: "Chapter 1 is ordered, cosmic and spoken. Chapter 2 is intimate and hands-in-the-dirt. They are two accounts, kept side by side on purpose."
    },
    "gen-1-1-2-3": {
      ref: "Genesis 1:1–2:3",
      scope: "The seven-day account, opening to the first sabbath.",
      text: "God saw everything that he had made, and behold, it was very good. There was evening and there was morning, a sixth day… On the seventh day God finished his work which he had done; and he rested on the seventh day from all his work.",
      note: "Notice the rhythm: God speaks, it happens, God calls it good. Seven times good, then very good. Nothing is fought for."
    },
    "gen-1-31": {
      ref: "Genesis 1:31",
      text: "God saw everything that he had made, and behold, it was very good. There was evening and there was morning, a sixth day.",
      note: "The verse the whole lesson turns on. Tov — not morally flawless, but fitting, working, worth having."
    },
    "gen-2-4-25": {
      ref: "Genesis 2:4–25",
      scope: "The garden account: one man, one garden, one prohibition, one companion.",
      text: "Yahweh God formed man from the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul… Yahweh God said, “It is not good for the man to be alone. I will make him a helper comparable to him.”",
      note: "Here God gets close enough to use hands and breath. The first thing called not good is loneliness — not sin."
    },
    "ps-104": {
      ref: "Psalm 104",
      scope: "A creation hymn — Genesis 1 sung rather than narrated.",
      text: "You make springs gush forth in the valleys… They give drink to every animal of the field… Yahweh, how many are your works! In wisdom, you have made them all. The earth is full of your riches.",
      note: "Same theology as Genesis 1, in poetry: the world is abundant, populated and enjoyed by its maker."
    },
    "john-1-1-5": {
      ref: "John 1:1–5",
      text: "In the beginning was the Word, and the Word was with God, and the Word was God… All things were made through him. Without him, nothing was made that has been made. In him was life, and the life was the light of men.",
      note: "John opens with Genesis' first three words and then puts Christ inside them."
    },
    "john-1-1-14": {
      ref: "John 1:1–14",
      scope: "The prologue, through the incarnation.",
      text: "In the beginning was the Word… All things were made through him… The Word became flesh and lived among us. We saw his glory, such glory as of the one and only Son of the Father, full of grace and truth.",
      note: "If creation was God's first act of self-giving, the incarnation continues it rather than rescuing it. Matter was never the problem."
    },
    "col-1-15-20": {
      ref: "Colossians 1:15–20",
      scope: "An early Christian hymn, quoted by Paul.",
      text: "He is the image of the invisible God, the firstborn of all creation. For by him all things were created in the heavens and on the earth… All things have been created through him and for him. He is before all things, and in him all things are held together.",
      note: "Christ is placed at the moment of creation, not only at the cross — so the character of the beginning and the character of Jesus are one character."
    },
    "gen-1-1": {
      ref: "Genesis 1:1",
      text: "In the beginning, God created the heavens and the earth.",
      note: "Seven Hebrew words. No fight, no rival, no explanation of where God came from — the question the poem refuses to entertain."
    },
    "gen-1-26-31": {
      ref: "Genesis 1:26–31",
      text: "God said, “Let's make man in our image, after our likeness”… God created man in his own image. In God's image he created him; male and female he created them.",
      note: "The center of the lesson. Language that elsewhere in the ancient world could describe a king is applied here to humanity as such."
    },
    "gen-2-1-3": {
      ref: "Genesis 2:1–3",
      scope: "The seventh day — God rests, and blesses the rest.",
      text: "God blessed the seventh day, and made it holy, because he rested in it from all his work.",
      note: "Rest arrives as the culmination of creation, not as a reward for productivity. It is God's before it is anyone's obligation."
    },
    "gen-2-7": {
      ref: "Genesis 2:7",
      text: "Yahweh God formed man from the dust of the ground, and breathed into his nostrils the breath of life; and man became a living soul.",
      note: "Dust and breath together. Humans belong to the earth and receive life from God — which makes contempt for the body hard to justify from Genesis."
    },
    "john-1-3": {
      ref: "John 1:3",
      text: "All things were made through him. Without him, nothing was made that has been made.",
      note: "If creation happens through the Logos, then Christ is not a later addition to the story."
    },
    "col-1-17": {
      ref: "Colossians 1:17",
      text: "He is before all things, and in him all things are held together.",
      note: "An early Christian hymn placing Christ at the coherence of the material world, not only at its rescue."
    }
  };

  const css = `
    :host { display: inline; }
    button.t { font: inherit; color: inherit; letter-spacing: inherit; background: none;
      border: none; padding: 0; margin: 0; cursor: pointer;
      text-decoration: underline dotted; text-underline-offset: 3px; text-decoration-thickness: 1px;
      display: inline; text-align: inherit; text-indent: 0; white-space: inherit; }
    button.t:hover, button.t:focus-visible { color: var(--s-accent, oklch(0.82 0.12 72)); outline: none; }
    .wrap { position: relative; display: inline; }
    .card { position: absolute; z-index: 90; top: calc(100% + 10px); left: 0;
      width: 380px; max-width: 80vw; text-align: left; background: #1c1a15;
      border: 1px solid #45412f; box-shadow: 0 18px 44px rgba(0,0,0,0.55);
      padding: 16px 18px; font-family: 'Libre Franklin', system-ui, sans-serif;
      font-weight: 300; letter-spacing: 0; white-space: normal; }
    .card.light { background: #fbf9f4; border-color: #d8d3c6; box-shadow: 0 14px 32px rgba(0,0,0,0.16); }
    .head { display: flex; justify-content: space-between; align-items: baseline; gap: 14px; margin-bottom: 10px; }
    .kind { font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.18em; color: oklch(0.74 0.12 72); }
    .x { font-family: 'JetBrains Mono', monospace; font-size: 12px; line-height: 1; color: #6b665a; background: none; border: none; cursor: pointer; }
    .x:hover { color: #ece7db; }
    .scope { font-size: 12px; line-height: 1.55; color: #9c9689; margin: 0 0 10px; font-style: italic; }
    .text { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 19px; line-height: 1.55;
      color: #ece7db; margin: 0 0 12px; border-left: 2px solid #45412f; padding-left: 14px; }
    .note { font-size: 13px; line-height: 1.65; color: #9c9689; margin: 0 0 10px; }
    .tr { font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.16em; color: #6b665a; }
    .card.light .x:hover { color: #241f18; }
    .card.light .text { color: #241f18; border-left-color: #d8d3c6; }
    .card.light .note, .card.light .scope { color: #6b6558; }
    .card.light .tr { color: #a8a294; }
    .missing { font-size: 13px; color: #c46a4a; }
  `;

  class SRef extends HTMLElement {
    static get observedAttributes() { return ["ref-key", "align", "theme"]; }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this._open = false;
      this._onDocDown = (e) => { if (!e.composedPath().includes(this)) this._set(false); };
      this._onKey = (e) => { if (e.key === "Escape") this._set(false); };
    }
    connectedCallback() { this._label = this._label || this.textContent.trim(); this._render(); }
    attributeChangedCallback() { if (this.shadowRoot.childNodes.length) this._render(); }
    disconnectedCallback() { this._detach(); }
    _attach() { document.addEventListener("pointerdown", this._onDocDown, true); document.addEventListener("keydown", this._onKey); }
    _detach() { document.removeEventListener("pointerdown", this._onDocDown, true); document.removeEventListener("keydown", this._onKey); }
    _set(v) { if (this._open === v) return; this._open = v; v ? this._attach() : this._detach(); this._render(); }
    _render() {
      const key = this.getAttribute("ref-key") || "";
      const p = PASSAGES[key];
      const label = this._label || (p && p.ref) || key;
      const light = this.getAttribute("theme") === "light";
      const right = this.getAttribute("align") === "right";
      const sr = this.shadowRoot;
      sr.innerHTML = "";
      const style = document.createElement("style");
      style.textContent = css;
      const wrap = document.createElement("span");
      wrap.className = "wrap";
      const btn = document.createElement("button");
      btn.type = "button"; btn.className = "t"; btn.textContent = label;
      btn.setAttribute("aria-expanded", String(this._open));
      btn.addEventListener("click", (ev) => { ev.stopPropagation(); this._set(!this._open); });
      wrap.appendChild(btn);
      if (this._open) {
        const card = document.createElement("div");
        card.className = "card" + (light ? " light" : "");
        if (right) { card.style.left = "auto"; card.style.right = "0"; }
        if (!p) {
          card.innerHTML = '<div class="missing">No passage loaded for “' + key + '”.</div>';
        } else {
          const head = document.createElement("div");
          head.className = "head";
          const kind = document.createElement("span");
          kind.className = "kind"; kind.textContent = p.ref.toUpperCase();
          const x = document.createElement("button");
          x.className = "x"; x.type = "button"; x.textContent = "✕";
          x.addEventListener("click", (ev) => { ev.stopPropagation(); this._set(false); });
          head.append(kind, x);
          card.appendChild(head);
          if (p.scope) {
            const s = document.createElement("p");
            s.className = "scope"; s.textContent = p.scope;
            card.appendChild(s);
          }
          const t = document.createElement("p");
          t.className = "text"; t.textContent = p.text;
          const n = document.createElement("p");
          n.className = "note"; n.textContent = p.note;
          const tr = document.createElement("div");
          tr.className = "tr"; tr.textContent = "WORLD ENGLISH BIBLE · PUBLIC DOMAIN";
          card.append(t, n, tr);
        }
        wrap.appendChild(card);
      }
      sr.append(style, wrap);
    }
  }
  if (!customElements.get("s-ref")) customElements.define("s-ref", SRef);
  window.SCRIPTURE = PASSAGES;
})();
