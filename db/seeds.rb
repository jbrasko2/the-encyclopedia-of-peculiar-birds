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
    img_url: 'great-blue-heron.jpg'
)