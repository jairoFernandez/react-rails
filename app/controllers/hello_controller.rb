class HelloController < ApplicationController
  def index
    @posts = [
      {
        title: "Clean code",
        publishedBy: {
          name: "Uncle Bob"
        }
      },
      {
        title: "Clean code 2",
        publishedBy: {
          name: "Other Uncle Bob"
        }
      }
    ]
    @greet_from_controller = 'Hello from controller'
  end
end
