// ----------------------------
// Stories data
// ----------------------------
const stories = [
  { username: "Your Story" },
  { username: "demo_user" },
  { username: "nature_lvr" },
  { username: "studentLife" },
  { username: "gymBro" },
  { username: "artsySoul" },
  { username: "kindFriend" },
  { username: "randomUser" }
];

// ----------------------------
// Fake Instagram feed data (5 posts)
// ----------------------------
const posts = [
  {
    id: 1,
    author: "@ilovememes",
    time: "2 hours ago",
    type: "image",
    image: "meme.png",
    caption: "What a funny meme",
    showAll: false,
    showComments: false,
    userLiked: false,
    comments: [
      {
        author: "@funnyman",
        time: "1h",
        text: "I love this meme"
      },
      {
        author: "@loser",
        time: "50m",
        text: "This is the dumbest thing I've seen today."
      },
      {
        author: "@iam67",
        time: "30m",
        text: "wtf is ts shit gng ong ts is trash"
      }
    ]
  },
  {
    id: 2,
    author: "@laptopcrashouts",
    time: "3 hours ago",
    type: "image",
    image: "crashout.jpg",
    caption: "i need 1000.00 CAD (before taxes) for a new laptop to produce music",
    showAll: false,
    showComments: false,
    userLiked: false,
    comments: [
      {
        author: "@ABcEd",
        time: "2h",
        text: "This guy sucks"
      },
      {
        author: "@Hirolaf",
        time: "1h",
        text: "MENTALLLLLL."
      },
      {
        author: "@nicePerson",
        time: "30m",
        text: "get this guy a new latop asap"
      }
    ]
  },
  {
    id: 3,
    author: "@team",
    time: "4 hours ago",
    type: "image",
    image: "gang.jpg",
    caption: "gangstas",
    showAll: false,
    showComments: false,
    userLiked: false,
    comments: [
      {
        author: "@supportiveBuddy",
        time: "3h",
        text: "aerhvuoewbfuewbfbe"
      },
      {
        author: "@croc",
        time: "2h",
        text: "Die die die die die die die"
      },
      {
        author: "@studyPal",
        time: "1h",
        text: "Let’s do a study session and stay away from comments together."
      }
    ]
  },
  {
    id: 4,
    author: "@arastotl",
    time: "5 hours ago",
    type: "image",
    image: "meme2.png",
    caption: "this got a nice chuckle out of me, haha!",
    showAll: false,
    showComments: false,
    userLiked: false,
    comments: [
      {
        author: "@hypeMan",
        time: "4h",
        text: "This is good and great and awesome and please give me 1000 cad"
      },
      {
        author: "@trollAccount",
        time: "3h",
        text: "you should just quit"
      },
      {
        author: "@kindStranger",
        time: "2h",
        text: "Setting boundaries irl is actually a power move."
      }
    ]
  },
  {
    id: 5,
    author: "@dougsurtees",
    time: "6 hours ago",
    type: "image",
    image: "ubcocampus.jpeg",
    caption: "Just a picture of this beautiful campus!",
    showAll: false,
    showComments: false,
    userLiked: false,
    comments: [
      {
        author: "@dougsurteesfanpage",
        time: "5h",
        text: "I love you doug, please give me 1000 cad"
      },
      {
        author: "@rudePerson",
        time: "4h",
        text: "This looks stupid, I hate this campus"
      },
      {
        author: "@pritchardhater",
        time: "3h",
        text: "Pritchard gave me food poisoning"
      }
    ]
  },
  {
    id: 6,
    author: "@team",
    time: "4 hours ago",
    type: "video",
    video: "video.mp4",
    caption: "holy aura, ts peak",
    showAll: false,
    showComments: false,
    userLiked: false,
    comments: [
      {
        author: "@supportiveBuddy",
        time: "3h",
        text: "aerhvuoewbfuewbfbe"
      },
      {
        author: "@croc",
        time: "2h",
        text: "Die die die die die die die"
      },
      {
        author: "@studyPal",
        time: "1h",
        text: "Let’s do a study session and stay away from comments together."
      }
    ]
  }
];

