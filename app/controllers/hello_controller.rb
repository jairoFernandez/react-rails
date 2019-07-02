class HelloController < ApplicationController
  def index
    @greet_from_controller = 'Hello from controller'
  end
end
