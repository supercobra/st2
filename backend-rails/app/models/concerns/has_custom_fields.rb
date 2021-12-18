module HasCustomFields
  extend ActiveSupport::Concern

  included do
    # Setup custom fields if needed
    # e.g.:
    # CUSTOM_FIELDS = {
    #   color: :string1, # new_name, old_name
    #   help: :string2
    # }
    # include HasCustomFields # add this include immediately after the CUSTOM_FIELDS declaration
    # not before or it won't work.
    if defined? self::CUSTOM_FIELDS
      self::CUSTOM_FIELDS.each do |new_name, old_name|
        alias_attribute new_name, old_name
      end
    end
  end
end

