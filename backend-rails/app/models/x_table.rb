class XTable < Gizmo
  belongs_to :workspace, foreign_key: :gizmo_id
  has_many :x_columns, dependent: :destroy, class_name: Gizmo.to_s, foreign_key: :gizmo_id
  has_many :rows, dependent: :destroy, foreign_key: :gizmo_id
end
