class Gizmo < ApplicationRecord
  MAX_NAME_LENGTH = 256
  include Serializable
  CUSTOM_FIELDS = {}

  validates :name, length: { maximum: MAX_NAME_LENGTH }

  belongs_to :gizmo,
             optional: true,
             foreign_key: :gizmo_id

  has_many :gizmos, foreign_key: :gizmo_id, dependent: :destroy

end
