class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :title
      t.text :body
      t.belongs_to :handymen, null: false, foreign_key: true

      t.timestamps
    end
  end
end
