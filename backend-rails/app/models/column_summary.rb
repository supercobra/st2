class ColumnSummary < Gizmo
  CUSTOM_FIELDS = {
    value: :string1,
    width_in_px: :int1
  }.freeze
  include HasCustomFields

  SUM = 'SUM'
  AVG = 'AVG'
  COUNT = 'COUNT'
  MIN = 'MIN'
  MAX = 'MAX'

  SUMMARY_TYPES = [SUM, AVG, COUNT, MIN, MAX].freeze
  rules = %w[SUM COUNT AVG MIN MAX].freeze

  belongs_to :x_column, foreign_key: :gizmo_id, class_name: Gizmo.to_s

  validates_inclusion_of :value, in: rules

  def compute_value
    case(value)
    when SUM
      x_column.cells.sum(:int1)
    when AVG
      x_column.cells.average(:int1)
    when COUNT
      x_column.cells.count(:int1)
    when MIN
      x_column.cells.min(:int1)
    when MAX
      x_column.cells.max(:int1)
    else
      raise "Invalid summary type: #{value}"
    end
  end
end

