require 'test_helper'

class ImagesControllerTest < ActionController::TestCase

  # called before every single test
  def setup
    @map = maps(:saugus)
    @warpable = warpables(:one)
  end 

  # called after every single test
  def teardown
  end

  test "should get react" do
    get :react, id: @warpable.id, reaction_type: 'like'
    assert_response :success
  end

  test "should get unreact" do
    get :react, id: @warpable.id, reaction_type: 'like'
    assert_response :success
  end

end