const toxicWords = ["abbo", "abo", "abortion", "abuse", "addict", "addicts", "adult", "africa", "african",
     "alla", "allah", "alligatorbait", "amateur", "american", "anal", "analannie", "analsex", "angie", "angry",
      "anus", "arab", "arabs", "areola", "argie", "aroused", "arse", "arsehole", "asian", "ass", "assassin", "assassinate", 
      "assassination", "assault", "assbagger", "assblaster", "assclown", "asscowboy", "asses", "assfuck", "assfucker", "asshat", "asshole", 
      "assholes", "asshore", "assjockey", "asskiss", "asskisser", "assklown", "asslick", "asslicker", "asslover", "assman", "assmonkey", "assmunch", "assmuncher", 
      "asspacker", "asspirate", "asspuppies", "assranger", "asswhore", "asswipe", "athletesfoot", "attack", "australian", "babe", "babies", "backdoor", "backdoorman", "backseat", "badfuck", 
      "balllicker", "balls", "ballsack", "banging", "baptist", "barelylegal", "barf", "barface", "barfface", "bast", "bastard", "bazongas", "bazooms", "beaner", "beast", "beastality", "beastial", "beastiality", 
      "beatoff", "beat-off", "beatyourmeat", "beaver", "bestial", "bestiality", "bi", "biatch", "bible", "bicurious", "bigass", "bigbastard", "bigbutt", "bigger", "bisexual", "bi-sexual", "bitch", "bitcher", "bitches",
       "bitchez", "bitchin", "bitching", "bitchslap", "bitchy", "biteme", "black", "blackman", "blackout", "blacks", "blind", "blow", "blowjob", "boang", "bogan", "bohunk", "bollick", "bollock", "bomb", "bombers", 
       "bombing", "bombs", "bomd", "bondage", "boner", "bong", "boob", "boobies", "boobs", "booby", "boody", "boom", "boong", "boonga", "boonie", "booty", "bootycall", "bountybar", "bra", "brea5t", "breast", "breastjob",
       "breastlover", "breastman", "brothel", "bugger", "buggered", "buggery", "bullcrap", "bulldike", "bulldyke", "bullshit", "bumblefuck", "bumfuck", "bunga", "bunghole", "buried", "burn", "butchbabes", "butchdike", "butchdyke", "butt",
        "buttbang", "butt-bang", "buttface", "buttfuck", "butt-fuck", "buttfucker", "butt-fucker", "buttfuckers", "butt-fuckers", "butthead", "buttman", "buttmunch", "buttmuncher", "buttpirate", "buttplug", "buttstain", "byatch", "cacker", 
        "cameljockey", "cameltoe", "canadian", "cancer", "carpetmuncher", "carruth", "catholic", "catholics", "cemetery", "chav", "cherrypopper", "chickslick", "children's", "chin", "chinaman", "chinamen", "chinese", "chink", "chinky", "choad",
         "chode", "christ", "christian", "church", "cigarette", "cigs", "clamdigger", "clamdiver", "clit", "clitoris", "clogwog", "cocaine", "cock", "cockblock", "cockblocker", "cockcowboy", "cockfight", "cockhead", "cockknob", "cocklicker", "cocklover",
          "cocknob", "cockqueen", "cockrider", "cocksman", "cocksmith", "cocksmoker", "cocksucer", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocktail", "cocktease", "cocky", "cohee", "coitus", "color", "colored", "coloured", "commie", "communist", 
          "condom", "conservative", "conspiracy", "coolie", "cooly", "coon", "coondog", "copulate", "cornhole", "corruption", "cra5h", "crabs", "crack", "crackpipe", "crackwhore", "crack-whore", "crap", "crapola", "crapper", "crappy", "crash", "creamy", "crime",
           "crimes", "criminal", "criminals", "crotch", "crotchjockey", "crotchmonkey", "crotchrot", "cum", "cumbubble", "cumfest", "cumjockey", "cumm", "cummer", "cumming", "cumquat", "cumqueen", "cumshot", "cunilingus", "cunillingus", "cunn", "cunnilingus", "cunntt", "cunt", 
           "cunteyed", "cuntfuck", "cuntfucker", "cuntlick", "cuntlicker", "cuntlicking", "cuntsucker", "cybersex", "cyberslimer", "dago", "dahmer", "dammit", "damn", "damnation", "damnit", "darkie", "darky", "datnigga", "dead", "deapthroat", "death", "deepthroat", "defecate", "dego",
            "demon", "deposit", "desire", "destroy", "deth", "devil", "devilworshipper", "dick", "dickbrain", "dickforbrains", "dickhead", "dickless", "dicklick", "dicklicker", "dickman", "dickwad", "dickweed", "diddle", "die", "died", "dies", "dike", "dildo", "dingleberry", "dink", "dipshit",
             "dipstick", "dirty", "disease", "diseases", "disturbed", "dive", "dix", "dixiedike", "dixiedyke", "doggiestyle", "doggystyle", "dong", "doodoo", "doo-doo", "doom", "dope", "dragqueen", "dragqween", "dripdick", "drug", "drunk", "drunken", "dumb", "dumbass", "dumbbitch", "dumbfuck", 
             "dyefly", "dyke", "easyslut", "eatballs", "eatme", "eatpussy", "ecstacy", "ejaculate", "ejaculated", "ejaculating", "ejaculation", "enema", "enemy", "erect", "erection", "ero", "escort", "ethiopian", "ethnic", "european", "evl", "excrement", "execute", "executed", "execution", 
             "executioner", "explosion", "facefucker", "faeces", "fag", "fagging", "faggot", "fagot", "failed", "failure", "fairies", "fairy", "faith", "fannyfucker", "fart", "farted", "farting", "farty", "fastfuck", "fat", "fatah", "fatass", "fatfuck", "fatfucker", 
             "fatso", "fckcum", "fear", "feces", "felatio", "felch", "felcher", "felching", "fellatio", "feltch", "feltcher", "feltching", "fetish", "fight", "filipina", "filipino", "fingerfood", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", 
             "fire", "firing", "fister", "fistfuck", "fistfucked", "fistfucker", "fistfucking", "fisting", "flange", "flasher", "flatulence", "floo", "flydie", "flydye", "fok", "fondle", "footaction", "footfuck", "footfucker", "footlicker", "footstar", "fore", "foreskin", 
             "forni", "fornicate", "foursome", "fourtwenty", "fraud", "freakfuck", "freakyfucker", "freefuck", "fu", "fubar", "fuc", "fucck", "fuck", "fucka", "fuckable", "fuckbag", "fuckbuddy", "fucked", "fuckedup", "fucker", "fuckers", "fuckface", "fuckfest", "fuckfreak", 
             "fuckfriend", "fuckhead", "fuckher", "fuckin", "fuckina", "fucking", "fuckingbitch", "fuckinnuts", "fuckinright", "fuckit", "fuckknob", "fuckme", "fuckmehard", "fuckmonkey", "fuckoff", "fuckpig", "fucks", "fucktard", "fuckwhore", "fuckyou", "fudgepacker", "fugly",
              "fuk", "fuks", "funeral", "funfuck", "fungus", "fuuck", "gangbang", "gangbanged", "gangbanger", "gangsta", "gatorbait", "gay", "gaymuthafuckinwhore", "gaysex", "geez", "geezer", "geni", "genital", "german", "getiton", "gin", "ginzo", "gipp", "girls", 
              "givehead", "glazeddonut", "gob", "god", "godammit", "goddamit", "goddammit", "goddamn", "goddamned", "goddamnes", "goddamnit", "goddamnmuthafucker", "goldenshower", "gonorrehea", "gonzagas", "gook", "gotohell", "goy", "goyim", "greaseball", "gringo", 
              "groe", "gross", "grostulation", "gubba", "gummer", "gun", "gyp", "gypo", "gypp", "gyppie", "gyppo", "gyppy", "hamas", "handjob", "hapa", "harder", "hardon", "harem", "headfuck", "headlights", "hebe", "heeb", "hell", "henhouse", "heroin", "herpes", 
              "heterosexual", "hijack", "hijacker", "hijacking", "hillbillies", "hindoo", "hiscock", "hitler", "hitlerism", "hitlerist", "hiv", "ho", "hobo", "hodgie", "hoes", "hole", "holestuffer", "homicide", "homo", "homobangers", "homosexual", "honger", "honk", 
              "honkers", "honkey", "honky", "hook", "hooker", "hookers", "hooters", "hore", "hork", "horn", "horney", "horniest", "horny", "horseshit", "hosejob", "hoser", "hostage", "hotdamn", "hotpussy", "hottotrot", "hummer", "husky", "hussy", "hustler", "hymen", 
              "hymie", "iblowu", "idiot", "ikey", "illegal", "incest", "insest", "intercourse", "interracial", "intheass", "inthebuff", "israel", "israeli", "israel's", "italiano", "itch", "jackass", "jackoff", "jackshit", "jacktheripper", "jade", "jap", "japanese", "japcrap",
               "jebus", "jeez", "jerkoff", "jesus", "jesuschrist", "jew", "jewish", "jiga", "jigaboo", "jigg", "jigga", "jiggabo", "jigger", "jiggy", "jihad", "jijjiboo", "jimfish", "jism", "jiz", "jizim", "jizjuice", "jizm", "jizz", "jizzim", "jizzum", "joint", "juggalo", "jugs", "junglebunny", 
               "kaffer", "kaffir", "kaffre", "kafir", "kanake", "kid", "kigger", "kike", "kill", "killed", "killer", "killing", "kills", "kink", "kinky", "kissass", "kkk", "knife", "knockers", "kock", "kondum", "koon", "kotex", "krap", "krappy", "kraut", "kum", "kumbubble", "kumbullbe", 
               "kummer", "kumming", "kumquat", "kums", "kunilingus", "kunnilingus", "kunt", "ky", "kyke", "lactate", "laid", "lapdance", "latin", "lesbain", "lesbayn", "lesbian", "lesbin", "lesbo", "lez", "lezbe", "lezbefriends", "lezbo", "lezz", "lezzo", "liberal", "libido", 
               "licker", "lickme", "lies", "limey", "limpdick", "limy", "lingerie", "liquor", "livesex", "loadedgun", "lolita", "looser", "loser", "lotion", "lovebone", "lovegoo", "lovegun", "lovejuice", "lovemuscle", "lovepistol", "loverocket", "lowlife", "lsd", "lubejob", "lucifer", 
               "luckycammeltoe", "lugan", "lynch", "macaca", "mad", "mafia", "magicwand", "mams", "manhater", "manpaste", "marijuana", "mastabate", "mastabater", "masterbate", "masterblaster", "mastrabator", "masturbate", "masturbating", "mattressprincess", "meatbeatter", 
               "meatrack", "meth", "mexican", "mgger", "mggor", "mickeyfinn", "mideast", "milf", "minority", "mockey", "mockie", "mocky", "mofo", "moky", "moles", "molest", "molestation", "molester", "molestor", "moneyshot", "mooncricket", "mormon", "moron", "moslem", "mosshead", 
               "mothafuck", "mothafucka", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckin", "mothafucking", "mothafuckings", "motherfuck", "motherfucked", "motherfucker", "motherfuckin", "motherfucking", "motherfuckings", "motherlovebone", "muff", "muffdive", "muffdiver", 
               "muffindiver", "mufflikcer", "mulatto", "muncher", "munt", "murder", "murderer", "muslim", "naked", "narcotic", "nasty", "nastybitch", "nastyho", "nastyslut", "nastywhore", "nazi", "necro", "negro", "negroes", "negroid", "negro's", "nig", "niger", "nigerian", "nigerians", 
               "nigg", "nigga", "niggah", "niggaracci", "niggard", "niggarded", "niggarding", "niggardliness", "niggardliness's", "niggardly", "niggards", "niggard's", "niggaz", "nigger", "niggerhead", "niggerhole", "niggers", "nigger's", "niggle", "niggled", "niggles", "niggling", "nigglings", 
               "niggor", "niggur", "niglet", "nignog", "nigr", "nigra", "nigre", "nip", "nipple", "nipplering", "nittit", "nlgger", "nlggor", "nofuckingway", "nook", "nookey", "nookie", "noonan", "nooner", "nude", "nudger", "nuke", "nutfucker", "nymph", "ontherag", "oral", "orga", "orgasim", "orgasm", 
               "orgies", "orgy", "osama", "paki", "palesimian", "palestinian", "pansies", "pansy", "panti", "panties", "payo", "pearlnecklace", "peck", "pecker", "peckerwood", "pee", "peehole", "pee-pee", "peepshow", "peepshpw", "pendy", "penetration", "peni5", "penile", "penis", "penises", 
               "penthouse", "period", "perv", "phonesex", "phuk", "phuked", "phuking", "phukked", "phukking", "phungky", "phuq", "pi55", "picaninny", "piccaninny", "pickaninny", "piker", "pikey", "piky", "pimp", "pimped", "pimper", "pimpjuic", "pimpjuice", "pimpsimp", "pindick", "piss", "pissed", 
               "pisser", "pisses", "pisshead", "pissin", "pissing", "pissoff", "pistol", "pixie", "pixy", "playboy", "playgirl", "pocha", "pocho", "pocketpool", "pohm", "polack", "pom", "pommie", "pommy", "poo", "poon", "poontang", "poop", "pooper", "pooperscooper", "pooping", "poorwhitetrash", 
               "popimp", "porchmonkey", "porn", "pornflick", "pornking", "porno", "pornography", "pornprincess", "pot", "poverty", "premature", "pric", "prick", "prickhead", "primetime", "propaganda", "pros", "prostitute", "protestant", "pu55i", "pu55y", "pube", "pubic", "pubiclice", "pud", "pudboy", 
               "pudd", "puddboy", "puke", "puntang", "purinapricness", "puss", "pussie", "pussies", "pussy", "pussycat", "pussyeater", "pussyfucker", "pussylicker", "pussylips", "pussylover", "pussypounder", "pusy", "quashie", "queef", "queer", "quickie", "quim", "ra8s", "rabbi", "racial", "racist", 
               "radical", "radicals", "raghead", "randy", "rape", "raped", "raper", "rapist", "rearend", "rearentry", "rectum", "redlight", "redneck", "reefer", "reestie", "refugee", "reject", "remains", "rentafuck", "republican", "rere", "retard", "retarded", "ribbed", "rigger", "rimjob", "rimming", 
               "roach", "robber", "roundeye", "rump", "russki", "russkie", "sadis", "sadom", "samckdaddy", "sandm", "sandnigger", "satan", "scag", "scallywag", "scat", "schlong", "screw", "screwyou", "scrotum", "scum", "semen", "seppo", "servant", "sex", "sexed", "sexfarm", "sexhound", "sexhouse", "sexing", 
               "sexkitten", "sexpot", "sexslave", "sextogo", "sextoy", "sextoys", "sexual", "sexually", "sexwhore", "sexy", "sexymoma", "sexy-slim", "shag", "shaggin", "shagging", "shat", "shav", "shawtypimp", "sheeney", "shhit", "shinola", "shit", "shitcan", "shitdick", "shite", "shiteater", "shited", 
               "shitface", "shitfaced", "shitfit", "shitforbrains", "shitfuck", "shitfucker", "shitfull", "shithapens", "shithappens", "shithead", "shithouse", "shiting", "shitlist", "shitola", "shitoutofluck", "shits", "shitstain", "shitted", "shitter", "shitting", "shitty", "shoot", "shooting", "shortfuck", 
               "showtime", "sick", "sissy", "sixsixsix", "sixtynine", "sixtyniner", "skank", "skankbitch", "skankfuck", "skankwhore", "skanky", "skankybitch", "skankywhore", "skinflute", "skum", "skumbag", "slant", "slanteye", "slapper", "slaughter", "slav", "slave", "slavedriver", "sleezebag", "sleezeball", 
               "slideitin", "slime", "slimeball", "slimebucket", "slopehead", "slopey", "slopy", "slut", "sluts", "slutt", "slutting", "slutty", "slutwear", "slutwhore", "smack", "smackthemonkey", "smut", "snatch", "snatchpatch", "snigger", "sniggered", "sniggering", "sniggers", "snigger's", "sniper", "snot",
                "snowback", "snownigger", "sob", "sodom", "sodomise", "sodomite", "sodomize", "sodomy", "sonofabitch", "sonofbitch", "sooty", "sos", "soviet", "spaghettibender", "spaghettinigger", "spank", "spankthemonkey", "sperm", "spermacide", "spermbag", "spermhearder", "spermherder", "spic", "spick", "spig",
                 "spigotty", "spik", "spit", "spitter", "splittail", "spooge", "spreadeagle", "spunk", "spunky", "squaw", "stagg", "stiffy", "strapon", "stringer", "stripclub", "stroke", "stroking", "stupid", "stupidfuck", "stupidfucker", "suck", "suckdick", "sucker", "suckme", "suckmyass", "suckmydick", "suckmytit", "suckoff",
                  "suicide", "swallow", "swallower", "swalow", "swastika", "sweetness", "syphilis", "taboo", "taff", "tampon", "tang", "tantra", "tarbaby", "tard", "teat", "terror", "terrorist", "teste", "testicle", "testicles", "thicklips", "thirdeye", "thirdleg", "threesome", "threeway", "timbernigger", "tinkle", "tit", "titbitnipply",
                   "titfuck", "titfucker", "titfuckin", "titjob", "titlicker", "titlover", "tits", "tittie", "titties", "titty", "tnt", "toilet", "tongethruster", "tongue", "tonguethrust", "tonguetramp", "tortur", "torture", "tosser", "towelhead", "trailertrash", "tramp", "trannie", "tranny", "transexual", "transsexual", "transvestite", "triplex",
                    "trisexual", "trojan", "trots", "tuckahoe", "tunneloflove", "turd", "turnon", "twat", "twink", "twinkie", "twobitwhore", "uck", "uk", "unfuckable", "upskirt", "uptheass", "upthebutt", "urinary", "urinate", "urine", "usama", "uterus", "vagina", "vaginal", "vatican", "vibr", "vibrater", "vibrator", "vietcong", "violence", "virgin", "virginbreaker",
                     "vomit", "vulva", "wab", "wank", "wanker", "wanking", "waysted", "weapon", "weenie", "weewee", "welcher", "welfare", "wetb", "wetback", "wetspot", "whacker", "whash", "whigger", "whiskey", "whiskeydick", "whiskydick", "whit", "whitenigger", "whites", "whitetrash", "whitey", "whiz", "whop", "whore", "whorefucker", "whorehouse", "wigger", "willie", 
                     "williewanker", "willy", "wn", "wog", "women's", "wop", "wtf", "wuss", "wuzzie", "xtc", "xxx", "yankee", "yellowman", "zigabo", "zipperhead"];                     const positiveWords = ["love", "great", "amazing", "cool", "thanks", "appreciate", "keep", "happy"];


