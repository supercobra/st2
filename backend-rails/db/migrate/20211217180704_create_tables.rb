class CreateTables < ActiveRecord::Migration[7.0]
  def change

    create_table :accounts do |t|
      t.string :name
      t.timestamps
    end

    create_table :gizmos do |t|
      t.string :type, limit: 55, null: false
      t.bigint :gizmo_id
      t.bigint :account_id
      t.string :name
      t.string :description
      t.integer :position, default: 0, null: false
      t.string :string1
      t.string :string2
      t.string :string3
      t.string :string4
      t.string :string5
      t.string :string6
      t.string :string7
      t.string :string8
      t.string :string9
      t.string :string10
      t.string :string11
      t.string :string12
      t.string :string13
      t.text :text1
      t.text :text2
      t.text :text3
      t.text :text4
      t.datetime :datetime1
      t.datetime :datetime2
      t.datetime :datetime3
      t.datetime :datetime4
      t.boolean :bool1
      t.boolean :bool2
      t.boolean :bool3
      t.boolean :bool4
      t.boolean :bool5
      t.boolean :bool6
      t.boolean :bool7
      t.boolean :bool8
      t.boolean :bool9
      t.bigint :int1
      t.bigint :int2
      t.bigint :int3
      t.bigint :int4
      t.bigint :int5
      t.bigint :int6
      t.bigint :int7
      t.bigint :int8
      t.bigint :int9
      t.timestamps

      t.index :gizmo_id
      t.index :type
      t.index :position
      t.index :datetime1
      t.index :datetime2
      t.index :datetime3
      t.index :datetime4
      t.index :int1
      t.index :int2
      t.index :int3
      t.index :int4
      t.index :int5
      t.index :int6
      t.index :int7
      t.index :int8
      t.index :int9
      t.index :bool1
      t.index :bool2
      t.index :bool3
      t.index :bool4
      t.index :bool5
      t.index :bool6
      t.index :bool7
      t.index :bool8
      t.index :bool9
    end
  end
end
