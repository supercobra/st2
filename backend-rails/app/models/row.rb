class Row < Gizmo
  belongs_to :table, foreign_key: :gizmo_id, class_name: Table.to_s
  has_many :cells, dependent: :destroy, foreign_key: :gizmo_id, class_name: Gizmo.to_s
end
