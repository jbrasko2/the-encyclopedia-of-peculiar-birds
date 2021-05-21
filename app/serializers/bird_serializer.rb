class BirdSerializer < ActiveModel::Serializer
  attributes :id, :name, :scientific_name, :img_url
end
