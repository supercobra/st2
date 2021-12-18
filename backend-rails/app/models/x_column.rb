class XColumn < Gizmo
  belongs_to :table_definition, foreign_key: 'gizmo_id'
end