let escapeCount = 0;

 

// ----------------------------
// Stories rendering
// ----------------------------
function renderStories() {
  const bar = document.getElementById("storiesBar");
  bar.innerHTML = "";

  stories.forEach(story => {
    const item = document.createElement("div");
    item.className = "story";

    const avatar = document.createElement("div");
    avatar.className = "story-avatar";

    const label = document.createElement("span");
    label.textContent =
      story.username.length > 9 ? story.username.slice(0, 9) + "…" : story.username;

    item.appendChild(avatar);
    item.appendChild(label);
    bar.appendChild(item);
  });
}

// ----------------------------
// AI-style analysis functions
// ----------------------------

function analyzeComment(text) {
  let score = 0;
  let toxicFound = [];
  let positiveFound = [];

  const lower = text.toLowerCase();

  toxicWords.forEach(word => {
    if (lower.includes(word)) {
      score += 60;
      toxicFound.push(word);
    }
  });

  positiveWords.forEach(word => {
    if (lower.includes(word)) {
      positiveFound.push(word);
      if (score > 0) score -= 10; // slight forgiveness if positive
    }
  });

  if (score > 100) score = 100;

  return {
    score,
    toxicFound,
    isToxic: score >= 40,
    isSupportive: positiveFound.length > 0
  };
}

