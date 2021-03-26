5.times do
  handyman = Handyman.create(
    title: Faker::DcComics.villain,
    specialty: Faker::DcComics.heroine
  )

  3.times do
    service = Service.create(
      title: Faker::DcComics.title,
      body: Faker::Lorem.paragraph,
      handyman_id: handyman.id
    )

    Comment.create(
      body: Faker::Lorem.paragraph,
      title: Faker::DcComics.hero,
      service_id: service.id
    )
  end
end

puts 'Data has been seeded'