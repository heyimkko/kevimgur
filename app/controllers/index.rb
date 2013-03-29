get '/' do


  erb :index, :layout => false
end

post '/' do
  # post.update_attributes(params[:post])
  puts "%" * 100
  puts params
  puts "%" * 100

  p = Photo.new
  p.photo_string = params['photo']
  p.user_id = current_user.id
  p.save!

  Cloudinary::Uploader.upload(params['photo'], options = {})

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

# TODO: get '/:short_url' to redirect to http://longurl. Do this after other routes
# to avoid conflicts, esp if you plan to create separate controllers later


# USER SIGNUP/AUTH/LOGOUT

post '/login' do
  @user = User.find_by_email(params[:user]["email"])
  if User.authenticate(params[:user])
    session[:id] = @user.id
    redirect "/"
  else
    erb :index
  end
end

post '/signup' do
  @user = User.new(params[:user])
  puts params[:password]
  unless @user.save
    erb :index
  else
    session[:id] = @user.id

    redirect "/"
  end
end

get '/logout' do
  session.clear
  redirect '/'
end

