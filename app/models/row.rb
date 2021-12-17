class Row < Gizmo
  belongs_to :x_table, foreign_key: :gizmo_id, class_name: XTable.to_s
  has_many :cells, dependent: :destroy, foreign_key: :gizmo_id, class_name: Gizmo.to_s
end
