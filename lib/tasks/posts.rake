namespace :posts do
  desc "seed Posts"
  task seed_posts: :environment do
    Post.destroy_all 

    # create 20 posts
    20.times do
      Post.create(
        title: Faker::Lorem.sentence(word_count: 3),
        body: Faker::Lorem.paragraph(sentence_count: 3)
      )
    end
  end
end
