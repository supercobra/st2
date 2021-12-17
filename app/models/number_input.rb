# frozen_string_literal: true

# == Schema Information
#
# Table name: gizmos
#
#  id                 :bigint(8)        not null, primary key
#  big_decimal1       :decimal(20, 9)
#  big_decimal2       :decimal(20, 9)
#  big_decimal3       :decimal(20, 9)
#  big_decimal4       :decimal(20, 9)
#  big_decimal5       :decimal(20, 9)
#  big_decimal6       :decimal(20, 9)
#  big_int1           :bigint(8)
#  big_int2           :bigint(8)
#  big_int3           :bigint(8)
#  big_int4           :bigint(8)
#  big_int5           :bigint(8)
#  big_int6           :bigint(8)
#  big_int7           :bigint(8)
#  big_int8           :bigint(8)
#  big_int9           :bigint(8)
#  bool1              :boolean
#  bool2              :boolean
#  bool3              :boolean
#  bool4              :boolean
#  bool5              :boolean
#  bool6              :boolean
#  bool7              :boolean
#  bool8              :boolean
#  bool9              :boolean
#  datetime1          :datetime
#  datetime2          :datetime
#  datetime3          :datetime
#  datetime4          :datetime
#  description        :string
#  family             :string(33)       default("GIZMO"), not null
#  int1               :integer
#  int2               :integer
#  int3               :integer
#  int4               :integer
#  int5               :integer
#  int6               :integer
#  int7               :integer
#  int8               :integer
#  int9               :integer
#  is_hidden          :boolean          default(FALSE)
#  is_passing         :boolean
#  name               :string
#  position           :integer          default(0), not null
#  string1            :string
#  string10           :string
#  string11           :string
#  string12           :string
#  string13           :string
#  string2            :string
#  string3            :string
#  string4            :string
#  string5            :string
#  string6            :string
#  string7            :string
#  string8            :string
#  string9            :string
#  type               :string(55)       not null
#  var_name           :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  card_id            :bigint(8)
#  gizmo_id           :bigint(8)
#  template_origin_id :bigint(8)
#
# Indexes
#
#  index_gizmo_type                    (type)
#  index_gizmos_on_big_int1            (big_int1)
#  index_gizmos_on_big_int2            (big_int2)
#  index_gizmos_on_big_int3            (big_int3)
#  index_gizmos_on_big_int4            (big_int4)
#  index_gizmos_on_big_int5            (big_int5)
#  index_gizmos_on_big_int6            (big_int6)
#  index_gizmos_on_big_int7            (big_int7)
#  index_gizmos_on_big_int8            (big_int8)
#  index_gizmos_on_big_int9            (big_int9)
#  index_gizmos_on_bool5               (bool5)
#  index_gizmos_on_bool6               (bool6)
#  index_gizmos_on_bool7               (bool7)
#  index_gizmos_on_bool8               (bool8)
#  index_gizmos_on_bool9               (bool9)
#  index_gizmos_on_card_id             (card_id)
#  index_gizmos_on_family              (family)
#  index_gizmos_on_gizmo_id            (gizmo_id)
#  index_gizmos_on_is_passing          (is_passing)
#  index_gizmos_on_template_origin_id  (template_origin_id)
#
# Foreign Keys
#
#  fk_rails_...  (card_id => cards.id)
#

class NumberInput < Gizmo

  CUSTOM_FIELDS = {
    value: :int1,
    is_required: :bool1,
    help: :string4,
    placeholder: :string2,
    value_default: :int2,
  }.freeze
  include HasCustomFields

  validates :value, numericality: true, allow_nil: true
  validates :value_default, numericality: true, allow_nil: true

  def to_html(debug = false)
    str = ''
    str += "#{self.name}: " unless self.name.nil?
    str += "#{self.value}"

    str
  end

  def to_s(debug = false)
    str = ''
    str += "#{self.name}: " unless self.name.nil?
    str += "#{self.value}"

    str
  end
end
