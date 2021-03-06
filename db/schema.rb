# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_24_093714) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "media", force: :cascade do |t|
    t.string "title"
    t.text "plot"
    t.integer "release_year"
    t.integer "ratings"
    t.string "genre"
    t.string "poster"
    t.string "media_type"
    t.string "streaming_service"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "media_users", force: :cascade do |t|
    t.bigint "media_id", null: false
    t.bigint "user_id", null: false
    t.boolean "bookmarked", default: false
    t.boolean "excluded", default: false
    t.boolean "watched", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["media_id"], name: "index_media_users_on_media_id"
    t.index ["user_id"], name: "index_media_users_on_user_id"
  end

  create_table "surveys", force: :cascade do |t|
    t.string "genre"
    t.string "mood"
    t.string "media_type"
    t.string "ratings"
    t.string "release_year"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_surveys_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "first_name"
    t.string "last_name"
    t.boolean "netflix", default: false
    t.boolean "amazon", default: false
    t.boolean "disney_plus", default: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "media_users", "media", column: "media_id"
  add_foreign_key "media_users", "users"
  add_foreign_key "surveys", "users"
end
