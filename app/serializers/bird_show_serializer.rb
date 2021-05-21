class BirdShowSerializer < ActiveModel::Serializer
  attributes :id, :name, :scientific_name, :order, :family, :genus, :species, :conservation, :description, :img_url
end
