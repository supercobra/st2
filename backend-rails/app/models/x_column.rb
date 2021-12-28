class XColumn < Gizmo

  CUSTOM_FIELDS = {
    value_type: :string1,
    width_in_px: :int1
  }.freeze
  include HasCustomFields

  VALUE_TYPES = [StringInput.to_s, NumberInput.to_s].freeze

  belongs_to :x_table, foreign_key: :gizmo_id, class_name: Gizmo.to_s
  has_one :column_summary, foreign_key: :gizmo_id

  validates :width_in_px, numericality: { only_integer: true, greater_than: 0 }
  validates_inclusion_of :value_type, in: VALUE_TYPES

  before_validation :set_default_values, on: :create

  def cells
    x_table.cells.where(position: position)
  end

  def set_default_values
    self.width_in_px = 100 if self.width_in_px.blank?
  end
end
