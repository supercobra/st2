require "test_helper"

class GizmosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @gizmo = gizmos(:one)
  end

  test "should get index" do
    get gizmos_url
    assert_response :success
  end

  test "should get new" do
    get new_gizmo_url
    assert_response :success
  end

  test "should create gizmo" do
    assert_difference("Gizmo.count") do
      post gizmos_url, params: { gizmo: { bool1: @gizmo.bool1, gizmo_id_id: @gizmo.gizmo_id_id, int1: @gizmo.int1, name: @gizmo.name, text1: @gizmo.text1, text2: @gizmo.text2, type: @gizmo.type } }
    end

    assert_redirected_to gizmo_url(Gizmo.last)
  end

  test "should show gizmo" do
    get gizmo_url(@gizmo)
    assert_response :success
  end

  test "should get edit" do
    get edit_gizmo_url(@gizmo)
    assert_response :success
  end

  test "should update gizmo" do
    patch gizmo_url(@gizmo), params: { gizmo: { bool1: @gizmo.bool1, gizmo_id_id: @gizmo.gizmo_id_id, int1: @gizmo.int1, name: @gizmo.name, text1: @gizmo.text1, text2: @gizmo.text2, type: @gizmo.type } }
    assert_redirected_to gizmo_url(@gizmo)
  end

  test "should destroy gizmo" do
    assert_difference("Gizmo.count", -1) do
      delete gizmo_url(@gizmo)
    end

    assert_redirected_to gizmos_url
  end
end
