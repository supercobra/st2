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

  create_table "gizmos", force: :cascade do |t|
    t.string "type", limit: 55, null: false
    t.bigint "gizmo_id"
    t.string "name"
    t.string "description"
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
    t.integer "int1"
    t.integer "int2"
    t.integer "int3"
    t.integer "int4"
    t.integer "int5"
    t.integer "int6"
    t.integer "int7"
    t.integer "int8"
    t.integer "int9"
    t.bigint "big_int1"
    t.bigint "big_int2"
    t.bigint "big_int3"
    t.bigint "big_int4"
    t.bigint "big_int5"
    t.bigint "big_int6"
    t.bigint "big_int7"
    t.bigint "big_int8"
    t.bigint "big_int9"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["big_int1"], name: "index_gizmos_on_big_int1"
    t.index ["big_int2"], name: "index_gizmos_on_big_int2"
    t.index ["big_int3"], name: "index_gizmos_on_big_int3"
    t.index ["big_int4"], name: "index_gizmos_on_big_int4"
    t.index ["big_int5"], name: "index_gizmos_on_big_int5"
    t.index ["big_int6"], name: "index_gizmos_on_big_int6"
    t.index ["big_int7"], name: "index_gizmos_on_big_int7"
    t.index ["big_int8"], name: "index_gizmos_on_big_int8"
    t.index ["big_int9"], name: "index_gizmos_on_big_int9"
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
    t.index ["type"], name: "index_gizmos_on_type"
  end

end
