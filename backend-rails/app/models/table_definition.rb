class TableDefinition < Gizmo
  belongs_to :x_table, class_name: XTable.to_s, foreign_key: 'gizmo_id'
  has_many :x_columns, dependent: :destroy, class_name: Gizmo.to_s, foreign_key: 'gizmo_id'
end
