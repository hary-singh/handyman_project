class CreateHandymen < ActiveRecord::Migration[6.1]
  def change
    create_table :handymen do |t|
      t.string :title
      t.string :specialty
      t.boolean :available

      t.timestamps
    end
  end
end