// Very simple "AI rewrite" for toxic comments
function fakeRewrite(text) {
  return text
    .replace(/dumb|stupid|idiot/gi, "bad")
    .replace(/trash|terrible|hate/gi, "not very helpful")
    .replace(/kill/gi, "hurt")
    .replace(/you should just quit/gi, "maybe try a different approach");
}

// ----------------------------
// Rendering the feed
// ----------------------------

function renderFeed() {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  let totalScore = 0;
  let totalCount = 0;
  let toxicCount = 0;
  let supportiveCount = 0;

  posts.forEach((post, index) => {
    const postCard = document.createElement("article");
    postCard.className = "post-card";
    postCard.dataset.index = index;

    // Header
    const header = document.createElement("div");
    header.className = "post-header";

    const avatar = document.createElement("div");
    avatar.className = "avatar";

    const headerText = document.createElement("div");
    const username = document.createElement("div");
    username.className = "username";
    username.textContent = post.author;
    const time = document.createElement("div");
    time.className = "timestamp";
    time.textContent = post.time;

    headerText.appendChild(username);
    headerText.appendChild(time);
    header.appendChild(avatar);
    header.appendChild(headerText);

    // Caption
    const caption = document.createElement("div");
    caption.className = "post-content";
    caption.textContent = post.caption;

    // Media (image or video)
    const imgWrapper = document.createElement("div");
    imgWrapper.className = "post-image-wrapper";
    if (post.type === "video" && post.video) {
      const video = document.createElement("video");
      video.src = post.video;
      video.controls = true;
      video.style.width = "100%";
      imgWrapper.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = post.image;
      img.alt = "Post image";
      imgWrapper.appendChild(img);
    }

    // Action buttons row
    const actions = document.createElement("div");
    actions.className = "post-actions";

    const likeBtn = document.createElement("button");
    likeBtn.className = "action-btn like-btn";
    if (post.userLiked) likeBtn.classList.add("liked");
    likeBtn.innerHTML = `<span class="icon">❤</span><span>${post.userLiked ? "Liked" : "Like"}</span>`;

    likeBtn.addEventListener("click", () => {
      posts[index].userLiked = !posts[index].userLiked;
      renderFeed();
    });

    const commentBtn = document.createElement("button");
    commentBtn.className = "action-btn";
    commentBtn.innerHTML = `<span class="icon">💬</span><span>${post.showComments ? "Hide" : "Comments"}</span>`;
    commentBtn.addEventListener("click", () => {
      posts[index].showComments = !posts[index].showComments;
      renderFeed();
    });

    const repostBtn = document.createElement("button");
    repostBtn.className = "action-btn";
    repostBtn.innerHTML = `<span class="icon">🔁</span><span>Repost</span>`;

    const shareBtn = document.createElement("button");
    shareBtn.className = "action-btn";
    shareBtn.innerHTML = `<span class="icon">📤</span><span>Share</span>`;

    actions.appendChild(likeBtn);
    actions.appendChild(commentBtn);
    actions.appendChild(repostBtn);
    actions.appendChild(shareBtn);

    // Comments section (only visible if showComments is true)
    const commentsSection = document.createElement("div");
    commentsSection.className = "comments-section";
    if (!post.showComments) {
      commentsSection.style.display = "none";
    }

    const commentsHeader = document.createElement("div");
    commentsHeader.className = "comments-header";
    commentsHeader.textContent = "Comments";
    commentsSection.appendChild(commentsHeader);

    const commentsList = document.createElement("div");
    commentsList.className = "comments-list";

    let hasToxic = false;

    post.comments.forEach(comment => {
      const analysis = analyzeComment(comment.text);
      totalScore += analysis.score;
      totalCount++;
      if (analysis.isToxic) {
        toxicCount++;
        hasToxic = true;
      }
      if (analysis.isSupportive) {
        supportiveCount++;
      }

      const item = document.createElement("div");
      item.className = "comment-item";

      const top = document.createElement("div");
      top.className = "comment-top";

      const authorEl = document.createElement("span");
      authorEl.className = "comment-author";
      authorEl.textContent = comment.author;

      const timeEl = document.createElement("span");
      timeEl.className = "comment-time";
      timeEl.textContent = comment.time;

      top.appendChild(authorEl);
      top.appendChild(timeEl);

      const textEl = document.createElement("div");
      textEl.className = "comment-text";

      const meta = document.createElement("div");
      meta.className = "comment-meta";

      const isBlocked = analysis.isToxic && !post.showAll;

      if (isBlocked) {
        textEl.textContent = "[Blocked toxic comment]";
        const badge = document.createElement("span");
        badge.className = "comment-badge";
        badge.textContent = "Hidden for your well-being";
        meta.appendChild(badge);
      } else {
        textEl.textContent = comment.text;

        if (analysis.isToxic) {
          const badge = document.createElement("span");
          badge.className = "comment-badge";
          badge.textContent = "AI flagged: possible harm";
          meta.appendChild(badge);

          const rewriteBtn = document.createElement("button");
          rewriteBtn.className = "rewrite-btn";
          rewriteBtn.textContent = "Show kinder version";
          rewriteBtn.addEventListener("click", () => {
            textEl.textContent = fakeRewrite(comment.text);
            rewriteBtn.textContent = "Showing AI rewrite";
            rewriteBtn.disabled = true;
          });
          meta.appendChild(rewriteBtn);
        } else if (analysis.isSupportive) {
          const badge = document.createElement("span");
          badge.className = "comment-badge safe";
          badge.textContent = "Supportive";
          meta.appendChild(badge);
        }
      }

      item.appendChild(top);
      item.appendChild(textEl);
      item.appendChild(meta);
      commentsList.appendChild(item);
    });

    commentsSection.appendChild(commentsList);

    // "Show all comments (including blocked)" button, only if there are toxic comments
    if (hasToxic) {
      const showAllBtn = document.createElement("button");
      showAllBtn.className = "show-all-btn";
      showAllBtn.textContent = post.showAll
        ? "Hide blocked comments again"
        : "Show all comments (including blocked)";

      showAllBtn.addEventListener("click", () => {
        posts[index].showAll = !posts[index].showAll;
        renderFeed();
      });

      commentsSection.appendChild(showAllBtn);
    }

    // Comment input + runaway Post button for toxic text
    const inputRow = document.createElement("div");
    inputRow.className = "comment-input-row";

    const input = document.createElement("input");
    input.className = "comment-input";
    input.placeholder = "Add a comment...";

    const postBtn = document.createElement("button");
    postBtn.className = "comment-post-btn";
    postBtn.textContent = "Post";

    inputRow.appendChild(input);
    inputRow.appendChild(postBtn);
    commentsSection.appendChild(inputRow);

    const hint = document.createElement("small");
    hint.className = "comment-hint";
    hint.textContent =
      "Toxic comments are blocked. If you type harmful words, the Post button will try to escape.";
    commentsSection.appendChild(hint);

    // Attach logic for posting + runaway
    setupCommentInput(index, input, postBtn);

    // Assemble post card
    postCard.appendChild(header);
    postCard.appendChild(caption);
    postCard.appendChild(imgWrapper);
    postCard.appendChild(actions);
    postCard.appendChild(commentsSection);

    feed.appendChild(postCard);
  });

  updateGlobalAI(totalScore, totalCount, toxicCount, supportiveCount);
  updateEscapeCount();
}

