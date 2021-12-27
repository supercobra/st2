class CreateTables < ActiveRecord::Migration[7.0]
  def change

    create_table :accounts do |t|
      t.string :name
      t.timestamps
    end

    create_table :gizmos do |t|
      t.string :type, limit: 55, null: false
      t.bigint :gizmo_id
      t.string :name
      t.string :description
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
      t.integer :int1
      t.integer :int2
      t.integer :int3
      t.integer :int4
      t.integer :int5
      t.integer :int6
      t.integer :int7
      t.integer :int8
      t.integer :int9
      t.bigint :big_int1
      t.bigint :big_int2
      t.bigint :big_int3
      t.bigint :big_int4
      t.bigint :big_int5
      t.bigint :big_int6
      t.bigint :big_int7
      t.bigint :big_int8
      t.bigint :big_int9
      t.timestamps

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
      t.index :big_int1
      t.index :big_int2
      t.index :big_int3
      t.index :big_int4
      t.index :big_int5
      t.index :big_int6
      t.index :big_int7
      t.index :big_int8
      t.index :big_int9
      t.index :bool1
      t.index :bool2
      t.index :bool3
      t.index :bool4
      t.index :bool5
      t.index :bool6
      t.index :bool7
      t.index :bool8
      t.index :bool9
      t.index :gizmo_id
      t.index :type
    end
  end
end