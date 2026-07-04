export const categories = [
  {
    slug: "dog-training",
    label: "Dog Training & Behavior",
    description:
      "The stuff that comes up with almost every dog, at some point. Puppy basics, habits that have stuck around longer than they should have, and training that actually holds up once the treats run out.",
  },
  {
    slug: "cat-care",
    label: "Cat Care & Behavior",
    description:
      "Reading what your cat is actually telling you, and handling the moments (scratching, new arrivals, litter box battles) that come with sharing a home with one.",
  },
  {
    slug: "health-wellness",
    label: "Health & Wellness",
    description: "General wellness guidance for keeping a pet in good shape day to day.",
  },
  {
    slug: "grooming",
    label: "Grooming & Hygiene",
    description: "Practical, at-home grooming that doesn't require a professional every time.",
  },
  {
    slug: "new-owner",
    label: "New Pet Owner Guides",
    description:
      "Everything that's obvious in hindsight and stressful in the moment, for people bringing a pet home for the first time.",
  },
  {
    slug: "gear-products",
    label: "Gear & Products",
    description: "Straightforward buying guidance, without the sponsored-review noise.",
  },
];

export const articles = [
  {
    slug: "trim-dog-nails-safely",
    title: "How to Trim Your Dog's Nails Safely",
    category: "grooming",
    tag: "Nail Care",
    entryNo: "044",
    steps: 7,
    readTime: "6 min read",
    difficulty: "Easy",
    updated: "Jun 2026",
    excerpt:
      "Our most-read entry this month. Seven steps, one photo of exactly where the quick sits, and what to do if you nick it anyway.",
    intro:
      "Most dogs don't actually hate nail trims. They hate <em>bad</em> nail trims, the kind where someone's rushing, gripping too hard, or squinting at a dark nail with no idea where to stop. Get the grip and the light right and it's a five-minute job, no vet visit required.",
    whatYouNeed:
      "Dog-specific clippers (guillotine-style works well for small breeds, scissor-style for larger ones) or a grinder if your dog tolerates the noise. Keep styptic powder within reach even if you don't think you'll need it. And treats. Good treats, not the stale ones at the bottom of the bag.",
    stepList: [
      {
        title: "Get your dog used to having their paws touched, before any clippers show up",
        body: "Two or three short sessions of just holding and gently pressing each paw, treat in hand, does more for the actual trim than any clipper technique. Skip this step and you'll be fighting the whole way through.",
      },
      {
        title: "Pick your moment, and use real daylight if you can",
        body: "The quick, that pink core running through the center of the nail, is far easier to spot in natural light. Right after a walk tends to work best too. A slightly tired dog holds still better than a wired one.",
      },
      {
        title: "Hold the paw from the top",
        body: "Thumb on the pad, fingers curled gently over the toes. It gives you control without putting pressure on the part of the paw that's actually sensitive.",
      },
      {
        title: "Find the quick before the clipper goes anywhere near the nail",
        body: "Light nails make this easy: look for the pink, then stay a couple of millimeters clear of it. Dark nails take patience. Trim in thin slices and stop the moment you see a dark dot appear in the center of the cut.",
      },
      {
        title: "Angle the cut, don't go straight across",
        body: "About 45 degrees, following the curve the nail already has. It leaves a cleaner edge and the nail is less likely to split later.",
      },
      {
        title: "Take less than you think, then look again",
        body: "One thin slice, check what you're looking at, decide from there. A second small trim costs you nothing. A nail cut too short costs you an upset dog and a harder next session.",
      },
      {
        title: "Treat after every paw, not just at the end",
        body: "This is the part people skip when they're in a hurry, and it's the part that determines whether the next trim is easier or harder. Finish with a quick pass of a nail file over any rough spots.",
      },
    ],
    callout: {
      title: "If you nick the quick",
      body: "It happens, even to people who've done this for years. Press styptic powder, or plain flour if that's what's in the cupboard, onto the tip and hold for about 30 seconds. It bleeds more than the injury actually warrants, but it stops fast and your dog will likely forget about it before you do.",
    },
    extra: {
      heading: "How often does this actually need doing?",
      body: "Every three to four weeks for most dogs. You'll usually hear it before you decide to check: that clicking sound on wood or tile floors is the giveaway. Dogs that spend a lot of time walking on pavement wear their nails down naturally and can go longer between trims.",
    },
    faqs: [
      {
        q: "What if my dog won't sit still at all?",
        a: "Drop back to step one and spend a week on paw-touching alone, no clippers involved. And there's no rule that says all four paws have to happen in one sitting. One paw today, one tomorrow works just fine.",
      },
      {
        q: "Are grinders safer than clippers?",
        a: "They take off less nail per pass, so there's more room for error before you hit the quick. The tradeoff is the noise and vibration, which some dogs tolerate fine and others really don't. Try both if you're not sure which your dog will prefer.",
      },
      {
        q: "Can I use human nail clippers?",
        a: "Better not to. They tend to crush a dog's thicker nail instead of cutting it cleanly, and that can cause splitting even when the trim itself looked fine.",
      },
    ],
    related: ["stop-puppy-biting", "crate-train-puppy", "read-cat-tail-language"],
  },
  {
    slug: "stop-puppy-biting",
    title: "How to Stop a Puppy From Biting",
    category: "dog-training",
    tag: "Puppy basics",
    entryNo: "014",
    steps: 5,
    readTime: "4 min read",
    difficulty: "Easy",
    updated: "May 2026",
    excerpt: "Redirect the instinct instead of punishing it, the four-step method trainers actually use.",
    intro:
      "Puppies bite. It's how they explore, and it's how they used to play with littermates before they came home with you. The goal isn't to stop the behavior outright, it's to teach them that human skin isn't a chew toy.",
    whatYouNeed: "A couple of appropriate chew toys, and more patience than you think you'll need in week one.",
    stepList: [
      {
        title: "Yelp, then stop moving",
        body: "A sharp, high-pitched 'ow' mimics what a littermate would do. Most puppies pause out of surprise. That pause is your opening.",
      },
      {
        title: "Redirect to a toy immediately",
        body: "The moment your hand is free, offer a chew toy instead. You're teaching a substitution, not just a 'no'.",
      },
      {
        title: "End play if the biting continues",
        body: "If they go straight back to your hand, calmly stand up and remove attention for 30 seconds. Puppies want the game to keep going, so this lands.",
      },
      {
        title: "Reward gentle mouthing generously",
        body: "When they play with a toy instead of your hand, or mouth softly without pressure, mark it with praise. This is the behavior you're actually building toward.",
      },
      {
        title: "Stay consistent across everyone in the house",
        body: "If one person allows rough play and another doesn't, the puppy gets mixed signals and progress slows. Get everyone on the same page early.",
      },
    ],
    faqs: [
      {
        q: "Is this different for an older dog that still mouths?",
        a: "The same redirection principle applies, but if biting is new in an adult dog rather than a lifelong habit, it's worth ruling out pain or anxiety with a vet first.",
      },
      {
        q: "How long does this usually take?",
        a: "Most puppies show real improvement within two to three weeks of consistent redirection. Teething periods can bring a temporary relapse, that's normal.",
      },
    ],
    related: ["crate-train-puppy", "first-48-hours-puppy"],
  },
  {
    slug: "teach-recall-off-leash",
    title: "How to Teach Reliable Recall Off-Leash",
    category: "dog-training",
    tag: "Obedience",
    entryNo: "022",
    steps: 6,
    readTime: "7 min read",
    difficulty: "Moderate",
    updated: "Apr 2026",
    excerpt: "Build a \"come\" command your dog obeys even around distractions.",
    intro:
      "A recall that only works in a quiet backyard isn't really a recall. The method below builds it in layers, starting somewhere boring and working up to somewhere your dog actually wants to be.",
    whatYouNeed: "A long training lead (15 to 30 feet), high-value treats your dog doesn't get any other time, and a quiet space to start.",
    stepList: [
      {
        title: "Pick one word and never change it",
        body: "'Come' or your dog's name plus 'here', doesn't matter which, as long as it's always the same word said the same way.",
      },
      {
        title: "Practice indoors first, with zero distractions",
        body: "Say the word, then immediately reward when they arrive, every single time, for at least a week before adding any difficulty.",
      },
      {
        title: "Add distance gradually in the yard",
        body: "Once indoor recall is automatic, move outside on the long lead. Increase distance only after several clean repetitions at the current one.",
      },
      {
        title: "Introduce mild distractions on the long lead",
        body: "Another person nearby, a ball on the ground, anything moderately interesting. The lead is there so you can guide them back if they ignore you, never as a punishment.",
      },
      {
        title: "Practice recall away from something they want",
        body: "This is the real test: calling them away from a squirrel or another dog. Keep the reward better than what they're leaving behind.",
      },
      {
        title: "Only go off-leash once the long-lead version is consistent",
        body: "If they're not reliably coming back on 30 feet of slack, they're not ready for zero feet. This step isn't optional, even if it's tempting to skip.",
      },
    ],
    faqs: [
      {
        q: "My dog comes eventually, just not right away. Is that good enough?",
        a: "Not for off-leash safety. Work on rewarding speed specifically, treating a fast response as more valuable than a slow one.",
      },
      {
        q: "Should I ever call my dog for something unpleasant, like a bath?",
        a: "Avoid it if you can. Calling them for a bath then giving them a bath teaches them that coming when called sometimes ends badly, which undoes a lot of the training.",
      },
    ],
    related: ["stop-puppy-biting", "leash-walking-without-pulling"],
  },
  {
    slug: "crate-train-puppy",
    title: "How to Crate Train a Puppy Without Tears",
    category: "dog-training",
    tag: "Puppy basics",
    entryNo: "008",
    steps: 5,
    readTime: "5 min read",
    difficulty: "Easy",
    updated: "Mar 2026",
    excerpt: "Turn the crate into the safest place in the house, not a punishment box.",
    intro:
      "A crate works when a puppy sees it as their own space, not as a place they get sent when they've done something wrong. That distinction shapes everything below.",
    whatYouNeed: "A crate sized so your puppy can stand, turn around, and lie down comfortably, but not much bigger. Soft bedding and a few treats.",
    stepList: [
      {
        title: "Leave the door open at first",
        body: "Toss treats inside and let your puppy wander in and out on their own terms for a few days. No pressure, no closed door yet.",
      },
      {
        title: "Feed meals inside the crate",
        body: "This builds a strong positive association fast. Start with the door open, then closed for the duration of the meal only.",
      },
      {
        title: "Extend closed-door time in small increments",
        body: "A minute, then five, then fifteen, always while you're in the room. Let them out before they start whining, not after, so whining doesn't get rewarded with freedom.",
      },
      {
        title: "Practice leaving the room, then the house",
        body: "Once they settle calmly with the door closed and you nearby, start stepping out briefly. Build up to your actual departure times gradually.",
      },
      {
        title: "Keep the crate out of the punishment conversation entirely",
        body: "Never use it as a timeout for bad behavior. The second it becomes associated with trouble, months of positive work can unravel quickly.",
      },
    ],
    faqs: [
      {
        q: "How long can a puppy actually stay crated?",
        a: "As a rough guide, their age in months plus one hour, up to about four hours maximum, not counting overnight sleep.",
      },
      {
        q: "What if they cry every single time?",
        a: "Go back a step to shorter durations and check that the crate itself feels comfortable. Persistent distress after weeks of gradual training is worth mentioning to a vet.",
      },
    ],
    related: ["stop-puppy-biting", "first-48-hours-puppy"],
  },
  {
    slug: "stop-cat-scratching-furniture",
    title: "How to Stop a Cat From Scratching Furniture",
    category: "cat-care",
    tag: "Behavior",
    entryNo: "019",
    steps: 4,
    readTime: "4 min read",
    difficulty: "Easy",
    updated: "May 2026",
    excerpt: "Give the instinct somewhere better to go, three redirects that actually work.",
    intro:
      "Scratching isn't a behavior problem to eliminate, it's a physical need to redirect. Cats scratch to mark territory and keep their claws healthy. The furniture just happens to be convenient.",
    whatYouNeed: "At least one sturdy scratching post per cat, taller than the cat when stretched, plus a horizontal cardboard scratcher as a backup option.",
    stepList: [
      {
        title: "Place posts right next to what they're currently scratching",
        body: "Location matters more than the post itself at first. Move it gradually toward where you'd prefer it once they're using it consistently.",
      },
      {
        title: "Make the post genuinely appealing",
        body: "Sisal rope or rough fabric tends to work better than carpet. A little catnip rubbed into the surface helps in the first week.",
      },
      {
        title: "Make the furniture temporarily less appealing",
        body: "Double-sided tape or aluminum foil on the scratched area feels unpleasant underpaw without hurting them, and most cats avoid it after a few tries.",
      },
      {
        title: "Reward every use of the post",
        body: "A treat or praise right when they scratch the post, not later, builds the association fastest.",
      },
    ],
    faqs: [
      {
        q: "Is declawing ever a reasonable solution?",
        a: "It's a significant surgical procedure with real welfare concerns, and it's banned in a number of countries. Redirection works for the vast majority of cases without it.",
      },
      {
        q: "My cat has plenty of posts and still scratches the couch. Why?",
        a: "Check the post's stability, a wobbly post often gets rejected, and try a different texture. Preference varies more between individual cats than people expect.",
      },
    ],
    related: ["introduce-two-cats", "read-cat-tail-language"],
  },
  {
    slug: "introduce-two-cats",
    title: "How to Introduce Two Cats Without a Fight",
    category: "cat-care",
    tag: "Care",
    entryNo: "027",
    steps: 6,
    readTime: "5 min read",
    difficulty: "Moderate",
    updated: "Apr 2026",
    excerpt: "A slow-introduction schedule that prevents territorial stress.",
    intro:
      "Rushing this is the most common mistake. Cats build tolerance through scent and gradual exposure, not face-to-face meetings on day one.",
    whatYouNeed: "A separate room for the new cat, two feeding stations, and roughly two weeks you're willing to be patient about.",
    stepList: [
      {
        title: "Keep them fully separated at first",
        body: "New cat gets their own room with everything they need. No visual contact yet, just proximity through a closed door.",
      },
      {
        title: "Swap scents before swapping space",
        body: "Trade bedding or a soft cloth rubbed on each cat between rooms daily. This lets them get used to each other's smell without any pressure.",
      },
      {
        title: "Feed on either side of the closed door",
        body: "Pairing food with the other cat's presence builds a positive association over time, gradually moving the bowls closer to the door as days pass.",
      },
      {
        title: "Allow supervised visual contact",
        body: "A cracked door or baby gate lets them see each other without full access. Keep sessions short and calm, ending before any tension builds.",
      },
      {
        title: "Progress to short shared time in a neutral room",
        body: "Not either cat's main territory. Keep initial sessions to a few minutes, with treats and calm distraction on hand.",
      },
      {
        title: "Extend shared time gradually over one to two weeks",
        body: "Watch body language throughout, flattened ears or a low growl means you moved too fast. Going back a step is normal and not a failure.",
      },
    ],
    faqs: [
      {
        q: "How do I know if it's just adjustment hissing or a real problem?",
        a: "Occasional hissing during the early stages is common and usually resolves. Ongoing stalking, cornering, or refusal to eat are signs to slow down significantly.",
      },
      {
        q: "Does age difference make this harder?",
        a: "Often, yes. A older, settled cat and a young kitten typically adjust faster than two adult cats with established territory habits.",
      },
    ],
    related: ["stop-cat-scratching-furniture", "litter-train-rescue-cat"],
  },
  {
    slug: "read-cat-tail-language",
    title: "How to Read Your Cat's Tail Language",
    category: "cat-care",
    tag: "Care",
    entryNo: "041",
    readTime: "5 min read",
    difficulty: "Easy",
    updated: "Jun 2026",
    excerpt: "What every position and flick actually means.",
    intro:
      "A cat's tail says more than most of what comes out of their mouth. Learning the basics takes the guesswork out of a lot of everyday interactions.",
    whatYouNeed: "Nothing but attention. This one's about observation rather than a process.",
    stepList: [
      {
        title: "Tail straight up, slight curve at the tip",
        body: "This is a confident, friendly greeting, often seen when a cat approaches someone they trust.",
      },
      {
        title: "Puffed up, or 'bottle brush'",
        body: "A fear or threat response, making themselves look larger. Give them space rather than approaching.",
      },
      {
        title: "Low, tucked tight against the body",
        body: "Anxiety or submission. Something in the environment is making them uneasy.",
      },
      {
        title: "Slow, wide swishing",
        body: "Usually a sign of focus or mild irritation, common right before a swat during play that's gone slightly too far.",
      },
      {
        title: "Fast flicking or thumping",
        body: "Overstimulation. This is often the last warning before a cat disengages from petting or play, worth respecting rather than pushing through.",
      },
    ],
    faqs: [
      {
        q: "What does it mean when only the tip twitches?",
        a: "Usually mild interest or alertness, like watching a bird through a window. Context matters more than the twitch alone.",
      },
      {
        q: "Can tail language contradict other body signals?",
        a: "Yes, and when it does, trust the tail. A cat can look relaxed elsewhere but a stiff, low tail is often the more honest signal.",
      },
    ],
    related: ["introduce-two-cats", "trim-dog-nails-safely"],
  },
  {
    slug: "litter-train-rescue-cat",
    title: "How to Litter Train a Rescue Cat",
    category: "cat-care",
    tag: "Care",
    entryNo: "011",
    steps: 6,
    readTime: "5 min read",
    difficulty: "Moderate",
    updated: "Mar 2026",
    excerpt: "Rebuild trust and habit at the same time, step by step.",
    intro:
      "Rescue cats sometimes arrive with inconsistent litter habits, or none at all. The fix usually has more to do with reducing stress than teaching a brand new skill.",
    whatYouNeed: "A large, uncovered litter box, unscented litter, and a confined starter space like a single room.",
    stepList: [
      {
        title: "Start in a small, confined space",
        body: "One room with food, water, bedding, and the litter box, kept apart from each other. Too much space too soon can lead to accidents simply from not finding the box in time.",
      },
      {
        title: "Choose unscented, fine-grain litter",
        body: "Scented litter and unusual textures put many cats off entirely. Plain and simple wins here.",
      },
      {
        title: "Keep the box clean, always",
        body: "Scoop at least once a day. A dirty box is one of the most common reasons a cat, rescue or otherwise, avoids it.",
      },
      {
        title: "Watch for pre-elimination signs",
        body: "Sniffing corners, circling, or scratching at the floor. Gently guide them to the box when you see this rather than after an accident.",
      },
      {
        title: "Never punish an accident",
        body: "It doesn't build the connection people hope for, and it often adds stress that makes future accidents more likely, not less.",
      },
      {
        title: "Expand their space gradually as habits solidify",
        body: "Once the small space is reliable for a week or two, open access to one additional room at a time.",
      },
    ],
    faqs: [
      {
        q: "How long does this usually take with a rescue?",
        a: "Anywhere from a few days to a few weeks, depending on their history. Patience matters more than speed here.",
      },
      {
        q: "Should I try a covered litter box?",
        a: "Many cats prefer open boxes, they offer better visibility and airflow. Try uncovered first, especially with an unfamiliar cat.",
      },
    ],
    related: ["introduce-two-cats", "stop-cat-scratching-furniture"],
  },
  {
    slug: "first-48-hours-puppy",
    title: "The First 48 Hours With a New Puppy",
    category: "new-owner",
    tag: "Getting started",
    entryNo: "001",
    steps: 6,
    readTime: "8 min read",
    difficulty: "Easy",
    updated: "Feb 2026",
    excerpt: "What to set up before they even arrive, hour by hour.",
    intro:
      "The first two days set the tone for everything after. Less about training, more about making the new environment feel safe and predictable.",
    whatYouNeed: "Food and water bowls, an appropriately sized crate, a few chew-safe toys, and a vet appointment booked for within the first week.",
    stepList: [
      {
        title: "Puppy-proof before they arrive, not after",
        body: "Get down at floor level and look for cords, small objects, and anything chewable within reach. Much easier to fix before there's a puppy loose in the house.",
      },
      {
        title: "Keep the first car ride and arrival calm",
        body: "A quiet crate or carrier for the ride, and a low-key entrance to the house rather than a crowd of excited greeters.",
      },
      {
        title: "Show them the essentials immediately",
        body: "Water bowl, designated bathroom spot outside, and their crate or bed, in that rough order, within the first hour.",
      },
      {
        title: "Stick to their previous food for now",
        body: "A sudden diet change on top of a huge environmental change is a common cause of stomach upset in the first days.",
      },
      {
        title: "Expect a rough first night",
        body: "Some crying is normal, they've just left everything familiar. A crate near your bed for the first few nights often helps more than isolation.",
      },
      {
        title: "Book the vet visit early",
        body: "Within the first week if possible, to check general health and plan out the vaccination schedule ahead.",
      },
    ],
    faqs: [
      {
        q: "Should I start training right away?",
        a: "Very light, short sessions are fine from day one, but the priority for the first 48 hours is comfort and safety, not obedience.",
      },
      {
        q: "How much should a new puppy be sleeping?",
        a: "A lot, often 18 to 20 hours a day. This is completely normal and important for development.",
      },
    ],
    related: ["crate-train-puppy", "stop-puppy-biting"],
  },
  {
    slug: "kitten-proof-home",
    title: "Kitten-Proofing Your Home, Room by Room",
    category: "new-owner",
    tag: "Getting started",
    entryNo: "003",
    steps: 5,
    readTime: "7 min read",
    difficulty: "Easy",
    updated: "Feb 2026",
    excerpt: "The hazards owners miss until it's too late, a full checklist.",
    intro:
      "Kittens investigate everything with their mouths and paws, which means hazards that seem obvious to an adult cat aren't obvious to them at all.",
    whatYouNeed: "About an hour to walk through your home at kitten height, looking for trouble.",
    stepList: [
      {
        title: "Secure cords and blind strings",
        body: "Both are chew and strangulation risks. Tuck them away or use cord covers, especially near beds and windows.",
      },
      {
        title: "Store toxic plants out of reach entirely",
        body: "Lilies are especially dangerous to cats, even small amounts of pollen can cause serious harm. When in doubt, remove the plant rather than relocate it.",
      },
      {
        title: "Check for small objects at floor level",
        body: "Rubber bands, hair ties, and small toy parts are common swallowing hazards. A quick floor-level sweep of every room catches most of these.",
      },
      {
        title: "Secure cabinets with cleaning supplies",
        body: "A simple childproof latch is usually enough to keep curious paws out of anything chemical.",
      },
      {
        title: "Cover or block small gaps and vents",
        body: "Kittens are small enough to get into spaces that seem impossible, behind appliances, inside box springs, up chimneys. Block these before they find them.",
      },
    ],
    faqs: [
      {
        q: "Are essential oil diffusers safe around kittens?",
        a: "Many common essential oils are toxic to cats even in diffused form. It's safest to avoid them entirely in a home with a cat.",
      },
      {
        q: "What about toilet lids?",
        a: "Worth keeping closed, mainly to prevent them falling in, though it's a smaller risk than the other items on this list.",
      },
    ],
    related: ["litter-train-rescue-cat", "choose-right-vet"],
  },
  {
    slug: "choose-right-vet",
    title: "How to Choose the Right Vet",
    category: "new-owner",
    tag: "Getting started",
    entryNo: "005",
    readTime: "6 min read",
    difficulty: "Easy",
    updated: "Jan 2026",
    excerpt: "Six questions to ask on your first call, before you book anything.",
    intro:
      "The right vet relationship lasts years, so it's worth a bit of upfront legwork rather than defaulting to whichever clinic is closest.",
    whatYouNeed: "A short list of two or three nearby clinics and about ten minutes per phone call.",
    stepList: [
      {
        title: "Ask about emergency and after-hours coverage",
        body: "Find out whether the clinic handles emergencies directly or refers out, and where that referral goes. Know this before you need it.",
      },
      {
        title: "Ask how they handle cost transparency",
        body: "A good clinic will walk you through estimated costs before major procedures rather than surprising you afterward.",
      },
      {
        title: "Ask about their approach to anxious or fearful pets",
        body: "Fear-free handling techniques make a real difference for nervous animals, and not every clinic prioritizes this equally.",
      },
      {
        title: "Ask what species and breeds they see most often",
        body: "A clinic that regularly treats your specific type of pet, especially for less common ones, tends to have more relevant hands-on experience.",
      },
      {
        title: "Ask about typical wait times for routine appointments",
        body: "Long waits for standard checkups can be a sign of being overbooked, worth knowing before it's your dog's turn for something time-sensitive.",
      },
      {
        title: "Trust your read on the first in-person visit",
        body: "How the staff handles your pet in the waiting room often tells you more than anything discussed on the phone.",
      },
    ],
    faqs: [
      {
        q: "Is a specialist better than a general practice vet?",
        a: "Not for most day-to-day care. A good general practice vet is usually the right starting point, referring to a specialist only when a specific issue calls for it.",
      },
      {
        q: "Should price be the deciding factor?",
        a: "It's a factor, but the cheapest option isn't always the best value once you account for communication quality and follow-up care.",
      },
    ],
    related: ["first-48-hours-puppy", "kitten-proof-home"],
  },
  {
    slug: "first-month-budget",
    title: "Setting a First-Month Budget for a New Pet",
    category: "new-owner",
    tag: "Getting started",
    entryNo: "009",
    readTime: "5 min read",
    difficulty: "Easy",
    updated: "Jan 2026",
    excerpt: "The real costs beyond food, vet visits, gear, and the surprises.",
    intro:
      "The sticker price of a pet is rarely the real cost. The first month tends to be the most expensive one you'll have, mostly from one-time setup costs.",
    whatYouNeed: "A rough sense of your local prices for vet care and pet supplies, which vary quite a bit by region.",
    stepList: [
      {
        title: "Budget for an initial vet visit separately from ongoing care",
        body: "The first visit often includes vaccinations, a general checkup, and sometimes microchipping, all at once. This one is usually the biggest single line item.",
      },
      {
        title: "Account for one-time setup gear",
        body: "Crate, bed, bowls, carrier, and initial toy supply. Buying most of this once, rather than gradually, is typically cheaper overall.",
      },
      {
        title: "Set aside a food budget based on your specific pet's needs",
        body: "Larger breeds and certain dietary requirements can shift this significantly, worth checking before committing to a specific brand.",
      },
      {
        title: "Plan for training costs if you're using a class or trainer",
        body: "Group classes are generally more affordable than private sessions, and work well for most basic obedience needs.",
      },
      {
        title: "Keep a small buffer for the unexpected",
        body: "An unplanned vet visit in the first month isn't unusual, especially for a young or newly adopted animal adjusting to a new environment.",
      },
    ],
    faqs: [
      {
        q: "Is pet insurance worth it from day one?",
        a: "Starting a policy early, before any pre-existing conditions are on record, is generally when it provides the most value.",
      },
      {
        q: "What's usually the most underestimated cost?",
        a: "Ongoing preventative care, flea, tick, and heartworm prevention, adds up over a year in a way that's easy to overlook when focused on upfront costs.",
      },
    ],
    related: ["choose-right-vet", "first-48-hours-puppy"],
  },
];

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug) {
  return articles.filter((a) => a.category === categorySlug);
}

export function getCategoryBySlug(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getRelatedArticles(article) {
  return (article.related || [])
    .map((slug) => getArticleBySlug(slug))
    .filter(Boolean);
}

