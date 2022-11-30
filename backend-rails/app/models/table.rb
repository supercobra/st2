class Table < Gizmo
  belongs_to :workspace, foreign_key: :gizmo_id
  has_many :kolumns, dependent: :destroy, foreign_key: :gizmo_id
  has_many :rows, dependent: :destroy, foreign_key: :gizmo_id

  def cells
    Gizmo.all.where(gizmo_id: rows.pluck(:id))
  end
end
