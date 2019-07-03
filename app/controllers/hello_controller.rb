class HelloController < ApplicationController
  def index
    @posts = [
      {
        id: 1,
        title: "Clean code",
        publishedBy: {
          name: "Uncle Bob"
        }
      },
      {
        id: 2,
        title: "Clean code 2",
        publishedBy: {
          name: "Other Uncle Bob"
        }
      }
    ]
    @greet_from_controller = 'Hello from controller'
  end
end
