class RainbowText {
  constructor(element, saturation = 100, lightness = 50) {
    // script - https://www.html-code-generator.com/html/rainbow-text-generator
    // saturation = (int) between 20 - 100;
    // lightness =  (int) between 20 - 99;
    if (!element) {
      return;
    }
    this.saturation = saturation < 20 ? 20 : saturation > 100 ? 100 : saturation;
    this.lightness = lightness < 20 ? 20 : lightness > 99 ? 99 : lightness;
    if (element.length !== void 0 && element.length > 1) {
      for (let i = 0; i < element.length; i++) {
        this.do_color(element[i]);
      }
    } else {
      this.do_color(element);
    }
  }
  do_color(element) {
    let text = element.innerText;
    let text_length = text.length;
    if (text_length < 2) {
      return;
    }
    let span = '';
    for (let i = 0; i < text_length; i++) {
      span += '<span style="color:hsl(' + Math.round((360 * i / text_length)) + ',' + this.saturation + '%, ' + this.lightness + '%)">' + text[i] + '</span>';
    }
    element.innerHTML = span;
  }
};

new RainbowText(document.getElementById("randombtn"));

function newPhrase(questionorstatement, subjectmatter) {
  var list = ['aardvark', 'abyssinian', 'adelie penguin', 'affenpinscher', 'afghan hound', 'african bush elephant', 'african civet', 'african clawed frog', 'african forest elephant', 'african palm civet', 'african penguin', 'african tree toad', 'african wild dog', 'ainu dog', 'airedale terrier', 'akbash', 'akita', 'alaskan malamute', 'albatross', 'aldabra giant tortoise', 'alligator', 'alpine dachsbracke', 'american bulldog', 'american cocker spaniel', 'american coonhound', 'american eskimo dog', 'american foxhound', 'american pit bull terrier', 'american staffordshire terrier', 'american water spaniel', 'anatolian shepherd dog', 'angelfish', 'ant', 'anteater', 'antelope', 'appenzeller dog', 'arctic fox', 'arctic hare', 'arctic wolf', 'armadillo', 'asian elephant', 'asian giant hornet', 'asian palm civet', 'asiatic black bear', 'australian cattle dog', 'australian kelpie dog', 'australian mist', 'australian shepherd', 'australian terrier', 'avocet', 'axolotl', 'aye aye', 'baboon', 'bactrian camel', 'badger', 'balinese', 'banded palm civet', 'bandicoot', 'barb', 'barn owl', 'barnacle', 'barracuda', 'basenji dog', 'basking shark', 'basset hound', 'bat', 'bavarian mountain hound', 'beagle', 'bear', 'bearded collie', 'bearded dragon', 'beaver', 'bedlington terrier', 'beetle', 'bengal tiger', 'bernese mountain dog', 'bichon frise', 'binturong', 'bird', 'birds of paradise', 'birman', 'bison', 'black bear', 'black rhinoceros', 'black russian terrier', 'black widow spider', 'bloodhound', 'blue lacy dog', 'blue whale', 'bluetick coonhound', 'bobcat', 'bolognese dog', 'bombay', 'bongo', 'bonobo', 'booby', 'border collie', 'border terrier', 'bornean orang-utan', 'borneo elephant', 'boston terrier', 'bottle nosed dolphin', 'boxer dog', 'boykin spaniel', 'brazilian terrier', 'brown bear', 'budgerigar', 'buffalo', 'bull mastiff', 'bull shark', 'bull terrier', 'bulldog', 'bullfrog', 'bumble bee', 'burmese', 'burrowing frog', 'butterfly', 'butterfly fish', 'caiman', 'caiman lizard', 'cairn terrier', 'camel', 'canaan dog', 'capybara', 'caracal', 'carolina dog', 'cassowary', 'cat', 'caterpillar', 'catfish', 'cavalier king charles spaniel', 'centipede', 'cesky fousek', 'chameleon', 'chamois', 'cheetah', 'chesapeake bay retriever', 'chicken', 'chihuahua', 'chimpanzee', 'chinchilla', 'chinese crested dog', 'chinook', 'chinstrap penguin', 'chipmunk', 'chow chow', 'cichlid', 'clouded leopard', 'clown fish', 'clumber spaniel', 'coati', 'cockroach', 'collared peccary', 'collie', 'common buzzard', 'common frog', 'common loon', 'common toad', 'coral', 'cottontop tamarin', 'cougar', 'cow', 'coyote', 'crab', 'crab-eating macaque', 'crane', 'crested penguin', 'crocodile', 'cross river gorilla', 'curly coated retriever', 'cuscus', 'cuttlefish', 'dachshund', 'dalmatian', 'darwins frog', 'deer', 'desert tortoise', 'deutsche bracke', 'dhole', 'dingo', 'discus', 'doberman pinscher', 'dodo', 'dog', 'dogo argentino', 'dogue de bordeaux', 'dolphin', 'donkey', 'dormouse', 'dragonfly', 'drever', 'duck', 'dugong', 'dunker', 'dusky dolphin', 'dwarf crocodile', 'eagle', 'earwig', 'eastern gorilla', 'eastern lowland gorilla', 'echidna', 'edible frog', 'egyptian mau', 'electric eel', 'elephant', 'elephant seal', 'elephant shrew', 'emperor penguin', 'emperor tamarin', 'emu', 'english cocker spaniel', 'english shepherd', 'english springer spaniel', 'entlebucher mountain dog', 'epagneul pont audemer', 'eskimo dog', 'estrela mountain dog', 'falcon', 'fennec fox', 'ferret', 'field spaniel', 'fin whale', 'finnish spitz', 'fire-bellied toad', 'fish', 'fishing cat', 'flamingo', 'flat coat retriever', 'flounder', 'fly', 'flying squirrel', 'fossa', 'fox', 'fox terrier', 'french bulldog', 'frigatebird', 'frilled lizard', 'frog', 'fur seal', 'galapagos penguin', 'galapagos tortoise', 'gar', 'gecko', 'gentoo penguin', 'geoffroys tamarin', 'gerbil', 'german pinscher', 'german shepherd', 'gharial', 'giant african land snail', 'giant clam', 'giant panda bear', 'giant schnauzer', 'gibbon', 'gila monster', 'giraffe', 'glass lizard', 'glow worm', 'goat', 'golden lion tamarin', 'golden oriole', 'golden retriever', 'goose', 'gopher', 'gorilla', 'grasshopper', 'great dane', 'great white shark', 'greater swiss mountain dog', 'green bee-eater', 'greenland dog', 'grey mouse lemur', 'grey reef shark', 'grey seal', 'greyhound', 'grizzly bear', 'grouse', 'guinea fowl', 'guinea pig', 'guppy', 'hammerhead shark', 'hamster', 'hare', 'harrier', 'havanese', 'hedgehog', 'hercules beetle', 'hermit crab', 'heron', 'highland cattle', 'himalayan', 'hippopotamus', 'honey bee', 'horn shark', 'horned frog', 'horse', 'horseshoe crab', 'howler monkey', 'humboldt penguin', 'hummingbird', 'humpback whale', 'hyena', 'ibis', 'ibizan hound', 'iguana', 'impala', 'indian elephant', 'indian palm squirrel', 'indian rhinoceros', 'indian star tortoise', 'indochinese tiger', 'indri', 'insect', 'irish setter', 'irish wolfhound', 'jack russel', 'jackal', 'jaguar', 'japanese chin', 'japanese macaque', 'javan rhinoceros', 'javanese', 'jellyfish', 'kakapo', 'kangaroo', 'keel billed toucan', 'killer whale', 'king crab', 'king penguin', 'kingfisher', 'kiwi', 'koala', 'komodo dragon', 'kudu', 'labradoodle', 'labrador retriever', 'ladybird', 'leaf-tailed gecko', 'lemming', 'lemur', 'leopard', 'leopard cat', 'leopard seal', 'leopard tortoise', 'liger', 'lion', 'lionfish', 'little penguin', 'lizard', 'llama', 'lobster', 'long-eared owl', 'lynx', '', 'macaroni penguin', 'macaw', 'magellanic penguin', 'magpie', 'maine coon', 'malayan civet', 'malayan tiger', 'maltese', 'manatee', 'mandrill', 'manta ray', 'marine toad', 'markhor', 'marsh frog', 'masked palm civet', 'mastiff', 'mayfly', 'meerkat', 'millipede', 'minke whale', 'mole', 'molly', 'mongoose', 'mongrel', 'monitor lizard', 'monkey', 'monte iberia eleuth', 'moorhen', 'moose', 'moray eel', 'moth', 'mountain gorilla', 'mountain lion', 'mouse', 'mule', 'neanderthal', 'neapolitan mastiff', 'newfoundland', 'newt', 'nightingale', 'norfolk terrier', 'norwegian forest', 'numbat', 'nurse shark', 'ocelot', 'octopus', 'okapi', 'old english sheepdog', 'olm', 'opossum', 'orang-utan', 'ostrich', 'otter', 'oyster', 'pademelon', 'panther', 'parrot', 'patas monkey', 'peacock', 'pekingese', 'pelican', 'penguin', 'persian', 'pheasant', 'pied tamarin', 'pig', 'pika', 'pike', 'pink fairy armadillo', 'piranha', 'platypus', 'pointer', 'poison dart frog', 'polar bear', 'pond skater', 'poodle', 'pool frog', 'porcupine', 'possum', 'prawn', 'proboscis monkey', 'puffer fish', 'puffin', 'pug', 'puma', 'purple emperor', 'puss moth', 'pygmy hippopotamus', 'pygmy marmoset', 'quail', 'quetzal', 'quokka', 'quoll', 'rabbit', 'raccoon', 'raccoon dog', 'radiated tortoise', 'ragdoll', 'rat', 'rattlesnake', 'red knee tarantula', 'red panda', 'red wolf', 'red-handed tamarin', 'reindeer', 'rhinoceros', 'river dolphin', 'river turtle', 'robin', 'rock hyrax', 'rockhopper penguin', 'roseate spoonbill', 'rottweiler', 'royal penguin', 'russian blue', 'sabre-toothed tiger', 'saint bernard', 'salamander', 'sand lizard', 'saola', 'scorpion', 'scorpion fish', 'sea dragon', 'sea lion', 'sea otter', 'sea slug', 'sea squirt', 'sea turtle', 'sea urchin', 'seahorse', 'seal', 'serval', 'sheep', 'shih tzu', 'shrimp', 'siamese', 'siamese fighting fish', 'siberian', 'siberian husky', 'siberian tiger', 'silver dollar', 'skunk', 'sloth', 'slow worm', 'snail', 'snake', 'snapping turtle', 'snowshoe', 'snowy owl', 'somali', 'south china tiger', 'spadefoot toad', 'sparrow', 'spectacled bear', 'sperm whale', 'spider monkey', 'spiny dogfish', 'sponge', 'squid', 'squirrel', 'squirrel monkey', 'sri lankan elephant', 'staffordshire bull terrier', 'stag beetle', 'starfish', 'stellers sea cow', 'stick insect', 'stingray', 'stoat', 'striped rocket frog', 'sumatran elephant', 'sumatran orang-utan', 'sumatran rhinoceros', 'sumatran tiger', 'sun bear', 'swan', 'tang', 'tapanuli orang-utan', 'tapir', 'tarsier', 'tasmanian devil', 'tawny owl', 'termite', 'tetra', 'thorny devil', 'tibetan mastiff', 'tiffany', 'tiger', 'tiger salamander', 'tiger shark', 'tortoise', 'toucan', 'tree frog', 'tropicbird', 'tuatara', 'turkey', 'turkish angora', 'uakari', 'uguisu', 'umbrellabird', 'vampire bat', 'vervet monkey', 'vulture', 'wallaby', 'walrus', 'warthog', 'wasp', 'water buffalo', 'water dragon', 'water vole', 'weasel', 'welsh corgi', 'west highland terrier', 'western gorilla', 'western lowland gorilla', 'whale shark', 'whippet', 'white faced capuchin', 'white rhinoceros', 'white tiger', 'wild boar', 'wildebeest', 'wolf', 'wolverine', 'wombat', 'woodlouse', 'woodpecker', 'woolly mammoth', 'woolly monkey', 'wrasse', 'x-ray tetra', 'yak', 'yellow-eyed penguin', 'yorkshire terrier', 'zebra', 'zebra shark', 'zebu', 'zonkey', 'zorse'];
  var animal = list[Math.floor(Math.random() * list.length)];
  var animal2 = list[Math.floor(Math.random() * list.length)];
  var animals1 = list[Math.floor(Math.random() * list.length)];
  var animals2 = list[Math.floor(Math.random() * list.length)];

  if (animals1[animals1.length - 2] + animals1[animals1.length - 1] == 'ch' || animals1[animals1.length - 1] == 'x' || animals1[animals1.length - 1] == 's') {
    animals1 = animals1 + "es"
  } else {
    animals1 = animals1 + "s";
  };
  if (animals2[animals2.length - 2] + animals2[animals2.length - 1] == 'ch' || animals2[animals2.length - 1] == 'x' || animals2[animals2.length - 1] == 's') {
    animals2 = animals2 + "es"
  } else {
    animals2 = animals2 + "s";
  };

  var list = ['electrician','carpenter','carpet layer','air duct cleaner','pig keeper','soldier','drill sargeant','minesweeper','butler','waiter','waitress','gatekeeper', 'doorman', 'cleric', 'sorceror', 'mage', 'archer', 'majesty', 'lord', 'principal', 'custodian', 'traveling merchant', 'door to door merchant', 'alien', 'ascendant being', 'bodyguard', 'savior', 'professor', 'biologist', 'botanist', 'programmer', 'computer avatar', 'AI', 'nanobot', 'chronicon', 'cybernetic organism', 'giant', 'golem', 'ogre', 'troll', 'hobbit', 'gnome', 'dwarf', 'orc', 'human', 'night elf', 'sentinel', 'cyborg', 'android', 'country music fan', 'death metal music fan', 'alternative rock music fan', 'k pop music fan', 'pop music fan', 'classical music fan', 'rap music fan', 'rock music fan', 'drunk', 'brute', 'guardian', 'boyfriend', 'girlfriend', 'husband', 'wife', 'housewife', 'olympian', 'idiot', 'moron', 'retard', 'fool', 'lunatic', 'gourmand', 'plumber', 'mechanic', 'farmer', 'gardener', 'cashier', 'janitor', 'knight', 'warrior', 'hero', 'wizard', 'priest', 'pastor', 'barbarian', 'driver', 'cop', 'astronaut', 'artist', 'chef', 'construction worker', 'doctor', 'firefighter', 'teacher', 'dentist', 'receptionist', 'secretary', 'barber', 'hairdresser', 'cleaner', 'biologist', 'scientist', 'mailman', 'pharmacist', 'taxi driver', 'travel guide', 'programmer', 'dancer', 'salesman', 'car salesman', 'lawyer', 'jockey', 'gymnist', 'bodybuilder', 'acrobat', 'athlete', 'stripper', 'madman', 'pcychopath', 'engineer', 'baker', 'master', 'slave', 'coal miner', 'metal miner', 'road worker', 'pilot', 'woman', 'lady', 'man', 'guy', 'stalker', 'clerk', 'priestess', 'sorceror', 'demon', 'angel', 'follower', 'manager', 'commander', 'general', 'leader', 'eunich', 'amputee', 'patient', 'paramedic', 'medic', 'dominatrix', 'banshee', 'ghost', 'succubus', 'biker', 'gangster', 'sissy', 'panzy', 'thimbledick', 'sociopath', 'narcissist', 'racist', 'pacifist', 'jockey', 'rancher', 'addict', 'junkie', 'freak', 'belly dancer', 'iron miner', 'psychiatrist', 'therapist', 'king', 'prince', 'princess', 'vampire hunter', 'hunter', 'horse handler', 'zoo keeper', 'lion tamer', 'secret agent', 'fortune teller', 'prophet', 'clown', 'jester', 'mayor', 'librarian', 'bar tender', 'inn keeper', 'dragon tamer', 'messenger'];
  var profession = list[Math.floor(Math.random() * list.length)];
  var profession2 = list[Math.floor(Math.random() * list.length)];
  var profession3 = list[Math.floor(Math.random() * list.length)];
  var professions = list[Math.floor(Math.random() * list.length)];
  var professions2 = list[Math.floor(Math.random() * list.length)];
  var professions3 = list[Math.floor(Math.random() * list.length)];
  if (professions[professions.length - 2] + professions[professions.length - 1] == 'ch' || professions[professions.length - 1] == 'x') {
    professions = professions + "es"
  } else if (professions[professions.length - 5] == 'w' && professions[professions.length - 4] == 'o' && professions[professions.length - 3] == 'm' && professions[professions.length - 2] == 'a' && professions[professions.length - 1] == 'n') {
    professions = 'women'
  } else if (professions[professions.length - 3] == 'm' && professions[professions.length - 2] == 'a' && professions[professions.length - 1] == 'n') {
    professions = professions.replace('man', 'men');
  } else {
    professions = professions + "s";
  };
  if (professions2[professions2.length - 2] + professions2[professions2.length - 1] == 'ch' || professions2[professions2.length - 1] == 'x') {
    professions2 = professions2 + "es"
  } else if (professions2[professions2.length - 5] == 'w' && professions2[professions2.length - 4] == 'o' && professions2[professions2.length - 3] == 'm' && professions2[professions2.length - 2] == 'a' && professions2[professions2.length - 1] == 'n') {
    professions2 = 'women'
  } else if (professions2[professions2.length - 3] == 'm' && professions2[professions2.length - 2] == 'a' && professions2[professions2.length - 1] == 'n') {
    professions2 = 'men'
  } else {
    professions2 = professions2 + "s";
  };
  if (professions3[professions3.length - 2] + professions3[professions3.length - 1] == 'ch' || professions3[professions3.length - 1] == 'x') {
    professions3 = professions3 + "es"
  } else if (professions3[professions3.length - 5] == 'w' && professions3[professions3.length - 4] == 'o' && professions3[professions3.length - 3] == 'm' && professions3[professions3.length - 2] == 'a' && professions3[professions3.length - 1] == 'n') {
    professions3 = 'women'
  } else if (professions3[professions3.length - 3] == 'm' && professions3[professions3.length - 2] == 'a' && professions3[professions3.length - 1] == 'n') {
    professions3 = 'men'
  } else {
    professions3 = professions3 + "s";
  };

  var list = ['airborne', 'underwater', 'amphibious', 'affectionate', 'amiable', 'bright', 'charming', 'creative', 'determined', 'energetic', 'friendly', 'funny', 'generous', 'imaginative', 'polite', 'likable', 'gregarious', 'diplomatic', 'sincere', 'helpful', 'giving', 'kind', 'hardworking', 'diligent', 'patient', 'dynamic', 'loyal', 'brave', 'self-confident', 'sensible', 'sincere', 'thoughtful', 'warmhearted', 'willing', 'proficient', 'romantic', 'powerful', 'persistent', 'passionate', 'loving', 'faithful', 'nice', 'optimistic', 'plucky', 'philosophical', 'humorous', 'frank', 'fearless', 'considerate', 'courageous', 'marvelous', 'capable', 'accomplished', 'knowledgeable', 'adept', 'expert', 'engaging', 'amazing', 'awesome', 'blithesome', 'excellent', 'fabulous', 'fantastic', 'favorable', 'fortuitous', 'gorgeous', 'incredible', 'unique', 'mirthful', 'outstanding', 'perfect', 'propitious', 'remarkable', 'rousing', 'spectacular', 'splendid', 'stellar', 'stupendous', 'super', 'upbeat', 'stunning', 'wondrous', 'ample', 'bountiful', 'glistening', 'dazzling', 'twinkling', 'lustrous', 'vivid', 'vibrant', 'vivacious', 'glowing', 'gleaming', 'sparkling', 'shimmering', 'glimmering', 'glittering', 'brilliant', 'elegant', 'sleek', 'alluring', 'enchanting', 'ravishing', 'magnificent', 'captivating', 'lovely', 'glowing', 'flexible', 'independent', 'insightful', 'open-minded', 'productive', 'adventurous', 'articulate', 'charismatic', 'competitive', 'confident', 'devoted', 'educated', 'inquisitive', 'organized', 'relaxed', 'responsible', 'technological', 'resourceful', 'ambitious', 'approachable', 'qualified', 'focused', 'honest', 'efficient', 'personable', 'humorous', 'gleeful', 'glad', 'giant', 'gentle', 'genius', 'genial', 'hopeful', 'honourable', 'honest', 'high', 'helpful', 'heedful', 'balanced', 'attractive', 'artistic', 'articulate', 'approachable', 'ambitious', 'agreeable', 'hearty', 'heart-warming', 'healthy', 'hard-working', 'happy', 'great', 'grateful', 'friendly', 'freedom', 'free', 'flexible', 'fit', 'favorite', 'fantastic', 'faithful', 'fair', 'gorgeous', 'goofy', 'good-looking', 'easy-going', 'easygoing', 'calm', 'brilliant', 'bright', 'bravo', 'brave', 'brainy', 'blissful', 'big-hearted', 'dynamic', 'discreet', 'discontented', 'direct', 'glorious', 'generous', 'funny', 'fun', 'full', 'frisky', 'fabulous', 'exciting', 'dazzling', 'cultured', 'cool', 'contented', 'considerate', 'confident', 'competent', 'comfortable', 'excited', 'excitable', 'excellent', 'equal', 'enthusiastic', 'energetic', 'empathetic', 'efficient', 'effective', 'determined', 'detailed', 'dependable', 'delightful', 'dedicated', 'decisive', 'clever', 'clean', 'cheerful', 'charming', 'cautious', 'careful', 'better', 'benevolent', 'beloved', 'beautiful', 'accurate', 'wayward', 'wandering', 'small', 'trusting', 'smiling', 'laughing', 'cute'];
  var niceadjectivelist = list;
  var positiveadjective1 = list[Math.floor(Math.random() * list.length)];
  var positiveadjective2 = list[Math.floor(Math.random() * list.length)];
  var positiveadjective3 = list[Math.floor(Math.random() * list.length)];

  var negativeadjectivelist = ['shitty', 'weak', 'minor', 'delicate', 'ignorant', 'oblivious', 'cowardly', 'scared', 'cross eyed', 'electric', 'amped up', 'crazed', 'insane', 'ridiculous', 'shoddy', 'subpar', 'substandard', 'cheap', 'rough', 'dirty', 'unclean', 'lame', 'broken', 'hallucinating', 'destructive', 'amphibious', 'insane', 'unclean', 'pcychotic', 'blind', 'angry', 'furious', 'frustrated', 'twisted', 'supreme', 'half dressed', 'braindead', 'insignificant', 'eye rolling', 'sarcastic', 'unreal', 'comical', 'garbage like', 'unbelievable', 'blind', 'reckless', 'clumsy', 'circus like', 'inbred', 'masochistic', 'sadistic', 'corny', 'savage'];
  var list = niceadjectivelist.concat(negativeadjectivelist);
  var adjective1 = list[Math.floor(Math.random() * list.length)];
  var adjective2 = list[Math.floor(Math.random() * list.length)];
  var adjective3 = list[Math.floor(Math.random() * list.length)];
  var adjective1 = list[Math.floor(Math.random() * list.length)];
  var adjective2 = list[Math.floor(Math.random() * list.length)];
  var adjective3 = list[Math.floor(Math.random() * list.length)];

  var list = ['vigorously', 'enthusiastically', 'happily', 'joyously', 'crappily', 'amazingly', 'unbelievably', 'fantastically', 'superbly', 'idiotically', 'ignorantly', 'fabulously', 'impossibly', 'angrily', 'movingly', 'dramatically', 'rudely', 'adventurously', 'marvelously', 'swiftly', 'retardedly', 'unknowingly', 'unwillingly', 'unreliably', 'unenthusiastically', 'slowly'];
  var adverb = list[Math.floor(Math.random() * list.length)];

  var list = ['happy', 'intelligent', 'brilliant', 'loving', 'reminicent', 'joyous', 'amazing', 'sentimental', 'bright', 'knowledgable', 'ascendant'];
  var niceemotionlist = list;
  var niceemotion1 = list[Math.floor(Math.random() * list.length)];
  var niceemotion2 = list[Math.floor(Math.random() * list.length)];
  var niceemotion3 = list[Math.floor(Math.random() * list.length)];

  var negativeemotionlist = ['angry', 'furious', 'sad', 'depressed', 'hopeless', 'nervous', 'anguished', 'tormented', 'frustrated', 'tense'];
  var negativeemotion1 = list[Math.floor(Math.random() * list.length)];
  var negativeemotion2 = list[Math.floor(Math.random() * list.length)];
  var negativeemotion3 = list[Math.floor(Math.random() * list.length)];

  var list = niceemotionlist.concat(negativeemotionlist);
  var emotion1 = list[Math.floor(Math.random() * list.length)];
  var emotion2 = list[Math.floor(Math.random() * list.length)];
  var emotion3 = list[Math.floor(Math.random() * list.length)];

  var list = ['orokin catalyst', 'orokin reactor', 'mote', 'exotic engram', 'rare engram', 'uncommon engram', 'umbral engram', 'spoon', 'wrench', 'two by four', 'plank', 'log', 'pipe', 'brick', 'stick', 'jar', 'toy', 'radio', 'binocular pair', 'telescope', 'rock', 'stone', 'window', 'door', 'doorframe', 'painting', 'bottle', 'lamp', 'artifact', 'spellbook', 'staff', 'dummy', 'walking stick', 'glass pipe', 'bongo', 'drum', 'ring', 'necklace', 'amulet', 'medallion', 'coin', 'ball', 'basket', 'cart', 'scale', 'beaker', 'phial', 'vial', 'machine', 'robot', 'golf club', 'dollar bill', 'antenna', 'satelite', 'ratchet', 'jack', 'bolt', 'powersuit', 'bench', 'pair of tweezers', 'pair of tongs', 'cache', 'boulder', 'shield', 'diamond', 'gold ingot', 'tent', 'tree trunk', 'tree', 'sprinkler', 'gemstone', 'jewel', 'crystal', 'crystal ball', 'magical scroll', 'scroll', 'historical record', 'boom box', 'keyboard', 'mouse', 'laptop', 'tv', 'computer', 'water dish', 'bowl', 'plate', 'battery', 'flashlight', 'cable', 'camera', 'microphone', 'phone', 'web cam', 'tv reporter camera', 'magnifier', 'glass', 'goblet'];
  var niceobjectlist = list;
  var niceobject1 = list[Math.floor(Math.random() * list.length)];
  var niceobject2 = list[Math.floor(Math.random() * list.length)];
  var niceobject3 = list[Math.floor(Math.random() * list.length)];
  var niceobjects = list[Math.floor(Math.random() * list.length)];
  var niceobjects2 = list[Math.floor(Math.random() * list.length)];
  var niceobjects3 = list[Math.floor(Math.random() * list.length)];
  if (niceobjects[niceobjects.length - 2] + niceobjects[niceobjects.length - 1] == 'ch' || niceobjects[niceobjects.length - 1] == 'x' || niceobjects[niceobjects.length - 1] == 's') {
    niceobjects = niceobjects + "es"
  } else {
    niceobjects = niceobjects + "s";
  };
  if (niceobjects2[niceobjects2.length - 2] + niceobjects2[niceobjects2.length - 1] == 'ch' || niceobjects2[niceobjects2.length - 1] == 'x' || niceobjects2[niceobjects2.length - 1] == 's') {
    niceobjects2 = niceobjects2 + "es"
  } else {
    niceobjects2 = niceobjects2 + "s";
  };
  if (niceobjects3[niceobjects3.length - 2] + niceobjects3[niceobjects3.length - 1] == 'ch' || niceobjects3[niceobjects3.length - 1] == 'x' || niceobjects3[niceobjects3.length - 1] == 's') {
    niceobjects3 = niceobjects3 + "es"
  } else {
    niceobjects3 = niceobjects3 + "s";
  };

  var badobjectlist = ['auto rifle', 'shotgun', 'sniper rifle', 'rocket launcher', 'grenade launcher', 'bow', 'scout rifle', 'revolver', 'pistol', 'fork', 'nailgun', 'chainsaw', 'sword', 'dagger', 'spear', 'bone', 'club', 'grinder', 'engine block', 'exhaust pipe', 'muffler', 'piece of trash', 'fragment', 'trashbag', 'crowbar', 'air pump', 'water pump', 'tobacco pipe', 'toilet', 'motor oil bottle', 'jackhammer', 'hatchet', 'fireworks display', 'hammer', 'mixer', 'knife', 'blade', 'railroad spike', 'boulder', 'piece of flint', 'pipe cutter', 'stake', 'empty can', 'fire extinguisher', 'power outlet', 'water dish', 'powercord', 'candle', 'torch', 'dildo', 'bong', 'hooka', 'keg of alcohol', 'augur','woodchipper','cork screw','screw driver','mallet','blender','centrifuge','trash compactor','incinerator','trashcan','recycling bin','printer','copy machine','drill','razor blade'];
  
  
  var list = niceobjectlist.concat(badobjectlist);
  var object = list[Math.floor(Math.random() * list.length)];
  var object2 = list[Math.floor(Math.random() * list.length)];
  var object3 = list[Math.floor(Math.random() * list.length)];
  var objects = list[Math.floor(Math.random() * list.length)];
  var objects2 = list[Math.floor(Math.random() * list.length)];
  var objects3 = list[Math.floor(Math.random() * list.length)];
  if (objects[objects.length - 2] + objects[objects.length - 1] == 'ch' || objects[objects.length - 1] == 'x' || objects[objects.length - 1] == 's') {
    objects = objects + "es"
  } else {
    objects = objects + "s";
  };
  if (objects2[objects2.length - 2] + objects2[objects2.length - 1] == 'ch' || objects2[objects2.length - 1] == 'x' || objects2[objects2.length - 1] == 's') {
    objects2 = objects2 + "es"
  } else {
    objects2 = objects2 + "s";
  };
  if (objects3[objects3.length - 2] + objects3[objects3.length - 1] == 'ch' || objects3[objects3.length - 1] == 'x' || objects3[objects3.length - 1] == 's') {
    objects3 = objects3 + "es"
  } else {
    objects3 = objects3 + "s";
  };

  var list = ['a', 'the', 'our', 'their', 'his', 'her', 'your'];
  var pointer = list[Math.floor(Math.random() * list.length)];

  var list = ['A', 'The', 'Our', 'Their', 'His', 'Her', 'Your'];
  var sentencebeginning = list[Math.floor(Math.random() * list.length)];

  var list = ['Does', 'Would', 'Can', 'Will', 'Should', 'Might'];
  var questionbeginning = list[Math.floor(Math.random() * list.length)];

  var list = ['like', 'love', 'enjoy', 'savor', 'relish', 'fancy', 'appreciate', 'prize', 'cherish', 'admire', 'treasure', 'value', 'favor'];
  var enjoyanceword = list[Math.floor(Math.random() * list.length)];
  var enjoyancewords = list[Math.floor(Math.random() * list.length)];

  if (enjoyancewords[enjoyancewords.length - 2] + enjoyancewords[enjoyancewords.length - 1] == 'ch' || enjoyancewords[enjoyancewords.length - 1] == 'x' || enjoyancewords[enjoyancewords.length - 2] + enjoyancewords[enjoyancewords.length - 1] == 'sh') {
    enjoyancewords = enjoyancewords + "es"
  } else if (enjoyancewords[enjoyancewords.length - 2] + enjoyancewords[enjoyancewords.length - 1] == 'cy') {
    enjoyancewords[enjoyancewords.length - 1] += 'i';
    enjoyancewords = enjoyancewords.replace('y', 'ies');
  } else {
    enjoyancewords = enjoyancewords + "s";
  };

  var list = ['make friends', 'sing', 'eat', 'swim', 'prowl', 'stalk', 'skip', 'play', 'roll', 'run around', 'have fun', 'sniff around', 'climb around', 'smile', 'go wild', 'help random people', 'assist everyone', 'be helpful'];
  var positiveverblist = list;
  var positiveverb1 = list[Math.floor(Math.random() * list.length)];

  var list = ['make friends', 'sings', 'eats', 'swims', 'prowls', 'stalks', 'skips', 'plays', 'rolls', 'runs around', 'has fun', 'sniffs around', 'climbs around', 'smiles', 'goes wild', 'helps random people', 'assists everyone'];
  var positiveverbslist = list;
  var positiveverbs1 = list[Math.floor(Math.random() * list.length)];

  var negativeverblist = ['gamble', 'insult people', 'make a scene', 'attempt to sell items', 'pickpocket', 'flirt', 'dance', 'yell incoherently', 'spout gibberish', 'poke people', 'look at people', 'smirk evily', 'gaze over the horizon', 'stare into the sun', 'drink from the local fountain', 'eat everything in sight', 'workout', 'go insane', 'go crazy', 'get a drink', 'sell random things', 'beg for money', 'host a reunion', 'hunt for vampires', 'bang', 'sue the local leader', 'stir up trouble', 'glare at people', 'water plants', 'start a farm', 'get a job', 'hire workers', 'seek out fortune', 'bask in the sun', 'drink from puddles', 'use the restroom', 'gaze into peoples eyes', 'look in a mirror', 'brag about random accomplishments', 'change clothes', 'get undressed', 'get dressed', 'go for a jog', 'watch porn', 'show off', 'spout conspiracy theories', 'draw on random surfaces', 'make animal sounds', 'have a mental breakdown', 'laugh', 'joke', 'eat some food', 'have a drink', 'get drunk', 'get high', 'pretend to be mentally disabled', 'pretend to be injured', 'get attention', 'cause people to look at them', 'pretend to know things', 'sing a song', 'pass out money', 'move in', 'take up residence', 'purchase a house', 'start a buisness', 'open a bar', 'go to the local tavern and spout stories', 'go swimming', 'invent new things', 'develope technology', 'volunteer at the hospital', 'run in circles', 'patrol the area', 'mumble incoherently', 'stumble around', 'pretend to be stupid', 'pretend to be 90 degrees crosseyed', 'pan handle', 'beg for money in the streets', 'spy', 'watch their surroundings', 'turn maniacal', 'lose their mind', 'pretend to be part of a group', 'provide false answers', 'act like a prophet', 'share wisdom', 'find a girlfriend', 'find a boyfriend', 'act mentally disabled', 'pretend to be drunk', 'drink alot of alcohol', 'taste random peoples meals', 'talk to oneself', 'flick glasses to make music', 'start a band', 'play a musical instrument', 'dig for treasure', 'laugh non stop', 'hallucinate', 'reminisce', 'give directions, pretending to know the way', 'hide', 'stand around', 'lurk', 'lay down', 'go to sleep', 'run around really fast', 'go hyperactive', 'bestow blessings', 'perform an exorcism', 'celebrate the holiday', 'act festive', 'make loud noises', 'serve food', 'serve drinks', 'start a party', 'party', 'celebrate', 'display great joy', 'pretend to be a fortune teller', 'foresee the future', 'have prophetic visions','walk into a bar','pose incase someones watching','walk in a particular manner','play really loud music','shriek incoherently','squawk like a bird', 'moo like a cow','neigh like a horse','imitate animal movements','seek out enlightenment','explain things your way','gather a following','advertise'];
  var negativeverbs1 = list[Math.floor(Math.random() * list.length)];
  
  var list = positiveverblist.concat(negativeverblist);
  var verb = list[Math.floor(Math.random() * list.length)];

  var list = ['city', 'town', 'forest', 'desert', 'lake', 'jungle', 'swamps', 'ghetto', 'stables', 'farm', 'church', 'alleys', 'downtown areas', 'restaurants', 'suburbs', 'pyramid', 'temple', 'highway', 'overpass', 'bridge', 'port', 'factory', 'studio', 'supermarket', 'convenient store', 'warehouse', 'tower', 'castle', 'fortress', 'bunker', 'basement', 'attic', 'bastion', 'gatehouse', 'stables', 'workshop', 'space station', 'ocean', 'beach', 'lagoon', 'mountains', 'river', 'pond', 'junkyard', 'bank', 'coffee shop', 'tea shop', 'herbal remedies store', 'burger joint', 'fast food place', 'local church', 'cathedral', 'monastary', 'running track', 'football field', 'stadium', 'park', 'local lemonade stand', 'bar', 'tavern', 'body of water', 'sewers', 'bathroom', 'restroom', 'lobby', 'mcdonalds', 'burger king', 'kmart', 'circle k', 'convenient store', 'dollar store', 'farmers market', 'beekeeper facility', 'watermelon patch', 'pumpkin patch', 'horse stall', 'luxury cruiseship', 'vacation resort', 'theme park', 'amusement park', 'flower meadow', 'grass meadow', 'mall', 'clothing store', 'gaming store', 'tundra', 'golf course', 'baseball field', 'soccer field', 'basketball court'];
  var location1 = list[Math.floor(Math.random() * list.length)];
  var location2 = list[Math.floor(Math.random() * list.length)];
  var location3 = list[Math.floor(Math.random() * list.length)];
  var locations1 = list[Math.floor(Math.random() * list.length)];
  var locations2 = list[Math.floor(Math.random() * list.length)];
  var locations3 = list[Math.floor(Math.random() * list.length)];
  for (; location2 == location1; ) {
    var location2 = list[Math.floor(Math.random() * list.length)];

  };
  for (; location3 == location1 && location3 == location2; ) {
    var location3 = list[Math.floor(Math.random() * list.length)];

  };
  for (; locations2 == locations1; ) {
    var locations2 = list[Math.floor(Math.random() * list.length)];

  };
  for (; locations3 == locations1 && locations3 == location2; ) {
    var locations3 = list[Math.floor(Math.random() * list.length)];

  };

  if (locations1[locations1.length - 2] + locations1[locations1.length - 1] == 'ch' || locations1[locations1.length - 1] == 'x') {
    locations1 = locations1 + "es"
  } else if (locations1[locations1.length - 1] == 's') {}
  else {
    locations1 = locations1 + "s";
  };
  if (locations2[locations2.length - 2] + locations2[locations2.length - 1] == 'ch' || locations2[locations2.length - 1] == 'x') {
    locations2 = locations2 + "es"
  } else if (locations2[locations2.length - 1] == 's') {}
  else {
    locations2 = locations2 + "s";
  };
  if (locations3[locations3.length - 2] + locations3[locations3.length - 1] == 'ch' || locations3[locations3.length - 1] == 'x') {
    locations3 = locations3 + "es"
  } else if (locations3[locations3.length - 1] == 's') {}
  else {
    locations3 = locations3 + "s";
  };

  var list = ['Colorado Springs','Long Beach','Kansas City','Branson','Louisville','Memphis','Detroit','Las Vegas','El Paso','Nashville','Denver','Seattle','San Francisco','Necropolis','Indianapolis','Charlotte','Colombus','Jacksonville','Fort Worth','San Diego','San Antonio','Phoenix','Houston','Dallas','San Jose','Bejing','Dhaka','Delhi','Shanghai','San Paulo','Mexico City','Tokyo','North Pole', 'South Pole', 'North America', 'South America', 'Mexico', 'Europe', 'Great Britain', 'Asia', 'Russia', 'Canada', 'Australia', 'Hawaii', 'Rhode Island', 'Tahiti', 'Porto Rico', 'China', 'Japan', 'Jamaica', 'Costa Rica', 'Argentina', 'Austria', 'Turkey', 'Bangladesh', 'Belgium', 'Brazil', 'Bulgaria', 'Cambodia', 'Cayman Islands', 'Canada', 'Africa', 'Egypt', 'Chile', 'Congo', 'Croatia', 'Czech Republic', 'Cube', 'Portugal', 'Denmark', 'Ecuador', 'El Salvador', 'Finland', 'St.Louis', 'Chicago', 'New York', 'Los Angeles', 'Miami', 'Portland', 'France', 'Italy', 'Spain', 'Fiji', 'Germany', 'Greece', 'Greenland', 'Iceland', 'Guam', 'Guyana', 'Guinea', 'Vatican', 'Hong Kong', 'Kentucky', 'Hungary', 'Indonesia', 'India', 'Ivory Coast', 'Jordan', 'Kenya', 'Korea', 'Madagascar', 'Malta', 'Monaco', 'Morocoo', 'Mongolia', 'Myamar', 'Burma', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Niger', 'Nigeria', 'Nicaragua', 'North Macedonia', 'Norway', 'Panama', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Romania', 'Samoa', 'Singapore', 'Slovakia', 'Sweden', 'Taiwan', 'Thailand', 'Uganda', 'Ukraine', 'Uruguay', 'Venice', 'Venezuela', 'Vietnam', 'Virgin Islands', 'Sahara Desert', 'Australian Outback', 'Zambia', 'Zimbabwe'];
  var reallocation1 = list[Math.floor(Math.random() * list.length)];
  var reallocation2 = list[Math.floor(Math.random() * list.length)];
  var reallocation3 = list[Math.floor(Math.random() * list.length)];
  for (; reallocation2 == reallocation1; ) {
    var reallocation2 = list[Math.floor(Math.random() * list.length)];

  };
  for (; famousname3 == reallocation1 && reallocation3 == reallocation2; ) {
    var reallocation3 = list[Math.floor(Math.random() * list.length)];

  };

  var list = ['potential', 'ability', 'trait', 'capability', 'technique', 'knowledge', 'power', 'faculty', 'aptness', 'preparedness', 'means', 'prowess', 'talent', 'caliber', 'artistry', 'competence', 'superiority'];
  var trait = list[Math.floor(Math.random() * list.length)];

  var list = ['entity', 'at location'];
  var referencetype = list[Math.floor(Math.random() * list.length)];

  if (questionorstatement == 'random') {
    var list = ['animal', 'being', 'famousbeing', 'object','compliment','insult','personal'];
    currentsubject = list[Math.floor(Math.random() * list.length)];
    var list = ['question', 'statement'];
    phrasetype = list[Math.floor(Math.random() * list.length)];
  } else {
    var phrasetype = questionorstatement;
    var currentsubject = subjectmatter;

  };

  var randompercentage1 = Math.floor(Math.random() * 100 + 1) + "%";
  var randompercentage2 = Math.floor(Math.random() * 100 + 1) + "%";

  var randomnumber3 = Math.floor(Math.random() * 1000 + 1);
  var randomnumber2 = Math.floor(Math.random() * randomnumber3);
  var randomnumber1 = Math.floor(Math.random() * randomnumber2);

  var list = ['likely', 'unlikely', 'possible', 'expected', 'unexpected', 'believed', 'disbelieved', 'doubtful', 'doubtless'];
  var probability1 = list[Math.floor(Math.random() * list.length)];

  var list = ['often', 'rare', 'common', 'uncommon', 'almost never', 'frequent', 'unfrequent', 'occasional', 'golden', 'treasure', 'unbelievable'];
  var occurancerate1 = list[Math.floor(Math.random() * list.length)];

  var list = ['a Sith Lord', 'a Jedi Master', 'a Sith', 'a Jedi', 'Megaman', 'Indiana Jones', 'Chewbacca', 'Mace Windu', 'Darth Sidious', 'Darth Maul', 'Darth Vader', 'Luke Skywalker', 'Princess Leia', 'Han Solo', 'Obi-Wan Kinobi', 'Odin', 'Nick Fury', 'Agent Colson', 'Captain America', 'the Hulk', 'Iron Man', 'Superman', 'Loki', 'Thor', 'a Loki warframe', 'a Baruuk warframe', 'a Rhino warframe', 'a Hildryn warframe', 'a Frost warframe', 'a Nekros warframe', 'Amumu', 'Gnar', 'Teemo', 'Lulu', 'Vayne', 'Shyvanna', 'Taliyah', 'Ahri', 'Kayle', 'Morganna', 'Malphite', 'Master Yi', 'Imperius', 'Diablo', 'Azmodan', 'Tyrael', 'Cayde-6', 'Ikora', 'Zavala', 'Britney Spears', 'Elvis Presley', 'Bruce Campbell', 'Banshee-44', 'Xur', 'the Drifter', 'Lotus', 'Thrall', 'Jaina', 'Jin Raynor', 'Alarak', 'Vorazhun', 'Zeratul', 'Stukov', 'Zagara', 'the Overmind', 'a Banshee warframe', 'a Mag warframe', 'an Ember warframe', 'a Nova warframe', 'a Titania warframe', 'a Trinity warframe', 'Samus', 'Link', 'Zelda', 'Ada-1', 'Amanda Holliday', 'Ana Bray', 'Lord Shaxx', 'Asher Mir', 'Benedict 99-40', 'Brother Vance', 'Darbi 55-30', 'Devrim Kay', 'Dominus Ghaul', 'Eris Morn', 'Eva Levante', 'Executor Hideo', 'Failsafe', 'Kadi 55-30', 'Mara Sov', 'Osiris', 'Petra Venj', 'Rasputin', 'Shuro Chi', 'Sedia', 'Sloane', 'Suraya Hawthorne', 'Tess Everis', 'Spider', 'Uldren Sov', 'Val Cauor', 'Xol', 'Ordis', 'Darvo', 'Maroo', 'Teshin', 'Clem', 'Cephalon Cy', 'Cephalon Simaris', 'Spock', 'Picard', 'Kirk', 'Scotty', 'Leonard McCoy', 'Geordi La Forge', 'Sulu', 'Tuvok', 'Chekov', '7 of 9', 'Janeway', 'a Grineer', 'a Infested', 'a Corpus', 'the Void'];
  var famousname1 = list[Math.floor(Math.random() * list.length)];
  var famousname2 = list[Math.floor(Math.random() * list.length)];
  var famousname3 = list[Math.floor(Math.random() * list.length)];
  for (; famousname2 == famousname1; ) {
    var famousname2 = list[Math.floor(Math.random() * list.length)];

  };
  for (; famousname3 == famousname1 && famousname3 == famousname2; ) {
    var famousname3 = list[Math.floor(Math.random() * list.length)];

  };

  var list = ['Vex Mythoclast', 'Coldheart', 'Sunshot', 'Graviton Lance', 'Excalibur Sword', 'Tommys Matchbook', 'Whisper of the Worm', 'Cryothesia 77k', 'Jade Rabbit', 'Skyburners Oath', 'Borealis', 'Worldline Zero', 'Mida Multi-Tool', 'Sweet Buisness', 'Vigilance Wing', 'Trinity Ghoul', 'Prometheus Lens', 'Legend of Acrius', 'Cerberus+1', 'Hard Light', 'Sturm', 'Merciless', 'D.A.R.C.I.', 'Wavesplitter', 'Chaperone', 'Suros Regime', 'Deathbringer', 'Rat King', 'Wish-Ender', 'Queenbreaker', 'Colony', 'La Monarque', 'Malfeasance', 'Crimson', 'Black Talon', 'Arbalest', 'Prospector', 'Thorn', 'Anarchy', 'Izanagis Burden', 'Polaris Lance', 'Two-Tailed Fox', 'Huckleberry', 'Riskrunner', 'Lord of Wolves', 'Fighting Lion', 'Sleeper Stimulant', 'Wardcliff Coil', 'Telesto', 'Tractor Cannon', 'Ace of Spades', 'One Thousand Voices', 'Thunderlord'];
  var famousweaponname1 = list[Math.floor(Math.random() * list.length)];
  var famousweaponname2 = list[Math.floor(Math.random() * list.length)];
  var famousweaponname3 = list[Math.floor(Math.random() * list.length)];
  for (; famousweaponname2 == famousweaponname1; ) {
    var famousweaponname2 = list[Math.floor(Math.random() * list.length)];

  };
  for (; famousweaponname3 == famousweaponname1 && famousweaponname3 == famousweaponname2; ) {
    var famousweaponname3 = list[Math.floor(Math.random() * list.length)];

  };

  var list = ['fellow','pippin','bricky','fairhead','wag','bawcock','straightfinger','truepenny','peerless paramour','poplolly','bellibone','soul', 'friend', 'savior', 'hero', 'adventurer', 'deity', 'champion', 'angel', 'babe', 'butterfly', 'companion', 'familiar', 'genius', 'mastermind', 'expert', 'master', 'prodigy', 'intellectual'];
  var positivenames = list;
  var positivename1 = list[Math.floor(Math.random() * list.length)];
  var positivename2 = list[Math.floor(Math.random() * list.length)];
  var positivename3 = list[Math.floor(Math.random() * list.length)];
  var positivenames1 = list[Math.floor(Math.random() * list.length)];
  var positivenames2 = list[Math.floor(Math.random() * list.length)];
  var positivenames3 = list[Math.floor(Math.random() * list.length)];

  for (; positivename2 == positivename1; ) {
    var positivename2 = list[Math.floor(Math.random() * list.length)];

  };
  for (; positivename3 == positivename1 && positivename3 == positivename2; ) {
    var positivename3 = list[Math.floor(Math.random() * list.length)];

  };

  for (; positivenames2 == positivenames1; ) {
    var positivenames2 = list[Math.floor(Math.random() * list.length)];

  };
  for (; positivenames3 == positivenames1 && positivenames3 == positivenames2; ) {
    var positivenames3 = list[Math.floor(Math.random() * list.length)];

  };

  if (positivenames1[positivenames1.length - 2] + positivenames1[positivenames1.length - 1] == 'ch' || positivenames1[positivenames1.length - 1] == 'x') {
    positivenames1 = positivenames1 + "es"
  } else if (positivenames1[positivenames1.length - 1] == 's') {}
  else {
    positivenames1 = positivenames1 + "s";
  };
  if (positivenames2[positivenames2.length - 2] + positivenames2[positivenames2.length - 1] == 'ch' || positivenames2[positivenames2.length - 1] == 'x') {
    positivenames2 = positivenames2 + "es"
  } else if (positivenames2[positivenames2.length - 1] == 's') {}
  else {
    positivenames2 = positivenames2 + "s";
  };
  if (positivenames3[positivenames3.length - 2] + positivenames3[positivenames3.length - 1] == 'ch' || positivenames3[positivenames3.length - 1] == 'x') {
    positivenames3 = positivenames3 + "es"
  } else if (positivenames3[positivenames3.length - 1] == 's') {}
  else {
    positivenames3 = positivenames3 + "s";
  };

  var list = ['neanderthal','retard','slut','whore','jerk', 'idiot', 'moron', 'imbecile', 'fool', 'halfwit', 'dunce', 'dolt', 'ignoramus', 'nitwit', 'dimwit', 'dope', 'clod', 'ninny', 'dullard', 'dunce', 'cretin', 'dingbat', 'bonehead', 'abydocomist', 'bedswerver', 'bespawnler', 'bobolyne', 'cumberworld', 'dew-beater', 'dorbel', 'drate-poke', 'driggle-draggle', 'fopdoodle', 'fustylugs', 'fustilarian', 'gillie wetfoot', 'gnashgab', 'gobermouch', 'klazomaniac', 'leasing-monger', 'loitersack', 'lubberwort', 'muckspout', 'mublecrust', 'quisby', 'raggabrash', 'rakefire', 'roiderbanks', 'saddle goose', 'scobberlotcher', 'rat', 'fiend', 'monster', 'demon', 'skelpie limmer', 'smellfeast', 'snoutband', 'sorner', 'stampcrab', 'stymphalist', 'tallowcatch', 'triptaker', 'windoubt', 'whiffle whaffle', 'yaldson', 'zoilest'];
  var negativenames = list;
  var negativename1 = list[Math.floor(Math.random() * list.length)];
  var negativename2 = list[Math.floor(Math.random() * list.length)];
  var negativename3 = list[Math.floor(Math.random() * list.length)];
  var negativenames1 = list[Math.floor(Math.random() * list.length)];
  var negativenames2 = list[Math.floor(Math.random() * list.length)];
  var negativenames3 = list[Math.floor(Math.random() * list.length)];

  for (; negativename2 == negativename1; ) {
    var negativename2 = list[Math.floor(Math.random() * list.length)];

  };
  for (; negativename3 == negativename1 && negativename3 == negativename2; ) {
    var negativename3 = list[Math.floor(Math.random() * list.length)];

  };

  for (; negativenames2 == negativenames1; ) {
    var negativenames2 = list[Math.floor(Math.random() * list.length)];

  };
  for (; negativenames3 == negativenames1 && negativenames3 == negativenames2; ) {
    var negativenames3 = list[Math.floor(Math.random() * list.length)];

  };

  if (negativenames1[negativenames1.length - 2] + negativenames1[negativenames1.length - 1] == 'ch' || negativenames1[negativenames1.length - 1] == 'x') {
    negativenames1 = negativenames1 + "es"
  } else if (negativenames1[negativenames1.length - 1] == 's') {}
  else {
    negativenames1 = negativenames1 + "s";
  };
  if (negativenames2[negativenames2.length - 2] + negativenames2[negativenames2.length - 1] == 'ch' || negativenames2[negativenames2.length - 1] == 'x') {
    negativenames2 = negativenames2 + "es"
  } else if (negativenames2[negativenames2.length - 1] == 's') {}
  else {
    negativenames2 = negativenames2 + "s";
  };
  if (negativenames3[negativenames3.length - 2] + negativenames3[negativenames3.length - 1] == 'ch' || negativenames3[negativenames3.length - 1] == 'x') {
    negativenames3 = negativenames3 + "es"
  } else if (negativenames3[negativenames3.length - 1] == 's') {}
  else {
    negativenames3 = negativenames3 + "s";
  };

  var list = positivenames.concat(negativenames);
  var namecall1 = list[Math.floor(Math.random() * list.length)];
  var namecall2 = list[Math.floor(Math.random() * list.length)];
  var namecall3 = list[Math.floor(Math.random() * list.length)];
  var namecalls1 = list[Math.floor(Math.random() * list.length)];
  var namecalls2 = list[Math.floor(Math.random() * list.length)];
  var namecalls3 = list[Math.floor(Math.random() * list.length)];

  if (namecalls1[namecalls1.length - 2] + namecalls1[namecalls1.length - 1] == 'ch' || namecalls1[namecalls1.length - 1] == 'x') {
    namecalls1 = namecalls1 + "es"
  } else if (namecalls1[namecalls1.length - 1] == 's') {}
  else {
    namecalls1 = namecalls1 + "s";
  };
  if (namecalls2[namecalls2.length - 2] + namecalls2[namecalls2.length - 1] == 'ch' || namecalls2[namecalls2.length - 1] == 'x') {
    namecalls2 = namecalls2 + "es"
  } else if (namecalls2[namecalls2.length - 1] == 's') {}
  else {
    namecalls2 = namecalls2 + "s";
  };
  if (namecalls3[namecalls3.length - 2] + namecalls3[namecalls3.length - 1] == 'ch' || namecalls3[namecalls3.length - 1] == 'x') {
    namecalls3 = namecalls3 + "es"
  } else if (namecalls3[namecalls3.length - 1] == 's') {}
  else {
    namecalls3 = namecalls3 + "s";
  };

  var list = ['loyal','trustworthy','reliable','dependable','adaptable','intuitive','versatile','resourceful','organized','proactive','generous','straight-forward','sincere','diplomatic','impartial','understanding','sympathetic','gregarious','likeable','polite','amiable','agreeable','affable','cute', 'pretty', 'nice', 'lovely', 'kind', 'caring', 'considerate', 'fabulous', 'amazing', 'brilliant', 'intelligent', 'brave', 'helpful', 'amazing', 'valiant', 'hardworking', 'determined', 'beautiful', 'skilled', 'skillful', 'knowledgable', 'impressive', 'stunning', 'superior', 'thoughtful', 'attentive', 'solicitous', 'mindful', 'heedful', 'obliging', 'accomidating', 'cooperative', 'patient', 'decent', 'kindhearted', 'warmhearted', 'softhearted', 'tender', 'responsible', 'affectionate', 'attractive', 'handsome', 'alluring', 'charming', 'engaging', 'enticing', 'glamorous', 'fair', 'good-looking', 'interesting', 'inviting', 'pleasant', 'magnetic', 'tantalizing', 'teasing', 'seductive', 'fetching', 'mesmeric', 'enchanting', 'fascinating', 'adorable', 'captivating']
  var compliments = list;
  var compliment1 = list[Math.floor(Math.random() * list.length)];
  var compliment2 = list[Math.floor(Math.random() * list.length)];
  var compliment3 = list[Math.floor(Math.random() * list.length)];

  var list = ['ugly', 'mean', 'unfriendly', 'nasty', 'gross', 'stinky', 'rude', 'petulant', 'misguided', 'blind', 'foolish', 'stupid', 'ignorant', 'daft', 'dumb', 'hard headed', 'unthinking', 'unaware', 'oblivious', 'bad', 'nasty', 'unpleasant', 'disgusting', 'dreadful', 'horrible', 'frightful', 'scary', 'revolting', 'loathsome', 'disagreeable', 'inconsiderate', 'uncharitable', 'mean-spirited', 'ill-tempered', 'malicious', 'churlish', 'spiteful', 'unkined', 'vile', 'foul', 'fiendish', 'conspicuous', 'obvious', 'shameless', 'barefaced', 'audacious', 'evident', 'overt', 'blatant', 'brazen']
  var insults = list;
  var insult1 = list[Math.floor(Math.random() * list.length)];
  var insult2 = list[Math.floor(Math.random() * list.length)];
  var insult3 = list[Math.floor(Math.random() * list.length)];

  var list = compliments.concat(insults);
  var insultorcompliment1 = list[Math.floor(Math.random() * list.length)];
  var insultorcompliment2 = list[Math.floor(Math.random() * list.length)];
  var insultorcompliment3 = list[Math.floor(Math.random() * list.length)];


  var list = ['hair','face','body','sight'];
  var bodytrait1 = list[Math.floor(Math.random() * list.length)];
  var bodytrait2 = list[Math.floor(Math.random() * list.length)];
  var bodytrait3 = list[Math.floor(Math.random() * list.length)];

  var list = ['eyes','hands','feet','legs',];
  var bodytraits1 = list[Math.floor(Math.random() * list.length)];
  var bodytraits2 = list[Math.floor(Math.random() * list.length)];
  var bodytraits3 = list[Math.floor(Math.random() * list.length)];


  if (currentsubject == 'animal') {
    if (referencetype == 'at location') {
      if (phrasetype == 'statement') {
        var diceroll = Math.floor(Math.random() * 6 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = (sentencebeginning + ' ' + positiveadjective1 + ' ' + animal + ' ' + enjoyancewords + ' to ' + positiveverb1 + ' at the ' + positiveadjective2 + ' ' + location1 + '!');
          break;

        case 2:
          var resultphrase = (sentencebeginning + ' ' + positiveadjective1 + ' ' + animal + ' ' + enjoyancewords + ' the ' + positiveadjective2 + ' ' + location1 + '!');

          break;

        case 3:
          var resultphrase = (sentencebeginning + ' ' + positiveadjective1 + ' ' + animal + ' ' + enjoyancewords + ' to ' + positiveverb1 + ' with a ' + positiveadjective2 + ' ' + animal2 + ' over at the ' + positiveadjective3 + ' ' + location1 + '!');

          break;

        case 4:
          var resultphrase = (randomnumber1 + ' out of every ' + randomnumber2 + ' ' + positiveadjective1 + ' ' + animals1 + ' enjoy spending time at the ' + positiveadjective2 + ' ' + location1 + '!');

          break;

        case 5:
          var resultphrase = (randompercentage1 + ' of ' + positiveadjective1 + ' ' + animals1 + ' can be found at the ' + positiveadjective2 + ' ' + location1 + '!');

          break;

        case 6:
          var resultphrase = (randompercentage1 + ' of ' + positiveadjective1 + ' ' + animals1 + ' ' + enjoyanceword + ' to ' + positiveverb1 + ' with ' + positiveadjective2 + ' ' + animals2 + ' at the ' + positiveadjective3 + ' ' + location1 + '!');

          break;
        };
      };
      if (phrasetype == 'question') {
        var diceroll = Math.floor(Math.random() * 6 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + positiveadjective1 + ' ' + animal + ' ' + enjoyanceword + ' to ' + positiveverb1 + ' at the ' + positiveadjective2 + ' ' + location1 + '?');
          break;

        case 2:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + positiveadjective1 + ' ' + animal + ' ' + enjoyanceword + ' to go to the ' + positiveadjective2 + ' ' + location1 + '?');

          break;

        case 3:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + positiveadjective1 + ' ' + animal + ' ' + enjoyanceword + ' the ' + positiveadjective2 + ' ' + location1 + '?');

          break;

        case 4:
          var resultphrase = (questionbeginning + ' ' + randompercentage1 + ' of ' + positiveadjective1 + ' ' + animals1 + ' ' + enjoyanceword + ' the ' + positiveadjective2 + ' ' + location1 + '?');

          break;

        case 5:
          var resultphrase = (questionbeginning + ' ' + randomnumber1 + ' out of ' + randomnumber2 + ' ' + positiveadjective1 + ' ' + animals1 + ' ' + enjoyanceword + ' the ' + positiveadjective2 + ' ' + location1 + '?');

          break;

        case 6:
          var resultphrase = ('Are ' + ' ' + animals1 + ' found in ' + reallocation1 + '?');

          break;

        };
      };
    }
    if (referencetype == 'entity') {
      if (phrasetype == 'statement') {
        var diceroll = Math.floor(Math.random() * 6 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = (sentencebeginning + ' ' + positiveadjective1 + ' ' + animal + ' ' + enjoyancewords + ' to ' + positiveverb1 + ' near a ' + positiveadjective2 + ' ' + niceobject1 + '!');

          break;

        case 2:
          var resultphrase = (sentencebeginning + ' ' + positiveadjective1 + ' ' + animal + ' ' + enjoyancewords + ' to look at a ' + positiveadjective2 + ' ' + niceobject1 + '!');

          break;

        case 3:
          var resultphrase = (sentencebeginning + ' ' + positiveadjective1 + ' ' + animal + ' ' + enjoyancewords + ' to look at a ' + positiveadjective2 + ' ' + niceobject1 + '!');

          break;

        case 4:
          var resultphrase = (randompercentage1 + ' of all ' + positiveadjective1 + ' ' + animals1 + ' ' + enjoyanceword + ' to keep a stash of ' + randompercentage2 + ' of every ' + positiveadjective2 + ' ' + niceobject1 + ' they can find!');

          break;

        case 5:
          var resultphrase = (randomnumber1 + ' out of every ' + randomnumber2 + ' ' + positiveadjective1 + ' ' + animals1 + ' ' + enjoyanceword + ' to ' + positiveverb1 + ' within ' + randomnumber3 + ' miles of a ' + positiveadjective2 + ' ' + niceobject1 + '!');

          break;

        case 6:
          var resultphrase = (randomnumber1 + ' out of every ' + randomnumber2 + ' ' + positiveadjective1 + ' ' + animals1 + ' ' + enjoyanceword + ' to ' + positiveverb1 + ' around ' + randomnumber3 + ' ' + niceobjects + '!');

          break;

        };
      };
      if (phrasetype == 'question') {
        var diceroll = Math.floor(Math.random() * 5 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + positiveadjective1 + ' ' + animal + ' ' + enjoyanceword + ' to ' + positiveverb1 + ' near a ' + positiveadjective2 + ' ' + niceobject1 + '?');

          break;

        case 2:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + positiveadjective1 + ' ' + animal + ' ' + enjoyanceword + ' to have a ' + niceobject1 + '?');

          break;

        case 3:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + positiveadjective1 + ' ' + animal + ' ' + positiveverb1 + ' around ' + niceobjects + '?');

          break;

        case 4:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + positiveadjective1 + ' ' + animal + ' ' + positiveverb1 + ' with ' + positiveadjective2 + ' ' + animals2 + '?');

          break;

        case 5:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + positiveadjective1 + ' ' + animal + ' ' + positiveverb1 + ' near ' + randomnumber1 + ' ' + positiveadjective2 + ' ' + animals2 + '?');

          break;
        };
      };
    };

  };

  if (currentsubject == 'being') {
    if (referencetype == 'at location') {
      if (phrasetype == 'statement') {
        var diceroll = Math.floor(Math.random() * 8 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = (sentencebeginning + ' ' + adjective1 + ' ' + profession + ' ' + enjoyancewords + ' to ' + verb + ' at the ' + adjective2 + ' ' + location1 + '!');

          break;

        case 2:
          var resultphrase = (sentencebeginning + ' ' + adjective1 + ' ' + profession + ' ' + enjoyancewords + ' to take a ' + object + ' and go to the ' + adjective2 + ' ' + location1 + ' to ' + verb + ' with it' + '!');

          break;

        case 3:
          var resultphrase = (sentencebeginning + ' ' + adjective1 + ' ' + profession + ' ' + enjoyancewords + ' to ' + verb + ' ' + adverb + ' at the ' + location1 + '!');

          break;

        case 4:
          var resultphrase = (randompercentage1 + ' of all ' + adjective1 + ' ' + professions + ' ' + enjoyanceword + ' to ' + verb + ' ' + adverb + ' with a ' + profession + '!');

          break;

        case 5:
          var resultphrase = (randomnumber1 + ' out of any ' + randomnumber2 + ' ' + adjective1 + ' ' + professions + ' ' + enjoyanceword + ' to ' + verb + ' ' + adverb + ' with a ' + adjective2 + ' ' + profession + ' over at the ' + adjective3 + ' ' + location1 + '!');

          break;

        case 6:
          var resultphrase = (randomnumber1 + ' out of any ' + randomnumber2 + ' ' + adjective1 + ' ' + professions + ' ' + enjoyanceword + ' to go to the ' + adjective2 + ' ' + location1 + '!');

          break;

        case 7:
          var resultphrase = ('It is ' + occurancerate1 + ' to see a ' + profession + ' ' + verb + ' with a ' + profession2 + ' over at the ' + adjective2 + ' ' + location1 + '!');

          break;

        case 8:
          var resultphrase = (professions + ' ' + enjoyanceword + ' to ' + verb + ' ' + adverb + ' over in ' + reallocation1);

          break;

        };
      };
      if (phrasetype == 'question') {
        var diceroll = Math.floor(Math.random() * 8 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + adjective1 + ' ' + profession + ' ' + enjoyanceword + ' to ' + verb + ' at the ' + adjective2 + ' ' + location1 + '?');
          break;

        case 2:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + adjective1 + ' ' + profession + ' ' + adverb + ' ' + verb + ' at the ' + adjective2 + ' ' + location1 + '?');

          break;

        case 3:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + adjective1 + ' ' + profession + ' hang around at the ' + adjective2 + ' ' + location1 + '?');

          break;

        case 4:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + adjective1 + ' ' + profession + ' ' + adverb + ' ' + verb + ' with a ' + adjective2 + ' ' + profession2 + ' at the ' + adjective3 + ' ' + location1 + '?');

          break;

        case 5:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + adjective1 + ' ' + profession + ' ' + enjoyanceword + ' a ' + adjective2 + ' ' + location1 + '?');

          break;

        case 6:
          var resultphrase = (questionbeginning + ' you find ' + pointer + ' ' + adjective1 + ' ' + profession + ' at the ' + adjective2 + ' ' + location1 + '?');

          break;

        case 7:
          var resultphrase = (questionbeginning + ' ' + randomnumber1 + ' out of every ' + randomnumber2 + ' ' + adjective1 + ' ' + professions + ' ' + enjoyanceword + ' to spend time at the ' + adjective2 + ' ' + location1 + '?');

          break;
        case 8:
          var resultphrase = ('Would you find ' + positiveadjective1 + ' ' + professions + ' in ' + reallocation1 + '?');
        };
      };
    }
    if (referencetype == 'entity') {
      if (phrasetype == 'statement') {
        var diceroll = Math.floor(Math.random() * 6 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = (sentencebeginning + ' ' + profession + ' with a ' + adjective1 + ' ' + object + ' is ' + adjective2 + ' to ' + adverb + ' ' + verb + ' with!');

          break;

        case 2:
          var resultphrase = ('Every ' + profession + ' ' + enjoyancewords + ' a ' + adjective1 + ' ' + object + '!');

          break;

        case 3:
          var resultphrase = ('A ' + profession + ' knows it is ' + adjective1 + ' to have ' + randomnumber1 + ' ' + adjective2 + ' ' + objects + '!');

          break;

        case 4:
          var resultphrase = ('You and a ' + adjective1 + ' ' + profession + ' ' + enjoyanceword + ' to have ' + randomnumber1 + ' ' + adjective2 + ' ' + objects + ' to ' + verb + ' ' + adverb + ' with!');

          break;

        case 5:
          var resultphrase = (randompercentage1 + ' of ' + professions + ' own ' + objects + ' that are ' + adjective1 + '!');

          break;

        case 6:
          var resultphrase = (randomnumber1 + ' out of any ' + randomnumber2 + ' ' + professions + ' are ' + adjective1 + ' when they try to ' + verb + ' ' + adverb + ' with a ' + object + '!');

          break;

        };
      };
      if (phrasetype == 'question') {
        var diceroll = Math.floor(Math.random() * 6 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + adjective1 + ' ' + profession + ' ' + enjoyanceword + ' to ' + verb + ' with a ' + adjective2 + ' ' + object + '?');

          break;

        case 2:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + adjective1 + ' ' + profession + ' ' + enjoyanceword + ' to collect ' + adjective2 + ' ' + objects + '?');

          break;

        case 3:
          var resultphrase = ('Would you see a ' + profession + ' with a ' + adjective1 + ' ' + object + '?');

          break;

        case 4:
          var resultphrase = ('If you had a ' + adjective1 + ' ' + object + ' would you become a ' + profession + '?');

          break;

        case 5:
          var resultphrase = ('If ' + randomnumber1 + ' ' + adjective1 + ' ' + objects + ' became yours, would you become a ' + profession + '?');

          break;

        case 6:
          var resultphrase = ('Do over ' + randompercentage1 + ' of ' + professions + ' ' + enjoyanceword + ' ' + objects + '?');

          break;

        };
      };

    }
  };

  if (currentsubject == 'object') {
    if (referencetype == 'at location') {
      if (phrasetype == 'statement') {
        var diceroll = Math.floor(Math.random() * 9 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = (sentencebeginning + ' ' + adjective1 + ' ' + object + ' is ' + occurancerate1 + ' to find at the ' + adjective2 + ' ' + location1 + '!')

          break;

        case 2:
          var resultphrase = ('When you go to the ' + adjective1 + ' ' + location1 + ', it is ' + probability1 + ' to find ' + objects + '!')

          break;

        case 3:
          var resultphrase = (randompercentage1 + ' of ' + adjective1 + ' ' + objects + ' are ' + adjective2 + ' to ' + verb + ' with over at the ' + adjective3 + ' ' + location1 + '!')

          break;

        case 4:
          var resultphrase = (sentencebeginning + ' ' + objects + ' sure are ' + adjective1 + ' when crafted at the ' + location1 + '!');

          break;

        case 5:
          var resultphrase = ('At the ' + location + ', ' + randomnumber1 + ' of any ' + randomnumber2 + ' ' + objects + ' are ' + adjective1 + '!');

          break;

        case 6:
          var resultphrase = ('Everyone ' + enjoyancewords + ' to have some ' + adjective1 + ' ' + objects + ' when they are at the ' + adjective2 + ' ' + location1 + '!');

          break;

        case 7:
          var resultphrase = (sentencebeginning + ' ' + adjective1 + ' ' + object + ' can be manufactured at the ' + adjective2 + ' ' + location1 + ' with ' + pointer + ' ' + adjective3 + ' ' + object2 + '!')

          break;

        case 8:
          var resultphrase = ('Many ' + ' ' + positiveadjective1 + ' ' + objects + ' are crafted at ' + reallocation1 + '!')

          break;

        case 9:
          var resultphrase = ('Over at the ' + adjective1 + ' ' + location1 + ', it is ' + probability1 + ' to find ' + adjective2 + ' ' + objects + '!');

          break;

        };

      };

      if (phrasetype == 'question') {
        var diceroll = Math.floor(Math.random() * 7 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + adjective1 + ' ' + object + ' include the ' + trait + ' to ' + adverb + ' ' + verb + ' at the ' + location1 + '?')

          break;

        case 2:
          var resultphrase = ('Is it ' + probability1 + ' to find a ' + object + ' in the middle of the ' + location1 + '?')

          break;

        case 3:
          var resultphrase = ('Do ' + randompercentage1 + ' of all ' + location1 + ' have ' + adjective1 + ' ' + objects + '?')

          break;

        case 4:
          var resultphrase = ('Do you take ' + objects + ' with you when you go to the ' + location1 + '?')

          break;

        case 5:
          var resultphrase = ('Is it ' + occurancerate1 + ' to ' + enjoyanceword + ' to ' + verb + ' with a ' + object + ' in the middle of the ' + location1 + '?')

          break;

        case 6:
          var resultphrase = ('Would you ' + verb + ' ' + adverb + ' with a ' + object + ' in the middle of the ' + location1 + '?')

          break;

        case 7:
          var resultphrase = ('Are ' + adjective1 + ' ' + objects + ' crafted in ' + reallocation1 + '?')

          break;

        };

      };
    };

    if (referencetype == 'entity') {
      if (phrasetype == 'statement') {
        var diceroll = Math.floor(Math.random() * 6 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = ('Those ' + adjective1 + ' ' + objects + ' sure are ' + occurancerate1 + '!');

          break;

        case 2:
          var resultphrase = ('It is ' + occurancerate1 + ' to find ' + objects + ' near ' + objects2 + '!');

          break;

        case 3:
          var resultphrase = ('You ' + enjoyanceword + ' ' + adjective1 + ' ' + objects + '!');

          break;

        case 4:
          var resultphrase = ('When you see a ' + object + ' you know it is time to ' + verb + ' ' + adverb + '!');

          break;

        case 5:
          var resultphrase = (randompercentage1 + ' of all ' + objects + ' are ' + adjective1 + '!');

          break;

        case 6:
          var resultphrase = (randomnumber1 + ' out of any ' + randomnumber2 + ' ' + objects + ' are ' + adjective1 + ' to ' + verb + ' with!');

          break;

        };

      };

      if (phrasetype == 'question') {
        var diceroll = Math.floor(Math.random() * 2 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = ('Would you take a ' + adjective1 + ' ' + object + ' and combine it with ' + adjective2 + ' ' + object2 + '?');

          break;

        case 2:
          var resultphrase = ('Would someone grab ' + pointer + ' ' + adjective1 + ' ' + object + ' and ' + adverb + ' ' + verb + ' with it' + '?');

          break;

        case 3:
          var resultphrase = (questionbeginning + ' ' + pointer + ' ' + verb + ' with a ' + adjective1 + ' ' + object + '?');

          break;

        case 4:
          var resultphrase = (questionbeginning + ' you ' + verb + ' with a ' + adjective1 + ' ' + object + ' ' + adverb + '?');

          break;

        case 5:
          var resultphrase = (questionbeginning + ' ' + objects + ' be ' + adjective1 + ' ' + randompercentage1 + 'of the time?');

          break;

        case 6:
          var resultphrase = ('Are ' + randompercentage1 + ' of ' + objects + ' ' + adjective1 + '?');

          break;

        };

      };
    };
  };
  if (currentsubject == 'famousbeing') {
    if (referencetype == 'at location') {
      if (phrasetype == 'statement') {
        var diceroll = Math.floor(Math.random() * 7 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = (famousname1 + ' ' + enjoyancewords + ' to meet ' + famousname2 + ' over at the ' + adjective1 + ' ' + location1 + '!');

          break;

        case 2:
          var resultphrase = (famousname1 + ' ' + enjoyancewords + ' to ' + adverb + ' ' + verb + ' with ' + famousname2 + ', especially at the ' + adjective1 + ' ' + location1 + '!');

          break;

        case 3:
          var resultphrase = ('It is ' + occurancerate1 + ', but at the ' + location1 + ', ' + famousname1 + ', ' + famousname2 + ', and ' + famousname3 + ' ' + enjoyanceword + ' to get together and ' + adverb + ' ' + verb + '!');

          break;

        case 4:
          var resultphrase = ('It is ' + probability1 + ' to find ' + famousname1 + ' at the ' + adjective1 + ' ' + location1 + '!');

          break;

        case 5:
          var resultphrase = ('Sometimes ' + famousname1 + ' ' + enjoyancewords + ' to ' + adverb + ' ' + verb + ' at the ' + location1 + '!')

          break;

        case 6:
          var resultphrase = ('Everyone ' + enjoyancewords + ' to see ' + famousname1 + ' at the ' + adjective1 + ' ' + location1 + '!')

          break;

        case 7:
          var resultphrase = ('It is ' + probability1 + ' to find ' + famousname1 + ' over in ' + reallocation1 + '!');

          break;

        };

      };
      if (phrasetype == 'question') {
        var diceroll = Math.floor(Math.random() * 8 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = ('If you met ' + famousname1 + ' at the ' + location1 + ' would you feel ' + emotion1 + '?');

          break;

        case 2:
          var resultphrase = ('Is ' + famousname1 + ' stronger than ' + famousname2 + ' when they are at the ' + location1 + '?');

          break;

        case 3:
          var resultphrase = ('Would ' + famousname1 + ' ' + verb + ' ' + adverb + ' with ' + famousname2 + '?');

          break;

        case 4:
          var resultphrase = ('Should ' + famousname1 + ', ' + famousname2 + ', and ' + famousname3 + ' all meet at the ' + location1 + ' and ' + adverb + ' ' + verb + ' together?');

          break;

        case 5:
          var resultphrase = ('Do you think ' + famousname1 + ', and ' + famousname2 + ' would be ' + emotion1 + ' if they met?');

          break;

        case 6:
          var resultphrase = ('Does ' + famousname1 + ' ' + enjoyanceword + ' ' + locations1 + '?');

          break;

        case 7:
          var resultphrase = ('Do you believe that ' + famousname1 + ' thinks ' + locations1 + ' are ' + adjective1 + '?');

          break;

        case 8:
          var resultphrase = ('Would ' + famousname1 + ' go on a vacation to ' + reallocation1 + ' with ' + famousname2 + '?');

          break;

        };

      };

    };
    if (referencetype == 'entity') {
      if (phrasetype == 'statement') {
        var diceroll = Math.floor(Math.random() * 6 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = (famousname1 + ' ' + enjoyancewords + ' to ' + adverb + ' ' + verb + ' with a ' + object + '!');

          break;

        case 2:
          var resultphrase = (famousname1 + ' collects ' + adjective1 + ' ' + objects + '!');

          break;

        case 3:
          var resultphrase = (famousname1 + ' and ' + famousname2 + ' ' + enjoyanceword + ' to ' + adverb + ' ' + verb + '!');

          break;

        case 4:
          var resultphrase = ('When ' + famousname1 + ' and ' + famousname2 + ' get together with ' + famousname3 + ' it is ' + adjective1 + '!');

          break;

        case 5:
          var resultphrase = ('Watch out for ' + famousname1 + ', they will try to ' + verb + ' ' + adverb + ' with you!');

          break;

        case 6:
          var resultphrase = (famousname1 + ' ' + enjoyancewords + ' to make use of a ' + famousweaponname1 + '!');

          break;

        };

      };
      if (phrasetype == 'question') {
        var diceroll = Math.floor(Math.random() * 6 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = ('Do you think ' + famousname1 + ' ' + enjoyancewords + ' to collect ' + adjective1 + ' ' + objects + '?');

          break;

        case 2:
          var resultphrase = ('Would ' + famousname1 + ' ' + enjoyanceword + ' to use a ' + famousweaponname1 + ' ' + adverb + '?');

          break;

        case 3:
          var resultphrase = ('Is it possible that ' + famousname1 + ' ' + enjoyancewords + ' to ' + verb + ' in a ' + adjective1 + ' manner?')

          break;

        case 4:
          var resultphrase = ('Can ' + famousname1 + ' bear to take on work as a ' + adjective1 + ' ' + profession + '?');

          break;

        case 5:
          var resultphrase = ('Does  ' + famousname1 + ' ' + enjoyanceword + ' to do ' + profession + ' work?');

          break;

        case 6:
          var resultphrase = ('Should  ' + famousname1 + ' meet up with ' + famousname2 + ' and craft ' + objects + ' together?');

          break;

        };

      };

    };

  };
  if (currentsubject == 'personal') {
    if (referencetype == 'at location') {
      if (phrasetype == 'statement') {
        var diceroll = Math.floor(Math.random() * 7 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = ('You ' + ' ' + adverb + ' ' + enjoyanceword + ' to see ' + famousname1 + ' in ' + reallocation1 + '!');

          break;
        case 2:
          var resultphrase = ('I am certain you ' + adverb + ' ' + enjoyanceword + ' seeing ' + famousweaponname1 + ' over in the ' + location1 + '!');

          break;
        case 3:
          var resultphrase = ('Everyone knows you ' + adverb + ' ' + enjoyanceword + ' the ' + location1 + '!');

          break;
        case 4:
          var resultphrase = ('People know when youre at ' + reallocation1 + ' you ' + adverb + ' ' + enjoyanceword + ' to ' + verb + '!');

          break;
        case 5:
          var resultphrase = ('You find it fun to go to ' + reallocation1 + ' and collect ' + adjective1 + ' ' + objects + '!');

          break;
        case 6:
          var resultphrase = ('You ' + enjoyanceword + ' ' + reallocation1 + ' !');

          break;
        case 7:
          var resultphrase = ('Everybody knows you  ' + enjoyanceword + ' ' + adjective1 + ' ' + professions + ' over in ' + reallocation1 + '!');

          break;
        }

      };
      if (phrasetype == 'question') {
        var diceroll = Math.floor(Math.random() * 7 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = ('Do you ' + enjoyanceword + ' to ' + adverb + ' ' + verb + ' over in ' + reallocation1 + '?');

          break;

        case 2:
          var resultphrase = ('Does everyone think you ' + enjoyanceword + ' seeing those ' + adjective1 + ' ' + objects + ' over in ' + reallocation1 + '?');

          break;

        case 3:
          var resultphrase = ('Would everyone go to the ' + location1 + ' to ' + adverb + ' ' + verb + ' with you?');

          break;

        case 4:
          var resultphrase = ('Can handle when you have to go to ' + reallocation1 + ' and ' + verb + ' ' + adverb + '?');

          break;

        case 5:
          var resultphrase = ('Do you know how to ' + verb + ' ' + adverb + ' at the ' + adjective1 + ' ' + location1 + '?');

          break;

        case 6:
          var resultphrase = ('Do you ' + enjoyanceword + ' to craft ' + adjective1 + ' ' + objects + ' in the ' + location1 + '?');

          break;

        case 7:
          var resultphrase = ('Is it possible you  ' + enjoyanceword + ' it when you see ' + adjective1 + ' ' + professions + ' when you run into them in ' + reallocation1 + '?');

          break;
        }

      };

    };

    if (referencetype == 'entity') {
      if (phrasetype == 'statement') {
        var diceroll = Math.floor(Math.random() * 6 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = ('Everybody knows you  ' + enjoyanceword + ' ' + adjective1 + ' ' + professions + '!');

          break;

        case 2:
          var resultphrase = ('You ' + enjoyanceword + ' ' + adjective1 + ' ' + objects + '!');

          break;

        case 3:
          var resultphrase = ('You know you  ' + enjoyanceword + ' ' + adjective1 + ' ' + locations1 + '!');

          break;

        case 4:
          var resultphrase = ('Your secret is you  ' + enjoyanceword + ' ' + reallocation1 + '!');

          break;

        case 5:
          var resultphrase = ('You sure  ' + enjoyanceword + ' to ' + verb + ' ' + adverb + '!');

          break;

        case 6:
          var resultphrase = ('You secretly  ' + enjoyanceword + ' ' + adjective1 + ' ' + objects + '!');

          break;

        };
      };
      if (phrasetype == 'question') {
        var diceroll = Math.floor(Math.random() * 14 + 1);
        switch (diceroll) {
        case 1:
          var resultphrase = ('Do you ' + enjoyanceword + ' to ' + adverb + ' ' + verb + '?');

          break;

        case 2:
          var resultphrase = ('Does everyone think you ' + enjoyanceword + ' ' + adjective1 + ' ' + objects + '?');

          break;

        case 3:
          var resultphrase = ('Would everyone ' + enjoyanceword + ' to ' + adverb + ' ' + verb + ' with you?');

          break;

        case 4:
          var resultphrase = ('Can handle when you have to ' + verb + ' ' + adverb + '?');

          break;

        case 5:
          var resultphrase = ('Do you know how to ' + verb + ' ' + adverb + '?');

          break;

        case 6:
          var resultphrase = ('Do you ' + enjoyanceword + ' to craft ' + adjective1 + ' ' + objects + '?');

          break;

        case 7:
          var resultphrase = ('Would you take up work as a ' + profession + '?');

          break;

        case 8:
          var resultphrase = ('Do ' + animals1 + ' make you feel ' + niceemotion1 + '?');

          break;

        case 9:
          var resultphrase = ('Do people know that you ' + enjoyanceword + ' ' + objects + '?');

          break;

        case 10:
          var resultphrase = ('Do you ' + enjoyanceword + ' ' + professions + '?');

          break;

        case 11:
          var resultphrase = ('Would you be a ' + insult1 + ' ' + negativename1 + ', a ' + insult2 + ' ' + negativename2 + ', or a ' + insult3 + ' ' + negativename3 + '?');

          break;

        case 12:
          var resultphrase = ('Would you be a ' + compliment1 + ' ' + positivename1 + ', a ' + compliment2 + ' ' + positivename2 + ', or a ' + compliment3 + ' ' + positivename3 + '?');

          break;

        case 13:
          var resultphrase = ('Would you pretend to be a ' + namecall1 + '?');

          break;

        case 14:
          var resultphrase = ('Would you act like a ' + animal + ' in public?');

          break;
        }

      };

    };

  };
  if (currentsubject == 'compliment') {
    var diceroll = Math.floor(Math.random() * 9 + 1);
    switch (diceroll) {
    case 1:
      var resultphrase = ('You are very ' + compliment1 + '!');

      break;

    case 2:
      var resultphrase = ('You are a ' + compliment1 + ' ' + positivename1 + '!');

      break;

    case 3:
      var resultphrase = ('You are definitely such a ' + compliment1 + ' ' + positivename1 + '!');

      break;

    case 4:
      var resultphrase = ('I have never met such a ' + compliment1 + ' ' + positivename1 + ' until now!');

      break;

    case 5:
      var resultphrase = ('Such a ' + compliment1 + ' ' + positivename1 + ' you are!');

      break;

    case 6:
      var resultphrase = ('You are certainly a ' + compliment1 + ' ' + positivename1 + '!');

      break;

    case 7:
      var resultphrase = ('Your ' + bodytrait1 + ' is so ' + compliment1 + ' makes you look like a ' + positivename1 + '!');

      break;

    case 8:
      var resultphrase = ('You have such ' + compliment1 + ' ' + bodytraits1 + '!');

      break;

    case 9:
      var resultphrase = ('Your ' + bodytrait1 + ' is ' + compliment1 + ', and your ' + bodytraits1 + ' are so ' + compliment2 + '!');

      break;
    }

  };
  if (currentsubject == 'insult') {
    var diceroll = Math.floor(Math.random() * 10 + 1);
    switch (diceroll) {
    case 1:
      var resultphrase = ('You are very ' + insult1 + '!');

      break;

    case 2:
      var resultphrase = ('You are a ' + insult1 + ' ' + negativename1 + '!');

      break;

    case 3:
      var resultphrase = ('You are definitely such a ' + insult1 + ' ' + negativename1 + '!');

      break;

    case 4:
      var resultphrase = ('I have never met such a ' + insult1 + ' ' + negativename1 + ' until now!');

      break;

    case 5:
      var resultphrase = ('Such a ' + insult1 + ' ' + negativename1 + ' you are!');

      break;

    case 6:
      var resultphrase = ('You are certainly a ' + insult1 + ' ' + negativename1 + '!');

      break;

    case 7:
      var resultphrase = ('I hope you were not born as a ' + insult1 + ' ' + negativename1 + ', because that is what you currently are!');

      break;

    case 8:
      var resultphrase = ('Your ' + bodytrait1 + ' is so ' + insult1 + ' makes you look like a ' + negativename1 + '!');

      break;

    case 9:
      var resultphrase = ('You have such ' + insult1 + ' ' + bodytraits1 + ', my eyes!');

      break;

    case 10:
      var resultphrase = ('Your ' + bodytrait1 + ' is ' + insult1 + ', and your ' + bodytraits1 + ' are so ' + insult2 + '!');

      break;
    }

  };
  if (currentsubject == 'fortune') {

  };
  var firstletter = resultphrase[0];
  resultphrase = resultphrase.replace(firstletter, firstletter.toLocaleUpperCase());
  const el = document.createElement('textarea');
  el.value = resultphrase;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  document.getElementById('phrasedisplay').innerHTML = resultphrase;
};