// ----------------------------
// Global AI panel
// ----------------------------

function updateGlobalAI(totalScore, totalCount, toxicCount, supportiveCount) {
  const avg = totalCount === 0 ? 0 : Math.round(totalScore / totalCount);

  const toxicityPercent = document.getElementById("toxicityPercent");
  const meterFill = document.getElementById("meterFill");
  const toxicityTag = document.getElementById("toxicityTag");
  const wellBeingMessage = document.getElementById("wellBeingMessage");
  const aiFlagsList = document.getElementById("aiFlagsList");

  toxicityPercent.textContent = avg + "%";
  meterFill.style.width = avg + "%";

  let tagText = "";
  let message = "";

  if (avg < 20) {
    tagText = "Mostly safe 🙂";
    message =
      "This feed looks mostly supportive and safe to read, but remember you can always scroll away if something bothers you.";
  } else if (avg < 60) {
    tagText = "Mixed environment 😐";
    message =
      "Some comments may be negative. Read with caution and give yourself permission to stop if it feels too much.";
  } else {
    tagText = "High toxicity ⚠️";
    message =
      "Many comments contain insults or negativity. For your mental well-being, it might be better to skip the comment sections today.";
  }

  toxicityTag.textContent = tagText;
  wellBeingMessage.textContent = message;

  aiFlagsList.innerHTML = "";

  if (toxicCount > 0) {
    const pill = document.createElement("span");
    pill.className = "ai-flag-pill danger";
    pill.textContent = `${toxicCount} toxic comment(s) detected`;
    aiFlagsList.appendChild(pill);
  }

  if (supportiveCount > 0) {
    const pill = document.createElement("span");
    pill.className = "ai-flag-pill safe";
    pill.textContent = `${supportiveCount} supportive comment(s)`;
    aiFlagsList.appendChild(pill);
  }

  if (toxicCount === 0 && supportiveCount === 0) {
    const pill = document.createElement("span");
    pill.className = "ai-flag-pill";
    pill.textContent = "No strong signals detected yet";
    aiFlagsList.appendChild(pill);
  }
}

