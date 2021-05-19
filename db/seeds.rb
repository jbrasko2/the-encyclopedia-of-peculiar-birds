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
    description: 'The great blue heron (Ardea herodias) is a large wading bird in the heron family Ardeidae, common near the shores of open water and in wetlands over most of North America and Central America, as well as the Caribbean and the Galápagos Islands. It is a rare vagrant to coastal Spain, the Azores, and areas of far southern Europe. An all-white population found in south Florida and the Florida Keys is known as the great white heron. Debate exists about whether this represents a white color morph of the great blue heron, a subspecies of it, or an entirely separate species.[2][3] The status of white individuals known to occur elsewhere in the Caribbean, and very rarely elsewhere in eastern North America, is unclear.',
    img_url: 'https://live.staticflickr.com/903/27344798367_695fd129d8_b.jpg'
)

Bird.create(
    name: 'Toco Toucan',
    scientific_name: 'Ramphastos toco',
    order: 'Piciformes',
    family: 'Ramphastidae',
    genus: 'Ramphastos',
    species: 'R. toco',
    conservation: 'LC',
    description: 'The toco toucan (Ramphastos toco), also known as the common toucan or giant toucan, is the largest and probably the best known species in the toucan family. It is found in semi-open habitats throughout a large part of central and eastern South America. It is a common attraction in zoos.',
    img_url: 'https://live.staticflickr.com/8033/8005280983_3fdd586694_b.jpg'
)

Bird.create(
    name: '''I''iwi',
    scientific_name: 'Drepanis coccinea',
    order: 'Passeriformes',
    family: 'Fringillidae',
    genus: 'Drepanis',
    species: 'D. coccinea',
    conservation: 'VU',
    description: 'The ʻiʻiwi (Drepanis coccinea, pronounced /iːˈiːviː/, ee-EE-vee) or scarlet honeycreeper is a species of Hawaiian honeycreeper. The ʻiʻiwi is a highly recognizable symbol of Hawaiʻi. The ʻiʻiwi is the third most common native land bird in the Hawaiian Islands.',
    img_url: 'https://live.staticflickr.com/4370/36474996884_2943ea3485_b.jpg'
)