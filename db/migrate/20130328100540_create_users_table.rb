class CreateUsersTable < ActiveRecord::Migration
  def change
    create_table :users do |c|
      c.string :email
      c.string :password_hash
    end
  end
end
