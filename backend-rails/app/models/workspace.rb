class Workspace < Gizmo
  belongs_to :account, foreign_key: :gizmo_id
  has_many :x_tables, dependent: :destroy, class_name: Gizmo.to_s, foreign_key: 'gizmo_id'
end
