const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "whale",
        hint: "A large marine mammal known for its size and intelligence."
    },
    {
        word: "seaside",
        hint: "A place by the sea, especially a beach area for relaxation."
    },
    {
        word: "harbor",
        hint: "A sheltered body of water where ships dock."
    },
    {
        word: "satellite",
        hint: "A celestial body orbiting a planet or an artificial object in space."
    },
    {
        word: "comet",
        hint: "A celestial object with a nucleus of ice and dust that forms a tail when near the sun."
    },
    {
        word: "trampoline",
        hint: "A piece of equipment for jumping, consisting of a strong fabric stretched tightly across a metal frame."
    },
    {
        word: "lightning",
        hint: "A natural electrical discharge of short duration and high voltage."
    },
    {
        word: "adrenaline",
        hint: "A hormone that increases heart rate and energy levels in response to stress."
    },
    {
        word: "metropolis",
        hint: "A large and densely populated urban area."
    },
    {
        word: "firework",
        hint: "A device that explodes to produce bright lights and colors for celebrations."
    },
    {
        word: "giraffe",
        hint: "A tall African mammal with a very long neck."
    },
    {
        word: "treasure",
        hint: "A collection of valuable objects or wealth."
    },
    {
        word: "ocean",
        hint: "A vast body of salt water covering most of Earth's surface."
    },
    {
        word: "lantern",
        hint: "A portable light source often enclosed in a protective case."
    },
    {
        word: "pyramid",
        hint: "A monumental structure with a square or triangular base and sloping sides."
    },
    {
        word: "canyon",
        hint: "A deep gorge with steep sides, often carved by a river."
    },
    {
        word: "caravan",
        hint: "A group of people traveling together, often across a desert."
    },
    {
        word: "horizon",
        hint: "The line where the earth's surface appears to meet the sky."
    },
    {
        word: "peacock",
        hint: "A bird known for its colorful and iridescent tail feathers."
    },
    {
        word: "nectar",
        hint: "A sweet liquid produced by flowers and collected by bees."
    },
    {
        word: "compass",
        hint: "An instrument used for navigation and orientation."
    },
    {
        word: "mirage",
        hint: "An optical illusion caused by atmospheric conditions."
    },
    {
        word: "avalanche",
        hint: "A sudden and massive slide of snow, ice, and rocks down a mountainside."
    },
    {
        word: "meadow",
        hint: "A field of grass and wildflowers."
    },
    {
        word: "origami",
        hint: "The Japanese art of paper folding."
    },
    {
        word: "fossil",
        hint: "The preserved remains of an organism from a past geological age."
    },
    {
        word: "meteor",
        hint: "A streak of light in the sky caused by a meteoroid entering Earth's atmosphere."
    },
    {
        word: "island",
        hint: "A piece of land completely surrounded by water."
    },
    {
        word: "labyrinth",
        hint: "A complicated network of paths or passages."
    },
    {
        word: "dragonfly",
        hint: "An insect with large, transparent wings and a long body."
    },
    {
        word: "dolphin",
        hint: "A highly intelligent marine mammal known for its playful behavior."
    },
    {
        word: "eclipse",
        hint: "An event in which one celestial body obscures another."
    },
    {
        word: "archipelago",
        hint: "A group or chain of islands."
    },
    {
        word: "wildfire",
        hint: "A large and destructive fire that spreads quickly in the wild."
    },
    {
        word: "tsunami",
        hint: "A series of large ocean waves caused by underwater earthquakes or volcanic eruptions."
    },
    {
        word: "penguin",
        hint: "A flightless bird that lives in cold regions, such as Antarctica."
    },
    {
        word: "tundra",
        hint: "A treeless region with a cold climate and low-growing vegetation."
    },
    {
        word: "watermelon",
        hint: "A large fruit with a green rind and sweet red interior."
    },
    {
        word: "parachute",
        hint: "A device used to slow down the fall of a person or object from great heights."
    },
    {
        word: "lighthouse",
        hint: "A tower with a bright light that guides ships at sea."
    },
    {
        word: "tsunami",
        hint: "A series of ocean waves caused by an underwater earthquake or volcanic eruption."
    },
    {
        word: "compass",
        hint: "A navigation instrument that shows direction relative to Earth's magnetic poles."
    },
    {
        word: "phoenix",
        hint: "A mythical bird that rises from its own ashes."
    },
    {
        word: "constellation",
        hint: "A group of stars forming a recognizable pattern in the night sky."
    },
    {
        word: "geyser",
        hint: "A natural hot spring that periodically ejects a column of water and steam into the air."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings that undergoes metamorphosis."
    },
    {
        word: "hurricane",
        hint: "A tropical cyclone with strong winds and heavy rain."
    },
    {
        word: "caterpillar",
        hint: "The larval stage of a butterfly or moth."
    },
    {
        word: "stalactite",
        hint: "A formation hanging from the ceiling of a cave, created by dripping water."
    },
    {
        word: "stalagmite",
        hint: "A mound or column rising from the floor of a cave, formed by dripping water."
    },
    {
        word: "koala",
        hint: "An arboreal marsupial native to Australia."
    },
    {
        word: "zephyr",
        hint: "A soft, gentle breeze."
    },
    {
        word: "plaza",
        hint: "A public square or open area in a city or town."
    },
    {
        word: "firefly",
        hint: "A bioluminescent insect that glows in the dark."
    },
    {
        word: "whirlpool",
        hint: "A swirling body of water that forms a vortex."
    },
    {
        word: "eagle",
        hint: "A large bird of prey known for its keen eyesight."
    },
    {
        word: "coral",
        hint: "A marine organism that forms reefs in tropical waters."
    },
    {
        word: "seahorse",
        hint: "A small marine fish with a horse-like head."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "fjord",
        hint: "A long, narrow inlet with steep cliffs, created by a glacier."
    },
    {
        word: "cloudburst",
        hint: "A sudden and heavy rainfall."
    }
];
