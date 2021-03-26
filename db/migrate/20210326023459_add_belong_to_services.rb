class AddBelongToServices < ActiveRecord::Migration[6.1]
  def change
    add_reference :services, :handyman, null: false, foreign_key: true
  end
end
