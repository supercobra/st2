class KolumnSummary < Gizmo
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

  belongs_to :kolumn, foreign_key: :gizmo_id, class_name: Gizmo.to_s

  validates_inclusion_of :value, in: rules

  def compute_value
    case value
    when SUM
      kolumn.cells.sum(:int1)
    when AVG
      kolumn.cells.average(:int1)
    when COUNT
      kolumn.cells.count(:int1)
    when MIN
      kolumn.cells.min(:int1)
    when MAX
      kolumn.cells.max(:int1)
    else
      raise "Invalid summary type: #{value}"
    end
  end
end
