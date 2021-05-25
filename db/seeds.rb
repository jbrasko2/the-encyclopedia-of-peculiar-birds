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