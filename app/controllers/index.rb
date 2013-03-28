get '/' do
  erb :index
end

post '/' do
  # post.update_attributes(params[:post])

  p = Photo.new
  p.photo_string = params['photo']
  p.user_id = 5  
  p.save!

  redirect "/user/#{current_user.id}"
end
     
