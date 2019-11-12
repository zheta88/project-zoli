require 'test_helper'

class RepasemosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get repasemos_index_url
    assert_response :success
  end

end
