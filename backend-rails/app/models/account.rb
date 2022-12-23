class Account < ApplicationRecord
  has_many :workspaces, dependent: :destroy, class_name: Gizmo.to_s# , foreign_key: 'gizmo_id'
end
