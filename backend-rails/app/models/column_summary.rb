class XColumn < Gizmo
  belongs_to :table_definition, foreign_key: 'gizmo_id'
  has_one :column_summary, foreign_key: 'gizmo_id'
end
