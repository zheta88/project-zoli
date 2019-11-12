require 'test_helper'

class ContactanosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get contactanos_index_url
    assert_response :success
  end

end
