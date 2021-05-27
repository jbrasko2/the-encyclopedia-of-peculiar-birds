# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bird.create(
    name: 'Great Blue Heron',
    scientific_name: 'Ardea herodias',
    order: 'Pelecaniformes',
    family: 'Ardeidae',
    genus: 'Ardea',
    species: 'A. herodias',
    conservation: 'LC',
    description: 'The great blue heron (Ardea herodias) is a large wading bird in the heron family Ardeidae, common near the shores of open water and in wetlands over most of North America and Central America, as well as the Caribbean and the Galápagos Islands. It is a rare vagrant to coastal Spain, the Azores, and areas of far southern Europe. An all-white population found in south Florida and the Florida Keys is known as the great white heron. Debate exists about whether this represents a white color morph of the great blue heron, a subspecies of it, or an entirely separate species. The status of white individuals known to occur elsewhere in the Caribbean, and very rarely elsewhere in eastern North America, is unclear.',
    img_url: 'great-blue-heron.jpg'
)

Bird.create(
    name: 'Atlantic Puffin',
    scientific_name: 'Fratercula arctica',
    order: 'Charadriiformes',
    family: 'Alcidae',
    genus: 'Fratercula',
    species: 'F. arctica',
    conservation: 'VU',
    description: 'The Atlantic puffin (Fratercula arctica), also known as the common puffin, is a species of seabird in the auk family. It is the only puffin native to the Atlantic Ocean; two related species, the tufted puffin and the horned puffin, are found in the northeastern Pacific. The Atlantic puffin breeds in Québec, Iceland, Norway, Greenland, Newfoundland and Labrador, Nova Scotia and the Faroe Islands, and as far south as Maine in the west and parts of Great Britain in the east. The Atlantic Puffin is most commonly found on the Westman Islands, Iceland. Although it has a large population and a wide range, the species has declined rapidly, at least in parts of its range, resulting in it being rated as vulnerable by the IUCN. On land, it has the typical upright stance of an auk. At sea, it swims on the surface and feeds mainly on small fish, which it catches by diving under water, using its wings for propulsion.',
    img_url: 'puffin.jpg'
)

Bird.create(
    name: 'American Flamingo',
    scientific_name: 'Phoenicopterus ruber',
    order: 'Phoenicopteriformes',
    family: 'Phoenicopteridae',
    genus: 'Phoenicopterus',
    species: 'P. ruber',
    conservation: 'LC',
    description: 'The American flamingo (Phoenicopterus ruber) is a large species of flamingo closely related to the greater flamingo and Chilean flamingo. It was formerly considered conspecific with the greater flamingo, but that treatment is now widely viewed (e.g. by the American and British Ornithologists Unions) as incorrect due to a lack of evidence. It is also known as the Caribbean flamingo, although it is also present in the Galápagos Islands. It is the only flamingo that naturally inhabits North America.',
    img_url: 'american-flamingo.jpg'
)

Bird.create(
    name: 'American Oystercatcher',
    scientific_name: 'Haematopus palliatus',
    order: 'Charadriiformes',
    family: 'Haematopodidae',
    genus: 'Haematopus',
    species: 'H. palliatus',
    conservation: 'LC',
    description: 'The American oystercatcher (Haematopus palliatus), occasionally called the American pied oystercatcher, is a member of family Haematopodidae. Originally called the "sea pie", it was renamed in 1731 when naturalist Mark Catesby observed the bird eating oysters. The current population of American oystercatchers is estimated to be 43,000. There are estimated to be 1,500 breeding pairs along the Atlantic and Gulf Coasts of the US. The bird is marked by its black and white body and a long, thick orange beak.',
    img_url: 'american-oystercatcher.jpg'
)

Bird.create(
    name: 'American White Pelican',
    scientific_name: 'Pelecanus erythrorhynchos',
    order: 'Pelecaniformes',
    family: 'Pelecanidae',
    genus: 'Pelecanus',
    species: 'P. erythrorhynchos',
    conservation: 'LC',
    description: 'The American white pelican (Pelecanus erythrorhynchos) is a large aquatic soaring bird from the order Pelecaniformes. It breeds in interior North America, moving south and to the coasts, as far as Central America and South America, in winter.',
    img_url: 'american-white-pelican.jpg'
)

Bird.create(
    name: 'Summer Tanager',
    scientific_name: 'Piranga rubra',
    order: 'Passeriformes',
    family: 'Cardinalidae',
    genus: 'Piranga',
    species: 'P. rubra',
    conservation: 'LC',
    description: 'The summer tanager (Piranga rubra) is a medium-sized American songbird. Formerly placed in the tanager family (Thraupidae), it and other members of its genus are now classified in the cardinal family (Cardinalidae). The species''s plumage and vocalizations are similar to other members of the cardinal family.',
    img_url: 'summer-tanager.jpg'
)

