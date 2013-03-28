get '/' do
  erb :index
end

post '/' do
  # post.update_attributes(params[:post])

  p = Photo.new
  p.photo_string = params['photo']
  p.user_id = 5
  p.save!

  redirect "/i/#{p.short_url}"
end

get '/i/:short_url' do
  @photo = Photo.find_by_short_url(params[:short_url])
  erb :single_view
end

get '/user/:user_id' do
  @user = User.find(params[:user_id])
  @photos = Photo.where('user_id = ?', @user.id)

  erb :user_page
end
