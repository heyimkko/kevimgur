class Photo < ActiveRecord::Base
  belongs_to :user
  mount_uploader :photo_string, PhotoUploader

  before_save :create_short_url

  def create_short_url
    self.short_url = SecureRandom.hex[0..5] if self.short_url.nil?
  end
end