Bird.create(
    name: 'Whip-Poor-Will',
    scientific_name: 'Piranga rubra',
    order: 'Caprimulgiformes',
    family: 'Caprimulgidae',
    genus: 'Antrostomus',
    species: 'A. vociferus',
    conservation: 'NT',
    description: 'The eastern whip-poor-will (Antrostomus vociferus) is a medium-sized (22–27 cm) nightjar from North America. The whip-poor-will is commonly heard within its range, but less often seen because of its camouflage. It is named onomatopoeically after its song.',
    img_url: 'whip-poor-will.jpg'
)

Bird.create(
    name: 'Black-Billed Magpie',
    scientific_name: 'Pica hudsonia',
    order: 'Passeriformes',
    family: 'Corvidae',
    genus: 'Pica',
    species: 'P. hudsonia',
    conservation: 'LC',
    description: 'The black-billed magpie (Pica hudsonia), also known as the American magpie, is a bird in the corvidae family that inhabits the western half of North America, from Colorado, to southern coastal Alaska, to Central Oregon, to northern California, northern Nevada, northern Arizona, northern New Mexico, central Kansas, and Nebraska. In Canada it is found in far Western Ontario, Manitoba, Saskatchewan, Alberta, British Columbia, and Yukon. It is black and white, with black areas on the wings and tail showing iridescent hints of blue or blue-green. It is one of only four North American songbirds whose tail makes up half or more of the total body length (the others being the yellow-billed magpie, the scissor-tailed flycatcher, and the fork-tailed flycatcher). This species prefers generally open habitats with clumps of trees. It can therefore be found in farmlands and suburban areas, where it comes into regular contact with people. Where persecuted it becomes very wary, but otherwise it is fairly tolerant of human presence. Historically associated with bison herds, it now lands on the back of cattle to clean ticks and insects from them. Large predators such as wolves are commonly followed by black-billed magpies, who scavenge from their kills. The species also walks on the ground, where it obtains such food items as beetles, grasshoppers, worms, and small rodents. The black-billed magpie is one of the few North American birds that build a domed nest. This nest is made up of twigs and sits near the top of trees. Usually 6–7 eggs are laid. Incubation, by the female only, starts when the clutch is complete, and lasts 16–21 days. The nestling period is 3–4 weeks.',
    img_url: 'black-billed-magpie.jpg'
)

Bird.create(
    name: 'Cerulean Warbler',
    scientific_name: 'Setophaga cerulea',
    order: 'Passeriformes',
    family: 'Parulidae',
    genus: 'Setophaga',
    species: 'S. cerulea',
    conservation: 'NT',
    description: 'The cerulean warbler (Setophaga cerulea) is a small songbird of the New World warbler family. Adult males have pale cerulean blue and white upperparts with a black necklace across the breast and black streaks on the back and flanks. Females and immature birds have greyer or greenish upperparts, a pale stripe over the eye, and no streaking on the back and no neck. All of these birds have wing bars and a thin pointed bill. They are found in deciduous forests of eastern North America during the breeding season and then migrate to forested mountain areas in South America. The species is considered threatened with an IUCN status of near threatened, indicating it does not face any imminent threat of extinction in the wild.',
    img_url: 'cerulean-warbler.jpg'
)

Bird.create(
    name: 'Three-Toed Woodpecker',
    scientific_name: 'Picoides dorsalis',
    order: 'Piciformes',
    family: 'Picidae',
    genus: 'Picoides',
    species: 'P. dorsalis',
    conservation: 'LC',
    description: 'The American three-toed woodpecker (Picoides dorsalis) is a medium-sized woodpecker (family Picidae), which is native to North America. This woodpecker has a length of 21 cm (8.3 in), a wingspan of 38 cm (15 in), and an average weight of 55 g (1.9 oz); its maximum lifespan in the wild is 6 years. It closely resembles the black-backed woodpecker, which is also three-toed. Until recently, it was considered to be the same species as the Eurasian three-toed woodpecker, P. tridactylus. Adults are black on the head, wings and rump, and white from the throat to the belly; the flanks are white with black bars. The back is white with black bars and the tail is black with the white outer feathers barred with black. The adult male has a yellow cap.',
    img_url: 'three-toed-woodpecker.jpg'
)

Bird.create(
    name: 'Willet',
    scientific_name: 'Tringa semipalmata',
    order: 'Charadriiformes',
    family: 'Scolopacidae',
    genus: 'Tringa',
    species: 'T. semipalmata',
    conservation: 'LC',
    description: 'The willet (Tringa semipalmata), formerly in the monotypic genus Catoptrophorus as Catoptrophorus semipalmatus, is a large shorebird in the family Scolopacidae. It is a relatively large and robust sandpiper, and is the largest of the species called "shanks" in the genus Tringa. Its closest relative is the lesser yellowlegs, a much smaller bird with a very different appearance apart from the fine, clear, and dense pattern of the neck, which both species show in breeding plumage. It breeds in North America and the West Indies and winters in southern North America, Central America, the West Indies and South America.',
    img_url: 'willet.jpg'
)

