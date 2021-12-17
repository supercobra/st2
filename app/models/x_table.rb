class XTable < Gizmo
  has_one :table_definition, :dependent => :destroy, foreign_key: :gizmo_id
  has_many :rows, dependent: :destroy, foreign_key: :gizmo_id
end
