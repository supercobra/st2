# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_17_180704) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "gizmos", force: :cascade do |t|
    t.string "type", limit: 55, null: false
    t.bigint "gizmo_id"
    t.bigint "account_id"
    t.string "name"
    t.string "description"
    t.integer "position", default: 0, null: false
    t.string "string1"
    t.string "string2"
    t.string "string3"
    t.string "string4"
    t.string "string5"
    t.string "string6"
    t.string "string7"
    t.string "string8"
    t.string "string9"
    t.string "string10"
    t.string "string11"
    t.string "string12"
    t.string "string13"
    t.text "text1"
    t.text "text2"
    t.text "text3"
    t.text "text4"
    t.datetime "datetime1", precision: 6
    t.datetime "datetime2", precision: 6
    t.datetime "datetime3", precision: 6
    t.datetime "datetime4", precision: 6
    t.boolean "bool1"
    t.boolean "bool2"
    t.boolean "bool3"
    t.boolean "bool4"
    t.boolean "bool5"
    t.boolean "bool6"
    t.boolean "bool7"
    t.boolean "bool8"
    t.boolean "bool9"
    t.bigint "int1"
    t.bigint "int2"
    t.bigint "int3"
    t.bigint "int4"
    t.bigint "int5"
    t.bigint "int6"
    t.bigint "int7"
    t.bigint "int8"
    t.bigint "int9"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["bool1"], name: "index_gizmos_on_bool1"
    t.index ["bool2"], name: "index_gizmos_on_bool2"
    t.index ["bool3"], name: "index_gizmos_on_bool3"
    t.index ["bool4"], name: "index_gizmos_on_bool4"
    t.index ["bool5"], name: "index_gizmos_on_bool5"
    t.index ["bool6"], name: "index_gizmos_on_bool6"
    t.index ["bool7"], name: "index_gizmos_on_bool7"
    t.index ["bool8"], name: "index_gizmos_on_bool8"
    t.index ["bool9"], name: "index_gizmos_on_bool9"
    t.index ["datetime1"], name: "index_gizmos_on_datetime1"
    t.index ["datetime2"], name: "index_gizmos_on_datetime2"
    t.index ["datetime3"], name: "index_gizmos_on_datetime3"
    t.index ["datetime4"], name: "index_gizmos_on_datetime4"
    t.index ["gizmo_id"], name: "index_gizmos_on_gizmo_id"
    t.index ["int1"], name: "index_gizmos_on_int1"
    t.index ["int2"], name: "index_gizmos_on_int2"
    t.index ["int3"], name: "index_gizmos_on_int3"
    t.index ["int4"], name: "index_gizmos_on_int4"
    t.index ["int5"], name: "index_gizmos_on_int5"
    t.index ["int6"], name: "index_gizmos_on_int6"
    t.index ["int7"], name: "index_gizmos_on_int7"
    t.index ["int8"], name: "index_gizmos_on_int8"
    t.index ["int9"], name: "index_gizmos_on_int9"
    t.index ["position"], name: "index_gizmos_on_position"
    t.index ["type"], name: "index_gizmos_on_type"
  end

end
