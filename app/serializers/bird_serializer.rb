class BirdSerializer < ActiveModel::Serializer
  attributes :id, :scientific_name, :img_url
end
