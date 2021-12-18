class Cell < Gizmo
  belongs_to :row, foreign_key: :gizmo_id, class_name: Gizmo.to_s
end