Bird.create(
    name: 'Long-Billed Curlew',
    scientific_name: 'Numenius americanus',
    order: 'Charadriiformes',
    family: 'Scolopacidae',
    genus: 'Numenius',
    species: 'N. americanus',
    conservation: 'LC',
    description: 'The long-billed curlew (Numenius americanus) is a large North American shorebird of the family Scolopacidae. This species was also called "sicklebird" and the "candlestick bird". The species breeds in central and western North America, migrating southward and coastward for the winter. The long-billed curlew is the largest sandpiper of regular occurrence in North America. It is 50–65 cm (20–26 in) long, 62–90 cm (24–35 in) across the wing and weighs 490–950 g (1.08–2.09 lb). Its disproportionally long bill curves downward and measures 11.3–21.9 cm (4.4–8.6 in), and rivals the bill of the larger-bodied Far Eastern curlew as the longest bill of any shorebird. Individuals have a long neck and a small head. The neck and underparts are a light cinnamon in color, while the crown is streaked with brown. This species exhibits reversed sexual dimorphism, as in many sandpipers, the female being larger and having a much longer bill than the male''s.',
    img_url: 'long-billed-curlew.jpg'
)

Bird.create(
    name: 'Green Heron',
    scientific_name: 'Butorides virescens',
    order: 'Pelecaniformes',
    family: 'Ardeidae',
    genus: 'Butorides',
    species: 'B. virescens',
    conservation: 'LC',
    description: 'The green heron (Butorides virescens) is a small heron of North and Central America. Butorides is from Middle English butor "bittern" and Ancient Greek -oides, "resembling", and virescens is Latin for "greenish". It was long considered conspecific with its sister species the striated heron (Butorides striata), and together they were called "green-backed heron". Birds of the nominate subspecies (no matter which taxonomic arrangement is preferred) are extremely rare vagrants to western Europe—for example, a sighting in Pembrokeshire in 2018 was only the second recorded sighting in Wales; individuals from the Pacific coast of North America may similarly stray as far as Hawaii.',
    img_url: 'green-heron.jpg'
)

Bird.create(
    name: 'Double-Crested Cormorant',
    scientific_name: 'Phalacrocorax auritus',
    order: 'Suliformes',
    family: 'Phalacrocoracidae',
    genus: 'Phalacrocorax',
    species: 'P. auritus',
    conservation: 'LC',
    description: 'The double-crested cormorant (Phalacrocorax auritus) is a member of the cormorant family of water birds. Its habitat is near rivers and lakes as well as in coastal areas, and is widely distributed across North America, from the Aleutian Islands in Alaska down to Florida and Mexico. Measuring 70–90 cm (28–35 in) in length, it is an all-black bird which gains a small double crest of black and white feathers in breeding season. It has a bare patch of orange-yellow facial skin. Five subspecies are recognized. It mainly eats fish and hunts by swimming and diving. Its feathers, like those of all cormorants, are not waterproof and it must spend time drying them out after spending time in the water. Once threatened by the use of DDT, the numbers of this bird have increased markedly in recent years.',
    img_url: 'double-crested-cormorant.jpg'
)

Bird.create(
    name: 'Osprey',
    scientific_name: 'Pandion haliaetus',
    order: 'Accipitriformes',
    family: 'Pandionidae',
    genus: 'Pandion',
    species: 'P. haliaetus',
    conservation: 'LC',
    description: 'The osprey or more specifically the western osprey (Pandion haliaetus) — also called sea hawk, river hawk, and fish hawk — is a diurnal, fish-eating bird of prey with a cosmopolitan range. It is a large raptor, reaching more than 60 cm (24 in) in length and 180 cm (71 in) across the wings. It is brown on the upperparts and predominantly greyish on the head and underparts. The osprey tolerates a wide variety of habitats, nesting in any location near a body of water providing an adequate food supply. It is found on all continents except Antarctica, although in South America it occurs only as a non-breeding migrant. As its other common names suggest, the osprey''s diet consists almost exclusively of fish. It possesses specialised physical characteristics and exhibits unique behaviour to assist in hunting and catching prey. As a result of these unique characteristics, it has been given its own taxonomic genus, Pandion and family, Pandionidae. Three subspecies are usually recognized; one of the former subspecies, cristatus, has recently been given full species status and is referred to as the eastern osprey.',
    img_url: 'osprey.jpg'
)