// ----------------------------
// Comment input + runaway Post
// ----------------------------

function updateEscapeCount() {
  const el = document.getElementById("escapeCountText");
  if (!el) return;
  el.innerHTML = `Instagram has protected you <strong>${escapeCount}</strong> times so far by stopping harmful comments.`;
}

function setupCommentInput(postIndex, inputEl, postBtn) {
  const row = postBtn.parentElement;

  // Runaway logic when user types toxic text and moves toward the button
  row.addEventListener("mousemove", event => {
    const text = inputEl.value.trim();
    if (!text) {
      postBtn.style.transform = "translate(0, 0)";
      return;
    }

    const analysis = analyzeComment(text);
    if (!analysis.isToxic) {
      postBtn.style.transform = "translate(0, 0)";
      return;
    }

    const rect = postBtn.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;

    const distX = event.clientX - btnCenterX;
    const distY = event.clientY - btnCenterY;
    const distance = Math.sqrt(distX * distX + distY * distY);

    const threshold = 80; // how close the mouse can get before it runs

    if (distance < threshold) {
      const offsetX = (Math.random() - 0.5) * 120;
      const offsetY = (Math.random() - 0.5) * 40;
      postBtn.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      escapeCount++;
      updateEscapeCount();
    }
  });

  // When clicking Post: accept only non-toxic comments
  postBtn.addEventListener("click", () => {
    const text = inputEl.value.trim();
    if (!text) return;

    const analysis = analyzeComment(text);
    if (analysis.isToxic) {
      alert(
        "Our AI thinks this comment might be harmful. Try rephrasing it in a kinder way before posting."
      );
      return;
    }

    posts[postIndex].comments.push({
      author: "@you",
      time: "now",
      text
    });
    inputEl.value = "";
    postBtn.style.transform = "translate(0, 0)";
    renderFeed();
  });
}

// ----------------------------
// Init
// ----------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderStories();
  renderFeed();
});
