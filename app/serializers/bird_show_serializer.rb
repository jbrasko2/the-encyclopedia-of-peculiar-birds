class BirdShowSerializer < ActiveModel::Serializer
  attributes :id, :scientific_name, :order, :family, :genus, :species, :conservation, :description, :img_url
end
