class CreatePhotosTable < ActiveRecord::Migration
  def change
    create_table :photos do |c|
      c.string :photo_string
      c.integer :user_id
      c.string :short_url
    end
  end
end
