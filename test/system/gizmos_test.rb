require "application_system_test_case"

class GizmosTest < ApplicationSystemTestCase
  setup do
    @gizmo = gizmos(:one)
  end

  test "visiting the index" do
    visit gizmos_url
    assert_selector "h1", text: "Gizmos"
  end

  test "should create gizmo" do
    visit gizmos_url
    click_on "New gizmo"

    check "Bool1" if @gizmo.bool1
    fill_in "Gizmo id", with: @gizmo.gizmo_id_id
    fill_in "Int1", with: @gizmo.int1
    fill_in "Name", with: @gizmo.name
    fill_in "Text1", with: @gizmo.text1
    fill_in "Text2", with: @gizmo.text2
    fill_in "Type", with: @gizmo.type
    click_on "Create Gizmo"

    assert_text "Gizmo was successfully created"
    click_on "Back"
  end

  test "should update Gizmo" do
    visit gizmo_url(@gizmo)
    click_on "Edit this gizmo", match: :first

    check "Bool1" if @gizmo.bool1
    fill_in "Gizmo id", with: @gizmo.gizmo_id_id
    fill_in "Int1", with: @gizmo.int1
    fill_in "Name", with: @gizmo.name
    fill_in "Text1", with: @gizmo.text1
    fill_in "Text2", with: @gizmo.text2
    fill_in "Type", with: @gizmo.type
    click_on "Update Gizmo"

    assert_text "Gizmo was successfully updated"
    click_on "Back"
  end

  test "should destroy Gizmo" do
    visit gizmo_url(@gizmo)
    click_on "Destroy this gizmo", match: :first

    assert_text "Gizmo was successfully destroyed"
  end
end
