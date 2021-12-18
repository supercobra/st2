
module Serializable
  extend ActiveSupport::Concern

  included do
    # nothing
  end

  def get_my_serializer
    classname = self.class.name + 'Serializer'
    classname.constantize
  end
end
